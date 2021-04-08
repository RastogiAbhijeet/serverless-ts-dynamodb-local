import type { AWS } from "@serverless/typescript";
import {
  PatientProfilesDynamoDBTable,
  PatientQuestionsDynamoDBTable,
  ExceptionalCareDyanmoDBTable,
} from "./serverless/resources/dynamodb";
import { dynamodbRole } from "./serverless/roles/dynamodbPermissions";
import hello from "@functions/hello";

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
    patientProfilesTable: "${self:provider.stage}-patient-profiles-table",
    patientQuestionsTable: "${self:provider.stage}-patient-questions-table",
    exceptionalCareTable: "${self:provider.stage}-exceptional-care-table",
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
      PATIENT_PROFILES_TABLE: "${self:custom.patientProfilesTable}",
      PATIENT_QUESTION_TABLE: "${self:custom.patientQuestionsTable}",
      EXCEPTION_CARE_TABLE: "${self:custom.exceptionalCareTable}",
      SERVERLESS_ENV: "${opt:stage, 'local'}",
    },
    lambdaHashingVersion: "20201221",
    iam: {
      role: {
        statements: [dynamodbRole],
      },
    },
  },
  // import the function via paths
  functions: { hello },
  resources: {
    Resources: {
      ...PatientProfilesDynamoDBTable,
      ...PatientQuestionsDynamoDBTable,
      ...ExceptionalCareDyanmoDBTable,
    },
  },
};

module.exports = serverlessConfiguration;
