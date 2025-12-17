import Link from 'next/link'
import { CodeIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/icons'

export function Footer() {
  return (
    <footer className='border-t bg-background py-8'>
      <div className='container px-4 md:px-8'>
        <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-4'>
          <div className='space-y-3'>
            <Link href='/' className='flex items-center space-x-2'>
              <CodeIcon className='h-6 w-6 text-primary' />
              <span className='text-lg font-bold'>Chris John Gachuhi</span>
            </Link>
            <p className='text-sm text-muted-foreground'>
              Full-stack engineer & mentor focused on building scalable, secure,
              and high-impact digital systems.
            </p>
          </div>
          <div className='space-y-3'>
            <h4 className='font-medium'>Quick Links</h4>
            <nav className='flex flex-col space-y-2'>
              <Link
                href='/about'
                className='text-sm text-muted-foreground hover:text-foreground'>
                About
              </Link>
              <Link
                href='/projects'
                className='text-sm text-muted-foreground hover:text-foreground'>
                Projects
              </Link>
              <Link
                href='/blog'
                className='text-sm text-muted-foreground hover:text-foreground'>
                Blog
              </Link>
              <Link
                href='/mentorship'
                className='text-sm text-muted-foreground hover:text-foreground'>
                Mentorship
              </Link>
            </nav>
          </div>
          <div className='space-y-3'>
            <h4 className='font-medium'>Resources</h4>
            <nav className='flex flex-col space-y-2'>
              <Link
                href='/resources'
                className='text-sm text-muted-foreground hover:text-foreground'>
                Dev Resources
              </Link>
              <Link
                href='/blog/category/tutorials'
                className='text-sm text-muted-foreground hover:text-foreground'>
                Tutorials
              </Link>
              <Link
                href='/newsletter'
                className='text-sm text-muted-foreground hover:text-foreground'>
                Newsletter
              </Link>
            </nav>
          </div>
          <div className='space-y-3'>
            <h4 className='font-medium'>Connect</h4>
            <div className='flex space-x-3'>
              <Link
                href='https://github.com/ChrisGachuhi'
                target='_blank'
                rel='noopener noreferrer'
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'icon' })
                )}>
                <Icons.gitHub className='h-4 w-4' />
                <span className='sr-only'>GitHub</span>
              </Link>

              <Link
                href='https://linkedin.com/in/chris-john-gachuhi'
                target='_blank'
                rel='noopener noreferrer'
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'icon' })
                )}>
                <Icons.linkedin className='h-4 w-4' />
                <span className='sr-only'>LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <div className='mt-8 border-t pt-8'>
          <p className='text-center text-sm text-muted-foreground'>
            &copy; {new Date().getFullYear()} Chris John Gachuhi. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
