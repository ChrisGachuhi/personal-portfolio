'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

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
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const projects = [
  {
    id: '1',
    title: 'AltaWater E-commerce Platform',
    description:
      'Built and own the entire frontend foundation across AltaWater brands — from the e-commerce storefront to the internal ERP tools. Improved site performance to consistent 95+ Lighthouse scores through image optimization, page structure improvements, and code optimization. Implemented comprehensive tracking with GA4, Facebook Pixel, Microsoft Clarity, Klaviyo, and Recharge for detailed user behavior analysis.',
    image: 'https://images.pexels.com/photos/7679736/pexels-photo-7679736.jpeg',
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'MongoDB',
      'Node.js',
      'GA4',
      'Facebook Pixel',
      'Microsoft Clarity',
      'Klaviyo',
      'Recharge',
    ],
    category: 'Full-Stack',
    client: 'AltaWater',
    year: '2025 - Present',
    url: 'altawater',
    liveUrl: 'https://altawater.com',
  },
  {
    id: '2',
    title: 'T&O Advocates Website',
    description:
      'Developed a modern, responsive website with a case management system and client portal. Implemented secure document handling and client communication features.',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    category: 'Full-Stack',
    client: 'T&O Advocates LLP',
    year: '2024 - 2025',
    url: 'to-advocates',
    liveUrl: 'https://toadvocates.com',
  },
  {
    id: '3',
    title: 'Drip E-commerce Platform',
    description:
      'Built a full-stack e-commerce solution with an admin dashboard, product management, and payment integration. Implemented responsive design and optimized performance.',
    image: 'https://images.pexels.com/photos/5863373/pexels-photo-5863373.jpeg',
    tags: ['Next.js', 'Stripe', 'MongoDB', 'Express', 'Node.js'],
    category: 'Full-Stack',
    client: 'Drip',
    year: '2024',
    url: 'drip',
    liveUrl: 'https://drip.example.com',
  },
  {
    id: '4',
    title: 'The Claims Center Kenya',
    description:
      'Developed a professional website for legal services with lead generation capabilities. Implemented SEO best practices and integrated with various marketing tools.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SEO', 'Google Analytics'],
    category: 'Frontend',
    client: 'The Claims Center Kenya LLC',
    year: '2024',
    url: 'claims-center-kenya',
    liveUrl: 'https://theclaimscenterkenya.co.ke',
  },
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === 'all' || project.category === filter
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className='flex flex-col'>
      <section className='py-20'>
        <div className='container px-4 md:px-8'>
          <div className='mx-auto max-w-3xl text-center'>
            <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
              Project Highlights
            </h1>
            <p className='mt-6 text-lg text-muted-foreground'>
              Each build represents a business transformation — not just lines
              of code. These are systems built to scale, perform, and stand out.
            </p>
          </div>

          <div className='mt-12'>
            <div className='mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
              <Tabs
                defaultValue='all'
                value={filter}
                onValueChange={setFilter}
                className='w-full sm:w-auto'>
                <TabsList>
                  <TabsTrigger value='all'>All</TabsTrigger>
                  <TabsTrigger value='Full-Stack'>Full-Stack</TabsTrigger>
                  <TabsTrigger value='Frontend'>Frontend</TabsTrigger>
                  <TabsTrigger value='AI'>AI</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className='relative w-full sm:w-64'>
                <Icons.search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
                <Input
                  placeholder='Search projects...'
                  className='pl-9'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Card className='h-full overflow-hidden border transition-all duration-200 hover:border-accent/50 hover:shadow-md'>
                    <div className='relative h-48 w-full overflow-hidden'>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className='object-cover transition-transform duration-500 hover:scale-105'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      />
                    </div>
                    <CardHeader>
                      <div className='flex items-center justify-between'>
                        <Badge variant='secondary'>{project.category}</Badge>
                        <span className='text-sm text-muted-foreground'>
                          {project.year}
                        </span>
                      </div>
                      <CardTitle className='line-clamp-1 mt-2'>
                        {project.title}
                      </CardTitle>
                      <div className='flex flex-wrap gap-2'>
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant='outline'>
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className='line-clamp-3 text-base'>
                        {project.description}
                      </CardDescription>
                      <p className='mt-2 text-sm text-muted-foreground'>
                        Client: {project.client}
                      </p>
                    </CardContent>
                    <CardFooter className='flex flex-col gap-2'>
                      <Button asChild variant='default' className='w-full'>
                        <Link href={`/case-studies/${project.url}`}>
                          View Case Study
                          <Icons.arrowRight className='ml-2 h-4 w-4' />
                        </Link>
                      </Button>
                      {project.liveUrl && (
                        <Button asChild variant='outline' className='w-full'>
                          <a
                            href={project.liveUrl}
                            target='_blank'
                            rel='noopener noreferrer'>
                            Visit Live Site
                            <Icons.externalLink className='ml-2 h-4 w-4' />
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className='flex h-40 flex-col items-center justify-center rounded-lg border bg-secondary/50'>
                <Icons.search className='mb-4 h-10 w-10 text-muted-foreground' />
                <p className='text-center text-muted-foreground'>
                  No projects found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className='bg-secondary/50 py-20'>
        <div className='container px-4 md:px-8'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
              How I Work
            </h2>
            <p className='mt-6 text-lg text-muted-foreground'>
              I don&apos;t just code. I architect systems that drive revenue,
              scale with your ambition, and leave competitors wondering how you
              shipped so fast.
            </p>
          </div>

          <div className='mt-12 grid gap-8 md:grid-cols-4'>
            {[
              {
                step: '1',
                title: 'Discover',
                body: 'I ask the uncomfortable questions early — about scale, vision, and risk — so we only build what matters.',
              },
              {
                step: '2',
                title: 'Design',
                body: 'I translate intent into UX, and UX into scalable architecture. Every decision is deliberate.',
              },
              {
                step: '3',
                title: 'Develop',
                body: 'Code that’s fast, readable, and built for humans — not just machines. I ship, I iterate, I optimize.',
              },
              {
                step: '4',
                title: 'Deploy + Grow',
                body: 'Launch is just the beginning. My builds are easy to evolve, extend, and measure.',
              },
            ].map((item) => (
              <Card key={item.step}>
                <CardHeader>
                  <div className='mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10'>
                    <span className='text-lg font-bold text-accent'>
                      {item.step}
                    </span>
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground'>{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className='py-20'>
        <div className='container px-4 md:px-8'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
              You&apos;ve Seen What I Build —
              <br className='hidden sm:inline' />
              Now Let&apos;s Build Yours
            </h2>
            <p className='mt-6 text-lg text-muted-foreground'>
              Whether you&apos;re launching, scaling, or rebuilding — if your
              project deserves best-in-class execution, I&apos;m ready.
            </p>
            <div className='mt-8'>
              <Button asChild size='lg' className='gap-2'>
                <Link href='/contact'>
                  Work With Me
                  <Icons.mail className='h-4 w-4' />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
