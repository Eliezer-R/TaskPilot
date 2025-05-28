import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import db from '../db.js'

export const Router = express.Router()
const KEY = process.env.SECRET_KEY


const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, KEY, { expiresIn: '1d' })
}

const validationToken = (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  try {
    const decoded = jwt.verify(token, KEY)
    req.user = decoded
    next()
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired, please login again' })
    }
    res.status(401).json({ message: 'Invalid token' })
  }
}

Router.post('/register', async (req, res) => {
  console.log('📝 Register request received:', { name: req.body.name, email: req.body.email })
  
  const { name, email, password } = req.body

  try {
    console.log('🔍 Checking if user exists...')
    const [existing] = await db.query('SELECT * FROM users WHERE email = ?', [email])
    console.log('👤 Existing users found:', existing.length)
    
    if (existing.length > 0) {
      return res.status(400).json({ message: 'User already exists' })
    }

    console.log('🔐 Hashing password...')
    const hashedPassword = await bcrypt.hash(password, 10)
    
    console.log('💾 Inserting new user...')
    const [result] = await db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword])
    
    console.log('✅ User created with ID:', result.insertId)
    const newUser = { id: result.insertId, email }
    const token = generateToken(newUser)

    res.cookie('token', token, { 
      httpOnly: true, 
      secure: true, 
      sameSite: 'none',
      maxAge: 365 * 24 * 60 * 60 * 1000 
    })
    res.status(201).json({ token, user: newUser })
  } catch (error) {
    console.error('❌ Register error details:', error)
    return res.status(500).json({ message: 'Database error', details: error.message })
  }
})

Router.post('/Login', async (req, res) => {
  const { email, password } = req.body

  // We could put more validations here, like checking if the email is valid or if the password is strong enough

  try {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email])
    const user = rows[0]

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: 'User not found' })
    }

    const newUser = { id: user.user_id, email }
    const token = generateToken(newUser)

    res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'none' })
    res.status(201).json({ token, user: newUser })
  } catch (error) {
    return res.status(500).json({ message: 'Database error' })
  }
})

Router.post('/tasks', validationToken, async (req, res) => {
  const { name, description, icon, status } = req.body
  const userId = req.user.id

  try {
    const [result] = await db.query(
      'INSERT INTO tasks (title, description, icon, status, user_id) VALUES (?, ?, ?, ?, ?)',
      [name, description, icon, status, userId]
    )

    const [newTask] = await db.query('SELECT * FROM tasks WHERE task_id = ?', [result.insertId])

    res.status(201).json(newTask[0])
  } catch (error) {
    return res.status(500).json({ message: 'Database error' })
  }
})

Router.post('/logout', async (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  })
  res.status(200).json({ message: 'Logged out successfully' })
})

Router.get('/tasks', validationToken, async (req, res) => {
  try {
    const [tasks] = await db.query('SELECT * FROM tasks WHERE user_id = ?', [req.user.id])
    res.status(200).json(tasks)
  } catch (error) {
    return res.status(500).json({ message: 'Database error' })
  }
})

Router.delete('/tasks/:id', validationToken, async (req, res) => {
  const { id } = req.params

  try {
    await db.query('DELETE FROM tasks WHERE task_id = ? AND user_id = ?', [id, req.user.id])
    res.status(200).json({ message: 'Task deleted successfully' })
  } catch (error) {
    return res.status(500).json({ message: 'Database error' })
  }
})

Router.patch('/tasks/:id', validationToken, async (req, res) => {
  const { id } = req.params
  const { name, description, icon, status } = req.body

  try {
    await db.query(
      'UPDATE tasks SET title = ?, description = ?, icon = ?, status = ? WHERE task_id = ? AND user_id = ?',
      [name, description, icon, status, id, req.user.id]
    )

    const [newTask] = await db.query('SELECT * FROM tasks WHERE task_id = ?', [id])

    res.status(201).json(newTask[0])
  } catch (error) {
    return res.status(500).json({ message: 'Database error' })
  }
})
