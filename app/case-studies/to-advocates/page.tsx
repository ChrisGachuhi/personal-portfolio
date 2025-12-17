import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import Image from 'next/image'

export default function TOAdvocatesCaseStudy() {
  return (
    <div className='container mx-auto px-4 py-16 md:px-6 lg:py-24'>
      <div className='mx-auto max-w-4xl'>
        <div className='mb-12'>
          <Link
            href='/projects'
            className='inline-flex items-center text-sm text-muted-foreground hover:text-foreground'>
            <Icons.arrowLeft className='mr-2 h-4 w-4' />
            Back to Projects
          </Link>
          <h1 className='mt-4 text-4xl font-bold tracking-tight sm:text-5xl'>
            T&O Advocates Website
          </h1>
          <p className='mt-4 text-xl text-muted-foreground'>
            Modernizing legal services with a responsive web presence
          </p>

          <div className='mt-6 flex flex-wrap gap-2'>
            {[
              'React',
              'Node.js',
              'MongoDB',
              'Express',
              'JWT',
              'Responsive Design',
              'Client Portal',
            ].map((tag) => (
              <span
                key={tag}
                className='rounded-full bg-accent/20 px-3 py-1 text-sm font-medium text-accent-foreground'>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className='prose prose-lg max-w-none dark:prose-invert'>
          <div className='relative aspect-video w-full overflow-hidden rounded-lg'>
            <Image
              src='https://images.pexels.com/photos/18105/pexels-photo.jpg'
              alt='T&O Advocates Website'
              fill
              className='object-cover'
            />
          </div>

          <h2>Project Overview</h2>
          <p>
            T&O Advocates LLP required a modern, professional website to
            showcase their legal services and provide clients with secure access
            to their case information. The project involved creating a
            responsive website with a client portal and case management system.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li>
              <strong>Responsive Design</strong>: Ensured the website works
              seamlessly across all devices, from desktop to mobile.
            </li>
            <li>
              <strong>Client Portal</strong>: Developed a secure client portal
              where clients could access their case information and documents.
            </li>
            <li>
              <strong>Document Management</strong>: Implemented secure document
              handling with role-based access control.
            </li>
            <li>
              <strong>Appointment Scheduling</strong>: Integrated a calendar
              system for clients to book consultations.
            </li>
          </ul>

          <h2>Technical Implementation</h2>
          <p>
            The website was built using React for the frontend with a Node.js
            and Express backend. MongoDB was used for data storage, and JWT was
            implemented for secure authentication. The frontend was designed
            with a focus on usability and accessibility, following best
            practices for web development.
          </p>

          <h2>Results</h2>
          <ul>
            <li>Improved client engagement through the online portal</li>
            <li>Streamlined case management for the legal team</li>
            <li>Increased efficiency in client communication</li>
            <li>Enhanced security for sensitive client information</li>
          </ul>

          <div className='mt-12 flex items-center justify-between border-t pt-8'>
            <Button asChild variant='outline'>
              <Link href='/projects'>
                <Icons.arrowLeft className='mr-2 h-4 w-4' />
                Back to Projects
              </Link>
            </Button>
            <Button asChild>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                Visit Live Site
                <Icons.externalLink className='ml-2 h-4 w-4' />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
