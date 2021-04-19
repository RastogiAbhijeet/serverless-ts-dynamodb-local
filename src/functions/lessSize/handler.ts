import "source-map-support/register";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import * as pg from "pg";
import { APIGatewayProxyEvent } from "aws-lambda";

const lessSize = async (event: APIGatewayProxyEvent) => {
  const pool = new pg.Pool({
    user: "postgres",
    host:
      "terraform-20210418061131407100000001.cmgrpjifhcms.us-east-1.rds.amazonaws.com",
    database: "postgres",
    password: "postgres1234",
    port: 5432,
  });

  try {
    await pool.query(`select * from users;`);
    console.log("Got  response");
  } catch (err) {
    console.error("Why did we get this error", err);
  }

  return formatJSONResponse({
    message: `Got some response ${event.httpMethod}, Test to the exciting Serverless world!`,
  });
};

export const main = middyfy(lessSize);
