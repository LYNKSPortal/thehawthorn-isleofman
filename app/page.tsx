import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, Phone, Utensils, Calendar, Wine, ShoppingBag, PartyPopper, Quote, Gift } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      <section 
        className="relative bg-cover bg-center py-32 md:py-48 lg:py-80"
        style={{ backgroundImage: "url('/plates-of-food-02.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Welcome to The Hawthorn
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-lg">
              Here at The Hawthorn, we offer simple food, done well. From homemade, traditional, to international dishes that suit a wide range of tastes, ages, and occasions.
            </p>
            <Link href="/menus">
              <Button size="lg">
                <Utensils className="mr-2 h-5 w-5" />
                View Our Menus
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1" style={{ textAlign: 'center' }}>
              <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 leading-tight">
                Lovely Food & Even Lovelier People
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The Hawthorn, nestled in Greeba, is a family-run bar & bistro owned by John Howard. Since May 2000, it has been firmly established as a food destination. The Hawthorn serves delicious food in welcoming and comfortable surroundings.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/about">
                  <Button size="lg" className="bg-gray-800 text-white hover:bg-gray-900">Learn More About Us</Button>
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="pt-6 text-center">
                    <Utensils className="w-12 h-12 text-amber-700 mx-auto mb-3" />
                    <h3 className="font-bold text-2xl text-amber-900 mb-1">24+</h3>
                    <p className="text-sm text-gray-600">Years of Excellence</p>
                  </CardContent>
                </Card>
                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="pt-6 text-center">
                    <Wine className="w-12 h-12 text-amber-700 mx-auto mb-3" />
                    <h3 className="font-bold text-2xl text-amber-900 mb-1">100+</h3>
                    <p className="text-sm text-gray-600">Drink Selections</p>
                  </CardContent>
                </Card>
                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="pt-6 text-center">
                    <PartyPopper className="w-12 h-12 text-amber-700 mx-auto mb-3" />
                    <h3 className="font-bold text-2xl text-amber-900 mb-1">500+</h3>
                    <p className="text-sm text-gray-600">Events Hosted</p>
                  </CardContent>
                </Card>
                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="pt-6 text-center">
                    <MapPin className="w-12 h-12 text-amber-700 mx-auto mb-3" />
                    <h3 className="font-bold text-2xl text-amber-900 mb-1">Greeba</h3>
                    <p className="text-sm text-gray-600">Isle of Man</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-white" style={{ backgroundColor: '#D73C14' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div style={{ textAlign: 'center' }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                The Perfect Bar Next Door
              </h2>
              <p className="text-lg text-amber-50 mb-8 leading-relaxed">
                The Hawthorn's bar has a comfortable, relaxed and friendly atmosphere with real ales, signature cocktails and a wide selection of spirits. A place for you to enjoy your before or after-dinner drinks, or pop in for an afternoon tipple.
              </p>
              <div className="flex justify-center">
                <Link href="/reservations">
                  <Button size="lg" className="bg-white hover:bg-white" style={{ backgroundColor: 'white', color: '#D73C14' }}>
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Table
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20" style={{ textAlign: 'center' }}>
              <h3 className="text-2xl font-bold mb-6">What Makes Us Special</h3>
              <p className="text-amber-50 mb-6 leading-relaxed">
                When John Howard set about opening The Hawthorn, he wanted it to be the kind of place where people would come to enjoy their days off. It meant creating a proper bistro, with proper food. A friendly atmosphere, where everybody's welcome. Unpretentious cooking by people who love to eat as much as you do.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <Gift className="w-8 h-8 text-white mb-2 mx-auto" />
                  <p className="text-sm text-white">Family Run</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <Utensils className="w-8 h-8 text-white mb-2 mx-auto" />
                  <p className="text-sm text-white">Fresh Daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center">Happy Customers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Quote className="w-8 h-8 text-amber-700 mb-2 mx-auto" />
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 italic">
                  "Excellent food, excellent service, and very reasonable pricing. 100% happy, and we will be back."
                </p>
                <p className="text-amber-900 font-semibold">Andy Kerruish</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Quote className="w-8 h-8 text-amber-700 mb-2 mx-auto" />
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 italic">
                  "Great food and very friendly attentive staff. Would definitely recommend this place."
                </p>
                <p className="text-amber-900 font-semibold">Linda Magee</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Quote className="w-8 h-8 text-amber-700 mb-2 mx-auto" />
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 italic">
                  "Had a wonderful meal last night, staff were so friendly. I would recommend you try the Caribbean chicken!"
                </p>
                <p className="text-amber-900 font-semibold">Sean Shamus Weir</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/reviews">
              <Button size="lg">View More Reviews</Button>
            </Link>
          </div>
        </div>
      </section>

      <section 
        className="relative py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/table-at-the-restaurant.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center drop-shadow-lg">Our Services</h2>
          <p className="text-lg text-white mb-12 text-center max-w-3xl mx-auto drop-shadow-lg">
            Whether you fancy an intimate dinner or you're organising a big meal with friends, we cater to a wide variety of events.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Utensils className="w-12 h-12 text-amber-700 mb-4 mx-auto" />
                <CardTitle>Casual Dining</CardTitle>
                <CardDescription>
                  Enjoy our food, whether you're dining indoors or outdoors.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <ShoppingBag className="w-12 h-12 text-amber-700 mb-4 mx-auto" />
                <CardTitle>Takeaway</CardTitle>
                <CardDescription>
                  Take our delicious food on the go with our takeaway service.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <PartyPopper className="w-12 h-12 text-amber-700 mb-4 mx-auto" />
                <CardTitle>Birthday Party</CardTitle>
                <CardDescription>
                  Mark a special occasion or birthday party, regardless of size.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gift className="w-16 h-16 text-amber-700 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Gift Ideas</h2>
          <p className="text-lg text-gray-700 mb-6">
            Make someone's day extra special with a Hawthorn gift card! To purchase, please phone us, it's the perfect way to share a little joy.
          </p>
          <a href="tel:+441624801268">
            <Button size="lg">
              <Phone className="mr-2 h-5 w-5" />
              01624 801268
            </Button>
          </a>
        </div>
      </section>

    </div>
  )
}
