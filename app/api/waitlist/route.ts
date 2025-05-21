import * as waitlist from "@/lib/in-memory-waitlist"

export async function GET() {
  try {
    const entries = waitlist.getAllEntries()

    // Return only safe fields (no phone numbers)
    const safeEntries = entries.map((entry) => ({
      id: entry.id,
      name: entry.name,
      email: entry.email,
      interests: entry.interests,
      created_at: entry.created_at,
      status: entry.status,
    }))

    return Response.json({
      count: entries.length,
      entries: safeEntries,
    })
  } catch (error) {
    console.error("Error fetching waitlist:", error)
    return Response.json({ error: "Failed to fetch waitlist data" }, { status: 500 })
  }
}
