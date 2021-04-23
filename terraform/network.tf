resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
}

// Creating a private subnet for Priavte aws hosting
resource "aws_subnet" "app_private_1" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.0.0/24"
  availability_zone = "us-east-1a"
}

resource "aws_subnet" "app_private_2" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "us-east-1b"
}

resource "aws_subnet" "public" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.2.0/24"
  availability_zone = "us-east-1a"
}

resource "aws_eip" "nat" {
  vpc = true
}

resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.main.id
}


resource "aws_nat_gateway" "public" {
  allocation_id = aws_eip.nat.id
  subnet_id     = aws_subnet.public.id
  depends_on = [
    aws_internet_gateway.gw
  ]
}

/* 
    RDS Security Group
*/

resource "aws_security_group" "rds" {
  name        = "rds"
  description = "Allow"
  vpc_id      = aws_vpc.main.id
}

// This rule will allow connections to RDS only from
// security group in which our lambda would live.

// We have not used NACL as it would not have required 
// us to use IP address or CIDR blocks which do not 
// exist for lambda

resource "aws_security_group_rule" "rds_ingress" {
  type      = "ingress"
  from_port = 0
  to_port   = var.postgres_port
  protocol  = -1
  #   cidr_blocks              = [aws_vpc.main.cidr_block]
  security_group_id        = aws_security_group.rds.id
  source_security_group_id = aws_security_group.lambda.id
}

resource "aws_security_group_rule" "rds_ingress_ssh" {
  type      = "ingress"
  from_port = var.postgres_port
  to_port   = var.postgres_port
  protocol  = "tcp"
  #   cidr_blocks              = [aws_vpc.main.cidr_block]
  security_group_id        = aws_security_group.rds.id
  source_security_group_id = aws_security_group.bastian_ec2.id
}

resource "aws_security_group_rule" "rds_egress" {
  type              = "egress"
  from_port         = 0
  to_port           = 0
  protocol          = -1
  cidr_blocks       = [aws_vpc.main.cidr_block]
  security_group_id = aws_security_group.rds.id
}

/* 
    Lambda Security Group
*/

resource "aws_security_group" "lambda" {
  name        = "lambda"
  description = "Allow lambda to send request RDS"
  vpc_id      = aws_vpc.main.id
}

resource "aws_security_group_rule" "lambda" {
  type              = "egress"
  from_port         = 0
  to_port           = 0
  protocol          = -1
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.lambda.id
}


