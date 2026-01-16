import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

const RATE_LIMIT_WINDOW = 10 * 60 * 1000
const MAX_REQUESTS = 5
const ipRequests = new Map<string, number[]>()

export async function POST(req: Request) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown'

  const now = Date.now()
  const timestamps = ipRequests.get(ip) || []

  const recent = timestamps.filter(
    (t) => now - t < RATE_LIMIT_WINDOW
  )

  if (recent.length >= MAX_REQUESTS) {
    return NextResponse.json(
      { error: 'Too many requests. Try again later.' },
      { status: 429 }
    )
  }

  recent.push(now)
  ipRequests.set(ip, recent)

  const { name, email, message, company, captcha } = await req.json()

  // Honeypot check
  if (company) {
    return NextResponse.json({ success: true })
  }

  // Captcha check
  if (captcha !== '7') {
    return NextResponse.json(
      { error: 'Captcha failed' },
      { status: 400 }
    )
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Missing fields' },
      { status: 400 }
    )
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: `New Contact Message from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p>${message}</p>
    `,
  })

  return NextResponse.json({ success: true })
}
