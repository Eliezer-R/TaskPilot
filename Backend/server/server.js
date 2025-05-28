import express from 'express'
import cors from 'cors'
import { Router } from './Routers/tasks.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

dotenv.config()

const whitelist = [
  'http://localhost:5173',            
  'https://mi-tasks-app.vercel.app'   
];

const app = express()
app.use(cors({
    origin: (origin, callback) => {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}))
app.use(express.json())
app.use(cookieParser())

app.use('/', Router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.info(`✅ Server running on http://localhost:${PORT}`)
})
