export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#0b0f1a]/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <nav className="flex gap-6 text-sm">
          <a className="text-slate-400 hover:text-white transition-colors">
            home
          </a>
          <a className="text-slate-400 hover:text-white transition-colors">
            projects
          </a>
          <a className="text-slate-400 hover:text-white transition-colors">
            blog
          </a>
          <a className="text-slate-400 hover:text-white transition-colors">
            contact
          </a>
        </nav>
      </div>
    </header>
  )
}
