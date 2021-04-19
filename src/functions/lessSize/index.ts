import { handlerPath } from "@libs/handlerResolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: "lessSize",
      },
    },
  ],
  vpc: {
    securityGroupIds: ["sg-059f6a94d0073b9d1"],
    subnetIds: ["subnet-04a47aa1b3dea7dcc", "subnet-0ef2290d8704ba480"],
  },
  role: {
    "Fn::GetAtt": ["LambdaExecutionRole", "Arn"],
  },
  timeout: 30,
  memory: 256,
};
