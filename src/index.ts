import { APIGatewayProxyEvent, Context } from 'aws-lambda'
import { createServer, proxy } from 'aws-serverless-express'
import app from './app/app'

const server = createServer(app)

export function handler (event: APIGatewayProxyEvent, context: Context) {
  proxy(server, event, context)
}

exports.handler = handler
