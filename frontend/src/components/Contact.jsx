import { useState } from 'react'

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }
// In development, '/api' is proxied to the local backend (see vite.config.js).
// Production builds fall back to the deployed backend if VITE_API_URL isn't set.
const DEFAULT_API_URL = import.meta.env.PROD
  ? 'https://my-portfolio-hazel-theta-31.vercel.app/api'
  : '/api'
const API_URL = (import.meta.env.VITE_API_URL || DEFAULT_API_URL).replace(/\/+$/, '')

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    let res
    try {
      res = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch {
      setStatus('error')
      setErrorMsg('Could not reach the server. Please check your connection and try again.')
      return
    }

    // The server may answer with a non-JSON error page (e.g. when it's down).
    const data = await res.json().catch(() => ({}))

    if (!res.ok) {
      setStatus('error')
      setErrorMsg(data.message || 'Something went wrong. Please try again later.')
      return
    }

    setStatus('success')
    setForm(INITIAL_FORM)
  }

  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 py-20">
      <h2 className="section-heading text-3xl sm:text-4xl font-extrabold text-center mb-12">
        Contact Me
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-card px-4 py-3 outline-none focus:border-cyan transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="youremail@email.com"
            className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-card px-4 py-3 outline-none focus:border-cyan transition-colors"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={form.subject}
            onChange={handleChange}
            placeholder="Let us know how we can help you"
            className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-card px-4 py-3 outline-none focus:border-cyan transition-colors"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Leave a comment..."
            className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-card px-4 py-3 outline-none focus:border-cyan transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="self-start px-8 py-3 rounded-full bg-cyan text-white font-semibold hover:brightness-110 transition disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending...' : 'Send'}
        </button>

        {status === 'success' && (
          <p className="text-sm text-sky">Message sent successfully. I&apos;ll get back to you soon!</p>
        )}
        {status === 'error' && <p className="text-sm text-coral">{errorMsg}</p>}
      </form>
    </section>
  )
}
