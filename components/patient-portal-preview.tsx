"use client"

import type React from "react"

import { useState } from "react"
import { AnimatedFade } from "@/components/ui/animated-fade"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Calendar,
  MessageSquare,
  Pill,
  BarChart,
  Shield,
  Play,
  ChevronRight,
  Lock,
  MapPin,
  Send,
} from "lucide-react"
import Link from "next/link"

export function PatientPortalPreview() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <section className="bg-[#0e1621] py-16 lg:py-24 tech-pattern">
      <div className="container px-4">
        <AnimatedFade>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Your Health, <span className="gradient-text">Your Control</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center mb-12">
            Experience the AYUV Patient Portal - your secure gateway to managing your complete health journey
          </p>
        </AnimatedFade>

        <div className="max-w-6xl mx-auto">
          <AnimatedFade delay={200}>
            <div className="futuristic-border glow-effect">
              <div className="futuristic-card p-6">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Portal Features */}
                  <div className="lg:w-1/3">
                    <h3 className="text-xl font-semibold text-white mb-6">Portal Features</h3>
                    <div className="space-y-4">
                      <FeatureItem
                        icon={<FileText className="h-5 w-5" />}
                        title="Medical Records"
                        description="Access your complete health history, lab results, and doctor notes in one place"
                        isActive={activeTab === "records"}
                        onClick={() => setActiveTab("records")}
                      />
                      <FeatureItem
                        icon={<Calendar className="h-5 w-5" />}
                        title="Appointments"
                        description="Schedule, reschedule, or cancel appointments with your healthcare providers"
                        isActive={activeTab === "appointments"}
                        onClick={() => setActiveTab("appointments")}
                      />
                      <FeatureItem
                        icon={<MessageSquare className="h-5 w-5" />}
                        title="Secure Messaging"
                        description="Communicate directly with your healthcare team through encrypted messaging"
                        isActive={activeTab === "messages"}
                        onClick={() => setActiveTab("messages")}
                      />
                      <FeatureItem
                        icon={<Pill className="h-5 w-5" />}
                        title="Prescriptions"
                        description="Request refills, view medication history, and set reminders"
                        isActive={activeTab === "prescriptions"}
                        onClick={() => setActiveTab("prescriptions")}
                      />
                      <FeatureItem
                        icon={<BarChart className="h-5 w-5" />}
                        title="Health Dashboard"
                        description="Track your vitals, health metrics, and progress toward your wellness goals"
                        isActive={activeTab === "dashboard"}
                        onClick={() => setActiveTab("dashboard")}
                      />
                    </div>

                    <div className="mt-8">
                      <Button className="futuristic-button w-full">
                        <span>Access Patient Portal</span>
                      </Button>
                      <p className="text-gray-400 text-xs mt-2 text-center">
                        New users can register with their ABHA ID
                      </p>
                    </div>
                  </div>

                  {/* Portal Preview */}
                  <div className="lg:w-2/3 relative">
                    <div className="absolute -top-4 -left-4 -right-4 h-12 bg-[#0a111a] rounded-t-lg border-b border-gray-800 flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 text-center text-sm text-gray-400">AYUV Patient Portal</div>
                      <div className="flex items-center text-gray-500">
                        <Lock className="h-4 w-4 mr-1" />
                        <span className="text-xs">Secure</span>
                      </div>
                    </div>

                    <div className="bg-[#0a111a] rounded-lg border border-gray-800 p-4 mt-8">
                      <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <TabsList className="grid grid-cols-5 mb-6 bg-[#131f2e] border border-gray-800">
                          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                          <TabsTrigger value="records">Records</TabsTrigger>
                          <TabsTrigger value="appointments">Appointments</TabsTrigger>
                          <TabsTrigger value="messages">Messages</TabsTrigger>
                          <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
                        </TabsList>

                        <TabsContent value="dashboard" className="mt-0">
                          <PortalDashboard />
                        </TabsContent>

                        <TabsContent value="records" className="mt-0">
                          <PortalRecords />
                        </TabsContent>

                        <TabsContent value="appointments" className="mt-0">
                          <PortalAppointments />
                        </TabsContent>

                        <TabsContent value="messages" className="mt-0">
                          <PortalMessages />
                        </TabsContent>

                        <TabsContent value="prescriptions" className="mt-0">
                          <PortalPrescriptions />
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedFade>

          <AnimatedFade delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="futuristic-border glow-effect">
                <div className="futuristic-card p-6 h-full">
                  <div className="flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-[#2ecc71]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white text-center mb-2">Bank-Level Security</h3>
                  <p className="text-gray-400 text-sm text-center">
                    Your health data is protected with end-to-end encryption and blockchain-based access controls.
                  </p>
                </div>
              </div>

              <div className="futuristic-border glow-effect">
                <div className="futuristic-card p-6 h-full">
                  <div className="flex items-center justify-center mb-4">
                    <Play className="h-8 w-8 text-[#2ecc71]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white text-center mb-2">Interactive Demo</h3>
                  <p className="text-gray-400 text-sm text-center mb-4">
                    Watch our guided tour of the patient portal features and functionality.
                  </p>
                  <div className="text-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#2ecc71] text-[#2ecc71] hover:bg-[#2ecc71]/10"
                    >
                      <span>Watch Demo</span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="futuristic-border glow-effect">
                <div className="futuristic-card p-6 h-full">
                  <div className="flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-[#2ecc71]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white text-center mb-2">Getting Started</h3>
                  <p className="text-gray-400 text-sm text-center mb-4">
                    Learn how to register, link your ABHA ID, and set up your health profile.
                  </p>
                  <div className="text-center">
                    <Link
                      href="/help/portal-guide"
                      className="text-[#2ecc71] text-sm hover:underline inline-flex items-center"
                    >
                      View Guide <ChevronRight className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedFade>
        </div>
      </div>
    </section>
  )
}

