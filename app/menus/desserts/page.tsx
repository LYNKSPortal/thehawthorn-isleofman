import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight, Home, Coffee } from "lucide-react"

export const metadata = {
  title: "Desserts & Hot Drinks - The Hawthorn",
  description: "View our homemade desserts and hot drinks menu featuring sticky toffee pudding, brownies, sundaes, and specialty coffees.",
}

export default function DessertsMenuPage() {
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
              Desserts & Hot Drinks
            </h1>
            <p className="text-lg text-white/90 drop-shadow-lg mb-4">
              All desserts are homemade
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
              <span className="text-white font-semibold">Desserts & Hot Drinks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Desserts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Desserts</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Sticky Toffee Pudding</h3>
                    <p className="text-sm text-gray-600">With caramel sauce and vanilla ice cream</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£8.50</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Glazed Lemon Tart</h3>
                    <p className="text-sm text-gray-600">With strawberry coulis and vanilla ice cream</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£8.25</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Chocolate Deluxe Nutella Brownie</h3>
                    <p className="text-sm text-gray-600">Home-made chocolate brownie with chocolate ganache & Nutella with ice cream</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£8.50</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Bread & Butter Pudding</h3>
                    <p className="text-sm text-gray-600">With dried fruits, syrup and vanilla ice cream</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£8.00</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Banana Fritters</h3>
                    <p className="text-sm text-gray-600">With an orange and ginger compote, vanilla ice cream and syrup</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="font-bold text-amber-900 block">£7.50</span>
                    <span className="text-sm text-gray-600">£5.80 small</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Hawthorn Sundae</h3>
                    <p className="text-sm text-gray-600">Vanilla and chocolate ice-cream, crunchy honeycomb, chocolate chips, caramel sauce and fresh whipped cream</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£8.50</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Eton Mess of the Day</h3>
                    <p className="text-sm text-gray-600">Fresh whipped cream, meringue, fresh cream, fresh fruit and sauce</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£8.50</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Fruit Crumble of the Day</h3>
                    <p className="text-sm text-gray-600">Hot fruit crumble with an oat crumble topping served with custard, vanilla ice cream or fresh pouring cream</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£8.50</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Davison's Manx Ice Cream</h3>
                    <p className="text-sm text-gray-600">Choose from Vanilla, Chocolate and/or Strawberry - 3 scoops</p>
                    <p className="text-xs text-gray-500 mt-2">We also have Diabetic Vanilla ice cream and Dairy Free Soya ice cream available as an extra</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£7.80</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hot Drinks */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <Coffee className="w-8 h-8 text-amber-700 mr-3" />
            <h2 className="text-3xl font-bold text-amber-900">Hot Drinks</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Coffee */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Coffee</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Americano</span>
                    <span className="font-semibold text-amber-900">£3.30</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Flat White</span>
                    <span className="font-semibold text-amber-900">£3.30</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Espresso</span>
                    <span className="font-semibold text-amber-900">£3.10</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Caffè Latte</span>
                    <span className="font-semibold text-amber-900">£3.35</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Cappuccino</span>
                    <span className="font-semibold text-amber-900">£3.20</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Mocha</span>
                    <span className="font-semibold text-amber-900">£3.20</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Fresh Filtered Coffee</span>
                    <span className="font-semibold text-amber-900">£3.30</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Decaffeinated Coffee</span>
                    <span className="font-semibold text-amber-900">£3.40</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Specialty Drinks */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Specialty</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Hot Chocolate</span>
                    <span className="font-semibold text-amber-900">£3.25</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div className="flex-1">
                      <span className="text-gray-700">Flavoured Café Latte</span>
                      <p className="text-xs text-gray-500 mt-1">Hazelnut, Vanilla, Cinnamon, Caramel or Almond</p>
                    </div>
                    <span className="font-semibold text-amber-900 ml-2">£3.65</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tea */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tea</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">English Breakfast Tea</span>
                    <span className="font-semibold text-amber-900">£2.90</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Decaffeinated Tea</span>
                    <span className="font-semibold text-amber-900">£3.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Herbal Tea (various)</span>
                    <span className="font-semibold text-amber-900">£3.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Liquor Coffee */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-4 text-center">Liquor Coffee</h2>
          <p className="text-center text-gray-600 mb-8">Made with double cream and your choice of liquor</p>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-amber-900">£7.00</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-700">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                    Calypso Tia Maria
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                    French Brandy
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                    Irish Jameson
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                    Scottish Grouse Whisky
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                    Jamaican Dark Rum
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                    Italian Amaretto
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                    Cream Baileys
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                    American Jack Daniels
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                    Mexican Tequila
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
