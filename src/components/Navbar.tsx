import { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
type Props = { dark: boolean; setDark: (v: boolean) => void }
export default function Navbar({ dark, setDark }: Props) {
  const [open, setOpen] = useState(false)
  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white text-black border-b border-gray-200 dark:bg-black dark:text-white dark:border-gray-800">
      <div className="flex h-16 w-full items-center justify-between px-6">
        <a href="#" className="text-xl font-bold text-black dark:text-white">Kholofelo Nelson Shokane</a>
        <div className="flex items-center gap-4 ml-auto">
          <button onClick={() => setDark(!dark)} className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
            {dark? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} className="text-black dark:text-white">
            {open? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="flex flex-col gap-4 bg-white text-black px-6 py-6 border-t border-gray-200 dark:bg-black dark:text-white dark:border-gray-800">
          {links.map(l => <a key={l.name} href={l.href} onClick={() => setOpen(false)} className="text-lg">{l.name}</a>)}
        </div>
      )}
    </nav>
  )
}
