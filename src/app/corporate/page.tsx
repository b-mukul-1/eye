"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { DemoModeBanner } from "@/components/common/DemoModeBanner";
import { EditorialHeading, SectionLabel, LeadParagraph } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Download, FileText, Building2, CheckCircle2, ShieldCheck, ArrowRight, MonitorCheck } from "lucide-react";

export default function CorporatePage() {
  const [submitted, setSubmitted] = useState(false);
  const [companyData, setCompanyData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    employeeCount: "100-500",
    city: "delhi",
    preferredQuarter: "Q4 2026",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyData.companyName || !companyData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-warm-ivory flex flex-col font-sans text-deep-ink">
      <DemoModeBanner />
      <Navbar />

      <main className="flex-1 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          {/* Header & Brochure Download Action */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
            <div className="lg:col-span-8 space-y-4">
              <SectionLabel>Institutional & Corporate Vision Programs</SectionLabel>
              <EditorialHeading as="h1" serifAccent="for modern enterprises.">
                Workplace eye-health solutions,
              </EditorialHeading>
              <LeadParagraph>
                Prolonged display viewing causes digital eye strain, uncorrected astigmatism, and
                fatigue. Our on-site corporate clinics bring calibrated diagnostic screening directly
                to your corporate campus across Indian metros.
              </LeadParagraph>
            </div>

            <div className="lg:col-span-4 bg-white border border-clinical-border rounded-2xl p-6 shadow-subtle space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-clinical-teal">
                <FileText className="w-4 h-4" />
                <span>Official PDF Brochure</span>
              </div>
              <h4 className="text-base font-bold text-deep-ink">
                OcuHome Corporate Eye-Care Overview
              </h4>
              <p className="text-xs text-clinical-slate leading-relaxed">
                Download the complete 2-page clinical program brochure detailing on-site diagnostic
                suites, triage tiers, and executive home-visit extensions.
              </p>
              <div className="pt-2">
                <a
                  href="/downloads/ocuhome-corporate-eyecare-brochure.pdf"
                  download="ocuhome-corporate-eyecare-brochure.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-clinical-teal text-white hover:bg-clinical-teal-dark font-medium text-xs shadow-subtle transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Corporate Brochure (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* 3 Core Corporate Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border border-clinical-border rounded-xl p-6 shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-lg bg-soft-sage text-clinical-teal flex items-center justify-center">
                <MonitorCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-deep-ink">Digital Eye Strain Audits</h3>
              <p className="text-xs text-clinical-slate leading-relaxed">
                Targeted ergonomic refraction assessing computer screen distance, blink rates, and
                dry eye symptoms among desk professionals.
              </p>
            </div>

            <div className="bg-white border border-clinical-border rounded-xl p-6 shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-lg bg-warm-neutral text-deep-ink flex items-center justify-center">
                <Building2 className="w-5 h-5 text-clinical-teal" />
              </div>
              <h3 className="text-base font-bold text-deep-ink">Non-Disruptive Campus Clinics</h3>
              <p className="text-xs text-clinical-slate leading-relaxed">
                Streamlined 15-minute examination slots that fit smoothly into work schedules
                without pulling employees away from critical meetings.
              </p>
            </div>

            <div className="bg-white border border-clinical-border rounded-xl p-6 shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-lg bg-subtle-amber-light text-subtle-amber-dark flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-deep-ink">Executive & Family Extensions</h3>
              <p className="text-xs text-clinical-slate leading-relaxed">
                Optional enterprise wellness benefit covering comprehensive home eye assessments
                for leadership teams and their dependent senior parents.
              </p>
            </div>
          </div>

          {/* Corporate Enquiry Form */}
          <div className="bg-white border border-clinical-border rounded-2xl p-8 sm:p-12 shadow-elevated text-left">
            <div className="max-w-2xl mb-8">
              <Badge variant="clinical" size="sm" className="mb-2">Enterprise Engagement</Badge>
              <h3 className="text-2xl font-bold text-deep-ink">Request a Corporate Vision Clinic Proposal</h3>
              <p className="text-xs sm:text-sm text-clinical-slate mt-2 leading-relaxed">
                Our institutional coordinator will prepare a tailored schedule and on-site plan
                for your workplace campus or corporate wellness month.
              </p>
            </div>

            {submitted ? (
              <div className="bg-soft-sage/40 border border-clinical-border rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-clinical-teal font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Corporate Proposal Request Logged (Demonstration Mode)</span>
                </div>
                <p className="text-xs text-clinical-slate leading-relaxed">
                  Thank you, <strong>{companyData.contactPerson}</strong>. We have logged your
                  workplace screening interest for <strong>{companyData.companyName}</strong>. In the
                  live backend release, our enterprise coordinator will follow up within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-clinical-teal hover:underline font-semibold"
                >
                  &larr; Submit another corporate request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <Input
                    label="Company / Enterprise Name"
                    placeholder="e.g. Acme Tech India Pvt Ltd"
                    required
                    value={companyData.companyName}
                    onChange={(e) => setCompanyData({ ...companyData, companyName: e.target.value })}
                  />

                  <Input
                    label="Contact Person Name"
                    placeholder="e.g. Meera Sen (HR Director)"
                    required
                    value={companyData.contactPerson}
                    onChange={(e) => setCompanyData({ ...companyData, contactPerson: e.target.value })}
                  />

                  <Input
                    label="Corporate Email Address"
                    type="email"
                    placeholder="hr@company.com"
                    required
                    value={companyData.email}
                    onChange={(e) => setCompanyData({ ...companyData, email: e.target.value })}
                  />

                  <Input
                    label="Contact Phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={companyData.phone}
                    onChange={(e) => setCompanyData({ ...companyData, phone: e.target.value })}
                  />

                  <Select
                    label="Workforce Size"
                    options={[
                      { value: "50-100", label: "50 – 100 Employees" },
                      { value: "100-500", label: "100 – 500 Employees" },
                      { value: "500-2000", label: "500 – 2,000 Employees" },
                      { value: "2000+", label: "2,000+ Enterprise Campus" },
                    ]}
                    value={companyData.employeeCount}
                    onChange={(e) => setCompanyData({ ...companyData, employeeCount: e.target.value })}
                  />

                  <Select
                    label="Primary Campus Location"
                    options={[
                      { value: "delhi", label: "Delhi NCR (Gurugram / Noida)" },
                      { value: "mumbai", label: "Mumbai / MMR" },
                      { value: "bengaluru", label: "Bengaluru (Electronic City / Whitefield)" },
                      { value: "hyderabad", label: "Hyderabad (HITEC City)" },
                      { value: "pune", label: "Pune (Hinjawadi / Magarpatta)" },
                    ]}
                    value={companyData.city}
                    onChange={(e) => setCompanyData({ ...companyData, city: e.target.value })}
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-clinical-border">
                  <span className="text-[11px] text-clinical-slate">
                    Comprehensive compliance with Indian workplace wellness guidelines.
                  </span>
                  <Button type="submit" variant="primary" size="md">
                    Request Corporate Proposal
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
