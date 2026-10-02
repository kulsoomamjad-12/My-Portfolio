import { ABOUT_ME, BADGES, STATS } from '../assets/data'

export default function AboutMe() {
  return (
    <section id="aboutme" className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div className="flex justify-center order-2 md:order-1">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80">
            <div className="absolute -inset-4 rounded-full bg-cyan/20 blur-2xl animate-glow" />
            <img
              src={ABOUT_ME.image}
              alt={ABOUT_ME.name}
              className="relative w-full h-full object-cover object-top rounded-full border-4 border-cyan"
            />

            {BADGES.map((b) => (
              <span
                key={b.label}
                className={`absolute px-3 py-1.5 rounded-full text-xs font-semibold border shadow-sm bg-white dark:bg-card whitespace-nowrap ${b.className}`}
              >
                {b.label}
              </span>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2">
          <p className="text-cyan font-semibold mb-2 flex items-center gap-2">
            <span className="w-6 h-px bg-cyan inline-block" /> About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5">
            Who is <span className="text-cyan">{ABOUT_ME.name}</span>?
          </h2>
          <p className="text-slate-600 dark:text-muted leading-relaxed mb-8 max-w-md">
            {ABOUT_ME.bio}
          </p>

          <div className="flex flex-wrap gap-8 mb-8">
            {/* {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-extrabold text-cyan">{s.value}</p>
                <p className="text-sm text-slate-600 dark:text-muted mt-1">{s.label}</p>
              </div>
            ))} */}
          </div>

          <p className="italic text-2xl text-cyan">{ABOUT_ME.name}</p>
        </div>
      </div>
    </section>
  )
}
