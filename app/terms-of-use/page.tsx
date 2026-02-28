import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | SSSK Environmental Services",
  description:
    "Terms of Use for SSSK Environmental Services. Read our terms and conditions for using our site and services.",
  alternates: {
    canonical: "https://sssksolutions.co.za/terms-of-use",
  },
  openGraph: {
    title: "Terms of Use | SSSK Environmental Services",
    description: "Terms of Use for SSSK Environmental Services.",
    url: "https://sssksolutions.co.za/terms-of-use",
    type: "website",
  },
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-12 sm:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h1 className="text-3xl sm:text-4xl font-display font-bold mb-6 text-primary">
              Terms of Use
            </h1>
            <p className="text-gray-600 mb-8 italic">
              Last Updated: February 27, 2026
            </p>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              <section>
                <p className="mb-4">
                  Welcome to SSSK Environmental Services. By accessing our Site
                  at{" "}
                  <a
                    href="https://sssksolutions.co.za"
                    className="text-primary hover:underline"
                  >
                    https://sssksolutions.co.za
                  </a>
                  , you agree to comply with the following terms and conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold mb-4 text-gray-800">
                  1. Professional Services Disclaimer
                </h2>
                <p>
                  The information provided on this Site regarding emergency spill
                  response, hazmat remediation, and pollution control is for
                  general informational purposes only. While we strive for
                  accuracy, environmental situations are dynamic; professional
                  consultation is required for specific hazardous material
                  incidents.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold mb-4 text-gray-800">
                  2. Intellectual Property
                </h2>
                <p>
                  All content, including the SSSK Environmental Services logo
                  and "Protecting Today. Preserving Tomorrow" slogan, is the
                  property of SSSK Environmental Services. Unauthorized use of
                  our brand assets is prohibited.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold mb-4 text-gray-800">
                  3. User Conduct
                </h2>
                <p className="mb-4">Users are prohibited from:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Using the contact forms or emergency hotline for fraudulent
                    purposes.
                  </li>
                  <li>Attempting to interfere with the Site's security features.</li>
                  <li>
                    Misrepresenting their affiliation with NEMA compliance or
                    other regulatory standards.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold mb-4 text-gray-800">
                  4. Limitation of Liability
                </h2>
                <p>
                  SSSK Environmental Services is not liable for any damages
                  resulting from the use or inability to use the materials on
                  this Site. Our liability regarding professional environmental
                  services is governed by individual service contracts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold mb-4 text-gray-800">
                  5. Governing Law
                </h2>
                <p>
                  These terms are governed by and construed in accordance with
                  the laws of the Republic of South Africa.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold mb-4 text-gray-800">
                  6. Contact Information
                </h2>
                <p className="mb-4">SSSK Environmental Services</p>
                <p className="mb-2">
                  123 Industrial Park Drive, Kempton Park, 1619
                </p>
                <p>
                  <strong>Emergency Hotline:</strong>{" "}
                  <a
                    href="tel:0717881312"
                    className="text-primary hover:underline"
                  >
                    071 788 1312
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
