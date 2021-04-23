import "source-map-support/register";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import * as pg from "pg";
import { APIGatewayProxyEvent } from "aws-lambda";
import axios from "axios";
import * as CognitoIdentityServiceProvider from "aws-sdk/clients/cognitoidentityserviceprovider";

const lessSize = async (event: APIGatewayProxyEvent) => {
  let secret: string, binaryDecodedSecret: string;

  try {
    secret = `${process.env.PG_HOST} , ${process.env.PG_USER}`;

    const cognitoidentityserviceprovider = new CognitoIdentityServiceProvider();

    var params = {
      UserPoolId: "us-east-1_DdI9Agwta" /* required */,
      AttributesToGet: ["email"],
    };

    const cRes = await cognitoidentityserviceprovider
      .listUsers(params)
      .promise();

    const pool = new pg.Pool({
      user: process.env.PG_USER,
      host: process.env.PG_HOST,
      database: process.env.PG_DB_NAME,
      password: process.env.PG_PASSWORD,
      port: parseInt(process.env.PG_PORT),
    });

    const queryRes = await pool.query("select * from users;");

    const res = await axios.get(
      "https://run.mocky.io/v3/7a1c731d-5a03-4ee7-b0f4-89f94aa5130f"
    );

    return formatJSONResponse({
      message: `Got some response Secret : ${secret} \n CognitoUsers : ${JSON.stringify(
        cRes.Users
      )},\nAPI Res: ${JSON.stringify(res.data)} \n, ${JSON.stringify({
        data: queryRes.rows,
      })} Test to the exciting Serverless world! - res.data.`,
    });
  } catch (err) {
    return formatJSONResponse({
      message: "Could not process request",
      error: err.message,
    });
  }
};

export const main = middyfy(lessSize);
