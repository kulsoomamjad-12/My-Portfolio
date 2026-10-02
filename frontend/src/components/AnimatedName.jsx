import { useEffect, useState } from 'react'

export default function AnimatedName({ name = 'Steven', speed = 150, pause = 2000 }) {
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!deleting && text === name) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }

    if (deleting && text === '') {
      const t = setTimeout(() => setDeleting(false), 400)
      return () => clearTimeout(t)
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting ? prev.slice(0, -1) : name.slice(0, prev.length + 1),
        )
      },
      deleting ? speed / 2 : speed,
    )
    return () => clearTimeout(t)
  }, [text, deleting, name, speed, pause])

  return (
    <span className="text-cyan">
      {text}
      <span className="animate-blink border-r-4 border-cyan ml-1" aria-hidden="true" />
    </span>
  )
}
