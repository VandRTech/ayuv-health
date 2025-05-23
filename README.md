# AYUV Health - Empowering India's Health Journey

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/techvandr-3145s-projects/v0-image-analysis)
[![Made in India](https://img.shields.io/badge/Made%20in-India-orange?style=for-the-badge&logo=india)](https://www.ayuv.in) ## ✨ Overview

AYUV is a revolutionary digital health platform designed to reimagine India's healthcare journey. Our mission is to empower every individual with comprehensive control over their health data, fostering proactive wellness and simplifying their healthcare experience through innovative technology. We aim to provide a secure, patient-centric platform where users can seamlessly unify medical records, wearable data, and checkups—all in one place.

This project is a web application built to showcase the capabilities of Ayuv Health.

## 🚀 Key Features

AYUV offers a suite of powerful, user-centric features:

* **Unified Health Records**: Access ABHA-linked reports, prescriptions, and medical history seamlessly in one secure profile.
* **Blockchain-Secured Consent**: You control exactly who sees your health information, with every access logged securely.
* **Wearable & IoT Integration**: Effortlessly sync data from your favorite fitness trackers and health devices.
* **Preventive Care Insights**: Get timely reminders and insights for checkups and preventive care.
* **End-to-End Encryption**: Your health data is protected with military-grade encryption at every step, from storage to transmission.
* **AI Health Assistant**: Get answers to your health-related questions and information about the AYUV platform through our intelligent chatbot.
* **Patient Portal**: A secure gateway to manage your complete health journey, access records, schedule appointments, and communicate with your healthcare team.
* **Community Health Initiatives**: Join health programs and events to promote wellness.
* **Health Resources**: Explore a collection of articles, guides, videos, and tools.

## 🤔 How It Works

The Ayuv Health platform is designed with a focus on user experience and data security:
1.  **Secure Registration**: Users create an AYUV account, optionally linking their Ayushman Bharat Health Account (ABHA) ID for seamless record integration.
2.  **Data Aggregation**: Users can upload medical records and connect wearable devices to build a comprehensive health profile.
3.  **Consent Management**: Granular control over data sharing permissions ensures users can securely share their health profile with trusted healthcare providers.
4.  **Personalized Insights**: The platform provides personalized health insights, medication reminders, and timely alerts for checkups and preventive care.

## 🛠️ Tech Stack

This project is built with a modern, robust technology stack:

* **Frontend**: Next.js, React, TypeScript
* **Styling**: Tailwind CSS, Shadcn/ui components
* **UI Components**: Lucide React for icons
* **AI/Chatbot**: Groq API (via @ai-sdk/groq)
* **Database (Waitlist/Demo)**: In-memory storage (development), with plans for Supabase integration.
* **Deployment**: Vercel

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v18 or higher recommended)
* pnpm (or npm/yarn)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/ayuv-health.git](https://github.com/your-username/ayuv-health.git) # Replace with your actual repo URL
    cd ayuv-health
    ```
2.  **Install dependencies:**
    ```bash
    pnpm install
    # or
    # npm install
    # or
    # yarn install
    ```
3.  **Set up environment variables:**
    Create a `.env.local` file in the root of your project and add any necessary environment variables (e.g., Supabase keys, API keys for Groq).
    ```env
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    GROQ_API_KEY=your_groq_api_key
    # Add other variables as needed
    ```
    (Refer to `lib/supabase.ts` and `app/actions/chat-actions.ts` for potential variables.)

### Running the Development Server

Start the development server:
```bash
pnpm dev
# or
# npm run dev
# or
# yarn dev
