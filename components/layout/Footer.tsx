import { Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between text-sm text-slate-400">

        {/* LEFT */}
        <div className="flex items-center gap-2">
          <span>© 2026</span>

          <a
            href="https://herbert-george.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            herbert-george.com
          </a>

          <span>|</span>

          <a
            href="/privacy"
            className="font-semibold hover:text-white transition"
          >
            privacy?
          </a>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="mailto:youremail@domain.com"
            className="hover:text-white transition"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
