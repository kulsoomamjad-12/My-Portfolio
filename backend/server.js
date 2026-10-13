import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import { connectDB } from './config/db.js'
import { errorHandler, notFound } from './middleware/errorHandler.js'
import contactRoutes from './routes/contactRoutes.js'
import { verifyMailer } from './utils/mailer.js'

const app = express()
const PORT = process.env.PORT || 5000

// CLIENT_URL can be a comma-separated list of allowed frontend origins.
// When it isn't set, any origin is allowed (handy for local development).
const allowedOrigins = (process.env.CLIENT_URL || '')
  .split(',')
  .map((origin) => origin.trim().replace(/\/$/, ''))
  .filter(Boolean)

// Hosts like Render sit behind a proxy; this makes req.ip the real client IP
// so the contact form rate limit applies per visitor.
app.set('trust proxy', 1)

app.use(cors({ origin: allowedOrigins.length ? allowedOrigins : true }))
app.use(express.json({ limit: '20kb' }))

// Visiting the backend URL in a browser shouldn't look like an error.
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio backend is running. The contact form posts to /api/contact.' })
})
app.get('/favicon.ico', (req, res) => res.status(204).end())

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/contact', contactRoutes)

app.use(notFound)
app.use(errorHandler)

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
    verifyMailer()
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message)
    process.exit(1)
  })
