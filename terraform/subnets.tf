resource "aws_subnet" "public" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0..0/22"
  availability_zone = "us-east-1a"

  tags = {
    Name            = "pxboost-pub-sn-${var.env}-${random.tlrs.hex}"
    Environment     = var.env
    ApplicationID   = "pxboost-${random.tlrs.hex}"
    ApplicationName = "pxboost"
  }
}
 
// Creating a private subnet for Priavte aws hosting
resource "aws_subnet" "app_private_1" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.1.0/22"
  availability_zone = "us-east-1a"

  tags = {
    Name            = "pxboost-pr-sn-1-${var.env}-${random.tlrs.hex}"
    Environment     = var.env
    ApplicationID   = "pxboost-${random.tlrs.hex}"
    ApplicationName = "pxboost"
  }

}

resource "aws_subnet" "app_private_2" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.3.0/22"
  availability_zone = "us-east-1b"

  tags = {
    Name            = "pxboost-pr-sn-2-${var.env}-${random.tlrs.hex}"
    Environment     = var.env
    ApplicationID   = "pxboost-${random.tlrs.hex}"
    ApplicationName = "pxboost"
  }
}
