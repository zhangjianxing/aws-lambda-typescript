import express from 'express'
import cors from 'cors'
import awsServerlessExpressMiddleware from 'aws-serverless-express/middleware'
import moment from 'moment'

const app = express()

// @ts-ignore
app.use(express.json({ extended: false }))
app.use(cors())
app.use(awsServerlessExpressMiddleware.eventContext())

app.get('/health_check', (req, res) => {
  res.status(200).send({ status: 'server_ok', timestamp: moment.utc().unix() })
})

export default app
