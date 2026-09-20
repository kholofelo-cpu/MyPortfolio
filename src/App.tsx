import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  const [dark, setDark] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const height = document.body.scrollHeight - window.innerHeight
      const progress = (scrolled /height ) * 100
      setScrollProgress(progress)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-white dark:bg-black">
      <div className="fixed top-0 left-0 h-1 bg-black dark:bg-white z-[100] transition-all"
      style={{ width: `${scrollProgress}%` }}
      />
      
      <Navbar dark={dark}  setDark={setDark}/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
  </div>
  )
}
export default App
