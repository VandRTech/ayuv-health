import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { AnimatedFade } from "@/components/ui/animated-fade"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#0e1621]">
      <SiteHeader />
      <main>
        <section className="bg-[#0e1621] py-16 sm:py-24 tech-pattern">
          <div className="container px-4">
            <AnimatedFade>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 text-center">
                How It <span className="gradient-text">Works</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
                Learn how AYUV simplifies your healthcare journey with a secure, user-friendly platform
              </p>
            </AnimatedFade>
          </div>
        </section>

        <HowItWorksSection />

        <section className="bg-[#0e1621] py-16 lg:py-24 tech-pattern">
          <div className="container px-4">
            <AnimatedFade>
              <h2 className="text-3xl font-bold text-white mb-12 text-center">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </AnimatedFade>

            <div className="max-w-3xl mx-auto">
              <AnimatedFade delay={100}>
                <div className="futuristic-border glow-effect">
                  <div className="futuristic-card p-6">
                    <Accordion type="single" collapsible className="text-white">
                      <AccordionItem value="item-1" className="border-gray-700">
                        <AccordionTrigger className="text-white hover:text-[#2ecc71]">
                          What is ABHA and why do I need to link it?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          ABHA (Ayushman Bharat Health Account) is a unique health ID provided by the Government of
                          India as part of the National Digital Health Mission. Linking your ABHA with AYUV allows us to
                          securely access and consolidate your health records from various healthcare providers who are
                          part of the digital health ecosystem.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2" className="border-gray-700">
                        <AccordionTrigger className="text-white hover:text-[#2ecc71]">
                          How does AYUV ensure the security of my health data?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          AYUV employs multiple layers of security, including end-to-end encryption, blockchain-based
                          consent management, and strict access controls. Your data is encrypted both in transit and at
                          rest, and you have complete control over who can access your information and for what purpose.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3" className="border-gray-700">
                        <AccordionTrigger className="text-white hover:text-[#2ecc71]">
                          Which wearable devices are compatible with AYUV?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          AYUV is designed to integrate with a wide range of popular wearable devices and fitness
                          trackers, including Apple Watch, Fitbit, Samsung Galaxy Watch, and more. We're continuously
                          expanding our compatibility to include more devices and health monitoring tools.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4" className="border-gray-700">
                        <AccordionTrigger className="text-white hover:text-[#2ecc71]">
                          Can I share my health records with doctors who don't use AYUV?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          Yes, AYUV allows you to generate shareable health reports that can be exported as PDFs or
                          shared via secure links with any healthcare provider, regardless of whether they use AYUV. You
                          control the duration of access and exactly what information is shared.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5" className="border-gray-700">
                        <AccordionTrigger className="text-white hover:text-[#2ecc71]">
                          Is AYUV available across all of India?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          Yes, AYUV is designed to work across all of India. Our platform integrates with the national
                          digital health infrastructure and is compatible with healthcare providers throughout the
                          country. We're continuously expanding our network to ensure comprehensive coverage and service
                          availability nationwide.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </AnimatedFade>

              <AnimatedFade delay={200}>
                <div className="mt-12 text-center">
                  <Button className="futuristic-button">
                    <span>Join Our Early Access</span>
                  </Button>
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
