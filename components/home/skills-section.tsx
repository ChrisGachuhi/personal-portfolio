'use client'

import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Icons } from '@/components/icons'

const skills = [
  {
    icon: <Icons.terminal className='h-10 w-10 text-accent' />,
    title: 'Frontend Development',
    description:
      'Expert in React, Next.js, TypeScript, and Tailwind CSS. I build high-performance, accessible, and SEO-friendly web applications with a focus on user experience and maintainability.',
  },
  {
    icon: <Icons.server className='h-10 w-10 text-accent' />,
    title: 'Performance & Architecture',
    description:
      'Specializing in component-based architecture, SSR/SSG, Core Web Vitals optimization, and implementing performance budgets to ensure fast, responsive applications.',
  },
  {
    icon: <Icons.shield className='h-10 w-10 text-accent' />,
    title: 'Analytics & Integrations',
    description:
      'Proficient in implementing and optimizing tracking (GA4, Meta Pixel, Microsoft Clarity) and integrating with various APIs including Klaviyo, Recharge, and custom solutions.',
  },
  {
    icon: <Icons.education className='h-10 w-10 text-accent' />,
    title: 'Technical Leadership',
    description:
      '8+ years of experience mentoring developers, establishing best practices, and leading technical initiatives to drive business growth and team success.',
  },
]

export function SkillsSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  return (
    <section className='py-20'>
      <div className='container px-4 md:px-8'>
        <div className='mb-12 text-center'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            What I Bring to the Table
          </h2>
          <p className='mt-4 text-muted-foreground'>
            More than code — I deliver scalable thinking, clean architecture,
            and sharp execution.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              custom={i}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}>
              <Card className='h-full border transition-all duration-200 hover:border-accent/50 hover:shadow-md'>
                <CardHeader>
                  <div className='mb-2'>{skill.icon}</div>
                  <CardTitle>{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-base'>
                    {skill.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
