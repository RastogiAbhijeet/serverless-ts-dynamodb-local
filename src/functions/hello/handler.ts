import "source-map-support/register";
import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import * as AWS from "aws-sdk";
import schema from "./schema";

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const docClient = new AWS.DynamoDB.DocumentClient({
    region: "us-east-1",
    endpoint:
      process.env["SERVERLESS_ENV"] === "local"
        ? "http://localhost:8000"
        : null,
  });

  const table = process.env["PATIENT_PROFILES_TABLE"];
  console.log("Table", table);

  const params = {
    TableName: table,
    Item: {
      id: "testID",
      name: "sdf",
    },
  };

  await docClient.put(params).promise();

  return formatJSONResponse({
    message: `Hello ${event.body.name}, Test to the exciting Serverless world!`,
  });
};

export const main = middyfy(hello);
