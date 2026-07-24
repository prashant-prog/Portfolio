import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, ExternalLink, Cpu, AlertTriangle, Lightbulb, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { portfolioData } from '@/data/portfolioData';
import { ArchitectureDiagram } from '@/components/project-detail/architecture-diagram';
import { ApiDocsSection } from '@/components/project-detail/api-docs-section';
import { ProjectGallery } from '@/components/project-detail/project-gallery';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Prashant Sharma Portfolio`,
    description: project.overview,
    openGraph: {
      title: `${project.title} - Prashant Sharma`,
      description: project.overview,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Back button link */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio Overview</span>
        </Link>
      </div>

      {/* Project Header */}
      <div className="space-y-4 border-b border-neutral-200 dark:border-neutral-800 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400">
              Backend Architecture Deep-Dive
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mt-2 font-sans">
              {project.title}
            </h1>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 font-mono text-xs">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repo</span>
            </a>
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>

        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-sans">
          {project.tagline}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-mono border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 1. Overview */}
      <section className="space-y-4">
        <h2 className="text-sm font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
          <Cpu className="w-4 h-4 text-emerald-500" />
          <span>Project Overview</span>
        </h2>
        <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans text-sm sm:text-base">
          {project.overview}
        </div>
      </section>

      {/* 2. Key Features */}
      <section className="space-y-4">
        <h2 className="text-sm font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          Key Features & Technical Implementations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.features.map((feat, i) => (
            <div
              key={i}
              className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 flex items-start gap-3"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-sans font-medium">
                {feat}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Architecture Diagram Placeholder / Flow */}
      <ArchitectureDiagram
        nodes={project.architectureNodes}
        dataFlow={project.architectureDataFlow}
      />

      {/* 4. API Documentation Section */}
      <ApiDocsSection endpoints={project.apiEndpoints} />

      {/* 5. Screenshots / Live Terminal Outputs */}
      <ProjectGallery projectTitle={project.title} />

      {/* 6. Challenges & Learnings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Challenges Faced */}
        <section className="space-y-3">
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <span>Challenges Faced & Engineering Solutions</span>
          </h3>
          <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 space-y-3">
            {project.challenges.map((c, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300 font-sans">
                <span className="font-mono text-amber-500 font-bold">0{i + 1}.</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Learnings */}
        <section className="space-y-3">
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-sky-500" />
            <span>Key Engineering Takeaways</span>
          </h3>
          <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 space-y-3">
            {project.learnings.map((l, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300 font-sans">
                <span className="font-mono text-sky-500 font-bold">0{i + 1}.</span>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
