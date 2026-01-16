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

        <button className="mt-6 px-5 py-2.5 rounded-md border border-white/10 text-sm text-slate-200 hover:bg-white/5 transition">
          Resume
        </button>
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
