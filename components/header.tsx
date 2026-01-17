"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-card shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/sssklogo.png"
            alt="SSSK Logo"
            width={160}
            height={48}
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex space-x-6 xl:space-x-8 font-semibold text-sm uppercase tracking-wide text-foreground">
          <Link
            href="/"
            className={`hover:text-primary transition ${
              isActive("/") ? "text-primary" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-primary transition ${
              isActive("/about") ? "text-primary" : ""
            }`}
          >
            About SSSK
          </Link>
          <div className="relative group cursor-pointer">
            <span className="flex items-center hover:text-primary transition">
              Services{" "}
              <span className="material-icons text-sm ml-1">expand_more</span>
            </span>
            <div className="absolute top-full left-0 mt-2 w-64 bg-card shadow-xl rounded-md hidden group-hover:block border border-gray-100">
              <Link
                href="/emergency-spill-response"
                className="block px-4 py-2 hover:bg-gray-50 text-sm normal-case"
              >
                Emergency Spill Response
              </Link>
              <Link
                href="/pollution-control"
                className="block px-4 py-2 hover:bg-gray-50 text-sm normal-case"
              >
                Pollution Control & Remediation
              </Link>
              <Link
                href="/waste-management"
                className="block px-4 py-2 hover:bg-gray-50 text-sm normal-case"
              >
                Waste Management
              </Link>
              <Link
                href="/environmental-assessments"
                className="block px-4 py-2 hover:bg-gray-50 text-sm normal-case"
              >
                Environmental Assessments
              </Link>
              <Link
                href="/training"
                className="block px-4 py-2 hover:bg-gray-50 text-sm normal-case"
              >
                Spill Kit Training
              </Link>
            </div>
          </div>
          <Link
            href="/products"
            className={`hover:text-primary transition ${
              isActive("/products") ? "text-primary" : ""
            }`}
          >
            Products
          </Link>
          <Link
            href="/pricing"
            className={`hover:text-primary transition ${
              isActive("/pricing") ? "text-primary" : ""
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className={`hover:text-primary transition ${
              isActive("/contact") ? "text-primary" : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        <a
          href="tel:0717881312"
          className="hidden md:flex flex-col items-center justify-center bg-accent hover:bg-yellow-400 text-black px-4 lg:px-6 py-2 rounded shadow-lg transform hover:scale-105 transition duration-200"
        >
          <div className="flex items-center space-x-1">
            <span className="text-[10px] lg:text-xs font-bold uppercase tracking-wider">
              🚨 24/7 Helpline
            </span>
          </div>
          <span className="font-display font-bold text-lg lg:text-xl">
            071 788 1312
          </span>
        </a>

        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-icons text-3xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-gray-100 px-4 py-4 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
          <Link
            href="/"
            className={`block py-3 font-semibold uppercase text-sm border-b border-gray-100 ${
              isActive("/") ? "text-primary" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`block py-3 font-semibold uppercase text-sm border-b border-gray-100 ${
              isActive("/about") ? "text-primary" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About SSSK
          </Link>

          {/* Services Section */}
          <div className="py-3 border-b border-gray-100">
            <p className="font-semibold uppercase text-sm text-foreground-muted mb-2">
              Services
            </p>
            <div className="pl-4 space-y-2">
              <Link
                href="/emergency-spill-response"
                className="block py-2 text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Emergency Spill Response
              </Link>
              <Link
                href="/pollution-control"
                className="block py-2 text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pollution Control
              </Link>
              <Link
                href="/waste-management"
                className="block py-2 text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Waste Management
              </Link>
              <Link
                href="/environmental-assessments"
                className="block py-2 text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Environmental Assessments
              </Link>
              <Link
                href="/training"
                className="block py-2 text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Spill Kit Training
              </Link>
            </div>
          </div>

          <Link
            href="/products"
            className={`block py-3 font-semibold uppercase text-sm border-b border-gray-100 ${
              isActive("/products") ? "text-primary" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/pricing"
            className={`block py-3 font-semibold uppercase text-sm border-b border-gray-100 ${
              isActive("/pricing") ? "text-primary" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className={`block py-3 font-semibold uppercase text-sm border-b border-gray-100 ${
              isActive("/contact") ? "text-primary" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>

          <a
            href="tel:0717881312"
            className="block bg-accent text-black text-center py-3 rounded font-bold mt-4"
          >
            🚨 Call: 071 788 1312
          </a>
        </div>
      )}
    </header>
  );
}
