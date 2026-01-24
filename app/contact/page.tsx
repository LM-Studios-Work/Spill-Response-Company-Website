import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHeroSection } from "@/components/contact/hero-section"
import { ContactFormSection } from "@/components/contact/form-section"
import { EmergencyBanner } from "@/components/contact/emergency-banner"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact SSSK Environmental Services | 24/7 Emergency Hotline",
  description:
    "Get in touch with SSSK Environmental Services. Contact us for emergency spill response, quotes, or inquiries. Available 24/7 at 071 788 1312",
  keywords: [
    "contact us",
    "emergency hotline",
    "spill response contact",
    "environmental services contact",
  ],
  openGraph: {
    title: "Contact SSSK Environmental Services",
    description: "24/7 emergency hotline and contact information",
    url: "https://sssksolutions.co.za/contact",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ContactHeroSection />
        <ContactFormSection />
        <EmergencyBanner />
      </main>
      <Footer />
    </div>
  )
}
