export function notFound(req, res) {
  res.status(404).json({ message: `Route not found: ${req.method} ${req.originalUrl}` })
}

// Express needs all four arguments to recognize this as an error handler.
// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ message: 'Invalid JSON in request body.' })
  }

  if (err.type === 'entity.too.large') {
    return res.status(413).json({ message: 'Your message is too large.' })
  }

  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors)
      .map((e) => e.message)
      .join(' ')
    return res.status(400).json({ message })
  }

  console.error(err)
  return res.status(500).json({ message: 'Something went wrong. Please try again later.' })
}
