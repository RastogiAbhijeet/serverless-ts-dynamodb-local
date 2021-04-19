export const ApplicationVPC = {
  Type: "AWS::EC2::VPC",
  Properties: {
    CidrBlock: "10.0.0.0/24",
  },
};

export const ApplicationSubnet = {
  Type: "AWS::EC2::Subnet",
  Properties: {
    AvailabilityZone: "${self:provider.region}a",
    CidrBlock: "10.0.0.0/28",
    VpcId: {
      Ref: "ApplicationVPC",
    },
  },
};

