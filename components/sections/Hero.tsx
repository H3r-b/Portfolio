export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold">
          hi Herbert here. <span>👋</span>
        </h1>

        <p className="mt-4 text-slate-600 dark:text-slate-300">
          21yo software engineer based in India.
        </p>

        <p className="mt-4 max-w-lg text-slate-700 dark:text-slate-400">
          Backend by profession, full-stack by passion.
          I build and self-host the lot.
        </p>

        <button className="mt-6 px-4 py-2 rounded-md border border-black/10 dark:border-white/10">
          Resume
        </button>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="relative">
          <img
            src="/profile.jpg"
            className="w-64 rounded-2xl shadow-lg"
            alt="profile"
          />
        </div>
      </div>
    </section>
  )
}
