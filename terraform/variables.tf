variable "zone" {
  type = string
}

variable "dev_pg_creds" {
  type = object({
    user     = string
    password = string
    port     = number
  })
}

variable "staging_pg_creds" {
  type = object({
    user     = string
    password = string
    port     = number
  })
}

variable "prod_pg_creds" {
  type = object({
    user     = string
    password = string
    port     = number
  })
}

variable "ec_port" {
  type = number
}

variable "app_name" {
  type    = string
  default = "pxboost"
}
