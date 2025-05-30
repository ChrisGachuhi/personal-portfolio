'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'

export function HeroSection() {
  return (
    <section className='relative overflow-hidden py-20 md:py-28'>
      {/* Background gradient */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute -right-10 -top-20 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[100px]' />
        <div className='absolute -bottom-32 -left-40 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[100px]' />
      </div>

      <div className='container relative z-10 px-4 md:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <h1 className='gradient-text text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl'>
              Architecting Scalable Systems. Mentoring the Next Generation.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='mt-6 text-lg text-muted-foreground md:text-xl'>
            I help businesses and teams ship high-performance web applications
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='mt-4 text-base text-muted-foreground md:text-lg'>
            As the founder of{' '}
            <span className='text-foreground font-semibold'>
              Codegenix East Africa
            </span>
            , I focus on building scalable systems, mentoring junior devs, and
            helping mission-driven clients make smart technical decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <Button asChild size='lg' className='gap-2'>
              <Link href='/projects'>
                View Projects
                <Icons.fileCode className='h-4 w-4' />
              </Link>
            </Button>
            <Button asChild size='lg' variant='outline' className='gap-2'>
              <Link href='/contact'>
                Let&apos;s Talk
                <Icons.mail className='h-4 w-4' />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Updated mock terminal section to fit theme and feel purposeful */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className='mt-20 flex justify-center'>
          <div className='relative h-[480px] w-full max-w-5xl overflow-hidden rounded-lg border bg-card/50 p-2 backdrop-blur-sm'>
            <div className='flex h-full w-full flex-col overflow-hidden rounded-md border bg-background'>
              <div className='flex h-8 items-center border-b bg-muted/50 px-4'>
                <div className='flex space-x-2'>
                  <div className='h-3 w-3 rounded-full bg-destructive opacity-75' />
                  <div className='h-3 w-3 rounded-full bg-amber-500 opacity-75' />
                  <div className='h-3 w-3 rounded-full bg-green-500 opacity-75' />
                </div>
                <div className='ml-4 flex-1 text-center'>
                  <p className='text-xs text-muted-foreground'>
                    /src/lib/codegenix-stack.ts
                  </p>
                </div>
              </div>
              <div className='flex-1 overflow-auto p-4'>
                <pre className='text-left text-sm leading-relaxed whitespace-pre-wrap break-words'>
                  <code className='language-tsx'>
                    <span className='text-blue-400'>import</span> React{' '}
                    <span className='text-blue-400'>from</span>{' '}
                    <span className='text-amber-300'>&apos;react&apos;</span>
                    {'\n'}
                    <span className='text-blue-400'>import</span> Next{' '}
                    <span className='text-blue-400'>from</span>{' '}
                    <span className='text-amber-300'>&apos;next&apos;</span>
                    {'\n'}
                    <span className='text-blue-400'>import</span> Tailwind{' '}
                    <span className='text-blue-400'>from</span>{' '}
                    <span className='text-amber-300'>
                      &apos;tailwindcss&apos;
                    </span>
                    {'\n'}
                    <span className='text-blue-400'>
                      import
                    </span> TypeScript{' '}
                    <span className='text-blue-400'>from</span>{' '}
                    <span className='text-amber-300'>
                      &apos;typescript&apos;
                    </span>
                    {'\n'}
                    <span className='text-blue-400'>import</span> Node{' '}
                    <span className='text-blue-400'>from</span>{' '}
                    <span className='text-amber-300'>&apos;node&apos;</span>
                    {'\n\n'}
                    <span className='text-blue-400'>const</span>{' '}
                    <span className='text-amber-300'>principles</span> = [{' '}
                    {'\n'}
                    {'  '}
                    <span className='text-green-400'>
                      &quot;Performance over guesswork&quot;
                    </span>
                    ,{'\n'}
                    {'  '}
                    <span className='text-green-400'>
                      &quot;Security by design&quot;
                    </span>
                    ,{'\n'}
                    {'  '}
                    <span className='text-green-400'>
                      &quot;Clean, maintainable code&quot;
                    </span>
                    ,{'\n'}
                    {'  '}
                    <span className='text-green-400'>
                      &quot;Mentorship is impact&quot;
                    </span>
                    ,{'\n'}
                    ];
                    {'\n\n'}
                    <span className='text-blue-400'>function</span>{' '}
                    <span className='text-amber-300'>BuildImpact</span>() {'{'}
                    {'\n'}
                    {'  '}
                    <span className='text-blue-400'>return</span> <br />
                    <span className='text-purple-400'>
                      &lt;CraftedSoftware
                    </span>{' '}
                    <span className='text-blue-300'>scale</span>=
                    <span className='text-green-400'>
                      &quot;enterprise&quot;
                    </span>{' '}
                    <span className='text-blue-300'>quality</span>=
                    <span className='text-green-400'>&quot;elite&quot;</span>{' '}
                    <span className='text-purple-400'>/&gt;</span>
                    {'\n'}
                    {'}'}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
