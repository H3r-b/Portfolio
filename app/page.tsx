import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import Experience from '@/components/sections/Experience'


export default function Page() {
  return (
    <main className="min-h-screen bg-[#0b0f1a] text-slate-100">
      <Navbar />
      <Hero />
      <Experience />
    </main>
  )
}
