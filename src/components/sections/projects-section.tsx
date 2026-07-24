'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../icons';
import { portfolioData } from '@/data/portfolioData';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 border-b border-neutral-200 dark:border-neutral-800">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            <FolderGit2 className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
            <span>Featured Engineering Projects</span>
          </div>
          <span className="text-xs font-mono text-neutral-400">Production Systems</span>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors flex flex-col justify-between gap-6"
            >
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 font-sans">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                      Backend System
                    </span>
                  </div>

                  {/* Metrics Badge if present */}
                  {project.metrics && (
                    <div className="flex items-center gap-3">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="text-right">
                          <div className="text-[11px] font-mono text-neutral-400">{m.label}</div>
                          <div className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  {project.subtitle}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Core Key Features */}
                <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Key Features</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                    {project.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                </div>

                {/* Read More button navigating to dedicated project page */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors group"
                >
                  <span>Read More (API & Architecture)</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
