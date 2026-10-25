import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { DemoModeBanner } from "@/components/common/DemoModeBanner";
import { EditorialHeading, SectionLabel, LeadParagraph } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Check, ShieldCheck, ArrowRight, Eye, Sun, BookOpen, Search, Compass, Users } from "lucide-react";

export default function LowVisionCarePage() {
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
            <span className="text-clinical-teal font-semibold">Low Vision Care</span>
          </nav>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <SectionLabel>Functional Vision & Rehabilitation</SectionLabel>
                <Badge variant="clinical" size="sm">Accessibility & Autonomy</Badge>
              </div>

              <EditorialHeading as="h1" serifAccent="maximizing remaining sight.">
                Low vision care and support,
              </EditorialHeading>

              <LeadParagraph>
                When visual acuity or visual field cannot be fully corrected with standard eyeglasses,
                contact lenses, or medical surgery—due to advanced age-related macular degeneration
                (AMD), diabetic retinopathy, glaucoma, or retinitis pigmentosa—low vision care provides
                a practical pathway to maximize functional independence.
              </LeadParagraph>

              <p className="text-sm text-clinical-slate leading-relaxed">
                We do not promise the restoration of normal sight. Instead, our specialists evaluate
                your functional vision and train you with specialized optical magnifiers, digital
                electronic video magnifiers, high-contrast illumination, and auditory assistive aids
                to empower reading, mobility, and daily living.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  href="/book-specialist?service=low-vision"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Book a Low Vision Assessment
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
                  src="/images/low-vision-assessment.jpg"
                  alt="Low vision optometrist guiding an elderly Indian patient using an electronic desktop video magnifier with high-contrast display to read comfortably"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-2.5 flex items-center justify-between text-xs text-clinical-slate">
                <span className="font-editorial text-deep-ink italic">Electronic video magnifier & contrast training</span>
                <span className="text-[11px] font-sans font-medium bg-soft-sage/80 px-2 py-0.5 rounded text-deep-ink border border-clinical-border">
                  Low Vision Clinic Suite
                </span>
              </div>
            </div>
          </div>

          {/* 6 Pillars of Low Vision Support */}
          <section className="py-12 border-t border-clinical-border">
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl font-bold text-deep-ink font-sans">
                Six Pillars of Functional Vision Support
              </h2>
              <p className="text-sm text-clinical-slate mt-1">
                Structured clinical evaluations tailored to what matters most to you: reading holy books, recognizing faces, or managing medications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Eye,
                  title: "Functional Vision Evaluation",
                  desc: "Measuring residual contrast sensitivity, eccentric fixation potential, and central vs peripheral visual field limits under variable illumination.",
                },
                {
                  icon: Search,
                  title: "Optical Magnification Trials",
                  desc: "Hands-on testing with illuminated hand magnifiers, stand magnifiers, telescopic distance spectacles, and high-add prismatic reading lenses.",
                },
                {
                  icon: BookOpen,
                  title: "Digital Electronic Video Magnifiers",
                  desc: "Assessment with portable and desktop closed-circuit television (CCTV) magnifiers offering 2x–32x zoom, reverse white-on-black polarity, and line markers.",
                },
                {
                  icon: Sun,
                  title: "Lighting & Environmental Ergonomics",
                  desc: "Guidance on glare-reduction filters, task-specific yellow/amber lenses, directional LED reading lamps, and high-contrast kitchen/bathroom labeling.",
                },
                {
                  icon: Users,
                  title: "Caregiver Training & Guidance",
                  desc: "Educating family members on optimal guiding techniques, avoiding sudden shadows, organizing living spaces, and fostering patient independence.",
                },
                {
                  icon: Compass,
                  title: "Rehabilitation & Community Referrals",
                  desc: "Coordination with orientation & mobility (O&M) trainers, braille institutions, and smartphone accessibility screen readers (TalkBack/VoiceOver).",
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

          {/* Accessible Call to Action Strip */}
          <section className="py-10 border-t border-clinical-border">
            <div className="bg-deep-ink text-warm-ivory rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold font-sans">
                  Ready to explore assistive vision support?
                </h3>
                <p className="text-xs sm:text-sm text-warm-ivory/70">
                  Available in specialist clinic suites in Delhi NCR, Mumbai, and Bengaluru, with home-based assistive trials available on request.
                </p>
              </div>

              <Button
                href="/book-specialist?service=low-vision"
                variant="amber"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Book Low Vision Assessment
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
