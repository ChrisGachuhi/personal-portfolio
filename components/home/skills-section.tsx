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
    title: 'Frontend Engineering',
    description:
      'Creating modern, accessible UIs with React, Next.js 15, Tailwind CSS, and TypeScript — optimized for performance and maintainability.',
  },
  {
    icon: <Icons.server className='h-10 w-10 text-accent' />,
    title: 'API Architecture',
    description:
      'Designing secure, scalable APIs using Node.js, Express, and PostgreSQL or MongoDB. I think in terms of systems, not endpoints.',
  },
  {
    icon: <Icons.shield className='h-10 w-10 text-accent' />,
    title: 'Security & Optimization',
    description:
      'Authentication, authorization, and performance tuning are not features — they’re foundations. I implement JWT, OAuth2, SSR, caching, and more.',
  },
  {
    icon: <Icons.education className='h-10 w-10 text-accent' />,
    title: 'Mentorship & Developer Growth',
    description:
      "I've trained over 100 developers through workshops, bootcamps, and 1:1 mentorship — equipping them to think, build, and ship with confidence.",
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
