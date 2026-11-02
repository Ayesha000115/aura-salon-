import React from "react";
import { MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { SALON_SERVICES, ServiceItem } from "../data/servicesData";
import { buildWhatsAppUrl } from "../config/salon";

interface FeaturedServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onViewAllServices: () => void;
}

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({
  onSelectService,
  onViewAllServices,
}) => {
  // Take the key services requested
  const featured = SALON_SERVICES.filter((s) => s.featuredInHome).slice(0, 9);

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#9E2D44] uppercase tracking-widest block mb-2">
            Curated Salon Menu
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#100C14] font-bold tracking-tight mb-4">
            Beauty Services Designed Around You
          </h2>
          <p className="text-[#2B232C] text-sm sm:text-base leading-relaxed font-normal">
            From everyday beauty care to complete bridal transformations, explore our
            professional salon services crafted for Pakistani ladies and festive occasions.
          </p>
        </div>

        {/* 3-Column Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featured.map((service) => (
            <div
              key={service.id}
              className="group bg-[#FFFDFC] rounded-2xl overflow-hidden border-2 border-[#E2D1C5] hover:border-[#9E2D44] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-60 overflow-hidden bg-[#100C14]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-bold text-[#100C14] bg-[#FFFDFC]/95 backdrop-blur-sm px-3 py-1 rounded-md shadow-sm border border-[#D9C3B4]">
                      {service.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-[#100C14] mb-2 group-hover:text-[#9E2D44] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2B232C] leading-relaxed mb-4 font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Highlights (first 2 inclusions) */}
                  <div className="space-y-2 pt-3 border-t border-[#E5D2C5] mb-4">
                    {service.includes.slice(0, 2).map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs font-medium text-[#2B232C]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#A2752B] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href={buildWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-[#1EA952] hover:bg-[#178942] text-white text-xs font-bold py-3 px-4 rounded-xl shadow-sm hover:shadow transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                  <span>{service.ctaText}</span>
                </a>

                <button
                  onClick={() => onSelectService(service)}
                  className="w-full sm:w-auto text-xs font-semibold text-[#100C14] hover:text-[#FFFDFC] hover:bg-[#100C14] py-3 px-3.5 border-2 border-[#100C14] rounded-xl transition-all cursor-pointer"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Link */}
        <div className="text-center">
          <button
            onClick={onViewAllServices}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#100C14] hover:text-[#9E2D44] group pb-1 border-b-2 border-[#100C14] hover:border-[#9E2D44] transition-all cursor-pointer"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
