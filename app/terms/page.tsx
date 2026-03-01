import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | SSSK Environmental Services",
  description:
    "Terms and conditions governing the use of our website and services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl text-foreground">
        <h1 className="font-display text-4xl font-bold text-primary mb-8 uppercase">
          Terms of Service
        </h1>
        <div className="space-y-6 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-secondary uppercase mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, you accept and agree to be
              bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary uppercase mb-4">
              2. Emergency Service Disclaimer
            </h2>
            <p>
              The 24/7 Emergency Hotline is intended for reporting hazardous
              spills. While SSSK Environmental Services strives for rapid
              mobilization, response times are subject to traffic, location
              accessibility, and incident severity. Use of the hotline
              constitutes a request for professional intervention, which may
              incur costs as per our standard rates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary uppercase mb-4">
              3. Regulatory Compliance
            </h2>
            <p>
              Users are reminded that under <strong>Section 30 of NEMA</strong>,
              responsible parties must report incidents to relevant authorities.
              Our services assist in this compliance, but the ultimate legal
              responsibility remains with the polluter or land owner as defined
              by South African law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary uppercase mb-4">
              4. Intellectual Property
            </h2>
            <p>
              The content, organization, graphics, and logos on this site are
              the property of SSSK Environmental Services. Unauthorized copying
              or redistribution is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary uppercase mb-4">
              5. Governing Law
            </h2>
            <p>
              These terms are governed by and construed in accordance with the
              laws of the <strong>Republic of South Africa</strong>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
