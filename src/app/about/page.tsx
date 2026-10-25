import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { DemoModeBanner } from "@/components/common/DemoModeBanner";
import { EditorialHeading, SectionLabel, LeadParagraph } from "@/components/ui/Typography";
import { TrustPillars } from "@/components/common/TrustPillars";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Eye, Heart, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-warm-ivory flex flex-col font-sans text-deep-ink">
      <DemoModeBanner />
      <Navbar />

      <main className="flex-1 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-14">
            <SectionLabel className="mb-2">Our Clinical Mission</SectionLabel>
            <EditorialHeading as="h1" serifAccent="anchored in patient dignity.">
              Accurate, unhurried eye care,
            </EditorialHeading>
            <LeadParagraph className="mt-3">
              We started with a simple clinical observation: millions of older adults, busy families,
              and diabetic patients delay critical eye examinations simply because navigating tertiary
              hospital queues is physically exhausting.
            </LeadParagraph>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-4 text-sm text-clinical-slate leading-relaxed">
              <h3 className="text-xl font-bold text-deep-ink font-sans">
                A Collaborative Medical Model
              </h3>
              <p>
                OcuHome was designed to eliminate that barrier without sacrificing clinical rigor.
                By pairing university-trained optometrists on the ground with consulting
                ophthalmologists for remote review, we bridge the gap between home convenience and
                specialist oversight.
              </p>
              <p>
                We do not claim that every surgical disease can be diagnosed or treated at home.
                Instead, we uphold transparent boundaries: delivering exceptional primary screening,
                calibrated refraction, and pressure monitoring at home, while providing a clear,
                unbroken referral pathway to tertiary hospitals when invasive interventions are
                necessary.
              </p>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-clinical-border shadow-elevated">
              <Image
                src="/images/patient-counseling-care.jpg"
                alt="Patient counseling during home visit"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <TrustPillars />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left">
          <div className="bg-deep-ink text-warm-ivory rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold font-sans">Need to speak with our clinical desk?</h3>
              <p className="text-xs sm:text-sm text-warm-ivory/70">
                Reach out for pre-visit guidance, triage questions, or corporate collaborations.
              </p>
            </div>
            <Button href="/contact" variant="amber" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Contact Us & FAQs
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
