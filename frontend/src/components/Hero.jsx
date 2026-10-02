import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { FiDownload } from 'react-icons/fi'
import AnimatedName from './AnimatedName'
import myImage from '../assets/my image.jpeg'

const SOCIALS = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/kulsoom-amjad-bba0073b2/', label: 'LinkedIn' },
  // { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaGithub, href: 'https://github.com/kulsoomamjad-12', label: 'GitHub' },
]

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-lg mb-2"> Hi, I&apos;m</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 min-h-[1.2em]">
          <AnimatedName name="Kulsoom Amjad" />
        </h1>
        <p className="text-slate-600 dark:text-muted leading-relaxed mb-8 max-w-md">
          | FULL-STACK WEB DEVELOPER.
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-cyan text-white font-semibold hover:brightness-110 transition"
          >
            {/* Hire me */}  contact me
          </a>
          {/* <a
            href="/resume.pdf"
            className="px-6 py-3 rounded-full border-2 border-cyan text-cyan font-semibold flex items-center gap-2 hover:bg-cyan/10 transition"
          >
             <FiDownload /> Resume 
          </a> */ }
        </div>

        <div className="flex items-center gap-4 text-xl">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-300 dark:border-white/15 text-slate-700 dark:text-white hover:text-cyan hover:border-cyan transition-colors"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative animate-float">
          <div className="absolute -inset-2 rounded-3xl bg-cyan/30 blur-2xl animate-glow" />
          <img
            src={myImage}
            alt="Profile placeholder"
            className="relative h-72 sm:h-96 w-auto object-contain object-center rounded-3xl border-4 border-cyan"
          />
        </div>
      </div>
    </section>
  )
}
