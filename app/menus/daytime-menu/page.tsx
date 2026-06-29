import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Home } from "lucide-react"

export const metadata = {
  title: "Daytime Menu - The Hawthorn",
  description: "View our daytime menu available 12 noon until 5:30pm (last orders) except Sundays.",
}

export default function DaytimeMenuPage() {
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
              Daytime Menu
            </h1>
            <p className="text-lg text-white/90 drop-shadow-lg mb-4">
              Available 12 noon until 5:30pm (last orders) • Except Sundays
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
              <span className="text-white font-semibold">Daytime Menu</span>
            </div>
          </div>
        </div>
      </section>

      {/* Small Plates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Small Plates</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Brie</h3>
                    <p className="text-sm text-gray-600">Bread-crumbed and deep fried, served with small salad and chips</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£13.00</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Scampi</h3>
                    <p className="text-sm text-gray-600">Whole tail scampi with garden peas and chips</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£13.95</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Baked Loin of Cod</h3>
                    <p className="text-sm text-gray-600">Vierge dressing, vegetables and sautéed potatoes</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£14.60</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Creole Loin of Cod</h3>
                    <p className="text-sm text-gray-600">Coated in Cajun spices, with stir-fried vegetables and chips</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£14.60</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Fish & Chips</h3>
                    <p className="text-sm text-gray-600">Cod with mushy peas and chips</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£14.60</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Pork Sausage</h3>
                    <p className="text-sm text-gray-600">Onion gravy and creamed potatoes</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£12.50</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Sirloin Minute Steak</h3>
                    <p className="text-sm text-gray-600">Fried mushrooms, onions, garden peas and chips</p>
                    <p className="text-xs text-gray-500 mt-1">Add pepper sauce £1.50</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£15.50</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Gammon</h3>
                    <p className="text-sm text-gray-600">Pineapple, fried egg, tomato, mushrooms, onion rings and chips</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£13.75</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Beef Chilli</h3>
                    <p className="text-sm text-gray-600">Cheesy nachos, sour cream and rice or chips</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£13.75</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Chicken Breast</h3>
                    <p className="text-sm text-gray-600">White wine and onion cream sauce, broccoli and creamed potatoes</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£12.95</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Chicken Stroganoff</h3>
                    <p className="text-sm text-gray-600">Chicken in stroganoff sauce with broccoli and rice</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£12.95</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Honey & Orange Chicken</h3>
                    <p className="text-sm text-gray-600">Battered chicken pieces in honey and orange glaze with stir-fried vegetables and rice</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£12.95</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Carbonara</h3>
                    <p className="text-sm text-gray-600">Crispy bacon, mushrooms, parmesan & cream with linguine & garlic bread</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£12.50</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Mini-Brunch A</h3>
                    <p className="text-sm text-gray-600">2 pork sausages, fried egg, baked beans and chips</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£10.50</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Mini-Brunch B</h3>
                    <p className="text-sm text-gray-600">2 bacon rashers, fried egg, baked beans and chips</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£10.50</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vegetarian */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-4 text-center">Not Just for Vegetarians</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Omelette</h3>
                    <p className="text-sm text-gray-600">Cheese, tomato and onion, served with chips</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£11.50</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Mushroom & Vegetable Stroganoff</h3>
                    <p className="text-sm text-gray-600">Served with rice or linguine</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£11.50</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Broccoli & Cauliflower Cheese Bake</h3>
                    <p className="text-sm text-gray-600">Breadcrumb topping, salad and chips</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£12.50</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-6">
                More small plates, starters and sides are available — please see the main menu for selection and prices.
              </p>
              <Link href="/menus/main-menu">
                <Button size="lg">See Main Menu for Selection and Prices</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Large Brunch */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Large Brunch</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Large Brunch</h3>
                    <p className="text-sm text-gray-600">2 pork sausage, 2 bacon, fried egg, black pudding, mushrooms, grilled tomato, baked beans, chips and toast</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£13.50</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
