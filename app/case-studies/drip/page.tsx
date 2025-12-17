import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import Image from 'next/image'

export default function DripCaseStudy() {
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
            Drip E-commerce Platform
          </h1>
          <p className='mt-4 text-xl text-muted-foreground'>
            A full-stack e-commerce solution with admin dashboard and payment
            integration
          </p>

          <div className='mt-6 flex flex-wrap gap-2'>
            {[
              'Next.js',
              'Stripe',
              'MongoDB',
              'Express',
              'Node.js',
              'Admin Dashboard',
              'Payment Processing',
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
              src='https://images.pexels.com/photos/5863373/pexels-photo-5863373.jpeg'
              alt='Drip E-commerce Platform'
              fill
              className='object-cover'
            />
          </div>

          <h2>Project Overview</h2>
          <p>
            Drip is a comprehensive e-commerce platform I developed to provide a
            seamless shopping experience. The platform includes a
            customer-facing store, admin dashboard, and integrated payment
            processing.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li>
              <strong>Product Management</strong>: Full CRUD operations for
              products with categories, variants, and inventory tracking.
            </li>
            <li>
              <strong>Shopping Cart</strong>: Persistent cart functionality with
              guest checkout options.
            </li>
            <li>
              <strong>Payment Processing</strong>: Integrated Stripe for secure
              payment processing.
            </li>
            <li>
              <strong>Admin Dashboard</strong>: Comprehensive dashboard for
              managing products, orders, and customers.
            </li>
            <li>
              <strong>User Authentication</strong>: Secure user authentication
              and authorization system.
            </li>
          </ul>

          <h2>Technical Implementation</h2>
          <p>
            The application was built using Next.js for server-side rendering
            and API routes, with MongoDB for data storage. The frontend uses
            React with TypeScript for type safety, and Tailwind CSS for styling.
            Stripe was integrated for payment processing, and the admin
            dashboard was built with a focus on usability and data
            visualization.
          </p>

          <h2>Results</h2>
          <ul>
            <li>Successfully processed over 1,000+ transactions</li>
            <li>Reduced cart abandonment rate by 25% with guest checkout</li>
            <li>Improved admin efficiency with intuitive dashboard</li>
            <li>99.9% uptime with proper error handling</li>
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
