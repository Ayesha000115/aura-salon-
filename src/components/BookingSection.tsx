import React, { useState } from "react";
import { MessageCircle, Phone, Check, Clock, MapPin, Sparkles } from "lucide-react";
import { SALON_CONFIG, buildWhatsAppUrl } from "../config/salon";

interface BookingSectionProps {
  initialService?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialService }) => {
  const serviceOptions = [
    { id: "bridal", label: "Bridal Makeup", msgSubject: "Bridal Makeup" },
    { id: "party", label: "Party Makeup", msgSubject: "Party Makeup" },
    { id: "haircut", label: "Haircut & Styling", msgSubject: "Haircut & Styling" },
    { id: "haircolor", label: "Hair Color / Highlights", msgSubject: "Hair Color / Highlights" },
    { id: "hairtreatment", label: "Hair Treatment", msgSubject: "Hair Treatment" },
    { id: "manicure", label: "Manicure", msgSubject: "Manicure" },
    { id: "pedicure", label: "Pedicure", msgSubject: "Pedicure" },
    { id: "facial", label: "Facial & Skin Care", msgSubject: "Facial & Skin Care" },
    { id: "grooming", label: "Threading & Waxing", msgSubject: "Threading & Waxing" },
    { id: "general", label: "General Inquiry", msgSubject: "a salon service" },
  ];

  const [selectedService, setSelectedService] = useState<string>(
    initialService || "Bridal Makeup"
  );
  const [preferredDay, setPreferredDay] = useState<string>("");
  const [extraNote, setExtraNote] = useState<string>("");

  // Build the live preview of the WhatsApp message
  const constructMessage = () => {
    let msg = `Hi, I would like to book an appointment at ${SALON_CONFIG.name}. I am interested in ${selectedService}.`;
    if (preferredDay) {
      msg += ` My preferred timing/day is ${preferredDay}.`;
    }
    if (extraNote.trim()) {
      msg += ` (${extraNote.trim()})`;
    }
    msg += ` Please let me know the available timings.`;
    return msg;
  };

  const finalMessage = constructMessage();
  const whatsappUrl = buildWhatsAppUrl(finalMessage);

  return (
    <section id="booking-section" className="py-16 sm:py-24 bg-[#F3E5DC]/50 border-t border-[#E5D2C5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFDFC] border-2 border-[#D9C3B4] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#9E2D44] uppercase tracking-widest block mb-2">
              Fast & Direct Booking
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#100C14] font-bold tracking-tight mb-4">
              Ready for Your Beauty Appointment?
            </h2>
            <p className="text-[#2B232C] text-sm sm:text-base leading-relaxed font-normal">
              Tell us what service you'd like and we'll help you arrange your
              appointment through WhatsApp. We respond promptly with available time
              slots.
            </p>
          </div>

          {/* Interactive Service Selector */}
          <div className="mb-8">
            <label className="block text-xs font-bold text-[#100C14] uppercase tracking-wider mb-3">
              1. Select Your Desired Service:
            </label>
            <div className="flex flex-wrap gap-2.5">
              {serviceOptions.map((opt) => {
                const isSelected = selectedService === opt.msgSubject;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedService(opt.msgSubject)}
                    className={`cursor-pointer px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-[#100C14] text-[#FFFDFC] shadow-md border-2 border-[#100C14]"
                        : "bg-[#FFFDFC] hover:bg-[#F3E5DC] text-[#2B232C] hover:text-[#100C14] border-2 border-[#D9C3B4]"
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#E4BE78]" />}
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Optional Quick Preferences */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div>
              <label className="block text-xs font-bold text-[#100C14] uppercase tracking-wider mb-2">
                2. Preferred Day / Time (Optional):
              </label>
              <input
                type="text"
                placeholder="e.g. Saturday afternoon, or Oct 12th"
                value={preferredDay}
                onChange={(e) => setPreferredDay(e.target.value)}
                className="w-full bg-[#FFFDFC] border-2 border-[#D9C3B4] focus:border-[#A2752B] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#100C14] font-medium outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#100C14] uppercase tracking-wider mb-2">
                3. Any Special Request or Occasion (Optional):
              </label>
              <input
                type="text"
                placeholder="e.g. Barat bride with heavy dupatta, or hair gloss"
                value={extraNote}
                onChange={(e) => setExtraNote(e.target.value)}
                className="w-full bg-[#FFFDFC] border-2 border-[#D9C3B4] focus:border-[#A2752B] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#100C14] font-medium outline-none transition-colors"
              />
            </div>
          </div>

          {/* Live WhatsApp Message Preview with High Contrast */}
          <div className="mb-8 p-5 rounded-2xl bg-[#F3E5DC] border-2 border-[#D9C3B4]">
            <div className="flex items-center gap-2 text-xs font-bold text-[#9E2D44] uppercase tracking-wider mb-2">
              <MessageCircle className="w-4 h-4 text-[#1EA952]" />
              <span>Live Pre-Filled WhatsApp Message Preview</span>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#100C14] bg-white p-4 rounded-xl border border-[#D9C3B4] leading-relaxed break-words font-medium shadow-xs">
              "{finalMessage}"
            </p>
            <p className="text-[11px] text-[#2B232C] mt-2 italic font-medium">
              Clicking the button below directly opens WhatsApp with this customized
              text pre-filled.
            </p>
          </div>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#1EA952] hover:bg-[#178942] text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 fill-white shrink-0" />
              <span>Book Your Appointment on WhatsApp</span>
            </a>

            <a
              href={`tel:${SALON_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-[#100C14] text-[#100C14] hover:bg-[#100C14] hover:text-[#FFFDFC] px-7 py-4 rounded-full font-bold text-sm sm:text-base transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call the Salon ({SALON_CONFIG.phone})</span>
            </a>
          </div>

          {/* Salon Location & Timings Quick Note */}
          <div className="mt-10 pt-6 border-t border-[#E5D2C5] grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left text-xs font-semibold text-[#2B232C]">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <MapPin className="w-4 h-4 text-[#A2752B] shrink-0" />
              <span>{SALON_CONFIG.address}, {SALON_CONFIG.city}</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Clock className="w-4 h-4 text-[#A2752B] shrink-0" />
              <span>Mon–Sat: 11:00 AM – 8:00 PM</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-[#A2752B] shrink-0" />
              <span>Strict Ladies-Only Facility</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
