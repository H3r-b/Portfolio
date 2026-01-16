'use client'

import { useState } from 'react'

export default function Experience() {
  const [tab, setTab] = useState<'work' | 'education'>('work')

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="bg-white/5 p-6 rounded-xl">
        <div className="flex gap-4 mb-6">
          <button onClick={() => setTab('work')}
            className={tab === 'work' ? 'text-white' : 'text-slate-400'}>
            Work
          </button>
          <button onClick={() => setTab('education')}
            className={tab === 'education' ? 'text-white' : 'text-slate-400'}>
            Education
          </button>
        </div>

        {tab === 'work' ? (
          <p>Software Engineer @ Company</p>
        ) : (
          <p>Bachelor’s in Computer Science</p>
        )}
      </div>
    </section>
  )
}
