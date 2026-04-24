import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Star, Heart, Calendar, Users, Award } from "lucide-react"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about The Hawthorn, a family-run bar & bistro in Greeba, Isle of Man, owned by John Howard since May 2000. Discover our story, values, and commitment to quality local food.",
  keywords: ["about The Hawthorn", "John Howard", "family restaurant Isle of Man", "Greeba bistro", "local food", "Isle of Man dining history"],
  openGraph: {
    title: "About Us | The Hawthorn Bar & Bistro",
    description: "Learn about The Hawthorn, a family-run bar & bistro in Greeba, Isle of Man, owned by John Howard since May 2000.",
    url: "https://thehawthorn.im/about",
  },
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section 
        className="relative py-16 md:py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/customers.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              About The Hawthorn
            </h1>
            <p className="text-xl text-white/90 drop-shadow-lg">
              A family-run bar & bistro serving Greeba since May 2000
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div style={{ textAlign: 'center' }}>
              <h2 className="text-3xl font-bold text-amber-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Based in the old Hawthorn Inn, on the main road in Greeba, The Hawthorn Bar & Bistro has become a firm favourite on the Isle of Man for residents and tourists alike.
              </p>
              <p className="text-lg text-gray-700">
                Our reputation has been built on excellent quality, consistency, value for money, and good service. We love to cater for all occasions from a quick drink in a friendly atmosphere, to a big party for all the family.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center bg-amber-50 border-amber-200">
                <CardContent className="pt-6">
                  <Calendar className="w-10 h-10 text-amber-700 mx-auto mb-3" />
                  <h3 className="font-bold text-2xl text-amber-900 mb-1">24+</h3>
                  <p className="text-sm text-gray-600">Years of Excellence</p>
                </CardContent>
              </Card>
              
              <Card className="text-center bg-amber-50 border-amber-200">
                <CardContent className="pt-6">
                  <Users className="w-10 h-10 text-amber-700 mx-auto mb-3" />
                  <h3 className="font-bold text-2xl text-amber-900 mb-1">1000s</h3>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </CardContent>
              </Card>
              
              <Card className="text-center bg-amber-50 border-amber-200">
                <CardContent className="pt-6">
                  <Star className="w-10 h-10 text-amber-700 mx-auto mb-3" />
                  <h3 className="font-bold text-2xl mb-1" style={{ color: '#D73C14' }}>98%</h3>
                  <p className="text-sm text-gray-600">Recommend Us</p>
                </CardContent>
              </Card>
              
              <Card className="text-center bg-amber-50 border-amber-200">
                <CardContent className="pt-6">
                  <Award className="w-10 h-10 text-amber-700 mx-auto mb-3" />
                  <h3 className="font-bold text-2xl text-amber-900 mb-1">TT</h3>
                  <p className="text-sm text-gray-600">Perfect Location</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#D73C14' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Us?</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8">
            <p className="text-lg text-white text-center mb-8">
              We're a small local family business, and the joy and love that we put into The Hawthorn means that when you walk through the door, you become part of the family too. We love our regulars and welcome everyone to join us and share in some good grub!
            </p>
            <div className="text-center">
              <Link href="/reservations">
                <Button size="lg" className="bg-white hover:bg-amber-50" style={{ backgroundColor: 'white', color: '#D73C14' }}>Make a Reservation</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center">What Makes Us Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Star className="w-12 h-12 text-amber-700 mb-4 mx-auto" />
                <CardTitle>Excellent Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our reputation is built on excellent quality, consistency, and value for money.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MapPin className="w-12 h-12 text-amber-700 mb-4 mx-auto" />
                <CardTitle>Perfect TT Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Amazing location with the perfect view of the TT races and practices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="w-12 h-12 text-amber-700 mb-4 mx-auto" />
                <CardTitle>Family Business</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  A small local family business where you become part of the family.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section 
        className="relative py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/the-bar.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">Visit Us in Greeba</h2>
          <p className="text-lg text-white mb-8 drop-shadow-lg">
            Located on Main Road in Greeba, we're proud to serve the Isle of Man community 
            and welcome visitors from near and far. We look forward to serving you soon.
          </p>
          <Link href="/reservations">
            <Button size="lg" className="bg-white hover:bg-white" style={{ backgroundColor: 'white', color: '#D73C14' }}>
              Make a Reservation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
