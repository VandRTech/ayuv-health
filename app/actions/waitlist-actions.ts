"use server"

import * as waitlist from "@/lib/in-memory-waitlist"

type WaitlistFormData = {
  name: string
  email: string
  phone: string
  interests: string
}

export async function submitWaitlistForm(data: WaitlistFormData) {
  // Validate the data
  if (!data.name || !data.name.trim()) {
    throw new Error("Name is required")
  }

  if (!data.email || !data.email.trim() || !data.email.includes("@")) {
    throw new Error("Valid email is required")
  }

  try {
    console.log("Processing waitlist submission for:", data.email)

    // Check if email already exists
    if (waitlist.emailExists(data.email)) {
      console.log("Email already exists in waitlist:", data.email)
      return { success: true, message: "You're already on our waitlist!" }
    }

    // Add to waitlist
    waitlist.addEntry({
      name: data.name.trim(),
      email: data.email.toLowerCase().trim(),
      phone: data.phone ? data.phone.trim() : undefined,
      interests: data.interests ? data.interests.trim() : undefined,
    })

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true, message: "Successfully added to waitlist!" }
  } catch (error) {
    console.error("Waitlist submission error:", error)
    throw new Error("There was an error processing your request. Please try again.")
  }
}

export async function getWaitlistCount() {
  try {
    return waitlist.getCount()
  } catch (error) {
    console.error("Error getting waitlist count:", error)
    return 42 // Fallback count
  }
}
