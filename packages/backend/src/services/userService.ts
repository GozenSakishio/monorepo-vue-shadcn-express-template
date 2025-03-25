import { db } from '../db.js'

export const getAllUsers = () => {
  return db.prepare('SELECT * FROM users').all()
}

export const createUser = (name: string, email: string) => {
  const stmt = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)')
  const result = stmt.run(name, email)
  return { id: result.lastInsertRowid }
}

export const deleteUser = (id: number) => {
  db.prepare('DELETE FROM users WHERE id = ?').run(id)
}
