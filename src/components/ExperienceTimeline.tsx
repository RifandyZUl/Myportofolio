'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

const experiences = [
  {
    id: 1,
    title: 'S1 Teknik Informatika',
    company: 'Universitas Esa Unggul – Jakarta',
    year: 'Agu 2022 - Agu 2026',
    score: 'IPK : 3.75 / 4.00',
    description:
      'Lulusan S1 Teknik Informatika dengan fokus riset Artificial Intelligence, khususnya Deep Learning & Computer Vision (3D Medical Image Segmentation). Berpengalaman dalam perancangan eksperimen Taguchi DOE, optimisasi arsitektur CNN-Transformer (CKD-TransBTS & RSU2-Net), evaluasi metrik Dice/IoU/Specificity, hingga penulisan artikel ilmiah format IMRaD untuk publikasi terakreditasi Sinta 2 (IJCCS UGM).',
    logo: '/exp_logos/esaunggul.png',
  },
  {
    id: 2,
    title: 'Full Stack Developer Intern',
    company: 'PT Winnicode Garuda Teknologi',
    year: 'Apr 2025 - Jul 2025',
    score: 'Software Engineering',
    description:
      'Mengembangkan sistem portal berita berbasis web full stack menggunakan React.js dan Node.js/Express.js. Mendesain skema database relasional PostgreSQL dengan Sequelize ORM, membangun autentikasi admin JWT + enkripsi bcrypt, integrasi upload Cloudinary CDN, pagination & filter kategori, serta menjalankan pengujian komprehensif white-box (Jest + Supertest) dan black-box (Postman).',
    logo: '/exp_logos/winnicode.png',
  },
];

const ExperienceTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.01
  });

  const dotTop = useTransform(scaleY, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="relative w-full max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-6">
      {/* Central Timeline Line */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 via-purple-600 to-rose-600 transform -translate-x-1/2"
        style={{ scaleY: scaleY, transformOrigin: 'top' }}
      />

      {/* Glowing Dot */}
      <motion.div
        className="absolute left-1/2 w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_15px_5px_rgba(249,115,22,0.6)] transform -translate-x-1/2"
        style={{ top: dotTop }}
      />

      <div className="relative space-y-24">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-x-16 bg-black/60 rounded-3xl p-6 md:p-8 border border-white/[0.06] shadow-xl md:bg-transparent md:border-none"
          >
            {/* Side 1: Title, Company, Year, Logo */}
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'
              } ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
            >
              <h3 className="md:text-2xl text-xl font-bold text-gray-100">{exp.title}</h3>

              <p className="text-lg font-medium text-orange-400 mt-1">{exp.company}</p>

              {/* Year & Badge */}
              <div className={`flex flex-wrap items-center gap-2 mt-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                <span
                  className="text-xs uppercase tracking-widest text-gray-400 font-semibold px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08]"
                >
                  {exp.year}
                </span>
                <span className="text-xs font-bold text-purple-300 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                  {exp.score}
                </span>
              </div>

              {/* Logo */}
              <div className="w-12 h-12 relative flex items-center justify-center p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] my-3">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                  unoptimized
                />
              </div>
            </div>

            {/* Side 2: Description */}
            <div
              className={`text-gray-300 text-sm md:text-base leading-relaxed p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-justify ${
                index % 2 === 0 ? 'md:order-2' : 'md:order-1'
              }`}
            >
              <p className="text-justify">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;