


resource "aws_security_group" "bastian_ec2" {
  name        = "bastian_ec2"
  description = "Security Group for setting up bastian"
  vpc_id      = aws_vpc.main.id
}

# This rule is apply to the security group which envelops the 
# BASTIAN host
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


// You have to create public key for yourself and place it at .ssh/id_rsa.pub
resource "aws_key_pair" "admin" {
  key_name   = "bastian-key"
  public_key = file("~/.ssh/id_rsa.pub")
}

resource "aws_instance" "bastian" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"
  network_interface {
    network_interface_id = aws_network_interface.bastian_ani.id
    device_index         = 0
  }

  key_name = aws_key_pair.admin.key_name
}
