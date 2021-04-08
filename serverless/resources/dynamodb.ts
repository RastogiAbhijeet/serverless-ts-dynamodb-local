export const PatientProfilesDynamoDBTable = {
    PatientProfilesDynamoDBTable: {
    Type: "AWS::DynamoDB::Table",
    Properties: {
      TableName: "${self:custom.patientProfilesTable}",
      AttributeDefinitions: [
        {
          AttributeName: "id",
          AttributeType: "S",
        },
        {
          AttributeName: "name",
          AttributeType: "S",
        },
      ],
      KeySchema: [
        { AttributeName: "id", KeyType: "HASH" },
        { AttributeName: "name", KeyType: "RANGE" },
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
    },
  },
};

export const PatientQuestionsDynamoDBTable = {
    PatientQuestionsDynamoDBTable: {
    Type: "AWS::DynamoDB::Table",
    Properties: {
      TableName: "${self:custom.patientQuestionsTable}",
      AttributeDefinitions: [
        {
          AttributeName: "id",
          AttributeType: "S",
        },
        {
          AttributeName: "question",
          AttributeType: "S",
        },
      ],
      KeySchema: [
        { AttributeName: "id", KeyType: "HASH" },
        { AttributeName: "question", KeyType: "RANGE" },
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
    },
  },
};

export const ExceptionalCareDyanmoDBTable = {
    ExceptionalCareDyanmoDBTable: {
    Type: "AWS::DynamoDB::Table",
    Properties: {
      TableName: "${self:custom.exceptionalCareTable}",
      AttributeDefinitions: [
        {
          AttributeName: "id",
          AttributeType: "S",
        },
        {
          AttributeName: "name",
          AttributeType: "S",
        },
      ],
      KeySchema: [
        { AttributeName: "id", KeyType: "HASH" },
        { AttributeName: "name", KeyType: "RANGE" },
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
    },
  },
};
