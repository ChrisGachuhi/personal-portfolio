import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import Image from 'next/image'

export default function AltaWaterCaseStudy() {
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
            AltaWater E-commerce Platform
          </h1>
          <p className='mt-4 text-xl text-muted-foreground'>
            Building the digital foundation for a leading water brand
          </p>

          <div className='mt-6 flex flex-wrap gap-2'>
            {[
              'Next.js',
              'TypeScript',
              'Tailwind CSS',
              'MongoDB',
              'Node.js',
              'GA4',
              'Facebook Pixel',
              'Microsoft Clarity',
              'Klaviyo',
              'Recharge',
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
              src='https://images.pexels.com/photos/7679736/pexels-photo-7679736.jpeg'
              alt='AltaWater E-commerce Platform'
              fill
              className='object-cover'
            />
          </div>

          <h2>Project Overview</h2>
          <p>
            As the Founding Senior Frontend Engineer at AltaWater, I was tasked
            with building and owning the entire frontend foundation across all
            AltaWater brands. This included everything from the customer-facing
            e-commerce storefront to internal ERP tools used by the operations
            team.
          </p>

          <h2>Key Achievements</h2>
          <ul>
            <li>
              <strong>Performance Optimization</strong>: Improved site
              performance to consistent 95+ Lighthouse scores through strategic
              optimizations including image optimization, page structure
              improvements, and removal of unnecessary blocking code.
            </li>
            <li>
              <strong>Comprehensive Analytics</strong>: Implemented a full
              tracking setup including GA4, Facebook Pixel, Microsoft Clarity,
              Klaviyo, and Recharge to provide the marketing team with clear
              insights into user behavior patterns.
            </li>
            <li>
              <strong>Cost Reduction</strong>: Helped reduce paid traffic costs
              by 30% by providing the team with clearer signals on which funnels
              were most effective based on actual user behavior.
            </li>
            <li>
              <strong>E-commerce Foundation</strong>: Built a scalable
              e-commerce platform that supported multiple brands under the
              AltaWater umbrella, with shared components and brand-specific
              customizations.
            </li>
          </ul>

          <h2>Technical Implementation</h2>
          <p>
            The platform was built using Next.js for server-side rendering and
            optimal performance, with TypeScript for type safety. We used
            Tailwind CSS for rapid UI development and MongoDB as our primary
            database. The frontend was designed to be highly performant, with
            code-splitting and lazy-loading implemented throughout.
          </p>

          <h2>Results</h2>
          <ul>
            <li>95+ Lighthouse performance scores across all pages</li>
            <li>30% reduction in paid traffic costs</li>
            <li>Improved conversion rates through data-driven optimizations</li>
            <li>Streamlined operations with internal tooling</li>
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
