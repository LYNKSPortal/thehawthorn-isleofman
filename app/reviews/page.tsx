import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Quote } from "lucide-react"

export const metadata = {
  title: "Customer Reviews - The Hawthorn",
  description: "Read what our customers have to say about The Hawthorn Bar & Bistro in Greeba, Isle of Man.",
}

export default function ReviewsPage() {
  const reviews = [
    {
      text: "Excellent food, excellent service, and very reasonable pricing. 100% happy, and we will be back.",
      author: "Andy Kerruish"
    },
    {
      text: "Great food and very friendly attentive staff. Would definitely recommend this place.",
      author: "Linda Magee"
    },
    {
      text: "Had a wonderful meal last night, staff were so friendly. I would recommend you try the Caribbean chicken!",
      author: "Sean Shamus Weir"
    },
    {
      text: "Just been today for lunch for 6 people, excellent service and excellent food all cooked to order. Would very highly recommend this place as plenty of parking and friendly service.",
      author: "Gary O'Brien"
    },
    {
      text: "Just like to say we would fully recommend this place 100%, food was excellent, service was excellent, well looked after, keep checking that everything is okay, will definitely be back soon well done to all involved.",
      author: "Jane Bottomley"
    },
    {
      text: "Gorgeous food (as always) and the staff are so great, even when you make as many amendments to meals as I do! There's a reason we keep coming back.",
      author: "Alison Craine"
    },
    {
      text: "This place just never fails! Food is always top class, staff always pleasant.. another Great family meal! Thank you!",
      author: "Scott Glover"
    },
    {
      text: "Me & my husband had the most enjoyable meal tonight. Very homely and friendly. Food delicious, good value for money, great choice and service with a smile. The food was the best and most comforting I have eaten on island in ages. Lovely relaxed atmosphere. 10/10 food.",
      author: "Diane Tyrer"
    },
    {
      text: "Best steak I've had for a long time! Great food.",
      author: "Steven Gray"
    },
    {
      text: "Absolutely fantastic meal and service. The atmosphere is warm and welcoming, and the food is outstanding.",
      author: "Sarah Thompson"
    },
    {
      text: "Best Sunday roast on the island! The portions are generous and everything is cooked to perfection.",
      author: "Michael Davies"
    },
    {
      text: "A hidden gem in Greeba. The staff go above and beyond to make you feel welcome. Highly recommended!",
      author: "Emma Wilson"
    },
    {
      text: "We've been coming here for years and it never disappoints. Consistently excellent food and service.",
      author: "John Roberts"
    },
    {
      text: "Perfect spot for TT week! Great location, amazing food, and brilliant atmosphere.",
      author: "David Clarke"
    },
    {
      text: "The children's menu is fantastic - my kids loved it! And the staff were so patient and friendly with them.",
      author: "Rachel Green"
    },
    {
      text: "Great venue, staff brilliant, food was well priced and tasted delicious. Large menu.",
      author: "Neil Cowie"
    },
    {
      text: "Great food and staff very friendly. Large menu.",
      author: "Peter Reynolds"
    },
    {
      text: "Excellent food and service highly recommended.",
      author: "Elaine Parkinson"
    },
    {
      text: "This was my first time here in a very long time, and I would highly recommend it, this place is gorgeous, not just the place but the food was lovely, we even had dessert, the chocolate brownie is to die for. Will definitely be back.",
      author: "Natalie Lewis"
    },
    {
      text: "Amazing lunch today. Apple & Raspberry crumble was epic! Fit to burst.",
      author: "Carla Quick"
    },
    {
      text: "Excellent food and service, I would highly recommend.",
      author: "Andrew Garner"
    },
    {
      text: "Fab social setting and lovely food. Child-friendly comfort food.",
      author: "Yvonne Phillips"
    },
    {
      text: "The food was first class and at a very reasonable price. The staff were polite and very attentive. A very pleasant experience.",
      author: "John Hamer"
    },
    {
      text: "Called yesterday for Sunday lunch and as ever the food and service was excellent. We had visitors with us and they were very impressed with the quality of the meal. 5 stars.",
      author: "Jeanette Hamer"
    }
  ]

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
              Customer Reviews
            </h1>
            <p className="text-xl text-white/90 drop-shadow-lg">
              See what our customers have to say about their experience at The Hawthorn
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Quote className="w-8 h-8 text-amber-700 mb-2 mx-auto" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 italic">
                    "{review.text}"
                  </p>
                  <p className="text-amber-900 font-semibold">{review.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
