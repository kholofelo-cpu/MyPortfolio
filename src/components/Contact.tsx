function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold">Contact</h2>

        <p className="mt-4 text-gray-600">
          Intereseted in working together?
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
           <a 
           href="mailto:kshokane58@gmailcom"
           className="rounded-lg bg-black px-5 py-3 text-white"
           >
            Email me
           </a>

           <a 
           href="htpps://github.com/kholofelo-cpu"
           target="_blank"
           rel="noreferrer"
           className="rounded-lg border px-5 py-3"
           >
            GitHub
           </a>
           
           <a 
           href="https://www.linkedin.com/in/KholofeloShokake"
           target="_blank"
           rel="noreferrer"
           className="rounded-lg border px-5 py-3"
           >
            LinkedIn
           </a>
        </div>
      </div>
    </section>
  )
}

export default Contact