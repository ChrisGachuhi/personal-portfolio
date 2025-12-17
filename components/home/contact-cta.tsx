'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'

export function ContactCta() {
  return (
    <section className='py-20'>
      <div className='container px-4 md:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-50px' }}
          className='relative overflow-hidden rounded-lg border bg-card p-8 shadow-md'>
          {/* Background gradient */}
          <div className='absolute inset-0 z-0'>
            <div className='absolute -right-10 -top-20 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[100px]' />
            <div className='absolute -bottom-32 -left-40 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]' />
          </div>

          <div className='relative z-10 flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left'>
            <div className='max-w-xl'>
              <h2 className='text-2xl font-bold tracking-tight sm:text-3xl'>
                Let&apos;s Work Together
              </h2>
              <p className='mt-4 text-muted-foreground'>
                I'm currently open to new opportunities in frontend engineering
                and technical leadership roles. Whether you need help with
                building high-performance web applications, optimizing existing
                codebases, or leading a technical team — let's connect and
                discuss how I can contribute to your success.
              </p>
            </div>
            <div className='flex flex-col gap-4 sm:flex-row'>
              <Button asChild size='lg' className='gap-2'>
                <Link href='mailto:chrisgachuhi@gmail.com'>
                  Email Me
                  <Icons.mail className='h-4 w-4' />
                </Link>
              </Button>
              <Button asChild size='lg' variant='outline' className='gap-2'>
                <Link
                  href='https://www.linkedin.com/in/chris-john-gachuhi/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  LinkedIn
                  <Icons.linkedin className='h-4 w-4' />
                </Link>
              </Button>
              <Button asChild size='lg' variant='outline' className='gap-2'>
                <Link
                  href='https://github.com/ChrisGachuhi'
                  target='_blank'
                  rel='noopener noreferrer'>
                  GitHub
                  <Icons.gitHub className='h-4 w-4' />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
