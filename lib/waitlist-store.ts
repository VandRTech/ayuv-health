// Simple in-memory store for waitlist entries when Supabase is unavailable
// This is a temporary solution until Supabase is properly configured

type WaitlistEntry = {
  id: number
  name: string
  email: string
  phone?: string
  interests?: string
  created_at: string
  status: "pending" | "contacted" | "approved"
}

// In-memory storage (will reset on server restart)
const waitlistEntries: WaitlistEntry[] = []
let lastId = 0

// Flag to completely disable Supabase operations
// Set this to true to force using the in-memory store
export const DISABLE_SUPABASE = true

export function addToWaitlist(entry: Omit<WaitlistEntry, "id" | "created_at" | "status">): WaitlistEntry {
  const newEntry: WaitlistEntry = {
    id: ++lastId,
    ...entry,
    created_at: new Date().toISOString(),
    status: "pending",
  }

  waitlistEntries.push(newEntry)
  console.log(`Added to in-memory waitlist: ${entry.email}`)
  return newEntry
}

export function getWaitlistEntryByEmail(email: string): WaitlistEntry | undefined {
  return waitlistEntries.find((entry) => entry.email.toLowerCase() === email.toLowerCase())
}

export function getWaitlistCount(): number {
  // Return actual count plus a random number to simulate growth
  return waitlistEntries.length + 42
}

// Initialize with some sample data
if (waitlistEntries.length === 0) {
  addToWaitlist({ name: "John Doe", email: "john@example.com", interests: "Health records" })
  addToWaitlist({ name: "Jane Smith", email: "jane@example.com", phone: "+1234567890" })
  addToWaitlist({ name: "Raj Patel", email: "raj@example.com", interests: "Wearable integration" })
}
