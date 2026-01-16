'use client'

import { useEffect, useState } from 'react'
import Toast from '@/components/ui/Toast'

type Captcha = {
  question: string
  answer: string
}

function generateCaptcha(): Captcha {
  const a = Math.floor(Math.random() * 9) + 1
  const b = Math.floor(Math.random() * 9) + 1
  const isAdd = Math.random() > 0.5

  return {
    question: `What is ${a} ${isAdd ? '+' : '-'} ${b}?`,
    answer: String(isAdd ? a + b : a - b),
  }
}

const inputClass =
  'w-full rounded-md bg-transparent border border-white/15 px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-white/35 transition'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [captchaInput, setCaptchaInput] = useState('')
  const [captcha, setCaptcha] = useState<Captcha | null>(null)
  const [toast, setToast] = useState<{
    message: string
    type: 'success' | 'error'
  } | null>(null)

  useEffect(() => {
    setCaptcha(generateCaptcha())
  }, [])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 3000)
    return () => clearTimeout(t)
  }, [toast])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!captcha) return

    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    if (captchaInput.trim() !== captcha.answer) {
      setToast({ message: 'Captcha failed. Try again.', type: 'error' })
      setCaptchaInput('')
      setCaptcha(generateCaptcha())
      setLoading(false)
      return
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        company: formData.get('company'),
      }),
    })

    setLoading(false)
    setCaptchaInput('')
    setCaptcha(generateCaptcha())

    if (res.ok) {
      setToast({
        message: 'Message sent successfully. I’ll get back to you soon!',
        type: 'success',
      })
      form.reset()
    } else {
      setToast({ message: 'Something went wrong. Please try again.', type: 'error' })
    }
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10">
        contact me.
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* NAME + EMAIL */}
        <div className="grid md:grid-cols-2 gap-4">
          <input name="name" required placeholder="Name" className={inputClass} />
          <input name="email" type="email" required placeholder="Email" className={inputClass} />
        </div>

        {/* HONEYPOT */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />

        {/* MESSAGE */}
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Drop a note with any website feedback or career opportunities, or just say hi. Where are you from? 😊"
          className={`${inputClass} resize-none`}
        />

        {/* CAPTCHA */}
        {captcha && (
          <input
            required
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
            placeholder={captcha.question}
            className={inputClass}
          />
        )}

        {/* SUBMIT */}
        <button
          disabled={loading}
          className="w-full rounded-md bg-white text-black py-3 font-medium hover:bg-slate-200 transition disabled:opacity-60"
        >
          {loading ? 'Sending…' : 'Send Message →'}
        </button>

        <p className="text-xs text-slate-400">
          By submitting this form, you agree to the{' '}
          <a href="/privacy" className="underline hover:text-white">
            privacy policy
          </a>
          .
        </p>
      </form>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </main>
  )
}
