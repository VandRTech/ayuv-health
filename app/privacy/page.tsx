import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Ayuv Health",
  description: "Ayuv Health Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose max-w-none">
        <h2>1. Information We Collect</h2>
        <p>We collect information that you provide directly to us. This can include:</p>
        <ul>
          <li>Contact information (name, email address)</li>
          <li>Health information for medical consultations</li>
          <li>Payment information for services</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and improve our services</li>
          <li>Communicate with you about your appointments</li>
          <li>Process payments</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>3. Data Security</h2>
        <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>

        <h2>4. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Object to processing of your information</li>
        </ul>

        <h2>5. Changes to This Policy</h2>
        <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>

        <h2>6. Contact Us</h2>
        <p>If you have any questions about this privacy policy, please contact us at [contact email].</p>
      </div>
    </div>
  );
}
