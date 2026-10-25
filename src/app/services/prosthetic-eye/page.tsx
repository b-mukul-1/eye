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
import { ArrowRight, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Ocular Prosthetics & Anophthalmic Care",
  description:
    "Bespoke prosthetic eye consultations, impression fitting coordination, scleral shells, and long-term socket health maintenance.",
};

export default function ProstheticEyeServicesPage() {
  return (
    <div className="min-h-screen bg-warm-ivory flex flex-col font-sans text-deep-ink">
      <DemoModeBanner />
      <Navbar />

      <main className="flex-1 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-clinical-slate font-medium">
            <Link href="/" className="hover:text-deep-ink">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-deep-ink">Services</Link>
            <span>/</span>
            <span className="text-clinical-teal font-semibold">Prosthetic Eye Services</span>
          </nav>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <SectionLabel>Ocularistry & Restorative Care</SectionLabel>
                <Badge variant="clinical" size="sm">Dignified Specialist Care</Badge>
              </div>

              <EditorialHeading as="h1" serifAccent="comfort, symmetry and dignity.">
                Custom ocular prosthetics,
              </EditorialHeading>

              <LeadParagraph>
                Losing an eye to trauma, retinoblastoma, severe infection, or surgical enucleation is
                a deeply personal journey. Our prosthetic eye care service connects patients with
                certified clinical ocularists who craft custom-fitted, hand-painted ocular prostheses
                and cosmetic scleral shells.
              </LeadParagraph>

              <p className="text-sm text-clinical-slate leading-relaxed">
                We approach every consultation with discretion, patience, and medical rigor. The goal
                is not merely aesthetic restoration, but physical socket comfort, natural eyelid
                contour, tear drainage maintenance, and emotional reassurance.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  href="/book-specialist?service=prosthetic-eye"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Enquire About Prosthetic Eye Services
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  View All Services
                </Button>
              </div>
            </div>

            {/* Editorial Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-warm-neutral/30 border border-clinical-border shadow-elevated">
                <Image
                  src="/images/prosthetic-eye-consultation.jpg"
                  alt="Dignified medical consultation between an experienced Indian ocularist and an adult patient discussing custom ocular prosthesis care"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-2.5 flex items-center justify-between text-xs text-clinical-slate">
                <span className="font-editorial text-deep-ink italic">Private consultation with certified ocularist</span>
                <span className="text-[11px] font-sans font-medium bg-soft-sage/80 px-2 py-0.5 rounded text-deep-ink border border-clinical-border">
                  Specialist Clinic Suite
                </span>
              </div>
            </div>
          </div>

          {/* Service Stages */}
          <section className="py-12 border-t border-clinical-border">
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl font-bold text-deep-ink font-sans">
                Comprehensive Restorative Pathway
              </h2>
              <p className="text-sm text-clinical-slate mt-1">
                From post-enucleation healing assessments to precision impression molding and routine polishing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "1. Confidential Initial Assessment",
                  desc: "Evaluation of the anophthalmic socket or phthisical globe, conjunctival fornices, implant mobility, and eyelid support by a specialist.",
                },
                {
                  title: "2. Custom Alginated Impression Molding",
                  desc: "Using gentle, biocompatible dental-grade alginate to capture the precise three-dimensional contours of the ocular socket for maximum comfort.",
                },
                {
                  title: "3. Hand-Painted Iris Matching",
                  desc: "Meticulous color matching using medical-grade acrylic pigments under daylight to replicate the exact color, trabecular fibers, and scleral vasculature of the companion eye.",
                },
                {
                  title: "4. Custom Fabrication & Curing",
                  desc: "Precision acrylic curing, smoothing, and high-gloss diamond polishing to prevent any micro-abrasions to delicate socket tissues.",
                },
                {
                  title: "5. Gentle Insertion & Hygiene Guidance",
                  desc: "Clear, supportive guidance on removal suction cups, cleaning with non-abrasive sterile cleansers, and safe nocturnal storage.",
                },
                {
                  title: "6. Annual Polishing & Socket Reviews",
                  desc: "Routine annual buffing to remove protein deposits and monitor conjunctival health, ensuring lasting comfort as facial structures naturally evolve.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-clinical-border rounded-xl p-6 shadow-subtle space-y-2">
                  <div className="text-xs font-bold text-clinical-teal uppercase tracking-wider">
                    Restorative Stage 0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-deep-ink">{item.title}</h3>
                  <p className="text-xs text-clinical-slate leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Care Setting Transparency */}
          <section className="py-10 border-t border-clinical-border">
            <div className="bg-soft-sage/40 border border-clinical-border rounded-2xl p-6 sm:p-8 flex items-start gap-4 text-xs sm:text-sm text-clinical-slate">
              <Building className="w-6 h-6 text-clinical-teal shrink-0 mt-0.5" />
              <div className="space-y-1">
                <strong className="text-deep-ink font-semibold block">
                  Care Setting Note (Clinic Suite Specialized Service):
                </strong>
                <p>
                  Because prosthetic eye fitting requires custom impression casting, laboratory curing,
                  and precision optical iris matching under calibrated lighting, ocular prosthetic
                  procedures are conducted exclusively in our accredited specialist clinical suites in
                  Delhi NCR, Mumbai, and Bengaluru. Initial enquiry coordination can be arranged from home.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
