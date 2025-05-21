import { AnimatedFade } from "@/components/ui/animated-fade"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"

type HealthEvent = {
  id: number
  title: string
  type: string
  date: string
  location: string
  participants: number
  registrationUrl: string
}

const upcomingEvents: HealthEvent[] = [
  {
    id: 1,
    title: "Free Diabetes Screening Camp",
    type: "Screening",
    date: "June 15, 2023",
    location: "Community Center, Hyderabad",
    participants: 120,
    registrationUrl: "/events/diabetes-screening",
  },
  {
    id: 2,
    title: "Mental Health Awareness Workshop",
    type: "Workshop",
    date: "June 22, 2023",
    location: "AYUV Health Center, Hyderabad",
    participants: 75,
    registrationUrl: "/events/mental-health-workshop",
  },
  {
    id: 3,
    title: "Women's Health Seminar",
    type: "Seminar",
    date: "July 5, 2023",
    location: "Virtual Event",
    participants: 200,
    registrationUrl: "/events/womens-health",
  },
]

export function CommunityHealthSection() {
  return (
    <section className="bg-[#0e1621] py-16 lg:py-24 tech-pattern">
      <div className="container px-4">
        <AnimatedFade>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Community <span className="gradient-text">Health</span> Initiatives
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center mb-12">
            Join our health programs and events designed to promote wellness in your community
          </p>
        </AnimatedFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatedFade direction="left" delay={100}>
            <div className="futuristic-border glow-effect h-full">
              <div className="futuristic-card p-6 h-full">
                <h3 className="text-xl font-semibold text-white mb-6">Upcoming Health Events</h3>
                <div className="space-y-6">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="border-b border-gray-700 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-start gap-4">
                        <div className="bg-[#2ecc71]/20 p-3 rounded-lg flex-shrink-0">
                          <Calendar className="h-5 w-5 text-[#2ecc71]" />
                        </div>
                        <div>
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-900/30 text-blue-400">
                            {event.type}
                          </span>
                          <h4 className="text-white font-medium mt-2">{event.title}</h4>
                          <div className="flex items-center text-gray-400 text-sm mt-2">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-gray-400 text-sm mt-1">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center text-gray-400 text-sm mt-1">
                            <Users className="h-4 w-4 mr-2" />
                            <span>{event.participants} participants</span>
                          </div>
                          <div className="mt-3">
                            <Link href={event.registrationUrl} className="text-sm text-[#2ecc71] hover:underline">
                              Register Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="border-[#2ecc71] text-[#2ecc71] hover:bg-[#2ecc71]/10">
                    <span>View All Events</span>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedFade>

          <AnimatedFade direction="right" delay={200}>
            <div className="futuristic-border glow-effect h-full">
              <div className="futuristic-card p-6 h-full">
                <h3 className="text-xl font-semibold text-white mb-6">Health Impact</h3>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-[#131f2e] p-4 rounded-lg border border-gray-800">
                    <div className="text-3xl font-bold text-[#2ecc71] mb-2">5,000+</div>
                    <div className="text-sm text-gray-300">Health screenings conducted</div>
                  </div>
                  <div className="bg-[#131f2e] p-4 rounded-lg border border-gray-800">
                    <div className="text-3xl font-bold text-[#2ecc71] mb-2">12,000+</div>
                    <div className="text-sm text-gray-300">Patients served</div>
                  </div>
                  <div className="bg-[#131f2e] p-4 rounded-lg border border-gray-800">
                    <div className="text-3xl font-bold text-[#2ecc71] mb-2">25+</div>
                    <div className="text-sm text-gray-300">Community events</div>
                  </div>
                  <div className="bg-[#131f2e] p-4 rounded-lg border border-gray-800">
                    <div className="text-3xl font-bold text-[#2ecc71] mb-2">98%</div>
                    <div className="text-sm text-gray-300">Patient satisfaction</div>
                  </div>
                </div>

                <h4 className="text-lg font-medium text-white mb-4">Get Involved</h4>
                <p className="text-gray-300 text-sm mb-6">
                  Join our community health initiatives as a volunteer, sponsor, or participant. Together, we can create
                  a healthier future for everyone.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="futuristic-button flex-1">
                    <span>Volunteer</span>
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 flex-1">
                    <span>Partner With Us</span>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedFade>
        </div>
      </div>
    </section>
  )
}
