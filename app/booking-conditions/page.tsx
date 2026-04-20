export const metadata = {
  title: "Booking Conditions & Disclaimer - The Hawthorn",
  description: "Booking Conditions & Disclaimer for The Hawthorn bar & bistro in Greeba, Isle of Man.",
}

export default function BookingConditionsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-amber-50 to-amber-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Booking Conditions & Disclaimer
            </h1>
            <p className="text-xl text-amber-800">
              Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Booking Conditions</h2>
            
            <h3 className="text-xl font-bold text-amber-900 mb-3">1. Reservation Confirmation</h3>
            <p className="text-gray-700 mb-6">
              All reservations are provisional until confirmed by The Hawthorn. We will contact you via phone 
              or email to confirm your booking. Please ensure the contact details provided are accurate.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mb-3">2. Booking Amendments</h3>
            <p className="text-gray-700 mb-6">
              If you need to modify your reservation (date, time, or number of guests), please contact us as 
              soon as possible. We will do our best to accommodate changes subject to availability.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mb-3">3. Cancellation Policy</h3>
            <p className="text-gray-700 mb-4">
              <strong>Standard Bookings (up to 6 guests):</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Please provide at least 24 hours' notice for cancellations</li>
              <li>No-shows or late cancellations may affect future booking privileges</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>Large Group Bookings (7+ guests):</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>48 hours' notice required for cancellations</li>
              <li>A deposit may be required at the time of booking</li>
              <li>Deposits are non-refundable for cancellations made with less than 48 hours' notice</li>
            </ul>

            <h3 className="text-xl font-bold text-amber-900 mb-3">4. Arrival Time</h3>
            <p className="text-gray-700 mb-6">
              Please arrive on time for your reservation. We will hold your table for 15 minutes past your 
              reservation time. After this period, we may release the table to other guests. If you are running 
              late, please call us to let us know.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mb-3">5. Seating</h3>
            <p className="text-gray-700 mb-6">
              While we will make every effort to accommodate seating preferences, we cannot guarantee specific 
              table locations. Table assignments are at the discretion of management based on availability and 
              operational requirements.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mb-3">6. Special Occasions</h3>
            <p className="text-gray-700 mb-6">
              If you're celebrating a special occasion, please let us know when booking. We'll do our best to 
              make your celebration memorable, though we cannot guarantee specific arrangements without prior 
              discussion.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mb-3">7. Dietary Requirements</h3>
            <p className="text-gray-700 mb-6">
              Please inform us of any dietary requirements, allergies, or food intolerances at the time of booking 
              and remind your server upon arrival. While we take all reasonable precautions, we cannot guarantee 
              a completely allergen-free environment.
            </p>

            <h2 className="text-2xl font-bold text-amber-900 mb-4 mt-8">Disclaimer</h2>

            <h3 className="text-xl font-bold text-amber-900 mb-3">Allergen Information</h3>
            <p className="text-gray-700 mb-6">
              Our kitchen handles various allergens including nuts, gluten, dairy, eggs, fish, shellfish, and 
              other common allergens. While we take precautions to prevent cross-contamination, we cannot 
              guarantee that any dish is completely free from allergens. Guests with severe allergies dine at 
              their own risk.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mb-3">Menu Changes</h3>
            <p className="text-gray-700 mb-6">
              Our menu is subject to change based on seasonal availability and supplier circumstances. We reserve 
              the right to substitute ingredients or dishes without prior notice.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mb-3">Pricing</h3>
            <p className="text-gray-700 mb-6">
              All prices are subject to change without notice. The prices applicable at the time of your visit 
              will be charged. We reserve the right to add a discretionary service charge for large groups.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mb-3">Force Majeure</h3>
            <p className="text-gray-700 mb-6">
              The Hawthorn shall not be liable for any failure to perform its obligations due to circumstances 
              beyond its reasonable control, including but not limited to: acts of God, natural disasters, 
              government restrictions, power failures, equipment failures, or supplier issues.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mb-3">Right of Admission</h3>
            <p className="text-gray-700 mb-6">
              We reserve the right to refuse admission or service to any person at our discretion. This includes 
              situations where guests are intoxicated, behaving inappropriately, or not adhering to our dress 
              code (if applicable).
            </p>

            <h3 className="text-xl font-bold text-amber-900 mb-3">Personal Belongings</h3>
            <p className="text-gray-700 mb-6">
              The Hawthorn is not responsible for loss, theft, or damage to personal belongings. Please keep 
              your valuables secure at all times.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mb-3">Limitation of Liability</h3>
            <p className="text-gray-700 mb-6">
              To the fullest extent permitted by law, The Hawthorn's liability for any claim arising from your 
              visit is limited to the amount paid for your meal. We are not liable for any indirect, consequential, 
              special, or punitive damages.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mb-3">Acceptance of Terms</h3>
            <p className="text-gray-700 mb-6">
              By making a reservation or visiting The Hawthorn, you acknowledge that you have read, understood, 
              and agree to be bound by these Booking Conditions and Disclaimer, as well as our Terms & Conditions 
              and Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-amber-900 mb-4 mt-8">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these booking conditions, please contact us:
            </p>
            <div className="bg-amber-50 rounded-lg p-6">
              <p className="text-gray-900 font-semibold">The Hawthorn</p>
              <p className="text-gray-700">Main Road, Greeba, IM4 3LF, Isle of Man</p>
              <p className="text-gray-700">Phone: <a href="tel:+441624801268" className="text-amber-700 hover:text-amber-800">+44 1624 801268</a></p>
              <p className="text-gray-700">Email: <a href="mailto:info@thehawthorn.im" className="text-amber-700 hover:text-amber-800">info@thehawthorn.im</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
