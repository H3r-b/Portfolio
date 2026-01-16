'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    const formData = new FormData(e.currentTarget)

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
    })

    setLoading(false)

    if (res.ok) {
      setSuccess(true)
      e.currentTarget.reset()
    }
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10">
        contact me.
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* NAME + EMAIL */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="name"
            required
            placeholder="Name"
            className="w-full rounded-md bg-transparent border border-white/10 px-4 py-3 text-slate-200 focus:outline-none focus:border-white/30"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full rounded-md bg-transparent border border-white/10 px-4 py-3 text-slate-200 focus:outline-none focus:border-white/30"
          />
        </div>

        {/* MESSAGE */}
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Drop a note with any website feedback or career opportunities, or just say hi. Where are you from? 😊"
          className="w-full rounded-md bg-transparent border border-white/10 px-4 py-3 text-slate-200 focus:outline-none focus:border-white/30 resize-none"
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
          {loading ? 'Sending...' : 'Send Message →'}
        </button>

        {/* FOOTER TEXT */}
        <p className="text-xs text-slate-400">
          By submitting this form, I agree to the{' '}
          <a href="/privacy" className="underline hover:text-white">
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
      </form>
    </main>
  )
}
