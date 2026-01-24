"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Data structure for cleaner rendering
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About SSSK", href: "/about" },
];

const SERVICE_LINKS = [
  { label: "Emergency Spill Response", href: "/emergency-spill-response" },
  { label: "Pollution Control & Remediation", href: "/pollution-control" },
  { label: "Waste Management", href: "/waste-management" },
  { label: "Environmental Assessments", href: "/environmental-assessments" },
  { label: "Spill Kit Training", href: "/training" },
];

const OTHER_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-card shadow-md h-[72px] lg:h-[88px]">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* --- LOGO --- */}
        <Link href="/" className="flex items-center shrink-0 relative z-50">
          {/* Responsive container for the logo */}
          <div className="relative w-32 h-10 lg:w-44 lg:h-12 transition-all duration-300">
            <Image
              src="/sssklogo.png"
              alt="SSSK Logo"
              fill
              className="object-contain object-left"
              priority
              sizes="(max-width: 768px) 128px, 176px"
            />
          </div>
        </Link>

        {/* --- DESKTOP NAVIGATION --- */}
        <div className="hidden lg:flex items-center gap-8 ml-auto">
          <nav className="flex items-center space-x-6 xl:space-x-8 font-semibold text-sm uppercase tracking-wide text-foreground">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-primary transition-colors duration-200 ${
                  isActive(link.href) ? "text-primary" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group cursor-pointer h-full flex items-center py-4">
              <span className="flex items-center hover:text-primary transition-colors duration-200">
                Services{" "}
                <span className="material-icons text-sm ml-1">expand_more</span>
              </span>

              {/* Dropdown Menu */}
              <div className="absolute top-full -left-4 pt-2 w-72 hidden group-hover:block z-50">
                <div className="bg-card shadow-xl rounded-md border border-gray-100 overflow-hidden flex flex-col">
                  {SERVICE_LINKS.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block px-5 py-3 text-sm normal-case border-b border-gray-50 last:border-none hover:bg-gray-50 hover:text-primary transition-colors ${
                        isActive(service.href)
                          ? "text-primary bg-gray-50"
                          : "text-foreground"
                      }`}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {OTHER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-primary transition-colors duration-200 ${
                  isActive(link.href) ? "text-primary" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="tel:0717881312"
            className="flex flex-col items-center justify-center bg-accent hover:bg-yellow-400 text-black px-5 py-2 rounded shadow-lg transform hover:scale-105 transition duration-200 shrink-0"
          >
            <div className="flex items-center space-x-1">
              <span className="text-[10px] font-bold uppercase tracking-wider">
                🚨 24/7 Helpline
              </span>
            </div>
            <span className="font-display font-bold text-lg leading-none mt-0.5">
              071 788 1312
            </span>
          </a>
        </div>

        {/* --- MOBILE HAMBURGER --- */}
        <button
          className="lg:hidden text-foreground p-2 relative z-50 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-icons text-3xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-card transform transition-transform duration-300 ease-in-out pt-[72px] ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto px-6 pb-20 flex flex-col">
          {/* Main Links */}
          <div className="space-y-1 mt-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-4 text-lg font-semibold uppercase border-b border-gray-100 ${
                  isActive(link.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Services Section */}
          <div className="mt-6">
            <h3 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-3">
              Our Services
            </h3>
            <div className="pl-4 border-l-2 border-gray-100 space-y-4">
              {SERVICE_LINKS.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-base font-medium ${
                    isActive(service.href) ? "text-primary" : "text-gray-600"
                  }`}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Other Links */}
          <div className="space-y-1 mt-6">
            {OTHER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-4 text-lg font-semibold uppercase border-b border-gray-100 ${
                  isActive(link.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 mb-8">
            <a
              href="tel:0717881312"
              className="flex items-center justify-center w-full bg-accent text-black py-4 rounded-lg shadow-md font-bold text-lg active:scale-95 transition-transform"
            >
              <span className="mr-2">🚨</span> Call 24/7: 071 788 1312
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
