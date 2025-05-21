"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { submitWaitlistForm } from "@/app/actions/waitlist-actions"
import { CheckCircle2, Loader2 } from "lucide-react"

export function WaitlistForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    interests: "",
  })
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState(
    "You've been added to our waitlist. We'll notify you when AYUV is ready for early access.",
  )
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreedToTerms) {
      setError("Please agree to the terms and conditions")
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const result = await submitWaitlistForm(formState)
      setIsSuccess(true)
      setSuccessMessage(
        result.message || "You've been added to our waitlist. We'll notify you when AYUV is ready for early access.",
      )

      // Reset form after successful submission
      setFormState({
        name: "",
        email: "",
        phone: "",
        interests: "",
      })
      setAgreedToTerms(false)
    } catch (err) {
      console.error("Form submission error:", err)

      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("There was an error submitting your form. Please try again.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="futuristic-border glow-effect">
      <div className="futuristic-card p-6">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle2 className="h-16 w-16 text-[#2ecc71] mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Thank You for Joining!</h3>
            <p className="text-gray-300 mb-6 max-w-md">{successMessage}</p>
            <Button onClick={() => setIsSuccess(false)} className="futuristic-button">
              <span>Join Another Person</span>
            </Button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold text-white mb-6">Join Our Waitlist</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="futuristic-input"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="futuristic-input"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number (optional)"
                  className="futuristic-input"
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interests" className="text-white">
                  What interests you most about AYUV?
                </Label>
                <Textarea
                  id="interests"
                  name="interests"
                  value={formState.interests}
                  onChange={handleChange}
                  placeholder="Tell us what features you're most excited about..."
                  className="futuristic-input min-h-[100px]"
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                  disabled={isSubmitting}
                  className="data-[state=checked]:bg-[#2ecc71] data-[state=checked]:border-[#2ecc71]"
                />
                <Label htmlFor="terms" className="text-sm text-gray-300 font-normal leading-tight">
                  I agree to receive updates about AYUV and understand my data will be processed in accordance with the{" "}
                  <a href="/privacy" className="text-[#2ecc71] hover:underline">
                    Privacy Policy
                  </a>
                  .
                </Label>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <Button
                type="submit"
                className="w-full futuristic-button mt-4"
                disabled={isSubmitting || !formState.name || !formState.email}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>Join Waitlist</span>
                )}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
