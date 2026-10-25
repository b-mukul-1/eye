import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Calendar, MapPin, Clock, ArrowRight, ShieldCheck } from "lucide-react";

export function AppointmentBanner() {
  return (
    <section className="bg-warm-neutral/50 border-y border-clinical-border py-14 font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 border border-clinical-border rounded-2xl p-6 sm:p-10 shadow-elevated grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text summary */}
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-clinical-teal">
              <Calendar className="w-4 h-4" />
              <span>Next-Day Home Visit Scheduling</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-deep-ink tracking-tight font-sans">
              Schedule an optometrist visit at your home
            </h3>
            <p className="text-sm sm:text-base text-clinical-slate leading-relaxed">
              Available 6 days a week across major Indian metropolitan areas. Includes full
              refraction, IOP tonometry, slit-lamp assessment, and ophthalmologist diagnostic review.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-xs text-deep-ink/80">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-clinical-teal" />
                <span>Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-clinical-teal" />
                <span>45–60 Minute Bedside Evaluation</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-clinical-teal" />
                <span>Sanitized Equipment Protocols</span>
              </span>
            </div>
          </div>

          {/* Action trigger */}
          <div className="lg:col-span-5 flex flex-col items-stretch lg:items-end justify-center gap-3">
            <Button
              href="/book"
              variant="primary"
              size="lg"
              className="w-full justify-between"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Book Home Examination Visit
            </Button>
            <Button
              href="/book-specialist"
              variant="secondary"
              size="md"
              className="w-full justify-between"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Book Clinic Specialist Consultation
            </Button>
            <div className="text-[11px] text-clinical-slate text-center lg:text-right">
              Transparent consultation fee &bull; Verified practitioner credentials
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
