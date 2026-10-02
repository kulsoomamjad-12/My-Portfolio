import Contact from '../models/Contact.js'
import { sendContactNotification } from '../utils/mailer.js'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function createContact(req, res) {
  try {
    const { email, subject, message } = req.body

    if (!email || !subject || !message) {
      return res.status(400).json({ message: 'Email, subject, and message are all required.' })
    }

    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ message: 'Please provide a valid email address.' })
    }

    const contact = await Contact.create({ email, subject, message })

    sendContactNotification({ email, subject, message }).catch((err) => {
      console.error('Failed to send contact notification email:', err.message)
    })

    return res.status(201).json({ message: 'Message received. Thank you!', contact })
  } catch {
    return res.status(500).json({ message: 'Something went wrong. Please try again later.' })
  }
}

export async function getContacts(req, res) {
  try {
    const adminKey = req.headers['x-admin-key']

    if (!process.env.ADMIN_KEY || adminKey !== process.env.ADMIN_KEY) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const contacts = await Contact.find().sort({ createdAt: -1 })
    return res.status(200).json(contacts)
  } catch {
    return res.status(500).json({ message: 'Something went wrong. Please try again later.' })
  }
}
