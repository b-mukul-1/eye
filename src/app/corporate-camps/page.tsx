"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { DemoModeBanner } from "@/components/common/DemoModeBanner";
import { EditorialHeading, SectionLabel, LeadParagraph } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import {
  Download,
  FileText,
  Building,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  MonitorCheck,
  Activity,
  Users,
  Calendar,
  AlertCircle,
  Clock,
  Sparkles,
} from "lucide-react";

export default function CorporateEyeCampsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    workEmail: "",
    phone: "",
    workplaceLocation: "delhi",
    employeeCount: "100-300",
    preferredDates: "November 2026",
    requiredServices: ["screening", "refraction"],
    additionalRequirements: "",
    privacyAccepted: false,
  });

  const toggleService = (srv: string) => {
    setFormData((prev) => {
      const exists = prev.requiredServices.includes(srv);
      return {
        ...prev,
        requiredServices: exists
          ? prev.requiredServices.filter((s) => s !== srv)
          : [...prev.requiredServices, srv],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.workEmail || !formData.contactPerson) {
      alert("Please fill in your company name, contact person, and official work email.");
      return;
    }
    if (!formData.privacyAccepted) {
      alert("Please acknowledge the corporate privacy and data security statement.");
      return;
    }
    setFormSubmitted(true);
  };

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
            <span className="text-clinical-teal font-semibold">Corporate Eye Camps</span>
          </nav>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <SectionLabel>Employee Vision Care & Health Drives</SectionLabel>
                <Badge variant="clinical" size="sm">On-Site Corporate Screening</Badge>
              </div>

              <EditorialHeading as="h1" serifAccent="Healthier Workplaces.">
                Better Vision.
              </EditorialHeading>

              <LeadParagraph>
                Bring organised eye-care screening and professional vision services to your workplace
                with corporate programmes tailored to your team.
              </LeadParagraph>

              <p className="text-sm text-clinical-slate leading-relaxed">
                Prolonged digital display use among modern knowledge workers leads to asthenopia,
                frequent headaches, uncorrected astigmatism, and productivity loss. We set up
                non-disruptive, clinical-grade eye camps right inside your enterprise facility.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  href="#enquiry-form"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Request a Corporate Eye Camp
                </Button>

                <a
                  href="/downloads/ocuhome-corporate-eye-camps-brochure.pdf"
                  download="ocuhome-corporate-eye-camps-brochure.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-soft-sage text-deep-ink hover:bg-soft-sage/80 border border-clinical-border font-medium text-base shadow-subtle transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-clinical-teal" />
                  <span>Download Corporate Brochure (PDF)</span>
                </a>
              </div>
            </div>

            {/* Editorial Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-warm-neutral/30 border border-clinical-border shadow-elevated">
                <Image
                  src="/images/corporate-eye-screening.jpg"
                  alt="An eye-care professional conducting an ergonomic workplace vision screening with a portable auto-refractor in an enterprise office"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-2.5 flex items-center justify-between text-xs text-clinical-slate">
                <span className="font-editorial text-deep-ink italic">Workplace vision screening in modern corporate office</span>
                <span className="text-[11px] font-sans font-medium bg-soft-sage/80 px-2 py-0.5 rounded text-deep-ink border border-clinical-border">
                  On-Site Camp Setup
                </span>
              </div>
            </div>
          </div>

          {/* Core Activities Included */}
          <section className="py-14 border-t border-clinical-border">
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl font-bold text-deep-ink font-sans">
                Clinical Activities Included in the Programme
              </h2>
              <p className="text-sm text-clinical-slate mt-1">
                Customized according to organizational size, employee shift patterns, and clinical requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: MonitorCheck,
                  title: "Workplace Vision Screening",
                  desc: "Rapid, standardized visual checks evaluating computer-distance acuity, letter legibility, and contrast recognition.",
                },
                {
                  icon: Activity,
                  title: "Objective & Subjective Refraction",
                  desc: "Calibrated handheld auto-refractor checks followed by trial lens verification for employees needing new or updated spectacle prescriptions.",
                },
                {
                  icon: Clock,
                  title: "Non-Disruptive 15-Minute Slots",
                  desc: "Pre-scheduled employee appointment slots that fit smoothly into workdays without disrupting team sprints or client deliverables.",
                },
                {
                  icon: Sparkles,
                  title: "Eye-Health Awareness Sessions",
                  desc: "Interactive 30-minute optometrist-led workshops on the 20-20-20 rule, screen glare mitigation, and contact lens hygiene.",
                },
                {
                  icon: ShieldCheck,
                  title: "Tertiary Referral Coordination",
                  desc: "Immediate clinical referral documentation for staff members presenting with elevated pressure (glaucoma flag) or retinal concerns.",
                },
                {
                  icon: FileText,
                  title: "Anonymized Corporate Analytics",
                  desc: "Comprehensive executive reporting summarizing refractive error prevalence and lighting ergonomics across the facility.",
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

          {/* Differentiating Basic Screening from Comprehensive Diagnosis */}
          <section className="py-10 border-t border-clinical-border">
            <div className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-8 flex items-start gap-4 text-xs sm:text-sm text-clinical-slate">
              <AlertCircle className="w-6 h-6 text-subtle-amber-dark shrink-0 mt-0.5" />
              <div className="space-y-1">
                <strong className="text-deep-ink font-semibold block">
                  Important Clinical Distinction for Employers:
                </strong>
                <p>
                  Corporate eye camps provide non-invasive primary vision screening and refraction. They
                  do not replace a dilated ophthalmic hospital examination. Employees requiring
                  specialized retinal imaging, glaucoma visual field analysis, or surgical cataract
                  evaluation are given prioritized referral letters to accredited tertiary facilities.
                </p>
              </div>
            </div>
          </section>

          {/* Four-Stage Camp Implementation Process */}
          <section className="py-14 border-t border-clinical-border">
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl font-bold text-deep-ink font-sans">
                How Corporate Camps Work
              </h2>
              <p className="text-sm text-clinical-slate mt-1">
                A streamlined four-stage operational process managed end-to-end by our institutional health team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  num: "01",
                  title: "Share Your Requirements",
                  desc: "Submit your workplace location, approximate employee headcount, and preferred dates via our enquiry form.",
                },
                {
                  num: "02",
                  title: "Plan the Programme",
                  desc: "Our institutional team coordinates room setup, equipment mobilization, staffing ratios, and digital employee booking links.",
                },
                {
                  num: "03",
                  title: "Conduct the Camp",
                  desc: "Qualified, degree-holding optometrists execute rapid, sanitized examinations in your designated conference room.",
                },
                {
                  num: "04",
                  title: "Coordinate Next Steps",
                  desc: "Employees receive verified digital prescriptions; employers receive anonymized health insights and referral coordination.",
                },
              ].map((st, idx) => (
                <div key={idx} className="bg-white border border-clinical-border rounded-xl p-6 shadow-subtle space-y-2">
                  <div className="font-editorial text-2xl text-clinical-teal font-semibold">{st.num}</div>
                  <h3 className="text-base font-bold text-deep-ink">{st.title}</h3>
                  <p className="text-xs text-clinical-slate leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Corporate Enquiry Form */}
          <section id="enquiry-form" className="py-14 border-t border-clinical-border">
            <div className="bg-white border border-clinical-border rounded-2xl p-8 sm:p-12 shadow-elevated">
              <div className="max-w-3xl mb-8">
                <Badge variant="clinical" size="sm" className="mb-2">Institutional Scheduling</Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-deep-ink font-sans">
                  Request a Corporate Eye Camp Proposal
                </h2>
                <p className="text-xs sm:text-sm text-clinical-slate mt-2 leading-relaxed">
                  Fill in your workplace parameters below. Our institutional coordinator will prepare
                  a formal proposal covering staffing, diagnostic scope, and scheduling.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-soft-sage/50 border border-clinical-border rounded-xl p-8 space-y-4">
                  <div className="flex items-center gap-3 text-clinical-teal font-bold text-base">
                    <CheckCircle2 className="w-6 h-6" />
                    <span>Corporate Proposal Request Logged (Demonstration Mode)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-clinical-slate leading-relaxed">
                    Thank you, <strong>{formData.contactPerson}</strong>. Your corporate request for{" "}
                    <strong>{formData.companyName}</strong> ({formData.workplaceLocation.toUpperCase()})
                    has been compiled.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-clinical-border text-xs text-clinical-slate space-y-1">
                    <div><strong>Workplace:</strong> {formData.companyName} ({formData.employeeCount} staff)</div>
                    <div><strong>Contact Email:</strong> {formData.workEmail}</div>
                    <div><strong>Selected Scope:</strong> {formData.requiredServices.join(", ")}</div>
                    <div><strong>Target Timeframe:</strong> {formData.preferredDates}</div>
                  </div>
                  <div className="text-xs text-clinical-slate">
                    <em>Notice: In Phase 1 frontend development, no CRM webhook is connected yet. This data structure is ready for Phase 2 integration.</em>
                  </div>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-clinical-teal hover:underline font-semibold"
                  >
                    &larr; Submit another corporate enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    <Input
                      label="Company or Organisation Name"
                      placeholder="e.g. Infosys Ltd, Flipkart, TCS"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    />

                    <Input
                      label="Contact Person Name & Title"
                      placeholder="e.g. Shalini Nair (HR Operations)"
                      required
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    />

                    <Input
                      label="Official Work Email"
                      type="email"
                      placeholder="shalini.nair@company.com"
                      required
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    />

                    <Input
                      label="Contact Phone Number"
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />

                    <Select
                      label="Workplace Location (City)"
                      options={[
                        { value: "delhi", label: "Delhi NCR (Gurugram / Noida / Delhi)" },
                        { value: "mumbai", label: "Mumbai & MMR" },
                        { value: "bengaluru", label: "Bengaluru (Electronic City / Whitefield)" },
                        { value: "hyderabad", label: "Hyderabad (HITEC City / Gachibowli)" },
                        { value: "pune", label: "Pune (Hinjawadi / Viman Nagar)" },
                        { value: "other", label: "Other Indian Metro / Industrial Hub" },
                      ]}
                      value={formData.workplaceLocation}
                      onChange={(e) => setFormData({ ...formData, workplaceLocation: e.target.value })}
                    />

                    <Select
                      label="Approximate Employee Count"
                      options={[
                        { value: "50-100", label: "50 – 100 Employees" },
                        { value: "100-300", label: "100 – 300 Employees" },
                        { value: "300-800", label: "300 – 800 Employees" },
                        { value: "800-2000", label: "800 – 2,000 Employees" },
                        { value: "2000+", label: "2,000+ Enterprise Campus" },
                      ]}
                      value={formData.employeeCount}
                      onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                    />

                    <Input
                      label="Preferred Date / Timeframe"
                      placeholder="e.g. November 2026, Q4 Annual Drive"
                      value={formData.preferredDates}
                      onChange={(e) => setFormData({ ...formData, preferredDates: e.target.value })}
                    />
                  </div>

                  {/* Required Services Checkboxes */}
                  <div className="space-y-2 pt-2 border-t border-clinical-border">
                    <span className="text-xs font-semibold uppercase tracking-wider text-deep-ink block">
                      Required Camp Activities:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                      {[
                        { id: "screening", label: "Workplace Vision Screening" },
                        { id: "refraction", label: "Full Spectacle Refraction" },
                        { id: "glaucoma-tonometry", label: "Glaucoma IOP Tonometry" },
                        { id: "awareness-seminar", label: "Eye Health Awareness Webinar" },
                      ].map((srv) => (
                        <label key={srv.id} className="flex items-center gap-2 p-2.5 rounded-lg border border-clinical-border bg-warm-neutral/20 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.requiredServices.includes(srv.id)}
                            onChange={() => toggleService(srv.id)}
                            className="rounded text-clinical-teal"
                          />
                          <span>{srv.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-deep-ink/80">
                      Additional Requirements or Facility Specifics:
                    </label>
                    <textarea
                      rows={3}
                      className="w-full bg-white/80 border border-clinical-border rounded-lg p-3 text-sm text-deep-ink placeholder:text-clinical-slate/50 focus:outline-none focus:border-clinical-teal"
                      placeholder="Mention any shift timings, multi-building requirements, or executive home voucher requests..."
                      value={formData.additionalRequirements}
                      onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                    />
                  </div>

                  {/* Privacy Acknowledgement */}
                  <div className="p-3.5 bg-warm-neutral/30 border border-clinical-border rounded-xl flex items-start gap-3 text-xs text-clinical-slate">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={formData.privacyAccepted}
                      onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                      className="mt-0.5 rounded text-clinical-teal"
                      required
                    />
                    <label htmlFor="privacy" className="cursor-pointer">
                      I understand that employee medical data will remain confidential under the
                      Digital Personal Data Protection Act (DPDP), and aggregate corporate reports will
                      be anonymized. No real CRM write occurs during this demonstration phase.
                    </label>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-clinical-border">
                    <div className="text-[11px] text-clinical-slate flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-clinical-teal" />
                      <span>Formal proposals delivered within 24 business hours.</span>
                    </div>

                    <Button type="submit" variant="primary" size="lg">
                      Submit Corporate Eye Camp Request
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </section>

          {/* Corporate Credibility & Compliance Space */}
          <section className="py-12 border-t border-clinical-border text-xs text-clinical-slate">
            <h4 className="font-bold text-deep-ink uppercase tracking-wider text-xs mb-3">
              Institutional Quality & Compliance Safeguards
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <strong className="text-deep-ink block mb-1">Qualified Clinical Personnel:</strong>
                <span>All camps are staffed by university-trained optometrists registered with Indian state optometry councils.</span>
              </div>
              <div>
                <strong className="text-deep-ink block mb-1">ISO-Calibrated Instrumentation:</strong>
                <span>Optical refractometers, lensmeters, and tonometers undergo documented calibration runs prior to campus dispatch.</span>
              </div>
              <div>
                <strong className="text-deep-ink block mb-1">Data Privacy by Design:</strong>
                <span>Individual employee findings remain private between the patient and clinician. Employers receive only aggregated workforce statistics.</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
