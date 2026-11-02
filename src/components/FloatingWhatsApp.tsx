import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "../config/salon";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
      {/* Tooltip badge on desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#100C14] text-white text-xs px-4 py-2.5 rounded-xl shadow-2xl border-2 border-[#E4BE78]/40 animate-fade-in">
          <span className="font-semibold">Need an appointment? Chat with us!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-white/70 hover:text-white cursor-pointer ml-1"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-[#1EA952] hover:bg-[#178942] text-white px-5 py-3.5 sm:px-6 sm:py-4 rounded-full shadow-2xl hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#1EA952]/50 border-2 border-white/20"
        aria-label="Book on WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white" />
          {/* Subtle online beacon pulse */}
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping opacity-75" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full" />
        </div>
        <span className="font-bold text-xs sm:text-sm tracking-wide">
          Book on WhatsApp
        </span>
      </a>
    </div>
  );
};
