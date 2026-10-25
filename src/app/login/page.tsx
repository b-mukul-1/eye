"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { DemoModeBanner } from "@/components/common/DemoModeBanner";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import {
  User,
  ShieldCheck,
  Stethoscope,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"patient" | "practitioner">("patient");

  // Form State
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotTip, setShowForgotTip] = useState(false);
  const [practitionerRole, setPractitionerRole] = useState<"optometrist" | "ophthalmologist">("optometrist");

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle Standard Login Form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!identifier || !password) {
      setErrorMessage("Please enter your account identifier and password.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (activeTab === "patient") {
        router.push("/patient/dashboard");
      } else {
        if (practitionerRole === "ophthalmologist") {
          router.push("/practitioner/reviews");
        } else {
          router.push("/practitioner/visits");
        }
      }
    }, 600);
  };

  // Quick Demo Access Helpers
  const handleQuickDemoPatient = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/patient/dashboard");
    }, 300);
  };

  const handleQuickDemoPractitioner = (role: "optometrist" | "ophthalmologist") => {
    setIsLoading(true);
    setTimeout(() => {
      if (role === "ophthalmologist") {
        router.push("/practitioner/reviews");
      } else {
        router.push("/practitioner/visits");
      }
    }, 300);
  };

  return (
    <div className="min-h-screen bg-warm-ivory flex flex-col font-sans text-deep-ink">
      <DemoModeBanner />
      <Navbar />

      <main className="flex-1 py-14 md:py-20 flex items-center justify-center">
        <div className="w-full max-w-xl mx-auto px-4 sm:px-6 text-left">
          {/* Header */}
          <div className="text-center mb-8 space-y-2">
            <div className="w-12 h-12 rounded-xl bg-deep-ink text-warm-ivory flex items-center justify-center font-serif text-2xl font-bold mx-auto mb-3">
              O
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-deep-ink font-sans tracking-tight">
              Clinical Portal Access
            </h1>
            <p className="text-xs sm:text-sm text-clinical-slate max-w-sm mx-auto">
              Access your verified eye records or enter the secure clinician workspace.
            </p>
          </div>

          {/* Access Switcher Tabs: Patient vs Practitioner */}
          <div className="bg-white border border-clinical-border rounded-2xl shadow-elevated p-6 sm:p-8">
            <div className="flex border-b border-clinical-border mb-6">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("patient");
                  setErrorMessage("");
                }}
                className={cn(
                  "flex-1 pb-3 text-xs sm:text-sm font-bold transition-all border-b-2 flex items-center justify-center gap-2",
                  activeTab === "patient"
                    ? "border-clinical-teal text-clinical-teal"
                    : "border-transparent text-clinical-slate hover:text-deep-ink"
                )}
              >
                <User className="w-4 h-4" />
                <span>Patient & Family Access</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab("practitioner");
                  setErrorMessage("");
                }}
                className={cn(
                  "flex-1 pb-3 text-xs sm:text-sm font-bold transition-all border-b-2 flex items-center justify-center gap-2",
                  activeTab === "practitioner"
                    ? "border-clinical-teal text-clinical-teal"
                    : "border-transparent text-clinical-slate hover:text-deep-ink"
                )}
              >
                <Stethoscope className="w-4 h-4" />
                <span>Verified Practitioner Portal</span>
              </button>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* PATIENT TAB FORM */}
            {activeTab === "patient" && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Phone Number or Unique Health ID (UHID)"
                  placeholder="e.g. +91 98101 23456 or OCU-DEL-2026-70421"
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  leftIcon={<Phone className="w-4 h-4 text-clinical-teal" />}
                />

                <div className="space-y-1.5 text-left">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-deep-ink/80">
                      Password or OTP Passcode
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowForgotTip((prev) => !prev)}
                      className="text-[11px] text-clinical-teal hover:underline"
                    >
                      Forgot passcode?
                    </button>
                  </div>

                  {showForgotTip && (
                    <div className="p-2.5 rounded-lg bg-soft-sage/60 border border-clinical-teal/30 text-[11px] text-deep-ink animate-fade-in">
                      <strong>Demonstration Access:</strong> You can enter any test password or use the instant Quick Demo Sign-In shortcuts below.
                    </div>
                  )}

                  <div className="relative flex items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter account passcode"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-white/80 border border-clinical-border rounded-lg pl-3.5 pr-10 py-2.5 text-sm text-deep-ink focus:outline-none focus:border-clinical-teal"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 text-clinical-slate hover:text-deep-ink"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign in to Patient Records"}
                  </Button>
                </div>

                {/* Quick Demo Sign-in Shortcut */}
                <div className="pt-4 border-t border-clinical-border">
                  <div className="p-3 bg-warm-neutral/30 border border-clinical-border rounded-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-deep-ink uppercase tracking-wider">
                        Developer Demonstration Shortcut
                      </span>
                      <Badge variant="amber" size="sm">Demo Patient</Badge>
                    </div>
                    <p className="text-xs text-clinical-slate">
                      Sign in as Anand Krishnamurthy (Age 68) with scheduled home visit and longitudinal glaucoma records.
                    </p>
                    <button
                      type="button"
                      onClick={handleQuickDemoPatient}
                      className="w-full text-xs font-bold text-clinical-teal hover:bg-soft-sage/60 border border-clinical-border rounded-lg py-2 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Quick Demo Sign-In as Anand Krishnamurthy</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="pt-2 text-center text-xs text-clinical-slate">
                  First time scheduling care?{" "}
                  <Link href="/register" className="text-clinical-teal font-semibold hover:underline">
                    Create patient account
                  </Link>
                </div>
              </form>
            )}

            {/* PRACTITIONER TAB FORM */}
            {activeTab === "practitioner" && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-deep-ink/80">
                    Practitioner Clinical Role
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPractitionerRole("optometrist")}
                      className={cn(
                        "p-3 rounded-xl border text-xs font-bold transition-all text-left flex items-center gap-2",
                        practitionerRole === "optometrist"
                          ? "bg-deep-ink text-warm-ivory border-deep-ink shadow-xs"
                          : "bg-white text-deep-ink hover:bg-soft-sage/40 border-clinical-border"
                      )}
                    >
                      <Eye className="w-4 h-4 text-clinical-teal" />
                      <span>Visiting Optometrist</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPractitionerRole("ophthalmologist")}
                      className={cn(
                        "p-3 rounded-xl border text-xs font-bold transition-all text-left flex items-center gap-2",
                        practitionerRole === "ophthalmologist"
                          ? "bg-deep-ink text-warm-ivory border-deep-ink shadow-xs"
                          : "bg-white text-deep-ink hover:bg-soft-sage/40 border-clinical-border"
                      )}
                    >
                      <Stethoscope className="w-4 h-4 text-clinical-teal" />
                      <span>Consulting Ophthalmologist</span>
                    </button>
                  </div>
                </div>

                <Input
                  label="Council Registration Number or Clinical Email"
                  placeholder="e.g. State Council Registration or clinician@ocuhome.in"
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  leftIcon={<ShieldCheck className="w-4 h-4 text-clinical-teal" />}
                />

                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-deep-ink/80">
                    Clinical Master Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter practitioner password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-white/80 border border-clinical-border rounded-lg pl-3.5 pr-10 py-2.5 text-sm text-deep-ink focus:outline-none focus:border-clinical-teal"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 text-clinical-slate hover:text-deep-ink"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading
                      ? "Verifying Credentials..."
                      : `Enter ${practitionerRole === "optometrist" ? "Optometrist" : "Ophthalmologist"} Workspace`}
                  </Button>
                </div>

                {/* Quick Demo Sign-in Shortcuts */}
                <div className="pt-4 border-t border-clinical-border space-y-2">
                  <span className="text-[11px] font-bold text-deep-ink uppercase tracking-wider block">
                    Developer Demonstration Roles
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => handleQuickDemoPractitioner("optometrist")}
                      className="p-2.5 rounded-lg border border-clinical-border bg-warm-neutral/30 hover:bg-soft-sage/50 text-left transition-colors"
                    >
                      <div className="font-bold text-deep-ink">Priya Sharma, B.Optom</div>
                      <div className="text-[10px] text-clinical-slate">Mobile Route (3 visits scheduled) &rarr;</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickDemoPractitioner("ophthalmologist")}
                      className="p-2.5 rounded-lg border border-clinical-border bg-warm-neutral/30 hover:bg-soft-sage/50 text-left transition-colors"
                    >
                      <div className="font-bold text-deep-ink">Dr. Ananya Rao, MS</div>
                      <div className="text-[10px] text-clinical-slate">Review Queue (Pending countersign) &rarr;</div>
                    </button>
                  </div>
                </div>

                <div className="pt-2 text-center text-xs text-clinical-slate">
                  Practitioner credentialing inquiry?{" "}
                  <Link href="/for-practitioners" className="text-clinical-teal font-semibold hover:underline">
                    Apply to join clinician network
                  </Link>
                </div>
              </form>
            )}

            {/* Clear Demonstration Notice & Security Guardrail */}
            <div className="mt-6 pt-4 border-t border-clinical-border text-[11px] text-clinical-slate space-y-1">
              <div className="flex items-center gap-1.5 text-deep-ink font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-clinical-teal" />
                <span>Data Protection & Phase 1 Scope:</span>
              </div>
              <p>
                Authentication endpoints are structured to support OAuth 2.0 / ABDM Ayushman Bharat
                Digital Health Accounts in Phase 2. No claims of cryptographic medical security are
                made until production directory integration is configured.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
