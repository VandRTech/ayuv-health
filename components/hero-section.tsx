"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { AnimatedFade } from "@/components/ui/animated-fade"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const healthRef = useRef<HTMLSpanElement>(null)
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    if (healthRef.current) {
      const word = "Health"
      healthRef.current.innerHTML = ""

      // Create spans for each letter
      word.split("").forEach((letter, i) => {
        const span = document.createElement("span")
        span.className = "health-letter"
        span.textContent = letter
        span.style.animationDelay = `${i * 0.15}s`
        healthRef.current?.appendChild(span)
        letterRefs.current[i] = span
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-health-container")

            // Animate each letter
            letterRefs.current.forEach((letter, i) => {
              if (letter) {
                setTimeout(() => {
                  letter.classList.add("animate-letter")
                }, i * 150)
              }
            })
          }
        })
      },
      { threshold: 0.5 },
    )

    if (healthRef.current) {
      observer.observe(healthRef.current)
    }

    return () => {
      if (healthRef.current) {
        observer.unobserve(healthRef.current)
      }
    }
  }, [])

  return (
    <section className="bg-[#0e1621] py-24 sm:py-32 tech-pattern">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center">
          <AnimatedFade>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 max-w-4xl">
              Empowering India&apos;s{" "}
              <span className="relative">
                <span ref={healthRef} className="health-word gradient-text"></span> Journey
              </span>
            </h1>
          </AnimatedFade>
          <AnimatedFade delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-10">
              Securely unify your medical records, wearable data, and checkups - all in one place.
            </p>
          </AnimatedFade>
          <AnimatedFade delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="futuristic-button">
                <span>Join Our Early Access</span>
              </Button>
              <Link href="/patient-portal">
                <Button
                  variant="outline"
                  className="learn-more-button text-white border-white hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                >
                  <span>Explore Patient Portal</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </AnimatedFade>
        </div>
      </div>
    </section>
  )
}
