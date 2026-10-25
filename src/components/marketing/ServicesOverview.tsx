import React from "react";
import Image from "next/image";
import Link from "next/link";
import { EditorialHeading, SectionLabel, LeadParagraph } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Check, AlertCircle, Eye, Activity, ShieldCheck, Microscope } from "lucide-react";

export function ServicesOverview() {
  return (
    <section id="services" className="py-24 bg-warm-neutral/20 border-b border-clinical-border font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left">
          <div className="max-w-2xl">
            <SectionLabel className="mb-3">Clinical Services Catalog</SectionLabel>
            <EditorialHeading as="h2" serifAccent="with clear clinical boundaries.">
              Five core examinations,
            </EditorialHeading>
            <LeadParagraph className="mt-4">
              Each clinical service is designed for maximum diagnostic utility at home. We
              explicitly identify where home examination ends and tertiary ophthalmic surgery begins.
            </LeadParagraph>
          </div>

          <Button href="/services" variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />}>
            Explore All Services & Preparation
          </Button>
        </div>

        {/* Varied Layout: 1 Featured Service + 4 Specialized Service Tiles */}
        <div className="space-y-8">
          {/* Service 1: Comprehensive General Eye Assessment (Wide Heroic Editorial Row) */}
          <div className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-10 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden bg-warm-neutral/30 border border-clinical-border">
              <Image
                src="/images/patient-counseling-care.jpg"
                alt="Comprehensive eye assessment"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute top-3 left-3">
                <Badge variant="ink" size="sm">Primary Service</Badge>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="clinical" size="sm">Full Bedside Examination</Badge>
                <span className="text-xs text-clinical-slate">&bull; 45–60 Minutes</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-deep-ink font-sans tracking-tight">
                General Eye Assessment & Precision Refraction
              </h3>

              <p className="text-sm sm:text-base text-clinical-slate leading-relaxed">
                A thorough evaluation covering distance and near vision (Snellen/LogMAR), objective
                and subjective refraction for spectacle prescription, ocular motility, and handheld
                slit-lamp biomicroscopy of the cornea and anterior chamber.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="bg-soft-sage/40 p-3 rounded-lg border border-clinical-border/60">
                  <span className="font-semibold text-deep-ink block mb-1 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-clinical-teal" /> Conducted at Home:
                  </span>
                  <span className="text-clinical-slate">
                    Full trial lens refraction, prescription issuance, anterior segment biomicroscopy.
                  </span>
                </div>
                <div className="bg-warm-neutral/50 p-3 rounded-lg border border-clinical-border/60">
                  <span className="font-semibold text-deep-ink block mb-1 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-subtle-amber-dark" /> Referred to Hospital:
                  </span>
                  <span className="text-clinical-slate">
                    Corneal topography, specular microscopy, or refractive laser surgeries (LASIK/PRK).
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/services#refraction"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-clinical-teal hover:text-clinical-teal-dark"
                >
                  <span>Detailed refraction methodology</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Row of 2 Specialized Services: Glaucoma Follow-Up & Diabetic Screening */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Service 2: Glaucoma Follow-Up */}
            <div className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-8 shadow-subtle flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-lg bg-soft-sage text-clinical-teal flex items-center justify-center">
                    <Activity className="w-5 h-5" />
                  </span>
                  <Badge variant="amber" size="sm">Chronic Monitoring</Badge>
                </div>
                <h4 className="text-xl font-bold text-deep-ink">Glaucoma Follow-Up & IOP Monitoring</h4>
                <p className="text-xs sm:text-sm text-clinical-slate leading-relaxed">
                  Regular pressure checks for diagnosed glaucoma patients or individuals with ocular
                  hypertension. Evaluates optic nerve head changes and checks eye drop regimen adherence.
                </p>
              </div>

              <div className="space-y-2 text-xs pt-3 border-t border-clinical-border">
                <div className="text-clinical-slate">
                  <strong className="text-deep-ink">At Home:</strong> Calibrated rebound/non-contact
                  IOP tonometry & optic cup-to-disc ratio observation.
                </div>
                <div className="text-clinical-slate">
                  <strong className="text-subtle-amber-dark">Hospital Requirement:</strong> Humphrey
                  visual field perimetry, gonioscopy, or trabeculectomy surgery.
                </div>
              </div>

              <Link
                href="/services#glaucoma"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-clinical-teal pt-1"
              >
                <span>Read glaucoma monitoring protocols</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Service 3: Diabetic Eye Screening */}
            <div className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-8 shadow-subtle flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-lg bg-warm-neutral text-deep-ink flex items-center justify-center">
                    <Microscope className="w-5 h-5 text-clinical-teal" />
                  </span>
                  <Badge variant="clinical" size="sm">Retinal Triage</Badge>
                </div>
                <h4 className="text-xl font-bold text-deep-ink">Diabetic Retinal Screening & Triage</h4>
                <p className="text-xs sm:text-sm text-clinical-slate leading-relaxed">
                  Early screening for microvascular retinal damage caused by diabetes. Portable
                  digital fundus imaging captures high-definition captures of the macula and retina.
                </p>
              </div>

              <div className="space-y-2 text-xs pt-3 border-t border-clinical-border">
                <div className="text-clinical-slate">
                  <strong className="text-deep-ink">At Home:</strong> Non-mydriatic fundus photo
                  capture, microaneurysm screening, and remote MD classification.
                </div>
                <div className="text-clinical-slate">
                  <strong className="text-subtle-amber-dark">Hospital Requirement:</strong> Retinal
                  photocoagulation, anti-VEGF intravitreal injections, or vitrectomy.
                </div>
              </div>

              <Link
                href="/services#diabetic-retinopathy"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-clinical-teal pt-1"
              >
                <span>Read diabetic screening protocols</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Row of 2 Specialized Services: Cataract Assessment & Postoperative Follow-Up */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Service 4: Cataract Assessment */}
            <div className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-8 shadow-subtle flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-lg bg-subtle-amber-light text-subtle-amber-dark flex items-center justify-center">
                    <Eye className="w-5 h-5" />
                  </span>
                  <Badge variant="sage" size="sm">Pre-Surgical Staging</Badge>
                </div>
                <h4 className="text-xl font-bold text-deep-ink">Cataract Assessment & Visual Impact Grading</h4>
                <p className="text-xs sm:text-sm text-clinical-slate leading-relaxed">
                  Grading of nuclear, cortical, or posterior subcapsular lens opacities using portable
                  slit-lamp biomicroscopy. Evaluates whether reduced acuity warrants surgical referral.
                </p>
              </div>

              <div className="space-y-2 text-xs pt-3 border-t border-clinical-border">
                <div className="text-clinical-slate">
                  <strong className="text-deep-ink">At Home:</strong> Lens opacity grading (LOCS
                  system), visual glare test, refraction adjustment.
                </div>
                <div className="text-clinical-slate">
                  <strong className="text-subtle-amber-dark">Hospital Requirement:</strong> Optical
                  biometry (A-scan/IOL Master calculation) and phacoemulsification surgery.
                </div>
              </div>

              <Link
                href="/services#cataract"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-clinical-teal pt-1"
              >
                <span>Read cataract staging protocols</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Service 5: Postoperative Follow-up */}
            <div className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-8 shadow-subtle flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-lg bg-soft-sage text-clinical-teal flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </span>
                  <Badge variant="clinical" size="sm">Recovery Observation</Badge>
                </div>
                <h4 className="text-xl font-bold text-deep-ink">Appropriate Postoperative Follow-Up</h4>
                <p className="text-xs sm:text-sm text-clinical-slate leading-relaxed">
                  Post-surgical monitoring for stable convalescing patients (e.g., following cataract
                  surgery), observing corneal clarity, pupil shape, and drop compliance under MD guidance.
                </p>
              </div>

              <div className="space-y-2 text-xs pt-3 border-t border-clinical-border">
                <div className="text-clinical-slate">
                  <strong className="text-deep-ink">At Home:</strong> Slit-lamp corneal check, wound
                  integrity observation, visual recovery monitoring.
                </div>
                <div className="text-clinical-slate">
                  <strong className="text-subtle-amber-dark">Hospital Requirement:</strong> Endophthalmitis
                  suspicion, severe intraocular inflammation, or surgical wound leaks.
                </div>
              </div>

              <Link
                href="/services#post-operative"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-clinical-teal pt-1"
              >
                <span>Read postoperative recovery protocols</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
