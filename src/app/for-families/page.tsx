import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { EditorialHeading, SectionLabel, LeadParagraph } from "@/components/ui/Typography";
import { FamilyCareSection } from "@/components/marketing/FamilyCareSection";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Heart, Users, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Eye Care for Families & Aging Parents",
  description:
    "Dignified, unhurried home eye examinations for older adults and busy families without the physical stress of hospital waiting rooms.",
};

export default function ForFamiliesPage() {
  return (
    <div className="min-h-screen bg-warm-ivory flex flex-col font-sans text-deep-ink">
      <Navbar />

      <main className="flex-1 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-8">
            <SectionLabel className="mb-2">Dedicated Family Support</SectionLabel>
            <EditorialHeading as="h1" serifAccent="without clinic fatigue.">
              Eye care for your loved ones,
            </EditorialHeading>
            <LeadParagraph className="mt-3">
              We help families coordinate dignified, unhurried eye examinations for aging parents,
              bed-bound relatives, and children—all within the familiar security of home.
            </LeadParagraph>
          </div>
        </div>

        <FamilyCareSection />

        {/* 3 Family Pillars */}
        <section className="py-16 bg-warm-neutral/30 border-b border-clinical-border font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-clinical-border rounded-xl p-6 shadow-subtle space-y-3">
                <div className="w-10 h-10 rounded-lg bg-soft-sage text-clinical-teal flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-deep-ink">No Traumatic Clinic Commutes</h3>
                <p className="text-xs text-clinical-slate leading-relaxed">
                  Avoid navigating congested metro traffic, steep hospital stairs, and wheelchair
                  transfers. The optometrist brings everything required to the patient&apos;s chair.
                </p>
              </div>

              <div className="bg-white border border-clinical-border rounded-xl p-6 shadow-subtle space-y-3">
                <div className="w-10 h-10 rounded-lg bg-warm-neutral text-deep-ink flex items-center justify-center">
                  <Users className="w-5 h-5 text-clinical-teal" />
                </div>
                <h3 className="text-base font-bold text-deep-ink">Transparent Caregiver Access</h3>
                <p className="text-xs text-clinical-slate leading-relaxed">
                  Working adult children receive full copies of the examination notes, IOP trends,
                  and digital prescriptions directly through the secure patient portal.
                </p>
              </div>

              <div className="bg-white border border-clinical-border rounded-xl p-6 shadow-subtle space-y-3">
                <div className="w-10 h-10 rounded-lg bg-subtle-amber-light text-subtle-amber-dark flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-deep-ink">Patient, Respectful Clinicians</h3>
                <p className="text-xs text-clinical-slate leading-relaxed">
                  Our practitioners are specially trained in geriatric communication, speaking gently,
                  allowing extra time for refraction adjustments, and listening to concerns.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center sm:text-left">
              <Button href="/book" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Book a Visit for an Older Family Member
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
