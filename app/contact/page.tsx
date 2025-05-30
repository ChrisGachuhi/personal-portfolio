"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { MessageSquare } from "lucide-react"

export default function ContactPage() {
  const message = "Hi Chris, I found you through your portfolio. Let&apos;s connect!"
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
            Let&apos;s Work Together
          </h1>
          <p className='mt-6 text-lg text-muted-foreground'>
            Have a project in mind or want to discuss potential opportunities?
            Reach out through your preferred platform below.
          </p>
        </div>

        <div className='mt-16 grid gap-8 md:grid-cols-3'>
          {/* Email Card - Gmail Red */}
          <Card className='group hover:border-[#DB4436] transition-colors'>
            <CardHeader>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-[#FCE8E6] dark:bg-[#3C1E1A] group-hover:bg-[#F4C7C3] dark:group-hover:bg-[#5C2B29] transition-colors'>
                <Icons.mail className='h-8 w-8 text-[#D93025] dark:text-[#F28B82]' />
              </div>
              <CardTitle className='mt-6 text-2xl'>Email</CardTitle>
              <CardDescription>
                For direct messages and inquiries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                asChild
                size='lg'
                className='w-full bg-[#DB4437] hover:bg-[#C53929] text-white'>
                <a
                  href='mailto:chrisgachuhi@gmail.com'
                  className='flex items-center justify-center gap-2'>
                  <Icons.mail className='h-5 w-5' />
                  Send an Email
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* WhatsApp Card - WhatsApp Green */}
          <Card className='group hover:border-[#25D366] transition-colors'>
            <CardHeader>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-[#E8F5E9] dark:bg-[#1E3A21] group-hover:bg-[#C8E6C9] dark:group-hover:bg-[#2D5F31] transition-colors'>
                <MessageSquare className='h-8 w-8 text-[#25D366] dark:text-[#5AE06E]' />
              </div>
              <CardTitle className='mt-6 text-2xl'>WhatsApp</CardTitle>
              <CardDescription>
                For quick messages and calls
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                asChild
                size='lg'
                className='w-full bg-[#25D366] hover:bg-[#1EBE5E] text-white'>
                <a
                  href='https://wa.me/254718729487'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center gap-2'>
                  <MessageSquare className='h-5 w-5' />
                  Message on WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* LinkedIn Card - LinkedIn Blue */}
          <Card className='group hover:border-[#0A66C2] transition-colors'>
            <CardHeader>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-[#E3F2FD] dark:bg-[#0D2640] group-hover:bg-[#BBDEFB] dark:group-hover:bg-[#1A3E6F] transition-colors'>
                <Icons.linkedin className='h-8 w-8 text-[#0A66C2] dark:text-[#70B5F9]' />
              </div>
              <CardTitle className='mt-6 text-2xl'>LinkedIn</CardTitle>
              <CardDescription>
                For professional inquiries and networking
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                asChild
                size='lg'
                className='w-full bg-[#0A66C2] hover:bg-[#004182] text-white'>
                <a
                  href='https://linkedin.com/in/chris-john-gachuhi'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center gap-2'>
                  <Icons.linkedin className='h-5 w-5' />
                  Connect on LinkedIn
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className='mt-12 text-center text-sm text-muted-foreground'>
          <p>I typically respond within a few hours on WhatsApp and within 24 hours for emails.</p>
          <p className='mt-2'>Looking forward to connecting with you!</p>
        </div>
      </motion.div>
    </div>
  )
}