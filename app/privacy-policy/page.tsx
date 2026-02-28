import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SSSK Environmental Services",
  description:
    "Privacy Policy for SSSK Environmental Services. Learn how we collect, use, and safeguard your data.",
  alternates: {
    canonical: "https://sssksolutions.co.za/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | SSSK Environmental Services",
    description: "Privacy Policy for SSSK Environmental Services.",
    url: "https://sssksolutions.co.za/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-12 sm:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h1 className="text-3xl sm:text-4xl font-display font-bold mb-6 text-primary">
              Privacy Policy
            </h1>
            <p className="text-gray-600 mb-8 italic">
              Last Updated: February 27, 2026
            </p>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              <section>
                <p className="mb-4">
                  SSSK Environmental Services ("we," "us," or "our") is
                  committed to protecting the privacy and security of your
                  personal information. This Privacy Policy describes how we
                  collect, use, and safeguard your data when you visit{" "}
                  <a
                    href="https://sssksolutions.co.za"
                    className="text-primary hover:underline"
                  >
                    https://sssksolutions.co.za
                  </a>{" "}
                  (the "Site") or utilize our environmental protection and
                  remediation services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold mb-4 text-gray-800">
                  Information We Collect
                </h2>
                <p className="mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Contact Information:</strong> Your name, email
                    address (e.g., info@sssksolutions.co.za), phone number
                    (e.g., 071 788 1312), and physical address.
                  </li>
                  <li>
                    <strong>Service Data:</strong> Information related to
                    requests for spill response, pollution control, waste
                    management, environmental assessments, or training services.
                  </li>
                  <li>
                    <strong>Technical Data:</strong> IP addresses, browser
                    types, and usage patterns collected via Vercel Analytics and
                    other standard tracking technologies.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold mb-4 text-gray-800">
                  How We Use Your Information
                </h2>
                <p className="mb-4">Your information is used to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Facilitate 24/7 emergency response and hazardous material
                    remediation.
                  </li>
                  <li>
                    Process service inquiries and provide professional
                    environmental consulting.
                  </li>
                  <li>
                    Ensure compliance with NEMA (National Environmental
                    Management Act) and other South African environmental
                    regulations.
                  </li>
                  <li>Maintain the security and functionality of our Site.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold mb-4 text-gray-800">
                  Third-Party Services
                </h2>
                <p>
                  We utilize Vercel Analytics to monitor Site traffic and
                  improve user experience. We do not sell your personal data to
                  third parties. Data may be shared with regulatory bodies only
                  when required by South African law to ensure environmental
                  compliance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold mb-4 text-gray-800">
                  Contact Details
                </h2>
                <p className="mb-4">
                  For any privacy-related inquiries, please contact us:
                </p>
                <ul className="space-y-2">
                  <li>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:info@sssksolutions.co.za"
                      className="text-primary hover:underline"
                    >
                      info@sssksolutions.co.za
                    </a>
                  </li>
                  <li>
                    <strong>Phone:</strong>{" "}
                    <a
                      href="tel:+27717881312"
                      className="text-primary hover:underline"
                    >
                      +27 71 788 1312
                    </a>
                  </li>
                  <li>
                    <strong>Address:</strong> 123 Industrial Park Drive, Kempton
                    Park, 1619, South Africa
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
