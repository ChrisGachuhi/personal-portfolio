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
  const message = "Hi Chris, I found you through your portfolio. Let's connect!"

  const methods = [
    {
      title: 'Email',
      description: 'For direct messages and inquiries',
      icon: (
        <Icons.mail className='h-8 w-8 text-[#D93025] dark:text-[#F28B82]' />
      ),
      buttonIcon: <Icons.mail className='h-5 w-5' />,
      href: 'mailto:chrisgachuhi@gmail.com',
      buttonLabel: 'Send an Email',
      borderColor: 'hover:border-[#DB4436]',
      bgColor: 'bg-[#DB4437] hover:bg-[#C53929]',
      darkBgColor: 'dark:bg-[#C53929] dark:hover:bg-[#B33426]',
      circleBg: 'bg-[#FCE8E6] dark:bg-[#3C1E1A]',
      hoverCircle: 'group-hover:bg-[#F4C7C3] dark:group-hover:bg-[#5C2B29]',
    },
    {
      title: 'WhatsApp',
      description: 'For quick messages and calls',
      icon: (
        <MessageSquare className='h-8 w-8 text-[#25D366] dark:text-[#5AE06E]' />
      ),
      buttonIcon: <MessageSquare className='h-5 w-5' />,
      href: 'https://wa.me/254718729487',
      buttonLabel: 'Message on WhatsApp',
      borderColor: 'hover:border-[#25D366]',
      bgColor: 'bg-[#25D366] hover:bg-[#1EBE5E]',
      darkBgColor: 'dark:bg-[#1EBE5E] dark:hover:bg-[#18A84E]',
      circleBg: 'bg-[#E8F5E9] dark:bg-[#1E3A21]',
      hoverCircle: 'group-hover:bg-[#C8E6C9] dark:group-hover:bg-[#2D5F31]',
    },
    {
      title: 'LinkedIn',
      description: 'For professional inquiries and networking',
      icon: (
        <Icons.linkedin className='h-8 w-8 text-[#0A66C2] dark:text-[#70B5F9]' />
      ),
      buttonIcon: <Icons.linkedin className='h-5 w-5' />,
      href: 'https://linkedin.com/in/chris-john-gachuhi',
      buttonLabel: 'Connect on LinkedIn',
      borderColor: 'hover:border-[#0A66C2]',
      bgColor: 'bg-[#0A66C2] hover:bg-[#004182]',
      darkBgColor: 'dark:bg-[#0A66C2] dark:hover:bg-[#004182]',
      circleBg: 'bg-[#E3F2FD] dark:bg-[#0D2640]',
      hoverCircle: 'group-hover:bg-[#BBDEFB] dark:group-hover:bg-[#1A3E6F]',
    },
  ]

  return (
    <div className='flex flex-col'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='container py-12 md:py-20'>
        <div className='mx-auto max-w-3xl text-center'>
          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
            Let&apos;s Work Together
          </h1>
          <p className='mt-6 text-lg text-muted-foreground'>
            Have a project in mind or want to discuss potential opportunities?
            Reach out through your preferred platform below.
          </p>
        </div>

        <div className='mt-16 grid gap-8 md:grid-cols-3'>
          {methods.map((method, idx) => (
            <Card
              key={idx}
              className={`group flex h-full flex-col justify-between border transition-colors ${method.borderColor}`}>
              <CardHeader className='text-center'>
                <div
                  className={`flex h-16 w-16 mx-auto items-center justify-center rounded-full ${method.circleBg} ${method.hoverCircle} transition-colors`}>
                  {method.icon}
                </div>
                <CardTitle className='mt-6 text-2xl'>{method.title}</CardTitle>
                <CardDescription className='mt-2'>
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  size='lg'
                  className={`w-full ${method.bgColor} ${method.darkBgColor} text-white`}>
                  <a
                    href={method.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center gap-2'>
                    {method.buttonIcon}
                    {method.buttonLabel}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='mt-12 text-center text-sm text-muted-foreground'>
          <p>
            I typically respond within a few hours on WhatsApp and within 24
            hours for emails.
          </p>
          <p className='mt-2'>Looking forward to connecting with you!</p>
        </div>
      </motion.div>
    </div>
  )
}
