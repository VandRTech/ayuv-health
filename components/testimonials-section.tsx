"use client"

import { useState } from "react"
import { AnimatedFade } from "@/components/ui/animated-fade"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

type Testimonial = {
  id: number
  name: string
  role: string
  content: string
  rating: number
  image: string
  specialty: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Patient",
    content:
      "AYUV has completely transformed how I manage my health records. The ability to access all my medical history in one place has made doctor visits so much more efficient. The consent management gives me peace of mind knowing I control who sees my information.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    specialty: "Primary Care",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    role: "Patient",
    content:
      "As someone with multiple chronic conditions, keeping track of all my medications and appointments was always a challenge. AYUV's platform has simplified everything. The preventive care reminders have been particularly helpful in staying on top of my health.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    specialty: "Cardiology",
  },
  {
    id: 3,
    name: "Dr. Anjali Patel",
    role: "Healthcare Provider",
    content:
      "From a doctor's perspective, AYUV provides unprecedented access to comprehensive patient history, making diagnoses more accurate and treatment plans more effective. The secure sharing feature ensures I have all the information I need while respecting patient privacy.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    specialty: "Pediatrics",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Patient",
    content:
      "The wearable integration feature has been a game-changer for monitoring my diabetes. My doctor can now see patterns in my glucose levels between visits, allowing for more timely adjustments to my treatment plan. I feel more in control of my health than ever before.",
    rating: 4,
    image: "/placeholder.svg?height=80&width=80",
    specialty: "Endocrinology",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="bg-[#0e1621] py-16 lg:py-24 tech-pattern">
      <div className="container px-4">
        <AnimatedFade>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            What Our Users <span className="gradient-text">Say</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center mb-12">
            Hear from patients and healthcare providers who are already experiencing the benefits of AYUV
          </p>
        </AnimatedFade>

        <div className="max-w-4xl mx-auto">
          <AnimatedFade delay={200}>
            <div className="futuristic-border glow-effect">
              <div className="futuristic-card p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#2ecc71]">
                      <Image
                        src={currentTestimonial.image || "/placeholder.svg"}
                        alt={currentTestimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < currentTestimonial.rating ? "text-[#2ecc71] fill-[#2ecc71]" : "text-gray-500"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-400">{currentTestimonial.specialty} Specialty</span>
                    </div>
                    <p className="text-white text-lg italic mb-4">"{currentTestimonial.content}"</p>
                    <div>
                      <p className="text-[#2ecc71] font-semibold">{currentTestimonial.name}</p>
                      <p className="text-gray-400 text-sm">{currentTestimonial.role}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-8">
                  <p className="text-gray-400 text-sm">
                    {currentIndex + 1} of {testimonials.length}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      onClick={prevTestimonial}
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous testimonial</span>
                    </Button>
                    <Button
                      onClick={nextTestimonial}
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800"
                    >
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next testimonial</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedFade>
        </div>
      </div>
    </section>
  )
}
