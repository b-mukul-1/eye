"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import {
  Menu,
  X,
  ChevronDown,
  User,
  ShieldCheck,
  Stethoscope,
  Eye,
  Building,
  HeartHandshake,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [authDropdownOpen, setAuthDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-warm-ivory/95 backdrop-blur-md border-b border-clinical-border transition-all font-sans">
      {/* Top Clinical Scope & Area Notice Strip */}
      <div className="bg-warm-neutral/60 border-b border-clinical-border py-1.5 px-4 text-xs font-sans text-deep-ink/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-clinical-teal animate-pulse" />
            <span className="font-semibold text-deep-ink">Clinical Scope:</span>
            <span className="text-clinical-slate text-[11px] sm:text-xs">
              Home examinations active in select Delhi NCR localities &bull; Regional expansion planned
            </span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-[11px] text-clinical-slate">
            <span>Care Coordination: Monday &ndash; Saturday (9 AM &ndash; 6 PM IST)</span>
          </div>
        </div>
      </div>

      {/* Main Single-Line Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* 1. OcuHome Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-lg bg-deep-ink text-warm-ivory flex items-center justify-center font-serif text-2xl font-bold tracking-tight group-hover:bg-clinical-teal transition-colors">
              O
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xl font-bold font-sans tracking-tight text-deep-ink leading-tight">
                {siteConfig.name}
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-clinical-slate uppercase font-sans">
                Clinical Eye Care
              </span>
            </div>
          </Link>

          {/* 2. Desktop Navigation Links (Single Line, Deliberate Spacing) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2.5 text-[13px] font-medium"
          >
            {/* Services with Structured Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className={cn(
                  "flex items-center gap-1 px-3 py-2 rounded-lg transition-colors",
                  pathname.startsWith("/services")
                    ? "text-clinical-teal font-semibold"
                    : "text-deep-ink/80 hover:text-deep-ink hover:bg-warm-neutral/50"
                )}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute left-0 mt-1 w-[520px] bg-white border border-clinical-border rounded-2xl shadow-card p-5 z-50 text-left grid grid-cols-2 gap-6 animate-fade-in">
                  {/* Category 1: Home Diagnostics */}
                  <div className="space-y-2.5">
                    <div className="text-[10px] font-bold text-clinical-slate uppercase tracking-wider border-b border-clinical-border pb-1.5 flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-clinical-teal" />
                      <span>Home Diagnostics</span>
                    </div>
                    <ul className="space-y-1.5 text-xs">
                      <li>
                        <Link
                          href="/services#refraction"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="block p-1.5 rounded-lg hover:bg-warm-neutral/40 transition-colors"
                        >
                          <div className="font-semibold text-deep-ink">General Eye Refraction</div>
                          <div className="text-[11px] text-clinical-slate">Bedside trial lens assessment</div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services#diabetic-retinopathy"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="block p-1.5 rounded-lg hover:bg-warm-neutral/40 transition-colors"
                        >
                          <div className="font-semibold text-deep-ink">Diabetic Retinal Triage</div>
                          <div className="text-[11px] text-clinical-slate">Portable fundus imaging</div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services#glaucoma"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="block p-1.5 rounded-lg hover:bg-warm-neutral/40 transition-colors"
                        >
                          <div className="font-semibold text-deep-ink">Glaucoma Follow-Up &amp; IOP</div>
                          <div className="text-[11px] text-clinical-slate">Calibrated rebound pressure monitoring</div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services#cataract"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="block p-1.5 rounded-lg hover:bg-warm-neutral/40 transition-colors"
                        >
                          <div className="font-semibold text-deep-ink">Cataract Staging</div>
                          <div className="text-[11px] text-clinical-slate">LOCS III opacity grading</div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Category 2: Specialized Care */}
                  <div className="space-y-2.5">
                    <div className="text-[10px] font-bold text-clinical-slate uppercase tracking-wider border-b border-clinical-border pb-1.5 flex items-center gap-1.5">
                      <Stethoscope className="w-3.5 h-3.5 text-clinical-teal" />
                      <span>Specialized Care</span>
                    </div>
                    <ul className="space-y-1.5 text-xs">
                      <li>
                        <Link
                          href="/services/amblyopia-vision-therapy"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="block p-1.5 rounded-lg hover:bg-warm-neutral/40 transition-colors"
                        >
                          <div className="font-semibold text-deep-ink">Amblyopia &amp; Vision Therapy</div>
                          <div className="text-[11px] text-clinical-slate">Pediatric &amp; binocular rehabilitation</div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/contact-lenses"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="block p-1.5 rounded-lg hover:bg-warm-neutral/40 transition-colors"
                        >
                          <div className="font-semibold text-deep-ink">Specialized Contact Lenses</div>
                          <div className="text-[11px] text-clinical-slate">Scleral &amp; keratoconus fitting</div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/prosthetic-eye"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="block p-1.5 rounded-lg hover:bg-warm-neutral/40 transition-colors"
                        >
                          <div className="font-semibold text-deep-ink">Prosthetic Eye Care</div>
                          <div className="text-[11px] text-clinical-slate">Custom ocular prostheses</div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/low-vision"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="block p-1.5 rounded-lg hover:bg-warm-neutral/40 transition-colors"
                        >
                          <div className="font-semibold text-deep-ink">Low Vision Rehabilitation</div>
                          <div className="text-[11px] text-clinical-slate">Optical aids &amp; magnification</div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-span-2 pt-2 border-t border-clinical-border flex items-center justify-between text-xs">
                    <Link
                      href="/for-families"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-clinical-slate hover:text-deep-ink font-medium"
                    >
                      For Families &amp; Aging Parents &rarr;
                    </Link>
                    <Link
                      href="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-clinical-teal font-semibold hover:underline"
                    >
                      View All Clinical Services &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Book a Specialist */}
            <Link
              href="/book-specialist"
              className={cn(
                "px-3 py-2 rounded-lg transition-colors whitespace-nowrap",
                pathname === "/book-specialist"
                  ? "text-clinical-teal font-semibold"
                  : "text-deep-ink/80 hover:text-deep-ink hover:bg-warm-neutral/50"
              )}
            >
              Book a Specialist
            </Link>

            {/* How It Works */}
            <Link
              href="/how-it-works"
              className={cn(
                "px-3 py-2 rounded-lg transition-colors whitespace-nowrap",
                pathname === "/how-it-works"
                  ? "text-clinical-teal font-semibold"
                  : "text-deep-ink/80 hover:text-deep-ink hover:bg-warm-neutral/50"
              )}
            >
              How It Works
            </Link>

            {/* Corporate Camps */}
            <Link
              href="/corporate-camps"
              className={cn(
                "px-3 py-2 rounded-lg transition-colors whitespace-nowrap",
                pathname === "/corporate-camps"
                  ? "text-clinical-teal font-semibold"
                  : "text-deep-ink/80 hover:text-deep-ink hover:bg-warm-neutral/50"
              )}
            >
              Corporate Camps
            </Link>

            {/* For Practitioners */}
            <Link
              href="/for-practitioners"
              className={cn(
                "px-3 py-2 rounded-lg transition-colors whitespace-nowrap",
                pathname === "/for-practitioners"
                  ? "text-clinical-teal font-semibold"
                  : "text-deep-ink/80 hover:text-deep-ink hover:bg-warm-neutral/50"
              )}
            >
              For Practitioners
            </Link>
          </nav>

          {/* 3. Right Action Items: One Restrained Secondary + One Clear Primary CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Restrained Secondary Action: Portal Login */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setAuthDropdownOpen(!authDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-deep-ink/80 hover:text-deep-ink hover:bg-warm-neutral/50 rounded-lg transition-colors border border-transparent hover:border-clinical-border"
                aria-expanded={authDropdownOpen}
                aria-haspopup="true"
              >
                <User className="w-3.5 h-3.5 text-clinical-teal" />
                <span>Portal Login</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {authDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-64 bg-white border border-clinical-border rounded-xl shadow-card py-2 z-50 text-left font-sans animate-fade-in"
                  onMouseLeave={() => setAuthDropdownOpen(false)}
                >
                  <div className="px-3 py-1.5 border-b border-clinical-border flex items-center justify-between">
                    <span className="text-[10px] font-bold text-clinical-slate uppercase tracking-wider">
                      Portal Access
                    </span>
                    <Link
                      href="/login"
                      onClick={() => setAuthDropdownOpen(false)}
                      className="text-[11px] text-clinical-teal font-semibold hover:underline"
                    >
                      Login Screen &rarr;
                    </Link>
                  </div>
                  <Link
                    href="/patient/dashboard"
                    onClick={() => setAuthDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-xs text-deep-ink hover:bg-soft-sage/40 transition-colors"
                  >
                    <User className="w-4 h-4 text-clinical-teal shrink-0" />
                    <div>
                      <div className="font-semibold">Patient Portal</div>
                      <div className="text-[10px] text-clinical-slate">View prescriptions &amp; reports</div>
                    </div>
                  </Link>
                  <Link
                    href="/practitioner/visits"
                    onClick={() => setAuthDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-xs text-deep-ink hover:bg-soft-sage/40 transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-clinical-teal shrink-0" />
                    <div>
                      <div className="font-semibold">Practitioner Docket</div>
                      <div className="text-[10px] text-clinical-slate">Assigned routes &amp; exam forms</div>
                    </div>
                  </Link>
                  <div className="mt-1 pt-1 border-t border-clinical-border px-3 py-1 flex items-center justify-between text-[11px]">
                    <Link
                      href="/login"
                      onClick={() => setAuthDropdownOpen(false)}
                      className="text-deep-ink hover:text-clinical-teal font-medium"
                    >
                      Sign In
                    </Link>
                    <span className="text-clinical-border">&bull;</span>
                    <Link
                      href="/register"
                      onClick={() => setAuthDropdownOpen(false)}
                      className="text-clinical-teal hover:underline font-semibold"
                    >
                      New Patient Register
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Clear Primary CTA Button (The sole prominent action) */}
            <Button href="/book" variant="primary" size="sm">
              Book a Home Visit
            </Button>
          </div>

          {/* 4. Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2.5">
            <Button href="/book" variant="primary" size="sm">
              Book Visit
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-deep-ink hover:bg-warm-neutral/60 rounded-lg transition-colors border border-clinical-border"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-warm-ivory border-b border-clinical-border px-4 pt-3 pb-6 space-y-4 animate-fade-in font-sans text-left">
          <div className="space-y-1">
            <Link
              href="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 px-4 rounded-xl bg-deep-ink text-warm-ivory text-sm font-bold shadow-xs"
            >
              Book a Home Visit
            </Link>

            <Link
              href="/book-specialist"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-sm font-semibold text-clinical-teal hover:bg-soft-sage/40 rounded-lg"
            >
              &rarr; Book a Specialist
            </Link>
          </div>

          <div className="pt-2 border-t border-clinical-border space-y-1 text-sm font-medium text-deep-ink">
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 hover:bg-warm-neutral/50 rounded-lg"
            >
              Clinical Services Overview
            </Link>

            <Link
              href="/how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 hover:bg-warm-neutral/50 rounded-lg"
            >
              How It Works
            </Link>

            <Link
              href="/corporate-camps"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 hover:bg-warm-neutral/50 rounded-lg"
            >
              Corporate Eye Camps
            </Link>

            <Link
              href="/for-families"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 hover:bg-warm-neutral/50 rounded-lg"
            >
              For Families &amp; Aging Parents
            </Link>

            <Link
              href="/for-practitioners"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 hover:bg-warm-neutral/50 rounded-lg"
            >
              For Practitioners
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 hover:bg-warm-neutral/50 rounded-lg"
            >
              Contact &amp; Emergency Guidance
            </Link>
          </div>

          <div className="pt-3 border-t border-clinical-border space-y-2">
            <div className="text-[10px] font-bold uppercase text-clinical-slate px-3 tracking-wider">
              Portals &amp; Demonstration
            </div>
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs font-bold text-clinical-teal hover:bg-soft-sage/40 rounded-lg"
            >
              &rarr; Portal Login (/login)
            </Link>
            <Link
              href="/patient/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs text-deep-ink hover:bg-soft-sage/40 rounded-lg"
            >
              &rarr; Patient Dashboard
            </Link>
            <Link
              href="/practitioner/visits"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs text-deep-ink hover:bg-soft-sage/40 rounded-lg"
            >
              &rarr; Practitioner Workspace
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
