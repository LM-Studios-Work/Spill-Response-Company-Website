import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-background-dark text-white pt-12 sm:pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl uppercase">
                <Link href="/" className="relative w-28 h-20 block">
                  <Image
                    src="/sssklogo.png"
                    alt="SSSK Environmental Services Logo"
                    fill
                    className="object-contain"
                  />
                </Link>
                SSSK Environmental
              </h2>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-sm text-sm sm:text-base">
              Leading the way in environmental protection and hazardous spill
              remediation. We are committed to safety, compliance, and speed.
            </p>
            <p className="text-lg sm:text-xl font-display italic text-accent">
              &quot;Protecting Today. Preserving Tomorrow.&quot;
            </p>
          </div>

          {/* Navigation and Services side by side */}
          <div className="lg:col-span-2 flex flex-col sm:flex-row justify-between w-full">
            {/* Navigation */}
            <div className="flex-1 min-w-[180px]">
              <h3 className="font-display font-bold text-base sm:text-lg mb-4 uppercase text-gray-300">
                Navigation
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/" className="hover:text-accent transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-accent transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="hover:text-accent transition"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="hover:text-accent transition"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-accent transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* Services */}
            <div className="flex-1 min-w-[180px]">
              <h3 className="font-display font-bold text-base sm:text-lg mb-4 uppercase text-gray-300">
                Services
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link
                    href="/emergency-spill-response"
                    className="hover:text-accent transition"
                  >
                    Spill Response
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pollution-control"
                    className="hover:text-accent transition"
                  >
                    Pollution Control
                  </Link>
                </li>
                <li>
                  <Link
                    href="/waste-management"
                    className="hover:text-accent transition"
                  >
                    Waste Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/environmental-assessments"
                    className="hover:text-accent transition"
                  >
                    Assessments
                  </Link>
                </li>
                <li>
                  <Link
                    href="/training"
                    className="hover:text-accent transition"
                  >
                    Training
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg mb-4 uppercase text-gray-300">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start">
                <span className="material-icons text-accent mr-3 shrink-0">
                  phone
                </span>
                <div>
                  <strong className="block text-white">
                    Emergency Hotline
                  </strong>
                  <a
                    href="tel:0717881312"
                    className="text-accent font-bold hover:underline"
                  >
                    071 788 1312
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-accent mr-3 shrink-0">
                  email
                </span>
                <div>
                  <strong className="block text-white">Email Support</strong>
                  <a
                    href="mailto:info@sssksolutions.co.za"
                    className="hover:text-white transition break-all"
                  >
                    info@sssksolutions.co.za
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-accent mr-3 shrink-0">
                  location_on
                </span>
                <span>
                  123 Industrial Park Drive,
                  <br />
                  Kempton Park, 1619
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p className="text-center sm:text-left">
            © 2026 SSSK Environmental Services. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
