'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Icons } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const programs = [
  {
    id: '1',
    title: 'Frontend Developer Accelerator',
    description:
      'A comprehensive 12-week program to master modern frontend development with React, TypeScript, and related technologies.',
    image:
'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',    price: '$1,500',
    duration: '12 weeks',
    startDate: 'July 15, 2025',
    features: [
      'Live weekly sessions',
      'Project-based learning',
      'Code reviews',
      '1-on-1 mentoring',
      'Career guidance',
    ],
    url: '/mentorship/frontend-accelerator',
  },
  {
    id: '2',
    title: 'Career Transition Coaching',
    description:
      'Personalized coaching for professionals looking to transition into tech or advance their development career.',
    image:
      'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '$800',
    duration: '8 weeks',
    startDate: 'Flexible',
    features: [
      'Resume building',
      'Portfolio development',
      'Interview preparation',
      'Job search strategy',
      'Networking guidance',
    ],
    url: '/mentorship/career-coaching',
  },
  {
    id: '3',
    title: 'Full-Stack Mastery',
    description:
      'Advanced program for developers looking to master both frontend and backend development with modern technologies.',
    image:
      'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '$2,000',
    duration: '16 weeks',
    startDate: 'August 10, 2025',
    features: [
      'Advanced React patterns',
      'Node.js & API development',
      'Database design',
      'Authentication & security',
      'Deployment & DevOps',
    ],
    url: '/mentorship/fullstack-mastery',
  },
]


export default function MentorshipPage() {
  return (
    <div className='flex flex-col'>
      <section className='py-20'>
        <div className='container px-4 md:px-8'>
          <div className='mx-auto max-w-3xl text-center'>
            <Badge className='mb-4 bg-accent text-accent-foreground'>
              Real Mentorship, Real Results
            </Badge>
            <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
              I Don’t Just Teach Code — I Build Developers
            </h1>
            <p className='mt-6 text-lg text-muted-foreground'>
              Whether you&apos;re pivoting careers, sharpening your stack, or aiming
              to land your first tech role — this isn&apos;t theory. It&apos;s war-tested
              mentorship rooted in real-world builds, radical honesty, and the
              kind of guidance I wish I had when I was starting out.
            </p>
          </div>

          <div className='mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {programs.map((program, i) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}>
                <Card className='h-full overflow-hidden border transition-all duration-200 hover:border-accent/50 hover:shadow-md'>
                  <div className='relative h-48 w-full overflow-hidden'>
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className='object-cover transition-transform duration-500 hover:scale-105'
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                  </div>
                  <CardHeader>
                    <div className='flex items-center justify-between'>
                      <Badge variant='secondary'>{program.duration}</Badge>
                      <span className='font-bold text-accent'>
                        {program.price}
                      </span>
                    </div>
                    <CardTitle className='line-clamp-2 mt-2'>
                      {program.title}
                    </CardTitle>
                    <CardDescription className='text-sm'>
                      Starts: {program.startDate}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className='line-clamp-3 text-muted-foreground'>
                      {program.description}
                    </p>
                    <ul className='mt-4 space-y-2'>
                      {program.features.map((feature, index) => (
                        <li
                          key={index}
                          className='flex items-center gap-2 text-sm'>
                          <Icons.chevronRight className='h-4 w-4 text-accent' />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className='w-full gap-2'>
                      <Link href={program.url}>
                        Learn More
                        <Icons.arrowRight className='h-4 w-4' />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-secondary/50 py-20'>
        <div className='container px-4 md:px-8'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
              This Isn’t Just Training — It’s Transformation
            </h2>
            <p className='mt-6 text-lg text-muted-foreground'>
              I mentor like I build: no shortcuts, no gatekeeping, and no
              recycled tutorials. Every session, challenge, and review is
              designed to stretch you, support you, and set you up to lead.
            </p>
          </div>
        </div>
      </section>

      <section className='py-20'>
        <div className='container px-4 md:px-8 text-center'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            If you’re ready to level up —
          </h2>
          <p className='mt-6 text-lg text-muted-foreground'>
            Then I’m ready to back you.
          </p>
          <div className='mt-8'>
            <Button asChild size='lg' className='gap-2'>
              <Link href='/contact'>
                Let’s Talk
                <Icons.mail className='h-4 w-4' />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
