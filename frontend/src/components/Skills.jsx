import {
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'

const SKILLS = [
  { icon: SiHtml5, name: 'HTML'},
  { icon: SiJavascript, name: 'JavaScript'},
  { icon: SiReact, name: 'React'},
  { icon: SiTailwindcss, name: 'Tailwind CSS' },
  { icon: SiNodedotjs, name: 'Node.js'},
  { icon: SiExpress, name: 'Express'},
  { icon: SiMongodb, name: 'MongoDB'},
]

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="section-heading text-3xl sm:text-4xl font-extrabold text-center mb-14">
        My Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-5">
        {SKILLS.map(({ icon: Icon, name }) => (
          <div
            key={name}
            className="w-28 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-card py-6 px-3 text-center hover:border-cyan transition-colors"
          >
            <Icon className="mx-auto text-2xl text-cyan mb-2" />
            <p className="text-xs text-slate-600 dark:text-muted mt-1">{name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
