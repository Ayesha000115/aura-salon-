import React from "react";
import { MessageCircle } from "lucide-react";
import { SALON_CONFIG, buildWhatsAppUrl, WHATSAPP_MESSAGES } from "../config/salon";

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <div className="py-16 sm:py-24 bg-[#FFFDFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-[#100C14] border-2 border-[#D9C3B4]">
                <img
                  src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=85"
                  alt="Aura Ladies Beauty Lounge & Bridal Studio interior"
                  className="w-full h-[450px] sm:h-[500px] object-cover"
                />
              </div>

              {/* Decorative accent card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#FFFDFC] p-5 rounded-2xl border-2 border-[#A2752B] shadow-xl max-w-[260px]">
                <p className="text-xs uppercase tracking-wider text-[#9E2D44] font-bold mb-1">
                  Ladies Only Sanctuary
                </p>
                <p className="text-xs text-[#2B232C] font-medium leading-snug">
                  Designed for peace of mind, privacy, and serene relaxation.
                </p>
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold text-[#9E2D44] uppercase tracking-widest block mb-2">
              About Our Salon
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#100C14] font-bold tracking-tight mb-6">
              Beauty With Care, Detail & Confidence
            </h1>

            <div className="space-y-4 text-[#2B232C] text-sm sm:text-base leading-relaxed mb-8 font-normal">
              <p>
                {SALON_CONFIG.name} is dedicated to providing personalized beauty,
                hair, makeup, and bridal services in a comfortable, welcoming, and
                strictly hygienic ladies-only atmosphere.
              </p>
              <p>
                We believe that salon care should be a serene, revitalizing experience.
                Whether you are stepping in for quick routine grooming or preparing
                for your wedding day, our team takes the time to listen to your
                wishes, understand your natural skin and hair texture, and deliver
                refined results with uncompromising care.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-[#F3E5DC] border-2 border-[#D9C3B4]">
                <h3 className="font-serif text-base font-bold text-[#100C14] mb-1">
                  Personalized Attention
                </h3>
                <p className="text-xs text-[#2B232C] font-normal">
                  Every consultation is focused on what flatters your features, outfit,
                  and comfort.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F3E5DC] border-2 border-[#D9C3B4]">
                <h3 className="font-serif text-base font-bold text-[#100C14] mb-1">
                  Hygienic Environment
                </h3>
                <p className="text-xs text-[#2B232C] font-normal">
                  Single-use disposables, sanitized tools, and clean workstations for
                  every client.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F3E5DC] border-2 border-[#D9C3B4]">
                <h3 className="font-serif text-base font-bold text-[#100C14] mb-1">
                  Occasion-Based Styling
                </h3>
                <p className="text-xs text-[#2B232C] font-normal">
                  Deep understanding of Pakistani wedding events: Barat, Walima, Mehndi,
                  and dholkis.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F3E5DC] border-2 border-[#D9C3B4]">
                <h3 className="font-serif text-base font-bold text-[#100C14] mb-1">
                  Warm Ladies Hospitality
                </h3>
                <p className="text-xs text-[#2B232C] font-normal">
                  A private, calm environment where you can unwind while being pampered.
                </p>
              </div>
            </div>

            {/* Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#1EA952] hover:bg-[#178942] text-white px-8 py-4 rounded-full font-bold text-sm shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                <span>Connect With Us on WhatsApp</span>
              </a>
            </div>

            {/* Clearly marked placeholder notice for the salon owner */}
            <div className="mt-8 p-4 rounded-xl border-2 border-dashed border-[#D9C3B4] bg-[#F3E5DC]/60 text-xs text-[#2B232C]">
              <span className="font-bold text-[#100C14]">
                Note for Salon Management:
              </span>{" "}
              Specific founder history, certified affiliations, and branch locations
              can be configured in <code className="text-[#9E2D44] font-bold">src/config/salon.ts</code>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
