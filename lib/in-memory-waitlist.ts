/**
 * In-Memory Waitlist Storage
 *
 * This is a simple in-memory implementation of the waitlist functionality.
 * It's used as a fallback when Supabase is not properly configured or is experiencing issues.
 *
 * In a production environment, you would replace this with a proper database integration.
 */

export type WaitlistEntry = {
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

// Add a new entry to the waitlist
export function addEntry(entry: Omit<WaitlistEntry, "id" | "created_at" | "status">): WaitlistEntry {
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

// Check if an email already exists in the waitlist
export function emailExists(email: string): boolean {
  return waitlistEntries.some((entry) => entry.email.toLowerCase() === email.toLowerCase())
}

// Get the total count of waitlist entries
export function getCount(): number {
  // Return actual count plus a random number to simulate growth
  return waitlistEntries.length + 42
}

// Get all waitlist entries
export function getAllEntries(): WaitlistEntry[] {
  return [...waitlistEntries]
}

// Initialize with some sample data
if (waitlistEntries.length === 0) {
  addEntry({ name: "John Doe", email: "john@example.com", interests: "Health records" })
  addEntry({ name: "Jane Smith", email: "jane@example.com", phone: "+1234567890" })
  addEntry({ name: "Raj Patel", email: "raj@example.com", interests: "Wearable integration" })
}
