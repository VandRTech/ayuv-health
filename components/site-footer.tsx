import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Instagram, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-[#0a111a] text-gray-400 py-12 lg:py-16 border-t border-gray-800">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4 group">
              <div className="relative h-20 w-80 logo-container">
                <Image src="/images/ayuv-logo.png" alt="AYUV Logo" fill className="object-contain logo-image" />
              </div>
            </Link>
            <p className="text-sm mt-2">Empowering India's health journey through secure, unified health management.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-[#2ecc71] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-sm hover:text-[#2ecc71] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-[#2ecc71] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm hover:text-[#2ecc71] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm hover:text-[#2ecc71] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-sm hover:text-[#2ecc71] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm hover:text-[#2ecc71] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm hover:text-[#2ecc71] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="section-divider my-8"></div>
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link
              href="https://linkedin.com"
              className="hover:text-[#2ecc71] transition-colors duration-300 hover:scale-110 inline-block"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://twitter.com"
              className="hover:text-[#2ecc71] transition-colors duration-300 hover:scale-110 inline-block"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://instagram.com"
              className="hover:text-[#2ecc71] transition-colors duration-300 hover:scale-110 inline-block"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="mailto:info@ayuv.in"
              className="hover:text-[#2ecc71] transition-colors duration-300 hover:scale-110 inline-block"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} AYUV. All rights reserved. Made in India.</p>
        </div>
      </div>
    </footer>
  )
}
