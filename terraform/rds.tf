data "aws_rds_engine_version" "main" {
  engine  = "postgres"
  version = "12.6"
}

resource "aws_db_instance" "dev" {
  allocated_storage      = 10
  engine                 = data.aws_rds_engine_version.main.engine
  apply_immediately      = true
  availability_zone      = var.zone
  engine_version         = data.aws_rds_engine_version.main.version
  instance_class         = "db.t2.micro"
  username               = var.rds_dev_username
  password               = var.rds_dev_password
  port                   = 5432
  vpc_security_group_ids = [aws_security_group.rds.id]
  db_subnet_group_name   = aws_db_subnet_group.rds.name
}

resource "aws_db_subnet_group" "rds" {
  name       = "rds-main"
  subnet_ids = [aws_subnet.app_private_1.id, aws_subnet.app_private_2.id]
}
