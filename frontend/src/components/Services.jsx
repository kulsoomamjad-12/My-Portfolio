import {
  FiEdit3,
  FiLayout,
  FiMonitor,
  FiPenTool,
  FiServer,
  FiSmartphone,
} from 'react-icons/fi'
import { SERVICES } from '../assets/data'


export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="section-heading text-3xl sm:text-4xl font-extrabold text-center mb-14">
        What I Do
      </h2>

      <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {SERVICES.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-card p-8 text-center hover:-translate-y-1 hover:border-cyan transition-all duration-300"
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-cyan/15 text-cyan flex items-center justify-center text-2xl">
              <Icon />
            </div>
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm text-slate-600 dark:text-muted leading-relaxed">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
