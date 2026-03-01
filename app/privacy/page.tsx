import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SSSK Environmental Services",
  description:
    "Our commitment to protecting your personal information in compliance with POPIA.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl text-foreground">
        <h1 className="font-display text-4xl font-bold text-primary mb-8 uppercase">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-sm md:text-base leading-relaxed">
          <p className="italic text-foreground-muted">
            Last Updated: March 2026
          </p>

          <section>
            <h2 className="text-2xl font-bold text-secondary uppercase mb-4">
              1. Introduction
            </h2>
            <p>
              SSSK Environmental Services ("we," "us," or "our") respects your
              privacy and is committed to protecting your personal information.
              This policy describes how we collect, use, and process your data
              in compliance with the{" "}
              <strong>Protection of Personal Information Act (POPIA)</strong> of
              South Africa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary uppercase mb-4">
              2. Information We Collect
            </h2>
            <p>
              We collect information that you provide directly to us through our
              contact forms, quote requests, and emergency hotline. This
              includes:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Identity Data:</strong> Full name and company name.
              </li>
              <li>
                <strong>Contact Data:</strong> Email address, phone number, and
                physical site locations.
              </li>
              <li>
                <strong>Technical Data:</strong> IP addresses and site usage
                behavior (via cookies).
              </li>
              <li>
                <strong>Service Data:</strong> Details about spill incidents or
                waste management requirements.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary uppercase mb-4">
              3. Legal Basis for Processing
            </h2>
            <p>Under POPIA, we process your information because:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                It is necessary for the{" "}
                <strong>performance of a contract</strong> (e.g., responding to
                a spill).
              </li>
              <li>
                It is required for <strong>legal compliance</strong> (e.g.,
                reporting under NEMA Section 30).
              </li>
              <li>
                You have provided <strong>explicit consent</strong> via our
                digital forms.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary uppercase mb-4">
              4. Data Sharing and Security
            </h2>
            <p>
              We do not sell your data. We only share information with third
              parties (such as laboratories or regulatory bodies) when strictly
              necessary for service delivery or legal reporting. We employ
              industry-standard encryption and access controls to secure your
              data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary uppercase mb-4">
              5. Your Rights
            </h2>
            <p>
              You have the right to request access to the personal information
              we hold, request corrections, or ask for the deletion of your
              data, subject to legal retention requirements.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
