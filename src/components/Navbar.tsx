
type Props = { dark: boolean; setDark: (v: boolean) => void}
function Navbar ({ dark, setDark } : Props) {
  return (
    <nav className="border-b bg-white dark:bg-black dark:border-zinc-800 sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-bold text-black dark:text-white leading-tight text-sm md:text-base shrink-0">
          <span className="md:hidden">K Shokane</span>
          <span className="hidden md:block">Kholofelo Nelson Shokane</span>
        </a>
        <div className="flex items-center gap-3 md:gap-6 text-[13px] md:text-sm text-black dark:text-white">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button
            onClick={() => setDark(!dark)}
            className="rounded-full border px-4 py-1.5 dark:border-zinc-700"
          >
            {dark? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar