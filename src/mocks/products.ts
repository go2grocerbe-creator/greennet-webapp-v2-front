import type { Product } from "@/features/products/product.types";

const solarCategory = {
  id: "category-solar",
  name: "Solar Energy",
  slug: "solar-energy",
} as const;

const storageCategory = {
  id: "category-storage",
  name: "Energy Storage",
  slug: "energy-storage",
} as const;

export const products: Product[] = [
  {
    id: "product-001",
    name: "Residential Solar System",
    slug: "residential-solar-system",
    eyebrow: "Reliable home energy",
    shortDescription:
      "A modular solar solution prepared for clear product storytelling and future backend data.",
    description:
      "This prototype entry demonstrates the content structure for a GreenNet residential energy product. Replace it with approved catalogue copy during content integration.",
    category: solarCategory,
    specifications: [
      { label: "Application", value: "Residential" },
      { label: "Configuration", value: "Modular" },
      { label: "Data status", value: "Prototype content" },
    ],
    featured: true,
  },
  {
    id: "product-002",
    name: "Commercial Solar Platform",
    slug: "commercial-solar-platform",
    eyebrow: "Built for growing operations",
    shortDescription:
      "A scalable product record illustrating catalogue cards, filters and detail-page hierarchy.",
    description:
      "This placeholder keeps the frontend realistic without asserting unapproved technical specifications. The final record will be sourced from the existing GreenNet catalogue.",
    category: solarCategory,
    specifications: [
      { label: "Application", value: "Commercial" },
      { label: "Configuration", value: "Scalable" },
      { label: "Data status", value: "Prototype content" },
    ],
    featured: true,
  },
  {
    id: "product-003",
    name: "Energy Storage Solution",
    slug: "energy-storage-solution",
    eyebrow: "Energy when it matters",
    shortDescription:
      "A flexible storage entry ready to be mapped to the existing product API after approval.",
    description:
      "The storage product record demonstrates specifications and related content without creating a new backend schema or duplicating production data.",
    category: storageCategory,
    specifications: [
      { label: "Application", value: "Residential and commercial" },
      { label: "Configuration", value: "Flexible" },
      { label: "Data status", value: "Prototype content" },
    ],
    featured: false,
  },
];
