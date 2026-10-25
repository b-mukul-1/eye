"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { DemoModeBanner } from "@/components/common/DemoModeBanner";
import { EditorialHeading, SectionLabel, LeadParagraph } from "@/components/ui/Typography";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { Button } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/config/site";
import { Phone, Mail, Clock, MapPin, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "delhi",
    inquiryType: "general",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-warm-ivory flex flex-col font-sans text-deep-ink">
      <DemoModeBanner />
      <Navbar />

      <main className="flex-1 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          {/* Header */}
          <div className="max-w-3xl mb-14">
            <SectionLabel className="mb-2">Support & Operational Hubs</SectionLabel>
            <EditorialHeading as="h1" serifAccent="and practical FAQs.">
              Contact our clinical team,
            </EditorialHeading>
            <LeadParagraph className="mt-3">
              Have questions about booking a home visit, preparing your residence for an examination,
              or scheduling care for an elderly relative? Our clinical support team is here to assist.
            </LeadParagraph>
          </div>

          {/* Emergency Escalation Alert Box */}
          <div className="mb-12 bg-amber-50/80 border border-amber-200/80 rounded-2xl p-6 sm:p-8 flex items-start gap-4 text-left">
            <AlertTriangle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1.5 text-xs sm:text-sm text-amber-900 leading-relaxed">
              <strong className="text-amber-950 font-bold block text-sm sm:text-base">
                Emergency Ophthalmic Triage Notice:
              </strong>
              <p>
                Home examinations are designed for scheduled diagnostic assessments, refraction, and
                chronic screening. If you or a family member are experiencing sudden loss of vision,
                acute ocular trauma, severe eye pain with vomiting, chemical splashes, or flashers
                with a dark shadow in your visual field, <strong>do not wait for a home appointment</strong>.
                Please visit the nearest 24-hour tertiary eye hospital emergency department immediately.
              </p>
            </div>
          </div>

          {/* Contact Details & Inquiry Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            {/* Left: Contact Info & Hubs */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-8 shadow-subtle space-y-6">
                <h3 className="text-lg font-bold text-deep-ink">Patient Support Desk</h3>

                <div className="space-y-4 text-xs sm:text-sm text-clinical-slate">
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-clinical-teal shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-deep-ink block font-medium">Patient Coordination Line:</strong>
                      <span>{siteConfig.contact.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-clinical-teal shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-deep-ink block font-medium">Clinical Inquiries:</strong>
                      <span>{siteConfig.contact.email}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-clinical-teal shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-deep-ink block font-medium">Desk Operating Hours:</strong>
                      <span>{siteConfig.contact.hours}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metro Hubs */}
              <div className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-8 shadow-subtle space-y-4">
                <h4 className="text-base font-bold text-deep-ink">Metropolitan Operating Hubs</h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  {siteConfig.citiesServed.map((city) => (
                    <div key={city.name} className="p-2.5 rounded-lg bg-warm-neutral/30 border border-clinical-border/60">
                      <div className="font-semibold text-deep-ink flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-clinical-teal" />
                        <span>{city.name}</span>
                      </div>
                      <div className="text-[10px] text-clinical-slate mt-0.5">{city.status}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Working Inquiry Form */}
            <div className="lg:col-span-7 bg-white border border-clinical-border rounded-2xl p-8 sm:p-10 shadow-elevated">
              <div className="mb-6">
                <Badge variant="clinical" size="sm" className="mb-2">General Inquiry</Badge>
                <h3 className="text-2xl font-bold text-deep-ink">Send us a message</h3>
                <p className="text-xs sm:text-sm text-clinical-slate mt-1">
                  Our clinical coordinators will respond within 2 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="bg-soft-sage/40 border border-clinical-border rounded-xl p-6 space-y-3">
                  <div className="flex items-center gap-2 text-clinical-teal font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Inquiry Registered (Demonstration Mode)</span>
                  </div>
                  <p className="text-xs text-clinical-slate leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. In the production deployment, our
                    triage desk in {formData.city} will respond to <strong>{formData.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-clinical-teal hover:underline font-semibold"
                  >
                    &larr; Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />

                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="name@domain.in"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />

                    <Input
                      label="Phone Number"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />

                    <Select
                      label="City of Residence"
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
                  </div>

                  <Select
                    label="Inquiry Category"
                    options={[
                      { value: "general", label: "General Home Visit Inquiry" },
                      { value: "elderly", label: "Specialized Care for Aging Relative" },
                      { value: "diabetic", label: "Diabetic Retinopathy Assessment" },
                      { value: "corporate", label: "Corporate Wellness Camp" },
                      { value: "practitioner", label: "Optometrist / Ophthalmologist Partnership" },
                    ]}
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  />

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-deep-ink/80">
                      Message or Specific Clinical Questions
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-white/80 border border-clinical-border rounded-lg p-3.5 text-sm text-deep-ink placeholder:text-clinical-slate/50 focus:bg-white focus:border-clinical-teal focus:ring-1 focus:ring-clinical-teal focus:outline-none"
                      placeholder="Tell us about the patient's current symptoms, mobility requirements, or preferred appointment dates..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <Button type="submit" variant="primary" size="md">
                      Send Clinical Inquiry
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FaqAccordion />
      </main>

      <Footer />
    </div>
  );
}
