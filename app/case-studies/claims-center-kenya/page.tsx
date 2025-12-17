import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import Image from 'next/image'

export default function ClaimsCenterCaseStudy() {
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
            The Claims Center Kenya
          </h1>
          <p className='mt-4 text-xl text-muted-foreground'>
            Professional legal services website with lead generation
          </p>

          <div className='mt-6 flex flex-wrap gap-2'>
            {[
              'Next.js',
              'TypeScript',
              'Tailwind CSS',
              'SEO',
              'Google Analytics',
              'Lead Generation',
              'Responsive Design',
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
              src='https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
              alt='The Claims Center Kenya'
              fill
              className='object-cover'
            />
          </div>

          <h2>Project Overview</h2>
          <p>
            The Claims Center Kenya needed a professional online presence to
            attract potential clients seeking legal services. The project
            involved creating a modern, responsive website optimized for lead
            generation and search engines.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li>
              <strong>Lead Generation</strong>: Implemented contact forms and
              call-to-action elements to capture potential clients.
            </li>
            <li>
              <strong>SEO Optimization</strong>: Optimized all pages for search
              engines to improve visibility for legal service searches.
            </li>
            <li>
              <strong>Service Pages</strong>: Created detailed pages for each
              legal service offered.
            </li>
            <li>
              <strong>Mobile-First Design</strong>: Ensured the website works
              perfectly on all devices.
            </li>
            <li>
              <strong>Performance</strong>: Optimized images and code for fast
              loading times.
            </li>
          </ul>

          <h2>Technical Implementation</h2>
          <p>
            The website was built using Next.js for optimal performance and SEO
            benefits. TypeScript was used for type safety, and Tailwind CSS for
            responsive styling. Google Analytics was integrated to track visitor
            behavior and measure the effectiveness of different pages.
          </p>

          <h2>Results</h2>
          <ul>
            <li>Increased organic traffic by 150% within 3 months</li>
            <li>Generated 50+ qualified leads in the first month</li>
            <li>Improved search rankings for key legal service terms</li>
            <li>98+ PageSpeed Insights score for both mobile and desktop</li>
          </ul>

          <div className='mt-12 flex items-center justify-between border-t pt-8'>
            <Button asChild variant='outline'>
              <Link href='/projects'>
                <Icons.arrowLeft className='mr-2 h-4 w-4' />
                Back to Projects
              </Link>
            </Button>
            <Button asChild>
              <a
                href='https://theclaimscenterkenya.co.ke'
                target='_blank'
                rel='noopener noreferrer'>
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
