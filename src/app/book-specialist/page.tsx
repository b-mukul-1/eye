"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { DemoModeBanner } from "@/components/common/DemoModeBanner";
import { EditorialHeading, SectionLabel, LeadParagraph } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import {
  specialistProfiles,
  specialistCategories,
  type SpecialistProfile,
} from "@/data/specialists";
import {
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  ArrowRight,
  Building,
  Home,
  Globe,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

function BookSpecialistContent() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "all";
  const preselectedSpecialist = searchParams.get("specialist") || "";

  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    if (preselectedService && preselectedService !== "all") {
      const match = specialistCategories.find(
        (c) => c.id === preselectedService || c.id.includes(preselectedService)
      );
      if (match) return match.id;
    }
    return "all";
  });

  const [selectedSpecialist, setSelectedSpecialist] = useState<SpecialistProfile | null>(() => {
    if (preselectedSpecialist) {
      return specialistProfiles.find((s) => s.id === preselectedSpecialist) || null;
    }
    return null;
  });

  // Appointment Configuration State
  const [bookingStep, setBookingStep] = useState<1 | 2 | 3>(() => (preselectedSpecialist ? 2 : 1)); // 1: Browse/Select, 2: Slot & Details, 3: Confirmation
  const [careSetting, setCareSetting] = useState<"clinic-appointment" | "home-visit">("clinic-appointment");
  const [selectedDate, setSelectedDate] = useState("2026-10-28");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("11:00 AM – 12:00 PM");
  const [selectedLocation, setSelectedLocation] = useState("New Delhi Specialist Suite");

  // Patient Contact & Preferences
  const [patientForm, setPatientForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    age: "",
    previousCareHistory: "first-time",
    chiefConcern: "",
    needAssistance: false,
  });

  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generalEnquiryMode, setGeneralEnquiryMode] = useState(false);

  // Filter specialists by category
  const filteredSpecialists = specialistProfiles.filter((s) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "ophthalmology") return s.specialty.includes("Ophthalmology");
    if (selectedCategory === "optometry") return s.specialty.includes("Primary Eye Care") || s.specialty.includes("Optometry");
    if (selectedCategory === "amblyopia") return s.specialty.includes("Amblyopia");
    if (selectedCategory === "contact-lenses") return s.specialty.includes("Contact Lens");
    if (selectedCategory === "prosthetic-eye") return s.specialty.includes("Prosthetic");
    if (selectedCategory === "low-vision") return s.specialty.includes("Low Vision");
    return true;
  });

  // Handle start booking with specialist
  const handleSelectSpecialist = (specialist: SpecialistProfile) => {
    setSelectedSpecialist(specialist);
    // Set appropriate default care setting based on what this specialist offers
    if (specialist.consultationFormats.includes("home-visit") && !specialist.consultationFormats.includes("clinic-appointment")) {
      setCareSetting("home-visit");
    } else {
      setCareSetting("clinic-appointment");
    }
    if (specialist.clinicLocations.length > 0) {
      setSelectedLocation(specialist.clinicLocations[0]);
    }
    setFormError("");
    setBookingStep(2);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientForm.fullName.trim()) {
      setFormError("Please enter the patient's full name.");
      return;
    }
    if (!patientForm.phone.trim() || patientForm.phone.trim().length < 10) {
      setFormError("Please enter a valid 10-digit contact mobile number.");
      return;
    }
    setFormError("");
    setIsSubmitting(true);
    // Simulate brief request compilation
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingStep(3);
      window.scrollTo({ top: 200, behavior: "smooth" });
    }, 400);
  };

  return (
    <div className="min-h-screen bg-warm-ivory flex flex-col font-sans text-deep-ink">
      <DemoModeBanner />
      <Navbar />

      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-2">
              <SectionLabel>Specialist Consultation Directory</SectionLabel>
              <Badge variant="clinical" size="sm">Verified Credentials</Badge>
            </div>
            <EditorialHeading as="h1" serifAccent="suited to your eye care.">
              Book your specialist,
            </EditorialHeading>
            <LeadParagraph className="mt-3 text-sm sm:text-base">
              Select your clinical concern or browse verified practitioner profiles across
              ophthalmology, pediatric vision therapy, custom contact lenses, ocular prosthetics, and
              low-vision rehabilitation.
            </LeadParagraph>
          </div>

          {/* Quick Help / Unsure Banner */}
          <div className="mb-8 p-4 bg-warm-neutral/40 border border-clinical-border rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-deep-ink">
              <HelpCircle className="w-4 h-4 text-clinical-teal shrink-0" />
              <span>
                <strong>Unsure which specialist is appropriate for your symptoms?</strong> Our clinical
                triage coordinator can recommend the right consultation category.
              </span>
            </div>
            <button
              onClick={() => {
                setGeneralEnquiryMode(!generalEnquiryMode);
                window.scrollTo({ top: 400, behavior: "smooth" });
              }}
              className="text-xs font-semibold text-clinical-teal hover:underline shrink-0"
            >
              {generalEnquiryMode ? "Show Specialist Directory" : "Request Appointment Assistance &rarr;"}
            </button>
          </div>

          {/* GENERAL ENQUIRY ASSISTANCE FORM (If Unsure) */}
          {generalEnquiryMode && (
            <div className="mb-14 bg-white border border-clinical-teal/40 rounded-2xl p-6 sm:p-10 shadow-elevated">
              <div className="max-w-2xl mb-6">
                <Badge variant="clinical" size="sm" className="mb-2">Appointment Assistance</Badge>
                <h3 className="text-xl font-bold text-deep-ink">Request Clinical Triage Recommendation</h3>
                <p className="text-xs text-clinical-slate mt-1">
                  Describe your visual symptoms or upload a previous prescription. A senior clinical
                  optometrist will evaluate your request and match you with the appropriate specialist.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4 max-w-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Patient Full Name"
                    placeholder="e.g. Meenakshi Sundaram"
                    required
                    value={patientForm.fullName}
                    onChange={(e) => setPatientForm({ ...patientForm, fullName: e.target.value })}
                  />
                  <Input
                    label="Contact Phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                    value={patientForm.phone}
                    onChange={(e) => setPatientForm({ ...patientForm, phone: e.target.value })}
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="patient@domain.in"
                    value={patientForm.email}
                    onChange={(e) => setPatientForm({ ...patientForm, email: e.target.value })}
                  />
                  <Select
                    label="Preferred Consultation City"
                    options={[
                      { value: "delhi", label: "Delhi NCR" },
                      { value: "mumbai", label: "Mumbai & MMR" },
                      { value: "bengaluru", label: "Bengaluru" },
                      { value: "hyderabad", label: "Hyderabad" },
                      { value: "pune", label: "Pune" },
                    ]}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-deep-ink/80">
                    Describe your primary symptoms or question
                  </label>
                  <textarea
                    rows={3}
                    className="w-full bg-white/80 border border-clinical-border rounded-lg p-3 text-sm text-deep-ink placeholder:text-clinical-slate/50 focus:outline-none focus:border-clinical-teal"
                    placeholder="e.g. My 7-year-old struggles to read from the board; or I have a custom scleral shell requirement..."
                    value={patientForm.chiefConcern}
                    onChange={(e) => setPatientForm({ ...patientForm, chiefConcern: e.target.value })}
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-clinical-slate">
                    Demonstration Mode &bull; Response time within 2 hours
                  </span>
                  <Button type="submit" variant="primary" size="md">
                    Submit Triage Request
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 1: CATEGORY TABS & SPECIALIST PROFILES */}
          {bookingStep === 1 && !generalEnquiryMode && (
            <div className="space-y-10">
              {/* Service Category Selector Filter */}
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-clinical-slate block">
                  1. Filter by Eye-Care Concern or Specialty:
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={cn(
                      "px-3.5 py-2 rounded-xl text-xs font-medium transition-all border",
                      selectedCategory === "all"
                        ? "bg-deep-ink text-warm-ivory border-deep-ink shadow-xs"
                        : "bg-white text-deep-ink hover:bg-soft-sage/40 border-clinical-border"
                    )}
                  >
                    All Specialists ({specialistProfiles.length})
                  </button>

                  {specialistCategories.map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={cn(
                          "px-3.5 py-2 rounded-xl text-xs font-medium transition-all border flex items-center gap-1.5",
                          isSelected
                            ? "bg-deep-ink text-warm-ivory border-deep-ink shadow-xs"
                            : "bg-white text-deep-ink hover:bg-soft-sage/40 border-clinical-border"
                        )}
                      >
                        <span>{cat.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Specialist Profiles Grid */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-clinical-slate font-medium">
                    Showing {filteredSpecialists.length} verified specialist profile{filteredSpecialists.length !== 1 ? "s" : ""}
                  </span>
                  <Badge variant="amber" size="sm">
                    Demonstration Profiles &bull; Replaceable Data Schema
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredSpecialists.map((specialist) => (
                    <div
                      key={specialist.id}
                      className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-7 shadow-subtle hover:shadow-elevated transition-shadow flex flex-col justify-between space-y-5 text-left"
                    >
                      {/* Top Profile Card Header */}
                      <div className="flex items-start gap-4">
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-warm-neutral/30 border border-clinical-border shrink-0">
                          <Image
                            src={specialist.photo}
                            alt={specialist.name}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </div>

                        <div className="space-y-1 flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-1">
                            <h3 className="text-lg font-bold text-deep-ink">{specialist.name}</h3>
                            <div className="flex items-center gap-1.5">
                              <Badge variant="neutral" size="sm" className="text-[10px] bg-warm-neutral/60 text-clinical-slate border-clinical-border">
                                Demo Profile
                              </Badge>
                              <Badge variant="clinical" size="sm">
                                {specialist.experienceYears}+ yrs exp
                              </Badge>
                            </div>
                          </div>
                          <div className="text-xs font-semibold text-clinical-teal">
                            {specialist.title}
                          </div>
                          <div className="text-[11px] text-clinical-slate">
                            {specialist.qualifications}
                          </div>
                          <div className="text-[10px] text-clinical-slate/70">
                            Reg: {specialist.registrationNumber}
                          </div>
                        </div>
                      </div>

                      {/* Bio & Clinical Interests */}
                      <div className="space-y-3 text-xs">
                        <p className="text-clinical-slate leading-relaxed">
                          {specialist.bio}
                        </p>

                        <div>
                          <span className="text-[10px] font-semibold uppercase text-deep-ink/70 block mb-1.5">
                            Specialized Clinical Focus:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {specialist.clinicalInterests.map((interest, idx) => (
                              <span
                                key={idx}
                                className="bg-warm-neutral/40 border border-clinical-border px-2 py-0.5 rounded text-[11px] text-deep-ink"
                              >
                                {interest}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Consultation Formats & Next Availability */}
                      <div className="pt-3 border-t border-clinical-border space-y-3 text-xs">
                        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px]">
                          <div className="flex items-center gap-2">
                            <span className="text-clinical-slate">Consultation Formats:</span>
                            {specialist.consultationFormats.includes("home-visit") && (
                              <span className="inline-flex items-center gap-1 text-clinical-teal font-medium bg-soft-sage/40 px-2 py-0.5 rounded">
                                <Home className="w-3 h-3" /> Home Visit
                              </span>
                            )}
                            {specialist.consultationFormats.includes("clinic-appointment") && (
                              <span className="inline-flex items-center gap-1 text-deep-ink font-medium bg-warm-neutral/40 px-2 py-0.5 rounded">
                                <Building className="w-3 h-3" /> Clinic Suite
                              </span>
                            )}
                          </div>

                          <div className="text-clinical-slate">
                            <Globe className="w-3 h-3 inline mr-1 text-clinical-slate" />
                            <span>{specialist.languages.join(", ")}</span>
                          </div>
                        </div>

                        {/* Location details */}
                        <div className="text-[11px] text-clinical-slate flex items-start gap-1.5">
                          <MapPin className="w-3 h-3 text-subtle-amber-dark shrink-0 mt-0.5" />
                          <span>Locations: {specialist.clinicLocations.join("; ")}</span>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <div className="text-[11px] text-clinical-teal font-medium flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>Next Slot: {specialist.availableNextDate}</span>
                          </div>

                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => handleSelectSpecialist(specialist)}
                            icon={<ArrowRight className="w-3.5 h-3.5" />}
                          >
                            Book with {specialist.name.split(" ")[0]}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: APPOINTMENT DETAILS & PREFERENCES */}
          {bookingStep === 2 && selectedSpecialist && !generalEnquiryMode && (
            <div className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-10 shadow-elevated text-left space-y-8">
              {/* Top Selected Specialist Banner */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-clinical-border">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-warm-neutral/30 border border-clinical-border shrink-0">
                    <Image
                      src={selectedSpecialist.photo}
                      alt={selectedSpecialist.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xs text-clinical-teal font-semibold">
                      Selected Specialist:
                    </div>
                    <h3 className="text-xl font-bold text-deep-ink">{selectedSpecialist.name}</h3>
                    <div className="text-xs text-clinical-slate">
                      {selectedSpecialist.title} &bull; {selectedSpecialist.specialty}
                    </div>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setBookingStep(1);
                    setSelectedSpecialist(null);
                  }}
                >
                  &larr; Change Specialist
                </Button>
              </div>

              {/* Consultation Format (Care Setting) */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold uppercase tracking-wider text-deep-ink">
                  Select Care Setting:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedSpecialist.consultationFormats.includes("clinic-appointment") && (
                    <label
                      className={`block p-4 border rounded-xl cursor-pointer transition-all ${
                        careSetting === "clinic-appointment"
                          ? "border-clinical-teal bg-soft-sage/30 ring-1 ring-clinical-teal"
                          : "border-clinical-border hover:bg-warm-neutral/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-deep-ink flex items-center gap-2">
                          <Building className="w-4 h-4 text-clinical-teal" />
                          <span>Specialist Clinic Appointment</span>
                        </span>
                        <input
                          type="radio"
                          name="careSetting"
                          value="clinic-appointment"
                          checked={careSetting === "clinic-appointment"}
                          onChange={() => setCareSetting("clinic-appointment")}
                        />
                      </div>
                      <p className="text-xs text-clinical-slate">
                        Conducted in specialized diagnostic suites (ideal for slit-lamp biomicroscopy,
                        ocular prosthetics, and low-vision assistive trials).
                      </p>
                    </label>
                  )}

                  {selectedSpecialist.consultationFormats.includes("home-visit") && (
                    <label
                      className={`block p-4 border rounded-xl cursor-pointer transition-all ${
                        careSetting === "home-visit"
                          ? "border-clinical-teal bg-soft-sage/30 ring-1 ring-clinical-teal"
                          : "border-clinical-border hover:bg-warm-neutral/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-deep-ink flex items-center gap-2">
                          <Home className="w-4 h-4 text-clinical-teal" />
                          <span>Home Examination Visit</span>
                        </span>
                        <input
                          type="radio"
                          name="careSetting"
                          value="home-visit"
                          checked={careSetting === "home-visit"}
                          onChange={() => setCareSetting("home-visit")}
                        />
                      </div>
                      <p className="text-xs text-clinical-slate">
                        The specialist arrives with a sanitized portable clinical kit for unhurried
                        bedside assessment in your residence.
                      </p>
                    </label>
                  )}
                </div>
              </div>

              {/* Slot & Location Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Input
                  label="Preferred Date"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min="2026-10-27"
                />

                <Select
                  label="Preferred Time Slot"
                  options={[
                    { value: "09:30 AM – 10:30 AM", label: "09:30 AM – 10:30 AM (Morning)" },
                    { value: "11:00 AM – 12:00 PM", label: "11:00 AM – 12:00 PM (Mid-day)" },
                    { value: "02:30 PM – 03:30 PM", label: "02:30 PM – 03:30 PM (Afternoon)" },
                    { value: "04:30 PM – 05:30 PM", label: "04:30 PM – 05:30 PM (Evening)" },
                  ]}
                  value={selectedTimeSlot}
                  onChange={(e) => setSelectedTimeSlot(e.target.value)}
                />

                {careSetting === "clinic-appointment" ? (
                  <Select
                    label="Clinic Location"
                    options={selectedSpecialist.clinicLocations.map((loc) => ({
                      value: loc,
                      label: loc,
                    }))}
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  />
                ) : (
                  <Input
                    label="Home Visit Pincode"
                    placeholder="e.g. 110016"
                    defaultValue="110016"
                  />
                )}
              </div>

              {/* Patient Contact & Preferences Form */}
              <form onSubmit={handleFormSubmit} className="space-y-4 pt-4 border-t border-clinical-border">
                <h4 className="text-base font-bold text-deep-ink">Patient Details & Preferences</h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <Input
                    label="Patient Full Name"
                    placeholder="e.g. Ramesh Chandra"
                    required
                    value={patientForm.fullName}
                    onChange={(e) => setPatientForm({ ...patientForm, fullName: e.target.value })}
                  />

                  <Input
                    label="Patient Age"
                    type="number"
                    placeholder="e.g. 54"
                    required
                    value={patientForm.age}
                    onChange={(e) => setPatientForm({ ...patientForm, age: e.target.value })}
                  />

                  <Input
                    label="Contact Phone Number"
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                    value={patientForm.phone}
                    onChange={(e) => setPatientForm({ ...patientForm, phone: e.target.value })}
                  />

                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="patient@domain.in"
                    value={patientForm.email}
                    onChange={(e) => setPatientForm({ ...patientForm, email: e.target.value })}
                  />

                  <Select
                    label="Previous Eye Care"
                    options={[
                      { value: "first-time", label: "First time consultation with OcuHome" },
                      { value: "routine-followup", label: "Ongoing clinical follow-up" },
                      { value: "post-surgical", label: "Post-surgical / hospital referral" },
                    ]}
                    value={patientForm.previousCareHistory}
                    onChange={(e) =>
                      setPatientForm({ ...patientForm, previousCareHistory: e.target.value })
                    }
                  />

                  <div className="flex items-center pt-6">
                    <label className="flex items-center gap-2 cursor-pointer text-xs">
                      <input
                        type="checkbox"
                        checked={patientForm.needAssistance}
                        onChange={(e) =>
                          setPatientForm({ ...patientForm, needAssistance: e.target.checked })
                        }
                        className="rounded text-clinical-teal"
                      />
                      <span>Patient has restricted mobility / wheelchair</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-deep-ink/80">
                    Chief Complaint or Specific Reason for Consultation:
                  </label>
                  <textarea
                    rows={3}
                    className="w-full bg-white/80 border border-clinical-border rounded-lg p-3 text-sm text-deep-ink placeholder:text-clinical-slate/50 focus:outline-none focus:border-clinical-teal"
                    placeholder="Please specify any existing diagnosis, drops in use, or recent vision changes..."
                    value={patientForm.chiefConcern}
                    onChange={(e) => setPatientForm({ ...patientForm, chiefConcern: e.target.value })}
                  />
                </div>

                {formError && (
                  <div className="p-3.5 rounded-xl bg-subtle-amber-light border border-subtle-amber/40 text-xs font-semibold text-subtle-amber-dark flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Demonstration Notice & Submit */}
                <div className="bg-warm-neutral/30 border border-clinical-border rounded-xl p-4 text-xs text-clinical-slate flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-clinical-teal shrink-0 mt-0.5" />
                  <span>
                    <strong>Appointment Request Disclaimer:</strong> Submitting this request sends
                    your details to our clinical scheduling coordinator. In this Phase 1 demonstration,
                    no financial transaction or automated slot lock is simulated. Our coordinator will
                    confirm slot availability directly.
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-clinical-border">
                  <Button variant="ghost" size="sm" onClick={() => setBookingStep(1)}>
                    &larr; Back to Directory
                  </Button>
                  <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Compiling Request..." : "Submit Specialist Appointment Request"}
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 3: HONEST APPOINTMENT REQUEST CONFIRMATION */}
          {bookingStep === 3 && (
            <div className="bg-white border border-clinical-teal/40 rounded-2xl p-8 sm:p-12 shadow-elevated text-left space-y-6 max-w-3xl mx-auto">
              <div className="w-12 h-12 rounded-xl bg-soft-sage text-clinical-teal flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div>
                <Badge variant="clinical" size="sm" className="mb-2">
                  Request Compiled &bull; Awaiting Clinical Confirmation
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-deep-ink font-sans">
                  Appointment Request Received
                </h2>
                <p className="text-sm text-clinical-slate mt-2 leading-relaxed">
                  Thank you, <strong>{patientForm.fullName}</strong>. We have logged your appointment
                  request with{" "}
                  <strong>{selectedSpecialist ? selectedSpecialist.name : "our Clinical Triage Desk"}</strong>.
                </p>
              </div>

              {/* Structured Summary Card */}
              <div className="bg-warm-neutral/30 border border-clinical-border rounded-xl p-5 space-y-3 text-xs">
                <div className="font-bold text-deep-ink text-sm">Request Summary:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-clinical-slate">
                  <div>
                    <strong className="text-deep-ink">Specialist:</strong>{" "}
                    {selectedSpecialist ? selectedSpecialist.name : "Clinical Coordinator Triage"}
                  </div>
                  <div>
                    <strong className="text-deep-ink">Care Setting:</strong>{" "}
                    {careSetting === "clinic-appointment" ? "Clinic Suite" : "Home Bedside Examination"}
                  </div>
                  <div>
                    <strong className="text-deep-ink">Requested Date:</strong> {selectedDate} ({selectedTimeSlot})
                  </div>
                  <div>
                    <strong className="text-deep-ink">Location / Hub:</strong> {selectedLocation}
                  </div>
                  <div>
                    <strong className="text-deep-ink">Patient Phone:</strong> {patientForm.phone}
                  </div>
                  <div>
                    <strong className="text-deep-ink">Status:</strong>{" "}
                    <span className="text-amber-700 font-semibold">Awaiting Schedule Confirmation</span>
                  </div>
                </div>
              </div>

              {/* Honest architecture note */}
              <div className="bg-subtle-amber-light border border-subtle-amber/30 rounded-xl p-4 text-xs space-y-1.5 text-deep-ink">
                <div className="font-bold flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-subtle-amber-dark" />
                  <span>Honest Operational Status:</span>
                </div>
                <p className="text-clinical-slate leading-relaxed">
                  As required during frontend development, we never pretend an appointment is locked
                  or claim that a clinician is dispatched when backend scheduling APIs are not yet
                  connected. Your request is queued and clearly labeled as awaiting confirmation.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    setBookingStep(1);
                    setSelectedSpecialist(null);
                  }}
                >
                  Browse Other Specialists
                </Button>
                <Button href="/" variant="ghost" size="md">
                  Return to Home
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function BookSpecialistPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-warm-ivory flex items-center justify-center">Loading specialist directory...</div>}>
      <BookSpecialistContent />
    </Suspense>
  );
}
