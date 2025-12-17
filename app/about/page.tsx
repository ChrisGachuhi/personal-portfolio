'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address').optional(),
  whatsapp: z.string().min(10, 'Please enter a valid phone number').optional(),
  deliveryMethod: z.enum(['email', 'whatsapp']),
})

type FormData = z.infer<typeof formSchema>

export default function AboutPage() {
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      deliveryMethod: 'email',
    },
  })

  const deliveryMethod = watch('deliveryMethod')

  const onSubmit = (data: FormData) => {
    setIsLoading(true)
    setErrorMessage('')
    setSuccessMessage('')

    try {
      // In a real implementation, this would call the API
      setTimeout(() => {
        setSuccessMessage(
          `Resume has been sent to your ${
            data.deliveryMethod === 'email' ? 'email' : 'WhatsApp'
          }!`
        )
      }, 1000)
      setSuccessMessage(
        `Resume has been sent to your ${
          data.deliveryMethod === 'email' ? 'email' : 'WhatsApp'
        }!`
      )
      setShowModal(false)
    } catch (error) {
      setErrorMessage('Failed to send resume. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='flex flex-col'>
      <section className='py-20'>
        <div className='container px-4 md:px-8'>
          <div className='bg-card'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='flex flex-col items-center text-center justify-center'>
              <Badge className='mb-4 w-fit bg-accent text-accent-foreground mx-auto'>
                About Me
              </Badge>
              <h1 className='text-4xl font-bold tracking-tight sm:text-5xl mx-auto'>
                More Than Code. I Build Scalable Impact.
              </h1>
              <p className='mt-6 text-lg text-muted-foreground text-left'>
                I&apos;m Chris John Gachuhi, a full-stack developer, technical
                mentor, and Technical Founder & Freelance Consultant. I
                specialize in crafting high-performance, scalable web
                applications using React, Next.js, Node.js, and TypeScript. My
                work is backed by real-world delivery and leadership. Before
                diving into tech, I managed a busy retail hardware business in
                Nairobi&apos;s CBD. I ran inventory, supervised a team of five,
                and optimized daily operations. This entrepreneurial experience
                taught me how to lead, problem-solve, and deliver under
                pressure. I have carried this mindset into every project I have
                shipped since.
              </p>
              <p className='mt-4 text-lg text-muted-foreground text-left'>
                From SaaS dashboards to startup MVPs, I build with performance,
                security, and growth in mind. I also train and mentor rising
                developers, because I believe that excellence scales when
                it&apos;s shared. If you&apos;re building something ambitious,
                let&apos;s talk.
              </p>
              <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
                <Button asChild size='lg' className='gap-2'>
                  <Link href='/contact'>
                    Let&apos;s Talk
                    <Icons.mail className='h-4 w-4' />
                  </Link>
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size='lg' variant='outline' className='gap-2'>
                      Request My Resume
                      <Icons.fileCode className='h-4 w-4' />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className='sm:max-w-[600px] bg-white/90 backdrop-blur-md rounded-lg shadow-xl'>
                    <div className='p-6'>
                      <DialogHeader>
                        <div className='flex items-center gap-2'>
                          <Icons.fileCode className='h-6 w-6 text-primary' />
                          <DialogTitle className='text-2xl font-semibold'>
                            Request My Resume
                          </DialogTitle>
                        </div>
                        <CardDescription className='mt-2 text-muted-foreground'>
                          Choose your preferred method to receive my
                          professional resume.
                        </CardDescription>
                      </DialogHeader>

                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='mt-6 space-y-4'>
                        <div className='space-y-2'>
                          <Label htmlFor='deliveryMethod'>
                            Delivery Method
                          </Label>
                          <div className='flex items-center space-x-4'>
                            <label className='flex items-center space-x-2'>
                              <input
                                type='radio'
                                {...register('deliveryMethod')}
                                value='email'
                                className='h-4 w-4 text-primary focus:ring-primary'
                              />
                              <span>Email</span>
                            </label>
                            <label className='flex items-center space-x-2'>
                              <input
                                type='radio'
                                {...register('deliveryMethod')}
                                value='whatsapp'
                                className='h-4 w-4 text-primary focus:ring-primary'
                              />
                              <span>WhatsApp</span>
                            </label>
                          </div>
                        </div>

                        {deliveryMethod === 'email' && (
                          <div className='space-y-2'>
                            <Label htmlFor='email'>Your Email</Label>
                            <Input
                              id='email'
                              type='email'
                              {...register('email')}
                              placeholder='your.email@example.com'
                              className='bg-background'
                            />
                            {errors.email && (
                              <p className='text-sm text-red-500'>
                                {errors.email.message}
                              </p>
                            )}
                          </div>
                        )}

                        {deliveryMethod === 'whatsapp' && (
                          <div className='space-y-2'>
                            <Label htmlFor='whatsapp'>
                              Your WhatsApp Number
                            </Label>
                            <Input
                              id='whatsapp'
                              type='tel'
                              {...register('whatsapp')}
                              placeholder='+254 7xx xxx xxx'
                              className='bg-background'
                            />
                            {errors.whatsapp && (
                              <p className='text-sm text-red-500'>
                                {errors.whatsapp.message}
                              </p>
                            )}
                          </div>
                        )}

                        <div className='flex flex-col gap-4'>
                          <Button
                            type='submit'
                            disabled={isLoading}
                            className='w-full'>
                            {isLoading ? (
                              <>
                                <Icons.refresh className='mr-2 h-4 w-4 animate-spin' />
                                Sending...
                              </>
                            ) : (
                              'Send Resume'
                            )}
                          </Button>
                          {successMessage && (
                            <p className='text-center text-sm text-green-500'>
                              {successMessage}
                            </p>
                          )}
                          {errorMessage && (
                            <p className='text-center text-sm text-red-500'>
                              {errorMessage}
                            </p>
                          )}
                        </div>
                      </form>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className='py-20'>
        <div className='container px-4 md:px-8'>
          <Tabs defaultValue='experience' className='w-full'>
            <TabsList className='mb-8 grid w-full grid-cols-3'>
              <TabsTrigger value='experience'>Experience</TabsTrigger>
              <TabsTrigger value='skills'>Skills</TabsTrigger>
              <TabsTrigger value='education'>Education</TabsTrigger>
            </TabsList>

            <TabsContent value='experience'>
              <div className='grid gap-6 md:grid-cols-2'>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      Technical Founder & Lead Developer (Freelance)
                    </CardTitle>
                    <CardDescription>
                      Chris Gachuhi WebSolutions
                    </CardDescription>
                    <Badge variant='outline'>2023 – Present</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className='ml-6 list-disc space-y-2 text-muted-foreground'>
                      <li>
                        Founded and operate my own consultancy, delivering
                        scalable web solutions and mentorship across East Africa
                      </li>
                      <li>
                        Shipped 15+ full-stack web products for clients in
                        legal, edtech, healthcare, and ecommerce
                      </li>
                      <li>
                        Mentored over 100 junior developers through structured
                        training, live projects, and internships
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Senior Software Developer</CardTitle>
                    <CardDescription>
                      Puzzles Innovationz (Atlanta, GA)
                    </CardDescription>
                    <Badge variant='outline'>Jan 2024 – July 2024</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className='ml-6 list-disc space-y-2 text-muted-foreground'>
                      <li>
                        Led frontend architecture using Firebase, React,
                        Tailwind, and SSR-based Next.js
                      </li>
                      <li>
                        Built CI/CD pipelines with GitHub Actions for seamless
                        feature deployment
                      </li>
                      <li>
                        Collaborated across continents with product, design, and
                        data teams
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Software Developer</CardTitle>
                    <CardDescription>
                      Edulink International College
                    </CardDescription>
                    <Badge variant='outline'>2023 – 2025</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className='ml-6 list-disc space-y-2 text-muted-foreground'>
                      <li>
                        Developed educational dashboards and APIs for staff and
                        student workflows
                      </li>
                      <li>
                        Optimized Firebase-integrated systems for performance
                        and reliability
                      </li>
                      <li>
                        Improved student feedback tools to better track learning
                        outcomes
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Program Manager & Mentor</CardTitle>
                    <CardDescription>Ubunifu College of AI</CardDescription>
                    <Badge variant='outline'>2021 – 2023</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className='ml-6 list-disc space-y-2 text-muted-foreground'>
                      <li>
                        Designed and ran an AI-focused incubator, guiding dev
                        teams to funded MVP launches
                      </li>
                      <li>
                        Mentored students on real-world startup challenges and
                        product-market fit
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Retail Store Manager</CardTitle>
                    <CardDescription>Nairobi CBD Hardware Shop</CardDescription>
                    <Badge variant='outline'>2017 – 2021</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className='ml-6 list-disc space-y-2 text-muted-foreground'>
                      <li>
                        Managed daily retail operations, supervised 15+ staff,
                        and handled inventory logistics
                      </li>
                      <li>
                        Developed client relationships and sourced stock to
                        match demand patterns
                      </li>
                      <li>
                        Built discipline and leadership skills that now guide my
                        technical execution
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value='skills'>
              <div className='grid gap-6 md:grid-cols-2'>
                <Card>
                  <CardHeader>
                    <CardTitle>Frontend Engineering</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-2 text-muted-foreground'>
                      Cutting-edge interfaces built for speed, accessibility,
                      and maintainability.
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      <Badge>React.js</Badge>
                      <Badge>Next.js</Badge>
                      <Badge>TypeScript</Badge>
                      <Badge>Tailwind CSS</Badge>
                      <Badge>Framer Motion</Badge>
                      <Badge>Redux</Badge>
                      <Badge>Accessibility</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Backend & APIs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-2 text-muted-foreground'>
                      RESTful and real-time systems with performance and
                      security at the core.
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      <Badge>Node.js</Badge>
                      <Badge>Express.js</Badge>
                      <Badge>MongoDB</Badge>
                      <Badge>PostgreSQL</Badge>
                      <Badge>Firebase</Badge>
                      <Badge>JWT</Badge>
                      <Badge>OAuth2</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>DevOps & Testing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-2 text-muted-foreground'>
                      Solid shipping pipelines and confidence through test
                      coverage.
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      <Badge>Vercel</Badge>
                      <Badge>GitHub Actions</Badge>
                      <Badge>CI/CD</Badge>
                      <Badge>Jest</Badge>
                      <Badge>Cypress</Badge>
                      <Badge>Performance Tuning</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Leadership & Growth</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-2 text-muted-foreground'>
                      From mentoring to driving growth and strategy, I lead with
                      clarity.
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      <Badge>Mentorship</Badge>
                      <Badge>Agile/Scrum</Badge>
                      <Badge>Team Management</Badge>
                      <Badge>Technical Strategy</Badge>
                      <Badge>Public Speaking</Badge>
                      <Badge>Client Discovery</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value='education'>
              <Card>
                <CardHeader>
                  <CardTitle>BSc. Information Technology</CardTitle>
                  <CardDescription>
                    Jomo Kenyatta University of Agriculture and Technology
                  </CardDescription>
                  <Badge variant='outline'>2012 – 2017</Badge>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground'>
                    A solid foundation in systems architecture, databases, and
                    software design — where I first discovered the thrill of
                    solving real-world problems through code.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className='bg-secondary/50 py-20'>
        <div className='container px-4 md:px-8'>
          <div className='mx-auto max-w-3xl text-center'>
            <Badge className='mb-4 bg-accent text-accent-foreground'>
              My Philosophy
            </Badge>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
              Great Software Serves People &mdash; Not Just Specs
            </h2>
            <p className='mt-6 text-lg text-muted-foreground'>
              I code to solve, scale, and simplify. Whether it&apos;s launching
              MVPs, mentoring developers, or working with founders, I build for
              clarity, performance, and people.
            </p>
            <blockquote className='mt-6 italic text-muted-foreground'>
              &quot;I do not work with just anyone. I invest my energy in bold
              thinkers building the next era of digital business.&quot;
            </blockquote>
            <div className='mt-8 text-center'>
              <Link href='/contact'>
                <Button size='lg' className='text-base'>
                  Let&apos;s Build Something Worth Launching
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
