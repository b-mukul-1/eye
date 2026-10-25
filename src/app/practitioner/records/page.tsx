"use client";

import React, { useState } from "react";
import Link from "next/link";
import { demoPatient, demoEncounters } from "@/data/patient-demo";
import { demoPractitioner } from "@/data/practitioner-demo";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Search,
  ShieldCheck,
  ShieldAlert,
  User,
  FileText,
  Calendar,
  Eye,
  Activity,
  ArrowRight,
  ExternalLink,
  Lock,
  ChevronDown,
  Clock,
  History,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AuthorizedPatient {
  id: string;
  uhid: string;
  name: string;
  age: number;
  gender: string;
  phone: string;
  locality: string;
  chronicConditions: string[];
  careRelationshipReason: string;
  authorizedSince: string;
  lastEncounterDate: string;
  lastEncounterFindings: string;
  hasActiveVisitToday: boolean;
}

export default function PractitionerRecordsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>("pat-krishnamurthy-704");

  const authorizedPatients: AuthorizedPatient[] = [
    {
      id: "pat-krishnamurthy-704",
      uhid: "OCU-DEL-2026-70421",
      name: "Anand Krishnamurthy",
      age: 68,
      gender: "Male",
      phone: "+91 98101 23456",
      locality: "Hauz Khas Enclave, New Delhi",
      chronicConditions: ["Glaucoma Suspect (OD IOP)", "Presbyopia (+2.25 Add)", "Type 2 Diabetes"],
      careRelationshipReason: "Assigned Home Visit Route (Mobile Kit #04)",
      authorizedSince: "12 Jan 2026",
      lastEncounterDate: "18 Mar 2026",
      lastEncounterFindings: "IOP 14.8/15.2 mmHg. BCVA 6/6 OU with +1.50/+1.75 DS. C:D 0.45 OD / 0.40 OS.",
      hasActiveVisitToday: true,
    },
    {
      id: "pat-meera-sen-812",
      uhid: "OCU-DEL-2026-81204",
      name: "Meera Sen",
      age: 42,
      gender: "Female",
      phone: "+91 98711 54321",
      locality: "Saket, New Delhi",
      chronicConditions: ["Myopic Astigmatism", "Digital Eye Strain"],
      careRelationshipReason: "Assigned Home Visit Route (Mobile Kit #04)",
      authorizedSince: "24 Oct 2026",
      lastEncounterDate: "New Patient (First Encounter)",
      lastEncounterFindings: "Baseline questionnaire completed via patient mobile intake.",
      hasActiveVisitToday: true,
    },
    {
      id: "pat-harpal-singh-601",
      uhid: "OCU-DEL-2026-60102",
      name: "Col. Harpal Singh (Retd.)",
      age: 79,
      gender: "Male",
      phone: "+91 98100 11223",
      locality: "Vasant Vihar, New Delhi",
      chronicConditions: ["Age-related Nuclear Cataract OS", "Mild Hypertensive Retinopathy"],
      careRelationshipReason: "Completed Encounter & Ophthalmology Surgical Referral",
      authorizedSince: "05 Nov 2025",
      lastEncounterDate: "Today (28 Oct 2026)",
      lastEncounterFindings: "LOCS III Grade 2.5 nuclear cataract OS. BCVA 6/18. Referred for phacoemulsification.",
      hasActiveVisitToday: false,
    },
  ];

  const filteredPatients = authorizedPatients.filter((p) => {
    const q = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.uhid.toLowerCase().includes(q) ||
      p.locality.toLowerCase().includes(q)
    );
  });

  const activePatient = authorizedPatients.find((p) => p.id === selectedPatientId) || authorizedPatients[0];

  return (
    <div className="space-y-8 text-left font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-clinical-border">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-clinical-teal block mb-1">
            Clinical Governance &amp; EHR Access
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-deep-ink">
            Authorised Patient Records
          </h1>
          <p className="text-xs sm:text-sm text-clinical-slate mt-1">
            Role-based electronic health record directory for patients within your active clinical care relationship.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-clinical-slate absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by UHID, patient name, locality..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-clinical-border rounded-xl bg-white text-xs text-deep-ink placeholder:text-clinical-slate/60 focus:outline-hidden focus:ring-1 focus:ring-clinical-teal"
          />
        </div>
      </div>

      {/* Role-Based Access Governance Notice */}
      <div className="p-4 bg-soft-sage/40 border border-clinical-teal/30 rounded-xl flex items-start gap-3 text-xs text-clinical-slate">
        <ShieldCheck className="w-5 h-5 text-clinical-teal shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <span className="font-bold text-deep-ink block">
            Role-Based Clinical Boundary Active (DPDP &amp; OCI Standard):
          </span>
          <span>
            You are permitted access exclusively to patients who have active clinical visits assigned to your dispatch route or have provided formal proxy consent. Unrestricted browsing of unassigned patient records is strictly prohibited and logged to the central audit stream.
          </span>
        </div>
      </div>

      {/* Main Grid: Patient List & Detailed EHR Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Patient List */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-bold text-clinical-slate uppercase tracking-wider px-1">
            Authorized Patients ({filteredPatients.length})
          </div>

          <div className="space-y-2.5">
            {filteredPatients.map((pat) => {
              const isSelected = pat.id === activePatient.id;
              return (
                <div
                  key={pat.id}
                  onClick={() => setSelectedPatientId(pat.id)}
                  className={cn(
                    "p-4 rounded-xl border text-left cursor-pointer transition-all space-y-2",
                    isSelected
                      ? "bg-white border-clinical-teal ring-2 ring-clinical-teal/20 shadow-subtle"
                      : "bg-white/80 border-clinical-border hover:bg-white"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-deep-ink text-sm">{pat.name}</span>
                    <Badge variant={pat.hasActiveVisitToday ? "amber" : "neutral"} size="sm">
                      {pat.hasActiveVisitToday ? "Visit Today" : "In Roster"}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-clinical-slate font-mono">
                    <span>{pat.uhid}</span>
                    <span>&bull;</span>
                    <span className="font-sans">{pat.age}Y &bull; {pat.gender}</span>
                  </div>

                  <div className="text-[11px] text-clinical-slate truncate">
                    {pat.locality}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Detailed EHR Snapshot for Selected Patient */}
        <div className="lg:col-span-7 bg-white border border-clinical-border rounded-2xl p-6 sm:p-7 space-y-6 shadow-subtle">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-clinical-border">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-deep-ink">{activePatient.name}</h2>
                <Badge variant="clinical" size="sm">Authorized Access</Badge>
              </div>
              <div className="text-xs text-clinical-slate mt-0.5">
                UHID: <span className="font-mono text-deep-ink font-semibold">{activePatient.uhid}</span> &bull; {activePatient.locality}
              </div>
            </div>

            <Link
              href={`/practitioner/examine/apt-2026-1028`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-warm-ivory bg-deep-ink hover:bg-clinical-teal transition-colors self-start sm:self-auto"
            >
              <span>Examine Patient</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Demographic & Contact Details */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-warm-neutral/30 border border-clinical-border/60">
              <span className="text-[10px] font-bold text-clinical-slate uppercase block">Age / Gender</span>
              <span className="font-bold text-deep-ink">{activePatient.age} Y / {activePatient.gender}</span>
            </div>
            <div className="p-3 rounded-lg bg-warm-neutral/30 border border-clinical-border/60">
              <span className="text-[10px] font-bold text-clinical-slate uppercase block">Direct Phone</span>
              <span className="font-bold text-deep-ink">{activePatient.phone}</span>
            </div>
            <div className="p-3 rounded-lg bg-warm-neutral/30 border border-clinical-border/60 col-span-2 sm:col-span-1">
              <span className="text-[10px] font-bold text-clinical-slate uppercase block">Care Basis</span>
              <span className="font-semibold text-clinical-teal text-[11px] truncate block">{activePatient.careRelationshipReason}</span>
            </div>
          </div>

          {/* Chronic Ophthalmic History */}
          <div className="space-y-2 text-xs">
            <span className="font-bold text-deep-ink uppercase text-[10px] tracking-wider text-clinical-slate block">
              Active Ophthalmic History &amp; Disclosures
            </span>
            <div className="flex flex-wrap gap-2">
              {activePatient.chronicConditions.map((cond, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-warm-neutral/40 border border-clinical-border text-deep-ink font-medium"
                >
                  {cond}
                </span>
              ))}
            </div>
          </div>

          {/* Last Documented Findings */}
          <div className="p-4 rounded-xl bg-warm-neutral/20 border border-clinical-border space-y-2 text-xs">
            <div className="flex items-center justify-between text-deep-ink font-bold">
              <div className="flex items-center gap-2">
                <History className="w-4 h-4 text-clinical-teal" />
                <span>Last Encounter Findings ({activePatient.lastEncounterDate})</span>
              </div>
            </div>
            <p className="text-clinical-slate text-xs leading-relaxed">
              {activePatient.lastEncounterFindings}
            </p>
          </div>

          {/* Longitudinal History Summary */}
          {activePatient.id === "pat-krishnamurthy-704" && (
            <div className="space-y-3 pt-2 border-t border-clinical-border/60 text-xs">
              <span className="font-bold text-deep-ink uppercase text-[10px] tracking-wider text-clinical-slate block">
                Archived Encounter Records ({demoEncounters.length})
              </span>
              <div className="p-3 rounded-lg bg-white border border-clinical-border flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-bold text-deep-ink">Comprehensive Bedside Visit &amp; Tonometry</div>
                  <div className="text-[11px] text-clinical-slate">
                    18 Mar 2026 &bull; Recorded by Priya Sharma, B.Optom &bull; Verified by Dr. Ananya Rao
                  </div>
                </div>
                <Badge variant="clinical" size="sm">Countersigned</Badge>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
