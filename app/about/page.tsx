import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedFade } from "@/components/ui/animated-fade"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0e1621]">
      <SiteHeader />
      <main>
        <section className="bg-[#0e1621] py-16 sm:py-24 tech-pattern">
          <div className="container px-4">
            <AnimatedFade>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 text-center">
                About <span className="gradient-text">AYUV</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
                Reimagining India's Healthcare Journey
              </p>
            </AnimatedFade>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <AnimatedFade direction="left">
                <div className="futuristic-border glow-effect">
                  <div className="futuristic-card p-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
                    <p className="text-gray-300 mb-6">
                      AYUV is dedicated to revolutionizing healthcare accessibility and management in India by building
                      a secure, patient-centric platform. We aim to empower every individual with comprehensive control
                      over their health data, fostering proactive wellness and simplifying their healthcare journey
                      through innovative technology.
                    </p>
                    <div className="section-divider"></div>
                    <h2 className="text-2xl font-semibold text-white mb-4 mt-6">Our Vision</h2>
                    <p className="text-gray-300">
                      We envision a future where every Indian citizen has seamless access to their complete health
                      information, enabling better healthcare decisions and outcomes. By leveraging blockchain
                      technology and integrating with India's digital health ecosystem, we're building a platform that
                      puts patients at the center of their healthcare journey.
                    </p>
                  </div>
                </div>
              </AnimatedFade>
              <AnimatedFade direction="right" delay={200}>
                <div className="futuristic-border glow-effect">
                  <div className="futuristic-card p-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Why AYUV?</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-green-900 rounded-full p-1 mr-3 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-[#2ecc71]"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-300">
                            <span className="font-semibold text-white">Fragmented Healthcare Records:</span> Medical
                            information is scattered across providers, making it difficult for patients to access their
                            complete health history.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-900 rounded-full p-1 mr-3 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-[#2ecc71]"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-300">
                            <span className="font-semibold text-white">Data Security Concerns:</span> Traditional health
                            record systems often lack robust security measures to protect sensitive patient information.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-900 rounded-full p-1 mr-3 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-[#2ecc71]"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-300">
                            <span className="font-semibold text-white">Limited Patient Control:</span> Patients often
                            have little say in who can access their health data and how it's used.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedFade>
            </div>

            <AnimatedFade delay={300}>
              <div className="mt-20 max-w-3xl mx-auto">
                <div className="futuristic-border glow-effect">
                  <div className="futuristic-card p-8">
                    <h2 className="text-2xl font-semibold text-white mb-6 text-center">Our Commitment</h2>
                    <p className="text-gray-300 mb-4">
                      AYUV is built on a foundation of healthcare excellence, with access to established networks of
                      healthcare providers and a proven track record in handling sensitive medical data securely and
                      responsibly.
                    </p>
                    <p className="text-gray-300">
                      We are committed to maintaining the highest standards of data security, user privacy, and service
                      quality as we work to transform healthcare management in India.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedFade>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
