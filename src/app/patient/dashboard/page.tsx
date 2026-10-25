"use client";

import React, { useState } from "react";
import Link from "next/link";
import { demoPatient, demoAppointments, demoEncounters } from "@/data/patient-demo";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  FileText,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Glasses,
  Users,
  Phone,
  Sparkles,
} from "lucide-react";

export default function PatientDashboardPage() {
  const [hasUpcomingAppointment, setHasUpcomingAppointment] = useState(true);
  const nextVisit = demoAppointments[0]; // Scheduled visit tomorrow
  const lastEncounter = demoEncounters[0]; // 18 Mar 2026

  return (
    <div className="space-y-10 text-left font-sans max-w-5xl mx-auto">
      {/* 1. WELCOME & SINGLE PRIMARY ACTION */}
      <div className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-8 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-clinical-teal" />
            <span className="text-xs font-bold text-clinical-teal uppercase tracking-wider">
              OcuHome Patient Portal
            </span>
            <span className="text-xs text-clinical-slate font-mono">
              &bull; {demoPatient.uhid}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-deep-ink font-sans tracking-tight">
            Welcome back, {demoPatient.fullName}
          </h1>
          <p className="text-sm sm:text-base text-clinical-slate leading-relaxed">
            Manage your home eye visits, view your spectacle prescription, and check your latest doctor-approved reports.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <Button
            href="/book"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto text-sm font-semibold justify-center"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Book an Eye-Care Visit
          </Button>
          <Button
            href="/book-specialist"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto text-sm font-medium justify-center"
          >
            Specialist Clinics
          </Button>
        </div>
      </div>

      {/* 2. QUESTION 1: WHAT IS HAPPENING NEXT? */}
      <section aria-labelledby="upcoming-visit-heading" className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 id="upcoming-visit-heading" className="text-xl sm:text-2xl font-bold text-deep-ink font-sans">
            1. Your Next Scheduled Appointment
          </h2>
          <button
            type="button"
            onClick={() => setHasUpcomingAppointment(!hasUpcomingAppointment)}
            className="text-xs text-clinical-slate hover:text-clinical-teal underline transition-colors"
            title="Toggle between appointment scheduled and empty state for demonstration review"
          >
            {hasUpcomingAppointment ? "Simulate Empty State" : "Simulate Scheduled Visit"}
          </button>
        </div>

        {hasUpcomingAppointment ? (
          <div className="bg-white border-2 border-clinical-teal/40 rounded-2xl p-6 sm:p-8 shadow-elevated space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-clinical-border">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-clinical-teal animate-pulse" />
                <span className="text-sm font-bold text-deep-ink">
                  Home Visit Confirmed for Tomorrow
                </span>
              </div>
              <Badge variant="clinical" size="md">
                Confirmed Appointment
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-4">
                <div>
                  <span className="text-xs font-semibold text-clinical-teal uppercase tracking-wider block mb-1">
                    Care Service
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-deep-ink">
                    {nextVisit.serviceCategory}
                  </h3>
                </div>

                <div className="space-y-2 text-sm text-deep-ink">
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-clinical-teal shrink-0" />
                    <span><strong>Date:</strong> {nextVisit.scheduledDate} (Tomorrow)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-clinical-teal shrink-0" />
                    <span><strong>Arrival Window:</strong> {nextVisit.scheduledTimeWindow}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-clinical-teal shrink-0 mt-0.5" />
                    <span><strong>Location:</strong> {nextVisit.location}</span>
                  </div>
                  <div className="flex items-center gap-2.5 pt-1">
                    <ShieldCheck className="w-4 h-4 text-clinical-teal shrink-0" />
                    <span className="text-xs text-clinical-slate">
                      Visiting Clinician: <strong>{nextVisit.practitionerName}</strong> ({nextVisit.practitionerRole}, Mobile Kit #04)
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/patient/appointments"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-clinical-teal hover:underline"
                  >
                    <span>Reschedule or cancel this visit</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-clinical-border hidden sm:inline">&bull;</span>
                  <span className="text-xs text-clinical-slate">
                    Questions? Call care desk at <strong>+91 11 4000 8900</strong>
                  </span>
                </div>
              </div>

              {/* Action Required Box: Pre-Visit Checklist */}
              <div className="md:col-span-5 bg-warm-neutral/40 border border-clinical-border rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-clinical-teal" />
                  <span className="text-xs font-bold text-deep-ink uppercase tracking-wider">
                    2. What You Need to Do (Pre-Visit Checklist)
                  </span>
                </div>
                <p className="text-xs text-clinical-slate">
                  Simple steps to ensure your optometrist examination is fast, accurate, and comfortable:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-deep-ink">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-clinical-teal shrink-0 mt-0.5" />
                    <span>Keep your current reading and distance glasses on the table.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-clinical-teal shrink-0 mt-0.5" />
                    <span>Take your morning <strong>Timolol 0.5%</strong> eye drops as usual before 9:00 AM.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-clinical-teal shrink-0 mt-0.5" />
                    <span>Seat yourself in a well-lit living area or room with an electrical outlet nearby.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white border border-clinical-border rounded-2xl p-8 text-center space-y-4 shadow-subtle">
            <div className="w-12 h-12 rounded-full bg-soft-sage text-clinical-teal flex items-center justify-center mx-auto">
              <Calendar className="w-6 h-6" />
            </div>
            <div className="max-w-md mx-auto space-y-1">
              <h3 className="text-lg font-bold text-deep-ink">No upcoming appointments scheduled</h3>
              <p className="text-sm text-clinical-slate">
                Your last clinical home examination was completed on 18 Mar 2026. Routine check-ups are recommended every 6 to 12 months.
              </p>
            </div>
            <Button href="/book" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Schedule an Eye Examination
            </Button>
          </div>
        )}
      </section>

      {/* 3. QUESTION 3: WHERE CAN I FIND MY REPORTS? (Simple, plain-language records access) */}
      <section aria-labelledby="my-reports-heading" className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 id="my-reports-heading" className="text-xl sm:text-2xl font-bold text-deep-ink font-sans">
            3. Your Recent Eye-Care Records &amp; Prescriptions
          </h2>
          <Link
            href="/patient/records"
            className="text-xs sm:text-sm font-semibold text-clinical-teal hover:underline flex items-center gap-1"
          >
            <span>View all reports &amp; history</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Record Card A: Spectacle Prescription */}
          <div className="bg-white border border-clinical-border rounded-2xl p-6 shadow-subtle flex flex-col justify-between space-y-4 hover:border-clinical-teal/40 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-soft-sage text-clinical-teal flex items-center justify-center">
                    <Glasses className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-deep-ink">Active Spectacle Prescription</h3>
                    <span className="text-xs text-clinical-slate">Issued 18 Mar 2026 &bull; Valid</span>
                  </div>
                </div>
                <Badge variant="clinical" size="sm">Current</Badge>
              </div>

              <div className="p-3 bg-warm-neutral/30 rounded-xl space-y-1.5 text-xs text-deep-ink">
                <div className="flex justify-between">
                  <span className="text-clinical-slate">Right Eye (OD):</span>
                  <strong>+1.50 DS / -0.75 DC x 85&deg; (Add +2.25)</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-clinical-slate">Left Eye (OS):</span>
                  <strong>+1.75 DS / -0.50 DC x 95&deg; (Add +2.25)</strong>
                </div>
              </div>
              <p className="text-xs text-clinical-slate">
                Prescribed for progressive lenses (reading and distance).
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <Button href="/patient/records" variant="outline" size="sm" className="w-full justify-center">
                Open Prescription Card &rarr;
              </Button>
            </div>
          </div>

          {/* Record Card B: Latest Clinical Report */}
          <div className="bg-white border border-clinical-border rounded-2xl p-6 shadow-subtle flex flex-col justify-between space-y-4 hover:border-clinical-teal/40 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-soft-sage text-clinical-teal flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-deep-ink">Doctor-Reviewed Examination</h3>
                    <span className="text-xs text-clinical-slate">{lastEncounter.encounterDate} &bull; Dr. Ananya Rao</span>
                  </div>
                </div>
                <Badge variant="sage" size="sm">MD Verified</Badge>
              </div>

              <div className="space-y-2 text-xs leading-relaxed text-deep-ink">
                <p>
                  <strong>Doctor&apos;s Summary:</strong> &ldquo;Compound hyperopic astigmatism with presbyopia. Both optic disc margins sharp and healthy. Eye pressure is well-controlled with your morning eye drops.&rdquo;
                </p>
                <div className="flex items-center gap-2 text-clinical-teal font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Next routine pressure check: Due October 2026</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <Button href="/patient/records" variant="outline" size="sm" className="w-full justify-center">
                Read Full Examination Report &rarr;
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUESTION 4: HOW DO I MANAGE MY CARE & FAMILY COORDINATION? */}
      <section aria-labelledby="manage-care-heading" className="space-y-4">
        <h2 id="manage-care-heading" className="text-xl sm:text-2xl font-bold text-deep-ink font-sans">
          4. Quick Tools &amp; Family Caregiver Support
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Tile 1: Family Member Access */}
          <Link
            href="/patient/profile"
            className="group bg-white border border-clinical-border rounded-2xl p-5 shadow-subtle hover:border-clinical-teal/50 hover:shadow-card transition-all block text-left"
          >
            <div className="w-9 h-9 rounded-xl bg-soft-sage text-clinical-teal flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-deep-ink group-hover:text-clinical-teal transition-colors">
              Family &amp; Caregivers
            </h3>
            <p className="text-xs text-clinical-slate mt-1 leading-relaxed">
              Daughter Sunita Krishnamurthy (+91 98110 98765) is authorized to receive your visit reports.
            </p>
            <span className="text-xs font-bold text-clinical-teal inline-flex items-center gap-1 mt-3">
              <span>Manage permissions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          {/* Tile 2: Complete Care Timeline */}
          <Link
            href="/patient/timeline"
            className="group bg-white border border-clinical-border rounded-2xl p-5 shadow-subtle hover:border-clinical-teal/50 hover:shadow-card transition-all block text-left"
          >
            <div className="w-9 h-9 rounded-xl bg-soft-sage text-clinical-teal flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-deep-ink group-hover:text-clinical-teal transition-colors">
              Care Timeline
            </h3>
            <p className="text-xs text-clinical-slate mt-1 leading-relaxed">
              Review your chronological journey across visits, reports, and follow-ups in plain order.
            </p>
            <span className="text-xs font-bold text-clinical-teal inline-flex items-center gap-1 mt-3">
              <span>View timeline</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          {/* Tile 3: Emergency Guidance */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 text-left space-y-2">
            <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0" />
              <span>Emergency Eye Symptoms</span>
            </div>
            <p className="text-xs text-amber-900 leading-relaxed">
              If you experience sudden severe eye pain, halos with nausea, or sudden dark curtains across your vision, please visit an emergency eye hospital immediately.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs font-bold text-amber-950">
              <Phone className="w-3.5 h-3.5 text-amber-700" />
              <span>OcuHome Helpline: +91 11 4000 8900</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
