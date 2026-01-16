import Link from 'next/link'

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          featured projects
        </h2>

        <Link
          href="/projects"
          className="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition"
        >
          view more →
        </Link>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* PROJECT 1 */}
        <ProjectCard
          image="/genome-rl.png"
          title="Reinforcement Learning for Genome Editing"
          description="A simulation-driven genome editing framework that models DNA sequences as dynamic environments. Reinforcement learning agents trained with DQN and PPO learn to perform codon-aware nucleotide edits, optimizing edit accuracy while minimizing off-target mutations. The system demonstrates how sequential decision-making can be applied to complex biological editing problems, achieving faster convergence and higher precision compared to heuristic methods."
          tags={[
            'Python',
            'PyTorch',
            'Reinforcement Learning',
            'DQN',
            'PPO',
            'Bioinformatics',
          ]}
          links={[
            { label: 'Source', href: '#' },
          ]}
        />

        {/* PROJECT 2 */}
        <ProjectCard
          image="/mfids.png"
          title="MFIDS – Multi-Faceted Intruder Detection System"
          description="A smart, camera-based security platform , designed to be fully programmable and extensible. MFIDS uses real-time computer vision to detect and recognize people, triggering automated actions such as unlocking doors or activating connected devices for authorized users. When unknown individuals are detected, the system raises alerts and flags anomalies, making it adaptable to a wide range of security and access-control scenarios beyond just door locks."
          tags={[
            'Python',
            'OpenCV',
            'YOLO',
            'Computer Vision',
            'Security Systems',
            'IoT Integration',
          ]}
          links={[
            { label: 'Source', href: '#' },
          ]}
        />
      </div>
    </section>
  )
}

/* ===================== CARD ===================== */

function ProjectCard({
  image,
  title,
  description,
  tags,
  links,
}: {
  image: string
  title: string
  description: string
  tags: string[]
  links: { label: string; href: string }[]
}) {
  return (
    <div className="border border-white/10 rounded-xl p-5 bg-transparent hover:border-white/20 transition">
      {/* IMAGE */}
      <div className="rounded-lg overflow-hidden mb-4 bg-black/40">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-semibold text-white mb-2">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-sm text-slate-400 leading-relaxed mb-4">
        {description}
      </p>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="flex gap-3 flex-wrap">
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
    </div>
  )
}
