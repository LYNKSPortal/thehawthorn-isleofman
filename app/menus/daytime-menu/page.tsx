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
                    <p className="text-sm text-gray-600">Bread crumbed deep fried, small salad, chips</p>
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
                    <p className="text-sm text-gray-600">Whole tail, garden peas, chips</p>
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
                    <p className="text-sm text-gray-600">Vierge dressing, vegetables, sautéed potatoes</p>
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
                    <p className="text-sm text-gray-600">Coated in Cajun spices, stir-fried vegetables, chips</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£14.60</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Fish (Cod) & Chips</h3>
                    <p className="text-sm text-gray-600">Mushy peas, chips</p>
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
                    <p className="text-sm text-gray-600">Onion gravy, creamed potatoes</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£12.50</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Breaded Pork Loin Escalope</h3>
                    <p className="text-sm text-gray-600">White wine & onion cream sauce, broccoli, mash potatoes</p>
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
                    <p className="text-sm text-gray-600">Fried mushrooms & onions, garden peas, chips</p>
                    <p className="text-xs text-gray-500 mt-1">Add a pepper sauce only £1.50</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£15.25</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Gammon</h3>
                    <p className="text-sm text-gray-600">Pineapple, fried egg, tomato, mushrooms, onion rings, chips</p>
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
                    <p className="text-sm text-gray-600">Cheesy nachos, sour cream, rice OR chips</p>
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
                    <p className="text-sm text-gray-600">White wine & onion cream sauce, broccoli, creamed potatoes</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£12.75</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Chicken in a Stroganoff Sauce</h3>
                    <p className="text-sm text-gray-600">Broccoli, rice</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£12.75</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Chicken Pieces in Batter</h3>
                    <p className="text-sm text-gray-600">Coated in a honey & orange glaze, stir-fried vegetables, rice</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£12.75</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Carbonara</h3>
                    <p className="text-sm text-gray-600">Crispy bacon, shallots, egg, parmesan, cream, linguine, garlic bread</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£12.50</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Brunch</h3>
                    <p className="text-sm text-gray-600">Pork sausage, bacon, fried egg, black pudding, mushrooms, grilled tomato, baked beans, chips, toast</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£12.75</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Mini-Brunch A</h3>
                    <p className="text-sm text-gray-600">2 pork sausage, fried egg, baked beans, chips</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£9.50</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Mini-Brunch B</h3>
                    <p className="text-sm text-gray-600">2 bacon rashers, fried egg, baked beans, chips</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£9.50</span>
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
                    <p className="text-sm text-gray-600">Cheese, tomato, onion, chips</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£11.50</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Mushroom and Vegetable Stroganoff</h3>
                    <p className="text-sm text-gray-600">Rice or linguine</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£11.50</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Vegetables in Homemade Marinara Tomato Sauce</h3>
                    <p className="text-sm text-gray-600">Linguine, garlic bread</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£11.50</span>
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
                More SMALL PLATES (SP) starters & sides are available
              </p>
              <Link href="/menus/main-menu">
                <Button size="lg">See Main Menu for Selection and Prices</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
