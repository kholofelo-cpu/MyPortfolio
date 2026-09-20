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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 dark:bg-black dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-6 flex h-16 items-center justify-between">
        <a href="#" className="text-xl font-bold">Kholofelo Nelson Shokane</a>
        <div className="flex items-center gap-4">
          <button onClick={() => setDark(!dark)} className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
            {dark? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)}>
            {open? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="flex flex-col gap-4 bg-white px-6 py-6 border-t dark:bg-black dark:border-gray-800">
          {links.map(l => <a key={l.name} href={l.href} onClick={() => setOpen(false)}>{l.name}</a>)}
        </div>
      )}
    </nav>
  )
}
