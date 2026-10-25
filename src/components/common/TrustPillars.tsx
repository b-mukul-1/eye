import React from "react";
import { Check, AlertCircle, ArrowUpRight, ShieldCheck, Microscope, Stethoscope } from "lucide-react";
import { EditorialHeading, SectionLabel, LeadParagraph } from "@/components/ui/Typography";

export function TrustPillars() {
  return (
    <section className="py-20 bg-warm-ivory font-sans border-b border-clinical-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <SectionLabel className="mb-3">Clinical Integrity & Governance</SectionLabel>
          <EditorialHeading as="h2" serifAccent="governed by medicine.">
            Care delivered closer to home,
          </EditorialHeading>
          <LeadParagraph className="mt-4">
            We operate with strict clinical boundaries. By clearly defining which examinations are
            safe and effective for home visits, and which necessitate tertiary hospital care, we
            protect patient safety and diagnostic continuity.
          </LeadParagraph>
        </div>

        {/* Clinical Scope Comparison: Home vs Hospital */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Home Scope */}
          <div className="bg-white/80 border border-clinical-border rounded-xl p-6 sm:p-8 shadow-subtle text-left">
            <div className="flex items-center gap-2.5 text-clinical-teal font-semibold text-sm mb-4">
              <span className="w-6 h-6 rounded-full bg-soft-sage flex items-center justify-center text-xs">
                ✓
              </span>
              <span>Conducted During Home Visits</span>
            </div>
            <h3 className="text-xl font-bold text-deep-ink mb-3 font-sans">
              Diagnostic Assessment & Refraction
            </h3>
            <ul className="space-y-3 text-sm text-clinical-slate">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-clinical-teal shrink-0 mt-0.5" />
                <span>
                  <strong className="text-deep-ink font-medium">Precision Refraction:</strong> Full
                  subjective and objective vision testing (dry & cycloplegic refractions).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-clinical-teal shrink-0 mt-0.5" />
                <span>
                  <strong className="text-deep-ink font-medium">Slit-Lamp Biomicroscopy:</strong>{" "}
                  Handheld inspection of cornea, conjunctiva, anterior chamber, and lens.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-clinical-teal shrink-0 mt-0.5" />
                <span>
                  <strong className="text-deep-ink font-medium">Intraocular Pressure:</strong>{" "}
                  Calibrated non-contact/rebound tonometry for glaucoma baseline monitoring.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-clinical-teal shrink-0 mt-0.5" />
                <span>
                  <strong className="text-deep-ink font-medium">Digital Retinal Screening:</strong>{" "}
                  High-resolution fundus imaging uploaded for remote ophthalmologist review.
                </span>
              </li>
            </ul>
          </div>

          {/* Hospital Scope */}
          <div className="bg-warm-neutral/30 border border-clinical-border rounded-xl p-6 sm:p-8 shadow-subtle text-left">
            <div className="flex items-center gap-2.5 text-subtle-amber-dark font-semibold text-sm mb-4">
              <span className="w-6 h-6 rounded-full bg-subtle-amber-light flex items-center justify-center text-xs">
                !
              </span>
              <span>Referred to Tertiary Eye Hospitals</span>
            </div>
            <h3 className="text-xl font-bold text-deep-ink mb-3 font-sans">
              Interventions & Acute Care
            </h3>
            <ul className="space-y-3 text-sm text-clinical-slate">
              <li className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-subtle-amber-dark shrink-0 mt-0.5" />
                <span>
                  <strong className="text-deep-ink font-medium">Surgical Procedures:</strong> Cataract
                  phacoemulsification, trabeculectomy, and vitreoretinal operations.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-subtle-amber-dark shrink-0 mt-0.5" />
                <span>
                  <strong className="text-deep-ink font-medium">Laser Treatments:</strong> YAG
                  capsulotomy, retinal photocoagulation, and refractive surgeries.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-subtle-amber-dark shrink-0 mt-0.5" />
                <span>
                  <strong className="text-deep-ink font-medium">Acute Emergencies:</strong> Chemical
                  burns, penetrating ocular trauma, sudden retinal detachments, or acute angle closure.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-subtle-amber-dark shrink-0 mt-0.5" />
                <span>
                  <strong className="text-deep-ink font-medium">Specialized Hospital Diagnostics:</strong>{" "}
                  Visual fields (Humphrey perimetry) and hospital OCT when advanced progression is observed.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3 Core Clinical Safeguards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-clinical-border">
          <div className="text-left space-y-2">
            <div className="w-10 h-10 rounded-lg bg-soft-sage text-clinical-teal flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-deep-ink text-base">Qualified Optometrists</h4>
            <p className="text-xs text-clinical-slate leading-relaxed">
              Every home visit is performed by a degree-holding optometrist trained in portable
              diagnostic protocols and patient hygiene sterilization standards.
            </p>
          </div>

          <div className="text-left space-y-2">
            <div className="w-10 h-10 rounded-lg bg-warm-neutral text-deep-ink flex items-center justify-center mb-3">
              <Stethoscope className="w-5 h-5 text-clinical-teal" />
            </div>
            <h4 className="font-bold text-deep-ink text-base">Ophthalmologist Sign-Off</h4>
            <p className="text-xs text-clinical-slate leading-relaxed">
              Examination data and retinal captures are reviewed by consulting ophthalmologists to
              identify asymptomatic conditions and validate treatment pathways.
            </p>
          </div>

          <div className="text-left space-y-2">
            <div className="w-10 h-10 rounded-lg bg-subtle-amber-light text-subtle-amber-dark flex items-center justify-center mb-3">
              <Microscope className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-deep-ink text-base">Calibrated Portable Tools</h4>
            <p className="text-xs text-clinical-slate leading-relaxed">
              All diagnostic instruments undergo regular clinical calibration checks, ensuring
              measurements match hospital-grade standard deviations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
