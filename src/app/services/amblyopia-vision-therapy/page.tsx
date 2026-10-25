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
import { ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Amblyopia Assessment & Pediatric Vision Therapy",
  description:
    "Structured optometric evaluation and clinician-directed vision therapy for childhood amblyopia, binocular anomalies, and visual development.",
};

export default function AmblyopiaVisionTherapyPage() {
  return (
    <div className="min-h-screen bg-warm-ivory flex flex-col font-sans text-deep-ink">
      <DemoModeBanner />
      <Navbar />

      <main className="flex-1 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          {/* Breadcrumb navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-clinical-slate font-medium">
            <Link href="/" className="hover:text-deep-ink">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-deep-ink">Services</Link>
            <span>/</span>
            <span className="text-clinical-teal font-semibold">Amblyopia & Vision Therapy</span>
          </nav>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <SectionLabel>Pediatric & Binocular Vision Care</SectionLabel>
                <Badge variant="clinical" size="sm">Evidence-Based Protocols</Badge>
              </div>

              <EditorialHeading as="h1" serifAccent="development and coordination.">
                Amblyopia assessment and,
              </EditorialHeading>

              <LeadParagraph>
                Amblyopia—commonly known as lazy eye—involves reduced visual acuity in one or both
                eyes that arises during critical periods of childhood visual development. Because the
                visual cortex does not receive clear input, timely clinical assessment and structured,
                clinician-directed therapy are essential.
              </LeadParagraph>

              <p className="text-sm text-clinical-slate leading-relaxed">
                Treatment pathways depend fundamentally on the child&apos;s age, underlying cause (such
                as uncorrected anisometropia or strabismus), and individual binocular status. We do
                not promise instant or guaranteed cures; instead, we follow structured, verified
                optometric therapy and progress monitoring.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  href="/book-specialist?service=amblyopia"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Book an Amblyopia Assessment
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
                  src="/images/amblyopia-therapy-session.jpg"
                  alt="Qualified Indian female optometrist in scrubs conducting a stereo test card evaluation with a young Indian child"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-2.5 flex items-center justify-between text-xs text-clinical-slate">
                <span className="font-editorial text-deep-ink italic">Stereopsis & binocular evaluation</span>
                <span className="text-[11px] font-sans font-medium bg-soft-sage/80 px-2 py-0.5 rounded text-deep-ink border border-clinical-border">
                  Pediatric Clinic Suite
                </span>
              </div>
            </div>
          </div>

          {/* Clinical Components Breakdown */}
          <section className="py-12 border-t border-clinical-border">
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl font-bold text-deep-ink font-sans">
                Core Clinical Components of the Service
              </h2>
              <p className="text-sm text-clinical-slate mt-1">
                A thorough evaluation designed to identify whether monocular visual deficit or binocular
                misalignment is impacting functional performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Age-Appropriate Visual Evaluation",
                  desc: "Measurement of monocular visual acuity using crowding-calibrated Lea symbols, tumbling E, or LogMAR charts suited to the child's developmental age.",
                },
                {
                  title: "Binocular Vision & Motility Assessment",
                  desc: "Evaluation of ocular alignment, cover-uncover testing for strabismus (tropia vs phoria), near point of convergence (NPC), and stereopsis depth perception.",
                },
                {
                  title: "Cycloplegic Refractive Baseline",
                  desc: "Accurate determination of latent hyperopia or high astigmatism using doctor-guided cycloplegic drops when clinically necessary.",
                },
                {
                  title: "Clinician-Directed Vision Therapy",
                  desc: "Individualized therapy programs targeting anti-suppression, saccadic tracking, vergence facility, and accommodative flexibility where clinically indicated.",
                },
                {
                  title: "Structured Progress Tracking",
                  desc: "Regular 4-to-6-week follow-ups measuring LogMAR improvement and compliance with optical correction or occlusion regimens.",
                },
                {
                  title: "Empathetic Guidance for Caregivers",
                  desc: "Practical strategies for parents on patch wear compliance, digital screen management, and creating a supportive learning environment at home.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-clinical-border rounded-xl p-6 shadow-subtle space-y-2">
                  <div className="flex items-center gap-2 text-clinical-teal text-xs font-bold uppercase tracking-wider">
                    <span className="w-5 h-5 rounded-full bg-soft-sage flex items-center justify-center text-xs">✓</span>
                    <span>Component 0{idx + 1}</span>
                  </div>
                  <h3 className="text-base font-bold text-deep-ink">{item.title}</h3>
                  <p className="text-xs text-clinical-slate leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Parental Reassurance & Evidence-based Boundaries */}
          <section className="py-12 border-t border-clinical-border">
            <div className="bg-soft-sage/40 border border-clinical-border rounded-2xl p-8 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-clinical-teal">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Clinical Integrity & Evidence Standards</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-deep-ink">
                  Responsible Pediatric Ophthalmology Standards
                </h3>
                <p className="text-xs sm:text-sm text-clinical-slate leading-relaxed">
                  We emphasize that vision therapy is not a universal substitute for spectacles,
                  nor does it eliminate all surgical requirements. Children with significant mechanical
                  strabismus or structural ocular abnormalities are coordinated directly with
                  pediatric ophthalmologists for surgical review.
                </p>
              </div>

              <div className="md:col-span-4 flex justify-start md:justify-end">
                <Button
                  href="/book-specialist?service=amblyopia"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Schedule Assessment
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
