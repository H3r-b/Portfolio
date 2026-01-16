'use client'

import { useState } from 'react'

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work')

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="bg-white/5 border border-white/10 rounded-xl p-4">

        {/* TOGGLE BAR */}
        <div className="relative grid grid-cols-2 bg-black/40 rounded-lg p-1 mb-6">
          <button
            onClick={() => setActiveTab('work')}
            className={`z-10 py-2 text-sm rounded-md transition ${
              activeTab === 'work'
                ? 'text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Work
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`z-10 py-2 text-sm rounded-md transition ${
              activeTab === 'education'
                ? 'text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Education
          </button>

          {/* SLIDING BACKGROUND */}
          <div
            className={`absolute top-1 bottom-1 w-1/2 rounded-md bg-white/10 transition-all duration-300 ${
              activeTab === 'work' ? 'left-1' : 'left-1/2'
            }`}
          />
        </div>

        {/* CONTENT */}
        {activeTab === 'work' ? <WorkContent /> : <EducationContent />}
      </div>
    </section>
  )
}

function WorkContent() {
  return (
    <div className="space-y-6">

      <div className="flex gap-4">
        <div className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center text-xs font-bold">
          DBS
        </div>

        <div className="flex-1">
          <div className="flex justify-between">
            <h3 className="font-medium">DBS Bank</h3>
            <span className="text-sm text-slate-400">Jul 2025 – Present</span>
          </div>

          <p className="text-sm text-slate-400">Associate</p>

          <ul className="mt-3 space-y-2 text-sm text-slate-300 list-disc list-inside">
            <li>
              Built Java, Spring Boot, and Activiti services for banking workflows.
            </li>
            <li>
              Improved JUnit test coverage above 80% and led a team knowledge base.
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

function EducationContent() {
  return (
    <div className="space-y-6">

      <div className="flex gap-4">
        <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
          SIT
        </div>

        <div className="flex-1">
          <div className="flex justify-between">
            <h3 className="font-medium">
              Singapore Institute of Technology
            </h3>
            <span className="text-sm text-slate-400">2019 – 2023</span>
          </div>

          <p className="text-sm text-slate-400">
            Bachelor of Computer Science
          </p>

          <p className="mt-2 text-sm text-slate-300">
            Specialized in real-time interactive simulation and software engineering.
          </p>
        </div>
      </div>

    </div>
  )
}
