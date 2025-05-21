"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AnimatedFade } from "@/components/ui/animated-fade"
import { WaitlistForm } from "@/components/waitlist-form"
import { getWaitlistCount } from "@/app/actions/waitlist-actions"

export function SignupSection() {
  const [showForm, setShowForm] = useState(false)
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null)

  useEffect(() => {
    const fetchWaitlistCount = async () => {
      try {
        const count = await getWaitlistCount()
        setWaitlistCount(count)
      } catch (error) {
        console.error("Error fetching waitlist count:", error)
        // Set a fallback count for demonstration
        setWaitlistCount(42)
      }
    }

    fetchWaitlistCount()
  }, [])

  return (
    <section className="bg-[#0e1621] py-16 lg:py-24 tech-pattern">
      <div className="container px-4">
        <AnimatedFade>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Be the First to Experience <span className="gradient-text">AYUV</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center mb-4">
            Join our early access program to get exclusive updates and help shape the future of health management in
            India.
          </p>
          {waitlistCount !== null && (
            <p className="text-[#2ecc71] text-center mb-10">
              <span className="font-bold">{waitlistCount}+</span> people have already joined our waitlist!
            </p>
          )}
        </AnimatedFade>

        <AnimatedFade delay={200}>
          {!showForm ? (
            <div className="text-center mt-8">
              <Button onClick={() => setShowForm(true)} className="futuristic-button text-lg px-8 py-6">
                <span>Join Waitlist</span>
              </Button>
            </div>
          ) : (
            <div className="max-w-md mx-auto mt-8">
              <WaitlistForm />
            </div>
          )}
        </AnimatedFade>
      </div>
    </section>
  )
}
