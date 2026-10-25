import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "clinical" | "amber" | "sage" | "alert" | "ink";
  size?: "sm" | "md";
}

export function Badge({
  variant = "neutral",
  size = "md",
  className,
  children,
  ...props
}: BadgeProps) {
  const sizeClasses = {
    sm: "text-[10px] px-2 py-0.5 tracking-tight font-medium",
    md: "text-xs px-2.5 py-1 tracking-tight font-medium",
  };

  const variantClasses = {
    neutral: "bg-warm-neutral text-deep-ink border border-clinical-border",
    clinical: "bg-clinical-teal/10 text-clinical-teal-dark border border-clinical-teal/20",
    amber: "bg-subtle-amber/15 text-deep-ink border border-subtle-amber/30",
    sage: "bg-soft-sage text-deep-ink border border-clinical-border",
    alert: "bg-red-50 text-red-700 border border-red-200",
    ink: "bg-deep-ink text-warm-ivory",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-sans",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export type ClinicalOrAppointmentStatus =
  | "routine"
  | "md-review"
  | "referral-urgent"
  | "completed"
  | "requested"
  | "scheduled"
  | "in-progress"
  | "cancelled";

export function ClinicalStatusBadge({
  status,
}: {
  status: ClinicalOrAppointmentStatus;
}) {
  const configs: Record<
    ClinicalOrAppointmentStatus,
    { label: string; variant: "sage" | "amber" | "alert" | "clinical" | "neutral"; dotColor: string }
  > = {
    routine: {
      label: "Routine Screening",
      variant: "sage",
      dotColor: "bg-clinical-teal",
    },
    "md-review": {
      label: "Ophthalmologist Review Pending",
      variant: "amber",
      dotColor: "bg-subtle-amber-dark",
    },
    "referral-urgent": {
      label: "Hospital Referral Recommended",
      variant: "alert",
      dotColor: "bg-red-500",
    },
    completed: {
      label: "Encounter Completed",
      variant: "clinical",
      dotColor: "bg-clinical-teal",
    },
    requested: {
      label: "Requested",
      variant: "amber",
      dotColor: "bg-subtle-amber-dark",
    },
    scheduled: {
      label: "Scheduled",
      variant: "clinical",
      dotColor: "bg-clinical-teal",
    },
    "in-progress": {
      label: "In Progress",
      variant: "amber",
      dotColor: "bg-subtle-amber-dark",
    },
    cancelled: {
      label: "Cancelled",
      variant: "neutral",
      dotColor: "bg-clinical-slate",
    },
  };

  const cfg = configs[status] || configs.routine;

  return (
    <Badge variant={cfg.variant} size="md">
      <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", cfg.dotColor)} />
      <span>{cfg.label}</span>
    </Badge>
  );
}
