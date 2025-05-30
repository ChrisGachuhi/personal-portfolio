"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge"

// Mock blog post data
const posts = [
  {
    id: "1",
    title: "Building Scalable React Applications",
    description: "Learn how to architect large-scale React applications with clean, maintainable code patterns.",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Frontend",
    date: "April 15, 2025",
    url: "/blog/building-scalable-react-applications",
  },
  {
    id: "2",
    title: "Optimizing API Performance",
    description: "Techniques for improving the performance of your Node.js APIs with caching and efficient database queries.",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Backend",
    date: "March 28, 2025",
    url: "/blog/optimizing-api-performance",
  },
  {
    id: "3",
    title: "Effective Developer Mentoring",
    description: "Strategies for mentoring junior developers and helping them grow into independent contributors.",
    image: "https://images.pexels.com/photos/7176030/pexels-photo-7176030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Mentorship",
    date: "March 10, 2025",
    url: "/blog/effective-developer-mentoring",
  },
]

export function BlogPreview() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Latest Articles
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Insights, tutorials, and thoughts on development, architecture, and
              the tech industry.
            </p>
          </div>
          <Button asChild variant="outline" className="gap-2">
            <Link href="/blog">
              All Articles
              <Icons.arrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="h-full overflow-hidden border transition-all duration-200 hover:border-accent/50 hover:shadow-md">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3 text-base">
                    {post.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="gap-2">
                    <Link href={post.url}>
                      Read Article
                      <Icons.chevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}