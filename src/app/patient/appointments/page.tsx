"use client";

import React, { useState } from "react";
import Link from "next/link";
import { demoAppointments, demoPatient } from "@/data/patient-demo";
import { Appointment, AppointmentStatus } from "@/types/clinical";
import { Badge, ClinicalStatusBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Phone,
  FileText,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function PatientAppointmentsPage() {
  const [filter, setFilter] = useState<"all" | AppointmentStatus>("all");
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [actionType, setActionType] = useState<"reschedule" | "cancel" | null>(null);
  const [actionSuccessMessage, setActionSuccessMessage] = useState<string | null>(null);

  const filteredAppointments = demoAppointments.filter((apt) => {
    if (filter === "all") return true;
    return apt.status === filter;
  });

  const handleOpenAction = (apt: Appointment, type: "reschedule" | "cancel") => {
    setSelectedAppointment(apt);
    setActionType(type);
    setActionSuccessMessage(null);
  };

  const handleConfirmAction = () => {
    if (actionType === "reschedule") {
      setActionSuccessMessage(
        `Reschedule request logged for ${selectedAppointment?.serviceCategory}. Our patient care coordination team will reach out to ${demoPatient.phone} within 2 business hours.`
      );
    } else {
      setActionSuccessMessage(
        `Cancellation request received for ${selectedAppointment?.serviceCategory}. Notification has been dispatched to your primary clinician.`
      );
    }
    setTimeout(() => {
      setActionType(null);
    }, 2800);
  };

  return (
    <div className="space-y-8 text-left font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-clinical-border">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-clinical-teal block mb-1">
            Appointments & Visits
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-deep-ink">
            My Appointments
          </h1>
          <p className="text-xs sm:text-sm text-clinical-slate mt-1">
            Manage your scheduled home visits, review past consultations, or reschedule upcoming care.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button href="/book" variant="primary" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
            Request New Visit
          </Button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-clinical-border/60">
        {[
          { key: "all", label: "All Visits", count: demoAppointments.length },
          {
            key: "scheduled",
            label: "Scheduled",
            count: demoAppointments.filter((a) => a.status === "scheduled").length,
          },
          {
            key: "completed",
            label: "Completed",
            count: demoAppointments.filter((a) => a.status === "completed").length,
          },
          {
            key: "cancelled",
            label: "Cancelled",
            count: demoAppointments.filter((a) => a.status === "cancelled").length,
          },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setFilter(tab.key as any)}
            className={cn(
              "px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 shrink-0",
              filter === tab.key
                ? "bg-deep-ink text-warm-ivory shadow-xs"
                : "bg-white text-clinical-slate hover:text-deep-ink border border-clinical-border"
            )}
          >
            <span>{tab.label}</span>
            <span
              className={cn(
                "px-1.5 py-0.2 rounded-full text-[10px]",
                filter === tab.key
                  ? "bg-warm-ivory/20 text-warm-ivory"
                  : "bg-warm-neutral text-deep-ink/70"
              )}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        {filteredAppointments.length === 0 ? (
          <div className="bg-white border border-clinical-border rounded-xl p-10 text-center space-y-3">
            <Calendar className="w-8 h-8 text-clinical-slate/40 mx-auto" />
            <h3 className="text-base font-bold text-deep-ink">No visits found</h3>
            <p className="text-xs text-clinical-slate max-w-sm mx-auto">
              There are no appointments matching the selected filter criteria.
            </p>
          </div>
        ) : (
          filteredAppointments.map((apt) => {
            const isUpcoming = apt.status === "scheduled";
            return (
              <div
                key={apt.id}
                className={cn(
                  "bg-white border rounded-2xl p-6 transition-all hover:shadow-subtle",
                  isUpcoming
                    ? "border-clinical-teal/40 ring-1 ring-clinical-teal/20"
                    : "border-clinical-border"
                )}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-clinical-border/60">
                  <div className="flex flex-wrap items-center gap-3">
                    <ClinicalStatusBadge status={apt.status} />
                    <span className="text-xs text-clinical-slate font-medium">
                      Ref: {apt.id}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-soft-sage text-clinical-teal">
                      {apt.careSetting === "home-visit" ? "Bedside Home Visit" : "Clinic Consultation"}
                    </span>
                  </div>

                  {isUpcoming && (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleOpenAction(apt, "reschedule")}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-deep-ink bg-warm-neutral/40 hover:bg-warm-neutral border border-clinical-border transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5 text-clinical-slate" />
                        Reschedule
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOpenAction(apt, "cancel")}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-alert-red hover:bg-alert-red/10 border border-alert-red/30 transition-colors"
                      >
                        <XCircle className="w-3.5 h-3.5" />
                        Cancel
                      </button>
                    </div>
                  )}

                  {apt.status === "completed" && (
                    <Link
                      href="/patient/records"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-clinical-teal hover:bg-soft-sage/40 border border-clinical-border transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      View Completed Report
                    </Link>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
                  <div className="md:col-span-7 space-y-3">
                    <h3 className="text-lg font-bold text-deep-ink">
                      {apt.serviceCategory}
                    </h3>
                    <div className="space-y-1.5 text-xs text-clinical-slate">
                      <div className="flex items-center gap-2 text-deep-ink font-semibold">
                        <Calendar className="w-4 h-4 text-clinical-teal shrink-0" />
                        <span>{apt.scheduledDate}</span>
                        <span className="text-clinical-border">&bull;</span>
                        <Clock className="w-4 h-4 text-clinical-teal shrink-0" />
                        <span>{apt.scheduledTimeWindow}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-clinical-teal shrink-0 mt-0.5" />
                        <span>{apt.location}</span>
                      </div>
                      <div className="flex items-start gap-2 pt-1">
                        <AlertCircle className="w-4 h-4 text-subtle-amber shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-deep-ink font-medium">Chief reason:</strong>{" "}
                          {apt.chiefComplaint}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-5 bg-warm-neutral/30 border border-clinical-border/80 rounded-xl p-4 space-y-2.5 text-xs">
                    <div className="flex items-center gap-2 text-deep-ink font-semibold">
                      <ShieldCheck className="w-4 h-4 text-clinical-teal" />
                      <span>Assigned Clinician</span>
                    </div>
                    <div>
                      <div className="font-bold text-deep-ink text-sm">{apt.practitionerName}</div>
                      <div className="text-clinical-slate text-[11px]">
                        {apt.practitionerRole} &bull; OcuHome Clinical Dispatch
                      </div>
                    </div>
                    {isUpcoming ? (
                      <div className="pt-2 border-t border-clinical-border/60 text-[11px] text-clinical-slate space-y-1">
                        <div className="text-deep-ink font-medium">Diagnostic Kit Assigned:</div>
                        <div>Portable Retinal Imaging &amp; Icare Rebound Tonometer Unit #04</div>
                      </div>
                    ) : (
                      <div className="pt-2 border-t border-clinical-border/60 text-[11px] text-clinical-slate">
                        Encounter signed off and permanently archived in your longitudinal EHR.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Reschedule / Cancellation Modal State */}
      {actionType && selectedAppointment && (
        <div className="fixed inset-0 z-50 bg-deep-ink/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-clinical-border rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-elevated">
            <div className="flex items-center justify-between pb-3 border-b border-clinical-border">
              <div className="flex items-center gap-2">
                {actionType === "reschedule" ? (
                  <RotateCcw className="w-5 h-5 text-clinical-teal" />
                ) : (
                  <XCircle className="w-5 h-5 text-alert-red" />
                )}
                <h3 className="text-lg font-bold text-deep-ink">
                  {actionType === "reschedule" ? "Reschedule Home Visit" : "Cancel Home Visit"}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActionType(null)}
                className="text-clinical-slate hover:text-deep-ink text-sm font-semibold"
              >
                &times; Close
              </button>
            </div>

            {actionSuccessMessage ? (
              <div className="p-4 bg-soft-sage/50 border border-clinical-teal/30 rounded-xl space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-clinical-teal">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Request Dispatched</span>
                </div>
                <p className="text-deep-ink">{actionSuccessMessage}</p>
              </div>
            ) : (
              <div className="space-y-4 text-xs">
                <p className="text-clinical-slate">
                  You are modifying your scheduled appointment for:
                </p>
                <div className="bg-warm-neutral/40 p-3 rounded-lg border border-clinical-border">
                  <div className="font-bold text-deep-ink">{selectedAppointment.serviceCategory}</div>
                  <div className="text-clinical-slate mt-0.5">
                    {selectedAppointment.scheduledDate} &bull; {selectedAppointment.scheduledTimeWindow}
                  </div>
                </div>

                {actionType === "reschedule" ? (
                  <div className="space-y-3">
                    <label className="block text-deep-ink font-semibold">
                      Preferred New Date or Time Window:
                    </label>
                    <select className="w-full px-3 py-2 border border-clinical-border rounded-lg bg-white text-xs text-deep-ink">
                      <option>Thursday, 29 Oct 2026 (Morning: 10:00 AM – 12:00 PM)</option>
                      <option>Thursday, 29 Oct 2026 (Afternoon: 02:00 PM – 04:00 PM)</option>
                      <option>Friday, 30 Oct 2026 (Morning: 10:00 AM – 12:00 PM)</option>
                      <option>Saturday, 31 Oct 2026 (Weekend Home Slot: 11:00 AM – 01:00 PM)</option>
                    </select>

                    <label className="block text-deep-ink font-semibold">
                      Reason for Reschedule (Optional):
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g., Family member accompanying me is only available on Friday morning."
                      className="w-full px-3 py-2 border border-clinical-border rounded-lg bg-white text-xs text-deep-ink placeholder:text-clinical-slate/60"
                    />
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="p-3 bg-warm-neutral/50 border border-subtle-amber/40 rounded-lg text-clinical-slate space-y-1">
                      <strong className="text-deep-ink block">Cancellation Policy Notice:</strong>
                      Home diagnostic visits involve mobile route and instrument calibration. Cancellations requested at least 4 hours in advance incur no penalty.
                    </div>

                    <label className="block text-deep-ink font-semibold">
                      Please let us know the reason:
                    </label>
                    <select className="w-full px-3 py-2 border border-clinical-border rounded-lg bg-white text-xs text-deep-ink">
                      <option>Symptoms resolved / Feeling better</option>
                      <option>Personal or family emergency</option>
                      <option>Decided to visit hospital OPD instead</option>
                      <option>Other reason</option>
                    </select>
                  </div>
                )}

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setActionType(null)}
                    className="px-4 py-2 text-xs font-semibold text-clinical-slate hover:text-deep-ink"
                  >
                    Keep Appointment
                  </button>
                  <Button
                    variant={actionType === "reschedule" ? "primary" : "secondary"}
                    size="sm"
                    onClick={handleConfirmAction}
                  >
                    {actionType === "reschedule" ? "Submit Reschedule Request" : "Confirm Cancellation"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Help Banner */}
      <div className="bg-warm-neutral/40 border border-clinical-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <Phone className="w-4 h-4 text-clinical-teal shrink-0" />
          <span className="text-clinical-slate">
            Need urgent assistance or same-day scheduling for elderly or bedbound patients? Call our clinical desk at{" "}
            <strong className="text-deep-ink">+91 11 4000 8900</strong>.
          </span>
        </div>
      </div>
    </div>
  );
}
