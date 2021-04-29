output "sg_rds_id" {
  value = aws_security_group.rds.id
}

output "sg_lambda_id" {
  value = aws_security_group.lambda.id
}

output "sg_ec_id" {
  value = aws_security_group.ec.id
}
