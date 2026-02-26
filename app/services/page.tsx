import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | SSSK Environmental Services",
  description:
    "Explore our comprehensive environmental services, including emergency spill response, pollution control, waste management, environmental assessments, and training.",
  keywords: [
    "environmental services",
    "spill response",
    "pollution control",
    "waste management",
    "environmental assessments",
    "training",
  ],
  openGraph: {
    title: "Our Services | SSSK Environmental Services",
    description: "Comprehensive environmental solutions for a safer tomorrow.",
    url: "https://sssksolutions.co.za/services",
    type: "website",
  },
};

const services = [
  {
    title: "Emergency Spill Response",
    description: "24/7 complianceponse to hazardous material spills.",
    link: "/emergency-spill-response",
  },
  {
    title: "Pollution Control & Remediation",
    description: "Restoring contaminated land and water resources.",
    link: "/pollution-control",
  },
  {
    title: "Waste Management",
    description: "Integrated solutions for industrial and hazardous waste.",
    link: "/waste-management",
  },
  {
    title: "Environmental Assessments",
    description: "NEMA compliance reporting and impact assessments.",
    link: "/environmental-assessments",
  },
  {
    title: "Spill Kit & Environmental Training",
    description: "Equipping your team to handle and prevent spills.",
    link: "/training",
  },
  {
    title: "Products",
    description: "A wide range of spill kits and environmental products.",
    link: "/products",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link href={service.link} key={service.title}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
