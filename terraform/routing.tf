
/*
    PUBLIC ROUTE
*/
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id
}

resource "aws_route_table_association" "public" {
  subnet_id      = aws_subnet.public.id
  route_table_id = aws_route_table.public.id
}

# resource "aws_route" "public_route_1" {
#   route_table_id         = aws_route_table.public.id
#   destination_cidr_block = aws_vpc.main.cidr_block
#   local_gateway_id = data.aws_ec2_local_gateway.selected.id
# }

resource "aws_route" "public_route_2" {
  route_table_id         = aws_route_table.public.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.gw.id
}

/*
    PRIVATE ROUTE
*/

resource "aws_route_table" "private" {
  vpc_id = aws_vpc.main.id
}

resource "aws_route_table_association" "private_1" {
  subnet_id      = aws_subnet.app_private_1.id
  route_table_id = aws_route_table.private.id
}

resource "aws_route_table_association" "private_2" {
  subnet_id      = aws_subnet.app_private_2.id
  route_table_id = aws_route_table.private.id
}

# resource "aws_route" "private_route_1" {
#   route_table_id         = aws_route_table.private.id
#   destination_cidr_block = aws_vpc.main.cidr_block
#   target                 = "local"
# }

resource "aws_route" "private_route_2" {
  route_table_id         = aws_route_table.private.id
  destination_cidr_block = "0.0.0.0/0"
  nat_gateway_id         = aws_nat_gateway.public.id
}
