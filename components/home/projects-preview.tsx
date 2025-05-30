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

// Mock project data
const projects = [
  {
    id: '1',
    title: 'AI-Powered Product Discovery',
    description:
      'Built into FindYourDrip — a Nairobi-based fashion tech startup currently in closed beta — this AI engine recommends products via image similarity and user preferences.',
    image: 'https://images.pexels.com/photos/7679736/pexels-photo-7679736.jpeg',
    tags: ['Next.js', 'OpenAI', 'Tailwind CSS', 'Vercel AI SDK'],
    url: 'https://findyourdrip.com',
  },
  {
    id: '2',
    title: 'Multivendor Marketplace System',
    description:
      'Role-based access control for admins and sellers powering the FindYourDrip seller dashboard — built for scale from day one.',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
    tags: ['RBAC', 'JWT', 'MongoDB', 'React'],
    url: 'https://findyourdrip.com',
  },
  {
    id: '3',
    title: 'Inventory & Seller Control Panel',
    description:
      'Custom dashboard for sellers to upload products, toggle availability, and manage listings with mobile-first design at its core.',
    image: 'https://images.pexels.com/photos/5863373/pexels-photo-5863373.jpeg',
    tags: ['React', 'Zod', 'React Hook Form', 'Tailwind CSS'],
    url: 'https://findyourdrip.com',
  },
]

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
          {projects.map((project, i) => (
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
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant='secondary'>
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
                <CardFooter>
                  <Button asChild variant='ghost' className='gap-2'>
                    <Link href={project.url}>
                      View Case Study
                      <Icons.chevronRight className='h-4 w-4' />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
