'use client'

import { useState } from 'react'

export default function Experience() {
  const [tab, setTab] = useState<'work' | 'education'>('work')

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 space-y-6">

      {/* TOGGLE BOX */}
      <div className="border border-white/10 rounded-xl p-2 bg-transparent">
        <div className="relative grid grid-cols-2 rounded-lg overflow-hidden">
          <button
            onClick={() => setTab('work')}
            className={`z-10 py-3 text-sm transition ${
              tab === 'work'
                ? 'text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Work
          </button>

          <button
            onClick={() => setTab('education')}
            className={`z-10 py-3 text-sm transition ${
              tab === 'education'
                ? 'text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Education
          </button>

          {/* SLIDER */}
          <div
            className={`absolute inset-y-1 w-1/2 rounded-md bg-white/5 transition-all duration-300 ${
              tab === 'work' ? 'left-1' : 'left-1/2'
            }`}
          />
        </div>
      </div>

      {/* CONTENT BOX */}
      <div className="border border-white/10 rounded-xl p-6 bg-transparent">
        {tab === 'work' ? <WorkTimeline /> : <EducationTimeline />}
      </div>
    </section>
  )
}

/* ========================= WORK ========================= */

function WorkTimeline() {
  return (
    <Timeline>
      <TimelineItem
        logo="/woodnbeyond.png"
        title="Wood N Beyond"
        subtitle="Web Technologies Freelancer"
        period="2024 – 2025"
        points={[
          'Designed and deployed a production-ready ReactJS website, improving client visibility by 40%.',
          'Optimized frontend workflows improving load times and retention.',
        ]}
      />
    </Timeline>
  )
}

/* ======================= EDUCATION ======================= */

function EducationTimeline() {
  return (
    <Timeline>
      <TimelineItem
        logo="/vitap.png"
        title="Vellore Institute of Technology, AP"
        subtitle="B.Tech Computer Science and Engineering"
        period="2022 – Present"
        points={[
          'Specialization in Artificial Intelligence and Machine Learning.',
        ]}
        links={[
          { label: 'Final Year Project', href: '#' },
          { label: '2nd Year Project', href: '#' },
        ]}
      />
    </Timeline>
  )
}

/* ===================== TIMELINE CORE ===================== */

function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* CONTINUOUS LINE */}
      <div className="absolute left-6 -top-6 -bottom-6 w-px bg-white/20" />

      <div className="space-y-12">
        {children}
      </div>
    </div>
  )
}

function TimelineItem({
  logo,
  title,
  subtitle,
  period,
  points,
  links,
}: {
  logo: string
  title: string
  subtitle: string
  period: string
  points: string[]
  links?: { label: string; href: string }[]
}) {
  return (
    <div className="relative flex gap-6">
      {/* ICON */}
      <div className="w-12 flex justify-center relative z-10">
        <img
          src={logo}
          alt={title}
          className="w-10 h-10 rounded-full object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="flex-1">
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <h3 className="font-medium text-slate-100">{title}</h3>
            <p className="text-sm text-slate-400">{subtitle}</p>
          </div>
          <span className="text-sm text-slate-400">{period}</span>
        </div>

        <ul className="mt-3 space-y-2 text-sm text-slate-300 list-disc list-inside">
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>

        {/* SMALL WHITE BUTTONS */}
        {links && (
          <div className="mt-4 flex gap-3 flex-wrap">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center
                  px-3 py-1.5
                  rounded-md
                  bg-white text-black
                  text-sm font-medium
                  hover:bg-slate-200
                  transition
                "
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
