"use client"

import type React from "react"

import { useState } from "react"
import { AnimatedFade } from "@/components/ui/animated-fade"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Download, FileText, Play, Share2 } from "lucide-react"
import Link from "next/link"

type ResourceCategory = "all" | "articles" | "videos" | "guides" | "infographics"

type Resource = {
  id: number
  title: string
  description: string
  category: ResourceCategory
  type: "article" | "video" | "guide" | "infographic"
  icon: React.ReactNode
  url: string
  popular: boolean
  new: boolean
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Understanding Your ABHA ID",
    description: "Learn how your Ayushman Bharat Health Account works and its benefits.",
    category: "articles",
    type: "article",
    icon: <FileText className="h-5 w-5" />,
    url: "/resources/understanding-abha",
    popular: true,
    new: false,
  },
  {
    id: 2,
    title: "Managing Diabetes with Wearables",
    description: "How continuous glucose monitoring can improve diabetes management.",
    category: "guides",
    type: "guide",
    icon: <BookOpen className="h-5 w-5" />,
    url: "/resources/diabetes-wearables",
    popular: true,
    new: false,
  },
  {
    id: 3,
    title: "Preventive Health Screenings by Age",
    description: "Recommended health screenings for different age groups.",
    category: "infographics",
    type: "infographic",
    icon: <FileText className="h-5 w-5" />,
    url: "/resources/preventive-screenings",
    popular: false,
    new: true,
  },
  {
    id: 4,
    title: "How to Share Health Records Securely",
    description: "Step-by-step guide to sharing your health data with healthcare providers.",
    category: "videos",
    type: "video",
    icon: <Play className="h-5 w-5" />,
    url: "/resources/secure-sharing",
    popular: false,
    new: true,
  },
  {
    id: 5,
    title: "Mental Health Self-Assessment",
    description: "Tools and techniques for monitoring your mental wellbeing.",
    category: "guides",
    type: "guide",
    icon: <BookOpen className="h-5 w-5" />,
    url: "/resources/mental-health",
    popular: true,
    new: false,
  },
  {
    id: 6,
    title: "Understanding Medical Test Results",
    description: "How to interpret common laboratory test results.",
    category: "articles",
    type: "article",
    icon: <FileText className="h-5 w-5" />,
    url: "/resources/test-results",
    popular: false,
    new: true,
  },
]

export function HealthResourcesSection() {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredResources = resources.filter((resource) => {
    // Filter by category
    if (activeCategory !== "all" && resource.category !== activeCategory) {
      return false
    }

    // Filter by search query
    if (searchQuery && !resource.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }

    return true
  })

  return (
    <section className="bg-[#0e1621] py-16 lg:py-24 tech-pattern">
      <div className="container px-4">
        <AnimatedFade>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Health <span className="gradient-text">Resources</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center mb-8">
            Explore our collection of articles, guides, and videos to help you on your health journey
          </p>
        </AnimatedFade>

        <AnimatedFade delay={100}>
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full futuristic-input pl-10 pr-4 py-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </AnimatedFade>

        <AnimatedFade delay={200}>
          <Tabs defaultValue="all" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-5 mb-8 bg-[#131f2e] border border-gray-800">
              <TabsTrigger value="all" onClick={() => setActiveCategory("all")}>
                All
              </TabsTrigger>
              <TabsTrigger value="articles" onClick={() => setActiveCategory("articles")}>
                Articles
              </TabsTrigger>
              <TabsTrigger value="videos" onClick={() => setActiveCategory("videos")}>
                Videos
              </TabsTrigger>
              <TabsTrigger value="guides" onClick={() => setActiveCategory("guides")}>
                Guides
              </TabsTrigger>
              <TabsTrigger value="infographics" onClick={() => setActiveCategory("infographics")}>
                Infographics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredResources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="articles" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredResources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredResources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="guides" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredResources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="infographics" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredResources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </AnimatedFade>

        <AnimatedFade delay={300}>
          <div className="text-center mt-12">
            <Button className="futuristic-button">
              <span>View All Resources</span>
            </Button>
          </div>
        </AnimatedFade>

        <AnimatedFade delay={400}>
          <div className="max-w-xl mx-auto mt-16 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Stay Updated with Health Insights</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest health resources, tips, and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input type="email" placeholder="Your email address" className="futuristic-input flex-1" />
              <Button className="futuristic-button whitespace-nowrap">
                <span>Subscribe</span>
              </Button>
            </div>
          </div>
        </AnimatedFade>
      </div>
    </section>
  )
}

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div className="futuristic-border glow-effect h-full">
      <Card className="futuristic-card h-full p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 bg-[#2ecc71]/20 p-3 rounded-full">{resource.icon}</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase font-semibold text-gray-400">{resource.type}</span>
              {resource.popular && (
                <span className="bg-amber-900/30 text-amber-400 text-xs px-2 py-0.5 rounded-full">Popular</span>
              )}
              {resource.new && (
                <span className="bg-blue-900/30 text-blue-400 text-xs px-2 py-0.5 rounded-full">New</span>
              )}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{resource.description}</p>
            <div className="flex items-center justify-between">
              <Link href={resource.url} className="text-[#2ecc71] text-sm hover:underline">
                {resource.type === "video" ? "Watch Video" : "Read More"}
              </Link>
              <div className="flex gap-2">
                {resource.type === "guide" || resource.type === "infographic" ? (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
                  >
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                ) : null}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
