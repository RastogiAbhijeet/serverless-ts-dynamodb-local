1. Create a backend bucket to store the terraform state

2. Any operator of the Terraform should have the following role
-   S3 - List, Get, Put

3. In order for you to use Tf, Install terraform, and configure the
    aws cli with the iam role that has necessary programatic permissions

4. Create a profile - acme-aws for aws cli configurration

```
aws configure --profile acme-aws
```

5. Export the following environment vars once you have configured aws-cli
   
```
export AWS_PROFILE=acme-aws
export AWS_SHARED_CREDENTIALS_FILE=~/.aws/credentials  
```

### **List of Resources**

3 RDS Instances [2 t2-micro , 1 t2-  ]
3 bastian hosts [2 x t2-nano, 1 x t2-micro]

3 Secret managers 

3 Elasti caches
3 Elastic cache param groups 

1 VPC - 10.0.0.0/16           
1 Public subnet - 10.0.0.0/24
2 Private subnets - 10.0.1.0/22 + 10.0.3.0/22

1 SG
2 SG Rules for lambda : 1 egress and 1 ingress

1 SG
2 SG Rules for RDS

1 SG 
1 Rule for EC-Redis

1 SG 
2 Rules for Bastian

1 NAT Gateway
1 Internet Gateway 
1 Elastic IP for NAT Gateway

Manual Steps

1. Create 3 key pairs
   - pxboost-bastian-prod
   - pxboost-bastian-staging
   - pxboost-bastian-dev
  and store them in an S3 Bucket named - pxboost-private-keys
  
