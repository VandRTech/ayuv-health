import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FeaturesSection } from "@/components/features-section"
import { AnimatedFade } from "@/components/ui/animated-fade"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Users, Smartphone, Clock, FileText } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#0e1621]">
      <SiteHeader />
      <main>
        <section className="bg-[#0e1621] py-16 sm:py-24 tech-pattern">
          <div className="container px-4">
            <AnimatedFade>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 text-center">
                <span className="gradient-text">Features</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
                Discover how AYUV is transforming healthcare management with powerful, user-centric features
              </p>
            </AnimatedFade>
          </div>
        </section>

        <FeaturesSection />

        <section className="bg-[#0e1621] py-16 lg:py-24 tech-pattern">
          <div className="container px-4">
            <AnimatedFade>
              <h2 className="text-3xl font-bold text-white mb-16 text-center">
                Additional <span className="gradient-text">Features</span>
              </h2>
            </AnimatedFade>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <AnimatedFade delay={100}>
                <FeatureCard
                  icon={<Shield className="h-6 w-6 text-[#2ecc71]" />}
                  title="End-to-End Encryption"
                  description="Your health data is protected with military-grade encryption at every step, from storage to transmission."
                />
              </AnimatedFade>
              <AnimatedFade delay={200}>
                <FeatureCard
                  icon={<Zap className="h-6 w-6 text-[#2ecc71]" />}
                  title="Real-time Health Insights"
                  description="Get personalized health recommendations based on your medical history and lifestyle data."
                />
              </AnimatedFade>
              <AnimatedFade delay={300}>
                <FeatureCard
                  icon={<Users className="h-6 w-6 text-[#2ecc71]" />}
                  title="Family Health Management"
                  description="Manage health profiles for your entire family with appropriate access controls and privacy settings."
                />
              </AnimatedFade>
              <AnimatedFade delay={400}>
                <FeatureCard
                  icon={<Smartphone className="h-6 w-6 text-[#2ecc71]" />}
                  title="Mobile-First Experience"
                  description="Access your health information anytime, anywhere with our intuitive mobile application."
                />
              </AnimatedFade>
              <AnimatedFade delay={500}>
                <FeatureCard
                  icon={<Clock className="h-6 w-6 text-[#2ecc71]" />}
                  title="Appointment Scheduling"
                  description="Book appointments with healthcare providers directly through the platform and receive reminders."
                />
              </AnimatedFade>
              <AnimatedFade delay={600}>
                <FeatureCard
                  icon={<FileText className="h-6 w-6 text-[#2ecc71]" />}
                  title="Digital Health Documents"
                  description="Store and access important health documents like insurance policies, vaccination records, and more."
                />
              </AnimatedFade>
            </div>

            <div className="text-center mt-12">
              <Link href="/patient-portal">
                <Button className="futuristic-button">
                  <span>Explore Patient Portal</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="futuristic-border glow-effect h-full">
      <div className="futuristic-card p-6 h-full">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  )
}
