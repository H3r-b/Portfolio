'use client'

import { useTheme } from '@/components/theme/ThemeProvider'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-[#0b0f1a]/70 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <nav className="flex gap-6 text-sm text-slate-600 dark:text-slate-300">
          <a className="hover:text-black dark:hover:text-white">home</a>
          <a className="hover:text-black dark:hover:text-white">projects</a>
          <a className="hover:text-black dark:hover:text-whit     e">blog</a>
          <a className="hover:text-black dark:hover:text-white">contact</a>
        </nav>

        {/* THEME TOGGLE */}
        <button
          onClick={toggleTheme}
          className="text-xl"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  )
}
