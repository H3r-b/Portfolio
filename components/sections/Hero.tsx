import { Linkedin, Github, Mail, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      {/* LEFT */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100">
          hi Herbert here. <span>👋</span>
        </h1>

        <p className="mt-4 max-w-lg text-slate-400">
          21yo software engineer based in India.
        </p>

        <p className="mt-4 max-w-lg text-slate-400">
          Backend by profession, full-stack by passion.
          I build and self-host the lot.
        </p>

        {/* ACTIONS */}
        <div className="mt-6 flex items-center gap-4">
          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              px-5 py-2.5 rounded-md
              border border-white/20
              text-sm text-slate-200
              bg-transparent
              hover:bg-white/10
              active:bg-white/20
              transition-colors
            "
          >
            Resume
            <Download className="w-4 h-4" />
          </a>

          {/* Socials */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            className="text-slate-400 hover:text-white transition"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex justify-center md:justify-end">
        <img
          src="/profile.jpg"
          alt="profile"
          className="w-64 rounded-2xl shadow-lg"
        />
      </div>
    </section>
  )
}
