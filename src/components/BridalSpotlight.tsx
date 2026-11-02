import React from "react";
import { MessageCircle, Sparkles, Crown } from "lucide-react";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "../config/salon";

interface BridalSpotlightProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const BridalSpotlight: React.FC<BridalSpotlightProps> = () => {
  const bridalHighlights = [
    {
      title: "Barat & Walima Artistry",
      desc: "Customized bases, intricate eye craftsmanship, and contouring calibrated for high-definition wedding photography.",
    },
    {
      title: "Hairstyling & Dupatta Pinning",
      desc: "Reinforced classic or contemporary updos designed to securely hold heavy Pakistani dupattas, veils, and jewelry.",
    },
    {
      title: "Exclusive Private Dressing Suite",
      desc: "A calm, spacious and temperature-controlled sanctuary for the bride and her close companions to dress without rush.",
    },
    {
      title: "Comprehensive Pre-Bridal Consultation",
      desc: "Discuss outfit colors, skin prep timeline, and jewelry placement with our senior artists prior to the event.",
    },
  ];

  return (
    <section className="relative bg-[#100C14] text-[#FFFDFC] py-20 lg:py-28 overflow-hidden border-y border-[#2A2230]">
      {/* Decorative Gold Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#A2752B]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#9E2D44]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              {/* Outer champagne border */}
              <div className="absolute -inset-3 rounded-3xl border-2 border-[#E4BE78]/50 rotate-1 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#1E1824] border border-[#E4BE78]/30">
                <img
                  src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=85"
                  alt="Pakistani Bridal Elegance at Aura Lounge"
                  className="w-full h-[480px] sm:h-[560px] object-cover object-center"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#100C14]/95 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bridal Ribbon */}
                <div className="absolute top-5 left-5 bg-[#100C14]/90 backdrop-blur-md border border-[#E4BE78]/50 text-[#E4BE78] text-xs font-serif font-bold tracking-widest uppercase px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <Crown className="w-4 h-4 text-[#E4BE78]" />
                  <span>Bridal Haute Beauté</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#100C14]/90 backdrop-blur-md border border-[#E4BE78]/40 text-white shadow-xl">
                  <p className="text-xs text-[#E4BE78] font-bold uppercase tracking-wider mb-1">
                    Signature Wedding Package
                  </p>
                  <p className="font-serif text-base sm:text-lg font-bold">
                    Barat · Walima · Mehndi · Nikah Bespoke Styling
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text & Consultation Details */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#E4BE78]/20 border border-[#E4BE78]/50 text-[#E4BE78] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-[#E4BE78]" />
              <span>Pakistani Bridal Specialist</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-[#FFFDFC]">
              Your Big Day Deserves a Beauty Experience as Special as You Are.
            </h2>

            <p className="text-[#F3E5DC] text-base sm:text-lg leading-relaxed mb-8 font-normal">
              From bridal makeup to hairstyling and finishing touches, create a
              complete look designed around your wedding day. We take time to
              understand your jewelry, dress fabric, lighting, and personal comfort
              to craft an enduringly regal look.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {bridalHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#1E1824] border border-[#E4BE78]/30 hover:border-[#E4BE78] transition-colors shadow-sm"
                >
                  <h3 className="font-serif text-sm font-bold text-[#E4BE78] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#FFFDFC]/90 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct WhatsApp Consultation CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={buildWhatsAppUrl(WHATSAPP_MESSAGES.bridal)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#1EA952] hover:bg-[#178942] text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                <span>Discuss Your Bridal Look on WhatsApp</span>
              </a>
            </div>

            <p className="text-xs text-[#EBD7C7] mt-4 italic font-medium">
              Advance booking recommended for wedding season dates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
