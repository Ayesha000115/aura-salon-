import React from "react";
import {
  MessageCircle,
  Phone,
  MapPin,
  Instagram,
  Facebook,
} from "lucide-react";
import { SALON_CONFIG, buildWhatsAppUrl, WHATSAPP_MESSAGES } from "../config/salon";

interface FooterProps {
  onNavClick: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer className="bg-[#100C14] text-[#FFFDFC] pt-16 pb-12 border-t border-[#2C2432]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/20">
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#E4BE78] text-[#100C14] flex items-center justify-center font-serif font-bold text-base tracking-widest">
                A
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-white uppercase">
                {SALON_CONFIG.name}
              </span>
            </div>

            <p className="text-sm text-[#F3E5DC] leading-relaxed mb-6 font-normal">
              Professional beauty, hair, makeup and bridal services designed around
              you. Dedicated strictly to ladies beauty, personal comfort, and
              uncompromising hygiene in Pakistan.
            </p>

            {/* Direct WhatsApp Action in Footer */}
            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1EA952] hover:bg-[#178942] text-white text-xs font-bold px-5 py-3 rounded-full transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Book on WhatsApp</span>
            </a>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-[#E4BE78] font-bold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F3E5DC]">
              {["home", "services", "bridal", "gallery", "about", "booking"].map(
                (tab) => (
                  <li key={tab}>
                    <button
                      onClick={() => {
                        onNavClick(tab);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="hover:text-[#E4BE78] transition-colors cursor-pointer capitalize font-medium"
                    >
                      {tab === "booking"
                        ? "Book Appointment"
                        : tab === "bridal"
                        ? "Bridal Suite"
                        : tab}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E4BE78] font-bold mb-4">
              Salon Contact
            </h4>
            <ul className="space-y-3 text-sm text-[#F3E5DC]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E4BE78] shrink-0 mt-0.5" />
                <span className="font-medium">
                  {SALON_CONFIG.address}, {SALON_CONFIG.city}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E4BE78] shrink-0" />
                <a
                  href={`tel:${SALON_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-[#E4BE78] transition-colors font-bold text-white"
                >
                  {SALON_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#1EA952] shrink-0" />
                <a
                  href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E4BE78] transition-colors font-semibold"
                >
                  WhatsApp: +{SALON_CONFIG.whatsappNumber}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours & Socials (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E4BE78] font-bold mb-4">
              Opening Hours
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#F3E5DC] mb-6 font-normal">
              <p>
                <strong className="text-white font-bold">Monday – Saturday:</strong>
                <br />
                {SALON_CONFIG.openingHours.weekdays.replace("Monday – Saturday: ", "")}
              </p>
              <p>
                <strong className="text-white font-bold">Sunday:</strong>
                <br />
                {SALON_CONFIG.openingHours.sunday.replace("Sunday: ", "")}
              </p>
            </div>

            <h4 className="text-xs uppercase tracking-widest text-[#E4BE78] font-bold mb-2">
              Social Media
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={SALON_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SALON_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SALON_CONFIG.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors text-xs font-bold border border-white/10"
                aria-label="TikTok"
              >
                TT
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EBD7C7] gap-4 font-medium">
          <p>© 2026 {SALON_CONFIG.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Dedicated Ladies Only Salon & Bridal Studio</span>
            <span>•</span>
            <span>Lahore, Pakistan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
