import express from 'express'
import cors from 'cors'
import { Router } from './Routers/tasks.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

dotenv.config()

const app = express()
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}))
app.use(express.json())
app.use(cookieParser())

app.use('/', Router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
