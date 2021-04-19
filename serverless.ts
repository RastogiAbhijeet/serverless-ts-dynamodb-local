import type { AWS } from "@serverless/typescript";
import {
  HealthAppCognitoUserPool,
  HealthAppCognitoUserPoolClient,
} from "./serverless/resources/cognito";

import { LambdaExecutionRole } from "serverless/roles/lambdaExecutionRole";

import hello from "@functions/hello";
import lessSize from "@functions/lessSize";

const serverlessConfiguration: AWS = {
  service: "acme-typescript",
  frameworkVersion: "2",
  custom: {
    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
    },
    dynamodb: {
      start: {
        migrate: true,
      },
      stages: ["${self:provider.stage}"],
    },
    cognitoUserPoolClient: "${self:provider.stage}-health-app-pool-client",
    cognitoUserPool: "${self:provider.stage}-health-app-user-pool",
  },
  plugins: [
    "serverless-webpack",
    "serverless-offline",
    "serverless-dynamodb-local",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    stage: "${opt:stage, 'local'}",
    region: "us-east-1",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      SERVERLESS_ENV: "${opt:stage, 'local'}",
    },
    lambdaHashingVersion: "20201221",
    deploymentBucket: {
      tags: {
        Environment: "${opt:stage, 'local'}",
      },
    },
  },
  package: {
    individually: true,
    exclude: [
      "terraform/**",
      "serverless/**",
      "package.json",
      "package-lock.json",
    ],
  },
  // import the function via paths
  functions: { hello, lessSize },
  resources: {
    Resources: {
      ...HealthAppCognitoUserPool,
      ...HealthAppCognitoUserPoolClient,
      ...LambdaExecutionRole,
    },
  },
};

module.exports = serverlessConfiguration;
