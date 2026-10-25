import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { DemoModeBanner } from "@/components/common/DemoModeBanner";
import { EditorialHeading, SectionLabel, LeadParagraph } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Clinical Eye-Care Services & Examination Scope",
  description:
    "Comprehensive home eye diagnostics, subjective refraction, diabetic retinal triage, glaucoma tonometry, and specialist eye care referrals across India.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-warm-ivory flex flex-col font-sans text-deep-ink">
      <DemoModeBanner />
      <Navbar />

      <main className="flex-1 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-3xl">
              <SectionLabel className="mb-2">Clinical Service Directory</SectionLabel>
              <EditorialHeading as="h1" serifAccent="and specialist care.">
                Complete eye-care services,
              </EditorialHeading>
              <LeadParagraph className="mt-3">
                From bedside refraction and diabetic screening to specialized pediatric amblyopia
                therapy, custom contact lenses, ocular prosthetics, and corporate wellness drives.
              </LeadParagraph>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <Button href="/book-specialist" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Book a Specialist
              </Button>
              <Button href="/book" variant="secondary" size="md">
                Schedule Home Visit
              </Button>
            </div>
          </div>

          {/* ==============================================================
              SECTION 1: FOUR NEW SPECIALIZED EYE-CARE SERVICES
          ============================================================== */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-clinical-border">
              <div>
                <span className="text-xs font-bold text-clinical-teal uppercase tracking-wider block">
                  Specialized Clinical Disciplines
                </span>
                <h2 className="text-2xl font-bold text-deep-ink font-sans">
                  Specialist-Led Treatment & Visual Rehabilitation
                </h2>
              </div>
              <Badge variant="clinical" size="sm">Dedicated Clinic & Hybrid Care</Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service A: Amblyopia & Vision Therapy */}
              <div className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-8 shadow-subtle flex flex-col justify-between space-y-6">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-warm-neutral/30 border border-clinical-border">
                  <Image
                    src="/images/amblyopia-therapy-session.jpg"
                    alt="Amblyopia and vision therapy pediatric session"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="ink" size="sm">Pediatric Care</Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-deep-ink">Amblyopia & Vision Therapy</h3>
                  <p className="text-xs sm:text-sm text-clinical-slate leading-relaxed">
                    Evidence-based visual development evaluation and structured binocular therapy for
                    lazy eye. Focuses on eye tracking, accommodation, stereopsis depth perception,
                    and caregiver home guidance without cartoonish gimmicks.
                  </p>
                  <div className="text-xs text-clinical-slate">
                    <strong className="text-deep-ink">Key Modalities:</strong> Lang stereo cards,
                    anti-suppression training, occlusion therapy protocols.
                  </div>
                </div>

                <div className="pt-3 border-t border-clinical-border flex items-center justify-between">
                  <Link
                    href="/services/amblyopia-vision-therapy"
                    className="text-xs font-semibold text-clinical-teal hover:underline flex items-center gap-1"
                  >
                    <span>Read clinical protocols</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Button href="/book-specialist?service=amblyopia" variant="primary" size="sm">
                    Book Amblyopia Assessment
                  </Button>
                </div>
              </div>

              {/* Service B: Contact Lenses */}
              <div className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-8 shadow-subtle flex flex-col justify-between space-y-6">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-warm-neutral/30 border border-clinical-border">
                  <Image
                    src="/images/contact-lens-assessment.jpg"
                    alt="Slit-lamp contact lens assessment"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="clinical" size="sm">Anterior Segment</Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-deep-ink">Contact Lens Assessment & Fitting</h3>
                  <p className="text-xs sm:text-sm text-clinical-slate leading-relaxed">
                    Corneal health-first contact lens fitting. Combines keratometry curvature mapping,
                    tear film break-up analysis, hands-on insertion and removal training, and trials
                    across soft daily disposables, torics, multifocals, and rigid gas permeable (RGP) lenses.
                  </p>
                  <div className="text-xs text-clinical-slate">
                    <strong className="text-deep-ink">Safety Standards:</strong> Biomicroscopic
                    corneal staining checks & strict microbial keratitis prevention education.
                  </div>
                </div>

                <div className="pt-3 border-t border-clinical-border flex items-center justify-between">
                  <Link
                    href="/services/contact-lenses"
                    className="text-xs font-semibold text-clinical-teal hover:underline flex items-center gap-1"
                  >
                    <span>Read fitting guidelines</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Button href="/book-specialist?service=contact-lenses" variant="primary" size="sm">
                    Book Lens Fitting
                  </Button>
                </div>
              </div>

              {/* Service C: Prosthetic Eye Services */}
              <div className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-8 shadow-subtle flex flex-col justify-between space-y-6">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-warm-neutral/30 border border-clinical-border">
                  <Image
                    src="/images/prosthetic-eye-consultation.jpg"
                    alt="Prosthetic eye consultation with certified ocularist"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="amber" size="sm">Ocularistry Suite</Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-deep-ink">Prosthetic Eye Services</h3>
                  <p className="text-xs sm:text-sm text-clinical-slate leading-relaxed">
                    Dignified, specialized care by board-certified clinical ocularists. Custom
                    impression casting, hand-painted iris replication, and precision diamond polishing
                    for custom ocular prostheses, scleral shells, and routine socket maintenance.
                  </p>
                  <div className="text-xs text-clinical-slate">
                    <strong className="text-deep-ink">Care Setting:</strong> Specialized clinic
                    suites in Delhi NCR, Mumbai, and Bengaluru.
                  </div>
                </div>

                <div className="pt-3 border-t border-clinical-border flex items-center justify-between">
                  <Link
                    href="/services/prosthetic-eye"
                    className="text-xs font-semibold text-clinical-teal hover:underline flex items-center gap-1"
                  >
                    <span>Read restorative pathway</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Button href="/book-specialist?service=prosthetic-eye" variant="primary" size="sm">
                    Enquire About Prosthetics
                  </Button>
                </div>
              </div>

              {/* Service D: Low Vision Care */}
              <div className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-8 shadow-subtle flex flex-col justify-between space-y-6">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-warm-neutral/30 border border-clinical-border">
                  <Image
                    src="/images/low-vision-assessment.jpg"
                    alt="Low vision electronic desktop magnifier evaluation"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="sage" size="sm">Rehabilitation</Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-deep-ink">Low Vision Assessment & Rehabilitation</h3>
                  <p className="text-xs sm:text-sm text-clinical-slate leading-relaxed">
                    Empowering patients with permanent sight loss from AMD, diabetic retinopathy, or
                    glaucoma. Functional vision testing, optical magnification trials, electronic
                    video CCTV magnifiers with reverse contrast, and living space lighting ergonomics.
                  </p>
                  <div className="text-xs text-clinical-slate">
                    <strong className="text-deep-ink">Objective:</strong> Restoring autonomy in
                    reading, face recognition, and daily living activities.
                  </div>
                </div>

                <div className="pt-3 border-t border-clinical-border flex items-center justify-between">
                  <Link
                    href="/services/low-vision"
                    className="text-xs font-semibold text-clinical-teal hover:underline flex items-center gap-1"
                  >
                    <span>Read assistive support options</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Button href="/book-specialist?service=low-vision" variant="primary" size="sm">
                    Book Low Vision Assessment
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* ==============================================================
              SECTION 2: HOME DIAGNOSTIC SUITE EXAMINATIONS
          ============================================================== */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-clinical-border">
              <div>
                <span className="text-xs font-bold text-clinical-teal uppercase tracking-wider block">
                  Bedside Diagnostic Care
                </span>
                <h2 className="text-2xl font-bold text-deep-ink font-sans">
                  Core Home-Visit Eye Examinations
                </h2>
              </div>
              <Badge variant="clinical" size="sm">Home Calibrated Tools</Badge>
            </div>

            <div className="space-y-8">
              {/* Service 1: Refraction */}
              <div id="refraction" className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-10 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="clinical" size="sm">Primary Refraction</Badge>
                    <span className="text-xs text-clinical-slate">45–60 mins bedside</span>
                  </div>
                  <h3 className="text-2xl font-bold text-deep-ink">
                    Comprehensive Refraction & Visual Acuity
                  </h3>
                  <p className="text-sm text-clinical-slate leading-relaxed">
                    Distance and near vision testing (Snellen/LogMAR), objective and subjective
                    refraction, binocular motility, and slit-lamp anterior chamber checks.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                    <div className="bg-soft-sage/30 p-3 rounded-lg border border-clinical-border">
                      <strong className="text-deep-ink block mb-0.5">At Home:</strong>
                      <span className="text-clinical-slate">Full trial lens set, prescription verification, slit-lamp.</span>
                    </div>
                    <div className="bg-warm-neutral/40 p-3 rounded-lg border border-clinical-border">
                      <strong className="text-deep-ink block mb-0.5">Hospital Referral:</strong>
                      <span className="text-clinical-slate">Corneal topography, laser refractive surgery (LASIK).</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button href="/book" variant="primary" size="sm">
                      Book Home Refraction
                    </Button>
                  </div>
                </div>
                <div className="lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden border border-clinical-border">
                  <Image src="/images/family-care-moment.jpg" alt="Refraction exam" fill className="object-cover" />
                </div>
              </div>

              {/* Service 2: Diabetic Retinal Screening */}
              <div id="diabetic-retinopathy" className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-10 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden border border-clinical-border">
                  <Image src="/images/ophthalmologist-review.jpg" alt="Diabetic retinal review" fill className="object-cover" />
                </div>
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="amber" size="sm">Vascular Triage</Badge>
                    <span className="text-xs text-clinical-slate">Ophthalmologist review</span>
                  </div>
                  <h3 className="text-2xl font-bold text-deep-ink">
                    Diabetic Retinal Screening & Macular Triage
                  </h3>
                  <p className="text-sm text-clinical-slate leading-relaxed">
                    Digital portable non-mydriatic fundus camera screening to detect microaneurysms,
                    hard exudates, and macular changes early. Findings evaluated by ophthalmologists.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                    <div className="bg-soft-sage/30 p-3 rounded-lg border border-clinical-border">
                      <strong className="text-deep-ink block mb-0.5">At Home:</strong>
                      <span className="text-clinical-slate">Digital fundus photograph & remote MD grading.</span>
                    </div>
                    <div className="bg-warm-neutral/40 p-3 rounded-lg border border-clinical-border">
                      <strong className="text-deep-ink block mb-0.5">Hospital Referral:</strong>
                      <span className="text-clinical-slate">Anti-VEGF intravitreal injections, retinal photocoagulation.</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button href="/book" variant="primary" size="sm">
                      Schedule Diabetic Screening
                    </Button>
                  </div>
                </div>
              </div>

              {/* Service 3: Glaucoma Follow-Up */}
              <div id="glaucoma" className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-10 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="clinical" size="sm">Pressure Baseline</Badge>
                    <span className="text-xs text-clinical-slate">Calibrated tonometry</span>
                  </div>
                  <h3 className="text-2xl font-bold text-deep-ink">
                    Glaucoma Follow-Up & IOP Monitoring
                  </h3>
                  <p className="text-sm text-clinical-slate leading-relaxed">
                    Quarterly intraocular pressure tracking using calibrated rebound tonometers, optic
                    disc cup-to-disc ratio inspection, and drop compliance counseling.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                    <div className="bg-soft-sage/30 p-3 rounded-lg border border-clinical-border">
                      <strong className="text-deep-ink block mb-0.5">At Home:</strong>
                      <span className="text-clinical-slate">IOP measurement (mmHg) & anterior depth check.</span>
                    </div>
                    <div className="bg-warm-neutral/40 p-3 rounded-lg border border-clinical-border">
                      <strong className="text-deep-ink block mb-0.5">Hospital Referral:</strong>
                      <span className="text-clinical-slate">Humphrey visual field perimetry, trabeculectomy surgery.</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button href="/book" variant="primary" size="sm">
                      Book Pressure Check
                    </Button>
                  </div>
                </div>
                <div className="lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden border border-clinical-border">
                  <Image src="/images/practitioner-kit-prep.jpg" alt="IOP tool prep" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* ==============================================================
              SECTION 3: CORPORATE EYE CAMPS PROMOTION
          ============================================================== */}
          <div className="bg-deep-ink text-warm-ivory rounded-3xl p-8 sm:p-12 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <Badge variant="amber" size="sm">Workplace Wellness</Badge>
              <h3 className="text-2xl sm:text-3xl font-bold font-sans">
                Corporate Eye Camps & Employee Vision Care
              </h3>
              <p className="text-xs sm:text-sm text-warm-ivory/70 leading-relaxed max-w-2xl">
                Looking to organize workplace eye screenings for your office, campus, or industrial facility?
                We provide end-to-end camp planning, non-disruptive 15-minute slots, and employee referral care.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-3">
              <Button href="/corporate-camps" variant="amber" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Explore Corporate Camps
              </Button>
              <a
                href="/downloads/ocuhome-corporate-eye-camps-brochure.pdf"
                download="ocuhome-corporate-eye-camps-brochure.pdf"
                className="text-xs text-warm-ivory/70 hover:text-warm-ivory underline"
              >
                Download Corporate Brochure (PDF) &rarr;
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
