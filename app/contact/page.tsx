'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [captcha, setCaptcha] = useState('')

  const CAPTCHA_ANSWER = '7' // 3 + 4

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    const form = e.currentTarget
    const formData = new FormData(form)

    // Simple captcha validation (client-side)
    if (captcha !== CAPTCHA_ANSWER) {
      setLoading(false)
      setError('Captcha failed. Please try again.')
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
        captcha,
      }),
    })

    setLoading(false)

    if (res.ok) {
      setSuccess(true)
      form.reset()
      setCaptcha('')
    } else {
      const data = await res.json()
      setError(data.error || 'Something went wrong. Please try again.')
    }
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      {/* TITLE */}
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
            className="w-full rounded-md bg-transparent border border-white/10 px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-white/30"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full rounded-md bg-transparent border border-white/10 px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-white/30"
          />
        </div>

        {/* HONEYPOT (HIDDEN) */}
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
          className="w-full rounded-md bg-transparent border border-white/10 px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-white/30 resize-none"
        />

        {/* CAPTCHA */}
        <input
          required
          value={captcha}
          onChange={(e) => setCaptcha(e.target.value)}
          placeholder="What is 3 + 4?"
          className="w-full rounded-md bg-transparent border border-white/10 px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-white/30"
        />

        {/* SUBMIT */}
        <button
          disabled={loading}
          className="
            w-full rounded-md
            bg-white text-black
            py-3 font-medium
            hover:bg-slate-200
            transition
            disabled:opacity-60
          "
        >
          {loading ? 'Sending…' : 'Send Message →'}
        </button>

        {/* FOOTER TEXT */}
        <p className="text-xs text-slate-400">
          By submitting this form, you agree to the{' '}
          <a
            href="/privacy"
            className="underline hover:text-white transition"
          >
            privacy policy
          </a>
          .
        </p>

        {/* SUCCESS */}
        {success && (
          <p className="text-green-400 text-sm">
            Message sent successfully. I’ll get back to you soon!
          </p>
        )}

        {/* ERROR */}
        {error && (
          <p className="text-red-400 text-sm">
            {error}
          </p>
        )}
      </form>
    </main>
  )
}
