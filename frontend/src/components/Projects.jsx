import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { PROJECTS } from '../assets/data'

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="section-heading text-3xl sm:text-4xl font-extrabold text-center mb-14">
        My Projects
      </h2>

      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {PROJECTS.map((p) => (
          <div
            key={p.title}
            className="group relative aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-card"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-base font-bold text-white mb-1">{p.title}</h3>
              <p className="text-xs text-muted mb-2 line-clamp-2">{p.desc}</p>

              <div className="flex flex-wrap justify-center gap-1.5 mb-3">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-cyan/15 text-cyan"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 text-xs font-semibold">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-cyan hover:underline"
                >
                  <FiExternalLink /> Live Demo
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-white hover:text-cyan"
                >
                  <FiGithub /> View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
