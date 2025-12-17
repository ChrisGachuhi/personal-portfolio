'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import { CodeIcon, MenuIcon, XIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const routes = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/projects',
    label: 'Projects',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/mentorship',
    label: 'Mentorship',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
]

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200',
        isScrolled
          ? 'border-b bg-background/80 backdrop-blur-lg'
          : 'bg-transparent'
      )}>
      <div className='container flex h-16 items-center justify-between px-4 md:px-8'>
        <Link href='/' className='flex items-center space-x-2'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}>
            <CodeIcon className='h-8 w-8 text-primary' />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className='hidden text-xl font-bold sm:inline-block'>
            Chris
          </motion.span>
        </Link>

        <div className='hidden md:flex md:items-center md:gap-6'>
          <NavigationMenu>
            <NavigationMenuList>
              {routes.map((route) => (
                <NavigationMenuItem key={route.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={route.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        pathname === route.href
                          ? 'bg-accent text-accent-foreground'
                          : ''
                      )}>
                      {route.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className='flex md:hidden'>
          {/* <ThemeToggle /> */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon' className='ml-2'>
                <MenuIcon className='h-5 w-5' />
                <span className='sr-only'>Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className='flex flex-col space-y-4 py-4'>
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      'text-lg font-medium transition-colors hover:text-primary',
                      pathname === route.href
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    )}>
                    {route.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
