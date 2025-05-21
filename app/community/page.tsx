import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CommunityHealthSection } from "@/components/community-health-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AnimatedFade } from "@/components/ui/animated-fade"
import { Button } from "@/components/ui/button"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-[#0e1621]">
      <SiteHeader />
      <main>
        <section className="bg-[#0e1621] py-16 sm:py-24 tech-pattern">
          <div className="container px-4">
            <AnimatedFade>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 text-center">
                Our <span className="gradient-text">Community</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
                Join a thriving community of health-conscious individuals and healthcare professionals
              </p>
            </AnimatedFade>
          </div>
        </section>

        <TestimonialsSection />
        <CommunityHealthSection />

        <section className="bg-[#0e1621] py-16 lg:py-24 tech-pattern">
          <div className="container px-4">
            <AnimatedFade>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Join Our <span className="gradient-text">Community</span>
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Connect with others, share experiences, and learn from healthcare professionals in our growing
                  community.
                </p>
                <Button className="futuristic-button">
                  <span>Join Community</span>
                </Button>
              </div>
            </AnimatedFade>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
