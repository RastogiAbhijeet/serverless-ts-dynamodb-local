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