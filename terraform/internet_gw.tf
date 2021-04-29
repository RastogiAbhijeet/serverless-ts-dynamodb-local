resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name            = "${var.app_name}-igw-${random_id.tlrs.hex}"
    ApplicationID   = "${var.app_name}-${random_id.tlrs.hex}"
    ApplicationName = var.app_name
  }
}
