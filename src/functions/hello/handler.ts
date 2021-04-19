import "source-map-support/register";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import * as pg from "pg";
import { APIGatewayProxyEvent } from "aws-lambda";

const hello = async (event: APIGatewayProxyEvent) => {
  const pool = new pg.Pool({
    user: "postgres",
    host:
      "terraform-20210418061131407100000001.cmgrpjifhcms.us-east-1.rds.amazonaws.com",
    database: "postgres",
    password: "postgres1234",
    port: 5432,
  });

  try {
    const dbResp = await pool.query(`CREATE TABLE users (
      email varchar,
      firstName varchar,
      lastName varchar,
      age int
  );`);
    console.log("Got Successful response");
    console.log(dbResp.rowCount);
  } catch (err) {
    console.error("Problem Creating Table", err.message);
  }
  
  try {
    await pool.query(`insert into users values ("test", "Test", "Testdf",23);`);
  } catch (err) {
    console.error(err.message);
  }

  return formatJSONResponse({
    message: `Tables in DB ${event.httpMethod}, Test to the exciting Serverless world!`,
  });
};

export const main = middyfy(hello);
