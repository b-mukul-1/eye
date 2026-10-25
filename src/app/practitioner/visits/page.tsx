"use client";

import React, { useState } from "react";
import Link from "next/link";
import { demoTodayVisits, demoPractitioner } from "@/data/practitioner-demo";
import { Badge, ClinicalStatusBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Navigation,
  CheckCircle2,
  AlertCircle,
  FileEdit,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Briefcase,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function PractitionerVisitsPage() {
  const [filter, setFilter] = useState<"all" | "pending" | "completed">("all");

  const filteredVisits = demoTodayVisits.filter((v) => {
    if (filter === "completed") return v.status === "completed";
    if (filter === "pending") return v.status === "scheduled" || v.status === "in-progress";
    return true;
  });

  const completedCount = demoTodayVisits.filter((v) => v.status === "completed").length;
  const pendingCount = demoTodayVisits.filter((v) => v.status !== "completed").length;

  return (
    <div className="space-y-8 text-left font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-clinical-border">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-clinical-teal block mb-1">
            Clinical Route &amp; Daily Schedule
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-deep-ink">
            Today&apos;s Assigned Work
          </h1>
          <p className="text-xs sm:text-sm text-clinical-slate mt-1">
            South Delhi Cluster &bull; Wednesday, 28 Oct 2026 &bull; Assigned to {demoPractitioner.name}
          </p>
        </div>

        {/* Route Stats Summary */}
        <div className="flex items-center gap-3 bg-white p-2.5 rounded-xl border border-clinical-border shadow-xs text-xs">
          <div className="px-3 border-r border-clinical-border">
            <span className="text-clinical-slate text-[10px] uppercase font-bold block">Assigned</span>
            <span className="font-bold text-deep-ink text-sm">{demoTodayVisits.length} Visits</span>
          </div>
          <div className="px-3 border-r border-clinical-border">
            <span className="text-clinical-slate text-[10px] uppercase font-bold block">Completed</span>
            <span className="font-bold text-clinical-teal text-sm">{completedCount}</span>
          </div>
          <div className="px-3">
            <span className="text-clinical-slate text-[10px] uppercase font-bold block">Remaining</span>
            <span className="font-bold text-subtle-amber text-sm">{pendingCount}</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-clinical-border/60 pb-2">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={cn(
            "px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all",
            filter === "all"
              ? "bg-deep-ink text-warm-ivory shadow-xs"
              : "bg-white text-clinical-slate hover:text-deep-ink border border-clinical-border"
          )}
        >
          All Assigned Route ({demoTodayVisits.length})
        </button>
        <button
          type="button"
          onClick={() => setFilter("pending")}
          className={cn(
            "px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all",
            filter === "pending"
              ? "bg-deep-ink text-warm-ivory shadow-xs"
              : "bg-white text-clinical-slate hover:text-deep-ink border border-clinical-border"
          )}
        >
          Remaining Visits ({pendingCount})
        </button>
        <button
          type="button"
          onClick={() => setFilter("completed")}
          className={cn(
            "px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all",
            filter === "completed"
              ? "bg-deep-ink text-warm-ivory shadow-xs"
              : "bg-white text-clinical-slate hover:text-deep-ink border border-clinical-border"
          )}
        >
          Completed Encounters ({completedCount})
        </button>
      </div>

      {/* Visits List */}
      <div className="space-y-5">
        {filteredVisits.map((visit, index) => {
          const isNext = visit.status === "scheduled" && index === 0;
          const isDone = visit.status === "completed";

          return (
            <div
              key={visit.id}
              className={cn(
                "bg-white border rounded-2xl p-6 sm:p-7 transition-all shadow-subtle space-y-5",
                isNext
                  ? "border-clinical-teal/60 ring-2 ring-clinical-teal/15"
                  : "border-clinical-border"
              )}
            >
              {/* Visit Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-clinical-border/70">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 font-bold text-deep-ink text-sm">
                    <Clock className="w-4 h-4 text-clinical-teal" />
                    <span>{visit.scheduledTimeWindow}</span>
                  </div>

                  <span className="text-clinical-border">&bull;</span>

                  <ClinicalStatusBadge status={visit.status} />

                  {isNext && (
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-soft-sage text-clinical-teal border border-clinical-teal/30">
                      Next in Queue
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="text-clinical-slate">Transit Distance:</span>
                  <strong className="text-deep-ink">{visit.travelDistanceKm} km</strong>
                </div>
              </div>

              {/* Patient & Examination Context */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex items-baseline gap-2">
                    <h2 className="text-xl font-bold text-deep-ink">
                      {visit.patientName}
                    </h2>
                    <span className="text-xs text-clinical-slate font-medium">
                      ({visit.patientAge} Y &bull; {visit.patientAge > 60 ? "Senior" : "Adult"})
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-clinical-teal">
                    Service: {visit.serviceCategory}
                  </div>

                  <div className="space-y-1.5 text-xs text-clinical-slate">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-clinical-teal shrink-0 mt-0.5" />
                      <span className="text-deep-ink font-medium">{visit.addressFull}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-clinical-teal shrink-0" />
                      <span>{visit.contactNumber}</span>
                    </div>

                    <div className="flex items-start gap-2 pt-1">
                      <AlertCircle className="w-4 h-4 text-subtle-amber shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-deep-ink">Chief Complaint:</strong> {visit.chiefComplaint}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Clinician Briefing Notes & Primary Action */}
                <div className="lg:col-span-5 bg-warm-neutral/30 border border-clinical-border rounded-xl p-4 space-y-4 text-xs">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-deep-ink block">
                      Clinician Dispatch Notes:
                    </span>
                    <p className="text-clinical-slate text-[11px] leading-relaxed">
                      {visit.notesForClinician}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-clinical-border/60 flex flex-wrap items-center gap-2">
                    {isDone ? (
                      <Link
                        href={`/practitioner/examine/${visit.id}`}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-deep-ink bg-warm-neutral hover:bg-warm-neutral/80 border border-clinical-border transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-clinical-teal" />
                        View Signed Clinical Encounter
                      </Link>
                    ) : (
                      <Link
                        href={`/practitioner/examine/${visit.id}`}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-warm-ivory bg-deep-ink hover:bg-clinical-teal transition-colors shadow-xs"
                      >
                        <Stethoscope className="w-4 h-4" />
                        Start Bedside Examination
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
