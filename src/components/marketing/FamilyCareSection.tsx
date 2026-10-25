import React from "react";
import Image from "next/image";
import Link from "next/link";
import { EditorialHeading, SectionLabel, LeadParagraph } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Heart, Users, ShieldCheck, ArrowRight, Check } from "lucide-react";

export function FamilyCareSection() {
  return (
    <section className="py-24 bg-warm-ivory border-b border-clinical-border font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Visual Column with Family Care Photograph (Image 3) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl border border-clinical-border bg-white shadow-elevated p-2 sm:p-2.5">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-warm-neutral/30">
                <Image
                  src="/images/family-care-moment.jpg"
                  alt="An adult Indian daughter gently holding the hand of her elderly mother during a home eye care consultation in their warm living room"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Caption */}
              <div className="px-3 pt-3 pb-2 text-left">
                <div className="flex items-center justify-between text-xs text-clinical-slate">
                  <span className="font-editorial text-deep-ink text-sm italic">
                    Compassionate bedside care for aging parents
                  </span>
                  <span className="text-[11px] font-sans font-medium bg-soft-sage/80 px-2.5 py-0.5 rounded-full text-deep-ink border border-clinical-border">
                    Geriatric Protocol
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <SectionLabel>Care for Aging Parents</SectionLabel>

            <EditorialHeading as="h2" serifAccent="with patient dignity.">
              Thoughtful care for families,
            </EditorialHeading>

            <LeadParagraph>
              Coordinating healthcare for elderly parents often involves painful compromises:
              navigating intense city traffic, long waiting queues in crowded clinic corridors, and
              rushed fifteen-minute consultations. We bring calibrated clinical assessments into the
              comfort of their home.
            </LeadParagraph>

            <div className="space-y-3.5 text-xs sm:text-sm text-clinical-slate">
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-soft-sage text-clinical-teal flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <div>
                  <strong className="text-deep-ink font-semibold">Unhurried Examinations:</strong>{" "}
                  Our optometrists spend 45 to 60 minutes with each patient, listening patiently to
                  symptoms and conducting tests without rushing.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-soft-sage text-clinical-teal flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <div>
                  <strong className="text-deep-ink font-semibold">Family Care Coordination:</strong>{" "}
                  Working adult children can coordinate bookings, receive verified reports
                  digitally, and discuss findings directly with the consulting clinician.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-soft-sage text-clinical-teal flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <div>
                  <strong className="text-deep-ink font-semibold">Mobility & Bedside Sensitivity:</strong>{" "}
                  Examinations can be conducted comfortably from a favorite living room armchair or
                  bedside for seniors with restricted mobility.
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button href="/book" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Schedule a Visit for a Family Member
              </Button>
              <Button href="/for-families" variant="secondary" size="md">
                Learn About Family Care
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
