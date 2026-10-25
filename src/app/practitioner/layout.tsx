"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DemoModeBanner } from "@/components/common/DemoModeBanner";
import { siteConfig } from "@/config/site";
import { BrandLogoMark } from "@/components/common/BrandLogo";
import { demoPractitioner, demoOphthalmologist } from "@/data/practitioner-demo";
import {
  Calendar,
  ClipboardList,
  FileCheck,
  LogOut,
  ShieldCheck,
  Stethoscope,
  Truck,
} from "lucide-react";
import { cn } from "@/lib/utils";

function PractitionerNav({ activeRole }: { activeRole: "optometrist" | "ophthalmologist" }) {
  const pathname = usePathname();

  const navItems =
    activeRole === "optometrist"
      ? [
          { label: "Today's Route Schedule", href: "/practitioner/visits", icon: Calendar },
          { label: "Active Bedside Examination", href: "/practitioner/examine/apt-2026-1028", icon: Stethoscope },
          { label: "Authorized Patient Records", href: "/practitioner/records", icon: ClipboardList },
        ]
      : [
          { label: "MD Tele-Review Queue (Pending Countersignature)", href: "/practitioner/reviews", icon: FileCheck },
          { label: "Authorized Patient Records", href: "/practitioner/records", icon: ClipboardList },
          { label: "Diagnostic Protocol Reference", href: "/practitioner/examine/apt-2026-1028", icon: Stethoscope },
        ];

  return (
    <nav className="flex items-center gap-1 overflow-x-auto border-t border-white/10 py-1.5 text-xs">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-2 px-3.5 py-2 rounded-lg font-medium transition-colors shrink-0",
              isActive
                ? "bg-clinical-teal text-warm-ivory font-bold shadow-xs"
                : "text-warm-ivory/70 hover:text-warm-ivory hover:bg-white/10"
            )}
          >
            <Icon className="w-3.5 h-3.5" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export default function PractitionerLayout({ children }: { children: React.ReactNode }) {
  const [activeRole, setActiveRole] = useState<"optometrist" | "ophthalmologist">("optometrist");

  const currentProfile = activeRole === "optometrist" ? demoPractitioner : demoOphthalmologist;

  return (
    <div className="min-h-screen bg-warm-ivory flex flex-col font-sans text-deep-ink">
      <DemoModeBanner currentRole={activeRole} />

      {/* Practitioner Workspace Header */}
      <header className="sticky top-0 z-30 w-full bg-deep-ink text-warm-ivory border-b border-deep-ink/80 shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand Logo & Portal Name */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2 group">
                <BrandLogoMark variant="inverted" className="w-9 h-9" />
                <div className="flex flex-col text-left">
                  <span className="text-base font-bold text-warm-ivory leading-tight">
                    {siteConfig.name}
                  </span>
                  <span className="text-[10px] font-semibold text-soft-sage uppercase tracking-wider">
                    Clinical Workspace
                  </span>
                </div>
              </Link>
            </div>

            {/* Role Switcher & Active Clinician Badge */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Role Switcher for demonstration testing */}
              <div className="hidden md:flex items-center gap-1 bg-white/10 p-1 rounded-xl text-xs">
                <button
                  type="button"
                  onClick={() => setActiveRole("optometrist")}
                  className={cn(
                    "px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all",
                    activeRole === "optometrist"
                      ? "bg-clinical-teal text-warm-ivory"
                      : "text-warm-ivory/70 hover:text-warm-ivory"
                  )}
                >
                  Optometrist View
                </button>
                <button
                  type="button"
                  onClick={() => setActiveRole("ophthalmologist")}
                  className={cn(
                    "px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all",
                    activeRole === "ophthalmologist"
                      ? "bg-clinical-teal text-warm-ivory"
                      : "text-warm-ivory/70 hover:text-warm-ivory"
                  )}
                >
                  Ophthalmologist MD View
                </button>
              </div>

              {/* Clinician Identity Profile */}
              <div className="flex items-center gap-3 text-right">
                <div className="w-9 h-9 rounded-full bg-clinical-teal text-warm-ivory flex items-center justify-center font-bold text-xs border border-soft-sage/30">
                  {activeRole === "optometrist" ? "PS" : "AR"}
                </div>
                <div className="hidden sm:block text-left leading-tight">
                  <div className="text-xs font-bold text-warm-ivory">{currentProfile.name}</div>
                  <div className="text-[10px] text-warm-ivory/70 truncate max-w-[170px]">
                    {currentProfile.registrationNumber}
                  </div>
                </div>
              </div>

              <Link
                href="/login"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-warm-ivory/80 hover:text-warm-ivory hover:bg-white/10 border border-white/20 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sign Out</span>
              </Link>
            </div>
          </div>

          {/* Navigation Tabs wrapped in Suspense */}
          <React.Suspense fallback={<div className="h-9" />}>
            <PractitionerNav activeRole={activeRole} />
          </React.Suspense>
        </div>
      </header>

      {/* Operational Dispatch Status Strip */}
      <div className="w-full bg-warm-neutral/50 border-b border-clinical-border py-2 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-deep-ink font-semibold">
              <Truck className="w-3.5 h-3.5 text-clinical-teal" />
              <span>Assigned Unit:</span>
              <span className="text-clinical-slate font-normal">{currentProfile.assignedKitId}</span>
            </div>
            <span className="text-clinical-border">&bull;</span>
            <div className="flex items-center gap-1.5 text-deep-ink font-semibold">
              <span className="w-2 h-2 rounded-full bg-clinical-teal animate-pulse" />
              <span>Shift Status:</span>
              <span className="text-clinical-teal">{currentProfile.activeShiftStatus}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-clinical-slate text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-clinical-teal" />
            <span>Authorized Care Relationship: <strong>{currentProfile.patientsInCareRelationshipCount} Patients</strong> Assigned</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Practitioner Footer */}
      <footer className="w-full bg-white border-t border-clinical-border py-6 text-xs text-clinical-slate text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            &copy; 2026 {siteConfig.name} Clinical Health Network &bull; Clinical Portal v1.4
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Illustrative Demonstration Workspace</span>
            <span>&bull;</span>
            <span className="text-clinical-teal font-semibold">Privacy-by-Design Architecture &bull; DPDP &amp; ABDM Preparedness</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
