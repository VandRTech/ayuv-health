"use client"

import { useState } from "react"
import { MessageSquare, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChatInterface } from "./chat-interface"
import { cn } from "@/lib/utils"

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-[1000] rounded-full w-16 h-16 p-0 shadow-lg transition-all duration-300",
          isOpen ? "bg-red-500 hover:bg-red-600" : "chat-button-pulse",
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="h-7 w-7" /> : <MessageSquare className="h-7 w-7" />}
      </Button>

      <div
        className={cn(
          "fixed bottom-24 right-6 z-[999] w-[90%] sm:w-[400px] transition-all duration-300 transform shadow-2xl",
          isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none",
        )}
      >
        <div className="futuristic-border glow-effect">
          <div className="futuristic-card overflow-hidden">
            <ChatInterface />
          </div>
        </div>
      </div>
    </>
  )
}
