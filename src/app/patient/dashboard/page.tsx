"use client";

import React from "react";
import Link from "next/link";
import { demoPatient, demoAppointments, demoEncounters } from "@/data/patient-demo";
import { Badge, ClinicalStatusBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  FileText,
  AlertCircle,
  Eye,
  ArrowRight,
  ShieldCheck,
  Download,
  Activity,
  Heart,
  ChevronRight,
} from "lucide-react";

export default function PatientDashboardPage() {
  const nextVisit = demoAppointments[0]; // Scheduled visit tomorrow
  const lastEncounter = demoEncounters[0]; // 18 Mar 2026

  return (
    <div className="space-y-8 text-left font-sans">
      {/* Top Welcome Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-clinical-border">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-clinical-teal block mb-1">
            Patient Health Dashboard
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-deep-ink font-sans">
            Welcome back, {demoPatient.fullName}
          </h1>
          <p className="text-xs sm:text-sm text-clinical-slate mt-1">
            Your longitudinal eye-care history, upcoming bedside examinations, and verified reports.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Button href="/book" variant="primary" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
            Request New Visit
          </Button>
          <Button href="/book-specialist" variant="secondary" size="sm">
            Book Specialist
          </Button>
        </div>
      </div>

      {/* 1. UPCOMING APPOINTMENT & VISIT PREPARATION (Clear Next Step) */}
      <section aria-label="Upcoming appointment" className="bg-white border border-clinical-teal/40 rounded-2xl p-6 sm:p-8 shadow-subtle space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-clinical-teal animate-pulse" />
            <span className="text-xs font-bold text-deep-ink uppercase tracking-wider">
              Upcoming Home Examination Visit
            </span>
          </div>
          <Badge variant="amber" size="sm">
            Scheduled Tomorrow
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-deep-ink">
              {nextVisit.serviceCategory}
            </h2>
            <div className="space-y-1.5 text-xs text-clinical-slate">
              <div className="flex items-center gap-2 text-deep-ink font-medium">
                <Calendar className="w-4 h-4 text-clinical-teal shrink-0" />
                <span>{nextVisit.scheduledDate}</span>
                <span className="text-clinical-border">&bull;</span>
                <Clock className="w-4 h-4 text-clinical-teal shrink-0" />
                <span>{nextVisit.scheduledTimeWindow}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-clinical-teal shrink-0 mt-0.5" />
                <span>{nextVisit.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-clinical-teal shrink-0" />
                <span>Assigned Optometrist: <strong>{nextVisit.practitionerName}</strong> (Mobile Kit #04)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-warm-neutral/30 border border-clinical-border rounded-xl p-4 space-y-2 text-xs">
            <span className="font-bold text-deep-ink uppercase text-[10px] tracking-wider block">
              Pre-Visit Patient Checklist:
            </span>
            <ul className="space-y-1.5 text-clinical-slate">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-clinical-teal shrink-0 mt-0.5" />
                <span>Keep your existing reading and distance glasses ready on the table.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-clinical-teal shrink-0 mt-0.5" />
                <span>Have your current bottle of <strong>Timolol 0.5%</strong> eye drops handy.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-clinical-teal shrink-0 mt-0.5" />
                <span>Ensure a seated chair in a well-lit living room or study.</span>
              </li>
            </ul>

            <div className="pt-2 flex items-center justify-between">
              <Link
                href="/patient/appointments"
                className="text-xs font-semibold text-clinical-teal hover:underline flex items-center gap-1"
              >
                <span>Reschedule or view visit details</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PLAIN-LANGUAGE EYE HEALTH SUMMARY (No technical jargon on first screen) */}
      <section aria-label="Eye health summary" className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-deep-ink font-sans">
            Eye Health Summary at a Glance
          </h2>
          <span className="text-xs text-clinical-slate">
            Based on last clinical review: <strong>18 Mar 2026</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Card 1: Distance & Reading Vision */}
          <div className="bg-white border border-clinical-border rounded-xl p-5 shadow-subtle space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-clinical-slate uppercase tracking-wider">
                Reading & Distance Vision
              </span>
              <span className="w-2 h-2 rounded-full bg-clinical-teal" />
            </div>
            <div className="text-2xl font-bold text-deep-ink">Stable (6/6)</div>
            <p className="text-xs text-clinical-slate">
              Vision with your current progressive glasses is sharp and clear. Mild reading adjustment
              scheduled for tomorrow's check.
            </p>
          </div>

          {/* Card 2: Eye Pressure (IOP) */}
          <div className="bg-white border border-clinical-border rounded-xl p-5 shadow-subtle space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-clinical-slate uppercase tracking-wider">
                Internal Eye Pressure
              </span>
              <Badge variant="clinical" size="sm">Normal</Badge>
            </div>
            <div className="text-2xl font-bold text-deep-ink">14.8 / 15.2 <span className="text-xs font-normal text-clinical-slate">mmHg</span></div>
            <p className="text-xs text-clinical-slate">
              Both eyes remain comfortably inside the safe physiological target range (&le;18 mmHg) with your daily drops.
            </p>
          </div>

          {/* Card 3: Retinal Health */}
          <div className="bg-white border border-clinical-border rounded-xl p-5 shadow-subtle space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-clinical-slate uppercase tracking-wider">
                Back of the Eye (Retina)
              </span>
              <Badge variant="sage" size="sm">Healthy</Badge>
            </div>
            <div className="text-2xl font-bold text-deep-ink">No DR Lesions</div>
            <p className="text-xs text-clinical-slate">
              Digital fundus imaging confirmed sharp macula and clear retinal vessels without diabetic microvascular changes.
            </p>
          </div>
        </div>
      </section>

      {/* 3. RECENT ACTIVITY & VERIFIED REPORT CARD */}
      <section aria-label="Recent activity" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Latest Verified Report Summary */}
        <div className="lg:col-span-7 bg-white border border-clinical-border rounded-2xl p-6 sm:p-7 shadow-subtle space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-clinical-border">
            <div>
              <span className="text-[10px] font-bold text-clinical-teal uppercase tracking-wider block">
                Latest Countersigned Clinical Report
              </span>
              <h3 className="text-base font-bold text-deep-ink">
                Encounter Report #ENC-2026-0318
              </h3>
            </div>
            <Badge variant="clinical" size="sm">MD Verified</Badge>
          </div>

          <div className="space-y-3 text-xs leading-relaxed text-clinical-slate">
            <div>
              <strong className="text-deep-ink block mb-0.5">Diagnosing Specialist:</strong>
              <span>Dr. Ananya Rao, MS (Ophthalmology) &bull; Reg: DMC-48291</span>
            </div>

            <div>
              <strong className="text-deep-ink block mb-0.5">Clinical Findings:</strong>
              <span>
                "Compound hyperopic astigmatism with presbyopia. Both optic disc margins sharp with
                stable cup-to-disc ratio. IOP remains well-controlled. Continue timolol 0.5% once
                daily. Routine home tonometry review in 6 months."
              </span>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/patient/records"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-clinical-teal hover:underline"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Full Examination Telemetry & Spectacle Prescription &rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Family Caregiver Connection & Triage Escalation */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-soft-sage/40 border border-clinical-border rounded-2xl p-6 space-y-3 text-xs">
            <div className="flex items-center gap-2 text-deep-ink font-bold">
              <Heart className="w-4 h-4 text-clinical-teal" />
              <span>Authorized Family Caregiver</span>
            </div>
            <p className="text-clinical-slate leading-relaxed">
              Your daughter, <strong>Sunita Krishnamurthy</strong> (+91 98110 98765), is authorized
              to receive digital copies of your visit reports and assist with appointment coordination.
            </p>
            <Link
              href="/patient/profile"
              className="text-xs font-semibold text-clinical-teal hover:underline inline-block pt-1"
            >
              Manage Family Permissions &rarr;
            </Link>
          </div>

          <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 space-y-2 text-xs text-amber-900">
            <div className="flex items-center gap-2 font-bold text-amber-950">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>When to Seek Emergency Care:</span>
            </div>
            <p className="leading-relaxed">
              If you experience sudden severe eye pain, halos around lights with nausea, or sudden
              curtain-like vision loss, please proceed to an emergency tertiary ophthalmic hospital
              immediately.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
