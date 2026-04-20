"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/menus", label: "Our Menus" },
  { href: "/reviews", label: "Reviews" },
  { href: "/duke-travel", label: "TT 2026 Hospitality" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="shadow-md sticky top-0 z-50" style={{ backgroundColor: '#D73C14' }}>
      <div className="flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex flex-col items-center -space-y-1">
            <span className="text-3xl md:text-4xl font-bold text-white leading-none">The Hawthorn</span>
            <span className="text-lg md:text-xl text-white/90">Bar & Bistro</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-white hover:text-gray-200 transition-colors font-medium",
                  pathname === link.href && "text-white border-b-2 border-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+441624801268" className="flex items-center space-x-2 text-white hover:text-gray-200 font-medium">
              <Phone className="w-5 h-5" />
              <span>+44 1624 801268</span>
            </a>
            <Link href="/reservations">
              <button className="bg-white hover:bg-white px-6 py-2 rounded-md font-semibold transition-colors" style={{ color: '#D73C14' }}>
                Book a Table
              </button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center space-x-2 text-white hover:text-gray-200"
          >
            <span className="font-medium">Menu</span>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50" style={{ backgroundColor: '#D73C14', top: '80px' }}>
          <div className="h-full overflow-y-auto px-6 py-8 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-4 rounded-md text-white text-xl font-medium hover:bg-white/10 transition-colors",
                  pathname === link.href && "bg-white/20"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 pt-4">
              <Link href="/reservations" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-white hover:bg-white px-6 py-3 rounded-md font-semibold transition-colors mb-4" style={{ color: '#D73C14' }}>
                  Book a Table
                </button>
              </Link>
            </div>
            <div className="flex flex-col space-y-4 px-4 pt-4 border-t border-white/20">
              <a href="tel:+441624801268" className="flex items-center space-x-3 text-white text-lg">
                <Phone className="w-6 h-6" />
                <span>+44 1624 801268</span>
              </a>
              <a href="mailto:info@thehawthorn.im" className="flex items-center space-x-3 text-white text-lg">
                <Mail className="w-6 h-6" />
                <span>info@thehawthorn.im</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
