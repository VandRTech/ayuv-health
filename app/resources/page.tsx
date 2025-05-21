import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HealthResourcesSection } from "@/components/health-resources-section"
import { AnimatedFade } from "@/components/ui/animated-fade"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#0e1621]">
      <SiteHeader />
      <main>
        <section className="bg-[#0e1621] py-16 sm:py-24 tech-pattern">
          <div className="container px-4">
            <AnimatedFade>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 text-center">
                Health <span className="gradient-text">Resources</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
                Explore our collection of articles, guides, videos, and tools to help you on your health journey
              </p>
            </AnimatedFade>
          </div>
        </section>

        <HealthResourcesSection />
      </main>
      <SiteFooter />
    </div>
  )
}
