'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ExperienceItem = ({ role, company, period, description, skills }: { role: string, company: string, period: string, description: string, skills?: string[] }) => (
  <motion.div 
    variants={fadeIn}
    className="mb-10 relative pl-8 border-l-2 border-gray-200 last:mb-0"
  >
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm"></div>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
      <h3 className="text-xl font-bold text-gray-900">{role}</h3>
      <span className="text-sm text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full border border-blue-100">{period}</span>
    </div>
    <p className="text-lg text-gray-700 font-medium mb-3">{company}</p>
    <p className="text-gray-600 mb-4 leading-relaxed whitespace-pre-line">{description}</p>
    {skills && (
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full border border-gray-200 hover:bg-gray-200 transition-colors">
            {skill}
          </span>
        ))}
      </div>
    )}
  </motion.div>
);

const ProjectCard = ({ title, desc, link }: { title: string, desc: string, link?: string }) => (
  <motion.div 
    variants={fadeIn}
    whileHover={{ y: -5 }}
    className="p-6 rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all bg-white group h-full flex flex-col"
  >
    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h4>
    <p className="text-gray-600 flex-grow leading-relaxed">{desc}</p>
    {link && (
      <a href={link} target="_blank" rel="noreferrer" className="text-sm text-blue-600 mt-4 inline-flex items-center font-semibold hover:underline">
        View Project 
        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    )}
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Hero Section */}
      <header className="bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-32 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
          >
            <motion.div variants={fadeIn} className="relative group">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-5xl text-white font-bold shadow-2xl transform group-hover:scale-105 transition-transform duration-300 ring-4 ring-white">
                AS
              </div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute bottom-2 right-2 w-10 h-10 bg-green-500 border-4 border-white rounded-full shadow-md"
                title="Available for hire"
              ></motion.div>
            </motion.div>
            
            <div className="text-center md:text-left flex-1">
              <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                Akbar Izza Mahendra Suni
              </motion.h1>
              <motion.p variants={fadeIn} className="text-2xl text-blue-600 font-medium mb-6">Software Engineer (Fullstack)</motion.p>
              <motion.p variants={fadeIn} className="text-xl text-gray-600 max-w-2xl leading-relaxed mb-8">
                Specializing in full-stack development, delivering clean, maintainable, and scalable code. 
                Skilled in building robust web applications with modern frameworks.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href="mailto:akbarizza09@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-medium">
                  <Mail className="w-5 h-5" /> Email Me
                </a>
                <div className="flex gap-3">
                  <a href="#" className="p-3 text-gray-600 hover:text-blue-600 transition-all border border-gray-200 rounded-full hover:border-blue-200 hover:bg-blue-50 hover:-translate-y-0.5">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 text-gray-600 hover:text-gray-900 transition-all border border-gray-200 rounded-full hover:border-gray-400 hover:bg-gray-50 hover:-translate-y-0.5">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-20 space-y-24">
        
        {/* Skills Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-10 h-1.5 bg-blue-600 rounded-full"></span>
            Technical Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-blue-500">⚛️</span> Frontend & Mobile
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Vite', 'Redux', 'React Query'].map(s => (
                  <span key={s} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold border border-blue-100 hover:bg-blue-100 transition-colors cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-green-500">🛠️</span> Backend & Others
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Go (Golang)', 'Ruby on Rails', 'MongoDB', 'PostgreSQL', 'NestJS', 'Docker', 'IoT/Embedded'].map(s => (
                  <span key={s} className="px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-semibold border border-green-100 hover:bg-green-100 transition-colors cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-bold text-gray-900 mb-10 flex items-center gap-3">
             <span className="w-10 h-1.5 bg-blue-600 rounded-full"></span>
            Work Experience
          </motion.h2>
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm">
            <ExperienceItem 
              role="Product Engineer (Frontend)"
              company="Rakamin"
              period="Jan 2023 – Present"
              description={`Developed and enhanced features for the Learning Management System (LMS).
              Translated UI/UX designs into responsive, pixel-perfect front-end components.
              Led and mentored junior developers, providing technical guidance.`}
              skills={['React.js', 'Next.js', 'TypeScript', 'Playwright']}
            />
             <ExperienceItem 
              role="Fullstack AI Engineer"
              company="Brandrev.AI [Freelance]"
              period="May 2024 – Aug 2024"
              description={`Migrated AI platform integration from OpenAI API to OpenRouter.
              Enabled web search capabilities to enhance AI responses with real-time information.`}
              skills={['Next.js', 'Ruby on Rails', 'OpenRouter', 'RAG']}
            />
            <ExperienceItem 
              role="Fullstack Developer"
              company="MyMedica [Freelance]"
              period="Nov 2022 – Present"
              description={`Handled daily bug fixes and maintained legacy codebase.
              Enhanced user experience (UX) through UI improvements and performance optimization.`}
              skills={['Next.js', 'Go (Gin)', 'Tailwind CSS']}
            />
            <ExperienceItem 
              role="Frontend Developer"
              company="By.U [Freelance]"
              period="Mar 2022 – Aug 2023"
              description={`Developed and maintained By.U’s in-house web applications and main website.
              Collaborated within an Agile team environment to deliver features on time.`}
              skills={['React.js', 'Next.js', 'Redux', 'SCSS']}
            />
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-bold text-gray-900 mb-10 flex items-center gap-3">
             <span className="w-10 h-1.5 bg-blue-600 rounded-full"></span>
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="Rakamin Academy LMS"
              desc="Comprehensive Learning Management System and career platform."
              link="https://rakamin.com"
            />
            <ProjectCard 
              title="Brandrev.AI"
              desc="AI-powered branding platform with RAG & web search capabilities."
              link="https://app.brandrev.ai"
            />
            <ProjectCard 
              title="MyMedica"
              desc="Healthcare management application handling patient data and appointments."
              link="https://app.mymedica.id"
            />
            <ProjectCard 
              title="By.U Official Site"
              desc="Main official website for By.U digital provider."
              link="https://byu.id"
            />
             <ProjectCard 
              title="Career Portals (Multiple)"
              desc="Developed career sites for Toyota, Bulog, Pos Indonesia, and InJourney."
            />
             <ProjectCard 
              title="Smart Attendance System"
              desc="IoT-enabled smart room system using ESP32 & Next.js (Thesis Project)."
            />
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 mt-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Interested in collaborating?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed"
          >
            I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </motion.p>
          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:akbarizza09@gmail.com" 
            className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-blue-500/30"
          >
            Get In Touch
          </motion.a>
          
          <div className="mt-16 pt-8 border-t border-gray-800 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>&copy; {new Date().getFullYear()} Akbar Izza Mahendra Suni. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
