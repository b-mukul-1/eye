import React from "react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { HeroSection } from "@/components/marketing/HeroSection";
import { TrustApproach } from "@/components/marketing/TrustApproach";
import { SignatureEyeViewer } from "@/components/common/SignatureEyeViewer";
import { ServicesOverview } from "@/components/marketing/ServicesOverview";
import { HowItWorksSteps } from "@/components/marketing/HowItWorksSteps";
import { ContinuityOfCare } from "@/components/marketing/ContinuityOfCare";
import { FamilyCareSection } from "@/components/marketing/FamilyCareSection";
import { PractitionerSection } from "@/components/marketing/PractitionerSection";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { FinalCta } from "@/components/marketing/FinalCta";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-warm-ivory flex flex-col font-sans text-deep-ink">
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section (Controlled Editorial Asymmetry + Hero Photo + 3D Eye Accent) */}
        <HeroSection />

        {/* 2. Trust and Practical Care Approach */}
        <TrustApproach />

        {/* 3. Signature 3D Visual & Anatomical Explorer */}
        <section className="py-20 bg-warm-ivory border-b border-clinical-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SignatureEyeViewer />
          </div>
        </section>

        {/* 4. Services Section (Varied layout, 5 services, home vs clinic distinctions) */}
        <ServicesOverview />

        {/* 5. How It Works (5-step progressive clinical journey) */}
        <HowItWorksSteps />

        {/* 6. Continuity of Care (Longitudinal history & interactive demo record preview) */}
        <ContinuityOfCare />

        {/* 7. Family and Caregiver Section (Empathetic aging parents care + photo) */}
        <FamilyCareSection />

        {/* 8. Practitioner and Partner Section (Network, MD oversight, working enquiry form) */}
        <PractitionerSection />

        {/* 9. FAQs (Practical guidance answering 6 core questions) */}
        <FaqAccordion />

        {/* 10. Final Calm CTA */}
        <FinalCta />
      </main>

      {/* 11. Architectural Footer */}
      <Footer />
    </div>
  );
}
