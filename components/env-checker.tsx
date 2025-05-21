"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle } from "lucide-react"

export function EnvChecker() {
  const [showChecker, setShowChecker] = useState(false)
  const [checkedVars, setCheckedVars] = useState<null | {
    nextPublicSupabaseUrl: boolean
    nextPublicSupabaseAnonKey: boolean
  }>(null)

  const checkEnvVars = () => {
    setCheckedVars({
      nextPublicSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      nextPublicSupabaseAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    })
  }

  if (!showChecker) {
    return (
      <div className="fixed bottom-6 left-6 z-[1000]">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowChecker(true)}
          className="bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
        >
          Check Environment
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 left-6 z-[1000] w-[300px] bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-medium">Environment Variables</h3>
        <Button variant="ghost" size="sm" onClick={() => setShowChecker(false)} className="text-gray-400 h-6 w-6 p-0">
          ×
        </Button>
      </div>

      {!checkedVars ? (
        <Button onClick={checkEnvVars} size="sm" className="w-full mb-2">
          Check Client Variables
        </Button>
      ) : (
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">NEXT_PUBLIC_SUPABASE_URL</span>
            {checkedVars.nextPublicSupabaseUrl ? (
              <CheckCircle className="h-4 w-4 text-green-500" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-500" />
            )}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">NEXT_PUBLIC_SUPABASE_ANON_KEY</span>
            {checkedVars.nextPublicSupabaseAnonKey ? (
              <CheckCircle className="h-4 w-4 text-green-500" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-500" />
            )}
          </div>
        </div>
      )}

      <div className="text-xs text-gray-400 mt-2">
        <p>
          Server variables can only be checked in server components and server actions. Check your server logs for more
          information.
        </p>
      </div>
    </div>
  )
}
