import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()
console.log('🔍 DB Environment Variables:')
console.log('DB_HOST:', process.env.DB_HOST)
console.log('DB_PORT:', process.env.DB_PORT)
console.log('DB_USER:', process.env.DB_USER)
console.log('DB_NAME:', process.env.DB_NAME)
console.log('DB_PASSWORD:', process.env.DB_PASSWORD ? 'SET' : 'NOT SET')

const Connetion = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

export default Connetion
