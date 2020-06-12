# What is this?

Here you can find template for AWS Lambda express app written in TS.

Forked from https://github.com/mslosarz/aws-lambda-typescript


## To build dependencies you need to type:
`npm run zip-nodemodules`
Build process consists of:
  - trimming node_modules to production only

When you have zip file, you can create your lambda layer. It can be done by AWS Web Console.
Navigate to `lambda Layers`, then click `Create Layers`. Following the steps and upload `node_modules.zip`.

## To build project you need to type:
`npm run zip-code`
Build process consists of:
  - linting project (TSLint)
  - running tests
  - generating js files (tsc)
  - creating zip file with lambda code and dependencies

When you have zip file, you can create your lambda function. It can be done by AWS Web Console.

Navigate to lambda functions, then click `Create Function`. Following the steps and upload `lambda.zip`.

Add Layers that you just uploaded.

# Thank you

 That's all :) now you can enjoy playing with lambda written in TypeScript
