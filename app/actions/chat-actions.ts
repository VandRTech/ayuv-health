"use server"

import { generateText } from "ai"
import { groq } from "@ai-sdk/groq"

type Message = {
  role: "user" | "assistant"
  content: string
}

export async function sendMessage(message: string, previousMessages: Message[]) {
  try {
    // Convert previous messages to the format expected by the AI SDK
    const formattedMessages = previousMessages.map((msg) => ({
      role: msg.role,
      content: msg.content,
    }))

    // Create system prompt for health assistant
    const systemPrompt = `You are AYUV Health Assistant, an AI designed to help users with health-related questions and provide information about the AYUV platform.

AYUV is a digital health platform in India that securely unifies medical records, wearable data, and checkups in one place.

Key features of AYUV:
- Unified Health Records: Access ABHA-linked reports, prescriptions, and history seamlessly in one secure profile.
- Blockchain-Secured Consent: Users control exactly who sees their health information, with every access logged securely.
- Wearable & IoT Integration: Effortlessly sync data from fitness trackers and health devices.
- Preventive Care Insights: Get timely reminders and insights for checkups and preventive care.

When answering health-related questions:
- Provide general information only
- Do not diagnose specific conditions
- Encourage users to consult healthcare professionals for medical advice
- Be supportive, empathetic, and helpful

Keep responses concise (under 150 words) and focused on the user's question.`

    // Generate response using Groq
    const { text } = await generateText({
      model: groq("llama3-70b-8192"),
      messages: [{ role: "system", content: systemPrompt }, ...formattedMessages, { role: "user", content: message }],
      temperature: 0.7,
      maxTokens: 500,
    })

    return text
  } catch (error) {
    console.error("Error in chat action:", error)
    return "I'm sorry, I encountered an error. Please try again later."
  }
}
