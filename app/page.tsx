'use client'

import { HeroSection } from '@/components/home/hero-section'
import { SkillsSection } from '@/components/home/skills-section'
import { ExperienceSection } from '@/components/home/experience-section'
import { ProjectsPreview } from '@/components/home/projects-preview'
import { BlogPreview } from '@/components/home/blog-preview'
import { ContactCta } from '@/components/home/contact-cta'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsPreview />
      <BlogPreview />
      <ContactCta />
    </div>
  )
}
