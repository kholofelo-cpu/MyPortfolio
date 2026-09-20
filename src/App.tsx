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
 

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  
  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-white dark:bg-black">
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
