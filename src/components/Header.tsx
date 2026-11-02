import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, Menu, X, Sparkles, Clock, MapPin } from "lucide-react";
import { SALON_CONFIG, buildWhatsAppUrl, WHATSAPP_MESSAGES } from "../config/salon";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "bridal", label: "Bridal" },
    { id: "gallery", label: "Gallery" },
    { id: "about", label: "About" },
    { id: "booking", label: "Book Appointment" },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification Bar - High Contrast Dark */}
      <div className="bg-[#100C14] text-[#FFFDFC] py-2 px-4 text-xs font-medium border-b border-[#2C2432]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 text-[#E4BE78]">
            <Clock className="w-3.5 h-3.5 shrink-0 text-[#E4BE78]" />
            <span className="font-medium text-[#FFFDFC]">Mon–Sat: 11:00 AM – 8:00 PM · Dedicated Ladies Only Studio</span>
          </div>
          <div className="flex items-center gap-4 text-[#FFFDFC]">
            <span className="hidden md:inline-flex items-center gap-1 text-[#EBD7C7]">
              <MapPin className="w-3 h-3 text-[#E4BE78]" />
              {SALON_CONFIG.city}
            </span>
            <a
              href={`tel:${SALON_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
              className="hover:text-[#E4BE78] transition-colors flex items-center gap-1 text-[#FFFDFC] font-semibold"
            >
              <Phone className="w-3 h-3 text-[#E4BE78]" />
              <span>{SALON_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          isScrolled
            ? "bg-[#FFFDFC]/98 backdrop-blur-md shadow-md border-[#D9C3B4] py-3"
            : "bg-[#FFFDFC] border-[#E5D2C5] py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="text-left group cursor-pointer focus:outline-none"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#100C14] text-[#E4BE78] flex items-center justify-center font-serif font-bold text-base tracking-widest shadow-sm border border-[#A2752B]/40">
                A
              </div>
              <div>
                <span className="block font-serif text-lg sm:text-xl font-bold tracking-wider text-[#100C14] group-hover:text-[#9E2D44] transition-colors uppercase">
                  Aura Lounge
                </span>
                <span className="block text-[10px] tracking-[0.22em] font-semibold text-[#9E2D44] uppercase">
                  Ladies Salon & Bridal Studio
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#2B232C]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors py-1 cursor-pointer relative ${
                  activeTab === item.id
                    ? "text-[#100C14] font-bold"
                    : "hover:text-[#9E2D44]"
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A2752B] rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Right Action: WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${SALON_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
              className="p-2.5 text-[#100C14] hover:text-[#9E2D44] transition-colors rounded-full hover:bg-[#F3E5DC]"
              title="Call Salon"
            >
              <Phone className="w-4 h-4 text-[#100C14]" />
            </a>

            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1EA952] hover:bg-[#178942] text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wide shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Book on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-full bg-[#1EA952] text-white shadow-sm"
              aria-label="Book on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#100C14] hover:text-[#9E2D44] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#D9C3B4] bg-[#FFFDFC] px-4 pt-3 pb-6 mt-3 shadow-xl">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    activeTab === item.id
                      ? "bg-[#F3E5DC] text-[#100C14] font-bold border-l-4 border-[#A2752B]"
                      : "text-[#2B232C] hover:bg-[#F3E5DC]/70"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3 border-t border-[#D9C3B4] flex flex-col gap-2.5">
                <a
                  href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#1EA952] text-white py-3 rounded-xl text-sm font-bold shadow-md"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Book on WhatsApp</span>
                </a>

                <a
                  href={`tel:${SALON_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
                  className="w-full flex items-center justify-center gap-2 border-2 border-[#100C14] text-[#100C14] hover:bg-[#100C14] hover:text-white py-2.5 rounded-xl text-sm font-bold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {SALON_CONFIG.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
