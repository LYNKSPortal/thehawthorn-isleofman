import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, MapPin, Car, Bus, Bike, AlertCircle, Clock, Users } from "lucide-react"
import { TicketingWidget } from "@/components/ticketing-widget"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TT 2026 Hospitality",
  description: "Premium TT Viewing at The Hawthorn - one of the most iconic sections of the Isle of Man TT course. Exclusive hospitality with trackside viewing, food, drinks, and unbeatable atmosphere. Book your TT 2026 experience now!",
  keywords: ["TT 2026", "Isle of Man TT", "TT hospitality", "TT viewing", "Greeba Bridge", "TT tickets", "motorcycle racing", "TT experience", "trackside viewing"],
  openGraph: {
    title: "TT 2026 Hospitality | The Hawthorn Bar & Bistro",
    description: "Premium TT Viewing at The Hawthorn - one of the most iconic sections of the Isle of Man TT course. Exclusive hospitality with trackside viewing.",
    url: "https://thehawthorn.im/duke-travel",
  },
}

export default function DukeTravelPage() {
  return (
    <div className="flex flex-col">
      <section 
        className="relative py-16 md:py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/motorbikes-with-gradient.jpg')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Image 
                src="/duke-travel-logo.png" 
                alt="Duke Travel Logo" 
                width={300} 
                height={100}
                className="drop-shadow-lg"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Hawthorn Hospitality
            </h1>
            <p className="text-xl md:text-2xl text-white mb-4 drop-shadow-lg">
              Premium TT Viewing at One of the Most Iconic Sections of the Course
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Overview</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              Hawthorn offers one of the most exciting and atmospheric viewing locations on the Isle of Man TT course. 
              Positioned on a fast, sweeping section where riders pass just metres away, this spot delivers that 
              unmistakable TT intensity — the sound, the speed, the closeness.
            </p>
            <p className="text-gray-700 mb-6">
              A favourite among TT fans, Hawthorn combines incredible trackside viewing with comfortable indoor seating, 
              great hospitality, and a relaxed social environment — ideal for both first-timers and seasoned racegoers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#D73C14' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Inclusions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Exclusive access to the Hawthorn hospitality area</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Prime trackside viewing just metres from the course</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Outdoor viewing area with uninterrupted sight of the action</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Indoor seating area for comfort and relaxation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Unlimited alcoholic drinks throughout the session</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Unlimited tea, coffee & soft drinks</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Breakfast baps on arrival (morning sessions)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Buffet lunch with hot and cold options</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Afternoon tea with cakes and sweet treats</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Live commentary so you never miss a moment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Big-screen coverage with live timing and race feed</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Private toilets for hospitality guests</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">On-site parking for hospitality guests</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">On-site team available throughout the day</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-8">More Information</h2>
          
          <div className="space-y-6">
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-amber-700" />
                  <CardTitle>Parking & Arrival</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  On-site parking is included, but vehicles cannot move while the roads are closed. 
                  <strong> Please arrive before road closures — we recommend at least 1 hour before the session starts.</strong>
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <AlertCircle className="w-6 h-6 text-amber-700" />
                  <CardTitle>Important Notice</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Tickets are non-refundable if racing is cancelled or disrupted due to weather or operational reasons</li>
                  <li>• This is an outdoor venue with indoor access only — please dress appropriately for Manx weather</li>
                  <li>• Tickets are valid only for the date booked</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section 
        className="relative py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/bike-02.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 drop-shadow-lg">Location & Access</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-amber-700" />
                <CardTitle>Hawthorn Location</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Hawthorn is located on the TT Course at Greeba between Douglas and Ballacraine.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col items-center text-center">
                  <Car className="w-8 h-8 text-amber-700 mb-2" />
                  <CardTitle className="text-lg">By Car</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-700">
                  On-site parking is provided for hospitality visitors. Vehicles must remain until the roads reopen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col items-center text-center">
                  <Bike className="w-8 h-8 text-amber-700 mb-2" />
                  <CardTitle className="text-lg">On Foot/Bicycle</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-700">
                  Access is possible before road closures.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col items-center text-center">
                  <Bus className="w-8 h-8 text-amber-700 mb-2" />
                  <CardTitle className="text-lg">By Bus</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-700">
                  Public transport operates in the area up to road closure times.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-amber-700 bg-amber-50">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-amber-700" />
                <CardTitle>Age Restriction</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 font-semibold">
                This hospitality event is strictly for over-18s only.
              </p>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-6">
              <a 
                href="https://www.duketravel.com/contact-us/ticket-terms-conditions/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-700 hover:text-amber-800 underline font-semibold"
              >
                Ticket terms and conditions
              </a> – important. Please read before purchasing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#D73C14' }}>
        <div className="mx-auto px-4" style={{ maxWidth: '1000px' }}>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Book Your Tickets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-900">Ticket Form</CardTitle>
              </CardHeader>
              <CardContent>
                <TicketingWidget />
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-amber-900">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">UK:</p>
                    <a href="tel:03300888434" className="text-amber-700 hover:text-amber-800 font-medium">
                      0330 088 8434
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">International:</p>
                    <a href="tel:+441624640044" className="text-amber-700 hover:text-amber-800 font-medium">
                      +44 1624 640044
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">Email:</p>
                    <a href="mailto:info@duketravel.com" className="text-amber-700 hover:text-amber-800 font-medium break-all">
                      info@duketravel.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-900">Accreditations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center gap-4">
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <Image 
                        src="/accreditation-01.avif" 
                        alt="Accreditation 1" 
                        width={300} 
                        height={150}
                        className="object-contain w-full"
                      />
                      <Image 
                        src="/accreditation-02.avif" 
                        alt="Accreditation 2" 
                        width={300} 
                        height={150}
                        className="object-contain w-full"
                      />
                    </div>
                    <Image 
                      src="/accreditation-03.avif" 
                      alt="Accreditation 3" 
                      width={300} 
                      height={150}
                      className="object-contain w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
