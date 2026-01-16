export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      {/* PAGE TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10">
        my projects.
      </h1>

      {/* PROJECT GRID */}
      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard
          title="Reinforcement Learning for Genome Editing"
          description="A simulation-driven genome editing system that models DNA sequences as environments and uses reinforcement learning agents to perform codon-aware nucleotide corrections."
          tech={[
            'Python',
            'PyTorch',
            'Stable-Baselines3',
            'DQN',
            'PPO',
            'NumPy',
            'BioPython',
            'Pandas',
            'Matplotlib',
          ]}
        />

        <ProjectCard
          title="Computer Vision for Healthcare – Malnutrition Detection"
          description="A healthcare-focused computer vision pipeline for detecting malnutrition indicators using facial and body landmarks, combined with ML classification."
          tech={[
            'Python',
            'OpenCV',
            'MediaPipe',
            'XGBoost',
            'Scikit-learn',
            'NumPy',
            'Pandas',
            'FastAPI',
            'React.js',
          ]}
        />

        <ProjectCard
          title="Medical Imaging Analysis – Brain Tumor Detection"
          description="A deep learning-based medical imaging system for brain tumor detection and classification using CNN architectures on MRI scans."
          tech={[
            'Python',
            'TensorFlow',
            'Keras',
            'ResNet50',
            'OpenCV',
            'NumPy',
            'Pandas',
            'Matplotlib',
          ]}
        />

        <ProjectCard
          title="NOVA – AI Fashion Assistant"
          description="An AI-powered fashion assistant that provides personalized outfit recommendations using large language models and user preferences."
          tech={[
            'Python',
            'Hugging Face Transformers',
            'GPT API',
            'FastAPI',
            'React.js',
            'JavaScript',
            'HTML',
            'CSS',
          ]}
        />

        <ProjectCard
          title="Farm Futuro – Smart Agriculture System"
          description="A data-driven agriculture platform that analyzes crop and environmental data to assist farmers with insights and decision-making."
          tech={[
            'Python',
            'Scikit-learn',
            'Pandas',
            'NumPy',
            'Matplotlib',
            'Streamlit',
          ]}
        />

        <ProjectCard
          title="VisionVoice – Object Detection for Visually Impaired"
          description="An assistive system that detects objects in real time and converts visual information into audio feedback for visually impaired users."
          tech={[
            'Python',
            'YOLOv5',
            'PyTorch',
            'OpenCV',
            'Google Text-to-Speech API',
          ]}
        />

        <ProjectCard
          title="MFIDS – Multi-Faceted Intruder Detection System"
          description="A smart security platform similar to Ring, using real-time face and object recognition to trigger alerts or automated actions such as access control."
          tech={[
            'Python',
            'OpenCV',
            'YOLO',
            'Face Recognition',
            'Node.js',
            'Express.js',
            'React.js',
            'JavaScript',
            'HTML',
            'CSS',
          ]}
        />

        <ProjectCard
          title="CheemsBot – Discord AI Bot"
          description="A multifunctional Discord bot with AI-driven responses, music playback, and user interaction features."
          tech={[
            'Python',
            'Discord.py',
            'Spotify API',
            'SQLite',
          ]}
        />
      </div>
    </main>
  )
}

/* ===================== CARD ===================== */

function ProjectCard({
  title,
  description,
  tech,
}: {
  title: string
  description: string
  tech: string[]
}) {
  return (
    <div className="border border-white/10 rounded-xl p-5 bg-transparent hover:border-white/20 transition">
      <h3 className="text-lg font-semibold text-white mb-2">
        {title}
      </h3>

      <p className="text-sm text-slate-400 leading-relaxed mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
