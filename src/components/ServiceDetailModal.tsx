import React from "react";
import { X, CheckCircle2, MessageCircle } from "lucide-react";
import { ServiceItem } from "../data/servicesData";
import { buildWhatsAppUrl } from "../config/salon";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
}) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#100C14]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#FFFDFC] border-2 border-[#D9C3B4] rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image & Close */}
        <div className="relative h-52 sm:h-64 bg-[#100C14] overflow-hidden shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#100C14]/95 via-[#100C14]/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-[#100C14]/80 hover:bg-[#100C14] text-white transition-colors cursor-pointer border border-white/20 shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="text-xs uppercase tracking-wider text-[#E4BE78] font-bold block mb-1">
              {service.categoryLabel}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content body with scroll */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#9E2D44] font-bold mb-2">
              Overview
            </h4>
            <p className="text-sm sm:text-base text-[#2B232C] leading-relaxed font-normal">
              {service.detailedDescription}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#9E2D44] font-bold mb-3">
              Comprehensive Service Breakdown
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.includes.map((inc, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F3E5DC]/60 border border-[#D9C3B4] text-xs sm:text-sm text-[#100C14] font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#A2752B] shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#F3E5DC]/50 border border-[#D9C3B4] text-xs text-[#2B232C]">
            <p>
              <strong className="text-[#100C14] font-bold">Personalized Timing & Consultation:</strong>{" "}
              Every treatment is tailored to your schedule and specific preferences.
              Timings, customized requests, and bridal details can be coordinated
              seamlessly via WhatsApp.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#F3E5DC]/50 border-t border-[#D9C3B4] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto text-xs font-bold text-[#2B232C] hover:text-[#100C14] px-4 py-2.5 cursor-pointer"
          >
            Close Window
          </button>

          <a
            href={buildWhatsAppUrl(service.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#1EA952] hover:bg-[#178942] text-white px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>{service.ctaText} on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
