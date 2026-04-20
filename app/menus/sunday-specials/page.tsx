import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

export const metadata = {
  title: "Sunday Specials - The Hawthorn",
  description: "View our Sunday roast specials featuring Manx beef, pork belly, lamb, turkey, and vegetarian options.",
}

export default function SundaySpecialsPage() {
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
              Sunday Specials
            </h1>
            <p className="text-lg text-white/90 drop-shadow-lg mb-4">
              Traditional Sunday roasts with all the trimmings
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
              <span className="text-white font-semibold">Sunday Specials</span>
            </div>
          </div>
        </div>
      </section>

      {/* Roasts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Sunday Roasts</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Roast Manx Beef</h3>
                    <p className="text-sm text-gray-600">Roast & mashed potatoes, vegetables, Yorkshire pudding, gravy</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="font-bold text-amber-900 block">£17.75</span>
                    <span className="text-sm text-gray-600">£15.25 small plate</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Roast Pork Belly</h3>
                    <p className="text-sm text-gray-600">Crackling, roast & mashed potatoes, vegetables, Yorkshire pudding, gravy</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="font-bold text-amber-900 block">£17.25</span>
                    <span className="text-sm text-gray-600">£15.25 small plate</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Roast Leg of Manx Lamb</h3>
                    <p className="text-sm text-gray-600">Roast & mashed potatoes, vegetables, Yorkshire pudding, gravy</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="font-bold text-amber-900 block">£18.00</span>
                    <span className="text-sm text-gray-600">£16.00 small plate</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Roast Turkey Breast</h3>
                    <p className="text-sm text-gray-600">Stuffing, pig 'n blanket, roast & mashed potatoes, vegetables, gravy</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="font-bold text-amber-900 block">£17.00</span>
                    <span className="text-sm text-gray-600">£15.00 small plate</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Vegetarian/Vegan Mixed Nut Roast</h3>
                    <p className="text-sm text-gray-600">Roast & mashed potatoes, vegetables, gravy, non-vegan Yorkshire pudding</p>
                    <p className="text-xs text-gray-500 mt-1">Main size only</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£16.50</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Extras */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Make It Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-bold text-gray-900 mb-2">Mix It Up</h3>
                <p className="text-sm text-gray-600 mb-3">Add another meat</p>
                <span className="font-bold text-amber-900 text-lg">£3.00</span>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-bold text-gray-900 mb-2">Extra Yorkshire Pudding</h3>
                <p className="text-sm text-gray-600 mb-3">&nbsp;</p>
                <span className="font-bold text-amber-900 text-lg">£1.50</span>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-bold text-gray-900 mb-2">Cauliflower Cheese Bake</h3>
                <p className="text-sm text-gray-600 mb-3">2 person serving</p>
                <span className="font-bold text-amber-900 text-lg">£4.00</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="pt-6">
              <p className="text-gray-700">
                All our Sunday roasts are served with roast and mashed potatoes, fresh vegetables, Yorkshire pudding, and rich gravy
              </p>
              <p className="text-sm text-gray-600 mt-4">
                Small plate options available for lighter appetites
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
