'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Icons } from '@/components/icons'

const experiences = [
  {
    id: 1,
    role: 'Founding Senior Frontend Engineer',
    company: 'AltaWater',
    duration: 'Aug 2025 – Present',
    location: 'Remote',
    description: [
      'Built and own the entire frontend foundation across AltaWater brands — from the e-commerce storefront to the internal ERP tools.',
      'Improved site performance to consistent 95+ Lighthouse scores by focusing on real bottlenecks: image optimization, page structure, caching rules, and removing unnecessary blocking code.',
      'Introduced a full tracking setup (GA4, Pixel, Clarity, Klaviyo, Recharge) and used the data to help marketing understand user behavior patterns.',
      "Helped reduce paid traffic costs by giving the team clearer signals on which funnels worked and which didn't based on actual behavior patterns.",
    ],
    icon: <Icons.code className='h-6 w-6 text-accent' />,
  },
  {
    id: 2,
    role: 'Senior Web Developer',
    company: 'T&O Advocates LLP',
    duration: 'Aug 2024 – Jun 2025',
    location: 'Nairobi/Remote',
    description: [
      'Designed and shipped a complete full-stack platform for a law firm transitioning from zero digital presence to a fully functional, content-driven site with authentication and admin tools.',
      'Introduced analytics and behavioral insights (Clarity, GA4, Klaviyo) and used them to refine how clients discovered services and moved across pages.',
      'Built the frontend with Next.js 15 and Tailwind, focusing on clarity, readability, and page structure that made legal content easier to navigate.',
      'Improved SEO and engagement by reorganizing content, tightening page hierarchy, and ensuring search engines could understand legal categories and topics properly.',
    ],
    icon: <Icons.code className='h-6 w-6 text-accent' />,
  },
  {
    id: 3,
    role: 'Software Developer (Contract)',
    company: 'Edulink International College',
    duration: 'Oct 2023 – Jan 2025',
    location: 'Nairobi, Kenya',
    description: [
      'Mentored students and junior developers on modern React, TypeScript, and component architecture.',
      'Built and optimized Firebase-powered academic portals, achieving a 40% reduction in data latency.',
      'Standardized engineering best practices across frontend codebases.',
    ],
    icon: <Icons.code className='h-6 w-6 text-accent' />,
  },
  {
    id: 4,
    role: 'Senior Software Developer',
    company: 'Puzzles Innovationz',
    duration: 'Jan 2023 – Jul 2024',
    location: 'Remote',
    description: [
      'Designed and delivered reusable React/Tailwind component systems used across multiple client projects.',
      'Introduced CI/CD pipelines, Git workflows, and documentation that improved engineering efficiency.',
      'Delivered production-ready frontend builds for internal tools and commercial applications.',
    ],
    icon: <Icons.code className='h-6 w-6 text-accent' />,
  },
]

export function ExperienceSection() {
  return (
    <section className='py-20 bg-secondary/50'>
      <div className='container px-4 md:px-8 mx-auto'>
        <div className='max-w-3xl mx-auto text-center mb-12'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            Professional Experience
          </h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            My journey through the tech industry, one role at a time
          </p>
        </div>

        <div className='space-y-8'>
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='relative'>
              <Card className='relative overflow-hidden group'>
                <div className='absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                <CardHeader>
                  <div className='flex items-center gap-4'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10'>
                      {exp.icon}
                    </div>
                    <div className='text-left'>
                      <CardTitle className='text-lg md:text-xl'>
                        {exp.role}
                      </CardTitle>
                      <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-muted-foreground'>
                        <span className='font-medium'>{exp.company}</span>
                        <span className='hidden sm:block'>•</span>
                        <span>{exp.duration}</span>
                        <span className='hidden sm:block'>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2 text-muted-foreground'>
                    {exp.description.map((item, i) => (
                      <li key={i} className='flex items-start'>
                        <span className='mr-2 text-accent'>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
