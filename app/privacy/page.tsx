import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Privacy Policy — Monecuer Inc." };

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="section container-xl pt-28 pb-20 max-w-4xl mx-auto">
        <h1 className="h1">Privacy Policy</h1>
        <p className="p mt-4 text-gray-600">
          This Privacy Policy explains how Monecuer Inc. (“Monecuer”, “we”, “our”, or “us”)
          collects, uses, shares, and protects your information when you use our websites,
          apps, and digital services. By using our products, you agree to the terms described below.
        </p>

        {/* SECTION 1 */}
        <section className="mt-10">
          <h2 className="h2 text-xl font-semibold mb-3">1. Information We Collect</h2>
          <p className="p text-gray-700 mb-3">
            We collect information to deliver and improve our services. The information we collect
            depends on how you interact with us, the products you use, and the choices you make,
            including your privacy settings. Information we may collect includes:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Personal Information:</strong> such as your name, email address, phone number, and billing details when you sign up or purchase a service.</li>
            <li><strong>Account Data:</strong> login credentials, security preferences, and authentication tokens.</li>
            <li><strong>Usage Data:</strong> information about how you use our websites, applications, and digital tools.</li>
            <li><strong>Device Data:</strong> IP address, browser type, operating system, and device identifiers.</li>
            <li><strong>Communications:</strong> messages you send to us via chat, email, or forms for support or inquiries.</li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section className="mt-10">
          <h2 className="h2 text-xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p className="p text-gray-700 mb-3">
            We use the collected data responsibly and only for legitimate business purposes,
            such as:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Providing, maintaining, and improving our products and services.</li>
            <li>Personalizing user experiences and recommending relevant solutions.</li>
            <li>Communicating updates, technical notices, and security alerts.</li>
            <li>Processing transactions, invoices, and payment confirmations.</li>
            <li>Detecting, preventing, and addressing security or fraud concerns.</li>
            <li>Complying with applicable laws, legal requests, and government regulations.</li>
          </ul>
        </section>

        {/* SECTION 3 */}
        <section className="mt-10">
          <h2 className="h2 text-xl font-semibold mb-3">3. Data Storage & Security</h2>
          <p className="p text-gray-700">
            Monecuer employs industry-standard encryption, cloud storage, and security practices
            to protect your personal information against unauthorized access, alteration,
            disclosure, or destruction. While we continuously strengthen our systems, no digital
            platform can guarantee absolute security. You are encouraged to use strong passwords
            and keep your login credentials confidential.
          </p>
        </section>

        {/* SECTION 4 */}
        <section className="mt-10">
          <h2 className="h2 text-xl font-semibold mb-3">4. Data Retention</h2>
          <p className="p text-gray-700">
            We retain personal information only as long as it is necessary to provide our services,
            comply with legal obligations, resolve disputes, and enforce our agreements. When your
            data is no longer needed, we securely delete or anonymize it.
          </p>
        </section>

        {/* SECTION 5 */}
        <section className="mt-10">
          <h2 className="h2 text-xl font-semibold mb-3">5. Sharing & Disclosure</h2>
          <p className="p text-gray-700 mb-3">
            We do not sell or rent your personal information. However, we may share limited data
            in the following cases:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>With trusted service providers who process data on our behalf (e.g., hosting, analytics, payment processing).</li>
            <li>When required by law or to respond to valid legal processes.</li>
            <li>To protect our users, prevent fraud, or ensure the safety of our services.</li>
            <li>During mergers, acquisitions, or company restructuring — users will be notified in advance.</li>
          </ul>
        </section>

        {/* SECTION 6 */}
        <section className="mt-10">
          <h2 className="h2 text-xl font-semibold mb-3">6. Cookies & Tracking Technologies</h2>
          <p className="p text-gray-700">
            We use cookies and similar technologies to improve website performance, analyze
            traffic, and remember user preferences. You can control or disable cookies through
            your browser settings; however, some site features may not function properly
            without them.
          </p>
        </section>

        {/* SECTION 7 */}
        <section className="mt-10">
          <h2 className="h2 text-xl font-semibold mb-3">7. Your Rights</h2>
          <p className="p text-gray-700 mb-3">
            Depending on your location, you may have the following rights regarding your
            personal data:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Access the data we hold about you.</li>
            <li>Request correction of inaccurate or incomplete data.</li>
            <li>Request deletion of your personal data (“Right to be Forgotten”).</li>
            <li>Withdraw consent where processing is based on consent.</li>
            <li>Object to certain types of processing or request data portability.</li>
          </ul>
          <p className="p text-gray-700 mt-3">
            To exercise any of these rights, please contact us using the details provided below.
          </p>
        </section>

        {/* SECTION 8 */}
        <section className="mt-10">
          <h2 className="h2 text-xl font-semibold mb-3">8. International Data Transfers</h2>
          <p className="p text-gray-700">
            Monecuer operates globally. Your information may be processed in countries outside
            your own. When transferring data internationally, we ensure appropriate safeguards
            (such as encryption and standard contractual clauses) are in place to protect your
            information.
          </p>
        </section>

        {/* SECTION 9 */}
        <section className="mt-10">
          <h2 className="h2 text-xl font-semibold mb-3">9. Children’s Privacy</h2>
          <p className="p text-gray-700">
            Our services are not directed to individuals under the age of 13. We do not knowingly
            collect personal information from children. If you believe a child has provided us
            with personal data, please contact us immediately for deletion.
          </p>
        </section>

        {/* SECTION 10 */}
        <section className="mt-10">
          <h2 className="h2 text-xl font-semibold mb-3">10. Updates to This Policy</h2>
          <p className="p text-gray-700">
            We may update this Privacy Policy from time to time to reflect changes in technology,
            law, or our practices. The “Last Updated” date at the bottom of this page indicates
            the latest revision. Continued use of our services signifies your acceptance of
            any changes.
          </p>
        </section>

        {/* SECTION 11 */}
        <section className="mt-10">
          <h2 className="h2 text-xl font-semibold mb-3">11. Contact Us</h2>
          <p className="p text-gray-700">
            If you have questions, requests, or concerns about this Privacy Policy, please contact us:
          </p>
          <p className="p text-gray-700 mt-3">
            <strong>Monecuer Inc.</strong><br />
            Harare, Zimbabwe<br />
            Email: <a href="mailto:monecuerinc@gmail.com" className="text-blue-600 hover:underline">monecuerinc@gmail.com</a><br />
            WhatsApp: <a href="https://wa.me/263782286544" className="text-blue-600 hover:underline">+263 782 286 544</a>
          </p>
        </section>

        <p className="text-xs text-gray-500 mt-10 text-center">
          Last Updated: October 2025 — © {new Date().getFullYear()} Monecuer Inc. All rights reserved.
        </p>
      </main>
      <Footer />
    </>
  );
}
