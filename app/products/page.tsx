import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductsHeroSection } from "@/components/products/hero-section";
import { SpillKitsSection } from "@/components/products/spill-kits-section";
import { AbsorbentsSection } from "@/components/products/absorbents-section";
import { CleaningProductsSection } from "@/components/products/cleaning-products-section";
import { TrainingSection } from "@/components/products/training-section";
import { ProductsCtaBanner } from "@/components/products/cta-banner";
import { ServicesCarousel } from "@/lib/services-carousel";

export const metadata = {
  title:
    "Industrial Spill Kits & Containment Products | SSSK Environmental Services",
  description:
    "Field-proven solutions for rapid spill response. Economical, fast-acting, and compliant with environmental regulations.",
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
