export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-slate-300">
      {/* H1 */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
        Privacy Policy
      </h1>

      <p className="text-sm text-slate-400 mb-10">
        Last updated: January 2026
      </p>

      <section className="space-y-8 leading-relaxed">
        {/* H2 */}
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          TL;DR
        </h2>

        <p>
          This site does not track you, run ads, or use analytics cookies.
          If you contact me, your message is only used to reply to you.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-white">
          Hey 👋
        </h2>

        <p>
          Thanks for stopping by. This is my personal portfolio and blog where
          I share my work, projects, and thoughts. I value privacy and aim to
          keep things simple and transparent.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-white">
          What I collect (and why)
        </h2>

        <p>
          This website is mostly static. There are no user accounts, no ads,
          and no tracking tools monitoring your activity.
        </p>

        <p>
          The only time information may be collected is if you choose to
          contact me directly.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-white">
          Contacting me
        </h2>

        <p>
          If you email me or use a contact form on this site, your email address
          and message will only be used to respond to you and continue the
          conversation.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-white">
          How information is used
        </h2>

        <ul className="list-disc list-inside space-y-2">
          <li>To respond to messages and inquiries</li>
          <li>To maintain and improve the website</li>
        </ul>

        <p>
          I do not sell, trade, or rent personal information. If you
          accidentally share something you would prefer not to have stored,
          just let me know and I will remove it.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-white">
          Questions?
        </h2>

        <p>
          If you have questions, concerns, or just want to say hi, feel free to
          email me at{' '}
          <a
            href="mailto:hello@herbert-george.com"
            className="text-white underline hover:text-slate-200"
          >
            hello@herbert-george.com
          </a>
          .
        </p>
      </section>
    </main>
  )
}
