"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Bot, User, Loader2, Paperclip, Mic, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

// Common health-related questions and responses
const healthFAQs = [
  {
    question: "What is ABHA ID?",
    answer:
      "ABHA (Ayushman Bharat Health Account) is a unique health ID provided by the Government of India as part of the National Digital Health Mission. It helps you digitally access and share your health records securely across healthcare providers.",
  },
  {
    question: "How do I link my health records?",
    answer:
      "To link your health records with AYUV, first create your account and verify your identity. Then, connect your ABHA ID in the profile section. You can then grant permission to import records from participating healthcare providers or manually upload documents.",
  },
  {
    question: "Is my health data secure?",
    answer:
      "Yes, AYUV employs end-to-end encryption and blockchain-based consent management to ensure your health data remains secure. You have complete control over who can access your information and for what purpose, with every access being logged securely.",
  },
  {
    question: "Which wearable devices are supported?",
    answer:
      "AYUV supports integration with popular wearable devices including Apple Watch, Fitbit, Samsung Galaxy Watch, Mi Band, and more. We're continuously expanding our compatibility to include additional health monitoring devices.",
  },
]

// Suggested questions to help users get started
const suggestedQuestions = [
  "What is ABHA ID?",
  "How do I link my health records?",
  "Is my health data secure?",
  "Which wearable devices are supported?",
  "How do I share my records with a doctor?",
]

// Temporary mock function until the server action is working
const mockSendMessage = async (message: string) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Check if the message matches any FAQ
  const matchedFAQ = healthFAQs.find((faq) => message.toLowerCase().includes(faq.question.toLowerCase()))

  if (matchedFAQ) {
    return matchedFAQ.answer
  }

  // Return a mock response based on the message
  if (message.toLowerCase().includes("hello") || message.toLowerCase().includes("hi")) {
    return "Hello! I'm your AYUV health assistant. How can I help you today? You can ask me about ABHA ID, linking health records, data security, or supported wearable devices."
  }

  if (message.toLowerCase().includes("feature") || message.toLowerCase().includes("what can")) {
    return "AYUV offers several key features: unified health records linked to your ABHA ID, blockchain-secured consent management, wearable device integration, and preventive care insights. What would you like to know more about?"
  }

  if (message.toLowerCase().includes("doctor") || message.toLowerCase().includes("share")) {
    return "You can securely share your health records with healthcare providers through AYUV. Simply go to your profile, select the records you want to share, specify the doctor or healthcare facility, set an access duration, and generate a secure sharing link or QR code."
  }

  return "I'm here to help with information about AYUV and general health questions. What would you like to know about our digital health platform?"
}

type Message = {
  role: "user" | "assistant"
  content: string
}

const INITIAL_MESSAGES: Message[] = [
  {
    role: "assistant",
    content:
      "Hello! I'm your AYUV health assistant. How can I help you today? You can ask me about our platform features, data security, or how to manage your health records.",
  },
]

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const [isRecording, setIsRecording] = useState(false)
  const [isAttaching, setIsAttaching] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")
    setShowSuggestions(false)

    // Add user message to chat
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      // Use mock function for now
      const response = await mockSendMessage(userMessage)

      // Add AI response to chat
      setMessages((prev) => [...prev, { role: "assistant", content: response }])
    } catch (error) {
      console.error("Error sending message:", error)
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I encountered an error. Please try again later." },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSuggestedQuestion = (question: string) => {
    setInput(question)
    setShowSuggestions(false)
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    // In a real implementation, this would start/stop voice recording
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false)
        setInput("How do I share my health records with a doctor?")
      }, 2000)
    }
  }

  const toggleAttaching = () => {
    setIsAttaching(!isAttaching)
    // In a real implementation, this would open a file picker
  }

  return (
    <div className="flex flex-col h-[500px]">
      <div className="p-4 border-b border-gray-700 bg-[#0a111a]">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <Bot className="mr-2 h-5 w-5 text-[#2ecc71]" />
          AYUV Health Assistant
        </h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}>
            <div
              className={cn(
                "max-w-[80%] rounded-lg p-3",
                message.role === "user" ? "bg-[#2ecc71] text-white" : "bg-[#1a2734] text-gray-100",
              )}
            >
              <div className="flex items-start">
                <div className="mr-2 mt-0.5">
                  {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>
                <div className="text-sm">{message.content}</div>
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-[#1a2734] text-gray-100 max-w-[80%] rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <Bot className="h-4 w-4" />
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="text-sm">Thinking...</span>
              </div>
            </div>
          </div>
        )}

        {showSuggestions && messages.length === 1 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleSuggestedQuestion(question)}
                className="bg-[#1a2734] hover:bg-[#243548] text-gray-300 text-xs rounded-full px-3 py-1.5 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
        <div className="flex flex-col space-y-2">
          {isAttaching && (
            <div className="bg-[#1a2734] rounded-lg p-2 flex items-center justify-between">
              <span className="text-xs text-gray-400">Upload health document or image...</span>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 text-gray-400"
                onClick={() => setIsAttaching(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}

          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your health question..."
                className="futuristic-input pr-20"
                disabled={isLoading}
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex space-x-1">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className={`h-7 w-7 rounded-full ${isAttaching ? "text-[#2ecc71]" : "text-gray-400"}`}
                  onClick={toggleAttaching}
                  disabled={isLoading}
                >
                  <Paperclip className="h-4 w-4" />
                  <span className="sr-only">Attach file</span>
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className={`h-7 w-7 rounded-full ${isRecording ? "text-[#2ecc71]" : "text-gray-400"}`}
                  onClick={toggleRecording}
                  disabled={isLoading}
                >
                  <Mic className="h-4 w-4" />
                  <span className="sr-only">Voice input</span>
                </Button>
              </div>
            </div>
            <Button type="submit" className="futuristic-button" disabled={isLoading || !input.trim()}>
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
