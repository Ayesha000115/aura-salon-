import React from "react";
import { Sparkles, HeartHandshake, ShieldCheck, Crown } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Sparkles,
      title: "Professional Expertise",
      desc: "Skilled beauty professionals with meticulous attention to detail, technique, and artistry.",
    },
    {
      icon: HeartHandshake,
      title: "Personalized Looks",
      desc: "Services tailored to your individual skin tone, face shape, outfit, and special occasion.",
    },
    {
      icon: ShieldCheck,
      title: "Hygienic Environment",
      desc: "A clean, sanitized and comfortable ladies-only salon environment adhering to high safety standards.",
    },
    {
      icon: Crown,
      title: "Occasion-Ready Beauty",
      desc: "From everyday grooming to complete bridal transformations, styled for Pakistani festivities.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDFC] border-t border-[#E5D2C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#9E2D44] uppercase tracking-widest block mb-2">
            The Aura Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#100C14] font-bold tracking-tight mb-4">
            Why Clients Choose Us
          </h2>
          <p className="text-[#2B232C] text-sm sm:text-base leading-relaxed font-normal">
            Our salon is founded on respectful ladies-only hospitality, genuine
            beauty expertise, and an unwavering commitment to personal comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#FFFDFC] p-6 rounded-2xl border-2 border-[#E2D1C5] hover:border-[#9E2D44] shadow-xs hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F3E5DC] text-[#9E2D44] flex items-center justify-center mb-5 border border-[#D9C3B4]">
                  <Icon className="w-6 h-6 text-[#9E2D44]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#100C14] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#2B232C] leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
