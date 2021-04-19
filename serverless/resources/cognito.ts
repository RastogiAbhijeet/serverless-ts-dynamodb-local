export const HealthAppCognitoUserPool = {
  HealthAppCognitoUserPool: {
    Type: "AWS::Cognito::UserPool",
    Properties: {
      UserPoolName: "${self:custom.cognitoUserPool}",
      UsernameAttributes: ["phone_number", "email"],
      AutoVerifiedAttributes: ["email"],
      Policies: {
        PasswordPolicy: {
          MinimumLength: 8,
          RequireLowercase: true,
          RequireNumbers: true,
          RequireUppercase: true,
          RequireSymbols: false,
        },
      },
      Schema: [
        {
          AttributeDataType: "String",
          Name: "name",
          Required: true,
          StringAttributeConstraints: {
            MinLength: "1",
            MaxLength: "50",
          },
        },
      ],
    },
  },
};

export const HealthAppCognitoUserPoolClient = {
  HealthAppCognitoUserPoolClient: {
    Type: "AWS::Cognito::UserPoolClient",
    Properties: {
      UserPoolId: { Ref: "HealthAppCognitoUserPool" },
      ClientName: "${self:custom.cognitoUserPoolClient}",
      ExplicitAuthFlows: [
        "ALLOW_USER_PASSWORD_AUTH",
        "ALLOW_REFRESH_TOKEN_AUTH",
        "ALLOW_ADMIN_USER_PASSWORD_AUTH",
        "ALLOW_USER_SRP_AUTH",
      ],
    },
  },
};
