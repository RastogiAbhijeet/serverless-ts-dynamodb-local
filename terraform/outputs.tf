output "sg_dev" {
  value = {
    rds    = module.dev.sg_rds_id
    lambda = module.dev.sg_lambda_id
    ec     = module.dev.sg_ec_id
  }
}
output "sg_staging" {
  value = {
    rds    = module.staging.sg_rds_id
    lambda = module.staging.sg_lambda_id
    ec     = module.staging.sg_ec_id
  }
}

output "sg_prod" {
  value = {
    rds    = module.prod.sg_rds_id
    lambda = module.prod.sg_lambda_id
    ec     = module.prod.sg_ec_id
  }
}


output "private_subnet_1_id" {
  value = aws_subnet.app_private_1.id
}

output "private_subnet_2_id" {
  value = aws_subnet.app_private_2.id
}

output "public_subnet" {
  value = aws_subnet.public.id
}
