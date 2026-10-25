"use client";

import React, { useState } from "react";
import Link from "next/link";
import { demoCareTimeline, demoPatient } from "@/data/patient-demo";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Clock,
  Calendar,
  FileText,
  Glasses,
  Eye,
  CheckCircle2,
  ArrowRight,
  Filter,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function PatientTimelinePage() {
  const [filterType, setFilterType] = useState<string>("all");

  const filteredEvents = demoCareTimeline.filter((evt) => {
    if (filterType === "all") return true;
    return evt.type === filterType;
  });

  const getEventIcon = (type: string) => {
    switch (type) {
      case "visit":
        return <Eye className="w-4 h-4 text-clinical-teal" />;
      case "report":
        return <FileText className="w-4 h-4 text-clinical-teal" />;
      case "prescription":
        return <Glasses className="w-4 h-4 text-clinical-teal" />;
      default:
        return <Clock className="w-4 h-4 text-clinical-teal" />;
    }
  };

  return (
    <div className="space-y-8 text-left font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-clinical-border">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-clinical-teal block mb-1">
            Chronological Journey
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-deep-ink">
            Care Timeline
          </h1>
          <p className="text-xs sm:text-sm text-clinical-slate mt-1">
            An understandable longitudinal view of all eye examinations, verified reports, and clinical next steps.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {[
            { key: "all", label: "All Activity" },
            { key: "visit", label: "Visits" },
            { key: "report", label: "Reports" },
            { key: "prescription", label: "Prescriptions" },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setFilterType(tab.key)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0",
                filterType === tab.key
                  ? "bg-deep-ink text-warm-ivory shadow-xs"
                  : "bg-white text-clinical-slate hover:text-deep-ink border border-clinical-border"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Stream */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-clinical-teal/30 ml-3 sm:ml-4 space-y-8">
        {filteredEvents.map((evt, idx) => {
          const isLatest = idx === 0;
          return (
            <div key={evt.id} className="relative group">
              {/* Timeline Pin Indicator */}
              <div
                className={cn(
                  "absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 rounded-full flex items-center justify-center border-2 transition-transform group-hover:scale-110",
                  isLatest
                    ? "bg-deep-ink border-clinical-teal text-warm-ivory ring-4 ring-soft-sage"
                    : "bg-white border-clinical-border text-clinical-teal"
                )}
              >
                {getEventIcon(evt.type)}
              </div>

              {/* Event Card */}
              <div
                className={cn(
                  "bg-white border rounded-2xl p-6 transition-all hover:shadow-subtle space-y-3",
                  isLatest ? "border-clinical-teal/50 shadow-subtle" : "border-clinical-border"
                )}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-clinical-border/60">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-bold text-deep-ink">
                      {evt.date}
                    </span>
                    <Badge variant={evt.badgeVariant as any} size="sm">
                      {evt.statusBadge}
                    </Badge>
                  </div>
                  <span className="text-xs text-clinical-slate font-medium">
                    {evt.clinician}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-deep-ink">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-clinical-slate leading-relaxed">
                    {evt.description}
                  </p>
                </div>

                {evt.actionHref && (
                  <div className="pt-2">
                    <Link
                      href={evt.actionHref}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-clinical-teal hover:text-deep-ink transition-colors"
                    >
                      <span>{evt.actionLabel || "View details"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Next Step Advisory */}
      <div className="bg-soft-sage/40 border border-clinical-teal/30 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2 font-bold text-deep-ink">
            <Sparkles className="w-4 h-4 text-clinical-teal" />
            <span>Recommended Next Clinical Step</span>
          </div>
          <p className="text-clinical-slate max-w-xl">
            You are scheduled for a routine home visit on Wednesday, 28 Oct 2026. After this visit, the recording optometrist will synchronize your new intraocular pressure readings to your permanent care timeline.
          </p>
        </div>
        <Button href="/patient/appointments" variant="primary" size="sm">
          Check Visit Details
        </Button>
      </div>
    </div>
  );
}
