import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/common/BrandLogo";
import { ShieldCheck, HeartHandshake, FileText, Phone, Mail, MapPin, Download } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-deep-ink text-warm-ivory/90 font-sans border-t border-clinical-border transition-colors">
      {/* Clinical Scope & Ethics Bar */}
      <div className="border-b border-white/10 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div className="flex items-start gap-3.5">
            <ShieldCheck className="w-6 h-6 text-clinical-teal shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-warm-ivory text-base mb-1">
                Clinical Governance & Dual-Tier Review
              </h4>
              <p className="text-warm-ivory/70 text-xs leading-relaxed">
                Home examinations are conducted by qualified optometrists. Clinical findings,
                fundus photographs, and refractions are reviewed and countersigned by consulting
                ophthalmologists.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <HeartHandshake className="w-6 h-6 text-subtle-amber shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-warm-ivory text-base mb-1">
                Transparent Boundaries & Tertiary Care
              </h4>
              <p className="text-warm-ivory/70 text-xs leading-relaxed">
                We clearly delineate home-appropriate examinations from specialized clinic and
                hospital care. Surgical interventions, acute trauma, and invasive lasers are
                referred directly to accredited tertiary facilities.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <FileText className="w-6 h-6 text-soft-sage shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-warm-ivory text-base mb-1">
                Data Privacy & Record Continuity
              </h4>
              <p className="text-warm-ivory/70 text-xs leading-relaxed">
                Patient records, visual acuity histories, and intraocular pressure logs are stored
                with patient-consented access control, ensuring continuous eye-health history.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <BrandLogo variant="inverted" size="md" showTagline={false} />
            <p className="text-warm-ivory/70 text-sm leading-relaxed max-w-sm">
              Thoughtful clinical eye care delivered to residences, specialized clinic suites,
              and workplaces, starting with pilot routes in select Delhi NCR localities.
            </p>
            <div className="pt-2 text-xs text-warm-ivory/60 space-y-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-clinical-teal" />
                <span>Patient Support: {siteConfig.contact.phoneDesk}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-clinical-teal" />
                <span>Clinical Inquiries: {siteConfig.contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-subtle-amber" />
                <span>Corporate Inquiries: {siteConfig.contact.corporateEmail}</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="/downloads/ocuhome-corporate-eye-camps-brochure.pdf"
                download="ocuhome-corporate-eye-camps-brochure.pdf"
                className="inline-flex items-center gap-1.5 text-xs text-subtle-amber hover:underline font-medium"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Corporate Brochure (4-Page PDF)</span>
              </a>
            </div>
          </div>

          {/* Specialized Services */}
          <div className="space-y-3 text-left">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-warm-ivory/50">
              Specialized Care
            </h5>
            <ul className="space-y-2 text-xs text-warm-ivory/75">
              <li>
                <Link href="/services/amblyopia-vision-therapy" className="hover:text-warm-ivory transition-colors">
                  Amblyopia & Vision Therapy
                </Link>
              </li>
              <li>
                <Link href="/services/contact-lenses" className="hover:text-warm-ivory transition-colors">
                  Contact Lens Fitting
                </Link>
              </li>
              <li>
                <Link href="/services/prosthetic-eye" className="hover:text-warm-ivory transition-colors">
                  Prosthetic Eye Services
                </Link>
              </li>
              <li>
                <Link href="/services/low-vision" className="hover:text-warm-ivory transition-colors">
                  Low Vision Care
                </Link>
              </li>
              <li>
                <Link href="/corporate-camps" className="hover:text-warm-ivory transition-colors text-subtle-amber">
                  Corporate Eye Camps
                </Link>
              </li>
              <li>
                <Link href="/book-specialist" className="hover:text-warm-ivory transition-colors text-clinical-teal font-medium">
                  &rarr; Book a Specialist
                </Link>
              </li>
            </ul>
          </div>

          {/* Home Diagnostic Services */}
          <div className="space-y-3 text-left">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-warm-ivory/50">
              Home Diagnostics
            </h5>
            <ul className="space-y-2 text-xs text-warm-ivory/75">
              <li>
                <Link href="/services#refraction" className="hover:text-warm-ivory transition-colors">
                  General Refraction
                </Link>
              </li>
              <li>
                <Link href="/services#diabetic-retinopathy" className="hover:text-warm-ivory transition-colors">
                  Diabetic Retinal Triage
                </Link>
              </li>
              <li>
                <Link href="/services#glaucoma" className="hover:text-warm-ivory transition-colors">
                  Glaucoma & IOP Screening
                </Link>
              </li>
              <li>
                <Link href="/services#cataract" className="hover:text-warm-ivory transition-colors">
                  Cataract Staging
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-warm-ivory transition-colors text-clinical-teal font-medium">
                  &rarr; Book Home Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Operating Cities in India */}
          <div className="space-y-3 text-left">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-warm-ivory/50">
              Cities in India
            </h5>
            <ul className="space-y-2 text-xs text-warm-ivory/70">
              {siteConfig.citiesServed.map((city) => (
                <li key={city.name} className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-subtle-amber shrink-0" />
                    {city.name}
                  </span>
                  <span className="text-[10px] text-warm-ivory/40">{city.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Prototype Notice */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-warm-ivory/50">
          <div>
            &copy; 2026 OcuHome Clinical Eye Care Systems Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-subtle-amber/90">
              Phase 1 Frontend Prototype (Demonstration Mode)
            </span>
            <Link href="/about" className="hover:text-warm-ivory">
              Clinical Guidelines
            </Link>
            <Link href="/contact" className="hover:text-warm-ivory">
              Emergency Escalation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
