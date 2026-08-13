import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Utensils, Sun, ArrowRight, Phone, Baby, Calendar, IceCream, Gift } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Menus",
  description: "Explore our delicious menu offerings at The Hawthorn in Greeba, Isle of Man. Main menu, Sunday roasts, children's menu, desserts, and more. Fresh, locally-sourced ingredients.",
  keywords: ["menu Isle of Man", "Sunday roast", "children's menu", "desserts", "restaurant menu Greeba", "food menu", "dining options", "local ingredients"],
  openGraph: {
    title: "Our Menus | The Hawthorn Bar & Bistro",
    description: "Explore our delicious menu offerings including Sunday roasts, children's menu, and homemade desserts at The Hawthorn in Greeba, Isle of Man.",
    url: "https://thehawthorn.im/menus",
  },
}

export default function MenusPage() {
  return (
    <div className="flex flex-col">
      <section 
        className="relative py-16 md:py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/plates-of-food-02.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Our Menus
            </h1>
            <p className="text-xl text-white/90 drop-shadow-lg">
              Delicious food prepared with care and served with passion
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Choose Your Menu</h2>
          
          {/* First row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <Link href="/menus/main-menu">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full text-center">
                <CardHeader>
                  <Utensils className="w-12 h-12 text-amber-700 mb-4 mx-auto" />
                  <CardTitle className="text-2xl">Main Menu</CardTitle>
                  <div className="bg-amber-50 border border-amber-200 rounded-md px-3 py-2 mb-3">
                    <p className="text-sm font-semibold text-amber-900">Available All Day</p>
                  </div>
                  <CardDescription className="text-base">
                    Our full evening menu featuring starters, mains, fish & seafood, chicken dishes, pasta, and vegetarian options
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center text-amber-900 font-semibold">
                    View Full Menu <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/menus/daytime-menu">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full text-center">
                <CardHeader>
                  <Sun className="w-12 h-12 text-amber-700 mb-4 mx-auto" />
                  <CardTitle className="text-2xl">Daytime Menu</CardTitle>
                  <div className="bg-amber-50 border border-amber-200 rounded-md px-3 py-2 mb-3">
                    <p className="text-sm font-semibold text-amber-900">12:00 PM - 5:30 PM (Last Orders)</p>
                    <p className="text-xs text-gray-600 mt-1">Except Sundays</p>
                  </div>
                  <CardDescription className="text-base">
                    Small plates, brunches, and lighter options perfect for lunch or afternoon dining
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center text-amber-900 font-semibold">
                    View Full Menu <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/menus/childrens-menu" className="md:col-span-2 lg:col-span-1">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full text-center">
                <CardHeader>
                  <Baby className="w-12 h-12 text-amber-700 mb-4 mx-auto" />
                  <CardTitle className="text-2xl">Children's Menu</CardTitle>
                  <div className="bg-amber-50 border border-amber-200 rounded-md px-3 py-2 mb-3">
                    <p className="text-sm font-semibold text-amber-900">For Children Under 12</p>
                  </div>
                  <CardDescription className="text-base">
                    Fresh, homemade meals designed for children with smaller appetites
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center text-amber-900 font-semibold">
                    View Full Menu <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Second row - 2 cards centered on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/menus/sunday-specials">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full text-center">
                <CardHeader>
                  <Calendar className="w-12 h-12 text-amber-700 mb-4 mx-auto" />
                  <CardTitle className="text-2xl">Sunday Specials</CardTitle>
                  <div className="bg-amber-50 border border-amber-200 rounded-md px-3 py-2 mb-3">
                    <p className="text-sm font-semibold text-amber-900">Sundays Only</p>
                  </div>
                  <CardDescription className="text-base">
                    Traditional Sunday roasts with Manx beef, pork belly, lamb, turkey, and vegetarian options
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center text-amber-900 font-semibold">
                    View Full Menu <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/menus/desserts">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full text-center">
                <CardHeader>
                  <IceCream className="w-12 h-12 text-amber-700 mb-4 mx-auto" />
                  <CardTitle className="text-2xl">Desserts & Hot Drinks</CardTitle>
                  <div className="bg-amber-50 border border-amber-200 rounded-md px-3 py-2 mb-3">
                    <p className="text-sm font-semibold text-amber-900">All Homemade</p>
                  </div>
                  <CardDescription className="text-base">
                    Delicious homemade desserts, Manx ice cream, specialty coffees, and liquor coffees
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center text-amber-900 font-semibold">
                    View Full Menu <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Third row - festive menu centered */}
          <div className="max-w-4xl mx-auto mt-8">
            <Link href="/menus/festive-menu">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full text-center">
                <CardHeader>
                  <Gift className="w-12 h-12 text-amber-700 mb-4 mx-auto" />
                  <CardTitle className="text-2xl">Festive Menu 2026</CardTitle>
                  <div className="bg-amber-50 border border-amber-200 rounded-md px-3 py-2 mb-3">
                    <p className="text-sm font-semibold text-amber-900">3 Courses £38 · 2 Courses £32</p>
                  </div>
                  <CardDescription className="text-base">
                    Celebrate the season with our festive starters, mains, and desserts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center text-amber-900 font-semibold">
                    View Full Menu <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#D73C14' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Menu Information
          </h2>
          <p className="text-lg text-white/90 mb-6">
            Our menus change seasonally to bring you the freshest ingredients and most exciting flavors. 
            We're committed to using quality local produce whenever possible.
          </p>
          <p className="text-lg text-white/90 mb-8">
            For our current menu offerings, daily specials, and dietary requirements, 
            please give us a call or visit us in person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+441624801268">
              <Button size="lg" className="bg-white hover:bg-amber-50" style={{ backgroundColor: 'white', color: '#D73C14' }}>
                <Phone className="mr-2 h-5 w-5" />
                Call for Menu Details
              </Button>
            </a>
            <Link href="/reservations">
              <Button size="lg" className="bg-white/10 text-white border-white hover:bg-white/20">
                Make a Reservation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">
            Dietary Requirements
          </h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-4">
                We understand that our guests have varying dietary needs and preferences. 
                Our kitchen team is happy to accommodate:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Vegetarian options</li>
                <li>Vegan dishes</li>
                <li>Gluten-free alternatives</li>
                <li>Allergy considerations</li>
              </ul>
              <p className="text-gray-700">
                Please inform our staff of any dietary requirements when making your reservation 
                or upon arrival, and we'll do our best to ensure you have a wonderful dining experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section 
        className="relative py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/dish-01.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">
            Experience Our Cuisine
          </h2>
          <p className="text-lg text-white mb-8 drop-shadow-lg">
            Join us at The Hawthorn and discover why we've been a food destination since 2000. 
            Book your table today.
          </p>
          <Link href="/reservations">
            <Button size="lg" className="bg-white hover:bg-white" style={{ backgroundColor: 'white', color: '#D73C14' }}>Make a Reservation</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
