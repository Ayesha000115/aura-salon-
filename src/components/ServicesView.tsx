import React, { useState } from "react";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { SALON_SERVICES, ServiceItem } from "../data/servicesData";
import { buildWhatsAppUrl } from "../config/salon";

interface ServicesViewProps {
  onSelectServiceModal: (service: ServiceItem) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onSelectServiceModal,
  onOpenBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Services" },
    { id: "makeup", label: "Makeup & Bridal" },
    { id: "hair", label: "Hair & Styling" },
    { id: "nails", label: "Nail Care" },
    { id: "facial", label: "Facial & Skin" },
    { id: "grooming", label: "Threading & Waxing" },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? SALON_SERVICES
      : SALON_SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <div className="py-12 sm:py-20 bg-[#FFFDFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#9E2D44] uppercase tracking-widest block mb-2">
            Complete Service Menu
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#100C14] font-bold tracking-tight mb-4">
            Professional Beauty & Salon Services
          </h1>
          <p className="text-[#2B232C] text-sm sm:text-base leading-relaxed font-normal">
            Every service is tailored to your unique requirements, occasion, and
            comfort. Explore what is included in each of our professional treatments
            below and book directly via WhatsApp.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`cursor-pointer px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  isSelected
                    ? "bg-[#100C14] text-[#FFFDFC] shadow-md border-2 border-[#100C14]"
                    : "bg-[#FFFDFC] hover:bg-[#F3E5DC] text-[#2B232C] hover:text-[#100C14] border-2 border-[#D9C3B4]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Detailed Service Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#FFFDFC] rounded-2xl overflow-hidden border-2 border-[#E2D1C5] hover:border-[#9E2D44] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row"
            >
              {/* Image side */}
              <div className="sm:w-2/5 h-60 sm:h-auto relative bg-[#100C14]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded bg-[#FFFDFC]/95 backdrop-blur-sm text-[#100C14] border border-[#D9C3B4] shadow-sm">
                    {service.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Text & Inclusions side */}
              <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#100C14] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2B232C] leading-relaxed mb-4 font-normal">
                    {service.detailedDescription}
                  </p>

                  {/* Bulleted Inclusions */}
                  <div className="mb-6 space-y-2 pt-3 border-t border-[#E5D2C5]">
                    <p className="text-xs font-bold text-[#9E2D44] uppercase tracking-wider mb-2">
                      What's Included:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1.5">
                      {service.includes.slice(0, 6).map((inc, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 text-xs text-[#2B232C] font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#A2752B] shrink-0" />
                          <span className="truncate">{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                  <a
                    href={buildWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-[#1EA952] hover:bg-[#178942] text-white text-xs font-bold py-3 px-4 rounded-xl shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                    <span>{service.ctaText}</span>
                  </a>

                  <button
                    onClick={() => onSelectServiceModal(service)}
                    className="w-full sm:w-auto text-xs font-bold text-[#100C14] hover:bg-[#100C14] hover:text-white py-3 px-3.5 border-2 border-[#100C14] rounded-xl transition-all cursor-pointer"
                  >
                    All Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Consultation Banner */}
        <div className="mt-16 bg-[#100C14] rounded-2xl p-8 sm:p-12 text-[#FFFDFC] flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-[#A2752B]/40 shadow-xl">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E4BE78] block mb-2">
              Unsure which treatment is right for you?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2 text-white">
              Speak With Our Salon Artists on WhatsApp
            </h3>
            <p className="text-sm text-[#F3E5DC]">
              Send us a photo of your desired look or ask any questions about our
              treatments, bridal packages, and available slots.
            </p>
          </div>

          <a
            href={buildWhatsAppUrl(
              "Hi, I would like to consult with an artist about which salon service or package would best suit my needs."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#1EA952] hover:bg-[#178942] text-white px-7 py-4 rounded-full text-sm font-bold shadow-lg transition-all shrink-0"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Consult on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
