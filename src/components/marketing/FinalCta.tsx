import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Phone, ShieldCheck, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FinalCta() {
  return (
    <section className="py-20 bg-warm-neutral/40 border-b border-clinical-border font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-deep-ink text-warm-ivory rounded-3xl p-8 sm:p-14 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-block text-[11px] font-semibold tracking-widest uppercase text-subtle-amber">
              Convenient Clinical Eye Care
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-warm-ivory font-sans">
              Schedule a home eye examination{" "}
              <span className="font-editorial text-clinical-teal italic font-normal">
                for yourself or a family member.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-warm-ivory/70 max-w-2xl leading-relaxed">
              Available 6 days a week across major Indian cities. Each visit includes full bedside
              refraction, IOP tonometry, slit-lamp assessment, and ophthalmologist diagnostic review.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-warm-ivory/60">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-clinical-teal" />
                <span>Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-subtle-amber" />
                <span>Standardized equipment hygiene & sterilization</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-4">
            <Button
              href="/book"
              variant="amber"
              size="lg"
              className="w-full sm:w-auto"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Book a Home Visit
            </Button>

            <div className="flex items-center gap-2 text-xs text-warm-ivory/70">
              <Phone className="w-3.5 h-3.5 text-clinical-teal" />
              <span>Coordination Desk: {siteConfig.contact.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
