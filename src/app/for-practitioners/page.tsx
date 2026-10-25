import React from "react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { DemoModeBanner } from "@/components/common/DemoModeBanner";
import { EditorialHeading, SectionLabel, LeadParagraph } from "@/components/ui/Typography";
import { PractitionerSection } from "@/components/marketing/PractitionerSection";
import { TrustPillars } from "@/components/common/TrustPillars";

export default function ForPractitionersPage() {
  return (
    <div className="min-h-screen bg-warm-ivory flex flex-col font-sans text-deep-ink">
      <DemoModeBanner />
      <Navbar />

      <main className="flex-1 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-8">
            <SectionLabel className="mb-2">Practitioner & Partner Network</SectionLabel>
            <EditorialHeading as="h1" serifAccent="collaborative care.">
              Clinical governance and,
            </EditorialHeading>
            <LeadParagraph className="mt-3">
              We empower degree-holding optometrists with calibrated mobile diagnostic tools, connect
              consulting ophthalmologists with remote review channels, and partner with accredited
              tertiary eye hospitals for surgical referrals.
            </LeadParagraph>
          </div>
        </div>

        <PractitionerSection />
        <TrustPillars />
      </main>

      <Footer />
    </div>
  );
}
