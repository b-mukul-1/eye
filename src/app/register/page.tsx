"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { DemoModeBanner } from "@/components/common/DemoModeBanner";
import { SectionLabel } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "female",
    phone: "",
    email: "",
    city: "delhi",
    pincode: "110016",
    hasDiabetes: false,
    hasGlaucoma: false,
    caregiverName: "",
    caregiverPhone: "",
    authorizeCaregiver: false,
    agreeTerms: false,
  });

  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setFormError("Please enter the patient's full legal name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      setFormError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!formData.agreeTerms) {
      setFormError("Please accept the terms and clinical privacy consent.");
      return;
    }

    setFormError("");
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-warm-ivory flex flex-col font-sans text-deep-ink">
      <DemoModeBanner />
      <Navbar />

      <main className="flex-1 py-14 md:py-20 flex items-center justify-center">
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 text-left">
          <div className="text-center mb-8 space-y-2">
            <SectionLabel>Patient Enrollment</SectionLabel>
            <h1 className="text-2xl sm:text-3xl font-bold text-deep-ink font-sans tracking-tight">
              Create Your OcuHome Health Account
            </h1>
            <p className="text-xs sm:text-sm text-clinical-slate max-w-md mx-auto">
              Maintain an encrypted digital eye record, schedule home examinations, and share verified reports with family caregivers.
            </p>
          </div>

          <div className="bg-white border border-clinical-border rounded-2xl shadow-elevated p-6 sm:p-10">
            {isSuccess ? (
              <div className="space-y-6 text-left">
                <div className="w-12 h-12 rounded-xl bg-soft-sage text-clinical-teal flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <Badge variant="clinical" size="sm" className="mb-2">Demonstration Account Initialized</Badge>
                  <h2 className="text-2xl font-bold text-deep-ink font-sans">
                    Welcome to OcuHome, {formData.fullName}
                  </h2>
                  <p className="text-xs sm:text-sm text-clinical-slate mt-2 leading-relaxed">
                    Your baseline profile has been configured. In Phase 2, this workflow will verify
                    your mobile OTP and issue an Ayushman Bharat Health Account (ABHA) digital address.
                  </p>
                </div>

                <div className="p-4 bg-warm-neutral/30 border border-clinical-border rounded-xl text-xs space-y-1 text-clinical-slate">
                  <div><strong>Account Name:</strong> {formData.fullName} (Age {formData.age})</div>
                  <div><strong>Registered Contact:</strong> {formData.phone}</div>
                  <div><strong>Assigned Hub:</strong> {formData.city.toUpperCase()} (PIN: {formData.pincode})</div>
                  {formData.authorizeCaregiver && (
                    <div><strong>Authorized Caregiver:</strong> {formData.caregiverName} ({formData.caregiverPhone})</div>
                  )}
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <Button href="/patient/dashboard" variant="primary" size="lg">
                    Launch Patient Dashboard &rarr;
                  </Button>
                  <Button href="/book" variant="secondary" size="lg">
                    Book First Home Visit
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-deep-ink uppercase tracking-wider mb-3">
                    1. Primary Patient Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Full Legal Name"
                      placeholder="e.g. Anand Krishnamurthy"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />

                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        label="Age"
                        type="number"
                        placeholder="e.g. 68"
                        required
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      />
                      <Select
                        label="Gender"
                        options={[
                          { value: "male", label: "Male" },
                          { value: "female", label: "Female" },
                          { value: "other", label: "Other" },
                        ]}
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      />
                    </div>

                    <Input
                      label="Mobile Phone (for OTP & SMS)"
                      type="tel"
                      placeholder="+91 98101 23456"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />

                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="patient@domain.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />

                    <Select
                      label="City of Residence"
                      options={[
                        { value: "delhi", label: "Delhi NCR" },
                        { value: "mumbai", label: "Mumbai & MMR" },
                        { value: "bengaluru", label: "Bengaluru" },
                        { value: "hyderabad", label: "Hyderabad" },
                        { value: "pune", label: "Pune" },
                      ]}
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />

                    <Input
                      label="Postal PIN Code"
                      placeholder="e.g. 110016"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-clinical-border">
                  <h3 className="text-sm font-bold text-deep-ink uppercase tracking-wider mb-3">
                    2. Baseline Ocular History (Optional)
                  </h3>
                  <div className="flex flex-wrap gap-4 text-xs">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.hasDiabetes}
                        onChange={(e) => setFormData({ ...formData, hasDiabetes: e.target.checked })}
                        className="rounded text-clinical-teal"
                      />
                      <span>Diagnosed with Diabetes (Type 1 or 2)</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.hasGlaucoma}
                        onChange={(e) => setFormData({ ...formData, hasGlaucoma: e.target.checked })}
                        className="rounded text-clinical-teal"
                      />
                      <span>Prior History of Glaucoma or Elevated Eye Pressure</span>
                    </label>
                  </div>
                </div>

                <div className="pt-4 border-t border-clinical-border space-y-3">
                  <h3 className="text-sm font-bold text-deep-ink uppercase tracking-wider">
                    3. Family Caregiver Access (Optional)
                  </h3>
                  <p className="text-xs text-clinical-slate">
                    Authorize an adult child or family member to receive medical updates and view digital prescriptions.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Caregiver Full Name"
                      placeholder="e.g. Sunita Krishnamurthy"
                      value={formData.caregiverName}
                      onChange={(e) => setFormData({ ...formData, caregiverName: e.target.value })}
                    />
                    <Input
                      label="Caregiver Mobile Phone"
                      type="tel"
                      placeholder="+91 98110 98765"
                      value={formData.caregiverPhone}
                      onChange={(e) => setFormData({ ...formData, caregiverPhone: e.target.value })}
                    />
                  </div>

                  <label className="flex items-center gap-2 cursor-pointer text-xs pt-1">
                    <input
                      type="checkbox"
                      checked={formData.authorizeCaregiver}
                      onChange={(e) => setFormData({ ...formData, authorizeCaregiver: e.target.checked })}
                      className="rounded text-clinical-teal"
                    />
                    <span>I grant authorized access for this caregiver to view my clinical reports.</span>
                  </label>
                </div>

                <div className="pt-4 border-t border-clinical-border">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-clinical-slate">
                    <input
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                      className="mt-0.5 rounded text-clinical-teal"
                      required
                    />
                    <span>
                      I understand that this is a Phase 1 frontend prototype and agree to the clinical
                      teleconsultation terms and Digital Personal Data Protection (DPDP) guidelines.
                    </span>
                  </label>
                </div>

                {formError && (
                  <div className="p-3.5 rounded-xl bg-subtle-amber-light border border-subtle-amber/40 text-xs font-semibold text-subtle-amber-dark flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Creating Account..." : "Create Account & Continue"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
