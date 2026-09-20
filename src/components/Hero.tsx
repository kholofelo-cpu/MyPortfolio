function Hero() {
 return (
  <section
    id="home"
    className="min-h-[70vh] flex flex-col justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-black dark:text-white">
          Hello, I'm
        </p>
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-black dark:text-white">
          Kholofelo Shokane
        </h1>
        <p className="mt-6 max-w-2xl test-lg text-black-600 dark:text-white">
          I am a junior software developer who enjoys building useful applications and learning new technologies.
        </p>

        <div className="mt-8 flex  flex-col sm:flex-row gap-4 text-black dark:text-white">
          <a
           href="#projects"
           className="rounded-lg border-2 border-black dark:border-white bg-black dark:bg-white px-5 py-3 text-white dark:text-black"
           >
            View my projects
           </a>

           <a 
            href="#contacts"
            className="rounded-lg border-2 border-black dark:border-white bg-black dark:bg-white px-5 py-3 text-white dark:text-black"
            >
              Contact me
            </a>
        </div>
      </div>
    </section>
 )
}

export default Hero