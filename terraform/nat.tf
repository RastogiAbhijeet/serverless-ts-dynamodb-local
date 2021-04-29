resource "aws_eip" "nat" {
  vpc = true
  tags = {
    Name            = "pxboost-eip-${var.env}-${random.tlrs.hex}"
    Environment     = var.env
    ApplicationID   = "pxboost-${random.tlrs.hex}"
    ApplicationName = "pxboost"
  }
}


resource "aws_nat_gateway" "public" {
  allocation_id = aws_eip.nat.id
  subnet_id     = aws_subnet.public.id
  depends_on = [
    aws_internet_gateway.gw
  ]

  tags = {
    Name            = "pxboost-nat-${var.env}-${random.tlrs.hex}"
    Environment     = var.env
    ApplicationID   = "pxboost-${random.tlrs.hex}"
    ApplicationName = "pxboost"
  }
}
