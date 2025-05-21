"use client"

import type React from "react"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedFade } from "@/components/ui/animated-fade"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Handle form submission - would connect to your backend/API
    console.log("Form submitted:", formState)

    // Show success state
    setIsSuccess(true)
    setIsSubmitting(false)

    // Reset after 5 seconds
    setTimeout(() => {
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSuccess(false)
    }, 5000)
  }

  return (
    <div className="min-h-screen bg-[#0e1621]">
      <SiteHeader />
      <main>
        <section className="bg-[#0e1621] py-16 sm:py-24 tech-pattern">
          <div className="container px-4">
            <AnimatedFade>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 text-center">
                Contact <span className="gradient-text">Us</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
                We'd love to hear from you! Whether you have a question, feedback, or partnership inquiry, please reach
                out.
              </p>
            </AnimatedFade>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <AnimatedFade direction="left">
                <div className="futuristic-border glow-effect h-full">
                  <div className="futuristic-card p-8 h-full">
                    <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-[#2ecc71] mr-4 mt-1" />
                        <div>
                          <h3 className="text-white font-medium">Email</h3>
                          <p className="text-gray-300">info@ayuv.in</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-[#2ecc71] mr-4 mt-1" />
                        <div>
                          <h3 className="text-white font-medium">Office</h3>
                          <p className="text-gray-300">Hyderabad, Telangana, India</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-[#2ecc71] mr-4 mt-1" />
                        <div>
                          <h3 className="text-white font-medium">Phone</h3>
                          <p className="text-gray-300">+91 XXXX XXX XXX</p>
                        </div>
                      </div>
                    </div>

                    <div className="section-divider"></div>

                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Our Support Team</h3>
                      <p className="text-gray-300 mb-4">
                        Our dedicated support team is available to assist you with any questions or concerns about AYUV.
                      </p>
                      <p className="text-gray-300">
                        We typically respond to inquiries within 24-48 hours during business days.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedFade>

              <AnimatedFade direction="right" delay={200}>
                <div className="futuristic-border glow-effect h-full">
                  {isSuccess ? (
                    <div className="futuristic-card p-8 flex flex-col items-center justify-center h-full">
                      <CheckCircle className="h-16 w-16 text-[#2ecc71] mb-6" />
                      <h3 className="text-2xl font-semibold text-white mb-4 text-center">Message Sent!</h3>
                      <p className="text-gray-300 text-center">
                        Thank you for reaching out. We'll get back to you as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <div className="futuristic-card p-8 h-full">
                      <h2 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Full Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            className="futuristic-input"
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            className="futuristic-input"
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                            Subject
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formState.subject}
                            onChange={handleChange}
                            className="futuristic-input"
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                            Your Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            rows={4}
                            className="futuristic-input"
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full futuristic-button disabled:opacity-70 disabled:hover:scale-100"
                          disabled={isSubmitting}
                        >
                          <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                        </Button>
                      </form>
                    </div>
                  )}
                </div>
              </AnimatedFade>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
