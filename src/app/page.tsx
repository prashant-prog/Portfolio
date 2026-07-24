import { HeroSection } from '@/components/sections/hero-section';
import { SummarySection } from '@/components/sections/summary-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { EducationSection } from '@/components/sections/education-section';
import { CertsSection } from '@/components/sections/certs-section';
import { AchievementSection } from '@/components/sections/achievement-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Professional Summary */}
      <SummarySection />

      {/* 3. Technical Skills */}
      <SkillsSection />

      {/* 4. Experience Timeline */}
      <ExperienceSection />

      {/* 5. Featured Projects */}
      <ProjectsSection />

      {/* 6 & 7. Education and Certifications */}
      <section id="education" className="py-12 border-b border-neutral-200 dark:border-neutral-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <EducationSection />
          <CertsSection />
        </div>
      </section>

      {/* 8. Engineering Achievement */}
      <AchievementSection />

      {/* 9. Contact Section */}
      <ContactSection />
    </div>
  );
}
