//Do not mention the version of redis as it will automatically pick the latest one 
//Terraform is having issues with mentioned the engine_version as 6.x
resource "aws_elasticache_cluster" "redis" {
  cluster_id           = "pxboost-ec-${var.env}-${tlrs}"
  engine               = var.elastic_cache_config.engine
  node_type            = var.elastic_cache_config.node_type
  num_cache_nodes      = var.elastic_cache_config.num_cache_nodes
  parameter_group_name = "default.redis6.x"
  port                 = var.elastic_cache_config.port
  security_group_ids   = [aws_security_group.pxboost-redis-sg.id]
  subnet_group_name    = aws_elasticache_subnet_group.pxboost_ec_sg.name

  tags = {
    Name           = "pxboost-ec-rds-${var.env}-${var.tlrs}"
    Environment    = var.env
    ApplicationID = "pxboost-${var.tlrs}"
    ApplicationName = "pxboost"
  }


}

resource "aws_elasticache_subnet_group" "ec" {
  name       = "pxboost-ec-sn-grp-${var.env}-${tlrs}"
  subnet_ids = [var.private_subnet_1_id, var.private_subnet_2_id]
}

resource "aws_security_group" "ec" {
  name   = "pxboost-sg-ec-${var.env}-${tlrs}"
  vpc_id = var.vpc_id

  tags = {
    Name           = "pxboost-sg-ec-${var.env}-${var.tlrs}"
    Environment    = var.env
    ApplicationID = "pxboost-${var.tlrs}"
    ApplicationName = "pxboost"
  }

}

resource "aws_security_group_rule" "ingress_ec_lambda" {
  type                     = "ingress"
  from_port                = var.elastic_cache_config.port
  to_port                  = var.elastic_cache_config.port
  protocol                 = "TCP"
  security_group_id        = aws_security_group.ec.id
  source_security_group_id = aws_security_group.lambda.id
}
