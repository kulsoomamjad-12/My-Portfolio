import nodemailer from 'nodemailer'

let transporter

const isConfigured = () => Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASS)

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        // Google displays App Passwords with spaces ("abcd efgh ijkl mnop").
        pass: process.env.EMAIL_PASS.replace(/\s+/g, ''),
      },
    })
  }
  return transporter
}

const HTML_ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
const escapeHtml = (str) => str.replace(/[&<>"']/g, (ch) => HTML_ESCAPES[ch])

// Checks the email login at startup so a bad password shows up in the logs
// right away instead of silently on the first form submission.
export async function verifyMailer() {
  if (!isConfigured()) {
    console.warn('Email notifications disabled: EMAIL_USER or EMAIL_PASS not set')
    return
  }

  try {
    await getTransporter().verify()
    console.log('Email notifications ready')
  } catch (err) {
    console.error(`Email notifications will NOT be sent. Gmail login failed: ${err.message}`)
    console.error(
      'EMAIL_PASS must be a 16-letter Gmail App Password, not your normal Gmail password.\n' +
        'Turn on 2-Step Verification, then create one at https://myaccount.google.com/apppasswords',
    )
  }
}

export async function sendContactNotification({ name, email, subject, message }) {
  if (!isConfigured()) {
    console.warn('Email notification skipped: EMAIL_USER or EMAIL_PASS not set')
    return
  }

  await getTransporter().sendMail({
    from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    replyTo: { name, address: email },
    subject: `New contact form message from ${name}: ${subject}`.replace(/[\r\n]+/g, ' '),
    text: `You received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    html: `
      <p>You received a new message from your portfolio contact form.</p>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    `,
  })
}
