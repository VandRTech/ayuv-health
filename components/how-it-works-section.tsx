import type React from "react"
import { UserPlus, Link, Share2, BarChartBig } from "lucide-react"
import { AnimatedFade } from "@/components/ui/animated-fade"

export function HowItWorksSection() {
  return (
    <section className="bg-[#0e1621] py-16 lg:py-24 tech-pattern">
      <div className="container px-4">
        <AnimatedFade>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            How It <span className="gradient-text">Works</span>
          </h2>
        </AnimatedFade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <AnimatedFade delay={100}>
            <StepCard
              number="1"
              icon={<UserPlus className="h-6 w-6" />}
              title="Securely Link ABHA"
              description="Create your AYUV account by securely linking your Ayushman Bharat Health Account ID."
            />
          </AnimatedFade>
          <AnimatedFade delay={200}>
            <StepCard
              number="2"
              icon={<Link className="h-6 w-6" />}
              title="Sync Your Data"
              description="Upload your medical records and connect your wearable devices to build your health profile."
            />
          </AnimatedFade>
          <AnimatedFade delay={300}>
            <StepCard
              number="3"
              icon={<Share2 className="h-6 w-6" />}
              title="Manage Consent & Share"
              description="Control permissions and share your health profile with trusted healthcare providers."
            />
          </AnimatedFade>
          <AnimatedFade delay={400}>
            <StepCard
              number="4"
              icon={<BarChartBig className="h-6 w-6" />}
              title="Receive Insights"
              description="Get personalized health insights and timely reminders for checkups and preventive care."
            />
          </AnimatedFade>
        </div>
      </div>
    </section>
  )
}

interface StepCardProps {
  number: string
  icon: React.ReactNode
  title: string
  description: string
}

function StepCard({ number, icon, title, description }: StepCardProps) {
  return (
    <div className="futuristic-border glow-effect h-full">
      <div className="futuristic-card h-full p-6 flex flex-col items-center text-center group">
        <div className="bg-[#2ecc71] text-white rounded-full h-10 w-10 flex items-center justify-center text-lg font-bold mb-4 transition-transform duration-300 group-hover:scale-110">
          {number}
        </div>
        <div className="text-[#2ecc71] mb-4 transition-transform duration-300 group-hover:scale-110">{icon}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  )
}
