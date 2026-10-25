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
import { ShieldCheck, ArrowRight, Check, Eye, Droplet, Sparkles, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Specialty Contact Lens Assessment & Fitting",
  description:
    "Comprehensive anterior segment biomicroscopy, corneal curvature assessment, and bespoke fitting for toric, multifocal, RGP, and scleral lenses.",
};

export default function ContactLensesPage() {
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
            <span className="text-clinical-teal font-semibold">Contact Lenses</span>
          </nav>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <SectionLabel>Anterior Segment & Optical Fitting</SectionLabel>
                <Badge variant="clinical" size="sm">Corneal Health Protocol</Badge>
              </div>

              <EditorialHeading as="h1" serifAccent="fitted with medical precision.">
                Safe, comfortable contact lenses,
              </EditorialHeading>

              <LeadParagraph>
                Contact lenses are medical devices placed directly on the delicate corneal epithelium.
                A successful, long-term contact lens experience requires comprehensive corneal curvature
                measurements, tear-film stability analysis, and tailored trial fittings.
              </LeadParagraph>

              <p className="text-sm text-clinical-slate leading-relaxed">
                Lens options depend fundamentally on individual corneal anatomy, tear quality, and
                lifestyle demands. We do not provide one-size-fits-all prescriptions; we conduct
                careful biomicroscopy and provide hands-on insertion and hygiene training to safeguard
                your ocular health.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  href="/book-specialist?service=contact-lenses"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Book a Contact Lens Fitting
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  Explore All Services
                </Button>
              </div>
            </div>

            {/* Editorial Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-warm-neutral/30 border border-clinical-border shadow-elevated">
                <Image
                  src="/images/contact-lens-assessment.jpg"
                  alt="Optometrist conducting slit-lamp examination inspecting contact lens fit and corneal surface alignment"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-2.5 flex items-center justify-between text-xs text-clinical-slate">
                <span className="font-editorial text-deep-ink italic">Slit-lamp biomicroscopy & lens centration</span>
                <span className="text-[11px] font-sans font-medium bg-soft-sage/80 px-2 py-0.5 rounded text-deep-ink border border-clinical-border">
                  Corneal Evaluation Suite
                </span>
              </div>
            </div>
          </div>

          {/* 6 Step Fitting Protocol */}
          <section className="py-12 border-t border-clinical-border">
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl font-bold text-deep-ink font-sans">
                Our Comprehensive Contact Lens Protocol
              </h2>
              <p className="text-sm text-clinical-slate mt-1">
                Ensuring physiological breathability, tear exchange, and crisp refractive clarity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Eye,
                  title: "Corneal Topography & Curvature",
                  desc: "Measurement of central corneal curvature (K-readings) to ensure the lens base curve matches the ocular surface without mechanical friction.",
                },
                {
                  icon: Droplet,
                  title: "Tear Film & Dry Eye Analysis",
                  desc: "Evaluation of non-invasive tear break-up time (TBUT) and meibomian gland function to choose materials with optimal moisture retention.",
                },
                {
                  icon: Sparkles,
                  title: "Tailored Material Selection",
                  desc: "Trials across high-Dk silicone hydrogels, daily disposables, torics for astigmatism, multifocals for presbyopia, and rigid gas permeable (RGP) designs.",
                },
                {
                  icon: ShieldCheck,
                  title: "Slit-Lamp Centration & Movement",
                  desc: "Assessment of lens movement on blink, push-up test for tightness, and edge clearance to prevent corneal hypoxia or limbal vascularization.",
                },
                {
                  icon: RefreshCw,
                  title: "Insertion, Removal & Disinfection Training",
                  desc: "Hands-on, unhurried patient training on sterile handling, contact lens case hygiene, hydrogen peroxide or multi-purpose solution protocols.",
                },
                {
                  icon: Check,
                  title: "Scheduled Follow-Up & Corneal Health",
                  desc: "Mandatory 2-week post-fitting review to inspect corneal epithelial integrity with fluorescein dye under cobalt blue illumination.",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white border border-clinical-border rounded-xl p-6 shadow-subtle space-y-3">
                    <div className="w-9 h-9 rounded-lg bg-soft-sage text-clinical-teal flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-deep-ink">{item.title}</h3>
                    <p className="text-xs text-clinical-slate leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Clinical Safety Disclaimer */}
          <section className="py-10 border-t border-clinical-border">
            <div className="bg-warm-neutral/40 border border-clinical-border rounded-2xl p-6 sm:p-8 flex items-start gap-4 text-xs sm:text-sm text-clinical-slate">
              <ShieldCheck className="w-6 h-6 text-clinical-teal shrink-0 mt-0.5" />
              <div className="space-y-1">
                <strong className="text-deep-ink font-semibold block">
                  Important Contact Lens Safety Guidelines:
                </strong>
                <p>
                  Sleeping in contact lenses without explicit clinical approval, swimming in lenses,
                  or rinsing with tap water significantly increases the risk of microbial keratitis and
                  Acanthamoeba infections. If you experience redness, pain, light sensitivity, or sudden
                  blur, remove lenses immediately and consult an eye-care professional.
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
