import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ChatButton } from "@/components/ai-chatbot/chat-button"
import { EnvChecker } from "@/components/env-checker"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AYUV - Empowering India's Health Journey",
  description: "Securely unify your medical records, wearable data, and checkups - all in one place.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ChatButton />
        {process.env.NODE_ENV === "development" && <EnvChecker />}
      </body>
    </html>
  )
}
