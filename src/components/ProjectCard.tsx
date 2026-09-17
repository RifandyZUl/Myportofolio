'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = React.memo(({ project, index }) => {
  const handleCardClick = () => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  const isMedicalScan = project.imageSrc.includes('tumor_otak') || project.imageSrc.includes('ckd_transbts');

  return (
    <motion.div
      onClick={handleCardClick}
      className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0c14]/85 hover:bg-[#12121c] backdrop-blur-md p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer hover:border-white/25 shadow-xl hover:shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
    >
      {/* ── Top Section: Preview Image with subtle navigation indicators ── */}
      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black/60 border border-white/[0.06] mb-4">
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          className={`${
            isMedicalScan ? 'object-contain p-1.5' : 'object-cover'
          } transition-transform duration-500 group-hover:scale-105 group-hover:brightness-105`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Subtle Carousel Arrow Indicators (matching user's reference design) */}
        <div className="absolute inset-x-2.5 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 shadow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
              <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 0 1-.02 1.06L8.832 10l3.938 3.71a.75.75 0 1 1-1.04 1.08l-4.5-4.25a.75.75 0 0 1 0-1.08l4.5-4.25a.75.75 0 0 1 1.06.02Z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 shadow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Middle Section: Title & Description ── */}
      <div className="flex flex-col flex-grow text-center">
        <h3 className="text-base md:text-lg font-bold text-white group-hover:text-gray-100 transition-colors line-clamp-2 leading-snug mb-2">
          {project.title}
        </h3>

        <p className="text-gray-400/70 text-xs md:text-sm font-light leading-relaxed line-clamp-3 mb-5">
          {project.description}
        </p>
      </div>

      {/* ── Bottom Section: Tech Stack Logos + Action Button ── */}
      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] mt-auto">
        {/* Tech Stack Icons */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {project.techstack.map((icon, i) => (
            <div
              key={i}
              className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center p-1 hover:border-white/25 hover:bg-white/[0.08] transition-colors"
            >
              <Image
                src={icon}
                alt="tech icon"
                width={16}
                height={16}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Action Button (GitHub Icon) */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-10 h-7 rounded-full bg-gradient-to-r from-gray-200 to-white hover:from-white hover:to-gray-100 text-black flex items-center justify-center shadow-md transition-all duration-300 hover:scale-105 group/btn ml-2 shrink-0"
          aria-label={`Lihat repositori GitHub ${project.title}`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-black transition-transform duration-300 group-hover/btn:scale-110"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;