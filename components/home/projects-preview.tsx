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

import { projects } from '@/data/projects'

// Define the project type for TypeScript
type Project = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  client: string
  year: string
  url: string
  liveUrl?: string
}

// Get the first 3 projects for the featured section
const featuredProjects: Project[] = projects.slice(0, 3)

export function ProjectsPreview() {
  return (
    <section className='bg-secondary/50 py-20'>
      <div className='container px-4 md:px-8'>
        <div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
          <div>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
              Featured Projects
            </h2>
            <p className='mt-4 max-w-2xl text-muted-foreground'>
              A selection of my recent work, showcasing my expertise in building
              secure, high-performance web applications.
            </p>
          </div>
          <Button asChild variant='outline' className='gap-2'>
            <Link href='/projects'>
              View All Projects
              <Icons.arrowRight className='h-4 w-4' />
            </Link>
          </Button>
        </div>

        <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {featuredProjects.map((project: Project, i: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}>
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
                  <CardTitle className='line-clamp-1'>
                    {project.title}
                  </CardTitle>
                  <div className='flex flex-wrap gap-2'>
                    {project.tags.slice(0, 4).map((tag: string) => (
                      <Badge key={tag} variant='secondary' className='text-xs'>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className='line-clamp-3 text-base'>
                    {project.description}
                  </CardDescription>
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
      </div>
    </section>
  )
}
