"use client";

import React, { useState } from "react";
import Link from "next/link";
import { demoPendingReviews, demoOphthalmologist } from "@/data/practitioner-demo";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  FileCheck,
  Eye,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ShieldCheck,
  User,
  ExternalLink,
  MessageSquare,
  ArrowRight,
  Filter,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function PractitionerReviewsPage() {
  const [reviews, setReviews] = useState(
    demoPendingReviews.map((r) => ({
      ...r,
      status: "pending" as "pending" | "approved" | "referral-issued",
      doctorNotes: "",
    }))
  );
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleApprove = (encounterId: string) => {
    setReviews((prev) =>
      prev.map((r) => (r.encounterId === encounterId ? { ...r, status: "approved" } : r))
    );
    setSuccessMessage(
      `Encounter verified & countersigned by Dr. Ananya Rao (DMC-48291). Dispatched to patient EHR.`
    );
    setTimeout(() => setSuccessMessage(null), 3500);
  };

  const handleIssueReferral = (encounterId: string) => {
    setReviews((prev) =>
      prev.map((r) => (r.encounterId === encounterId ? { ...r, status: "referral-issued" } : r))
    );
    setSuccessMessage(
      `Hospital Ophthalmology Referral Order generated for surgical consult. Patient care coordinator notified.`
    );
    setTimeout(() => setSuccessMessage(null), 3500);
  };

  const pendingCount = reviews.filter((r) => r.status === "pending").length;

  return (
    <div className="space-y-8 text-left font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-clinical-border">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-clinical-teal block mb-1">
            Tele-Ophthalmology &amp; Quality Governance
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-deep-ink">
            Ophthalmologist Review Queue
          </h1>
          <p className="text-xs sm:text-sm text-clinical-slate mt-1">
            Supervising review and digital countersignature desk &bull; {demoOphthalmologist.name} ({demoOphthalmologist.registrationNumber})
          </p>
        </div>

        {/* Queue Metrics */}
        <div className="flex items-center gap-3 bg-white p-2.5 rounded-xl border border-clinical-border text-xs">
          <div className="px-3 border-r border-clinical-border">
            <span className="text-clinical-slate text-[10px] uppercase font-bold block">Pending Review</span>
            <span className="font-bold text-subtle-amber text-sm">{pendingCount} Cases</span>
          </div>
          <div className="px-3">
            <span className="text-clinical-slate text-[10px] uppercase font-bold block">Verified Today</span>
            <span className="font-bold text-clinical-teal text-sm">4 Completed</span>
          </div>
        </div>
      </div>

      {successMessage && (
        <div className="p-4 bg-soft-sage/60 border border-clinical-teal/30 rounded-xl text-xs text-clinical-teal font-medium flex items-center gap-2 animate-fade-in">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Review Cards Stream */}
      <div className="space-y-6">
        {reviews.map((rev) => {
          const isDone = rev.status !== "pending";

          return (
            <div
              key={rev.encounterId}
              className={cn(
                "bg-white border rounded-2xl p-6 sm:p-7 transition-all shadow-subtle space-y-5",
                isDone ? "border-clinical-border opacity-85" : "border-clinical-teal/40"
              )}
            >
              {/* Review Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-clinical-border/70">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-deep-ink">{rev.patientName}</h2>
                    <span className="text-xs text-clinical-slate">({rev.age} Y)</span>
                  </div>
                  <span className="text-xs font-mono text-clinical-slate">UHID: {rev.uhid}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      rev.status === "approved"
                        ? "clinical"
                        : rev.status === "referral-issued"
                        ? "amber"
                        : "neutral"
                    }
                    size="sm"
                  >
                    {rev.status === "approved"
                      ? "Countersigned & Dispatched"
                      : rev.status === "referral-issued"
                      ? "Referral Letter Issued"
                      : "Awaiting MD Sign-off"}
                  </Badge>
                  <span className="text-xs text-clinical-slate">{rev.encounterDate}</span>
                </div>
              </div>

              {/* Clinical Summary & Findings */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start text-xs">
                <div className="lg:col-span-7 space-y-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-clinical-slate block mb-1">
                      Recording Optometrist Observations:
                    </span>
                    <p className="text-deep-ink leading-relaxed bg-warm-neutral/30 p-3 rounded-xl border border-clinical-border">
                      {rev.findingsSummary}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-clinical-slate">
                    <div>
                      Recording Clinician: <strong className="text-deep-ink">{rev.recordingClinician}</strong>
                    </div>
                    <span>&bull;</span>
                    <div className="flex items-center gap-1.5 text-clinical-teal font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Digital Fundus Photo Synced</span>
                    </div>
                  </div>

                  <div className="p-3 bg-warm-neutral/20 border border-clinical-border rounded-lg">
                    <span className="text-[10px] font-bold uppercase text-clinical-slate block">
                      Tentative Triage Recommendation:
                    </span>
                    <span className="font-bold text-deep-ink text-xs mt-0.5 block">
                      {rev.tentativeTriage}
                    </span>
                  </div>
                </div>

                {/* MD Review Action Box */}
                <div className="lg:col-span-5 bg-warm-neutral/30 border border-clinical-border rounded-xl p-4 space-y-3.5">
                  <div className="flex items-center gap-2 text-deep-ink font-bold">
                    <ShieldCheck className="w-4 h-4 text-clinical-teal" />
                    <span>Ophthalmologist Sign-off Action</span>
                  </div>

                  {isDone ? (
                    <div className="p-3 bg-white rounded-lg border border-clinical-teal/30 space-y-1 text-xs">
                      <div className="font-bold text-clinical-teal flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Action Recorded</span>
                      </div>
                      <p className="text-clinical-slate text-[11px]">
                        Countersigned by Dr. Ananya Rao, MS (Ophthalmology). This encounter is permanently locked in the EHR.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-clinical-slate text-[11px] font-semibold mb-1">
                          Consulting MD Comments &amp; Clinical Notes:
                        </label>
                        <textarea
                          rows={2}
                          placeholder="e.g. Verified. Slit lamp opacity consistent with BCVA 6/18. Approved for phaco referral."
                          className="w-full px-2.5 py-1.5 border border-clinical-border rounded-lg bg-white text-xs text-deep-ink placeholder:text-clinical-slate/60"
                        />
                      </div>

                      <div className="flex flex-col gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => handleApprove(rev.encounterId)}
                          className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-warm-ivory bg-clinical-teal hover:bg-clinical-teal/90 transition-colors shadow-xs"
                        >
                          <FileCheck className="w-4 h-4" />
                          Countersign &amp; Verify Prescription
                        </button>

                        <button
                          type="button"
                          onClick={() => handleIssueReferral(rev.encounterId)}
                          className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-deep-ink bg-white hover:bg-warm-neutral border border-clinical-border transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-subtle-amber" />
                          Issue Hospital Surgical Referral Order
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
