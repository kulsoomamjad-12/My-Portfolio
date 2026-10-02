import { FaGithub, FaLinkedin } from 'react-icons/fa6'

const SOCIALS = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/kulsoom-amjad-bba0073b2/', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/kulsoomamjad-12', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xl font-bold text-cyan">Developer</p>

        <div className="flex items-center gap-4 text-lg">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-300 dark:border-white/15 hover:text-cyan hover:border-cyan transition-colors"
            >
              <Icon />
            </a>
          ))}
        </div>

        <p className="text-sm text-slate-500 dark:text-muted">@All rights reserved</p>
      </div>
    </footer>
  )
}
