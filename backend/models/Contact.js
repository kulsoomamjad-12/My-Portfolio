import mongoose from 'mongoose'

export const LIMITS = {
  email: 254,
  subject: 200,
  message: 5000,
}

const contactSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      trim: true,
      lowercase: true,
      maxlength: [LIMITS.email, `Email must be at most ${LIMITS.email} characters.`],
    },
    subject: {
      type: String,
      required: [true, 'Subject is required.'],
      trim: true,
      maxlength: [LIMITS.subject, `Subject must be at most ${LIMITS.subject} characters.`],
    },
    message: {
      type: String,
      required: [true, 'Message is required.'],
      trim: true,
      maxlength: [LIMITS.message, `Message must be at most ${LIMITS.message} characters.`],
    },
  },
  { timestamps: true },
)

export default mongoose.model('Contact', contactSchema)
