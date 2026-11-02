/**
 * Central salon configuration file.
 * All salon details, phone numbers, and WhatsApp settings are maintained here.
 * Replace placeholder numbers and addresses with genuine salon information when deploying.
 */

export const SALON_CONFIG = {
  name: "Aura Ladies Beauty Lounge",
  shortName: "Aura Salon",
  tagline: "Beauty • Style • Confidence",
  slogan: "Your Beauty, Our Expertise.",
  description:
    "Professional beauty, hair, makeup and bridal services designed around you in a hygienic, luxurious ladies-only environment.",
  
  // Single configurable WhatsApp number for Pakistan (country code 92, without '+' or spaces)
  whatsappNumber: "923001234567",
  
  // Display phone number for calls
  phone: "+92 300 1234567",
  
  // Location
  address: "Plot 18-C, MM Alam Road, Gulberg III",
  city: "Lahore, Pakistan",
  landmark: "Near Hussain Chowk",
  
  // Hours
  openingHours: {
    weekdays: "Monday – Saturday: 11:00 AM – 8:00 PM",
    sunday: "Sunday: 12:00 PM – 7:00 PM (Bridal & Booked Appointments)",
  },
  
  // Social media links
  social: {
    instagram: "https://instagram.com/auralounge.pk",
    facebook: "https://facebook.com/auralounge.pk",
    tiktok: "https://tiktok.com/@auralounge.pk",
  },
};

/**
 * Helper to build clean WhatsApp click-to-chat links with pre-filled messages
 */
export function buildWhatsAppUrl(message: string): string {
  const cleanNumber = SALON_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

/**
 * Standard pre-filled messages defined in the Master Prompt
 */
export const WHATSAPP_MESSAGES = {
  general: `Hi, I would like to book an appointment at ${SALON_CONFIG.name}. Please share the available timings.`,
  bridal: `Hi, I am interested in Bridal Makeup at ${SALON_CONFIG.name}. I would like to know the available appointment timings.`,
  partyMakeup: `Hi, I am interested in Party Makeup at ${SALON_CONFIG.name}. Please share the available appointment timings.`,
  hairCut: `Hi, I would like to book a Haircut & Styling appointment at ${SALON_CONFIG.name}. Please share the available timings.`,
  hairStyle: `Hi, I would like to book a Hair Styling appointment at ${SALON_CONFIG.name}. Please share the available timings.`,
  hairColor: `Hi, I am interested in Hair Color services at ${SALON_CONFIG.name}. Please share more details and available timings.`,
  hairTreatment: `Hi, I am interested in Hair Treatments at ${SALON_CONFIG.name}. Please share more details and available timings.`,
  manicure: `Hi, I would like to book a Manicure at ${SALON_CONFIG.name}. Please share the available timings.`,
  pedicure: `Hi, I would like to book a Pedicure at ${SALON_CONFIG.name}. Please share the available timings.`,
  nailArt: `Hi, I would like to inquire about Nail Art services at ${SALON_CONFIG.name}. Please share available designs and timings.`,
  facial: `Hi, I am interested in Facial & Skin Care treatments at ${SALON_CONFIG.name}. Please share the available timings.`,
  grooming: `Hi, I would like to book Threading / Waxing grooming services at ${SALON_CONFIG.name}. Please share the available timings.`,
  customService: (serviceName: string, extraNote?: string) =>
    `Hi, I would like to book an appointment for ${serviceName} at ${SALON_CONFIG.name}.${
      extraNote ? ` Note: ${extraNote}.` : ""
    } Please let me know the available timings.`,
  galleryLook: (lookTitle: string, category: string) =>
    `Hi, I saw the "${lookTitle}" (${category}) in your salon gallery at ${SALON_CONFIG.name} and would love to inquire about booking a similar look. Please share available timings and consultation details.`,
};
