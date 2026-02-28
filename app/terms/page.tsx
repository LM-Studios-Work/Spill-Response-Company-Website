

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for SSSK Environmental Services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-lg text-gray-700 mb-4">
          This is a placeholder terms of service. Replace this content with your actual terms.
        </p>
        {/* Add your terms of service content here */}
      </main>
      <Footer />
    </>
  );
}
