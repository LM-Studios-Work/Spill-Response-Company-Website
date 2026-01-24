import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductsHeroSection } from "@/components/products/hero-section";
import { SpillKitsSection } from "@/components/products/spill-kits-section";
import { AbsorbentsSection } from "@/components/products/absorbents-section";
import { CleaningProductsSection } from "@/components/products/cleaning-products-section";
import { TrainingSection } from "@/components/products/training-section";
import { ProductsCtaBanner } from "@/components/products/cta-banner";
import { ServicesCarousel } from "@/lib/services-carousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Spill Kits & Containment Products | SSSK Environmental Services",
  description:
    "Field-proven spill control solutions including mobile spill kits, absorbents, and bio-remediation agents. Fast-acting, economical, and compliant with environmental regulations.",
  keywords: [
    "spill kits",
    "absorbent products",
    "spill containment",
    "industrial supplies",
    "environmental products",
    "hazmat supplies",
  ],
  openGraph: {
    title: "Industrial Spill Kits & Containment Products",
    description: "Premium spill response and containment products",
    url: "https://sssksolutions.co.za/products",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <ProductsHeroSection />
        <SpillKitsSection />
        <AbsorbentsSection />
        <CleaningProductsSection />
        <TrainingSection />
        <ProductsCtaBanner />
        <ServicesCarousel />
      </main>
      <Footer />
    </>
  );
}
