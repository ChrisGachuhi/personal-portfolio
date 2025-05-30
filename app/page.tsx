"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { HeroSection } from "@/components/home/hero-section"
import { SkillsSection } from "@/components/home/skills-section"
import { ProjectsPreview } from "@/components/home/projects-preview"
import { BlogPreview } from "@/components/home/blog-preview"
import { ContactCta } from "@/components/home/contact-cta"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <SkillsSection />
      <ProjectsPreview />
      <BlogPreview />
      <ContactCta />
    </div>
  )
}