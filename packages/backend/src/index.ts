// packages/backend/src/index.ts
import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' })
})

app.listen(PORT, () => {
  console.log(`🚀 Backend listening on http://localhost:${PORT}`)
})
