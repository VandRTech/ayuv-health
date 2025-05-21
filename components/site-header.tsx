"use client"
import Link from "next/link"
import Image from "next/image"
import type React from "react"

import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="w-full py-4 bg-[#0e1621] z-50 sticky top-0 backdrop-blur-sm bg-opacity-90 border-b border-gray-800">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <div className="relative h-20 w-80 logo-container">
            <Image src="/images/ayuv-logo.png" alt="AYUV Logo" fill className="object-contain logo-image" priority />
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/about" active={pathname === "/about"}>
            About
          </NavLink>
          <NavLink href="/features" active={pathname === "/features"}>
            Features
          </NavLink>
          <NavLink href="/patient-portal" active={pathname === "/patient-portal"}>
            Patient Portal
          </NavLink>
          <NavLink href="/resources" active={pathname === "/resources"}>
            Resources
          </NavLink>
          <NavLink href="/community" active={pathname === "/community"}>
            Community
          </NavLink>
          <NavLink href="/contact" active={pathname === "/contact"}>
            Contact
          </NavLink>
          <Button className="futuristic-button">
            <span>Join Waitlist</span>
          </Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#0e1621] text-white border-l border-gray-800">
            <div className="flex justify-center mb-8 mt-4">
              <div className="relative h-16 w-64 logo-container">
                <Image src="/images/ayuv-logo.png" alt="AYUV Logo" fill className="object-contain logo-image" />
              </div>
            </div>
            <nav className="flex flex-col gap-4 mt-8">
              <MobileNavLink href="/about" active={pathname === "/about"}>
                About
              </MobileNavLink>
              <MobileNavLink href="/features" active={pathname === "/features"}>
                Features
              </MobileNavLink>
              <MobileNavLink href="/patient-portal" active={pathname === "/patient-portal"}>
                Patient Portal
              </MobileNavLink>
              <MobileNavLink href="/resources" active={pathname === "/resources"}>
                Resources
              </MobileNavLink>
              <MobileNavLink href="/community" active={pathname === "/community"}>
                Community
              </MobileNavLink>
              <MobileNavLink href="/contact" active={pathname === "/contact"}>
                Contact
              </MobileNavLink>
              <Button className="mt-4 futuristic-button">
                <span>Join Waitlist</span>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

interface NavLinkProps {
  href: string
  active: boolean
  children: React.ReactNode
}

function NavLink({ href, active, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-all duration-300 relative",
        active ? "text-[#2ecc71]" : "text-white hover:text-[#2ecc71]",
      )}
    >
      {children}
      <span
        className={cn(
          "absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2ecc71] transition-all duration-300",
          active ? "w-full" : "group-hover:w-full",
        )}
      />
    </Link>
  )
}

function MobileNavLink({ href, active, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors duration-300",
        active ? "text-[#2ecc71]" : "text-white hover:text-[#2ecc71]",
      )}
    >
      {children}
    </Link>
  )
}
