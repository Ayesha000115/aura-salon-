import { WHATSAPP_MESSAGES } from "../config/salon";

export interface ServiceItem {
  id: string;
  title: string;
  category: "makeup" | "hair" | "nails" | "facial" | "grooming";
  categoryLabel: string;
  shortDesc: string;
  detailedDescription: string;
  includes: string[];
  ctaText: string;
  whatsappMessage: string;
  image: string;
  featuredInHome?: boolean;
}

export const SALON_SERVICES: ServiceItem[] = [
  // --- MAKEUP ---
  {
    id: "bridal-makeup",
    title: "Bridal Makeup",
    category: "makeup",
    categoryLabel: "Bridal Makeup",
    shortDesc:
      "Complete bridal beauty preparation with customized makeup, hairstyling and finishing designed for your special day.",
    detailedDescription:
      "A complete bridal beauty experience designed around your features, outfit, event style and personal preferences. Our bridal artists ensure seamless skin preparation, long-lasting radiant base, intricate eye artistry, and regal dupata setting.",
    includes: [
      "Bridal makeup consultation",
      "Skin preparation & prime",
      "Customized bridal makeup",
      "Signature eye makeup & liner",
      "Flawless base & complexion balancing",
      "Contouring & high-definition highlighting",
      "Premium lashes application",
      "Lip shaping & long-wear color",
      "Makeup setting & longevity finish",
      "Bridal hairstyling & padding",
      "Dupatta / veil setting & jewelry pinning",
      "Final touch-up preparation kit",
    ],
    ctaText: "Ask About Bridal Makeup",
    whatsappMessage: WHATSAPP_MESSAGES.bridal,
    image:
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=85",
    featuredInHome: true,
  },
  {
    id: "party-makeup",
    title: "Party Makeup",
    category: "makeup",
    categoryLabel: "Party Makeup",
    shortDesc:
      "Elegant makeup looks for weddings, parties, dinners, engagements, birthdays and special celebrations.",
    detailedDescription:
      "From soft dewy evening glam to bold festive looks, tailored to complement your attire and personal aesthetic with sculpted cheekbones and high-impact eye artistry.",
    includes: [
      "Skin consultation & makeup prep",
      "Custom skin base matching",
      "Glamorous eye makeup tailored to outfit",
      "Precision contouring & luminous highlighting",
      "Natural or dramatic lash enhancement",
      "Lip styling & color coordinating",
      "Long-wear finishing mist",
    ],
    ctaText: "Book Party Makeup",
    whatsappMessage: WHATSAPP_MESSAGES.partyMakeup,
    image:
      "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?auto=format&fit=crop&w=1200&q=85",
    featuredInHome: true,
  },

  // --- HAIR ---
  {
    id: "hair-cutting",
    title: "Hair Cutting & Styling",
    category: "hair",
    categoryLabel: "Hair Service",
    shortDesc:
      "Professional haircuts, styling and finishing designed around your face shape, hair texture and personal style.",
    detailedDescription:
      "Expert shears work and framing designed to enhance natural volume, remove split ends, and give effortless everyday manageability.",
    includes: [
      "Hair & scalp consultation",
      "Precision haircut (layers, bob, fringe, or trim)",
      "Shape & texture adjustment",
      "Styling & blow-dry finishing",
      "Home-care maintenance guidance",
    ],
    ctaText: "Book Hair Service",
    whatsappMessage: WHATSAPP_MESSAGES.hairCut,
    image:
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=85",
    featuredInHome: true,
  },
  {
    id: "hair-styling",
    title: "Hair Styling & Blow Dry",
    category: "hair",
    categoryLabel: "Hair Styling",
    shortDesc:
      "Voluminous blowouts, beach waves, Hollywood curls, and elegant updos for weddings and parties.",
    detailedDescription:
      "Whether you desire a sleek glass-hair look, bouncy blowout, or an intricate braided bun for a mehndi or reception, our stylists bring your vision to life.",
    includes: [
      "Volume-boosting blow dry",
      "Soft curls, mermaid waves, or straight iron styling",
      "Festive updos and bridal hair buns",
      "Heat protectant & shine finish",
    ],
    ctaText: "Book Hair Styling",
    whatsappMessage: WHATSAPP_MESSAGES.hairStyle,
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
    featuredInHome: false,
  },
  {
    id: "hair-color",
    title: "Hair Color & Highlights",
    category: "hair",
    categoryLabel: "Hair Color",
    shortDesc:
      "Professional hair coloring, root touch-ups, balayage, highlights and customized color toning.",
    detailedDescription:
      "Carefully formulated hair coloring using gentle, salon-grade pigments to respect hair integrity while delivering rich tone, depth, and shine.",
    includes: [
      "In-depth color consultation & strand analysis",
      "Root touch-up or full head color application",
      "Custom highlights, babylights, or balayage",
      "Glossing / tone balancing rinse",
      "Nourishing post-color treatment",
      "Finishing blow dry",
    ],
    ctaText: "Ask About Hair Color",
    whatsappMessage: WHATSAPP_MESSAGES.hairColor,
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85",
    featuredInHome: true,
  },
  {
    id: "hair-treatments",
    title: "Hair Treatments & Care",
    category: "hair",
    categoryLabel: "Hair Care",
    shortDesc:
      "Professional treatments designed to improve the look, feel and manageability of damaged, frizzy or dry hair.",
    detailedDescription:
      "Intensive nourishment and moisture-infusing regimens designed for weather-exposed, heat-styled, or chemically treated hair.",
    includes: [
      "Hair porosity & scalp condition check",
      "Deep moisture conditioning mask",
      "Protein repair & smoothing treatment",
      "Scalp steam infusion & soothing massage",
      "Soft blow dry and sealing serum",
    ],
    ctaText: "Ask About Hair Treatment",
    whatsappMessage: WHATSAPP_MESSAGES.hairTreatment,
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=85",
    featuredInHome: true,
  },

  // --- NAILS ---
  {
    id: "manicure",
    title: "Luxury Manicure",
    category: "nails",
    categoryLabel: "Nail Care",
    shortDesc:
      "Nail shaping, cuticle care, hand exfoliation and finishing for beautifully maintained hands.",
    detailedDescription:
      "Relaxing hand treatment focusing on hygienic grooming, skin softening, precision cuticle care, and lustrous nail polish application.",
    includes: [
      "Warm antiseptic hand soak",
      "Gentle nail shaping & buffing",
      "Cuticle conditioning & gentle trimming",
      "Exfoliating hand scrub",
      "Moisturizing hand & wrist massage",
      "Classic polish or clear shine coat",
    ],
    ctaText: "Book Manicure",
    whatsappMessage: WHATSAPP_MESSAGES.manicure,
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=85",
    featuredInHome: true,
  },
  {
    id: "pedicure",
    title: "Relaxing Pedicure",
    category: "nails",
    categoryLabel: "Foot Care",
    shortDesc:
      "Revitalizing foot bath, callus smoothing, nail grooming and finishing for clean, refreshed feet.",
    detailedDescription:
      "Unwind with a deeply relaxing foot soak and gentle scrub that softens tired feet, neatens toenails, and leaves skin smooth and rejuvenated.",
    includes: [
      "Aromatic sanitizing foot soak",
      "Nail trimming, filing & buffing",
      "Gentle cuticle care",
      "Heel buffing & skin smoothing scrub",
      "Hydrating foot massage",
      "Professional polish or natural buff finish",
    ],
    ctaText: "Book Pedicure",
    whatsappMessage: WHATSAPP_MESSAGES.pedicure,
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=85",
    featuredInHome: true,
  },
  {
    id: "nail-art",
    title: "Nail Art & Gel Enhancements",
    category: "nails",
    categoryLabel: "Nail Art",
    shortDesc:
      "Custom occasion nail designs, subtle French tips, bridal embellishments, and long-lasting gel polish.",
    detailedDescription:
      "Elevate your manicure with bespoke designs created to match your festive, wedding, or everyday wardrobe.",
    includes: [
      "Base prep and nail contouring",
      "Classic French or ombre gradient",
      "Minimalist chrome or glitter accents",
      "Bridal jewel or floral motif details",
      "Long-wearing gel top coat cure",
    ],
    ctaText: "Ask About Nail Art",
    whatsappMessage: WHATSAPP_MESSAGES.nailArt,
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85",
    featuredInHome: false,
  },

  // --- FACIAL & SKIN CARE ---
  {
    id: "facial-skin-care",
    title: "Facial & Skin Care",
    category: "facial",
    categoryLabel: "Skin Care",
    shortDesc:
      "Professional facial and skincare treatments selected according to individual skin needs.",
    detailedDescription:
      "Customized skincare rituals tailored to cleanse, gently exfoliate, and deeply hydrate your skin. (Note: These are cosmetic relaxation treatments and not medical treatments).",
    includes: [
      "Gentle skin assessment",
      "Deep pore double cleansing",
      "Delicate exfoliating scrub",
      "Soothing facial steam & extraction (if requested)",
      "Hydrating botanical serum infusion",
      "Relaxing face, neck & shoulder massage",
      "Targeted face mask & sun-protect finish",
    ],
    ctaText: "Ask About Facial",
    whatsappMessage: WHATSAPP_MESSAGES.facial,
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
    featuredInHome: true,
  },

  // --- GROOMING ---
  {
    id: "threading-waxing",
    title: "Threading & Waxing",
    category: "grooming",
    categoryLabel: "Grooming",
    shortDesc:
      "Professional grooming services for clean, polished, hygienic and well-maintained results.",
    detailedDescription:
      "Meticulous eyebrow shaping, facial threading, and gentle body waxing performed with disposable applicators and strict sanitation protocols.",
    includes: [
      "Eyebrow mapping & shaping",
      "Upper lip, chin, and full facial threading",
      "Hygiene-first wax application for arms & legs",
      "Underarm waxing with gentle formulas",
      "Post-threading cooling aloe soothing lotion",
    ],
    ctaText: "Book Grooming",
    whatsappMessage: WHATSAPP_MESSAGES.grooming,
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=85",
    featuredInHome: true,
  },
];
