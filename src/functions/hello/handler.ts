import "source-map-support/register";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import * as pg from "pg";
import { APIGatewayProxyEvent } from "aws-lambda";

const hello = async (event: APIGatewayProxyEvent) => {
  console.log("IS OFFLINE: ", process.env.IS_OFFLINE);
  const pool = new pg.Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DB_NAME,
    password: process.env.PG_PASSWORD,
    port: parseInt(process.env.PG_PORT),
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
