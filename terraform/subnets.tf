resource "aws_subnet" "public" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.0.0/24"
  availability_zone = "us-east-1a"

  tags = {
    Name            = "${var.app_name}-pub-sn-${random_id.tlrs.hex}"
    ApplicationID   = "${var.app_name}-${random_id.tlrs.hex}"
    ApplicationName = var.app_name
  }
}

// Creating a private subnet for Priavte aws hosting
resource "aws_subnet" "app_private_1" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "us-east-1a"

  tags = {
    Name            = "${var.app_name}-pr-sn-1-${random_id.tlrs.hex}"
    ApplicationID   = "${var.app_name}-${random_id.tlrs.hex}"
    ApplicationName = var.app_name
  }

}

resource "aws_subnet" "app_private_2" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.3.0/24"
  availability_zone = "us-east-1b"

  tags = {
    Name            = "${var.app_name}-pr-sn-2-${random_id.tlrs.hex}"
    ApplicationID   = "${var.app_name}-${random_id.tlrs.hex}"
    ApplicationName = var.app_name
  }
}
