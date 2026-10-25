"use client";

import React, { useState } from "react";
import Image from "next/image";
import { EditorialHeading, SectionLabel, LeadParagraph } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export function PractitionerSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "optometrist",
    city: "delhi",
    email: "",
    phone: "",
    qualifications: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="practitioners" className="py-24 bg-warm-neutral/20 border-b border-clinical-border font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 text-left">
          <SectionLabel className="mb-3">Clinical Network & Governance</SectionLabel>
          <EditorialHeading as="h2" serifAccent="practitioner collaboration.">
            Built on transparent,
          </EditorialHeading>
          <LeadParagraph className="mt-4">
            We collaborate with qualified optometrists and consulting ophthalmologists to deliver
            high standards of care. We are continuously expanding our clinical network across Indian
            metropolitan regions.
          </LeadParagraph>
        </div>

        {/* 2 Roles: Optometrist on the ground + Ophthalmologist Reviewer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Card 1: Optometrists (Image 2) */}
          <div className="lg:col-span-6 bg-white border border-clinical-border rounded-2xl p-6 sm:p-8 shadow-subtle flex flex-col justify-between text-left space-y-6">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-warm-neutral/30 border border-clinical-border">
              <Image
                src="/images/practitioner-kit-prep.jpg"
                alt="Optometrist preparing portable eye examination kit"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute top-3 left-3">
                <Badge variant="clinical" size="sm">Visiting Optometrists</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-deep-ink">Qualified Optometrist Network</h3>
              <p className="text-xs sm:text-sm text-clinical-slate leading-relaxed">
                Registered optometrists conducting comprehensive home visits equipped with
                hospital-calibrated portable slit-lamps, tonometers, trial frames, and digital
                fundus cameras.
              </p>
              <ul className="space-y-2 text-xs text-deep-ink/80 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-clinical-teal" />
                  <span>Standardized clinical examination protocols</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-clinical-teal" />
                  <span>Tablet-based electronic clinical recording</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Ophthalmologist Oversight (Image 4) */}
          <div className="lg:col-span-6 bg-white border border-clinical-border rounded-2xl p-6 sm:p-8 shadow-subtle flex flex-col justify-between text-left space-y-6">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-warm-neutral/30 border border-clinical-border">
              <Image
                src="/images/ophthalmologist-review.jpg"
                alt="Senior ophthalmologist reviewing digital retinal scans"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute top-3 left-3">
                <Badge variant="ink" size="sm">Specialist Oversight</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-deep-ink">Consulting Ophthalmologists</h3>
              <p className="text-xs sm:text-sm text-clinical-slate leading-relaxed">
                Senior ophthalmologists reviewing home examination captures, validating refraction
                data, analyzing retinal photographs, and guiding surgical referrals to tertiary
                eye care hospitals.
              </p>
              <ul className="space-y-2 text-xs text-deep-ink/80 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-clinical-teal" />
                  <span>Remote digital report countersignature</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-clinical-teal" />
                  <span>Direct referral channel for hospital surgical care</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Working Clinician / Partner Enquiry Form */}
        <div className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-10 shadow-elevated text-left">
          <div className="max-w-2xl mb-8">
            <Badge variant="clinical" size="sm" className="mb-2">
              Partnership & Clinical Inquiries
            </Badge>
            <h3 className="text-2xl font-bold text-deep-ink">
              Inquire about joining our clinician network
            </h3>
            <p className="text-xs sm:text-sm text-clinical-slate mt-2 leading-relaxed">
              If you are a qualified optometrist, consulting ophthalmologist, or tertiary eye
              center interested in collaborating with our home-visit clinical model, please share
              your details below.
            </p>
          </div>

          {submitted ? (
            <div className="bg-soft-sage/50 border border-clinical-border rounded-xl p-6 text-left space-y-3">
              <div className="flex items-center gap-2.5 text-clinical-teal font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-clinical-teal" />
                <span>Enquiry Registered (Demonstration Mode)</span>
              </div>
              <p className="text-xs text-clinical-slate leading-relaxed">
                Thank you for your interest, <strong>{formData.name}</strong>. In the production
                release, this enquiry will be routed to our Clinical Governance Committee.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-clinical-teal hover:underline font-semibold"
              >
                &larr; Submit another clinical inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Input
                  label="Full Name"
                  placeholder="Dr. / Optom. Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />

                <Select
                  label="Professional Role"
                  options={[
                    { value: "optometrist", label: "Qualified Optometrist (B.Optom / M.Optom)" },
                    { value: "ophthalmologist", label: "Consulting Ophthalmologist (MS / DNB / FRCS)" },
                    { value: "hospital", label: "Tertiary Hospital / Clinic Representative" },
                  ]}
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                />

                <Select
                  label="Operating Metro"
                  options={[
                    { value: "delhi", label: "Delhi NCR" },
                    { value: "mumbai", label: "Mumbai & MMR" },
                    { value: "bengaluru", label: "Bengaluru" },
                    { value: "hyderabad", label: "Hyderabad" },
                    { value: "pune", label: "Pune" },
                    { value: "chennai", label: "Chennai" },
                  ]}
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />

                <Input
                  label="Professional Email"
                  type="email"
                  placeholder="doctor@clinic.in"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />

                <Input
                  label="Contact Phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />

                <Input
                  label="Registration / Council Number"
                  placeholder="e.g. State Optical Council Reg."
                  value={formData.qualifications}
                  onChange={(e) => setFormData({ ...formData, qualifications: e.target.value })}
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-clinical-border">
                <div className="text-[11px] text-clinical-slate flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-clinical-teal" />
                  <span>Credential verification applies to all practitioner affiliations.</span>
                </div>

                <Button type="submit" variant="primary" size="md">
                  Submit Practitioner Inquiry
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
