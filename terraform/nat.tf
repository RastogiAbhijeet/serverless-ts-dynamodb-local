resource "aws_eip" "nat" {
  vpc = true
  tags = {
    Name            = "${var.app_name}-eip-${random_id.tlrs.hex}"
    ApplicationID   = "${var.app_name}-${random_id.tlrs.hex}"
    ApplicationName = var.app_name
  }
}


resource "aws_nat_gateway" "public" {
  allocation_id = aws_eip.nat.id
  subnet_id     = aws_subnet.public.id
  depends_on = [
    aws_internet_gateway.gw
  ]

  tags = {
    Name            = "${var.app_name}-nat-${random_id.tlrs.hex}"
    ApplicationID   = "${var.app_name}-${random_id.tlrs.hex}"
    ApplicationName = var.app_name
  }
}
