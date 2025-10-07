import express from 'express'
import cors from 'cors'
import { Router } from './Routers/tasks.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

dotenv.config()

const app = express()

const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://task-pilot-three.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'X-Requested-With',
    'Accept',
    'Origin'
  ],
  credentials: true,
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions))



app.use(express.json())
app.use(cookieParser())

app.use('/', Router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.info(`✅ Server running on port ${PORT}`)
})
