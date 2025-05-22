"use client"

// Removed: import { useEffect, useRef } from "react"
// No longer needed for the "Health" word animation

import { Button } from "@/components/ui/button"
import { AnimatedFade } from "@/components/ui/animated-fade"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  // Removed:
  // const healthRef = useRef<HTMLSpanElement>(null)
  // const letterRefs = useRef<(HTMLSpanElement | null)[]>([])
  // Removed the entire useEffect block that handled the letter-by-letter animation

  return (
    <section className="bg-[#0e1621] py-24 sm:py-32 tech-pattern">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center">
          <AnimatedFade>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 max-w-4xl">
              Empowering India&apos;s{" "}
              {/* The outer <span className="relative"> might not be needed anymore, 
                  but keeping it for now in case it affects layout. 
                  You can test removing it if desired. */}
              <span className="relative">
                {/*
                  MODIFIED: "Health" is now static text.
                  - Removed ref={healthRef}
                  - Added "Health" directly inside the span.
                  - Added a new class "health-glow" for the glow effect (to be defined in CSS).
                  - Kept "health-word" and "gradient-text" for existing styling.
                */}
                <span className="health-word gradient-text health-glow">Health</span> Journey
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
                  className="learn-more-button text-primary border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 group"
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
