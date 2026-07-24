'use client';

import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { portfolioData } from '@/data/portfolioData';

export function Navbar() {
  const navLinks = [
    { name: 'Summary', href: '/#summary' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Education & Certs', href: '/#education' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-neutral-50/80 dark:bg-neutral-950/80 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm font-semibold text-neutral-900 dark:text-neutral-100 group"
        >
          <div className="p-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-colors">
            <Terminal className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
          </div>
          <span className="tracking-tight">prashant.dev</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-600 dark:text-neutral-400">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <div className="h-4 w-px bg-neutral-200 dark:bg-neutral-800 mx-0.5" />

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
