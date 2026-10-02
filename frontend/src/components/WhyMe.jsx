import { FaBriefcase, FaGraduationCap } from 'react-icons/fa6'
import { EDUCATION, EXPERIENCE } from '../assets/data'

function Card({ icon: Icon, title, subtitle, period }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-card p-5">
      <div className="w-11 h-11 shrink-0 rounded-full bg-cyan/15 text-cyan flex items-center justify-center text-lg">
        <Icon />
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-slate-600 dark:text-muted">{subtitle}</p>
        <p className="text-xs text-cyan mt-1">{period}</p>
      </div>
    </div>
  )
}

export default function WhyMe() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="section-heading text-3xl sm:text-4xl font-extrabold text-center mb-14">
        Why Me?
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-5">Education</h3>
          <div className="flex flex-col gap-4">
            {EDUCATION.map((e) => (
              <Card key={e.title} icon={FaGraduationCap} {...e} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-5">Experience</h3>
          <div className="flex flex-col gap-4">
            {EXPERIENCE.map((e) => (
              <Card key={e.title} icon={FaBriefcase} {...e} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
