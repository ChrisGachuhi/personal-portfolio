import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'

export default function NotFound() {
  return (
    <div className='relative flex min-h-[calc(100vh-14rem)] flex-col items-center justify-center text-center overflow-hidden'>
      {/* Subtle gradient background */}
      <div className='absolute inset-0 -z-10 bg-gradient-to-br from-background via-muted/30 to-background'>
        <div className='absolute -right-20 -top-32 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]' />
        <div className='absolute -bottom-32 -left-20 h-[400px] w-[400px] rounded-full bg-accent/20 blur-[120px]' />
      </div>

      <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
        <div className='relative mb-8 h-48 w-full'>
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-9xl font-bold text-muted-foreground/10 dark:text-muted/20'>
            404
          </div>
          <div className='relative z-10 flex h-full flex-col items-center justify-center'>
            <Icons.logo className='h-16 w-16 text-primary' />
            <h1 className='mt-4 text-4xl font-bold tracking-tight sm:text-5xl'>
              Not Your Fault — Just a Missing Page
            </h1>
          </div>
        </div>

        <p className='mt-6 text-lg text-muted-foreground'>
          Yeah, I know. It sucks. This page should exist — it&apos;s on my to-do
          list (promise). In the meantime, why not check out something that{' '}
          <em>is</em> working?
        </p>

        <div className='mt-10 flex flex-wrap items-center justify-center gap-4'>
          <Button asChild size='lg'>
            <Link href='/' className='gap-2'>
              <Icons.chevronRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant='outline' size='lg'>
            <Link href='/contact' className='gap-2'>
              <Icons.mail className='h-4 w-4' />
              Contact Me
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
