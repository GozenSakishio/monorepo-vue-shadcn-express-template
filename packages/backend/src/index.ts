import express from 'express'
import userRoutes from './routes/userRoutes.js'
import { initDb } from './db.js'

const app = express()
const PORT = 3000

app.use(express.json())
app.use('/api/users', userRoutes)

initDb()

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`)
})
