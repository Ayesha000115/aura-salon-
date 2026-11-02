import React from "react";
import { MessageCircle, ArrowRight, Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";
import { SALON_CONFIG, buildWhatsAppUrl, WHATSAPP_MESSAGES } from "../config/salon";

interface HeroSectionProps {
  onExploreServices: () => void;
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreServices,
  onOpenBooking,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDFC] via-[#FFFDFC] to-[#F3E5DC]/50 py-12 sm:py-16 lg:py-24 border-b border-[#E5D2C5]">
      {/* Subtle decorative background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-[#F3E5DC]/80 to-[#FFFDFC] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: High-Contrast Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* High Contrast Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 bg-[#F3E5DC] border border-[#D9C3B4] text-[#9E2D44] rounded-full text-xs font-bold tracking-widest uppercase shadow-xs">
              <Sparkles className="w-4 h-4 text-[#A2752B]" />
              <span>BEAUTY • STYLE • CONFIDENCE</span>
            </div>

            {/* Large Headline with High Contrast */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#100C14] font-bold tracking-tight leading-[1.12] mb-6">
              Your Beauty, <br />
              <span className="italic font-normal text-[#9E2D44]">
                Our Expertise.
              </span>
            </h1>

            {/* Supporting Text - Crisp and High Legibility */}
            <p className="text-[#241E26] text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-normal">
              Professional beauty, hair and bridal services designed to make every
              occasion unforgettable. Experience dedicated ladies-only pampering
              grounded in precision artistry, immaculate hygiene, and warm hospitality.
            </p>

            {/* Action Buttons with High Contrast */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <a
                href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#1EA952] hover:bg-[#178942] text-white px-7 py-4 rounded-full font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                <span>Book Your Appointment on WhatsApp</span>
              </a>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#100C14] text-[#100C14] hover:bg-[#100C14] hover:text-[#FFFDFC] px-6 py-4 rounded-full font-semibold text-sm sm:text-base transition-all cursor-pointer shadow-xs"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Statement */}
            <div className="pt-5 border-t border-[#D9C3B4] w-full max-w-lg">
              <p className="text-xs sm:text-sm font-semibold text-[#2B232C] tracking-wide flex items-center flex-wrap gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A2752B]" />
                <span>Professional Beauty Services</span>
                <span className="text-[#A2752B] font-bold">•</span>
                <span>Bridal Specialists</span>
                <span className="text-[#A2752B] font-bold">•</span>
                <span>Personalized Care</span>
              </p>
            </div>
          </div>

          {/* Right Column: Hero Visual Area */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative border / frame */}
              <div className="absolute -inset-3 rounded-3xl border-2 border-[#A2752B]/40 -rotate-1 pointer-events-none" />

              {/* Main Visual Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#100C14] border border-[#D9C3B4]">
                <img
                  src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=85"
                  alt="Pakistani bridal makeup and royal salon beauty preparation"
                  className="w-full h-[450px] sm:h-[520px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
                />

                {/* Gradient vignette for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#100C14]/90 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#FFFDFC]/95 backdrop-blur-md border border-white text-[#100C14] shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#9E2D44] uppercase tracking-wider">
                        Ladies Sanctuary
                      </p>
                      <p className="font-serif text-base font-bold text-[#100C14]">
                        Lahore's Dedicated Beauty Studio
                      </p>
                    </div>
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#1EA952]/15 text-[#137837] border border-[#1EA952]/40">
                      Open Today
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
