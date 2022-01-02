import express from 'express'
import helloRouter from './routes/hello.js'
const app = express()

// settings
app.set('port', process.env.PORT || 3000)

// middlewares
app.use(express.json())

// routes
app.use('/', helloRouter)

export default app
