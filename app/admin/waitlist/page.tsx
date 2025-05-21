"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

type WaitlistEntry = {
  id: number
  name: string
  email: string
  interests?: string
  created_at: string
  status: string
}

export default function WaitlistAdminPage() {
  const [entries, setEntries] = useState<WaitlistEntry[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchWaitlist() {
      try {
        const response = await fetch("/api/waitlist")

        if (!response.ok) {
          throw new Error(`Failed to fetch waitlist: ${response.status}`)
        }

        const data = await response.json()
        setEntries(data.entries || [])
      } catch (err) {
        console.error("Error fetching waitlist:", err)
        setError("Failed to load waitlist data. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchWaitlist()
  }, [])

  return (
    <div className="min-h-screen bg-[#0e1621]">
      <SiteHeader />
      <main className="container py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Waitlist Management</h1>

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 text-[#2ecc71] animate-spin" />
            <span className="ml-3 text-white">Loading waitlist data...</span>
          </div>
        ) : error ? (
          <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 text-red-300">{error}</div>
        ) : entries.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <p>No waitlist entries found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <div className="futuristic-border glow-effect">
              <div className="futuristic-card p-4">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Name</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Email</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Interests</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Date</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {entries.map((entry) => (
                      <tr key={entry.id} className="border-b border-gray-800 hover:bg-gray-800/30">
                        <td className="py-3 px-4 text-white">{entry.name}</td>
                        <td className="py-3 px-4 text-white">{entry.email}</td>
                        <td className="py-3 px-4 text-gray-300">{entry.interests || "-"}</td>
                        <td className="py-3 px-4 text-gray-300">{new Date(entry.created_at).toLocaleDateString()}</td>
                        <td className="py-3 px-4">
                          <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-900/30 text-green-400">
                            {entry.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm mb-4">
                This is a demo admin panel using in-memory storage. In a production environment, you would connect this
                to your Supabase database.
              </p>
              <Button className="futuristic-button">
                <span>Export Waitlist Data</span>
              </Button>
            </div>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  )
}
