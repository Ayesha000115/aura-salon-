export type GalleryCategory = "all" | "bridal" | "makeup" | "hair" | "nails" | "salon";

export interface GalleryItem {
  id: string;
  title: string;
  category: "bridal" | "makeup" | "hair" | "nails" | "salon";
  categoryLabel: string;
  imageUrl: string;
  aspectRatio: "tall" | "wide" | "square";
  tags: string[];
  description: string;
}

export const GALLERY_CATEGORIES: { id: GalleryCategory; label: string; count?: number }[] = [
  { id: "all", label: "All Works" },
  { id: "bridal", label: "Bridal" },
  { id: "makeup", label: "Party Makeup" },
  { id: "hair", label: "Hair" },
  { id: "nails", label: "Nails" },
  { id: "salon", label: "Salon Interior" },
];

export const SALON_GALLERY: GalleryItem[] = [
  // --- BRIDAL ---
  {
    id: "g-bridal-1",
    title: "Signature Barat Bridal Look",
    category: "bridal",
    categoryLabel: "Bridal",
    imageUrl:
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "tall",
    tags: ["Barat Bridal", "Warm Smokey Eye", "Regal Dupatta Setting"],
    description:
      "Classic Pakistani bridal beauty with sculpted glowing base, warm golden-bronze eye artistry, and secure dupatta styling with royal bridal jewelry.",
  },
  {
    id: "g-bridal-2",
    title: "Luminous Walima Glam",
    category: "bridal",
    categoryLabel: "Bridal",
    imageUrl:
      "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "square",
    tags: ["Walima Bridal", "Dewy Glass Complexion", "Soft Rose Lips"],
    description:
      "Modern pastel Walima look featuring delicate shimmer eyes, feathered lashes, and a dewy porcelain finish.",
  },
  {
    id: "g-bridal-3",
    title: "Mehndi & Sangeet Glow",
    category: "bridal",
    categoryLabel: "Bridal",
    imageUrl:
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "tall",
    tags: ["Mehndi Glam", "Radiant Skin", "Flirty Lashes"],
    description:
      "Vibrant, fresh-faced bridal beauty with defined eyes, festive floral jewelry styling, and natural blush for festive pre-wedding celebrations.",
  },
  {
    id: "g-bridal-4",
    title: "Nikah Elegance & Soft Definition",
    category: "bridal",
    categoryLabel: "Bridal",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "square",
    tags: ["Nikah Look", "Subtle Eyeliner", "Velvet Skin"],
    description:
      "Understated refinement focusing on softly contoured features, serene neutral tones, and graceful bridal veil elegance.",
  },

  // --- PARTY MAKEUP ---
  {
    id: "g-makeup-1",
    title: "Evening Party Glamour",
    category: "makeup",
    categoryLabel: "Party Makeup",
    imageUrl:
      "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "tall",
    tags: ["Party Makeup", "Smokey Eyes", "Contoured Cheekbones"],
    description:
      "High-impact evening party makeup featuring winged liner, sultry cut-crease eye definition, and glowing satin lipstick for wedding guests and celebrations.",
  },
  {
    id: "g-makeup-2",
    title: "Golden Hour Glow",
    category: "makeup",
    categoryLabel: "Party Makeup",
    imageUrl:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "wide",
    tags: ["Dewy Finish", "Champagne Highlighting", "Glossy Lips"],
    description:
      "Soft radiance with luminous champagne cheeks, warm bronze eyeshadow, and fluttery lashes for daytime dinners and dholkis.",
  },
  {
    id: "g-makeup-3",
    title: "Festive Engagement Look",
    category: "makeup",
    categoryLabel: "Party Makeup",
    imageUrl:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "tall",
    tags: ["Engagement Glam", "Rose Gold Eyes", "Airbrushed Base"],
    description:
      "Delicate rose gold tones harmonized with warm coral hues, sculpted brows, and soft romantic waves.",
  },
  {
    id: "g-makeup-4",
    title: "Reception Dinner Glam",
    category: "makeup",
    categoryLabel: "Party Makeup",
    imageUrl:
      "https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "square",
    tags: ["Dinner Party", "Velvet Lips", "Precision Contour"],
    description:
      "Refined evening glam with velvet lip styling, warm transition shades, and photogenic all-night longevity.",
  },

  // --- HAIR ---
  {
    id: "g-hair-1",
    title: "Voluminous Signature Blowout",
    category: "hair",
    categoryLabel: "Hair",
    imageUrl:
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "tall",
    tags: ["Blow Dry", "Bouncy Waves", "Volume & Shine"],
    description:
      "Long-lasting bouncy layered blow-dry delivering lightweight movement and mirror-like glossy shine.",
  },
  {
    id: "g-hair-2",
    title: "Dimensional Caramel Balayage",
    category: "hair",
    categoryLabel: "Hair",
    imageUrl:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "square",
    tags: ["Hair Color", "Balayage", "Caramel Tones"],
    description:
      "Hand-painted seamless dimensional highlights tailored to blend harmoniously with natural dark roots.",
  },
  {
    id: "g-hair-3",
    title: "Intricate Bridal Updo & Curls",
    category: "hair",
    categoryLabel: "Hair",
    imageUrl:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "tall",
    tags: ["Bridal Bun", "Textured Hair", "Jewelry Pinning"],
    description:
      "Sculpted chignon bun reinforced for heavy Pakistani bridal matha patti, jhoomar, and dupatta pinning.",
  },
  {
    id: "g-hair-4",
    title: "Precision Layers & Face-Framing Cut",
    category: "hair",
    categoryLabel: "Hair",
    imageUrl:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "wide",
    tags: ["Haircut", "Butterfly Layers", "Face Framing"],
    description:
      "Textured layers customized to accentuate cheekbones and natural facial contours.",
  },

  // --- NAILS ---
  {
    id: "g-nails-1",
    title: "Milky Rose French Manicure",
    category: "nails",
    categoryLabel: "Nails",
    imageUrl:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "square",
    tags: ["French Tips", "Gel Polish", "Nail Shaping"],
    description:
      "Timeless almond-shaped clean French tips with a translucent blush base and high-shine gel finish.",
  },
  {
    id: "g-nails-2",
    title: "Bridal Gold Leaf & Gem Accent",
    category: "nails",
    categoryLabel: "Nails",
    imageUrl:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "tall",
    tags: ["Nail Art", "Bridal Nails", "Gold Accents"],
    description:
      "Subtle champagne gold leaf inlays and micro-crystal accents designed to complement bridal ring ceremonies.",
  },
  {
    id: "g-nails-3",
    title: "Revitalizing Spa Pedicure Finish",
    category: "nails",
    categoryLabel: "Nails",
    imageUrl:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "wide",
    tags: ["Pedicure", "Foot Care", "Polished Feet"],
    description:
      "Exfoliated, nourished and neatly polished toenails after a comprehensive hygienic spa pedicure.",
  },

  // --- SALON INTERIOR ---
  {
    id: "g-salon-1",
    title: "Luxury Styling & Vanity Stations",
    category: "salon",
    categoryLabel: "Salon Interior",
    imageUrl:
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "wide",
    tags: ["Styling Chairs", "Warm Lighting", "Hygienic Setup"],
    description:
      "Spacious styling stations equipped with custom arched mirrors, calibrated warm daylighting, and comfortable seating.",
  },
  {
    id: "g-salon-2",
    title: "Private Bridal Dressing Suite",
    category: "salon",
    categoryLabel: "Salon Interior",
    imageUrl:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "tall",
    tags: ["Bridal Suite", "Private Lounge", "Full-Length Mirrors"],
    description:
      "An exclusive, serene suite designed for our brides to dress comfortably with their photographers and family.",
  },
  {
    id: "g-salon-3",
    title: "Calming Hair Wash & Spa Bar",
    category: "salon",
    categoryLabel: "Salon Interior",
    imageUrl:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "tall",
    tags: ["Hair Wash", "Spa Recliners", "Clean & Relaxing"],
    description:
      "Ergonomic reclining shampoo basins in a tranquil, softly lit space designed for ultimate relaxation.",
  },
  {
    id: "g-salon-4",
    title: "Warm Welcome Reception & Lounge",
    category: "salon",
    categoryLabel: "Salon Interior",
    imageUrl:
      "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "wide",
    tags: ["Reception", "Warm Ivory & Gold", "Welcoming Lounge"],
    description:
      "A peaceful welcoming lounge where our team greets every guest with personalized hospitality.",
  },
];
