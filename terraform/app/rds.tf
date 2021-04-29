data "aws_rds_engine_version" "main" {
  engine  = "postgres"
  version = "12.6" // Freeze to 11.x
}

// Please change the user name password after the instance has been created
resource "aws_db_instance" "rds" {
  allocated_storage      = 10
  engine                 = data.aws_rds_engine_version.main.engine
  apply_immediately      = true
  availability_zone      = var.zone
  engine_version         = data.aws_rds_engine_version.main.version
  instance_class         = var.rds_config.instance_class
  name                   = "postgres"
  identifier             = "pxboost-db-${var.env}"
  username               = var.rds_config.username
  password               = var.rds_config.password
  port                   = var.rds_config.port
  vpc_security_group_ids = [aws_security_group.rds.id]
  db_subnet_group_name   = aws_db_subnet_group.rds.name
  skip_final_snapshot    = true

  tags = {
    Name            = "pxboost-db-${var.env}"
    Environment     = var.env
    ApplicationID   = "pxboost-${var.tlrs}"
    ApplicationName = "pxboost"
  }
}

resource "aws_db_subnet_group" "rds" {
  name       = "pxboost-sn-grp-db-${var.env}"
  subnet_ids = [var.private_subnet_1_id, var.private_subnet_2_id]
}

resource "aws_security_group" "rds" {
  name        = "pxboost-sg-rds-${var.env}-${var.tlrs}"
  description = "Allow"
  vpc_id      = var.vpc_id

  tags = {
    Name            = "pxboost-sg-rds-${var.env}-${var.tlrs}"
    Environment     = var.env
    ApplicationID   = "pxboost-${var.tlrs}"
    ApplicationName = "pxboost"
  }
}

resource "aws_security_group_rule" "ingress_rds_lambda" {
  type                     = "ingress"
  from_port                = var.rds_config.port
  to_port                  = var.rds_config.port
  protocol                 = "TCP"
  security_group_id        = aws_security_group.rds.id
  source_security_group_id = aws_security_group.lambda.id
}

resource "aws_security_group_rule" "ingress_rds_bastian" {
  type                     = "ingress"
  from_port                = var.rds_config.port
  to_port                  = var.rds_config.port
  protocol                 = "TCP"
  security_group_id        = aws_security_group.rds.id
  source_security_group_id = aws_security_group.bastian.id
}

resource "aws_security_group_rule" "egress_rds_vpc" {
  type              = "egress"
  from_port         = 0
  to_port           = 0
  protocol          = -1
  cidr_blocks       = [var.vpc_cidr]
  security_group_id = aws_security_group.rds.id
}
