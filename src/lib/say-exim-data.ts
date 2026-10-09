export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  featured: boolean;
  visible: boolean;
};

export type SiteData = {
  products: Product[];
  categories: { id: string; name: string; description: string; image: string; visible: boolean }[];
  services: { id: string; name: string; description: string; image: string; visible: boolean }[];
  gallery: { id: string; title: string; category: string; image: string; alt: string }[];
  content: { heroTitle: string; heroDescription: string; aboutTitle: string; aboutDescription: string; footerCredit: string; businessName: string };
  contact: { phone: string; email: string; address: string };
  enquiries: { id: string; name: string; company: string; email: string; phone: string; product: string; message: string; status: string; date: string }[];
};

const photo = (id: string, n: number) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1100&q=82&sig=${n}`;

const categoryList = [
  { id: "industrial-supplies", name: "Industrial Supplies", description: "Heavy-duty industrial equipment, tools and machinery parts.", image: photo("1565793298595-6a879b1d9492", 1) },
  { id: "agricultural-products", name: "Agricultural Products", description: "Grains, spices, oilseeds and farm produce.", image: photo("1542838132-92c53300491e", 2) },
  { id: "consumer-goods", name: "Consumer Goods", description: "Everyday FMCG and household consumer products.", image: photo("1556909114-f6e7ad7d3136", 3) },
  { id: "packaging-materials", name: "Packaging Materials", description: "Packaging and protective materials for wholesale trade.", image: photo("1586528116311-ad8dd3c8310d", 4) },
  { id: "chemicals", name: "Chemicals", description: "Industrial chemicals, solvents and specialty compounds.", image: photo("1581093588401-fbb62a02f120", 5) },
  { id: "construction-materials", name: "Construction Materials", description: "Building and infrastructure supplies.", image: photo("1581094794329-c8112a89af12", 6) },
  { id: "electronics-components", name: "Electronics Components", description: "Electronic components, modules and accessories.", image: photo("1518770660439-4636190af475", 7) },
  { id: "general-merchandise", name: "General Merchandise", description: "A broad selection of wholesale merchandise.", image: photo("1604719312566-8912e9227c6a", 8) },
];

const productSeeds: [string, string, string][] = [
  ["Heavy-Duty Industrial Bearings", "industrial-supplies", "1581092918056-0c4c3acd3789"],
  ["CNC Precision Tooling Set", "industrial-supplies", "1581094794329-c8112a89af12"],
  ["Hydraulic Power Units", "industrial-supplies", "1581093588401-fbb62a02f120"],
  ["Premium Basmati Rice (Bulk)", "agricultural-products", "1542838132-92c53300491e"],
  ["Organic Turmeric Powder", "agricultural-products", "1601598851547-4302969d0614"],
  ["Cold-Pressed Sunflower Oil", "agricultural-products", "1568667256549-094345857637"],
  ["Household Cleaning Kit", "consumer-goods", "1556909114-f6e7ad7d3136"],
  ["Personal Care Bulk Pack", "consumer-goods", "1604719312566-8912e9227c6a"],
  ["Kitchen Essentials Combo", "consumer-goods", "1593510987046-1f8fcfc512a4"],
  ["Corrugated Shipping Boxes", "packaging-materials", "1586528116311-ad8dd3c8310d"],
  ["Stretch Wrap Film Rolls", "packaging-materials", "1612817288484-6f916006741a"],
  ["Eco-Friendly Paper Bags", "packaging-materials", "1580048915913-4f3b1629dd98"],
  ["Industrial Solvents", "chemicals", "1581092446327-9b52bd1570c2"],
  ["Water Treatment Chemicals", "chemicals", "1581093588401-fbb62a02f120"],
  ["Textile Dyes & Pigments", "chemicals", "1565514020179-026b92b84bb6"],
  ["OPC 53 Grade Cement", "construction-materials", "1588776814546-1ffcf47267a5"],
  ["TMT Steel Rebars", "construction-materials", "1581094794329-c8112a89af12"],
  ["Vitrified Floor Tiles", "construction-materials", "1561414926-d5be72be9f30"],
  ["PCB Capacitors & Resistors", "electronics-components", "1518770660439-4636190af475"],
  ["LED Driver Modules", "electronics-components", "1591488320449-011701bb6704"],
  ["Power Connectors & Cables", "electronics-components", "1573164713988-8665fc963095"],
  ["Stationery Bulk Assortment", "general-merchandise", "1532634922-8fe0b757fb13"],
  ["Textile & Apparel Lots", "general-merchandise", "1505236858219-8359eb29e329"],
  ["Plastic Houseware", "general-merchandise", "1568667256549-094345857637"],
  ["Promotional Gift Items", "general-merchandise", "1556909114-f6e7ad7d3136"],
];

const galleryPhotos = [
  "1566576912321-d58ddd7a6088", "1586528116493-3a4c8a48aaa8", "1580674684081-7617fbf3d745", "1494412651409-8963ce7935a7",
  "1521737604893-d14cc237f11d", "1556761175-5973dc0f32e7", "1553413077-190dd305871c", "1542838132-92c53300491e",
  "1568667256549-094345857637", "1581094794329-c8112a89af12", "1565793298595-6a879b1d9492", "1601598851547-4302969d0614",
  "1611273426858-450d8e3c9fce", "1556909114-f6e7ad7d3136", "1565514020179-026b92b84bb6", "1604719312566-8912e9227c6a",
  "1593510987046-1f8fcfc512a4", "1518770660439-4636190af475", "1532634922-8fe0b757fb13", "1505236858219-8359eb29e329",
];

export const storageKey = "say-exim-demo-data";
export const adminSessionKey = "say-exim-demo-admin";

export const initialSiteData: SiteData = {
  products: productSeeds.map(([name, category, image], i) => ({
    id: `p${i + 1}`,
    name,
    category,
    description: `Wholesale enquiry for ${name.toLowerCase()}. Product specifications and availability can be discussed for your requirements.`,
    image: photo(image, i + 1),
    featured: i < 6,
    visible: true,
  })),
  categories: categoryList.map((category) => ({ ...category, visible: true })),
  services: [
    { id: "sourcing", name: "Custom Sourcing", description: "Share a product brief and we can discuss sourcing options and supplier coordination for your business.", image: photo("1565514020179-026b92b84bb6", 31), visible: true },
    { id: "trade", name: "Import & Export Coordination", description: "Trade coordination for wholesale import and export enquiries, from initial discussion to shipment planning.", image: photo("1494412651409-8963ce7935a7", 32), visible: true },
    { id: "documentation", name: "Documentation Support", description: "Discuss the documentation requirements relevant to your product, shipment and destination.", image: photo("1586528116311-ad8dd3c8310d", 33), visible: true },
  ],
  gallery: galleryPhotos.map((id, i) => ({ id: `g${i + 1}`, title: `Trade & supply image ${i + 1}`, category: ["Products", "Warehouse", "Trading Operations", "Logistics", "Business Meetings"][i % 5], image: photo(id, 100 + i), alt: `Import-export and wholesale trading visual ${i + 1}` })),
  content: {
    heroTitle: "Connecting Markets. Delivering Global Trade Solutions.",
    heroDescription: "Your partner for global sourcing, international trade and professional import-export coordination.",
    aboutTitle: "A considered approach to global trade",
    aboutDescription: "SAY EXIM TRADERS is a Pune-based import-export and wholesale trading business. We connect business requirements with product sourcing and trade coordination, with clear communication at every step.",
    footerCredit: "Designed and development by SOSynch Ai Tech",
    businessName: "SAY EXIM TRADERS",
  },
  contact: { phone: "+91 98765 43210", email: "info@sayeximtraders.com", address: "58/3B Azad Nagar, Wanwadi, SRPF, Pune City, Maharashtra, India – 411022" },
  enquiries: [],
};