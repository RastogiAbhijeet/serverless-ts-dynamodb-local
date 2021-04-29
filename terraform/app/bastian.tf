
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

resource "aws_instance" "bastian" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = var.bastian_config.instance_type
  network_interface {
    network_interface_id = aws_network_interface.bastian_ani.id
    device_index         = 0
  }

  key_name = "pxboost-bastian-${var.env}"

  tags = {
    Name            = "pxboost-bastian-${var.env}-${var.tlrs}"
    Environment     = var.env
    ApplicationID   = "pxboost-${var.tlrs}"
    ApplicationName = "pxboost"
  }
}

resource "aws_security_group" "bastian" {
  name        = "bastian_ec2"
  description = "Security Group for setting up bastian"
  vpc_id      = aws_vpc.main.id


  tags = {
    Name            = "pxboost-sg-bastian-${var.env}-${var.tlrs}"
    Environment     = var.env
    ApplicationID   = "pxboost-${var.tlrs}"
    ApplicationName = "pxboost"
  }
}

# This rule is apply to the security group which envelops the 
# BASTIAN host
resource "aws_security_group_rule" "ingress_bastian_ssh" {
  type              = "ingress"
  from_port         = 22
  to_port           = 22
  protocol          = "TCP"
  security_group_id = aws_security_group.bastian.id
  cidr_blocks       = ["0.0.0.0/0"]
}

resource "aws_network_interface" "bastian_ani" {
  subnet_id       = var.public_subnet_1_id
  security_groups = [aws_security_group.bastian.id]
}
