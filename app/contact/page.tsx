'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Icons } from '@/components/icons'
import { MessageSquare } from 'lucide-react'

export default function ContactPage() {
  const message =
    'Hi Chris, I found you through your portfolio. Lets connect!'
  const encodedMessage = encodeURIComponent(message)

  return (
    <div className='flex flex-col'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='container py-12 md:py-20'>
        <div className='mx-auto max-w-3xl text-center'>
          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
            Ready to Build Something Remarkable?
          </h1>
          <p className='mt-6 text-lg text-muted-foreground'>
            Whether it&apos;s a game-changing project or a bold career move — if
            you&apos;re serious, I&apos;m listening. Reach out below and let&apos;s make it
            happen.
          </p>
        </div>

        <div className='mt-16 grid gap-8 md:grid-cols-3'>
          {/* Contact Cards */}
          {[
            {
              title: 'Email',
              description: 'For direct collabs and serious inquiries.',
              icon: (
                <Icons.mail className='h-8 w-8 text-[#D93025] dark:text-[#F28B82]' />
              ),
              href: 'mailto:chrisgachuhi@gmail.com',
              buttonLabel: 'Send an Email',
              bgColor: '#DB4437',
              hoverColor: '#C53929',
              circleBg: 'bg-[#FCE8E6] dark:bg-[#3C1E1A]',
              hoverCircle:
                'group-hover:bg-[#F4C7C3] dark:group-hover:bg-[#5C2B29]',
            },
            {
              title: 'WhatsApp',
              description: 'For quick chats and rapid-fire ideas.',
              icon: (
                <MessageSquare className='h-8 w-8 text-[#25D366] dark:text-[#5AE06E]' />
              ),
              href: 'https://wa.me/254718729487',
              buttonLabel: 'Message on WhatsApp',
              bgColor: '#25D366',
              hoverColor: '#1EBE5E',
              circleBg: 'bg-[#E8F5E9] dark:bg-[#1E3A21]',
              hoverCircle:
                'group-hover:bg-[#C8E6C9] dark:group-hover:bg-[#2D5F31]',
            },
            {
              title: 'LinkedIn',
              description: 'For professional convos and networking.',
              icon: (
                <Icons.linkedin className='h-8 w-8 text-[#0A66C2] dark:text-[#70B5F9]' />
              ),
              href: 'https://linkedin.com/in/chris-john-gachuhi',
              buttonLabel: 'Connect on LinkedIn',
              bgColor: '#0A66C2',
              hoverColor: '#004182',
              circleBg: 'bg-[#E3F2FD] dark:bg-[#0D2640]',
              hoverCircle:
                'group-hover:bg-[#BBDEFB] dark:group-hover:bg-[#1A3E6F]',
            },
          ].map((method, idx) => (
            <Card
              key={idx}
              className='group flex h-full flex-col justify-between border transition-colors hover:border-accent/50 hover:shadow-md'>
              <CardHeader className='flex flex-col items-center gap-4 text-center'>
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full ${method.circleBg} ${method.hoverCircle} transition-colors`}>
                  {method.icon}
                </div>
                <CardTitle className='text-2xl'>{method.title}</CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent className='flex flex-1 items-center justify-center'>
                <Button
                  asChild
                  size='lg'
                  className={`w-full bg-[${method.bgColor}] hover:bg-[${method.hoverColor}] text-white transition-colors`}>
                  <a
                    href={method.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex w-full items-center justify-center gap-2'>
                    {method.icon}
                    {method.buttonLabel}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='mt-12 text-center text-sm text-muted-foreground'>
          <p>
            I move fast — expect a WhatsApp reply within hours and an email
            response within 24 hours.
          </p>
          <p className='mt-2'>Let&apos;s turn ideas into shipped products.</p>
        </div>
      </motion.div>
    </div>
  )
}
