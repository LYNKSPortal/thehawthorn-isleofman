import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#222222' }}>
      <div className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex flex-col items-center -space-y-1 mb-4">
              <span className="text-3xl md:text-4xl font-bold text-white leading-none">The Hawthorn</span>
              <span className="text-lg md:text-xl text-white/90">Bar & Bistro</span>
            </div>
            <p className="text-gray-300 mb-4">
              A family-run bar & bistro serving delicious food in welcoming and comfortable surroundings since May 2000. Located in the heart of Greeba, we're proud to serve the Isle of Man community with quality local produce and friendly service.
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+441624801268" className="flex items-center justify-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>+44 1624 801268</span>
              </a>
              <a href="mailto:info@thehawthorn.im" className="flex items-center justify-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@thehawthorn.im</span>
              </a>
              <div className="flex items-start justify-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>The Hawthorn, Main Road, Greeba, IM4 3LF, Isle of Man</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              <Link href="/privacy-policy" className="block text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="block text-gray-300 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/booking-conditions" className="block text-gray-300 hover:text-white transition-colors">
                Booking Conditions & Disclaimer
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-center">Opening Hours</h4>
            <div className="space-y-2 text-sm mx-auto" style={{ width: '400px' }}>
              <div className="flex justify-between text-gray-300">
                <span>Monday</span>
                <span>Closed</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Tue - Thu</span>
                <span>12:00 - 8:00 PM</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Fri - Sat</span>
                <span>12:00 - 9:00 PM</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Sunday</span>
                <span>12:00 - 7:00 PM</span>
              </div>
              <p className="text-xs text-gray-400 mt-3 text-center">
                Flexible closing times apply. Call ahead during quiet evenings.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300">&copy; 2026 The Hawthorn. All rights reserved.</p>
            <Image 
              src="/powered-by-lynks.png" 
              alt="Powered by LYNKS" 
              width={150} 
              height={50}
              style={{ width: '150px', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
