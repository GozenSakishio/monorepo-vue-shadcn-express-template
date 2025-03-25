import { Router, RequestHandler } from 'express'
import {
  getAllUsers,
  createUser,
  deleteUser,
} from '../services/userService.js'

const router = Router()

const wrap = (fn: RequestHandler): RequestHandler => fn

// 获取全部用户
router.get('/', wrap(async (req, res) => {
  const users = getAllUsers()
  res.json(users)
}))

// 添加用户
router.post('/', wrap(async (req, res) => {
  const { name, email } = req.body
  if (!name || !email) {
    res.status(400).json({ error: 'Missing name or email' })
  }

  try {
    const result = createUser(name, email)
    res.status(201).json({ success: true, id: result.id })
  } catch (err: any) {
    res.status(500).json({ error: err.message })
  }
}))

// 删除用户
router.delete('/:id', wrap(async (req, res) => {
  const id = Number(req.params.id)
  if (isNaN(id)) {
    res.status(400).json({ error: 'Invalid ID' })
  }

  try {
    deleteUser(id)
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete user' })
  }
}))

export default router