interface FeatureItemProps {
  icon: React.ReactNode
  title: string
  description: string
  isActive: boolean
  onClick: () => void
}

function FeatureItem({ icon, title, description, isActive, onClick }: FeatureItemProps) {
  return (
    <div
      className={`p-4 rounded-lg cursor-pointer transition-colors ${
        isActive ? "bg-[#2ecc71]/20 border border-[#2ecc71]/30" : "hover:bg-[#131f2e] border border-transparent"
      }`}
      onClick={onClick}
    >
      <div className="flex items-start">
        <div className={`mr-3 ${isActive ? "text-[#2ecc71]" : "text-gray-400"}`}>{icon}</div>
        <div>
          <h4 className={`font-medium mb-1 ${isActive ? "text-[#2ecc71]" : "text-white"}`}>{title}</h4>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

function PortalDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Health Dashboard</h3>
        <span className="text-xs text-gray-400">Last updated: Today, 10:45 AM</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#131f2e] p-4 rounded-lg border border-gray-800">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm text-gray-400">Heart Rate</span>
            <span className="text-xs bg-green-900/30 text-green-400 px-2 py-0.5 rounded-full">Normal</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">
            72 <span className="text-sm font-normal">bpm</span>
          </div>
          <div className="h-10 bg-[#0a111a] rounded-md overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-to-r from-green-500 to-green-600 relative">
              <div className="absolute inset-0 flex items-center justify-end pr-2">
                <div className="h-6 w-[1px] bg-white/30"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#131f2e] p-4 rounded-lg border border-gray-800">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm text-gray-400">Blood Pressure</span>
            <span className="text-xs bg-green-900/30 text-green-400 px-2 py-0.5 rounded-full">Normal</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">
            120/80 <span className="text-sm font-normal">mmHg</span>
          </div>
          <div className="h-10 bg-[#0a111a] rounded-md overflow-hidden">
            <div className="h-full w-2/3 bg-gradient-to-r from-green-500 to-green-600 relative">
              <div className="absolute inset-0 flex items-center justify-end pr-2">
                <div className="h-6 w-[1px] bg-white/30"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#131f2e] p-4 rounded-lg border border-gray-800">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm text-gray-400">Blood Glucose</span>
            <span className="text-xs bg-yellow-900/30 text-yellow-400 px-2 py-0.5 rounded-full">Monitor</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">
            110 <span className="text-sm font-normal">mg/dL</span>
          </div>
          <div className="h-10 bg-[#0a111a] rounded-md overflow-hidden">
            <div className="h-full w-1/2 bg-gradient-to-r from-yellow-500 to-yellow-600 relative">
              <div className="absolute inset-0 flex items-center justify-end pr-2">
                <div className="h-6 w-[1px] bg-white/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#131f2e] p-4 rounded-lg border border-gray-800">
        <h4 className="text-white font-medium mb-4">Upcoming Appointments</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-gray-800">
            <div>
              <p className="text-white">Dr. Sharma - Cardiology</p>
              <p className="text-sm text-gray-400">Annual checkup</p>
            </div>
            <div className="text-right">
              <p className="text-[#2ecc71]">June 15, 2023</p>
              <p className="text-sm text-gray-400">10:30 AM</p>
            </div>
          </div>
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="text-white">Dr. Patel - General Medicine</p>
              <p className="text-sm text-gray-400">Follow-up consultation</p>
            </div>
            <div className="text-right">
              <p className="text-[#2ecc71]">June 28, 2023</p>
              <p className="text-sm text-gray-400">2:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#131f2e] p-4 rounded-lg border border-gray-800">
          <h4 className="text-white font-medium mb-4">Medication Reminders</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-[#2ecc71] mr-3"></div>
                <span className="text-white">Atorvastatin 10mg</span>
              </div>
              <span className="text-sm text-gray-400">8:00 PM</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-blue-500 mr-3"></div>
                <span className="text-white">Metformin 500mg</span>
              </div>
              <span className="text-sm text-gray-400">After dinner</span>
            </div>
          </div>
        </div>

        <div className="bg-[#131f2e] p-4 rounded-lg border border-gray-800">
          <h4 className="text-white font-medium mb-4">Recent Activity</h4>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="h-2 w-2 rounded-full bg-[#2ecc71] mt-2 mr-3"></div>
              <div>
                <p className="text-white text-sm">Lab results uploaded</p>
                <p className="text-xs text-gray-400">Yesterday, 3:45 PM</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-2 w-2 rounded-full bg-[#2ecc71] mt-2 mr-3"></div>
              <div>
                <p className="text-white text-sm">Prescription renewed</p>
                <p className="text-xs text-gray-400">June 10, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PortalRecords() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Medical Records</h3>
        <Button variant="outline" size="sm" className="border-[#2ecc71] text-[#2ecc71] hover:bg-[#2ecc71]/10">
          <span>Upload New</span>
        </Button>
      </div>

      <div className="bg-[#131f2e] rounded-lg border border-gray-800 overflow-hidden">
        <div className="grid grid-cols-12 bg-[#0a111a] p-3 border-b border-gray-800 text-xs font-medium text-gray-400">
          <div className="col-span-5">Document</div>
          <div className="col-span-3">Provider</div>
          <div className="col-span-2">Date</div>
          <div className="col-span-2">Actions</div>
        </div>

        <div className="divide-y divide-gray-800">
          <div className="grid grid-cols-12 p-3 items-center hover:bg-[#0a111a]/50">
            <div className="col-span-5 flex items-center">
              <FileText className="h-4 w-4 text-blue-400 mr-2" />
              <span className="text-white text-sm">Annual Physical Examination</span>
            </div>
            <div className="col-span-3 text-gray-300 text-sm">Dr. Sharma</div>
            <div className="col-span-2 text-gray-400 text-sm">May 15, 2023</div>
            <div className="col-span-2 flex space-x-2">
              <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-12 p-3 items-center hover:bg-[#0a111a]/50">
            <div className="col-span-5 flex items-center">
              <FileText className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-white text-sm">Blood Test Results</span>
            </div>
            <div className="col-span-3 text-gray-300 text-sm">City Hospital Lab</div>
            <div className="col-span-2 text-gray-400 text-sm">May 10, 2023</div>
            <div className="col-span-2 flex space-x-2">
              <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-12 p-3 items-center hover:bg-[#0a111a]/50">
            <div className="col-span-5 flex items-center">
              <FileText className="h-4 w-4 text-purple-400 mr-2" />
              <span className="text-white text-sm">Vaccination Record</span>
            </div>
            <div className="col-span-3 text-gray-300 text-sm">Community Clinic</div>
            <div className="col-span-2 text-gray-400 text-sm">Apr 22, 2023</div>
            <div className="col-span-2 flex space-x-2">
              <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-12 p-3 items-center hover:bg-[#0a111a]/50">
            <div className="col-span-5 flex items-center">
              <FileText className="h-4 w-4 text-orange-400 mr-2" />
              <span className="text-white text-sm">Cardiology Consultation</span>
            </div>
            <div className="col-span-3 text-gray-300 text-sm">Dr. Patel</div>
            <div className="col-span-2 text-gray-400 text-sm">Mar 15, 2023</div>
            <div className="col-span-2 flex space-x-2">
              <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-400">Showing 4 of 24 records</div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="border-gray-700 text-gray-400 hover:bg-gray-800">
            <span>Previous</span>
          </Button>
          <Button variant="outline" size="sm" className="border-gray-700 text-gray-400 hover:bg-gray-800">
            <span>Next</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

function PortalAppointments() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Appointments</h3>
        <Button className="futuristic-button">
          <span>Schedule New</span>
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
          <div key={i} className="text-center">
            <div className="text-gray-400 text-sm mb-1">{day}</div>
            <div
              className={`rounded-lg p-2 text-center ${i === 2 ? "bg-[#2ecc71]/20 border border-[#2ecc71]/30" : "bg-[#131f2e] border border-gray-800"}`}
            >
              <div className="text-lg font-medium text-white">{i + 12}</div>
              <div className="text-xs text-gray-400">June</div>
              {i === 2 && <div className="mt-1 h-1.5 w-1.5 bg-[#2ecc71] rounded-full mx-auto"></div>}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#131f2e] rounded-lg border border-gray-800 p-4">
        <h4 className="text-white font-medium mb-4">Upcoming Appointments</h4>
        <div className="space-y-4">
          <div className="border-l-2 border-[#2ecc71] pl-4 py-1">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white font-medium">Dr. Sharma - Cardiology</p>
                <p className="text-sm text-gray-400">Annual checkup</p>
                <div className="flex items-center mt-2">
                  <Calendar className="h-4 w-4 text-[#2ecc71] mr-2" />
                  <span className="text-sm text-gray-300">June 14, 2023 - 10:30 AM</span>
                </div>
                <div className="flex items-center mt-1">
                  <MapPin className="h-4 w-4 text-[#2ecc71] mr-2" />
                  <span className="text-sm text-gray-300">City Hospital, 3rd Floor</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="border-gray-700 text-gray-400 hover:bg-gray-800">
                  <span>Reschedule</span>
                </Button>
                <Button variant="outline" size="sm" className="border-red-800 text-red-400 hover:bg-red-900/20">
                  <span>Cancel</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="border-l-2 border-blue-500 pl-4 py-1">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white font-medium">Dr. Patel - General Medicine</p>
                <p className="text-sm text-gray-400">Follow-up consultation</p>
                <div className="flex items-center mt-2">
                  <Calendar className="h-4 w-4 text-blue-500 mr-2" />
                  <span className="text-sm text-gray-300">June 28, 2023 - 2:00 PM</span>
                </div>
                <div className="flex items-center mt-1">
                  <MapPin className="h-4 w-4 text-blue-500 mr-2" />
                  <span className="text-sm text-gray-300">Telemedicine (Video Call)</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="border-gray-700 text-gray-400 hover:bg-gray-800">
                  <span>Reschedule</span>
                </Button>
                <Button variant="outline" size="sm" className="border-red-800 text-red-400 hover:bg-red-900/20">
                  <span>Cancel</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#131f2e] rounded-lg border border-gray-800 p-4">
        <h4 className="text-white font-medium mb-4">Past Appointments</h4>
        <div className="space-y-4">
          <div className="border-l-2 border-gray-600 pl-4 py-1">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white font-medium">Dr. Mehta - Orthopedics</p>
                <p className="text-sm text-gray-400">Knee pain consultation</p>
                <div className="flex items-center mt-2">
                  <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-300">May 5, 2023 - 11:00 AM</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="border-[#2ecc71] text-[#2ecc71] hover:bg-[#2ecc71]/10">
                  <span>View Summary</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PortalMessages() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Secure Messages</h3>
        <Button className="futuristic-button">
          <span>New Message</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[400px]">
        <div className="bg-[#131f2e] rounded-lg border border-gray-800 overflow-hidden col-span-1">
          <div className="p-3 bg-[#0a111a] border-b border-gray-800">
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full bg-[#131f2e] border border-gray-700 rounded-md px-3 py-1.5 text-sm text-white"
            />
          </div>
          <div className="divide-y divide-gray-800 h-[calc(400px-48px)] overflow-y-auto">
            <div className="p-3 bg-[#2ecc71]/10 border-l-2 border-[#2ecc71] cursor-pointer">
              <div className="flex justify-between items-start">
                <p className="text-white font-medium">Dr. Sharma</p>
                <p className="text-xs text-gray-400">10:30 AM</p>
              </div>
              <p className="text-sm text-gray-300 truncate">Your test results look good. I'd like to discuss...</p>
            </div>
            <div className="p-3 hover:bg-[#0a111a]/50 cursor-pointer">
              <div className="flex justify-between items-start">
                <p className="text-white font-medium">Dr. Patel</p>
                <p className="text-xs text-gray-400">Yesterday</p>
              </div>
              <p className="text-sm text-gray-300 truncate">Please confirm your appointment for next week...</p>
            </div>
            <div className="p-3 hover:bg-[#0a111a]/50 cursor-pointer">
              <div className="flex justify-between items-start">
                <p className="text-white font-medium">Pharmacy</p>
                <p className="text-xs text-gray-400">Jun 10</p>
              </div>
              <p className="text-sm text-gray-300 truncate">Your prescription refill is ready for pickup...</p>
            </div>
          </div>
        </div>

        <div className="bg-[#131f2e] rounded-lg border border-gray-800 overflow-hidden col-span-2">
          <div className="p-3 bg-[#0a111a] border-b border-gray-800 flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white font-medium mr-3">
              DS
            </div>
            <div>
              <p className="text-white font-medium">Dr. Sharma</p>
              <p className="text-xs text-gray-400">Cardiology</p>
            </div>
          </div>
          <div className="p-4 h-[calc(400px-48px-64px)] overflow-y-auto space-y-4">
            <div className="flex justify-start">
              <div className="bg-[#0a111a] rounded-lg p-3 max-w-[80%]">
                <p className="text-white text-sm">
                  Hello! I've reviewed your recent test results and everything looks good. Your cholesterol levels have
                  improved since your last visit.
                </p>
                <p className="text-xs text-gray-400 mt-1">10:30 AM</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-[#0a111a] rounded-lg p-3 max-w-[80%]">
                <p className="text-white text-sm">
                  I'd like to discuss these results with you in more detail. Would you prefer to schedule a video call
                  or an in-person appointment?
                </p>
                <p className="text-xs text-gray-400 mt-1">10:31 AM</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-[#2ecc71] rounded-lg p-3 max-w-[80%]">
                <p className="text-white text-sm">
                  That's great news! I'd prefer a video call if possible. What times are available next week?
                </p>
                <p className="text-xs text-white/70 mt-1">10:45 AM</p>
              </div>
            </div>
          </div>
          <div className="p-3 bg-[#0a111a] border-t border-gray-800">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-[#131f2e] border border-gray-700 rounded-md px-3 py-1.5 text-sm text-white"
              />
              <Button className="futuristic-button">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PortalPrescriptions() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Prescriptions</h3>
        <Button className="futuristic-button">
          <span>Request Refill</span>
        </Button>
      </div>

      <div className="bg-[#131f2e] rounded-lg border border-gray-800 overflow-hidden">
        <div className="grid grid-cols-12 bg-[#0a111a] p-3 border-b border-gray-800 text-xs font-medium text-gray-400">
          <div className="col-span-4">Medication</div>
          <div className="col-span-2">Dosage</div>
          <div className="col-span-2">Frequency</div>
          <div className="col-span-2">Refills</div>
          <div className="col-span-2">Actions</div>
        </div>

        <div className="divide-y divide-gray-800">
          <div className="grid grid-cols-12 p-3 items-center hover:bg-[#0a111a]/50">
            <div className="col-span-4">
              <p className="text-white">Atorvastatin</p>
              <p className="text-xs text-gray-400">For cholesterol</p>
            </div>
            <div className="col-span-2 text-gray-300">10mg</div>
            <div className="col-span-2 text-gray-300">Once daily</div>
            <div className="col-span-2">
              <span className="bg-green-900/30 text-green-400 text-xs px-2 py-0.5 rounded-full">3 remaining</span>
            </div>
            <div className="col-span-2 flex space-x-2">
              <Button variant="outline" size="sm" className="border-[#2ecc71] text-[#2ecc71] hover:bg-[#2ecc71]/10">
                <span>Refill</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-12 p-3 items-center hover:bg-[#0a111a]/50">
            <div className="col-span-4">
              <p className="text-white">Metformin</p>
              <p className="text-xs text-gray-400">For blood sugar</p>
            </div>
            <div className="col-span-2 text-gray-300">500mg</div>
            <div className="col-span-2 text-gray-300">Twice daily</div>
            <div className="col-span-2">
              <span className="bg-yellow-900/30 text-yellow-400 text-xs px-2 py-0.5 rounded-full">1 remaining</span>
            </div>
            <div className="col-span-2 flex space-x-2">
              <Button variant="outline" size="sm" className="border-[#2ecc71] text-[#2ecc71] hover:bg-[#2ecc71]/10">
                <span>Refill</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-12 p-3 items-center hover:bg-[#0a111a]/50">
            <div className="col-span-4">
              <p className="text-white">Lisinopril</p>
              <p className="text-xs text-gray-400">For blood pressure</p>
            </div>
            <div className="col-span-2 text-gray-300">5mg</div>
            <div className="col-span-2 text-gray-300">Once daily</div>
            <div className="col-span-2">
              <span className="bg-red-900/30 text-red-400 text-xs px-2 py-0.5 rounded-full">No refills</span>
            </div>
            <div className="col-span-2 flex space-x-2">
              <Button variant="outline" size="sm" className="border-blue-700 text-blue-400 hover:bg-blue-900/20">
                <span>Contact Dr.</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#131f2e] rounded-lg border border-gray-800 p-4">
          <h4 className="text-white font-medium mb-4">Medication Schedule</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-[#2ecc71] mr-3"></div>
                <div>
                  <p className="text-white">Atorvastatin 10mg</p>
                  <p className="text-xs text-gray-400">Take with evening meal</p>
                </div>
              </div>
              <span className="text-sm text-gray-400">8:00 PM</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-blue-500 mr-3"></div>
                <div>
                  <p className="text-white">Metformin 500mg</p>
                  <p className="text-xs text-gray-400">Take with food</p>
                </div>
              </div>
              <span className="text-sm text-gray-400">8:00 AM / 8:00 PM</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-purple-500 mr-3"></div>
                <div>
                  <p className="text-white">Lisinopril 5mg</p>
                  <p className="text-xs text-gray-400">Take in the morning</p>
                </div>
              </div>
              <span className="text-sm text-gray-400">8:00 AM</span>
            </div>
          </div>
        </div>

        <div className="bg-[#131f2e] rounded-lg border border-gray-800 p-4">
          <h4 className="text-white font-medium mb-4">Pharmacy Information</h4>
          <div className="space-y-4">
            <div>
              <p className="text-white font-medium">City Pharmacy</p>
              <p className="text-sm text-gray-400">123 Main Street, Hyderabad</p>
              <p className="text-sm text-gray-400">Phone: +91 98765 43210</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">Hours: 8:00 AM - 10:00 PM</p>
              <Button variant="outline" size="sm" className="border-[#2ecc71] text-[#2ecc71] hover:bg-[#2ecc71]/10">
                <span>Change</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Download, Share2 } from "lucide-react"
