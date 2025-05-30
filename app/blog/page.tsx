"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock blog post data
const posts = [
  {
    id: "1",
    title: "Building Scalable React Applications",
    description:
      "Learn how to architect large-scale React applications with clean, maintainable code patterns.",
    image:
      "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Frontend",
    date: "April 15, 2025",
    readTime: "8 min read",
    url: "/blog/building-scalable-react-applications",
  },
  {
    id: "2",
    title: "Optimizing API Performance",
    description:
      "Techniques for improving the performance of your Node.js APIs with caching and efficient database queries.",
    image:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Backend",
    date: "March 28, 2025",
    readTime: "6 min read",
    url: "/blog/optimizing-api-performance",
  },
  {
    id: "3",
    title: "Effective Developer Mentoring",
    description:
      "Strategies for mentoring junior developers and helping them grow into independent contributors.",
    image:
      "https://images.pexels.com/photos/7176030/pexels-photo-7176030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Mentorship",
    date: "March 10, 2025",
    readTime: "5 min read",
    url: "/blog/effective-developer-mentoring",
  },
  {
    id: "4",
    title: "Securing Frontend Applications",
    description:
      "Essential security practices for protecting your frontend applications from common vulnerabilities.",
    image:
      "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Security",
    date: "February 22, 2025",
    readTime: "7 min read",
    url: "/blog/securing-frontend-applications",
  },
  {
    id: "5",
    title: "State Management in React: Beyond Redux",
    description:
      "Exploring modern alternatives to Redux for state management in React applications.",
    image:
      "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Frontend",
    date: "February 5, 2025",
    readTime: "9 min read",
    url: "/blog/state-management-in-react",
  },
  {
    id: "6",
    title: "Building a Career in Tech",
    description:
      "Advice for developers looking to advance their careers in the tech industry.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Career",
    date: "January 18, 2025",
    readTime: "6 min read",
    url: "/blog/building-a-career-in-tech",
  },
]

export default function BlogPage() {
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = posts.filter((post) => {
    const matchesFilter = filter === "all" || post.category === filter
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="flex flex-col">
      <section className="py-20">
        <div className="container px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Blog & Insights
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Thoughts, insights, and tutorials on development, architecture,
              and the tech industry.
            </p>
          </div>

          <div className="mt-12">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Tabs
                defaultValue="all"
                value={filter}
                onValueChange={setFilter}
                className="w-full sm:w-auto"
              >
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="Frontend">Frontend</TabsTrigger>
                  <TabsTrigger value="Backend">Backend</TabsTrigger>
                  <TabsTrigger value="Mentorship">Mentorship</TabsTrigger>
                  <TabsTrigger value="Security">Security</TabsTrigger>
                  <TabsTrigger value="Career">Career</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="relative w-full sm:w-64">
                <Icons.search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
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
                        <Badge variant="secondary">{post.category}</Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Icons.clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="line-clamp-2 mt-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {post.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-3 text-muted-foreground">
                        {post.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="ghost" className="gap-2">
                        <Link href={post.url}>
                          Read Article
                          <Icons.arrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="flex h-40 flex-col items-center justify-center rounded-lg border bg-secondary/50">
                <Icons.search className="mb-4 h-10 w-10 text-muted-foreground" />
                <p className="text-center text-muted-foreground">
                  No articles found matching your criteria. Try adjusting your
                  search or filter.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="container px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Subscribe to My Newsletter
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Stay updated with my latest articles, projects, and insights on
              development and technology.
            </p>
            <form className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
                required
              />
              <Button type="submit" className="gap-2">
                Subscribe
                <Icons.arrowRight className="h-4 w-4" />
              </Button>
            </form>
            <p className="mt-4 text-sm text-muted-foreground">
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Want to Collaborate on Content?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              I'm open to guest posts, interviews, and other content
              collaborations. Let's create valuable content together.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Get in Touch
                  <Icons.mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}