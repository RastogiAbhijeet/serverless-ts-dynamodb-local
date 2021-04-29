resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name            = "pxboost-igw-${var.env}-${random.tlrs.hex}"
    Environment     = var.env
    ApplicationID   = "pxboost-${random.tlrs.hex}"
    ApplicationName = "pxboost"
  }
}
