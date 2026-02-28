

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for SSSK Environmental Services.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
        <p className="text-lg text-gray-700 mb-4">
          This is a placeholder cookie policy. Replace this content with your actual cookie policy details.
        </p>
        {/* Add your cookie policy content here */}
      </main>
      <Footer />
    </>
  );
}
