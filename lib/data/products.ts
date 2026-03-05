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
    id: "a1",
    slug: "chemical-absorbent-mat-rolls",
    name: "Chemical Absorbent Mat Rolls",
    category: "Absorbents",
    image: "/Products/Absorbants/Chemical Absorbent Mat Rolls.webp",
    shortDescription: "Heavy-duty chemical absorbent mat rolls for aggressive chemical and solvent spills.",
    longDescription: "Our Chemical Absorbent Mat Rolls are engineered to handle a wide range of hazardous chemicals, acids, and solvents. The meltblown polypropylene construction makes them resistant to most aggressive fluids while providing superior absorption capacity. Ideal for use in chemical plants, laboratories, and industrial workshops.",
    specifications: [
      { label: "Application", value: "Chemicals, Acids, Solvents, Coolants" },
      { label: "Material", value: "Meltblown Polypropylene" },
      { label: "Format", value: "Roll" },
      { label: "Colour", value: "Pink / Grey" }
    ],
    features: [
      "Resists a broad range of aggressive chemicals and solvents",
      "High absorption capacity per roll",
      "Easy to cut and tear to required size",
      "Suitable for use in chemical storage and laboratory areas"
    ]
  },
  {
    id: "a2",
    slug: "oil-only-absorbent-pillow",
    name: "Oil Only Absorbent Pillow",
    category: "Absorbents",
    image: "/Products/Absorbants/Oil only absorbant pillow.webp",
    shortDescription: "Hydrophobic absorbent pillow that absorbs oil and repels water — ideal for wet environments.",
    longDescription: "The Oil Only Absorbent Pillow uses hydrophobic polypropylene fibres to selectively absorb hydrocarbons while repelling water. Perfect for use in sumps, bilges, drains, and any environment where water is present alongside oil or fuel. The pillow shape allows it to sit in corners or tight spaces where flat pads cannot reach.",
    specifications: [
      { label: "Application", value: "Oil, Fuel, Hydraulic Fluid" },
      { label: "Material", value: "Hydrophobic Polypropylene" },
      { label: "Colour", value: "White" },
      { label: "Usage", value: "Sumps, Drains, Bilges" }
    ],
    features: [
      "Absorbs oil and fuels while repelling water",
      "Floats on water surface to target hydrocarbon slicks",
      "Ideal for sumps, bilges, and outdoor drains",
      "Durable outer skin prevents tearing during use"
    ]
  },
  {
    id: "a3",
    slug: "spill-pillow-1x1m",
    name: "Spill Pillow 1m x 1m (with Rope & Liner)",
    category: "Absorbents",
    image: "/Products/Absorbants/SpillPillow_1x1m with rope and plastic liner.webp",
    shortDescription: "Large-format 1m x 1m spill pillow with retrieval rope and plastic liner for major spill containment.",
    longDescription: "Designed for large industrial spills, this 1m x 1m Spill Pillow offers high-volume absorption in a single unit. It comes complete with a plastic liner to prevent leaching and a retrieval rope for safe recovery from sumps, pits, and drainage channels without direct contact. A practical and safe solution for major spill response.",
    specifications: [
      { label: "Dimensions", value: "1m x 1m" },
      { label: "Includes", value: "Plastic Liner & Retrieval Rope" },
      { label: "Application", value: "Universal — Oil, Chemical, Coolant" },
      { label: "Material", value: "Polypropylene Fill" }
    ],
    features: [
      "Large 1m x 1m coverage for major spills",
      "Retrieval rope allows safe hands-free recovery",
      "Plastic liner prevents fluid leaching into surrounding area",
      "Suitable for sump pits, drains, and containment bays"
    ]
  },
  {
    id: "a4",
    slug: "universal-absorbent-roll-heavy-duty",
    name: "Universal Absorbent Roll (Heavy Duty)",
    category: "Absorbents",
    image: "/Products/Absorbants/Universal-absorbent-roll-heavy-ARUH30150.webp",
    shortDescription: "Heavy-duty universal absorbent roll for oils, coolants, water, and mild chemicals.",
    longDescription: "The Universal Absorbent Roll (Heavy Duty) is the go-to consumable for industrial maintenance. Its extra-thick construction delivers excellent absorption for oils, coolants, water, and mild chemicals. Available on a perforated roll, it can be torn to the exact length needed — reducing waste and ensuring you only use what you need.",
    specifications: [
      { label: "Application", value: "Universal — Oil, Water, Coolant, Mild Chemical" },
      { label: "Format", value: "Perforated Roll" },
      { label: "Grade", value: "Heavy Duty" },
      { label: "Colour", value: "Grey" }
    ],
    features: [
      "Heavy-duty grade for high-volume spills",
      "Perforated roll — tear to the length required",
      "Absorbs oils, coolants, water, and mild chemicals",
      "Grey colour hides contamination, extending usable life"
    ]
  },
  {
    id: "a5",
    slug: "universal-absorbent-pads",
    name: "Universal Absorbent Pads",
    category: "Absorbents",
    image: "/Products/Absorbants/universal absorbent pads.webp",
    shortDescription: "Versatile absorbent pads for everyday spill control of oils, coolants, and water-based fluids.",
    longDescription: "Universal Absorbent Pads are an essential item in any spill kit or maintenance workshop. They absorb virtually all industrial fluids — oils, coolants, solvents, and water — making them the most versatile absorbent product available. Their dimpled surface wicks fluids rapidly while the outer layer holds absorbed fluid securely, preventing drips during disposal.",
    specifications: [
      { label: "Application", value: "Universal — Oil, Water, Coolant, Chemical" },
      { label: "Material", value: "Meltblown Polypropylene" },
      { label: "Colour", value: "Grey" },
      { label: "Format", value: "Flat Pad / Bale" }
    ],
    features: [
      "Absorbs all common industrial fluids",
      "Dimpled surface for rapid fluid wicking",
      "Secure outer layer prevents drips during handling and disposal",
      "Suitable for spill kits, workshops, and general maintenance"
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter(p => p.category === category);
}
