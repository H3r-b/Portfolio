import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#0b0f1a]/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex gap-6 text-sm">
        <Link
          href="/"
          className="text-slate-400 hover:text-white transition"
        >
          home
        </Link>

        <Link
          href="/projects"
          className="text-slate-400 hover:text-white transition"
        >
          projects
        </Link>

        <Link
          href="/contact"
          className="text-slate-400 hover:text-white transition"
        >
          contact
        </Link>
      </div>
    </header>
  )
}
