resource "random_id" "tlrs" {
  byte_length = 4
}

module "dev" {
  source = "./app"
  # source = "git.hjdf.git?v"

  zone     = var.zone
  vpc_id   = aws_vpc.main.id
  vpc_cidr = aws_vpc.main.cidr_block

  private_subnet_1_id = aws_subnet.app_private_1.id
  private_subnet_2_id = aws_subnet.app_private_2.id
  public_subnet_1_id  = aws_subnet.public.id

  app_name = var.app_name
  env      = "dev"
  tlrs     = random_id.tlrs.hex

  rds_config = {
    allocated_storage = 10
    availability_zone = var.zone
    instance_class    = "db.t2.micro"
    username          = var.dev_pg_creds.user
    password          = var.dev_pg_creds.password
    port              = var.dev_pg_creds.port
  }

  elastic_cache_config = {
    engine          = "redis"
    node_type       = "cache.t2.micro"
    port            = var.ec_port
    num_cache_nodes = 1
  }

  bastian_config = {
    instance_type = "t2.nano"
  }
}


module "staging" {
  source = "./app"

  zone     = var.zone
  vpc_id   = aws_vpc.main.id
  vpc_cidr = aws_vpc.main.cidr_block

  private_subnet_1_id = aws_subnet.app_private_1.id
  private_subnet_2_id = aws_subnet.app_private_2.id
  public_subnet_1_id  = aws_subnet.public.id

  app_name = var.app_name
  env      = "staging"
  tlrs     = random_id.tlrs.hex

  rds_config = {
    allocated_storage = 10
    availability_zone = var.zone
    instance_class    = "db.t2.micro"
    username          = var.dev_pg_creds.user
    password          = var.dev_pg_creds.password
    port              = var.dev_pg_creds.port
  }

  elastic_cache_config = {
    engine          = "redis"
    node_type       = "cache.t2.micro"
    port            = var.ec_port
    num_cache_nodes = 1
  }

  bastian_config = {
    instance_type = "t2.nano"
  }
}

module "prod" {
  source = "./app"

  zone     = var.zone
  vpc_id   = aws_vpc.main.id
  vpc_cidr = aws_vpc.main.cidr_block

  private_subnet_1_id = aws_subnet.app_private_1.id
  private_subnet_2_id = aws_subnet.app_private_2.id
  public_subnet_1_id  = aws_subnet.public.id

  app_name = var.app_name
  env      = "prod"
  tlrs     = random_id.tlrs.hex

  rds_config = {
    allocated_storage = 10
    availability_zone = var.zone
    instance_class    = "db.t2.micro"
    username          = var.dev_pg_creds.user
    password          = var.dev_pg_creds.password
    port              = var.dev_pg_creds.port
  }

  elastic_cache_config = {
    engine          = "redis"
    node_type       = "cache.t2.micro"
    port            = var.ec_port
    num_cache_nodes = 1
  }

  bastian_config = {
    instance_type = "t2.nano"
  }
}

