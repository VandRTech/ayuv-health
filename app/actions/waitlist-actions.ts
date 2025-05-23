"use server"

import { supabase, isSupabaseConfigured } from '@/lib/supabase';

type WaitlistFormData = {
  name: string
  email: string
  phone?: string // Made phone optional to match usage
  interests?: string // Made interests optional
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
    console.log("Processing waitlist submission for:", data.email, "via API");

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const response = await fetch(`${appUrl}/api/waitlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name.trim(),
        email: data.email.toLowerCase().trim(),
        phone: data.phone ? data.phone.trim() : undefined,
        interests: data.interests ? data.interests.trim() : undefined,
      }),
    });

    if (response.status === 409) { // Conflict - email already exists
      // The API returns: { error: "Email already exists in the waitlist." }
      // The original function returned: { success: true, message: "You're already on our waitlist!" }
      // Matching the original behavior for the frontend component.
      return { success: true, message: "You're already on our waitlist!" };
    }

    if (!response.ok) {
      const errorBody = await response.text(); // Get more details if possible
      console.error("API submission error:", response.status, errorBody);
      // Try to parse the error if it's JSON
      try {
        const jsonError = JSON.parse(errorBody);
        if (jsonError && jsonError.error) {
          throw new Error(jsonError.error);
        }
      } catch (e) {
        // Not JSON or no specific error message, throw generic
      }
      throw new Error(`There was an error processing your request via API. Status: ${response.status}`);
    }
    
    // Assuming the API returns { message: "Successfully added to waitlist.", entry: ... } on 201
    // The original function returned: { success: true, message: "Successfully added to waitlist!" }
    // Matching the original behavior.
    return { success: true, message: "Successfully added to waitlist!" };

  } catch (error) {
    console.error("Waitlist submission error:", error);
    if (error instanceof Error) {
        throw error; // Re-throw the original error if it's already an Error instance
    }
    throw new Error("There was an error processing your request. Please try again.");
  }
}

export async function getWaitlistCount(): Promise<number> {
  if (!isSupabaseConfigured()) {
    console.error("Supabase is not configured. Cannot fetch waitlist count.");
    return 0; // Fallback count
  }

  try {
    const { count, error } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.error("Error getting waitlist count from Supabase:", error);
      return 0; // Fallback count on error
    }

    return count === null ? 0 : count;
  } catch (error) {
    console.error("Unexpected error getting waitlist count:", error);
    return 0; // Fallback count
  }
}
