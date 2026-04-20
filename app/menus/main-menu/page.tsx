import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

export const metadata = {
  title: "Main Menu - The Hawthorn",
  description: "View our full main menu featuring starters, mains, seafood, vegetarian options and more.",
}

export default function MainMenuPage() {
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
              Main Menu
            </h1>
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
              <span className="text-white font-semibold">Main Menu</span>
            </div>
          </div>
        </div>
      </section>

      {/* Starters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Starters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="flex justify-between items-start border-b border-gray-200 pb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Homemade Soup</h3>
                <p className="text-sm text-gray-600">Crusty bread & butter</p>
              </div>
              <span className="font-bold text-amber-900 ml-4">£6.95</span>
            </div>

            <div className="flex justify-between items-start border-b border-gray-200 pb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Garlic Bread or Onion Rings</h3>
                <p className="text-sm text-gray-600">With dips</p>
              </div>
              <span className="font-bold text-amber-900 ml-4">£6.50</span>
            </div>

            <div className="flex justify-between items-start border-b border-gray-200 pb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Cheesy Garlic Bread</h3>
                <p className="text-sm text-gray-600">With Marinara sauce</p>
              </div>
              <span className="font-bold text-amber-900 ml-4">£6.95</span>
            </div>

            <div className="flex justify-between items-start border-b border-gray-200 pb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Beef Chilli</h3>
                <p className="text-sm text-gray-600">Cheese nachos, sour cream</p>
              </div>
              <span className="font-bold text-amber-900 ml-4">£7.25</span>
            </div>

            <div className="flex justify-between items-start border-b border-gray-200 pb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Smoked Mackerel Pate</h3>
                <p className="text-sm text-gray-600">Beetroot & apple relish, toasted sliced baguette</p>
              </div>
              <span className="font-bold text-amber-900 ml-4">£8.75</span>
            </div>

            <div className="flex justify-between items-start border-b border-gray-200 pb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Twice Baked Cheddar Cheese Soufflé</h3>
                <p className="text-sm text-gray-600">Onion cheese sauce, marinara sauce</p>
              </div>
              <span className="font-bold text-amber-900 ml-4">£10.25</span>
            </div>

            <div className="flex justify-between items-start border-b border-gray-200 pb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Mushrooms</h3>
                <p className="text-sm text-gray-600">Butter, garlic, shallots, cream, garlic bread</p>
              </div>
              <span className="font-bold text-amber-900 ml-4">£9.00</span>
            </div>

            <div className="flex justify-between items-start border-b border-gray-200 pb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Aromatic Duck & Vegetable Spring Rolls</h3>
                <p className="text-sm text-gray-600">Hoisin sauce dip</p>
              </div>
              <span className="font-bold text-amber-900 ml-4">£9.95</span>
            </div>

            <div className="flex justify-between items-start border-b border-gray-200 pb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Manx Queenies</h3>
                <p className="text-sm text-gray-600">White wine, garlic, coriander, crusty bread OR Cheddar mornay style</p>
              </div>
              <span className="font-bold text-amber-900 ml-4">£11.95</span>
            </div>

            <div className="flex justify-between items-start border-b border-gray-200 pb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Breaded Brie</h3>
                <p className="text-sm text-gray-600">Deep fried, balsamic reduction, cranberry sauce, salad garnish</p>
              </div>
              <span className="font-bold text-amber-900 ml-4">£9.95</span>
            </div>

            <div className="flex justify-between items-start border-b border-gray-200 pb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Jumbo Prawns in Batter</h3>
                <p className="text-sm text-gray-600">Sweet chilli dip</p>
              </div>
              <span className="font-bold text-amber-900 ml-4">£11.95</span>
            </div>

            <div className="flex justify-between items-start border-b border-gray-200 pb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Jumbo Chilli & Garlic Prawns</h3>
                <p className="text-sm text-gray-600">White wine butter, chilli flake, garlic bread</p>
              </div>
              <span className="font-bold text-amber-900 ml-4">£11.95</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mains */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-4 text-center">Mains</h2>
          <p className="text-center text-gray-600 mb-8">Small plate available (sp)</p>
          <div className="space-y-6 max-w-5xl mx-auto">
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Braised Manx Beef Bourguignon Style</h3>
                    <p className="text-sm text-gray-600">Slowly cooked in a red wine gravy with bacon, mushroom, onions, carrots, dauphinoise potatoes, Yorkshire pudding, broccoli</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="font-bold text-amber-900 block">£20.95</span>
                    <span className="text-sm text-gray-600">£17.95 sp</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Proper Steak & Mushroom Pie</h3>
                    <p className="text-sm text-gray-600">Manx beef, mushrooms & gravy encased in short crust pastry, chips, garden peas</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£17.50</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Beef Stroganoff</h3>
                    <p className="text-sm text-gray-600">Strips of sirloin, onion & mushrooms cooked in a creamy stroganoff sauce, broccoli, rice</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="font-bold text-amber-900 block">£21.75</span>
                    <span className="text-sm text-gray-600">£18.95 sp</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Pork Belly</h3>
                    <p className="text-sm text-gray-600">Slow roasted, crispy crackling, creamed spinach & mushroom, blue cheese cream sauce, Bury black pudding mashed potato (plain available)</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£18.90</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Chinese Style Crispy Shredded Pork</h3>
                    <p className="text-sm text-gray-600">Slowly roasted shoulder coated in a sweet & spicy BBQ sauce with onions & bell peppers, egg fried rice, prawn crackers</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="font-bold text-amber-900 block">£17.00</span>
                    <span className="text-sm text-gray-600">£15.00 sp</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Pork Escalope</h3>
                    <p className="text-sm text-gray-600">Breaded tenderised loin, white wine & onion cream sauce, broccoli, creamed potatoes</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="font-bold text-amber-900 block">£18.25</span>
                    <span className="text-sm text-gray-600">£15.25 sp</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Lamb Shank</h3>
                    <p className="text-sm text-gray-600">Slowly braised until falling off the bone, broccoli, dauphinoise potatoes, gravy</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£22.95</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Beef Burger</h3>
                    <p className="text-sm text-gray-600">Topped with BBQ pulled pork, cheddar & red Leicester cheese, tomato, lettuce, challah bun, 'slaw, chips (served plain if preferred)</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£16.70</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Gammon</h3>
                    <p className="text-sm text-gray-600">Pineapple, fried egg, tomato, mushrooms, onion rings, chips</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="font-bold text-amber-900 block">£18.25</span>
                    <span className="text-sm text-gray-600">£15.25 sp</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Mixed Grill</h3>
                    <p className="text-sm text-gray-600">Sirloin steak, gammon, chicken, pork sausage, Bury black pudding, fried egg, tomato, mushrooms, onion rings, chips</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£28.00</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Sirloin Steak</h3>
                    <p className="text-sm text-gray-600">Seasoned & cooked to your liking with tomato, mushrooms, onion rings, chips OR vegetables and sauté potatoes</p>
                    <p className="text-xs text-gray-500 mt-2">Make it special: add 3 jumbo prawns chilli or battered £7.50 - 4 scampi £4.90</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="font-bold text-amber-900 block">8oz - £27.00</span>
                    <span className="font-bold text-amber-900 block">10oz - £30.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Chilli Con Carne</h3>
                    <p className="text-sm text-gray-600">Minced Manx beef, tomatoes, onions, chillies, spices and kidney beans in a rich tomato sauce, cheesy nachos, sour cream, rice or chips</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="font-bold text-amber-900 block">£17.00</span>
                    <span className="text-sm text-gray-600">£15.00 sp</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chicken */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-4 text-center">Chicken Breast - 8 Ways</h2>
          <p className="text-center text-gray-600 mb-8">(PLAIN always available)</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Parmigiana</h3>
                    <p className="text-sm text-gray-600">Coated with parmesan & breadcrumbs, baked & covered in homemade tomato sauce and cheese, served with salad and chips</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£18.70</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Cajun Spiced</h3>
                    <p className="text-sm text-gray-600">Dusted with Cajun spices, stir-fried vegetables, chips, mint & cucumber yogurt dip</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£18.70</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Garlic</h3>
                    <p className="text-sm text-gray-600">Tenderised, breaded and deep fried, smothered in garlic butter (or on the side), salad, chips</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£18.50</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Curry of the Day</h3>
                    <p className="text-sm text-gray-600">Served with basmati rice, mango chutney, poppadum or prawn crackers</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="font-bold text-amber-900 block">£18.25</span>
                    <span className="text-sm text-gray-600">£16.25 sp</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Crispy</h3>
                    <p className="text-sm text-gray-600">Coated in our house batter, pineapple fritter, mango chutney, salad, chips</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£18.50</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Orange</h3>
                    <p className="text-sm text-gray-600">Pieces in batter coated in orange & honey glaze, Chinese style stir-fried vegetables, egg fried rice</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="font-bold text-amber-900 block">£18.50</span>
                    <span className="text-sm text-gray-600">£16.50 sp</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Southern Fried Chicken Burger</h3>
                    <p className="text-sm text-gray-600">Southern fried buttermilk chicken breast, beef tomato, lettuce, challah bun, spicy mayo, 'slaw, chips</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£17.75</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fish & Seafood */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Fish & Seafood</h2>
          <div className="space-y-6 max-w-5xl mx-auto">
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Fish & Chips</h3>
                    <p className="text-sm text-gray-600">Prime battered North Sea cod, Manx potato chips, mushy peas</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="font-bold text-amber-900 block">£18.95</span>
                    <span className="text-sm text-gray-600">£15.95 sp</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Scampi</h3>
                    <p className="text-sm text-gray-600">Breaded whole tail scampi, garden peas, chips</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="font-bold text-amber-900 block">£18.00</span>
                    <span className="text-sm text-gray-600">£15.50 sp</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Creole Style Loin of Cod</h3>
                    <p className="text-sm text-gray-600">Dusted in Cajun spices, stir-fried vegetables, chips, mint & cucumber yogurt dip</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="font-bold text-amber-900 block">£20.70</span>
                    <span className="text-sm text-gray-600">£17.90 sp</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Baked Loin of Cod</h3>
                    <p className="text-sm text-gray-600">Sauce Vierge (olive oil, capers, tomato & onion), fine green beans, broccoli, sautéed potatoes (GF available)</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="font-bold text-amber-900 block">£20.70</span>
                    <span className="text-sm text-gray-600">£17.90 sp</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Seafood Linguini</h3>
                    <p className="text-sm text-gray-600">Jumbo prawns, queenies, cod, white wine, lime, coriander, chilli sauce OR our tomato Marinara sauce</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="font-bold text-amber-900 block">£22.25</span>
                    <span className="text-sm text-gray-600">£19.50 sp</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pasta & Vegetarian */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Pasta & Vegetarian</h2>
          <div className="space-y-6 max-w-5xl mx-auto">
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Lasagne</h3>
                    <p className="text-sm text-gray-600">Prime Manx minced beef in an Italian style tomato sauce layered with pasta sheets, béchamel sauce and cheese, salad, chips</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="font-bold text-amber-900 block">£16.75</span>
                    <span className="text-sm text-gray-600">£13.95 sp</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Carbonara Linguini</h3>
                    <p className="text-sm text-gray-600">Crispy bacon, shallots, egg, parmesan, cream, slice garlic bread</p>
                    <p className="text-xs text-gray-500 mt-2">ADD slices of chicken breast - £3 and/or mushrooms - £1</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="font-bold text-amber-900 block">£15.00</span>
                    <span className="text-sm text-gray-600">£13.00 sp</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Vegetarian Wellington</h3>
                    <p className="text-sm text-gray-600">Goat's cheese, spinach, butternut squash, cashew nuts in puff pastry, roasted pepper and garlic cream sauce, broccoli, chips</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£17.95</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Vegan / Vegetarian Stir-Fry</h3>
                    <p className="text-sm text-gray-600">Oriental style rice & vegetables, sesame & soy sauce</p>
                  </div>
                  <span className="font-bold text-amber-900 ml-4">£15.00</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Mushroom and Vegetable Stroganoff</h3>
                    <p className="text-sm text-gray-600">Rice or chips</p>
                    <p className="text-xs text-gray-500 mt-2">ADD slices of chicken breast - £3</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="font-bold text-amber-900 block">£16.00</span>
                    <span className="text-sm text-gray-600">£14.00 sp</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sauces & Sides */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-4 text-center">Sauces & Sides</h2>
          <p className="text-center text-gray-600 mb-8">(ONLY available with a main course)</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <span className="text-gray-900">Peppercorn / Diane / Garlic / Tomato / Blue Cheese / Spicy BBQ</span>
              <span className="font-bold text-amber-900">£3.75</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <span className="text-gray-900">Chips / Mash / Sauté / Dauphinoise</span>
              <span className="font-bold text-amber-900">£4.95</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <span className="text-gray-900">Pasta / Rice / Side Salad / Vegetables</span>
              <span className="font-bold text-amber-900">£4.75</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <span className="text-gray-900">Everything else portion or individual piece</span>
              <span className="font-bold text-amber-900">£2.50</span>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-8 italic">
            You can replace the vegetables and potatoes/rice/pasta with a salad on any of the main dishes
          </p>
        </div>
      </section>

      {/* Important Notices */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-amber-50 border-amber-200">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Important Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-bold text-amber-900 mb-2">Food Allergies / Intolerances</h3>
                <p className="text-sm text-gray-700">
                  Please note that it is your responsibility to advise us. All dishes may contain traces of nuts or gluten, as these and other allergens are present in our kitchen. Our dish descriptions do not include every ingredient. Should you have specific dietary requirements, we will do our best to remove the allergen, but we cannot 100% guarantee that will be the case.
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  Any person with high sensitivity (celiac) to wheat/gluten being present, we cannot 100% say that there will be no crossover contamination in our kitchen. We cannot be held responsible for an adverse reaction you may have to your meal.
                </p>
                <p className="text-sm text-gray-700 mt-2 font-semibold">
                  GF - Any item that is deep-fried will have traces of gluten in the vegetable oil which is also used for frying fish, chicken etc. in batter.
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  GLUTEN FREE PASTA AND BREAD AVAILABLE - PLEASE ASK YOUR SERVER
                </p>
              </div>

              <div>
                <h3 className="font-bold text-amber-900 mb-2">Special Set Menu</h3>
                <p className="text-sm text-gray-700">
                  2 course set menu + dessert option - available Mondays to Fridays - ask your server
                </p>
              </div>

              <div>
                <h3 className="font-bold text-amber-900 mb-2">Service</h3>
                <p className="text-sm text-gray-700">
                  We do not add a service charge to your bill. If you feel you have had good service or brought in a celebration cake, a gratuity will be greatly appreciated by all your servers & kitchen staff.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-amber-900 mb-2">Additional Notes</h3>
                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                  <li>While every effort is made to ensure all fish or seafood dishes are free from bones or shell, they may still be present</li>
                  <li>ALL weights are minimum uncooked</li>
                  <li>Due to possible supplier shortages, we may have to substitute vegetables or other items as described</li>
                  <li>MISSING an old favourite dish? We may be able to cook it for you at quieter times, subject to availability of ingredients</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-bold text-amber-900 mb-2 text-center">We Also Cater For</h3>
                <p className="text-center text-gray-700 font-semibold">
                  WEDDINGS • FAMILY CELEBRATIONS • WAKES • AND MORE
                </p>
                <p className="text-sm text-gray-600 text-center mt-2">
                  Plated meals or hot/cold buffet - special menu tailored to your taste and budget
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
