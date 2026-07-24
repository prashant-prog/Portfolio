import { portfolioData } from '@/data/portfolioData';
import { Terminal, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/30 py-8 mt-20 text-xs text-neutral-500 dark:text-neutral-400">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Status & Name */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 font-mono">
            <Terminal className="w-3.5 h-3.5 text-neutral-400" />
            <span className="font-medium text-neutral-800 dark:text-neutral-200">
              {portfolioData.personal.name}
            </span>
          </div>
          <span className="text-neutral-300 dark:text-neutral-700">•</span>
          <span>Backend Software Engineer</span>
        </div>

        {/* Middle: Availability status */}
        <div className="flex items-center gap-2 font-mono text-[11px] px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>{portfolioData.personal.availability}</span>
        </div>

        {/* Right: Quick Links */}
        <div className="flex items-center gap-4">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors flex items-center gap-1"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors flex items-center gap-1"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
