export const LambdaExecutionRole = {
  LambdaExecutionRole: {
    Type: "AWS::IAM::Role",
    Properties: {
      RoleName: "${self:provider.stage}healthapprole-mbr",
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: {
              Service: ["lambda.amazonaws.com"],
            },
            Action: ["sts:AssumeRole"],
          },
        ],
      },
      Policies: [
        {
          PolicyName: "LambdaLogsAccess",
          PolicyDocument: {
            Version: "2012-10-17",
            Statement: [
              {
                Effect: "Allow",
                Action: [
                  "logs:CreateLogStream",
                  "logs:CreateLogGroup",
                  "logs:PutLogEvents",
                ],
                Resource: [
                  {
                    "Fn::Join": [
                      ":",
                      [
                        "arn:aws:logs",
                        { Ref: "AWS::Region" },
                        { Ref: "AWS::AccountId" },
                        "log-group:/aws/lambda/*:*:*",
                      ],
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          PolicyName: "LambdaCognitoAccess",
          PolicyDocument: {
            Version: "2012-10-17",
            Statement: [
              {
                Effect: "Allow",
                Action: [
                  "cognito-idp:AdminCreateUser",
                  "cognito-idp:AdminGetUser",
                  "cognito-idp:AdminConfirmUser",
                  "cognito-idp:AdminDeleteUser",
                  "cognito-idp:AdminUpdateUserAttributes",
                  "cognito-idp:ListUsers",
                  "cognito-idp:DescribeUserPool",
                  "cognito-idp:AdminSetUserMFAPreference",
                ],
                Resource: "*",
              },
            ],
          },
        },
        {
          PolicyName: "LambdaEC2VPCAccess",
          PolicyDocument: {
            Version: "2012-10-17",
            Statement: [
              {
                Effect: "Allow",
                Action: [
                  "ec2:CreateNetworkInterface",
                  "ec2:DescribeNetworkInterfaces",
                  "ec2:DeleteNetworkInterface",
                ],
                Resource: "*",
              },
            ],
          },
        },
        {
          PolicyName: "LambdaKMSAccess",
          PolicyDocument: {
            Version: "2012-10-17",
            Statement: [
              {
                Effect: "Allow",
                Action: ["kms:Encrypt", "kms:Decrypt"],
                Resource: "*",
              },
            ],
          },
        },
        {
          PolicyName: "SSMAccess",
          PolicyDocument: {
            Version: "2012-10-17",
            Statement: [
              {
                Effect: "Allow",
                Action: "ssm:GetParametersByPath",
                Resource: "*",
              },
            ],
          },
        },
        {
          PolicyName: "AWSSecretsManagerAccess",
          PolicyDocument: {
            Version: "2012-10-17",
            Statement: [
              {
                Effect: "Allow",
                Action: "secretsmanager:GetSecretValue",
                Resource: "*",
              },
            ],
          },
        },
      ],
    },
  },
};
