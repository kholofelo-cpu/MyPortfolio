function Hero() {
 return (
  <section
    id="home"
    className="mx-auto flex min-h-[70vh] max-w-6xl items-center px-6 py-20"
    >
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest">
          Hello, I'm
        </p>
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Kholofelo Shokane
        </h1>
        <p className="mt-6 max-w-2xl test-lg text-gray-600">
          I am a junior software developer who enjoys building useful applications and learning new technologies.
        </p>

        <div className="mt-8 flex  flex-col sm:flex-row gap-4">
          <a
           href="#projects"
           className="rounded-lg bg-black px-5 py-3 text-white"
           >
            View my projects
           </a>

           <a 
            href="#contacts"
            className="rounded-lg border px-5 py-3"
            >
              Contact me
            </a>
        </div>
      </div>
    </section>
 )
}

export default Hero