export async function GET() {
  // Only check if variables exist, don't expose actual values
  const envStatus = {
    server: {
      SUPABASE_URL: !!process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: !!process.env.SUPABASE_ANON_KEY,
    },
    client: {
      NEXT_PUBLIC_SUPABASE_URL: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    },
  }

  // Log to server console for debugging
  console.log("Environment variable status:", envStatus)

  return Response.json(envStatus)
}
