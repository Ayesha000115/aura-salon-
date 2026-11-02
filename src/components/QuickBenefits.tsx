import React from "react";
import { Sparkles, HeartHandshake, ShieldCheck, MessageCircle } from "lucide-react";

export const QuickBenefits: React.FC = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "Expert Beauty Professionals",
      description: "Professional beauty specialists focused on detail and quality.",
    },
    {
      icon: HeartHandshake,
      title: "Personalized Service",
      description: "Every appointment is tailored to your style and occasion.",
    },
    {
      icon: ShieldCheck,
      title: "Premium Beauty Experience",
      description: "A comfortable, hygienic and relaxing salon environment.",
    },
    {
      icon: MessageCircle,
      title: "Easy WhatsApp Booking",
      description: "Book your appointment directly through WhatsApp.",
    },
  ];

  return (
    <section className="bg-[#FFFDFC] border-b border-[#E5D2C5] py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl transition-all duration-200 bg-[#FFFDFC] hover:bg-[#F3E5DC]/50 border border-[#E5D2C5] shadow-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F3E5DC] text-[#9E2D44] flex items-center justify-center shrink-0 border border-[#D9C3B4] shadow-xs">
                  <Icon className="w-6 h-6 text-[#9E2D44]" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-[#100C14] mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2B232C] leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
