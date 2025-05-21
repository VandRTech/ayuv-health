import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PatientPortalPreview } from "@/components/patient-portal-preview"
import { AnimatedFade } from "@/components/ui/animated-fade"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, FileText, Lock, Shield, Smartphone } from "lucide-react"
import Link from "next/link"

export default function PatientPortalPage() {
  return (
    <div className="min-h-screen bg-[#0e1621]">
      <SiteHeader />
      <main>
        <section className="bg-[#0e1621] py-16 sm:py-24 tech-pattern">
          <div className="container px-4">
            <AnimatedFade>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 text-center">
                AYUV <span className="gradient-text">Patient Portal</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
                Your secure gateway to managing your complete health journey - access records, schedule appointments,
                and communicate with your healthcare team
              </p>
            </AnimatedFade>
          </div>
        </section>

        <PatientPortalPreview />

        <section className="bg-[#0e1621] py-16 lg:py-24 tech-pattern">
          <div className="container px-4">
            <AnimatedFade>
              <h2 className="text-3xl font-bold text-white mb-12 text-center">
                Getting <span className="gradient-text">Started</span>
              </h2>
            </AnimatedFade>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <AnimatedFade delay={100}>
                <div className="futuristic-border glow-effect h-full">
                  <Card className="futuristic-card h-full p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-[#2ecc71]/20 p-4 rounded-full mb-4">
                        <FileText className="h-8 w-8 text-[#2ecc71]" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">1. Register</h3>
                      <p className="text-gray-400 mb-4">
                        Create your AYUV account by linking your Ayushman Bharat Health Account (ABHA) ID. If you don't
                        have an ABHA ID, we can help you create one.
                      </p>
                      <Link href="/register" className="text-[#2ecc71] text-sm hover:underline">
                        Create Account
                      </Link>
                    </div>
                  </Card>
                </div>
              </AnimatedFade>

              <AnimatedFade delay={200}>
                <div className="futuristic-border glow-effect h-full">
                  <Card className="futuristic-card h-full p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-[#2ecc71]/20 p-4 rounded-full mb-4">
                        <Shield className="h-8 w-8 text-[#2ecc71]" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">2. Verify Identity</h3>
                      <p className="text-gray-400 mb-4">
                        Complete our secure verification process to ensure your health data remains protected. We use
                        Aadhaar-based verification for maximum security.
                      </p>
                      <Link href="/verification" className="text-[#2ecc71] text-sm hover:underline">
                        Verification Guide
                      </Link>
                    </div>
                  </Card>
                </div>
              </AnimatedFade>

              <AnimatedFade delay={300}>
                <div className="futuristic-border glow-effect h-full">
                  <Card className="futuristic-card h-full p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-[#2ecc71]/20 p-4 rounded-full mb-4">
                        <Smartphone className="h-8 w-8 text-[#2ecc71]" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">3. Access Portal</h3>
                      <p className="text-gray-400 mb-4">
                        Log in to your secure portal from any device. Set up biometric authentication for quick and
                        secure access to your health information.
                      </p>
                      <Link href="/login" className="text-[#2ecc71] text-sm hover:underline">
                        Portal Login
                      </Link>
                    </div>
                  </Card>
                </div>
              </AnimatedFade>
            </div>
          </div>
        </section>

        <section className="bg-[#0e1621] py-16 lg:py-24 tech-pattern">
          <div className="container px-4">
            <AnimatedFade>
              <div className="max-w-4xl mx-auto">
                <div className="futuristic-border glow-effect">
                  <div className="futuristic-card p-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="md:w-1/3 flex justify-center">
                        <div className="bg-[#2ecc71]/10 p-6 rounded-full">
                          <Lock className="h-16 w-16 text-[#2ecc71]" />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-2xl font-semibold text-white mb-4">Your Data, Your Control</h3>
                        <p className="text-gray-300 mb-6">
                          At AYUV, we believe your health data belongs to you. Our patient portal gives you complete
                          control over who can access your information and for what purpose.
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[#2ecc71] mr-3 mt-0.5" />
                            <span className="text-gray-300">End-to-end encryption for all health data</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[#2ecc71] mr-3 mt-0.5" />
                            <span className="text-gray-300">Blockchain-based consent management system</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[#2ecc71] mr-3 mt-0.5" />
                            <span className="text-gray-300">Detailed access logs for complete transparency</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[#2ecc71] mr-3 mt-0.5" />
                            <span className="text-gray-300">Time-limited access controls for healthcare providers</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedFade>

            <AnimatedFade delay={200}>
              <div className="text-center mt-12">
                <Button className="futuristic-button">
                  <span>Get Started Now</span>
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
