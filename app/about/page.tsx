'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

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

export default function AboutPage() {
  return (
    <div className='flex flex-col'>
      <section className='py-20'>
        <div className='container px-4 md:px-8'>
          <div className='bg-card'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='flex flex-col justify-center'>
              <Badge className='mb-4 w-fit bg-accent text-accent-foreground'>
                About Me
              </Badge>
              <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
                More Than Code — I Build Scalable Impact
              </h1>
              <p className='mt-6 text-lg text-muted-foreground'>
                I&apos;m Chris John Gachuhi — a full-stack developer, technical
                mentor, and founder of Codegenix East Africa. I specialize in
                crafting high-performance, scalable web applications using
                React, Next.js, Node.js, and TypeScript — backed by real-world
                delivery and leadership.
              </p>
              <p className='mt-4 text-lg text-muted-foreground'>
                Before diving into tech, I managed a busy retail hardware
                business in Nairobi&apos;s CBD — running inventory, supervising
                a team of 5, and optimizing daily ops. That entrepreneurial
                hustle taught me how to lead, problem-solve, and deliver under
                pressure — and I&apos;ve carried that mindset into every project
                I&apos;ve shipped since.
              </p>
              <p className='mt-4 text-lg text-muted-foreground'>
                From SaaS dashboards to startup MVPs, I build with performance,
                security, and growth in mind. I also train and mentor rising
                developers, because I believe that excellence scales when
                it&apos;s shared. If you&apos;re building something ambitious —
                let&apos;s talk.
              </p>
              <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
                <Button asChild size='lg' className='gap-2'>
                  <Link href='/contact'>
                    Let&apos;s Talk
                    <Icons.mail className='h-4 w-4' />
                  </Link>
                </Button>
                <Button asChild size='lg' variant='outline' className='gap-2'>
                  <a
                    href='/resume.pdf'
                    target='_blank'
                    rel='noopener noreferrer'>
                    View Resume
                    <Icons.fileCode className='h-4 w-4' />
                  </a>
                </Button>
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
                    <CardTitle>Founder & Lead Developer</CardTitle>
                    <CardDescription>Codegenix East Africa</CardDescription>
                    <Badge variant='outline'>2023 – Present</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className='ml-6 list-disc space-y-2 text-muted-foreground'>
                      <li>
                        Founded a full-service dev agency focused on scalable
                        apps and mentorship across East Africa
                      </li>
                      <li>
                        Shipped 15+ full-stack web products across legal,
                        edtech, healthcare, and ecommerce
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
                    <CardTitle>Retail Manager (Family Business)</CardTitle>
                    <CardDescription>Nairobi CBD Hardware Shop</CardDescription>
                    <Badge variant='outline'>2017 – 2021</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className='ml-6 list-disc space-y-2 text-muted-foreground'>
                      <li>
                        Managed daily retail operations, supervised 5 staff, and
                        handled inventory logistics
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
                      From mentoring to scaling teams and strategy — I lead with
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
              Great Software Serves People — Not Just Specs
            </h2>
            <p className='mt-6 text-lg text-muted-foreground'>
              I code to solve, scale, and simplify. Whether it&apos;s launching
              MVPs, training developers, or partnering with founders — I build
              for clarity, performance, and people.
            </p>
            <blockquote className='mt-6 italic text-muted-foreground'>
              &quot;We don&apos;t work with just anyone — we invest in bold
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
