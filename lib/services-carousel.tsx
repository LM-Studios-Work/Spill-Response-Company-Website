"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Emergency Spill Response",
    description:
      "24/7 rapid mobilization for hazardous spills across road, rail, and industrial sites.",
    icon: "emergency",
    image: "/hero1.webp",
    href: "/emergency-spill-response",
  },
  {
    title: "Pollution Control",
    description:
      "Science-based site remediation and contaminated land restoration services.",
    icon: "spa",
    image: "/pollution.jpg?height=300&width=400",
    href: "/pollution-control",
  },
  {
    title: "Waste Management",
    description:
      "Integrated waste disposal solutions for hazardous and general waste streams.",
    icon: "delete",
    image: "/waste.jpg?height=300&width=400",
    href: "/waste-management",
  },
  {
    title: "Environmental Assessments",
    description:
      "NEMA compliance reporting and environmental impact assessments.",
    icon: "assignment",
    image: "/environment.webp?height=300&width=400",
    href: "/environmental-assessments",
  },
  {
    title: "Spill Kit Products",
    description:
      "Industrial spill kits and containment products for rapid response.",
    icon: "inventory_2",
    image: "/spillkit.webp",
    href: "/products",
  },
  {
    title: "Training Services",
    description:
      "Professional spill response training and environmental awareness programs.",
    icon: "school",
    image: "/training.webp?height=300&width=400",
    href: "/training",
  },
];

// Duplicate services for infinite loop effect
const infiniteServices = [...services, ...services, ...services];

export function ServicesCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  // We use a ref for the timeout so it persists across renders without triggering re-renders
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Set initial scroll position to middle set
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const cardWidth = container.scrollWidth / infiniteServices.length;
      const initialScroll = cardWidth * services.length;

      // Use 'auto' behavior for instant setup
      container.scrollTo({ left: initialScroll, behavior: "auto" });
    }
  }, []);

  const handleScroll = () => {
    if (!containerRef.current) return;

    // Clear the existing timeout (this is the debounce magic)
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    // Set a new timeout. We only check for the "loop" when the user
    // STOPS scrolling (momentum ends).
    scrollTimeout.current = setTimeout(() => {
      checkScrollPosition();
    }, 150); // 150ms pause implies scrolling has finished/snapped
  };

  const checkScrollPosition = () => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = container.scrollWidth / infiniteServices.length;
    const scrollLeft = container.scrollLeft;

    // Calculate boundaries based on the total width
    // We want to reset if we are inside the FIRST set or the LAST set
    const singleSetWidth = cardWidth * services.length;

    // Boundary 1: If we are in the first set (too far left)
    if (scrollLeft < singleSetWidth / 2) {
      const newPos = scrollLeft + singleSetWidth;
      container.scrollTo({ left: newPos, behavior: "auto" }); // "auto" is crucial for instant/invisible jump
    }

    // Boundary 2: If we are in the last set (too far right)
    else if (scrollLeft >= singleSetWidth * 2.5) {
      const newPos = scrollLeft - singleSetWidth;
      container.scrollTo({ left: newPos, behavior: "auto" });
    }
  };

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = container.scrollWidth / infiniteServices.length;
    // Scroll one card width exactly for better UX
    const scrollAmount = cardWidth;

    const newPosition =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12 md:py-16 bg-background relative">
      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-primary rounded-full shadow-xl items-center justify-center text-white hover:bg-secondary transition-all hover:scale-110 opacity-0 group-hover:opacity-100"
          aria-label="Previous services"
        >
          <span className="material-icons text-3xl">chevron_left</span>
        </button>

        {/* Scrollable Container */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          /* Key CSS Change: 
             1. scroll-smooth is REMOVED from the class list here. 
                We handle smoothness in the button click handler. 
                Native touch scrolling is naturally smooth.
             2. snap-mandatory changed to snap-x for slightly less aggressive behavior,
                though mandatory is okay with the JS fix above.
          */
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 py-4 snap-x snap-mandatory touch-pan-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {infiniteServices.map((service, index) => (
            <Link
              key={`${service.href}-${index}`}
              href={service.href}
              className="snap-center group block flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw]"
            >
              <div className="relative h-64 md:h-72 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary">
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                </div>

                <div className="relative h-full flex flex-col justify-between p-6 text-white">
                  <div>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-3 group-hover:scale-110 transition-transform">
                      <span className="material-icons text-2xl text-white">
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold mb-2 uppercase">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-200 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center text-sm font-bold text-accent group-hover:translate-x-2 transition-transform">
                    Learn More
                    <span className="material-icons ml-2 text-lg">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-primary rounded-full shadow-xl items-center justify-center text-white hover:bg-secondary transition-all hover:scale-110 opacity-0 group-hover:opacity-100"
          aria-label="Next services"
        >
          <span className="material-icons text-3xl">chevron_right</span>
        </button>
      </div>
    </section>
  );
}
