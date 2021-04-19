output "sg_rds_id" {
  value = aws_security_group.rds.id
}

output "sg_lambda_id" {
  value = aws_security_group.lambda.id
}

output "private_subnet_1_id" {
    value=aws_subnet.app_private_1.id
}

output "private_subnet_2_id" {
    value=aws_subnet.app_private_2.id
}

output "public_subnet" {
    value=aws_subnet.public.id
}