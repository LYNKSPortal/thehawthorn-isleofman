import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

export const metadata = {
  title: "Festive Menu 2026 - The Hawthorn",
  description: "View our Festive Menu 2026 featuring starters, mains, and desserts. 3 courses £38, 2 courses £32.",
}

export default function FestiveMenuPage() {
  return (
    <div className="flex flex-col">
      <section
        className="relative py-16 md:py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/plates-of-food-02.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
              Festive Menu 2026
            </h1>
            <p className="text-lg text-white/90 drop-shadow-lg mb-4">
              Hawthorn Bar Bistro
            </p>
            {/* Breadcrumbs */}
            <div className="flex items-center justify-center text-white/80 text-sm">
              <Link href="/" className="hover:text-white transition-colors flex items-center">
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/menus" className="hover:text-white transition-colors">
                Our Menus
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-white font-semibold">Festive Menu</span>
            </div>
          </div>
        </div>
      </section>

      {/* Starters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Starters</h2>
          <div className="space-y-4 max-w-4xl mx-auto">

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900">Winter Vegetable Broth</h3>
                <p className="text-sm text-gray-600">Served with a bread roll & butter (GF available)</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900">Crispy Duck & Vegetable Spring Rolls</h3>
                <p className="text-sm text-gray-600">With hoi sin sauce, shredded cabbage and cucumber</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900">Grilled Halloumi & Mango Salad</h3>
                <p className="text-sm text-gray-600">With croutons, caramelised cashew nuts and tomato salsa</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900">Crab Toastie</h3>
                <p className="text-sm text-gray-600">Crab meat, cream cheese and soy on toasted baguette</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mains */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Mains</h2>
          <div className="space-y-4 max-w-4xl mx-auto">

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900">Roast Turkey</h3>
                <p className="text-sm text-gray-600">Roast turkey breast, pig &apos;n&apos; blanket and chestnut stuffing served with roast and mash potatoes, seasonal vegetables and gravy (GF available)</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900">Roast Manx Beef</h3>
                <p className="text-sm text-gray-600">Slices of Manx topside served with roast and mash potatoes, seasonal veg, gravy and a Yorkshire pudding (GF available)</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900">Pork & Spinach Wellington</h3>
                <p className="text-sm text-gray-600">With a mushroom duxelles, creamy apple cider sauce, dauphinoise potatoes and roasted vegetables</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900">Salmon Fillet</h3>
                <p className="text-sm text-gray-600">Served with asparagus spears, roasted broccoli, dauphinoise potatoes and sauce Veronique</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900">Vegetarian Nut & Cranberry Roast</h3>
                <p className="text-sm text-gray-600">Served with roast and mash potatoes, seasonal veg, gravy and a Yorkshire pudding</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Desserts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Desserts</h2>
          <div className="space-y-4 max-w-4xl mx-auto">

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900">Salted Caramel & Popcorn Cheesecake</h3>
                <p className="text-sm text-gray-600">With salted caramel ice cream</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900">Spiced Apple Pie</h3>
                <p className="text-sm text-gray-600">With vanilla ice cream</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900">Sticky Toffee Pudding</h3>
                <p className="text-sm text-gray-600">With vanilla ice cream</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900">Sherry Trifle</h3>
                <p className="text-sm text-gray-600">Fresh cream, custard and sponge</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                <div>
                  <p className="text-3xl font-bold text-amber-900">£38</p>
                  <p className="text-gray-600">3 Courses</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-amber-900">£32</p>
                  <p className="text-gray-600">2 Courses</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Allergy Notice */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="pt-6 space-y-3">
              <p className="text-sm font-semibold text-gray-800">
                PLEASE ADVISE US IF YOU HAVE ANY ALLERGIES OR SPECIAL DIETARY REQUIREMENTS. PLEASE ALSO READ OUR BOOKING INFO BELOW.
              </p>
              <p className="text-sm text-gray-700">
                Some dishes adaptable to gluten free (gluten free bread available).
              </p>
              <p className="text-sm text-gray-700">
                Please ensure any allergy is clearly marked on your order.
              </p>
              <p className="text-sm font-semibold text-gray-800 mt-4">
                TO AVOID DISAPPOINTMENT ALL MEAL CHOICES ARE REQUIRED 5 DAYS BEFORE YOUR RESERVATION OTHERWISE MENU ITEMS ARE SUBJECT TO AVAILABILITY.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Booking Conditions */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">Festive Party Booking Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-700 space-y-3 list-disc list-inside">
                <li>A £15 per person non-refundable deposit is required to secure your booking and must be paid by the 20th November.</li>
                <li>We cannot guarantee that we can accommodate any persons wishing to join the party after the deposit has been paid. We will endeavour to accommodate if possible.</li>
                <li>ALL bookings are &apos;provisional&apos; until ALL deposits are received. Any bookings made after the 20th November will be held for 3 days, then cancelled if deposits are not received.</li>
                <li>There is no refund for any course or individual item not required.</li>
                <li>We require your final meal choices a minimum of 5 days in advance for all festive bookings.</li>
                <li>The organiser should record what each person in the party has ordered and keep a copy.</li>
                <li>If possible, also write a name place card for each person with their choices. This stops people claiming meals that they haven&apos;t ordered, which helps for a smoother service.</li>
                <li>We will not accept individual payments for food. If you have booked as a group it is up to the organiser to collect all monies from the individuals either beforehand or at the table.</li>
                <li>If, for whatever reason you pay individually for food there will be a £2 charge per payment for this service.</li>
                <li>If persons wish to pay for drinks individually, we cannot offer &quot;table service&quot; or run a &quot;tab&quot;. In this case drinks must be ordered and paid for at the bar.</li>
                <li>&quot;No Shows&quot; means any persons or party that have not cancelled their reservation and fail to attend as booked. This will result in no refund of any monies/deposits paid.</li>
                <li>Any cancellations advised after deposit paid and up to 24 hours prior to booking time will receive a voucher for the value of deposit.</li>
                <li>Seating and arrangements of tables will be determined by the management depending on the size of your party and other parties/bookings in that afternoon/evening. If you have a preference, please let us know when making your booking and we will do our best to accommodate your request.</li>
                <li>Babies and children (under 5 years old) are requested to leave the premises by 6:45pm on Fridays and Saturdays, unless by prior arrangement.</li>
                <li>All reservations before 6.30pm have a maximum seating time of 2½ hours to allow time for the next sitting.</li>
                <li>When making a booking you acknowledge that you have read the conditions and fully understand and accept them on behalf of everyone in your party.</li>
              </ul>
              <p className="text-xs text-gray-500 mt-6 italic">
                Prices and meals are correct as of 31st July 2025 but may be subject to change depending on market prices.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
