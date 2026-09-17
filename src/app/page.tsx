// app/page.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Import components and blocks
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import TrueFocus from "@/blocks/TextAnimations/TrueFocus/TrueFocus";
import Threads from "@/blocks/Backgrounds/Threads/Threads";
import CircularText from "@/blocks/TextAnimations/CircularText/CircularText";
import ProfileCard from '@/components/ProfileCard';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ProjectCard from '@/components/ProjectCard';

// Import centralized projects data
import { projects } from "@/data/projects";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

// Unified Skills & Frameworks list with official logos matching the user's reference
const techSkillsData = [
  { name: 'Python', path: '/techstack/python.svg' },
  { name: 'PyTorch', path: '/techstack/pytorch.svg' },
  { name: 'FastAPI', path: '/techstack/fastapi.svg' },
  { name: 'Node.js', path: '/techstack/nodejs.svg' },
  { name: 'Express.js', path: '/techstack/express.svg' },
  { name: 'PostgreSQL', path: '/techstack/postgresql.svg' },
  { name: 'Docker', path: '/techstack/docker.svg' },
  { name: 'TypeScript', path: '/techstack/typescript.svg' },
  { name: 'JavaScript', path: '/techstack/javascript.svg' },
  { name: 'React.js', path: '/techstack/react.svg' },
  { name: 'Next.js', path: '/techstack/nextjs.svg' },
  { name: 'Flutter', path: '/techstack/flutter.svg' },
  { name: 'Tailwind CSS', path: '/techstack/tailwind.svg' },
  { name: 'CSS3', path: '/techstack/css.svg' },
  { name: 'Git & GitHub', path: '/techstack/git.svg' },
  { name: 'OpenAI', path: '/techstack/openai.svg' },
  { name: 'Google Cloud', path: '/techstack/gcp.svg' },
  { name: 'WebSockets', path: '/techstack/websockets.svg' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'software'>('all');

  const filteredProjects = projects.filter(project => {
    if (activeTab === 'all') return true;
    return project.category === activeTab || project.category === 'both';
  });

  const aiCount = projects.filter(p => p.category === 'ai' || p.category === 'both').length;
  const softwareCount = projects.filter(p => p.category === 'software' || p.category === 'both').length;

  return (
    <>
      {/* Main content area */}
      <main className="flex-grow flex flex-col items-center h-full relative pt-20">
        <div style={{ width: '100%', height: '600px', position: 'absolute', bottom: '50'}} className="opacity-15 md:opacity-100 pointer-events-none">
          <Threads
            amplitude={2.5}
            distance={0}
            enableMouseInteraction={false}
          />
        </div>

        {/* Hero Title */}
        <div className="w-full flex justify-center items-center my-4 md:mt-15 text-center font-bold relative px-4 md:px-0">
          <BlurText
            text="Zul Tiandra Rifandy"
            delay={120}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="lg:text-9xl md:text-7xl text-4xl text-center tracking-tight"
          />
        </div>

        {/* Hero Subtitle — AI & Software Focus */}
        <div className="font-bold text-center opacity-0 animate-fadeIn mt-1 md:mt-3">
          <TrueFocus
            sentence="AI-Engineer Software-Engineer"
            manualMode={false}
            blurAmount={5}
            borderColor="white"
            animationDuration={0.3}
            pauseBetweenAnimations={1}
          />
        </div>

        {/* Hero Call to Action Buttons: View/Download CV & Contact */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mt-6 md:mt-8 z-20 relative opacity-0 animate-fadeIn" style={{ animationDelay: '1s' }}>
          <a
            href="/cv/CV_Zul_Tiandra_Rifandy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95"
          >
            <svg className="w-4 h-4 text-black transition-transform duration-200 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Lihat / Unduh CV</span>
          </a>

          <Link
            href="/Contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-white/40 text-white font-medium text-sm transition-all duration-300 backdrop-blur-sm hover:scale-105 active:scale-95"
          >
            <span>Hubungi Saya</span>
            <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* CSS Keyframes */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
            animation-delay: 0.8s;
          }
        `}</style>

        <div className="w-full items-center mt-8 mb-4 relative h-[300px] hidden md:block">
          <CircularText
            text="SCROLL-DOWN*SCROLL-DOWN*"
            onHover="slowDown"
            spinDuration={5}
            className="absolute left-45 bottom-10"
          />
          <Image
            src="/logo/lauv-logo.svg"
            alt="Zul Logo"
            width={20}
            height={20}
            className="m-10 transition-all duration-300 hover:scale-150 hover:rotate-10 hover:brightness-125 absolute left-44 bottom-9"
          />
        </div>

        {/* ── Section About Me / Passion Statement (What I Do) ── */}
        <section id="about" className="w-full max-w-6xl mx-auto px-4 md:px-8 mt-16 md:mt-24 mb-16 scroll-mt-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14">
            
            {/* Left: Clean, Minimalist Passion Statement (Monochrome) */}
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.15] text-gray-200 text-xs font-semibold tracking-widest uppercase w-fit">
                <span className="w-2.5 h-2.5 rounded-full bg-black border border-white/60 inline-block" />
                ABOUT ME
              </div>

              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.18]">
                Passionate about building intelligent &amp; scalable systems
              </h2>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light text-justify">
                I&apos;m a Software Engineer and AI Engineer focused on architecting scalable, high-performance systems and integrating machine intelligence into production. From optimizing deep learning architectures for rapid inference to developing resilient backend platforms, I turn complex data into intelligent, reliable solutions.
              </p>

              {/* CV Action Links */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="/cv/CV_Zul_Tiandra_Rifandy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.16] border border-white/[0.15] hover:border-white/30 text-white text-sm font-medium transition-all duration-200 shadow-sm"
                >
                  <svg className="w-4 h-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Lihat CV Lengkap (PDF)</span>
                </a>
                <a
                  href="/cv/CV_Zul_Tiandra_Rifandy.pdf"
                  download="CV_Zul_Tiandra_Rifandy.pdf"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-gray-400 hover:text-white text-sm transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Unduh File</span>
                </a>
              </div>
            </div>

            {/* Right: ProfileCard */}
            <div className="flex flex-col items-center w-full md:w-1/2">
              <ProfileCard
                name="Zul Tiandra Rifandy"
                title="AI & Software Engineer"
                handle="rzultiandra"
                status="Open to AI & SWE Roles"
                contactText="Hubungi Saya"
                avatarUrl="/photos/Ipan2.jpg"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => window.location.href = '/Contact'}
                behindGlowEnabled={false}
                innerGradient="linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)"
              />
            </div>
          </div>
        </section>

        {/* ── Skills & Frameworks Section ── */}
        <section id="skills" className="w-full max-w-6xl mx-auto px-4 md:px-8 mt-12 mb-20 scroll-mt-24">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-gray-300 text-xs font-semibold tracking-widest uppercase mb-3">
              SKILLS &amp; FRAMEWORKS
            </div>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Skills &amp; Frameworks
            </h3>
          </div>

          {/* Unified Logo Cards Grid matching user's design reference */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 md:gap-4">
            {techSkillsData.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#0c0c14]/80 border border-white/[0.08] hover:border-white/30 hover:bg-[#13131f] shadow-lg transition-all group cursor-default"
              >
                <div className="w-12 h-12 relative flex items-center justify-center mb-3">
                  <Image
                    src={tech.path}
                    alt={tech.name}
                    width={44}
                    height={44}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="text-xs md:text-sm font-semibold text-gray-300 group-hover:text-white transition-colors text-center leading-tight">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <div className="flex w-full items-center justify-center p-4 md:mt-10 mt-5">
          <BlurText
            text="My Experience"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="md:text-7xl text-3xl font-extrabold"
          />
        </div>
        <ExperienceTimeline />

        {/* ── Featured Projects Section (id="projects") ── */}
        <section id="projects" className="flex flex-col w-full items-center justify-center p-4 md:mt-25 mt-10 font-extrabold text-center scroll-mt-24">
          <BlurText
            text="Projects"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="md:text-7xl text-3xl font-extrabold"
          />

          {/* ── Interactive Filter Tabs: Clean Monochrome ── */}
          <div className="flex flex-wrap items-center justify-center gap-3 px-4 mt-8 mb-6">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 border ${
                activeTab === 'all'
                  ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.25)] font-bold'
                  : 'bg-white/[0.03] text-gray-400 border-white/[0.08] hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              <span>Semua Proyek</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === 'all' ? 'bg-black text-white font-mono' : 'bg-white/[0.08] text-gray-400'}`}>
                {projects.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('ai')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 border ${
                activeTab === 'ai'
                  ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.25)] font-bold'
                  : 'bg-white/[0.03] text-gray-400 border-white/[0.08] hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              <span>🧠 AI &amp; Deep Learning</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === 'ai' ? 'bg-black text-white font-mono' : 'bg-white/[0.08] text-gray-400'}`}>
                {aiCount}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('software')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 border ${
                activeTab === 'software'
                  ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.25)] font-bold'
                  : 'bg-white/[0.03] text-gray-400 border-white/[0.08] hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              <span>⚙️ Software Engineering</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === 'software' ? 'bg-black text-white font-mono' : 'bg-white/[0.08] text-gray-400'}`}>
                {softwareCount}
              </span>
            </button>
          </div>

          {/* Projects Uniform Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4 md:px-8 mt-6 mb-20"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex w-full items-center justify-center p-4 border-t border-white/[0.12] text-white/50 text-sm font-light mt-20">
        <p>&copy; {new Date().getFullYear()} Zul Tiandra Rifandy. All rights reserved.</p>
      </footer>
    </>
  );
}