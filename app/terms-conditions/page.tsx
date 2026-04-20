export const metadata = {
  title: "Terms & Conditions - The Hawthorn",
  description: "Terms & Conditions for The Hawthorn bar & bistro in Greeba, Isle of Man.",
}

export default function TermsConditionsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-amber-50 to-amber-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Terms & Conditions
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
            <h2 className="text-2xl font-bold text-amber-900 mb-4">1. General Terms</h2>
            <p className="text-gray-700 mb-6">
              These Terms and Conditions govern your use of The Hawthorn's services and facilities. By making a 
              reservation or visiting our establishment, you agree to be bound by these terms.
            </p>

            <h2 className="text-2xl font-bold text-amber-900 mb-4">2. Reservations</h2>
            <p className="text-gray-700 mb-4">
              All reservations are subject to availability and confirmation. We reserve the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Confirm or decline any reservation request</li>
              <li>Require a deposit for large group bookings</li>
              <li>Cancel reservations in case of unforeseen circumstances</li>
              <li>Modify table assignments as necessary for operational reasons</li>
            </ul>

            <h2 className="text-2xl font-bold text-amber-900 mb-4">3. Cancellations</h2>
            <p className="text-gray-700 mb-6">
              We request that you provide at least 24 hours' notice for cancellations. Failure to provide adequate 
              notice or no-shows may result in restrictions on future bookings. For large group reservations, 
              specific cancellation terms will be communicated at the time of booking.
            </p>

            <h2 className="text-2xl font-bold text-amber-900 mb-4">4. Table Holding Time</h2>
            <p className="text-gray-700 mb-6">
              Tables are held for 15 minutes past the reservation time. If you anticipate being late, please 
              contact us. We cannot guarantee table availability beyond the grace period.
            </p>

            <h2 className="text-2xl font-bold text-amber-900 mb-4">5. Conduct</h2>
            <p className="text-gray-700 mb-4">
              We expect all guests to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Behave respectfully toward staff and other guests</li>
              <li>Follow health and safety guidelines</li>
              <li>Comply with licensing laws regarding alcohol consumption</li>
              <li>Respect our property and facilities</li>
            </ul>
            <p className="text-gray-700 mb-6">
              We reserve the right to refuse service or ask guests to leave if these standards are not met.
            </p>

            <h2 className="text-2xl font-bold text-amber-900 mb-4">6. Children</h2>
            <p className="text-gray-700 mb-6">
              Children are welcome at The Hawthorn. Parents and guardians are responsible for supervising their 
              children at all times and ensuring they do not disturb other guests.
            </p>

            <h2 className="text-2xl font-bold text-amber-900 mb-4">7. Dietary Requirements</h2>
            <p className="text-gray-700 mb-6">
              While we make every effort to accommodate dietary requirements and allergies, we cannot guarantee 
              a completely allergen-free environment. Please inform staff of any allergies or dietary restrictions 
              when making your reservation and upon arrival.
            </p>

            <h2 className="text-2xl font-bold text-amber-900 mb-4">8. Payment</h2>
            <p className="text-gray-700 mb-6">
              Payment is due at the time of service. We accept various payment methods. All prices are subject 
              to change without notice. Service charges may apply to large groups.
            </p>

            <h2 className="text-2xl font-bold text-amber-900 mb-4">9. Lost Property</h2>
            <p className="text-gray-700 mb-6">
              While we will make reasonable efforts to return lost property, The Hawthorn cannot be held 
              responsible for lost, stolen, or damaged personal belongings.
            </p>

            <h2 className="text-2xl font-bold text-amber-900 mb-4">10. Liability</h2>
            <p className="text-gray-700 mb-6">
              The Hawthorn's liability is limited to the extent permitted by law. We are not liable for any 
              indirect, consequential, or special damages arising from your visit.
            </p>

            <h2 className="text-2xl font-bold text-amber-900 mb-4">11. Photography and Media</h2>
            <p className="text-gray-700 mb-6">
              By visiting The Hawthorn, you consent to being photographed or recorded for promotional purposes. 
              If you do not wish to be included, please inform a member of staff.
            </p>

            <h2 className="text-2xl font-bold text-amber-900 mb-4">12. Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective 
              immediately upon posting on our website.
            </p>

            <h2 className="text-2xl font-bold text-amber-900 mb-4">13. Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms and Conditions are governed by the laws of the Isle of Man. Any disputes shall be 
              subject to the exclusive jurisdiction of the Isle of Man courts.
            </p>

            <h2 className="text-2xl font-bold text-amber-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
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
