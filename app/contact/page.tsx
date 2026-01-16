'use client'

import { useEffect, useState } from 'react'
import Toast from '@/components/ui/Toast'

function generateCaptcha() {
  const a = Math.floor(Math.random() * 9) + 1
  const b = Math.floor(Math.random() * 9) + 1
  const isAdd = Math.random() > 0.5

  return {
    question: `What is ${a} ${isAdd ? '+' : '-'} ${b}?`,
    answer: String(isAdd ? a + b : a - b),
  }
}

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<{
    message: string
    type: 'success' | 'error'
  } | null>(null)

  const [captcha, setCaptcha] = useState('')
  const [captchaData, setCaptchaData] = useState(generateCaptcha())

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 3000)
      return () => clearTimeout(t)
    }
  }, [toast])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    // captcha check (client)
    if (captcha.trim() !== captchaData.answer) {
      setToast({ message: 'Captcha failed. Try again.', type: 'error' })
      setCaptcha('')
      setCaptchaData(generateCaptcha())
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
        company: formData.get('company'), // honeypot
        captcha: captchaData.answer,
      }),
    })

    setLoading(false)
    setCaptcha('')
    setCaptchaData(generateCaptcha())

    if (res.ok) {
      setToast({
        message: 'Message sent successfully!',
        type: 'success',
      })
      form.reset()
    } else {
      setToast({
        message: 'Something went wrong. Please try again.',
        type: 'error',
      })
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
          <input
            name="name"
            required
            placeholder="Name"
            className="input"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="input"
          />
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
          rows={6}
          required
          placeholder="Drop a note with feedback, opportunities, or just say hi."
          className="input resize-none"
        />

        {/* CAPTCHA */}
        <input
          required
          value={captcha}
          onChange={(e) => setCaptcha(e.target.value)}
          placeholder={captchaData.question}
          className="input"
        />

        {/* SUBMIT */}
        <button
          disabled={loading}
          className="
            w-full py-3 rounded-md
            bg-white text-black font-medium
            hover:bg-slate-200 transition
            disabled:opacity-60
          "
        >
          {loading ? 'Sending…' : 'Send Message →'}
        </button>

        <p className="text-xs text-slate-400">
          By submitting, you agree to the{' '}
          <a href="/privacy" className="underline hover:text-white">
            privacy policy
          </a>
          .
        </p>
      </form>

      {/* TOAST */}
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
