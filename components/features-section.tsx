import type React from "react"
import { Card } from "@/components/ui/card"
import { DatabaseZap, ShieldCheck, Watch, BellRing } from "lucide-react"
import { AnimatedFade } from "@/components/ui/animated-fade"

export function FeaturesSection() {
  return (
    <section className="bg-[#0e1621] py-16 lg:py-24 tech-pattern">
      <div className="container px-4">
        <AnimatedFade>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key <span className="gradient-text">Features</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Everything you need to take control of your health data
            </p>
          </div>
        </AnimatedFade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <AnimatedFade delay={100}>
            <FeatureCard
              icon={<DatabaseZap className="h-8 w-8" />}
              title="Unified Health Records"
              description="Access ABHA-linked reports, prescriptions, and history seamlessly in one secure profile."
              iconBgColor="bg-blue-900"
              iconColor="text-blue-400"
            />
          </AnimatedFade>
          <AnimatedFade delay={200}>
            <FeatureCard
              icon={<ShieldCheck className="h-8 w-8" />}
              title="Blockchain-Secured Consent"
              description="You control exactly who sees your health information, with every access logged securely."
              iconBgColor="bg-green-900"
              iconColor="text-green-400"
            />
          </AnimatedFade>
          <AnimatedFade delay={300}>
            <FeatureCard
              icon={<Watch className="h-8 w-8" />}
              title="Wearable & IoT Integration"
              description="Effortlessly sync data from your favorite fitness trackers and health devices."
              iconBgColor="bg-purple-900"
              iconColor="text-purple-400"
            />
          </AnimatedFade>
          <AnimatedFade delay={400}>
            <FeatureCard
              icon={<BellRing className="h-8 w-8" />}
              title="Preventive Care Insights"
              description="Get timely reminders and insights for checkups and preventive care."
              iconBgColor="bg-cyan-900"
              iconColor="text-cyan-400"
            />
          </AnimatedFade>
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  iconBgColor: string
  iconColor: string
}

function FeatureCard({ icon, title, description, iconBgColor, iconColor }: FeatureCardProps) {
  return (
    <div className="futuristic-border glow-effect h-full">
      <Card className="futuristic-card h-full">
        <div className="p-6">
          <div
            className={`${iconBgColor} w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110`}
          >
            <div className={iconColor}>{icon}</div>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </Card>
    </div>
  )
}
