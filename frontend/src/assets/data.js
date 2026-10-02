import { FiMonitor, FiPenTool } from 'react-icons/fi'
import myImage from './my image 2.jpeg'
import hotelBooking from './hotel-booking.png'
import faqCard from './FAQ card.png'
import eLearning from './e-learning platform.png'
import oculusLandingPage from './oculus landing page.png'

export const ABOUT_ME = {
  name: 'Kulsoom Amjad',
  image: myImage,
  bio: "I am aspiring full-stack developer focused on building functional, responsive, and user-friendly web applications. I enjoy working across the stack, from turning design layouts into clean frontend components to setting up foundational backend logic and databases. Through hands-on projects, I have gained solid experience with modern JavaScript frameworks, API integration, and deployment tools. Always eager to learn, I am excited to tackle new technical challenges and grow alongside a collaborative development team.",
}

export const BADGES = [
  { label: 'UI/UX Design', className: 'top-2 -left-4 text-cyan border-cyan/40 bg-cyan/10 -rotate-6' },
  { label: 'Web Development', className: 'top-1/4 -right-8 text-sky border-sky/40 bg-sky/10 rotate-3' },
  { label: 'Mobile App Design', className: 'bottom-1/4 -left-10 text-coral border-coral/40 bg-coral/10 rotate-3' },
  { label: 'Graphic Design', className: 'bottom-2 -right-6 text-cyan border-cyan/40 bg-cyan/10 -rotate-3' },
]

export const STATS = [
  { value: '+12', label: 'Projects Completed' },
  { value: '+120', label: 'Happy Clients' },
  { value: '+5', label: 'Years Experience' },
]

export const EDUCATION = [
  {
    title: 'University of Peshawar',
    subtitle: 'BS COMPUTER SCIENCE',
    period: '2024 – 2028',
  },
  {
    title: 'CSS SUMMER BOOT CAMP',
    subtitle: 'Web development Certification',
    period: '7 Weeks',
  },
]

export const EXPERIENCE = [
  {
    title: 'Frontend Developer',
    subtitle: 'React Vite Developer',
    period: 'none',
  },
  {
    title: 'Backend Developer',
    subtitle: 'Node.js Developer',
    period: 'none',
  },
]

export const PROJECTS = [
  {
    title: 'Hotel Booking',
    desc: 'A fully-featured hotel booking patform.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: hotelBooking,
    href: 'https://frontend-theta-mauve.vercel.app/',
    repo: 'https://github.com/kulsoomamjad-12/frontend',
  },
  {
    title: 'E-learning website',
    desc: 'It is platform for e-learning but this is only fully functional frontend.',
    tags: ['React', 'CSS'],
    image: eLearning,
    href: 'https://e-learning-website-apor.vercel.app/',
    repo: 'https://github.com/kulsoomamjad-12/E-learning-website',
  },
  {
    title: 'Oculus Landing Page',
    desc: 'It is e-commerce website of multiple page and it has only frontend.',
    tags: ['React', 'tailwind CSS'],
    image: oculusLandingPage,
    href: 'https://oculus-landing-page-dbd4.vercel.app/',
    repo: 'https://github.com/kulsoomamjad-12/oculus-landing-page-',
  },
  {
    title: 'FAQ card',
    desc: 'It is FAQ card.It is only frontend',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: faqCard,
    href: 'https://faq-card-7k4zozeka-kulsoomamjad-12s-projects.vercel.app/',
    repo: 'https://github.com/kulsoomamjad-12/FAQ-CARD',
  },
]

export const SERVICES = [
  {
    icon: FiMonitor,
    title: 'Web Development',
    desc: 'Building fast, responsive, and accessible websites using modern frameworks and best practices.',
  },
  // {
  //   icon: FiEdit3,
  //   title: 'Technical Writing',
  //   desc: 'Clear documentation, API references, and guides that make complex systems easy to understand.',
  // },
  // {
  //   icon: FiSmartphone,
  //   title: 'Mobile Development',
  //   desc: 'Cross-platform mobile apps that feel native, perform smoothly, and scale with your users.',
  // },
  // {
  //   icon: FiServer,
  //   title: 'Backend Development',
  //   desc: 'Robust APIs and services with secure authentication, clean architecture, and solid data models.',
  // },
  {
    icon: FiPenTool,
    title: 'Graphic Design',
    desc: 'Eye-catching visuals, branding assets, and illustrations tailored to your product.',
  },
  // {
  //   icon: FiLayout,
  //   title: 'UI/UX Design',
  //   desc: 'User-centered interfaces backed by research, wireframes, and polished prototypes.',
  // },
]