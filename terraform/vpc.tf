resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name            = "pxboost-nat-${var.env}-${random.tlrs.hex}"
    Environment     = var.env
    ApplicationID   = "pxboost-${random.tlrs.hex}"
    ApplicationName = "pxboost"
  }
}
