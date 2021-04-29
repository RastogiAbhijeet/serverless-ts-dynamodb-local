resource "aws_security_group" "lambda" {
  name        = "pxboost-sg-lambda-${var.env}-${var.tlrs}"
  description = "Allow lambda to send request RDS"
  vpc_id      = var.vpc_id


  tags = {
    Name           = "pxboost-sg-lambda-${var.env}.${var.tlrs}"
    Environment    = var.env
    ApplicationID = "pxboost-${var.tlrs}"
    ApplicationName = "pxboost"
  }

}

resource "aws_security_group_rule" "egress_lambda_pub" {
  type              = "egress"
  from_port         = 0
  to_port           = 0
  protocol          = -1
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.lambda.id
}

