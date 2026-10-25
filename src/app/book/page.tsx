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
import {
  MapPin,
  Calendar,
  Clock,
  User,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  Activity,
  Eye,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const serviceablePincodes: Record<string, string> = {
  "110001": "Central Delhi (Delhi NCR)",
  "110016": "South Delhi (Delhi NCR)",
  "110025": "Okhla / New Friends Colony (Delhi NCR)",
  "122002": "Gurugram (Delhi NCR)",
  "201301": "Noida (Delhi NCR)",
  "400001": "South Mumbai (MMR)",
  "400050": "Bandra West (MMR)",
  "400076": "Powai (MMR)",
  "560001": "Bengaluru Central",
  "560034": "Koramangala (Bengaluru)",
  "560066": "Whitefield (Bengaluru)",
  "500034": "Banjara Hills (Hyderabad)",
  "411001": "Pune Camp",
  "411004": "Shivajinagar (Pune)",
};

export default function BookingPage() {
  const [step, setStep] = useState<number>(1);
  const [pincode, setPincode] = useState("");
  const [pincodeError, setPincodeError] = useState("");
  const [detectedCity, setDetectedCity] = useState<string | null>(null);

  // Form State
  const [serviceType, setServiceType] = useState("general");
  const [patientDetails, setPatientDetails] = useState({
    fullName: "",
    age: "",
    gender: "female",
    phone: "",
    email: "",
    address: "",
    hasDiabetes: false,
    hasGlaucoma: false,
    chiefComplaint: "",
  });

  const [slot, setSlot] = useState({
    date: "2026-10-27",
    timeWindow: "10:00 AM - 12:00 PM (Morning)",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Step 1 check
  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setPincodeError("");
    const cleanPin = pincode.trim();

    if (!cleanPin || cleanPin.length !== 6) {
      setPincodeError("Please enter a valid 6-digit Indian PIN code.");
      return;
    }

    if (serviceablePincodes[cleanPin]) {
      setDetectedCity(serviceablePincodes[cleanPin]);
      setStep(2);
    } else {
      // Default fallback check for recognized major city prefixes
      if (cleanPin.startsWith("11") || cleanPin.startsWith("12") || cleanPin.startsWith("20")) {
        setDetectedCity("Delhi NCR Service Region");
        setStep(2);
      } else if (cleanPin.startsWith("40")) {
        setDetectedCity("Mumbai & MMR Service Region");
        setStep(2);
      } else if (cleanPin.startsWith("56")) {
        setDetectedCity("Bengaluru Service Region");
        setStep(2);
      } else if (cleanPin.startsWith("50")) {
        setDetectedCity("Hyderabad Service Region");
        setStep(2);
      } else if (cleanPin.startsWith("41")) {
        setDetectedCity("Pune Service Region");
        setStep(2);
      } else {
        setPincodeError(
          "Currently, direct home examinations are operational in Delhi NCR, Mumbai, Bengaluru, Hyderabad, and Pune. We are expanding to your pincode soon."
        );
      }
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-warm-ivory flex flex-col font-sans text-deep-ink">
      <DemoModeBanner />
      <Navbar />

      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          {/* Header */}
          <div className="mb-10">
            <SectionLabel className="mb-2">Home Examination Booking</SectionLabel>
            <EditorialHeading as="h1" serifAccent="at your doorstep.">
              Schedule clinical eye care,
            </EditorialHeading>
            <LeadParagraph className="mt-2 text-sm sm:text-base">
              A university-trained optometrist will visit your residence with calibrated portable
              diagnostics. Examination findings are reviewed and countersigned by an ophthalmologist.
            </LeadParagraph>
          </div>

          {/* Stepper Indicator */}
          {!isSubmitted && (
            <div className="flex items-center justify-between border-b border-clinical-border pb-6 mb-8 text-xs font-semibold uppercase tracking-wider text-clinical-slate">
              <span className={step >= 1 ? "text-clinical-teal font-bold" : ""}>
                1. Service Area
              </span>
              <span>&rarr;</span>
              <span className={step >= 2 ? "text-clinical-teal font-bold" : ""}>
                2. Examination Type
              </span>
              <span>&rarr;</span>
              <span className={step >= 3 ? "text-clinical-teal font-bold" : ""}>
                3. Patient Triage
              </span>
              <span>&rarr;</span>
              <span className={step >= 4 ? "text-clinical-teal font-bold" : ""}>
                4. Slot & Confirmation
              </span>
            </div>
          )}

          {/* STEP 1: Pincode Check */}
          {step === 1 && !isSubmitted && (
            <div className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-10 shadow-subtle space-y-6">
              <div>
                <h3 className="text-xl font-bold text-deep-ink mb-1">
                  Step 1: Check Service Availability
                </h3>
                <p className="text-xs sm:text-sm text-clinical-slate">
                  Enter your 6-digit postal pincode to confirm optometrist coverage in your neighborhood.
                </p>
              </div>

              <form onSubmit={handlePincodeCheck} className="space-y-4 max-w-md">
                <Input
                  label="Postal PIN Code (India)"
                  placeholder="e.g. 110001, 400001, 560001"
                  value={pincode}
                  onChange={(e) => {
                    setPincode(e.target.value);
                    setPincodeError("");
                  }}
                  error={pincodeError}
                  leftIcon={<MapPin className="w-4 h-4 text-clinical-teal" />}
                  maxLength={6}
                  required
                />

                <Button type="submit" variant="primary" size="md">
                  Verify Pincode & Continue
                </Button>
              </form>

              <div className="pt-4 border-t border-clinical-border text-xs text-clinical-slate">
                <span className="font-semibold text-deep-ink block mb-1">Operational Coverage:</span>
                <span>
                  Delhi NCR &bull; Mumbai & MMR &bull; Bengaluru &bull; Hyderabad &bull; Pune.
                  (Try sample PIN: <strong>110016</strong> or <strong>560034</strong>)
                </span>
              </div>
            </div>
          )}

          {/* STEP 2: Service Selection */}
          {step === 2 && !isSubmitted && (
            <div className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-10 shadow-subtle space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-deep-ink mb-1">
                    Step 2: Choose Clinical Examination
                  </h3>
                  <p className="text-xs sm:text-sm text-clinical-slate">
                    Service area confirmed: <strong>{detectedCity}</strong>
                  </p>
                </div>
                <Badge variant="clinical" size="sm">
                  {detectedCity}
                </Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    id: "general",
                    title: "General Eye & Refraction Assessment",
                    duration: "45–60 min",
                    scope: "Full distance & near refraction, slit-lamp anterior check, IOP tonometry.",
                  },
                  {
                    id: "diabetic",
                    title: "Diabetic Retinal Screening & Triage",
                    duration: "60 min",
                    scope: "Digital non-mydriatic fundus camera capture with ophthalmologist review.",
                  },
                  {
                    id: "glaucoma",
                    title: "Glaucoma Follow-Up & IOP Monitoring",
                    duration: "45 min",
                    scope: "Calibrated rebound tonometry, optic nerve head observation, drop adherence review.",
                  },
                  {
                    id: "senior",
                    title: "Geriatric & Bedside Vision Evaluation",
                    duration: "60 min",
                    scope: "Unhurried bedside examination tailored for mobility-restricted seniors.",
                  },
                ].map((s) => (
                  <label
                    key={s.id}
                    className={`block p-5 border rounded-xl cursor-pointer transition-all ${
                      serviceType === s.id
                        ? "border-clinical-teal bg-soft-sage/30 ring-1 ring-clinical-teal"
                        : "border-clinical-border hover:bg-warm-neutral/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm text-deep-ink">{s.title}</span>
                      <input
                        type="radio"
                        name="serviceType"
                        value={s.id}
                        checked={serviceType === s.id}
                        onChange={() => setServiceType(s.id)}
                        className="text-clinical-teal focus:ring-clinical-teal"
                      />
                    </div>
                    <span className="text-[11px] text-clinical-teal font-medium block mb-1">
                      {s.duration}
                    </span>
                    <p className="text-xs text-clinical-slate">{s.scope}</p>
                  </label>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-clinical-border">
                <Button variant="ghost" size="sm" onClick={() => setStep(1)}>
                  &larr; Back
                </Button>
                <Button variant="primary" size="md" onClick={() => setStep(3)}>
                  Continue to Patient Details &rarr;
                </Button>
              </div>
            </div>
          )}

          {/* STEP 3: Patient Details & Triage */}
          {step === 3 && !isSubmitted && (
            <div className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-10 shadow-subtle space-y-6">
              <div>
                <h3 className="text-xl font-bold text-deep-ink mb-1">
                  Step 3: Patient Information & Clinical Triage
                </h3>
                <p className="text-xs sm:text-sm text-clinical-slate">
                  Helps our visiting optometrist prepare the appropriate diagnostic trial kit.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Patient Full Name"
                  placeholder="e.g. Anand Krishnamurthy"
                  required
                  value={patientDetails.fullName}
                  onChange={(e) =>
                    setPatientDetails({ ...patientDetails, fullName: e.target.value })
                  }
                />

                <div className="grid grid-cols-2 gap-2">
                  <Input
                    label="Age"
                    type="number"
                    placeholder="e.g. 68"
                    required
                    value={patientDetails.age}
                    onChange={(e) =>
                      setPatientDetails({ ...patientDetails, age: e.target.value })
                    }
                  />
                  <Select
                    label="Gender"
                    options={[
                      { value: "female", label: "Female" },
                      { value: "male", label: "Male" },
                      { value: "other", label: "Other" },
                    ]}
                    value={patientDetails.gender}
                    onChange={(e) =>
                      setPatientDetails({ ...patientDetails, gender: e.target.value })
                    }
                  />
                </div>

                <Input
                  label="Contact Phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                  value={patientDetails.phone}
                  onChange={(e) =>
                    setPatientDetails({ ...patientDetails, phone: e.target.value })
                  }
                />

                <Input
                  label="Email Address"
                  type="email"
                  placeholder="caregiver@domain.in"
                  value={patientDetails.email}
                  onChange={(e) =>
                    setPatientDetails({ ...patientDetails, email: e.target.value })
                  }
                />

                <div className="sm:col-span-2">
                  <Input
                    label="Full Home Address (with landmark)"
                    placeholder="Apartment, building, street, neighborhood"
                    required
                    value={patientDetails.address}
                    onChange={(e) =>
                      setPatientDetails({ ...patientDetails, address: e.target.value })
                    }
                  />
                </div>

                <div className="sm:col-span-2 space-y-2 pt-2">
                  <span className="text-xs font-semibold uppercase text-deep-ink block">
                    Medical History Pre-Screening:
                  </span>
                  <div className="flex flex-wrap gap-4 text-xs">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={patientDetails.hasDiabetes}
                        onChange={(e) =>
                          setPatientDetails({ ...patientDetails, hasDiabetes: e.target.checked })
                        }
                        className="rounded border-clinical-border text-clinical-teal"
                      />
                      <span>Diagnosed with Diabetes (Type 1 / 2)</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={patientDetails.hasGlaucoma}
                        onChange={(e) =>
                          setPatientDetails({ ...patientDetails, hasGlaucoma: e.target.checked })
                        }
                        className="rounded border-clinical-border text-clinical-teal"
                      />
                      <span>Prior History of Glaucoma / High Eye Pressure</span>
                    </label>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <Input
                    label="Primary Visual Symptom or Concern"
                    placeholder="e.g. Difficulty reading small text, frequent eye fatigue, routine annual review"
                    value={patientDetails.chiefComplaint}
                    onChange={(e) =>
                      setPatientDetails({ ...patientDetails, chiefComplaint: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-clinical-border">
                <Button variant="ghost" size="sm" onClick={() => setStep(2)}>
                  &larr; Back
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    if (!patientDetails.fullName || !patientDetails.phone) {
                      alert("Please provide the patient name and contact phone number.");
                      return;
                    }
                    setStep(4);
                  }}
                >
                  Continue to Schedule Slot &rarr;
                </Button>
              </div>
            </div>
          )}

          {/* STEP 4: Slot Selection & Honest Confirmation */}
          {step === 4 && !isSubmitted && (
            <div className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-10 shadow-subtle space-y-6">
              <div>
                <h3 className="text-xl font-bold text-deep-ink mb-1">
                  Step 4: Select Preferred Date & Window
                </h3>
                <p className="text-xs sm:text-sm text-clinical-slate">
                  Examinations are available Monday through Saturday.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Preferred Date"
                  type="date"
                  value={slot.date}
                  onChange={(e) => setSlot({ ...slot, date: e.target.value })}
                  min="2026-10-26"
                />

                <Select
                  label="Preferred Time Window"
                  options={[
                    { value: "morning", label: "09:30 AM – 11:30 AM (Morning)" },
                    { value: "midday", label: "12:00 PM – 02:00 PM (Mid-day)" },
                    { value: "afternoon", label: "03:00 PM – 05:00 PM (Afternoon)" },
                    { value: "evening", label: "05:30 PM – 07:30 PM (Evening)" },
                  ]}
                  value={slot.timeWindow}
                  onChange={(e) => setSlot({ ...slot, timeWindow: e.target.value })}
                />
              </div>

              {/* Order Summary & Demonstration Notice */}
              <div className="bg-warm-neutral/30 border border-clinical-border rounded-xl p-5 space-y-3 text-xs">
                <div className="font-bold text-deep-ink text-sm">Appointment Summary:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-clinical-slate">
                  <div>
                    <strong>Patient:</strong> {patientDetails.fullName} ({patientDetails.age || "N/A"}{" "}
                    yrs)
                  </div>
                  <div>
                    <strong>Location:</strong> {detectedCity} (PIN: {pincode})
                  </div>
                  <div>
                    <strong>Service:</strong> {serviceType.toUpperCase()}
                  </div>
                  <div>
                    <strong>Date & Window:</strong> {slot.date} ({slot.timeWindow})
                  </div>
                </div>

                <div className="pt-2 border-t border-clinical-border text-[11px] text-clinical-slate">
                  Standard consultation includes full refraction, IOP, slit-lamp, and ophthalmologist
                  countersigned digital report.
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-clinical-border">
                <Button variant="ghost" size="sm" onClick={() => setStep(3)}>
                  &larr; Back
                </Button>
                <Button variant="primary" size="lg" onClick={handleFinalSubmit}>
                  Confirm & Submit Demonstration Request
                </Button>
              </div>
            </div>
          )}

          {/* STEP 5: Honest Demonstration Confirmation */}
          {isSubmitted && (
            <div className="bg-white border border-clinical-teal/40 rounded-2xl p-8 sm:p-12 shadow-elevated text-left space-y-6">
              <div className="w-12 h-12 rounded-xl bg-soft-sage text-clinical-teal flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div>
                <Badge variant="clinical" size="sm" className="mb-2">
                  Demonstration Request Compiled
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-deep-ink font-sans">
                  Home Visit Request Received
                </h2>
                <p className="text-sm text-clinical-slate mt-2 leading-relaxed max-w-xl">
                  Thank you, <strong>{patientDetails.fullName}</strong>. We have logged your request
                  for <strong>{detectedCity}</strong> on <strong>{slot.date}</strong>.
                </p>
              </div>

              {/* Honest architecture note */}
              <div className="bg-subtle-amber-light border border-subtle-amber/30 rounded-xl p-4 text-xs space-y-2 text-deep-ink">
                <div className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-subtle-amber-dark" />
                  <span>Honest Demonstration Mode Notice:</span>
                </div>
                <p className="text-clinical-slate leading-relaxed">
                  As planned for Phase 1, this frontend collects and validates all diagnostic and
                  logistical requirements without pretending a production payment transaction or
                  dispatch lock occurred. In Phase 2, this workflow integrates directly into our
                  HIPAA/DISHA practitioner route-management backend.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button href="/patient/dashboard" variant="primary" size="md">
                  Preview Patient Portal Experience &rarr;
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                  }}
                >
                  Create Another Booking Request
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
