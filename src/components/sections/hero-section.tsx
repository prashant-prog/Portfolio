'use client';

import { motion } from 'framer-motion';
import { FileText, ArrowDownRight, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons';
import { portfolioData } from '@/data/portfolioData';

export function HeroSection() {
  const { name, title, tagline, resumeUrl, github, linkedin } = portfolioData.personal;

  return (
    <section className="pt-12 pb-16 md:pt-20 md:pb-24 border-b border-neutral-200 dark:border-neutral-800">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="max-w-3xl space-y-6"
      >
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-900/80 text-xs font-mono text-neutral-700 dark:text-neutral-300">
          <Cpu className="w-3.5 h-3.5 text-neutral-500" />
          <span>Debugging code builds better software developers.</span>
        </div>

        {/* Primary Title */}
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 font-sans">
            {name}
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-neutral-600 dark:text-neutral-400 mt-2 font-mono">
            {title}
          </h2>
        </div>

        {/* Tagline / Subtitle */}
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl font-sans">
          {tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Download Resume */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-sm"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          {/* View Projects */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            <span>View Projects</span>
            <ArrowDownRight className="w-4 h-4 text-neutral-500" />
          </a>

          {/* GitHub */}
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
