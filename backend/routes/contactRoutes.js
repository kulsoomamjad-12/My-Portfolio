import { Router } from 'express'
import { createContact, getContacts } from '../controllers/contactController.js'
import { rateLimit } from '../middleware/rateLimit.js'

const router = Router()

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many messages sent. Please try again in a few minutes.',
})

router.post('/', contactLimiter, createContact)
router.get('/', getContacts)

export default router
