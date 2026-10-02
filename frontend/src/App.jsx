import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'
import WhyMe from './components/WhyMe'
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-bg text-slate-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <Hero />
        <AboutMe />
        <Services />
        <Skills />
        <WhyMe />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
