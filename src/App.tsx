/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { QuickBenefits } from "./components/QuickBenefits";
import { FeaturedServices } from "./components/FeaturedServices";
import { BridalSpotlight } from "./components/BridalSpotlight";
import { GallerySection } from "./components/GallerySection";
import { ServicesView } from "./components/ServicesView";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { AboutSection } from "./components/AboutSection";
import { TestimonialsPlaceholder } from "./components/TestimonialsPlaceholder";
import { BookingSection } from "./components/BookingSection";
import { ServiceDetailModal } from "./components/ServiceDetailModal";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Footer } from "./components/Footer";
import { ServiceItem } from "./data/servicesData";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [selectedServiceForModal, setSelectedServiceForModal] =
    useState<ServiceItem | null>(null);
  const [preselectedBookingService, setPreselectedBookingService] =
    useState<string>("Bridal Makeup");

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedBookingService(serviceName);
    }
    setActiveTab("booking");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleExploreServices = () => {
    setActiveTab("services");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F5] text-[#1B1720]">
      {/* Global Sticky Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* HOME VIEW */}
        {activeTab === "home" && (
          <>
            <HeroSection
              onExploreServices={handleExploreServices}
              onOpenBooking={() => handleOpenBooking("General Booking")}
            />
            <QuickBenefits />
            <FeaturedServices
              onSelectService={(service) => setSelectedServiceForModal(service)}
              onViewAllServices={handleExploreServices}
            />
            <BridalSpotlight onOpenBooking={handleOpenBooking} />
            {/* Gallery on Home for visual showcase */}
            <GallerySection onOpenBooking={handleOpenBooking} />
            <WhyChooseUs />
            <TestimonialsPlaceholder />
            <BookingSection initialService={preselectedBookingService} />
          </>
        )}

        {/* SERVICES VIEW */}
        {activeTab === "services" && (
          <>
            <ServicesView
              onSelectServiceModal={(service) => setSelectedServiceForModal(service)}
              onOpenBooking={handleOpenBooking}
            />
            <BookingSection initialService={preselectedBookingService} />
          </>
        )}

        {/* BRIDAL VIEW */}
        {activeTab === "bridal" && (
          <>
            <BridalSpotlight onOpenBooking={handleOpenBooking} />
            <div className="py-12 bg-[#FFF9F5]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className="text-xs font-semibold text-[#B76E79] uppercase tracking-widest block mb-2">
                    Bridal Lookbook
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#1B1720]">
                    Recent Bridal Transformations
                  </h2>
                </div>
                {/* Re-use gallery component focused on bridal work */}
                <GallerySection onOpenBooking={handleOpenBooking} />
              </div>
            </div>
            <BookingSection initialService="Bridal Makeup" />
          </>
        )}

        {/* GALLERY VIEW (Requested Feature) */}
        {activeTab === "gallery" && (
          <div className="pt-6">
            <GallerySection onOpenBooking={handleOpenBooking} />
            <BookingSection initialService="General Inquiry" />
          </div>
        )}

        {/* ABOUT VIEW */}
        {activeTab === "about" && (
          <>
            <AboutSection onOpenBooking={() => handleOpenBooking("General Inquiry")} />
            <WhyChooseUs />
            <TestimonialsPlaceholder />
            <BookingSection initialService="General Inquiry" />
          </>
        )}

        {/* BOOK APPOINTMENT VIEW */}
        {activeTab === "booking" && (
          <div className="py-8">
            <BookingSection initialService={preselectedBookingService} />
          </div>
        )}
      </main>

      {/* Global Detail Modal */}
      <ServiceDetailModal
        service={selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
      />

      {/* Fixed Floating WhatsApp CTA Button on all pages */}
      <FloatingWhatsApp />

      {/* Global Footer */}
      <Footer onNavClick={(tab) => setActiveTab(tab)} />
    </div>
  );
}
