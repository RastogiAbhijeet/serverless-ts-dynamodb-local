terraform {
  required_version = ">= 0.14.2"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "3.37.0"
    }
  }
  backend "s3" {
    bucket = "health-app-tf-infra"
    key    = "main"
    region = "us-east-1"
  }
}

provider "aws" {
  region = "us-east-1"
}
