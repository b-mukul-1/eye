"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DemoModeBanner } from "@/components/common/DemoModeBanner";
import { siteConfig } from "@/config/site";
import { demoPatient } from "@/data/patient-demo";
import {
  User,
  Calendar,
  FileText,
  Clock,
  Users,
  LogOut,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Eye,
} from "lucide-react";
import { cn } from "@/lib/utils";

function PatientNav() {
  const pathname = usePathname();

  const navItems = [
    { label: "Overview", href: "/patient/dashboard", icon: Eye },
    { label: "Appointments", href: "/patient/appointments", icon: Calendar },
    { label: "My Eye Records", href: "/patient/records", icon: FileText },
    { label: "Care Timeline", href: "/patient/timeline", icon: Clock },
    { label: "Profile & Family", href: "/patient/profile", icon: Users },
  ];

  return (
    <nav className="flex items-center gap-1 overflow-x-auto border-t border-clinical-border/60 py-1 text-xs">
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
                ? "bg-deep-ink text-warm-ivory font-bold shadow-xs"
                : "text-clinical-slate hover:text-deep-ink hover:bg-warm-neutral/40"
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

export default function PatientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-warm-ivory flex flex-col font-sans text-deep-ink">
      <DemoModeBanner currentRole="patient" />

      {/* Patient Portal Header Bar */}
      <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-clinical-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand Logo & Portal Name */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-9 h-9 rounded-lg bg-deep-ink text-warm-ivory flex items-center justify-center font-serif text-xl font-bold group-hover:bg-clinical-teal transition-colors">
                  O
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-base font-bold text-deep-ink leading-tight">
                    {siteConfig.name}
                  </span>
                  <span className="text-[10px] font-semibold text-clinical-teal uppercase tracking-wider">
                    Patient Portal
                  </span>
                </div>
              </Link>
            </div>

            {/* Patient Context Identity Badge */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-3 text-right">
                <div className="w-9 h-9 rounded-full bg-soft-sage text-clinical-teal flex items-center justify-center font-bold text-xs border border-clinical-border">
                  AK
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-deep-ink">{demoPatient.fullName}</div>
                  <div className="text-[10px] text-clinical-slate">{demoPatient.uhid}</div>
                </div>
              </div>

              <Link
                href="/login"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-deep-ink/80 hover:text-deep-ink hover:bg-warm-neutral/40 border border-clinical-border transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sign Out</span>
              </Link>
            </div>
          </div>

          {/* Navigation Tabs wrapped in Suspense */}
          <React.Suspense fallback={<div className="h-9" />}>
            <PatientNav />
          </React.Suspense>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      {/* Portal Footer Notice */}
      <footer className="bg-warm-neutral/30 border-t border-clinical-border py-6 text-xs text-clinical-slate font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-clinical-teal" />
            <span>Digital Personal Data Protection (DPDP) consent logged. Records accessible only by patient and authorized caregivers.</span>
          </div>
          <div>
            Need assistance? Patient Desk: <strong>+91 11 4000 8900</strong> (Mon&ndash;Sat, 9 AM&ndash;6 PM)
          </div>
        </div>
      </footer>
    </div>
  );
}
