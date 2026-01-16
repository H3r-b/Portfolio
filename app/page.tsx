import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Footer from '@/components/layout/Footer'


export default function Page() {
  return (
    <main className="min-h-screen bg-[#0b0f1a] text-slate-100">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Footer />
    </main>
  )
}
