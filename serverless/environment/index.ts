const dbEnvs = {
  PG_HOST:
    "{{resolve:secretsmanager:rds-${self:provider.stage}-secrets:SecretString:host}}",
  PG_PORT:
    "{{resolve:secretsmanager:rds-${self:provider.stage}-secrets:SecretString:port}}",
  PG_USER:
    "{{resolve:secretsmanager:rds-${self:provider.stage}-secrets:SecretString:username}}",
  PG_PASSWORD:
    "{{resolve:secretsmanager:rds-${self:provider.stage}-secrets:SecretString:password}}",
  PG_DB_NAME:
    "{{resolve:secretsmanager:rds-${self:provider.stage}-secrets:SecretString:database}}",
};

const cognitoEnvs = {
  COGNITO_USER_POOL: "$self:custom.cognitoUserPool",
};

const defaultEnvs = {
  AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
  SERVERLESS_ENV: "${opt:stage, 'local'}",
};

export default { ...defaultEnvs, ...dbEnvs, ...cognitoEnvs };
