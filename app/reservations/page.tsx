"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, Clock, Phone, Mail } from "lucide-react"

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "1",
    flexible: "Earlier",
    specialRequests: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const response = await fetch('/api/send-reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          guests: formData.guests,
          date: formData.date,
          time: formData.time,
          flexibleBooking: formData.flexible,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          details: formData.specialRequests,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitMessage({ type: 'success', text: 'Your reservation request has been sent! We will contact you with confirmation.' })
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          guests: "1",
          flexible: "Earlier",
          specialRequests: "",
        })
      } else {
        setSubmitMessage({ type: 'error', text: 'Failed to send reservation. Please call us at 801268.' })
      }
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'An error occurred. Please call us at 801268.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="flex flex-col">
      <section 
        className="relative bg-cover bg-center py-16 md:py-24"
        style={{ backgroundImage: "url('/table-at-the-restaurant.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              General Booking
            </h1>
            <p className="text-xl text-white font-semibold drop-shadow-lg">
              FOR SAME DAY BOOKINGS PLEASE CALL US ON 801268
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">Booking Request Form</h2>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                <p className="font-semibold text-amber-900 mb-2">WE WILL CONTACT YOU WITH A CONFIRMATION.</p>
                <p className="text-sm text-gray-700 mb-1">Our site is not monitored 24/7 – an immediate response is not always possible.</p>
                <p className="text-sm text-gray-700">Please call 801268 during opening hours for immediate confirmation.</p>
              </div>
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                        How Many People? (11 or more please call)
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        required
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                        What Date?
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        placeholder="dd/mm/yyyy - FOR TODAY PLEASE CALL US ON 801268"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                      <p className="text-xs text-gray-500 mt-1">FOR TODAY PLEASE CALL US ON 801268</p>
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Sitting Time?
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="flexible" className="block text-sm font-medium text-gray-700 mb-1">
                        Is this a flexible booking? (If preferred time is unavailable)
                      </label>
                      <select
                        id="flexible"
                        name="flexible"
                        value={formData.flexible}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      >
                        <option value="Earlier">Earlier</option>
                        <option value="Later">Later</option>
                        <option value="Either">Either</option>
                        <option value="Not Flexible">Not Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name For The Table?
                      </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        />
                      </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Whats Your Email?
                      </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Whats Your Number?
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                        Extra Details?
                      </label>
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        rows={4}
                        value={formData.specialRequests}
                        onChange={handleChange}
                        placeholder="Let us know if you require any high chairs, have any disabilities or have any special dietary requirements."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>

                    <div className="bg-amber-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        By submitting this form, you agree to our{" "}
                        <Link href="/booking-conditions" className="text-amber-700 hover:text-amber-800 underline">
                          Booking Conditions & Disclaimer
                        </Link>
                        .
                      </p>
                    </div>

                    {submitMessage && (
                      <div className={`rounded-lg p-4 ${submitMessage.type === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                        <p className={`text-sm ${submitMessage.type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
                          {submitMessage.text}
                        </p>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Reservation Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Call to Book</p>
                      <a href="tel:+441624801268" className="text-amber-700 hover:text-amber-800">
                        +44 1624 801268
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Prefer to speak with us? Give us a call!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:info@thehawthorn.im" className="text-amber-700 hover:text-amber-800">
                        info@thehawthorn.im
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Response Time</p>
                      <p className="text-sm text-gray-600">
                        We aim to confirm all reservations within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Large Groups</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-700">
                        Planning a celebration or group event? Please call us directly to discuss 
                        your requirements and ensure we can accommodate your party.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="pt-6">
                  <p className="text-sm text-gray-700">
                    <strong>Please note:</strong> All reservations are subject to availability 
                    and confirmation. We'll contact you to confirm your booking.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Find Us</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=The+Hawthorn+Bar+and+Bistro,Main+Road,Greeba,Isle+of+Man&zoom=15"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="The Hawthorn Location"
                  ></iframe>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
