import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="
        bg-[#0b0f1a] text-slate-100
        transition-colors duration-300
      ">
        {children}
      </body>
    </html>
  )
}
