'use client';

import { motion, Variants } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

// --- Animations ---
const containerVar: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVar: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 50, damping: 15 } 
  }
};

// --- Data ---
const skills = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Redux', 'Vite', 'Framer Motion'],
  backend: ['Node.js', 'Go (Golang)', 'Ruby on Rails', 'PostgreSQL', 'MongoDB', 'Docker', 'IoT']
};

const experiences = [
  {
    role: "Product Engineer (Frontend)",
    company: "Rakamin",
    period: "2023 - Present",
    desc: "Building scalable LMS & career platforms. Leading frontend initiatives."
  },
  {
    role: "Fullstack AI Engineer",
    company: "Brandrev.AI",
    period: "2024",
    desc: "Migrated AI systems, implemented RAG & real-time search capabilities."
  },
  {
    role: "Fullstack Developer",
    company: "MyMedica",
    period: "2022 - Present",
    desc: "Developing healthcare management systems with Go & Next.js."
  }
];

const projects = [
  { title: "Rakamin Academy", desc: "EdTech Platform", link: "https://rakamin.com" },
  { title: "Brandrev.AI", desc: "AI Branding Tool", link: "https://app.brandrev.ai" },
  { title: "MyMedica", desc: "Healthcare App", link: "https://app.mymedica.id" },
  { title: "By.U", desc: "Digital Telco Site", link: "https://byu.id" },
  { title: "Smart Attendance", desc: "IoT System", link: "#" }, // Placeholder if no link
  { title: "Career Portals", desc: "Multiple Enterprise Sites", link: "#" }
];

// --- Components ---
const SkillTag = ({ name, type }: { name: string, type: 'front' | 'back' }) => (
  <motion.span 
    whileHover={{ scale: 1.1, rotate: 2 }}
    className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors cursor-default ${
      type === 'front' 
        ? 'bg-blue-500/10 text-blue-300 border-blue-500/20 hover:border-blue-400' 
        : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:border-emerald-400'
    }`}
  >
    {name}
  </motion.span>
);

const ProjectCard = ({ title, desc, link }: { title: string, desc: string, link: string }) => (
  <motion.a 
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    variants={itemVar}
    whileHover={{ y: -5, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="group block p-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-blue-500/50 rounded-xl transition-all relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
    <div className="flex justify-between items-start mb-2 relative z-10">
      <h3 className="font-bold text-slate-100 group-hover:text-blue-400 transition-colors">{title}</h3>
      <ExternalLink size={14} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
    </div>
    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{desc}</p>
  </motion.a>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30 selection:text-blue-200 p-4 md:p-8 lg:p-12 flex items-center justify-center">
      
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]"></div>
      </div>

      <motion.main 
        initial="hidden"
        animate="visible"
        variants={containerVar}
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 relative z-10"
      >
        
        {/* LEFT COLUMN: Hero & Contact (Sticky on Desktop) */}
        <motion.aside className="lg:col-span-4 lg:sticky lg:top-12 h-fit space-y-6">
          <motion.div variants={itemVar} className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-6 rounded-3xl shadow-2xl">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-4xl font-bold text-white mb-6 shadow-lg shadow-blue-500/20">
              AS
            </div>
            
            <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
              Akbar Izza<br/>Mahendra Suni
            </h1>
            <h2 className="text-lg text-blue-400 font-medium mb-4">Software Engineer</h2>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Specializing in robust full-stack solutions. Delivering clean code & scalable architecture. 
              Focus on React, Go, & Modern Web.
            </p>

            <div className="flex gap-3">
              <motion.a whileHover={{ y: -3 }} href="https://linkedin.com/in/akbar-suni/" target="_blank" className="p-2.5 bg-slate-800 hover:bg-[#0077b5] text-slate-400 hover:text-white rounded-xl transition-all border border-slate-700 hover:border-[#0077b5]">
                <Linkedin size={20} />
              </motion.a>
              <motion.a whileHover={{ y: -3 }} href="https://github.com/IzzaSuni" target="_blank" className="p-2.5 bg-slate-800 hover:bg-[#333] text-slate-400 hover:text-white rounded-xl transition-all border border-slate-700 hover:border-[#333]">
                <Github size={20} />
              </motion.a>
              <motion.a whileHover={{ y: -3 }} href="mailto:akbarizza09@gmail.com" className="p-2.5 bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white rounded-xl transition-all border border-slate-700 hover:border-blue-600 flex-1 flex items-center justify-center gap-2 font-medium">
                <Mail size={18} /> <span>Email Me</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Status Card */}
          <motion.div variants={itemVar} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-4 rounded-2xl flex items-center gap-3">
            <div className="relative">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-sm text-slate-300">Open to new opportunities</span>
          </motion.div>
        </motion.aside>

        {/* RIGHT COLUMN: Content */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Experience Section */}
          <motion.section variants={itemVar} className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 p-6 md:p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-blue-500">⚡</span> Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-6 border-l border-slate-700 last:border-0 pb-1">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-900 border-2 border-blue-500"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h4 className="font-bold text-slate-200">{exp.role}</h4>
                    <span className="text-xs text-slate-500 font-mono bg-slate-800/50 px-2 py-0.5 rounded">{exp.period}</span>
                  </div>
                  <div className="text-blue-400 text-sm font-medium mb-2">{exp.company}</div>
                  <p className="text-sm text-slate-400 leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Projects Grid */}
          <motion.section variants={itemVar}>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 px-2">
              <span className="text-purple-500">🚀</span> Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {projects.map((proj, idx) => (
                <ProjectCard key={idx} {...proj} />
              ))}
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section variants={itemVar} className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 p-6 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map(s => <SkillTag key={s} name={s} type="front" />)}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Backend & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map(s => <SkillTag key={s} name={s} type="back" />)}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer variants={itemVar} className="text-center pt-8 pb-4 text-slate-600 text-sm">
            <p>&copy; {new Date().getFullYear()} Akbar Izza Mahendra Suni.</p>
            <p>Built with Next.js & Tailwind.</p>
          </motion.footer>

        </div>
      </motion.main>
    </div>
  );
}
