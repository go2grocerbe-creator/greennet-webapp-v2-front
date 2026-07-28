import type { Product } from "@/features/products/product.types";

// Product Categories
const categories = {
  solarPanels: {
    id: "category-solar-panels",
    name: "Solar Panels",
    slug: "solar-panels",
  } as const,
  inverters: {
    id: "category-inverters",
    name: "Inverters",
    slug: "inverters",
  } as const,
  batteryStorage: {
    id: "category-battery-storage",
    name: "Battery Storage",
    slug: "battery-storage",
  } as const,
  monitoringSystems: {
    id: "category-monitoring",
    name: "Monitoring Systems",
    slug: "monitoring-systems",
  } as const,
  evCharging: {
    id: "category-ev-charging",
    name: "EV Charging",
    slug: "ev-charging",
  } as const,
  solarCarports: {
    id: "category-solar-carports",
    name: "Solar Carports",
    slug: "solar-carports",
  } as const,
  commercialSystems: {
    id: "category-commercial-systems",
    name: "Commercial Systems",
    slug: "commercial-systems",
  } as const,
};

export const products: Product[] = [
  // Solar Panels (2)
  {
    id: "product-001",
    name: "High-Efficiency Solar Panels",
    slug: "high-efficiency-solar-panels",
    eyebrow: "Maximize energy capture",
    shortDescription:
      "Premium solar panels engineered for optimal energy conversion in Nigeria's climate.",
    description:
      "High-efficiency photovoltaic panels designed to deliver maximum performance in residential and commercial installations. [Pending approval: technical specifications and efficiency ratings]",
    category: categories.solarPanels,
    specifications: [
      { label: "Type", value: "Monocrystalline" },
      { label: "Application", value: "Residential & Commercial" },
      { label: "Status", value: "Catalogue pending" },
    ],
    featured: true,
  },
  {
    id: "product-002",
    name: "Flexible Solar Panel Arrays",
    slug: "flexible-solar-panel-arrays",
    eyebrow: "Adaptable installation",
    shortDescription:
      "Flexible panel configurations for diverse roofing and mounting scenarios.",
    description:
      "Modular solar array systems adaptable to various installation requirements. [Pending approval: compatibility details and installation guidelines]",
    category: categories.solarPanels,
    specifications: [
      { label: "Configuration", value: "Modular" },
      { label: "Application", value: "Multiple surfaces" },
      { label: "Status", value: "Catalogue pending" },
    ],
    featured: false,
  },
  // Inverters (1)
  {
    id: "product-003",
    name: "Smart Three-Phase Inverter",
    slug: "smart-three-phase-inverter",
    eyebrow: "Power management simplified",
    shortDescription:
      "Intelligent inverter with grid integration and real-time monitoring capabilities.",
    description:
      "Advanced power conditioning for seamless solar to grid/battery management. [Pending approval: technical specifications and certifications]",
    category: categories.inverters,
    specifications: [
      { label: "Configuration", value: "Three-phase" },
      { label: "Features", value: "Grid integration, monitoring" },
      { label: "Status", value: "Catalogue pending" },
    ],
    featured: true,
  },
  // Battery Storage (2)
  {
    id: "product-004",
    name: "Lithium-Ion Battery System",
    slug: "lithium-ion-battery-system",
    eyebrow: "Store your energy",
    shortDescription:
      "High-capacity battery storage for residential and commercial systems.",
    description:
      "Long-cycle lithium-ion storage solutions for energy independence. [Pending approval: capacity details, charge cycles, and warranty terms]",
    category: categories.batteryStorage,
    specifications: [
      { label: "Technology", value: "Lithium-ion" },
      { label: "Application", value: "Residential & Commercial" },
      { label: "Status", value: "Catalogue pending" },
    ],
    featured: true,
  },
  {
    id: "product-005",
    name: "Hybrid Battery Management",
    slug: "hybrid-battery-management",
    eyebrow: "Intelligent energy routing",
    shortDescription:
      "Hybrid systems combining battery storage with solar and grid management.",
    description:
      "Integrated battery management platform optimizing energy flow and backup power. [Pending approval: system architecture and control specifications]",
    category: categories.batteryStorage,
    specifications: [
      { label: "Configuration", value: "Hybrid" },
      { label: "Features", value: "Load management, grid sync" },
      { label: "Status", value: "Catalogue pending" },
    ],
    featured: false,
  },
  // Monitoring Systems (1)
  {
    id: "product-006",
    name: "Real-Time System Monitoring",
    slug: "real-time-system-monitoring",
    eyebrow: "See your energy live",
    shortDescription:
      "Cloud-based monitoring platform for complete system visibility.",
    description:
      "Dashboard and mobile app providing real-time data on system performance and energy production. [Pending approval: platform features and data retention]",
    category: categories.monitoringSystems,
    specifications: [
      { label: "Platform", value: "Cloud-based" },
      { label: "Access", value: "Web & mobile app" },
      { label: "Status", value: "Catalogue pending" },
    ],
    featured: true,
  },
  // EV Charging (1)
  {
    id: "product-007",
    name: "Solar-Powered EV Charger",
    slug: "solar-powered-ev-charger",
    eyebrow: "Charge with the sun",
    shortDescription:
      "Electric vehicle charging station powered directly by your solar installation.",
    description:
      "Integrated EV charging solution maximizing solar energy utilization for vehicle charging. [Pending approval: charging speed, connector types, and compatibility]",
    category: categories.evCharging,
    specifications: [
      { label: "Power Source", value: "Solar + Grid" },
      { label: "Application", value: "Residential & Commercial" },
      { label: "Status", value: "Catalogue pending" },
    ],
    featured: false,
  },
  // Solar Carports (1)
  {
    id: "product-008",
    name: "Solar Carport System",
    slug: "solar-carport-system",
    eyebrow: "Shade plus energy",
    shortDescription:
      "Dual-purpose carport structures generating energy while providing vehicle protection.",
    description:
      "Architectural solar canopy systems providing parking shade and clean energy production. [Pending approval: structural specifications and installation requirements]",
    category: categories.solarCarports,
    specifications: [
      { label: "Application", value: "Commercial & Residential" },
      { label: "Configuration", value: "Modular carport" },
      { label: "Status", value: "Catalogue pending" },
    ],
    featured: false,
  },
  // Commercial Systems (1)
  {
    id: "product-009",
    name: "Enterprise Solar Solution",
    slug: "enterprise-solar-solution",
    eyebrow: "Scale for industry",
    shortDescription:
      "Comprehensive solar systems designed for large-scale industrial and commercial operations.",
    description:
      "Scalable enterprise-grade solar installations with custom engineering and support. [Pending approval: project case studies and ROI documentation]",
    category: categories.commercialSystems,
    specifications: [
      { label: "Scope", value: "Industrial & Commercial" },
      { label: "Configuration", value: "Custom-engineered" },
      { label: "Status", value: "Catalogue pending" },
    ],
    featured: true,
  },
];
