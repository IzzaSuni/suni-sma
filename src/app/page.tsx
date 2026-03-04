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
  { title: "Smart Attendance", desc: "IoT System", link: "#" }, 
  { title: "Career Portals", desc: "Multiple Enterprise Sites", link: "#" }
];

// --- Components ---
const SkillTag = ({ name, type }: { name: string, type: 'front' | 'back' }) => (
  <motion.span 
    whileHover={{ scale: 1.1, rotate: 2 }}
    className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all cursor-default shadow-lg ${
      type === 'front' 
        ? 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:border-cyan-400 hover:shadow-cyan-500/20' 
        : 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border-purple-500/20 hover:border-purple-400 hover:shadow-purple-500/20'
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
    whileHover={{ y: -8, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="group block p-5 bg-slate-900/40 backdrop-blur-xl border border-slate-800 hover:border-blue-500/50 rounded-2xl transition-all relative overflow-hidden shadow-xl hover:shadow-blue-500/10"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500"></div>
    <div className="flex justify-between items-start mb-3 relative z-10">
      <h3 className="font-bold text-lg text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">{title}</h3>
      <ExternalLink size={16} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
    </div>
    <p className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors leading-relaxed">{desc}</p>
  </motion.a>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 selection:bg-purple-500/30 selection:text-purple-200 p-4 md:p-8 lg:p-12 flex items-center justify-center overflow-x-hidden">
      
      {/* 🌌 Animated Aurora Background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-purple-600/30 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-blue-600/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ x: [-50, 50, -50], y: [-50, 50, -50], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] bg-pink-500/10 rounded-full blur-[100px]"
        />
      </div>

      <motion.main 
        initial="hidden"
        animate="visible"
        variants={containerVar}
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10"
      >
        
        {/* LEFT COLUMN: Hero & Contact (Sticky on Desktop) */}
        <motion.aside className="lg:col-span-4 lg:sticky lg:top-12 h-fit space-y-6">
          <motion.div variants={itemVar} className="bg-slate-900/60 backdrop-blur-2xl border border-slate-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[60px]"></div>

            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center text-4xl font-bold text-white mb-6 shadow-lg shadow-purple-500/30"
            >
              AS
            </motion.div>
            
            <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">
              Akbar Izza<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Mahendra Suni</span>
            </h1>
            <h2 className="text-lg text-slate-400 font-medium mb-6">Software Engineer</h2>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              Crafting high-performance web experiences with 
              <span className="text-blue-400 font-semibold"> React</span>, 
              <span className="text-green-400 font-semibold"> Node.js</span>, and 
              <span className="text-cyan-400 font-semibold"> Go</span>.
            </p>

            <div className="flex gap-3">
              <motion.a whileHover={{ y: -3, backgroundColor: "#0077b5" }} href="https://linkedin.com/in/akbar-suni/" target="_blank" className="p-3 bg-slate-800 text-slate-400 hover:text-white rounded-xl transition-colors border border-slate-700">
                <Linkedin size={20} />
              </motion.a>
              <motion.a whileHover={{ y: -3, backgroundColor: "#333" }} href="https://github.com/IzzaSuni" target="_blank" className="p-3 bg-slate-800 text-slate-400 hover:text-white rounded-xl transition-colors border border-slate-700">
                <Github size={20} />
              </motion.a>
              <motion.a whileHover={{ y: -3 }} href="mailto:akbarizza09@gmail.com" className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl transition-all shadow-lg hover:shadow-purple-500/25 flex-1 flex items-center justify-center gap-2 font-bold">
                <Mail size={18} /> <span>Hire Me</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Status Card */}
          <motion.div variants={itemVar} className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-4 rounded-2xl flex items-center gap-4 shadow-lg">
            <div className="relative flex-shrink-0">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-sm text-slate-200 font-medium">Open to new opportunities</span>
          </motion.div>
        </motion.aside>

        {/* RIGHT COLUMN: Content */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Experience Section */}
          <motion.section variants={itemVar} className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 p-8 rounded-3xl relative">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-yellow-400 text-3xl">⚡</span> Experience
            </h3>
            <div className="space-y-10">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l border-slate-700 last:border-0 pb-2 group">
                  <div className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:bg-blue-500 group-hover:scale-125 transition-all"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h4 className="text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors">{exp.role}</h4>
                    <span className="text-xs text-slate-400 font-mono bg-slate-800 px-3 py-1 rounded-full border border-slate-700">{exp.period}</span>
                  </div>
                  <div className="text-blue-400 text-sm font-bold mb-3">{exp.company}</div>
                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{exp.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Projects Grid */}
          <motion.section variants={itemVar}>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 px-2">
              <span className="text-purple-400 text-3xl">🚀</span> Featured Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {projects.map((proj, idx) => (
                <ProjectCard key={idx} {...proj} />
              ))}
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section variants={itemVar} className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-cyan-400 text-3xl">🛠️</span> Tech Stack
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Frontend & Design</h4>
                <div className="flex flex-wrap gap-2.5">
                  {skills.frontend.map(s => <SkillTag key={s} name={s} type="front" />)}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Backend & Cloud</h4>
                <div className="flex flex-wrap gap-2.5">
                  {skills.backend.map(s => <SkillTag key={s} name={s} type="back" />)}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer variants={itemVar} className="text-center pt-10 pb-6 text-slate-600 text-sm font-medium">
            <p>&copy; {new Date().getFullYear()} Akbar Izza Mahendra Suni. All rights reserved.</p>
            <p className="mt-2 text-slate-700">Crafted with <span className="text-red-500">❤</span> using Next.js 15 & Tailwind</p>
          </motion.footer>

        </div>
      </motion.main>
    </div>
  );
}
