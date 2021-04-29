variable "vpc_id" {
  type = string
}

variable "vpc_cidr" {
  type = string
}

variable "private_subnet_1_id" {
  type = string
}

variable "private_subnet_2_id" {
  type = string
}

variable "public_subnet_1_id" {
  type = string
}

variable "private_subnet_1_name" {
  type = string
}

variable "private_subnet_2_name" {
  type = string
}

variable "public_subnet_1_name" {
  type = string
}

variable "app_name" {
  type = string
}

variable "environment" {
  type = string
}

// Top level resource suffix
variable "tlrs" {
  type = string
}

variable "rds_config" {
  type = object({
    allocated_storage = string
    availability_zone = string
    instance_class    = string
    username          = string
    password          = string
    port              = number
  })
}

variable "elastic_cache_config" {
  type = object({
    engine          = string
    node_type       = string
    port            = string
    num_cache_nodes = number
  })
}

variable "bastian_config" {
  type = object({
    instance_type = string
  })
}