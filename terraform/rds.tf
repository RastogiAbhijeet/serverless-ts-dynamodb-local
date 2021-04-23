data "aws_rds_engine_version" "main" {
  engine  = "postgres"
  version = "12.6" // Freeze to 11.x
 }

resource "aws_db_instance" "dev" {
  allocated_storage      = 10
  engine                 = data.aws_rds_engine_version.main.engine
  apply_immediately      = true
  availability_zone      = var.zone
  engine_version         = data.aws_rds_engine_version.main.version
  instance_class         = "db.t2.micro"
  username               = var.rds_dev_username
  password               = var.rds_dev_password
  port                   = 5432
  vpc_security_group_ids = [aws_security_group.rds.id]
  db_subnet_group_name   = aws_db_subnet_group.rds.name
}

resource "aws_db_subnet_group" "rds" {
  name       = "rds-main"
  subnet_ids = [aws_subnet.app_private_1.id, aws_subnet.app_private_2.id]
}

// Bastion Host 
data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  owners = ["099720109477"] # Canonical
}



resource "aws_security_group" "bastian_ec2" {
  name        = "bastian_ec2"
  description = "Security Group for setting up bastian"
  vpc_id      = aws_vpc.main.id
}

resource "aws_security_group_rule" "ec2_ingress" {
  type              = "ingress"
  from_port         = 22
  to_port           = 22
  protocol          = "tcp"
  security_group_id = aws_security_group.bastian_ec2.id
  cidr_blocks       = ["0.0.0.0/0"]
}

resource "aws_network_interface" "bastian_ani" {
  subnet_id       = aws_subnet.public.id
  security_groups = [aws_security_group.bastian_ec2.id]
}

resource "aws_instance" "bastian" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"
  network_interface {
    network_interface_id = aws_network_interface.bastian_ani.id
    device_index         = 0
  }
}
