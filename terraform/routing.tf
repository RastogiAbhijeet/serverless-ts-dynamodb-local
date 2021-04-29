
/*
    PUBLIC ROUTE
*/
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name            = "${var.app_name}-rt-pub-${random_id.tlrs.hex}"
    ApplicationID   = "${var.app_name}-${random_id.tlrs.hex}"
    ApplicationName = var.app_name
  }
}

resource "aws_route_table_association" "public" {
  subnet_id      = aws_subnet.public.id
  route_table_id = aws_route_table.public.id
}

resource "aws_route" "public_route" {
  route_table_id         = aws_route_table.public.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.gw.id
}

/*
    PRIVATE ROUTE
*/

resource "aws_route_table" "private" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name            = "${var.app_name}-rt-private-${random_id.tlrs.hex}"
    ApplicationID   = "${var.app_name}-${random_id.tlrs.hex}"
    ApplicationName = var.app_name
  }
}

resource "aws_route_table_association" "private_1" {
  subnet_id      = aws_subnet.app_private_1.id
  route_table_id = aws_route_table.private.id
}

resource "aws_route_table_association" "private_2" {
  subnet_id      = aws_subnet.app_private_2.id
  route_table_id = aws_route_table.private.id
}

resource "aws_route" "private_route_2" {
  route_table_id         = aws_route_table.private.id
  destination_cidr_block = "0.0.0.0/0"
  nat_gateway_id         = aws_nat_gateway.public.id
}
