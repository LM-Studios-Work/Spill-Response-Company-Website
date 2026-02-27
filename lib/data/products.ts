export type ProductCategory = "Spill Kits" | "Absorbents" | "Containment" | "Safety & PPE";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  image: string;
  shortDescription: string;
  longDescription: string;
  specifications: { label: string; value: string }[];
  features: string[];
}

export const products: Product[] = [
  {
    id: "p1",
    slug: "20l-vehicle-spill-kit",
    name: "20L Vehicle Spill Kit",
    category: "Spill Kits",
    image: "/images/placeholders/spill-kit-20l.jpg", // Using placeholders
    shortDescription: "Compact 20L spill kit ideal for trucks and light commercial vehicles.",
    longDescription: "The 20L Vehicle Spill Kit is designed for quick response to minor hydrocarbon or chemical spills. Its compact zipper bag makes it easy to store behind the seat or in the trunk of a vehicle, ensuring you are always prepared for an emergency leak or spill.",
    specifications: [
      { label: "Absorption Capacity", value: "20 Liters" },
      { label: "Application", value: "Oil / Fuel / Universal" },
      { label: "Container", value: "High-Visibility Zipper Bag" },
      { label: "Weight", value: "3.5 kg" }
    ],
    features: [
      "Compact design fits in most vehicles",
      "High-visibility safety yellow bag",
      "Includes absorbent pads, socks, and disposal bags",
      "Fast-acting particulate absorbents"
    ]
  },
  {
    id: "p2",
    slug: "240l-mobile-spill-kit",
    name: "240L Mobile Spill Kit",
    category: "Spill Kits",
    image: "/images/placeholders/spill-kit-240l.jpg",
    shortDescription: "High-capacity mobile wheelie bin spill kit for factories and workshops.",
    longDescription: "Our 240L Mobile Spill Kit provides a comprehensive response to medium-to-large spills in industrial environments. Housed in a durable, easy-to-move wheelie bin, it contains a variety of absorbents handling oil, coolant, and mild chemical spills.",
    specifications: [
      { label: "Absorption Capacity", value: "240 Liters" },
      { label: "Application", value: "Universal / Oil-Only options" },
      { label: "Container", value: "240L Wheelie Bin" },
      { label: "Weight", value: "45 kg" }
    ],
    features: [
      "Easily mobile on durable wheels",
      "Weather-proof container",
      "Includes high-volume absorbent booms and pillows",
      "PPE included for safe responder handling"
    ]
  },
  {
    id: "p3",
    slug: "oil-absorbent-pads",
    name: "Oil Absorbent Pads (Pack of 100)",
    category: "Absorbents",
    image: "/images/placeholders/absorbent-pads.jpg",
    shortDescription: "Fast-wicking, highly absorbent pads for targeted oil and fuel spills.",
    longDescription: "These premium oil-absorbent pads are hydrophobic, meaning they will absorb oil and repel water, making them perfect for marine or wet-weather applications. They are perforated for easy tearing to use only what you need.",
    specifications: [
      { label: "Dimensions", value: "40cm x 50cm" },
      { label: "Quantity", value: "100 Pads / Bale" },
      { label: "Absorption Capacity", value: "up to 120L per bale" },
      { label: "Material", value: "Meltblown Polypropylene" }
    ],
    features: [
      "Floats on water to absorb oil",
      "Dimpled pattern for faster wicking",
      "Perforated down the center",
      "Bright white color makes absorbed oil visible"
    ]
  },
  {
    id: "p4",
    slug: "4-drum-spill-pallet",
    name: "4-Drum Spill Pallet",
    category: "Containment",
    image: "/images/placeholders/spill-pallet.jpg",
    shortDescription: "Heavy-duty spill pallet for safe storage of up to four 210L drums.",
    longDescription: "Ensure EPA and local environmental compliance with our 4-Drum Spill Pallet. Constructed from high-density polyethylene (HDPE), it resists harsh chemicals and rust while capturing leaks and drips from stored drums.",
    specifications: [
      { label: "Sump Capacity", value: "250 Liters" },
      { label: "Load Capacity", value: "3000 kg (UDL)" },
      { label: "Dimensions", value: "1280mm x 1280mm x 275mm" },
      { label: "Material", value: "100% Recyclable Polyethylene" }
    ],
    features: [
      "Removable grates for easy cleaning",
      "Forklift pockets for safe positioning (when empty)",
      "UV-resistant for outdoor storage",
      "Exceeds environmental secondary containment regulations"
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter(p => p.category === category);
}
