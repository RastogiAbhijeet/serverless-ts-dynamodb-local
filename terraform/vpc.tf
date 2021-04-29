resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name            = "${var.app_name}-vpc-${random_id.tlrs.hex}"
    ApplicationID   = "${var.app_name}-${random_id.tlrs.hex}"
    ApplicationName = var.app_name
  }
}
