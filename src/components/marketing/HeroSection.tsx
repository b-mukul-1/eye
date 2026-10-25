import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { EditorialHeading, SectionLabel, LeadParagraph } from "@/components/ui/Typography";
import { CheckCircle2, ArrowRight, ShieldCheck, MapPin, Sparkles } from "lucide-react";
import { Signature3DEye } from "@/components/common/Signature3DEye";

export function HeroSection() {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 border-b border-clinical-border bg-warm-ivory overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex flex-wrap items-center gap-2.5">
              <SectionLabel>Clinical Optometry &amp; Ophthalmology</SectionLabel>
              <span className="hidden sm:inline-block h-3 w-px bg-clinical-border" />
              <div className="inline-flex items-center gap-1.5 text-xs text-clinical-slate font-medium">
                <MapPin className="w-3.5 h-3.5 text-clinical-teal" />
                <span>Pilot Service Area: Select Delhi NCR Localities &bull; Regional Expansion Planned</span>
              </div>
            </div>

            <EditorialHeading as="h1" serifAccent="delivered closer to home.">
              Thoughtful eye care,
            </EditorialHeading>

            <LeadParagraph className="text-base sm:text-lg text-clinical-slate leading-relaxed">
              Unhurried, clinically rigorous eye-care visits conducted in the comfort of your home
              by qualified optometrists—with remote ophthalmologist review of examination findings
              and seamless coordination for specialist hospital care when needed.
            </LeadParagraph>

            {/* Core clinical truths (Zero fluff, zero fake metrics) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-deep-ink/90 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-clinical-teal shrink-0" />
                <span>Full bedside refraction &amp; slit-lamp biomicroscopy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-clinical-teal shrink-0" />
                <span>Ophthalmologist oversight of digital fundus captures</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-clinical-teal shrink-0" />
                <span>Calibrated portable diagnostic kits &amp; sterile tonometry</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-clinical-teal shrink-0" />
                <span>Direct referral triage to tertiary eye hospitals</span>
              </div>
            </div>

            {/* Restrained Primary & Secondary Actions (No competing buttons) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <Button
                href="/book"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Book a Home Visit
              </Button>
              <Button href="/how-it-works" variant="secondary" size="lg">
                How It Works
              </Button>
            </div>

            <div className="pt-1 text-xs text-clinical-slate flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-clinical-teal" />
              <span>
                Home visits conducted by registered optometrists &bull; Remote review by consulting ophthalmologists
              </span>
            </div>
          </div>

          {/* Editorial Visual Composition with controlled asymmetry & 3D Accent */}
          <div className="lg:col-span-5 relative">
            {/* The Main Editorial Frame */}
            <div className="relative rounded-2xl border border-clinical-border bg-white shadow-elevated p-2 sm:p-2.5">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-warm-neutral/30">
                <Image
                  src="/images/hero-home-exam.jpg"
                  alt="A qualified Indian female optometrist in scrubs carefully examining an elderly Indian gentleman's eyes with a clinical handheld ophthalmoscope in a sunlit home living room"
                  fill
                  priority
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Editorial Caption Bar */}
              <div className="px-3 pt-3 pb-2 text-left">
                <div className="flex items-center justify-between text-xs text-clinical-slate">
                  <span className="font-editorial text-deep-ink text-sm italic">
                    Optometrist home visit in South Delhi
                  </span>
                  <span className="text-[11px] font-sans font-medium bg-soft-sage/80 px-2.5 py-0.5 rounded-full text-deep-ink border border-clinical-border">
                    Bedside Diagnostic Protocol
                  </span>
                </div>
              </div>
            </div>

            {/* Signature 3D Animated Eye in Hero Area */}
            <div className="absolute -bottom-6 left-2 sm:-bottom-8 sm:-left-6 bg-white/95 backdrop-blur-md border border-clinical-border rounded-2xl p-2.5 sm:p-3 shadow-card flex items-center gap-3 sm:gap-3.5 max-w-[260px] sm:max-w-[280px] select-none text-left z-20">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-clinical-teal/30 shrink-0 bg-warm-ivory shadow-subtle flex items-center justify-center">
                <Signature3DEye size={58} />
              </div>
              <div className="space-y-0.5">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-clinical-teal">
                  Visual Identity
                </div>
                <div className="text-xs font-bold text-deep-ink leading-tight">
                  Interactive Brand Eye
                </div>
                <div className="text-[10px] text-clinical-slate leading-tight">
                  Subtle responsive gaze &bull; Natural motion
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
