export const metadata = {
  title: "Privacy Policy - The Hawthorn",
  description: "Privacy Policy for The Hawthorn bar & bistro in Greeba, Isle of Man.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-amber-50 to-amber-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Privacy Policy
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
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6">
              The Hawthorn ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, and safeguard your personal information when you visit our establishment 
              or use our services.
            </p>

            <h2 className="text-2xl font-bold text-amber-900 mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Name and contact details (phone number, email address)</li>
              <li>Reservation details (date, time, number of guests)</li>
              <li>Dietary requirements and special requests</li>
              <li>Payment information (processed securely)</li>
            </ul>

            <h2 className="text-2xl font-bold text-amber-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use your personal information to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Process and confirm your reservations</li>
              <li>Accommodate your dietary requirements and special requests</li>
              <li>Communicate with you about your booking</li>
              <li>Improve our services and customer experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-amber-900 mb-4">Data Protection</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely 
              and access is limited to authorized personnel only.
            </p>

            <h2 className="text-2xl font-bold text-amber-900 mb-4">Data Retention</h2>
            <p className="text-gray-700 mb-6">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined 
              in this Privacy Policy, unless a longer retention period is required by law.
            </p>

            <h2 className="text-2xl font-bold text-amber-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="text-2xl font-bold text-amber-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-6">
              We do not sell, trade, or transfer your personal information to third parties without your consent, 
              except as required by law or as necessary to provide our services (e.g., payment processing).
            </p>

            <h2 className="text-2xl font-bold text-amber-900 mb-4">Cookies</h2>
            <p className="text-gray-700 mb-6">
              Our website may use cookies to enhance your browsing experience. You can choose to disable cookies 
              through your browser settings, though this may affect website functionality.
            </p>

            <h2 className="text-2xl font-bold text-amber-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with 
              an updated revision date.
            </p>

            <h2 className="text-2xl font-bold text-amber-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
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
