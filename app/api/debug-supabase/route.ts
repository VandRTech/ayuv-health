import { supabase, isSupabaseConfigured } from "@/lib/supabase"

export async function GET() {
  // Check if Supabase is configured
  const isConfigured = isSupabaseConfigured()

  // Get environment variable status (without exposing actual values)
  const envStatus = {
    SUPABASE_URL: !!process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: !!process.env.SUPABASE_ANON_KEY,
    NEXT_PUBLIC_SUPABASE_URL: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  }

  // Test database connection
  let dbStatus = "Not tested"
  let tableExists = false
  let sampleData = null

  if (isConfigured) {
    try {
      // Test basic connection
      const { data: versionData, error: versionError } = await supabase.rpc("version")
      dbStatus = versionError ? `Error: ${versionError.message}` : "Connected"

      // Check if waitlist table exists
      const { data: tableData, error: tableError } = await supabase
        .from("waitlist")
        .select("count(*)", { count: "exact", head: true })

      tableExists = !tableError

      // Get sample data (first 3 entries)
      if (tableExists) {
        const { data: sampleEntries, error: sampleError } = await supabase
          .from("waitlist")
          .select("id, name, email, created_at")
          .limit(3)

        if (!sampleError && sampleEntries) {
          sampleData = sampleEntries
        }
      }
    } catch (error) {
      dbStatus = `Exception: ${error.message}`
    }
  }

  return Response.json({
    isConfigured,
    envStatus,
    dbStatus,
    tableExists,
    sampleData,
  })
}
