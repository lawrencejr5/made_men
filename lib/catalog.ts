export type CategoryId =
  | "all"
  | "men"
  | "women"
  | "casual"
  | "corporate"
  | "senator";

export interface CategoryInfo {
  id: CategoryId;
  label: string;
  tagline: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  categories: Exclude<CategoryId, "all">[];
  fabric: string;
  highlight: string;
  featured?: boolean;
}

export interface SocialLink {
  name: string;
  handle: string;
  url: string;
  icon: "instagram" | "whatsapp" | "tiktok" | "x" | "facebook";
}

export const BRAND_CONFIG = {
  name: "made_men",
  displayName: "Made_Men",
  tagline: "GLOBAL STITCHES",
  city: "Enugu, Nigeria",
  address: "Independence Layout, Enugu, Enugu State, Nigeria",
  phone: "+234 813 348 6350",
  whatsappNumber: "2348133486350",
  email: "Mademenglobal1@gmail.com",
  hours: "Mon – Sat: 9:00 AM – 7:00 PM WAT",
  heroDescription:
    "Born in the heart of Enugu, Nigeria, made_men crafts architectural Senator wear, sharp corporate tailoring, and refined casual pieces for discerning men and women worldwide.",
  founder: {
    badge: "THE HAND BEHIND THE BRAND",
    title: "Master Craftsmanship Rooted in Enugu, Stitched for the World",
    name: "Creative Director & Master Tailor, made_men",
    image: "/images/WhatsApp Image 2026-10-31 at 1.24.58 PM.jpeg",
    quote:
      "Every garment we cut is a conversation between posture, heritage, and modern authority. When you walk into a room wearing made_men, the stitches speak before you do.",
    storyParagraphs: [
      "From our bespoke atelier in Enugu, Nigeria, the creative force behind made_men (Global Stitches) has dedicated years to perfecting the anatomy of African luxury and contemporary tailoring. What began as a passion for clean lines and impeccable fit has grown into a signature tailoring house trusted for milestone occasions, boardroom presence, and everyday elegance.",
      "Every piece—whether an intricately embroidered Senator ensemble, a double-breasted corporate suit, or a breathable textured weekend kaftan—is personally drafted, cut, and inspected with obsessive attention to collar structure, seam tension, and fabric drape.",
    ],
    stats: [
      { value: "100%", label: "Bespoke Hand-Finished" },
      { value: "Enugu", label: "Flagship Atelier in Nigeria" },
      { value: "Global", label: "Worldwide DHL Delivery" },
    ],
  },
  socials: [
    {
      name: "Instagram",
      handle: "@made_men_stitches",
      url: "https://instagram.com/made_men",
      icon: "instagram",
    },
    {
      name: "WhatsApp",
      handle: "+234 813 348 6350",
      url: "https://wa.me/2348133486350?text=Hello%20made_men%2C%20I%20would%20like%20to%20book%20a%20bespoke%20fitting.",
      icon: "whatsapp",
    },
    {
      name: "TikTok",
      handle: "@made_men_official",
      url: "https://tiktok.com/@made_men",
      icon: "tiktok",
    },
    {
      name: "X (Twitter)",
      handle: "@made_men_ng",
      url: "https://x.com/made_men",
      icon: "x",
    },
    {
      name: "Facebook",
      handle: "Made_Men Global Stitches",
      url: "https://facebook.com/mademen",
      icon: "facebook",
    },
  ] satisfies SocialLink[],
};

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "all",
    label: "All Works",
    tagline:
      "Complete curated archive of bespoke creations from our Enugu atelier",
  },
  {
    id: "men",
    label: "Men",
    tagline: "Commanding silhouettes tailored for the modern gentleman",
  },
  {
    id: "women",
    label: "Women",
    tagline:
      "Bespoke womenswear, structured two-pieces, and custom commissions",
  },
  {
    id: "casual",
    label: "Casual",
    tagline: "Relaxed luxury, textured knits, and resort two-piece sets",
  },
  {
    id: "corporate",
    label: "Corporate",
    tagline: "Executive waistcoats, sharp suiting, and boardroom tailoring",
  },
  {
    id: "senator",
    label: "Senator",
    tagline:
      "Signature Nigerian Senator suits with geometric gold & tonal embroidery",
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "obsidian-gold-senator",
    title: "Obsidian Gold-Embroidered Senator",
    subtitle: "Signature Senator Ensemble",
    image: "/images/senator2.jpeg",
    categories: ["men", "senator"],
    fabric: "Premium Italian Cashmere Wool Blend",
    highlight: "Bespoke gold geometric chest pocket & sleeve cuff embroidery",
    featured: true,
  },
  {
    id: "alabaster-gold-collar-shirt",
    title: "Alabaster Gold-Tipped Textured Shirt",
    subtitle: "Refined Casual & Semi-Formal",
    image: "/images/WhatsApp Image 2026-10-31 at 1.24.54 PM.jpeg",
    categories: ["men", "casual", "senator"],
    fabric: "Textured Ivory Micro-Grid Weave",
    highlight: "Ornate gold filigree collar corners and obsidian jewel button",
  },
  {
    id: "azure-patterned-two-piece",
    title: "Azure Geometric Print Two-Piece",
    subtitle: "Statement Smart-Casual Set",
    image: "/images/WhatsApp Image 2026-10-31 at 1.24.57 PM.jpeg",
    categories: ["men", "casual", "senator"],
    fabric: "Artisanal Blue & Onyx Jacquard Print",
    highlight:
      "Tailored short-sleeve tunic with pleated obsidian pocket accent",
  },
  {
    id: "charcoal-sovereign-tunic",
    title: "Charcoal Sovereign Embroidered Tunic",
    subtitle: "Precision Stitchwork Detail",
    image: "/images/WhatsApp Image 2026-10-31 at 1.24.50 PM.jpeg",
    categories: ["men", "senator"],
    fabric: "Structured Charcoal Grey Suiting",
    highlight:
      "Intricate champagne-gold cross-stitch placket & pocket medallion",
  },
  {
    id: "royal-navy-embellished-senator",
    title: "Royal Navy Embellished Agbada-Senator",
    subtitle: "Ceremonial Luxury Ensemble",
    image: "/images/WhatsApp Image 2026-10-31 at 1.24.55 PM.jpeg",
    categories: ["men", "senator"],
    fabric: "Heavyweight Royal Navy Senator Fabric",
    highlight: "Hand-applied gold & crystal geometric panels and ornate cuffs",
    featured: true,
  },
  {
    id: "navy-sky-ribbon-kaftan",
    title: "Navy & Sky Contrast Zip Kaftan",
    subtitle: "Contemporary Weekend Two-Piece",
    image: "/images/image1.jpeg",
    categories: ["men", "casual", "senator"],
    fabric: "Breathable Matte Crepe Suiting",
    highlight:
      "Architectural sky-blue border piping with concealed metallic zip",
    featured: true,
  },
  {
    id: "executive-navy-corporate",
    title: "Executive Double-Breasted Waistcoat Suit",
    subtitle: "Boardroom & Formal Tailoring",
    image: "/images/WhatsApp Image 2026-10-31 at 1.52.20 PM.jpeg",
    categories: ["men", "corporate"],
    fabric: "Super 130s Navy Worsted Suiting",
    highlight: "Peak-lapel double-breasted 6-button vest with gold hardware",
    featured: true,
  },
  {
    id: "ivory-waffle-resort-senator",
    title: "Ivory Waffle-Textured Resort Senator",
    subtitle: "Daytime Luxury Two-Piece",
    image: "/images/WhatsApp Image 2026-10-31 at 1.24.58 PM.jpeg",
    categories: ["men", "casual", "senator"],
    fabric: "3D Waffle-Weave Cotton Linen",
    highlight: "Crisp monochromatic white finish with metal pocket badge",
  },
  {
    id: "plum-honeycomb-polo",
    title: "Plum Honeycomb Knit Collared Shirt",
    subtitle: "Bespoke Casual Shirt",
    image: "/images/image3.jpeg",
    categories: ["men", "casual"],
    fabric: "Open-Weave Textured Piqué Knit",
    highlight: "Hand-finished cutaway collar & notched placket",
  },

  {
    id: "atelier-royal-motif-detail",
    title: "Atelier Close-Up: Royal Motif Tunic",
    subtitle: "Handcrafted Embellished Senator",
    image: "/images/WhatsApp Image 2026-10-31 at 1.24.56 PM.jpeg",
    categories: ["men", "senator"],
    fabric: "Deep Navy Bespoke Wool Blend",
    highlight:
      "Symmetrical sunburst crystal & gold beadwork along chest and sleeves",
  },
];
