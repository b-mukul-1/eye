import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function DemoModeBanner({
  currentRole = "guest",
  forceShow = false,
  className,
}: {
  currentRole?: "patient" | "practitioner" | "optometrist" | "ophthalmologist" | "guest";
  forceShow?: boolean;
  className?: string;
}) {
  // Route-based & role-based isolation: never display on normal public website
  if (currentRole === "guest" && !forceShow) {
    return null;
  }

  return (
    <aside
      aria-label="Demonstration mode notice"
      className={cn(
        "bg-subtle-amber-light border-b border-subtle-amber/30 px-4 py-2 text-xs font-sans text-deep-ink",
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Badge variant="amber" size="sm">
            Phase 1 Demonstration
          </Badge>
          <span className="text-deep-ink/90 font-medium">
            Frontend Architecture Showcase:
          </span>
          <span className="hidden sm:inline text-clinical-slate">
            All records and telemetry use clearly labelled synthetic demonstration data. Real
            DPDP (2023) and ABDM-aligned clinical backend connects in Phase 2.
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] text-clinical-slate hidden md:inline">Switch Demo Role:</span>
          <Link
            href="/patient/dashboard"
            className={cn(
              "px-2 py-0.5 rounded text-[11px] font-medium transition-colors border",
              currentRole === "patient"
                ? "bg-deep-ink text-warm-ivory border-deep-ink"
                : "bg-white text-deep-ink hover:bg-soft-sage/40 border-clinical-border"
            )}
          >
            Patient
          </Link>
          <Link
            href="/practitioner/visits"
            className={cn(
              "px-2 py-0.5 rounded text-[11px] font-medium transition-colors border",
              currentRole === "practitioner"
                ? "bg-deep-ink text-warm-ivory border-deep-ink"
                : "bg-white text-deep-ink hover:bg-soft-sage/40 border-clinical-border"
            )}
          >
            Optometrist
          </Link>
          <Link
            href="/practitioner/reviews"
            className={cn(
              "px-2 py-0.5 rounded text-[11px] font-medium transition-colors border",
              currentRole === "ophthalmologist"
                ? "bg-deep-ink text-warm-ivory border-deep-ink"
                : "bg-white text-deep-ink hover:bg-soft-sage/40 border-clinical-border"
            )}
          >
            Ophthalmologist
          </Link>
        </div>
      </div>
    </aside>
  );
}

export function MetricDisplay({
  label,
  value,
  unit,
  interpretation,
  alert = false,
}: {
  label: string;
  value: string | number;
  unit?: string;
  interpretation?: string;
  alert?: boolean;
}) {
  return (
    <div className="bg-white/80 border border-clinical-border rounded-xl p-3.5 text-left font-sans">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-clinical-slate block mb-1">
        {label}
      </span>
      <div className="flex items-baseline gap-1">
        <span
          className={cn(
            "text-2xl font-bold tracking-tight font-sans",
            alert ? "text-red-600" : "text-deep-ink"
          )}
        >
          {value}
        </span>
        {unit && <span className="text-xs text-clinical-slate font-medium">{unit}</span>}
      </div>
      {interpretation && (
        <span
          className={cn(
            "text-[11px] block mt-1",
            alert ? "text-red-700 font-medium" : "text-clinical-slate"
          )}
        >
          {interpretation}
        </span>
      )}
    </div>
  );
}
