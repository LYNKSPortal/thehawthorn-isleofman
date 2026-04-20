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

      // Create the embed widget div
      const embedDiv = document.createElement('div')
      embedDiv.id = 'embed_widget'
      embedDiv.setAttribute('data-th-embed', '')
      embedDiv.setAttribute('data-th-config', '{ "widgetId": "2ae095a8-b961-4f7e-beff-db7df40c4a19" }')
      
      container.appendChild(embedDiv)

      // Load the script
      const script = document.createElement('script')
      script.src = 'https://assets.ticketinghub.com/checkout.js'
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
