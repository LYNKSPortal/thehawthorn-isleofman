"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function TicketingWidget() {
  const pathname = usePathname()
  const [key, setKey] = useState(0)

  useEffect(() => {
    // Force remount on pathname change
    setKey(prev => prev + 1)
  }, [pathname])

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const container = document.getElementById('ticketing-widget-container')
      if (!container) return

      // Clear any existing content
      container.innerHTML = ''

      const script = document.createElement('script')
      script.src = 'https://assets.ticketinghub.com/checkout.js'
      script.setAttribute('data-widget', '599a1a03-79db-4871-8606-16a2eaf31e24')
      script.setAttribute('data-no-minify', '1')
      script.async = true
      
      container.appendChild(script)
    }, 100)

    return () => {
      clearTimeout(timer)
      const container = document.getElementById('ticketing-widget-container')
      if (container) {
        container.innerHTML = ''
      }
    }
  }, [key])

  return <div key={key} id="ticketing-widget-container" className="min-h-[400px]"></div>
}
