import React from "react";
import { MessageSquareQuote } from "lucide-react";
import { SALON_CONFIG } from "../config/salon";

export const TestimonialsPlaceholder: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F3E5DC]/50 border-t border-[#E5D2C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#9E2D44] uppercase tracking-widest block mb-2">
            Client Feedback
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#100C14] font-bold tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[#2B232C] text-sm sm:text-base leading-relaxed font-normal">
            We value the trust of our clients. Genuine feedback and client testimonials
            from our visitors will be showcased here.
          </p>
        </div>

        {/* Clean, honest placeholder review cards without fake personas or fake quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              category: "Bridal Client Feedback",
              note: "Reserved for genuine bride reviews regarding wedding day makeup, hairstyling, and dressing suite experience.",
            },
            {
              category: "Hair & Color Client Feedback",
              note: "Reserved for verified customer reviews regarding haircuts, balayage, and restorative hair treatments.",
            },
            {
              category: "Skincare & Grooming Client Feedback",
              note: "Reserved for client impressions on hygiene, facial treatments, manicure, and pedicure care.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFDFC] p-6 rounded-2xl border-2 border-dashed border-[#D9C3B4] flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="w-11 h-11 rounded-full bg-[#F3E5DC] text-[#9E2D44] flex items-center justify-center mb-4 border border-[#D9C3B4]">
                  <MessageSquareQuote className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#100C14] mb-2">
                  {item.category}
                </h3>
                <p className="text-xs sm:text-sm text-[#2B232C] italic leading-relaxed font-normal">
                  "{item.note}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5D2C5] flex items-center justify-between text-xs text-[#2B232C]">
                <span className="font-bold text-[#9E2D44]">[Genuine Client Review Placeholder]</span>
                <span className="text-[#A2752B] font-bold">★ ★ ★ ★ ★</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs font-semibold text-[#2B232C]">
          Visited {SALON_CONFIG.name}? Share your experience with us on WhatsApp to be
          featured.
        </div>
      </div>
    </section>
  );
};
