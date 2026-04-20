import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

export const metadata = {
  title: "Children's Menu - The Hawthorn",
  description: "View our children's menu available for children under 12 years.",
}

export default function ChildrensMenuPage() {
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
              Children's Menu
            </h1>
            <p className="text-lg text-white/90 drop-shadow-lg mb-4">
              Available for children under 12 years
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
              <span className="text-white font-semibold">Children's Menu</span>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-amber-200 bg-white">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-amber-900">Important Notice</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We welcome children of all ages, but we have various legal obligations under the licensing law and part of that is to see that everybody, including children behave.
              </p>
              <p className="text-gray-700 font-semibold">
                Please DO NOT allow your child to run-around and disrupt other diners.
              </p>
              <p className="text-gray-700">
                They can be hurt or burnt if they run into our serving staff carrying knives and hot food. It is your responsibility to exercise control of your children, thank you.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mt-4">
                <p className="text-sm text-gray-700 italic">
                  Children with BIGGER appetites can choose from our small plate menu
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Dishes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Main Dishes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All our food is fresh and homemade and a healthier option for your child
            </p>
            <p className="text-sm text-gray-600 mt-2">
              ALL meals (except *) are served with chips
            </p>
            <p className="text-xs text-gray-500 mt-1">
              (mash potato, pasta or rice are also available)
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Fried Egg</h3>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£4.30</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Sausages or Bacon</h3>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£6.10</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Pieces of Chicken Breast</h3>
                    <p className="text-sm text-gray-600">In batter OR plain</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£7.30</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Whole Tail Scampi</h3>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£7.40</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Small Cod Fillet in Batter</h3>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£7.60</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Home-made Minced Beef Lasagne</h3>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£7.25</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">*Plain Pasta with Home-made Tomato Sauce (V)</h3>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£5.75</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">*Roast Dinner</h3>
                    <p className="text-sm text-gray-600">Sunday's only</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£7.95</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sides & Extras */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Sides & Extras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">£2.00 Each</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Baked beans</li>
                      <li>• Garden peas</li>
                      <li>• Mushy peas</li>
                      <li>• Gravy</li>
                      <li>• Egg</li>
                      <li>• One garlic bread</li>
                    </ul>
                  </div>
                  <span className="font-bold text-amber-900">£2.00</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">£3.75 Each</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Vegetable selection</li>
                      <li>• Salad</li>
                      <li>• Chips</li>
                      <li>• Mash</li>
                      <li>• New potatoes</li>
                      <li>• Pasta</li>
                    </ul>
                  </div>
                  <span className="font-bold text-amber-900">£3.75</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dessert */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Dessert</h2>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Ice Cream</h3>
                    <p className="text-sm text-gray-600">Vanilla, Chocolate, or Strawberry</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£2.75 per scoop</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-white border-amber-200">
            <CardContent className="pt-6">
              <p className="text-gray-700 italic">
                If you would like your child's meal to be served with your starters or before your main meal, please let us know
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
