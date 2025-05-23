import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  if (!isSupabaseConfigured()) {
    return NextResponse.json(
      { error: "Supabase is not configured. Please check server environment variables." },
      { status: 503 }
    );
  }

  try {
    const { data, error } = await supabase
      .from('waitlist')
      .select('id, name, email, interests, created_at, status');

    if (error) {
      console.error("Error fetching waitlist from Supabase:", error);
      return NextResponse.json(
        { error: "Failed to fetch waitlist data from Supabase." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      count: data?.length || 0,
      entries: data,
    });
  } catch (error) {
    console.error("Unexpected error in GET /api/waitlist:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  if (!isSupabaseConfigured()) {
    return NextResponse.json(
      { error: "Supabase is not configured. Please check server environment variables." },
      { status: 503 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { name, email, phone, interests } = body;

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }

  try {
    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ name, email, phone, interests }])
      .select('id, name, email, phone, interests, created_at, status') // Select the inserted row
      .single(); // Expect a single row back

    if (error) {
      console.error("Error inserting into Supabase waitlist:", error);
      if (error.code === '23505') { // Unique constraint violation (likely email)
        return NextResponse.json(
          { error: "Email already exists in the waitlist." },
          { status: 409 } // Conflict
        );
      }
      return NextResponse.json(
        { error: "Failed to add to waitlist in Supabase." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Successfully added to waitlist.", entry: data },
      { status: 201 } // Created
    );
  } catch (error) {
    console.error("Unexpected error in POST /api/waitlist:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
