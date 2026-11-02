import React, { useState, useEffect, useCallback } from "react";
import {
  MessageCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import {
  SALON_GALLERY,
  GALLERY_CATEGORIES,
  GalleryCategory,
  GalleryItem,
} from "../data/galleryData";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "../config/salon";

interface GallerySectionProps {
  onOpenBooking?: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter gallery items based on category
  const filteredItems =
    selectedCategory === "all"
      ? SALON_GALLERY
      : SALON_GALLERY.filter((item) => item.category === selectedCategory);

  const activeItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  // Handle next / prev in lightbox
  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null ? null : prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null ? null : prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  }, [lightboxIndex, filteredItems.length]);

  const handleClose = () => {
    setLightboxIndex(null);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lightboxIndex]);

  // Count items per category
  const getCategoryCount = (catId: GalleryCategory) => {
    if (catId === "all") return SALON_GALLERY.length;
    return SALON_GALLERY.filter((item) => item.category === catId).length;
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FFFDFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#9E2D44] uppercase tracking-widest block mb-2">
            Visual Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#100C14] font-bold tracking-tight mb-4">
            Curated Salon Gallery
          </h2>
          <p className="text-[#2B232C] text-sm sm:text-base leading-relaxed font-normal">
            Browse through our authentic work spanning Pakistani bridal transformations,
            festive party glam, bespoke hairstyling, precision nail care, and our calming
            ladies studio interior.
          </p>
        </div>

        {/* Categorized Filter Tabs (High Contrast Interactive buttons) */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3 mb-12">
          {GALLERY_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = getCategoryCount(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setLightboxIndex(null);
                }}
                className={`cursor-pointer px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#100C14] text-[#FFFDFC] shadow-md border-2 border-[#100C14]"
                    : "bg-[#FFFDFC] hover:bg-[#F3E5DC] text-[#2B232C] hover:text-[#100C14] border-2 border-[#D9C3B4] shadow-xs"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                    isSelected
                      ? "bg-[#A2752B] text-white"
                      : "bg-[#F3E5DC] text-[#100C14] border border-[#D9C3B4]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive Masonry / Column Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-[#100C14] border-2 border-[#E2D1C5] hover:border-[#9E2D44] shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden cursor-pointer ${
                  item.aspectRatio === "tall"
                    ? "h-96"
                    : item.aspectRatio === "wide"
                    ? "h-64"
                    : "h-80"
                }`}
                onClick={() => setLightboxIndex(index)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#100C14]/95 via-[#100C14]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded bg-[#100C14]/90 text-[#E4BE78] backdrop-blur-sm border border-[#E4BE78]/40 shadow-sm">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Click to Zoom Overlay Icon */}
                <div className="absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="w-8 h-8 rounded-full bg-white text-[#100C14] flex items-center justify-center shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                {/* Bottom Details Overlaid on Image with High Legibility */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Clean unboxed tags with typographic bullet separators */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#F3E5DC] font-medium mb-3">
                    {item.tags.map((tag, tagIdx) => (
                      <React.Fragment key={tagIdx}>
                        <span>{tag}</span>
                        {tagIdx < item.tags.length - 1 && (
                          <span aria-hidden="true" className="text-[#E4BE78] font-bold">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Action row */}
                  <div className="flex items-center justify-between pt-2.5 border-t border-white/20">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxIndex(index);
                      }}
                      className="text-xs font-bold text-[#E4BE78] hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <span>View Full Look</span>
                    </button>

                    <a
                      href={buildWhatsAppUrl(
                        WHATSAPP_MESSAGES.galleryLook(item.title, item.categoryLabel)
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 bg-[#1EA952] hover:bg-[#178942] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow-sm transition-colors"
                      title="Inquire about this look on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom gallery guidance */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#FFFDFC] border-2 border-[#D9C3B4] max-w-2xl mx-auto text-center shadow-sm">
          <p className="text-sm text-[#2B232C] leading-relaxed font-normal">
            <strong className="text-[#100C14] font-bold">Looking for something bespoke?</strong>{" "}
            Have an inspiration picture for your Barat, Walima, Mehndi, or party? Share it
            with our artists directly on WhatsApp for a personalized consultation.
          </p>
          <div className="mt-5">
            <a
              href={buildWhatsAppUrl(
                "Hi, I have an inspiration photo from social media and would like to consult with your artists about recreating it at Aura Ladies Beauty Lounge."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#100C14] hover:bg-[#2A2030] text-[#FFFDFC] text-xs font-bold px-6 py-3 rounded-full transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-[#1EA952]" />
              <span>Share Inspiration Picture on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* ================= LIGHTBOX MODAL ================= */}
      {lightboxIndex !== null && activeItem && (
        <div
          className="fixed inset-0 z-50 bg-[#100C14]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={handleClose}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-20 cursor-pointer shadow-lg"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-20 cursor-pointer shadow-lg"
            aria-label="Previous Look"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-20 cursor-pointer shadow-lg"
            aria-label="Next Look"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#100C14] border-2 border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Side */}
            <div className="md:w-3/5 bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="max-h-[50vh] md:max-h-[80vh] w-full object-contain"
              />
            </div>

            {/* Info Side */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#100C14] text-[#FFFDFC]">
              <div>
                {/* Counter & Category */}
                <div className="flex items-center justify-between text-xs text-[#E4BE78] mb-4 font-bold">
                  <span className="uppercase tracking-widest">
                    {activeItem.categoryLabel}
                  </span>
                  <span className="text-[#FFFDFC]/70">
                    {lightboxIndex + 1} of {filteredItems.length}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white mb-3 leading-snug">
                  {activeItem.title}
                </h3>

                <p className="text-sm text-[#F3E5DC] leading-relaxed mb-6 font-normal">
                  {activeItem.description}
                </p>

                {/* Tags */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-[#E4BE78] font-bold mb-2">
                    Style Highlights
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#FFFDFC]/90 font-medium">
                    {activeItem.tags.map((tag, i) => (
                      <React.Fragment key={i}>
                        <span>{tag}</span>
                        {i < activeItem.tags.length - 1 && (
                          <span aria-hidden="true" className="text-[#E4BE78] font-bold">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action: Book / Inquire on WhatsApp */}
              <div className="pt-6 border-t border-white/20 space-y-3">
                <a
                  href={buildWhatsAppUrl(
                    WHATSAPP_MESSAGES.galleryLook(
                      activeItem.title,
                      activeItem.categoryLabel
                    )
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#1EA952] hover:bg-[#178942] text-white py-4 px-4 rounded-xl text-sm font-bold shadow-lg transition-colors"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Inquire About This Look on WhatsApp</span>
                </a>

                <p className="text-[11px] text-center text-[#FFFDFC]/60">
                  Pre-fills WhatsApp message with "{activeItem.title}".
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
