export const getAppConfig = () => {
  return {
    DB: {
      PG_DB_NAME: process.env.IS_OFFLINE ? "postgres" : process.env.PG_DB_NAME,
      PG_PORT: process.env.IS_OFFLINE ? 5432 : parseInt(process.env.PG_PORT),
      PG_USER: process.env.IS_OFFLINE ? "postgres" : process.env.PG_USER,
      PG_PASSWORD: process.env.IS_OFFLINE
        ? "postgres"
        : process.env.PG_PASSWORD,
      PG_HOST: process.env.IS_OFFLINE ? "locahost" : process.env.PG_HOST,
    },
    COGNITO: {
      USER_POOL: process.env.IS_OFFLINE
        ? "test"
        : process.env.COGNITO_USER_POOL,
    },
  };
};
