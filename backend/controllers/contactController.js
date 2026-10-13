import Contact, { LIMITS } from '../models/Contact.js'
import { sendContactNotification } from '../utils/mailer.js'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const asTrimmedString = (value) => (typeof value === 'string' ? value.trim() : '')

function validate({ name, email, subject, message }) {
  if (!name || !email || !subject || !message) {
    return 'Name, email, subject, and message are all required.'
  }
  if (name.length > LIMITS.name) {
    return `Name must be at most ${LIMITS.name} characters.`
  }
  if (email.length > LIMITS.email || !EMAIL_RE.test(email)) {
    return 'Please provide a valid email address.'
  }
  if (subject.length > LIMITS.subject) {
    return `Subject must be at most ${LIMITS.subject} characters.`
  }
  if (message.length > LIMITS.message) {
    return `Message must be at most ${LIMITS.message} characters.`
  }
  return null
}

// Express 5 forwards errors thrown in async handlers to the error middleware,
// so no try/catch is needed here.
export async function createContact(req, res) {
  const body = req.body ?? {}
  const data = {
    name: asTrimmedString(body.name),
    email: asTrimmedString(body.email).toLowerCase(),
    subject: asTrimmedString(body.subject),
    message: asTrimmedString(body.message),
  }

  const error = validate(data)
  if (error) {
    return res.status(400).json({ message: error })
  }

  const contact = await Contact.create(data)

  // The message is already saved, so a failed email shouldn't fail the request.
  sendContactNotification(data).catch((err) => {
    console.error('Failed to send contact notification email:', err.message)
  })

  return res.status(201).json({ message: 'Message received. Thank you!', id: contact._id })
}

export async function getContacts(req, res) {
  const adminKey = req.headers['x-admin-key']

  if (!process.env.ADMIN_KEY || adminKey !== process.env.ADMIN_KEY) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const contacts = await Contact.find().sort({ createdAt: -1 })
  return res.status(200).json(contacts)
}
