export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#0b0f1a]/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <span className="font-semibold">portfolio</span>
        <nav className="flex gap-6 text-sm text-slate-300">
          <a href="#" className="hover:text-white">home</a>
          <a href="#projects" className="hover:text-white">projects</a>
          <a href="#contact" className="hover:text-white">contact</a>
        </nav>
      </div>
    </header>
  )
}
