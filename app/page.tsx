import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { SignupSection } from "@/components/signup-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0e1621]">
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <SignupSection />
      </main>
      <SiteFooter />
    </div>
  )
}
