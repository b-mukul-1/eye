import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { DemoModeBanner } from "@/components/common/DemoModeBanner";
import { EditorialHeading, SectionLabel, LeadParagraph } from "@/components/ui/Typography";
import { HowItWorksSteps } from "@/components/marketing/HowItWorksSteps";
import { TrustPillars } from "@/components/common/TrustPillars";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-warm-ivory flex flex-col font-sans text-deep-ink">
      <DemoModeBanner />
      <Navbar />

      <main className="flex-1 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12">
            <SectionLabel className="mb-2">Operational Methodology</SectionLabel>
            <EditorialHeading as="h1" serifAccent="explained transparently.">
              How our home eye-care works,
            </EditorialHeading>
            <LeadParagraph className="mt-3">
              Learn how we combine certified on-site optometry, sterilized portable diagnostics, and
              remote ophthalmologist oversight to deliver credible eye care at home.
            </LeadParagraph>
          </div>
        </div>

        {/* 5-step detailed visual progression */}
        <HowItWorksSteps />

        {/* Clinical boundaries & comparison */}
        <TrustPillars />

        {/* Call to action */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left">
          <div className="bg-warm-neutral/50 border border-clinical-border rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-deep-ink">Ready to experience care closer to home?</h3>
              <p className="text-xs sm:text-sm text-clinical-slate">
                Appointments available Monday through Saturday across major Indian metros.
              </p>
            </div>
            <Button href="/book" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Book a Home Visit
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
