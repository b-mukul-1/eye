"use client";

import React, { useState } from "react";
import Link from "next/link";
import { EditorialHeading, SectionLabel, LeadParagraph } from "@/components/ui/Typography";
import { Badge, ClinicalStatusBadge } from "@/components/ui/Badge";
import {
  FileText,
  Eye,
  Activity,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ContinuityOfCare() {
  const [activeTab, setActiveTab] = useState<"prescription" | "iop" | "report">("prescription");

  return (
    <section className="py-24 bg-warm-neutral/30 border-b border-clinical-border font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 text-left">
          <SectionLabel className="mb-3">Longitudinal Patient Records</SectionLabel>
          <EditorialHeading as="h2" serifAccent="across every visit.">
            Continuity of clinical records,
          </EditorialHeading>
          <LeadParagraph className="mt-4">
            Eye care is not a one-off transaction. Maintaining an organized, cumulative record of
            refractive shifts, intraocular pressure baselines, and ophthalmologist reviews allows
            clinicians to catch subtle progressive changes over years.
          </LeadParagraph>
        </div>

        {/* Tasteful Interface Preview (Clearly Labeled as Demonstration) */}
        <div className="bg-white border border-clinical-border rounded-2xl shadow-elevated overflow-hidden text-left">
          {/* Top Interface Header & Demo Indicator */}
          <div className="bg-deep-ink px-6 py-4 flex flex-wrap items-center justify-between gap-4 text-warm-ivory">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-clinical-teal flex items-center justify-center font-bold text-xs">
                AK
              </div>
              <div>
                <div className="text-sm font-bold">Anand Krishnamurthy (Age 68)</div>
                <div className="text-[11px] text-warm-ivory/60">
                  Patient ID: OCU-70421 &bull; Diagnostic History: Glaucoma Observation & Presbyopia
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="amber" size="sm">
                Demonstration Record
              </Badge>
              <Link
                href="/patient/dashboard"
                className="text-xs text-subtle-amber hover:underline flex items-center gap-1 font-medium"
              >
                <span>Launch Patient Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="px-6 py-3 border-b border-clinical-border bg-warm-neutral/20 flex flex-wrap gap-2 text-xs font-medium">
            <button
              onClick={() => setActiveTab("prescription")}
              className={cn(
                "px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5",
                activeTab === "prescription"
                  ? "bg-deep-ink text-warm-ivory shadow-xs"
                  : "bg-white text-clinical-slate hover:bg-soft-sage/40 border border-clinical-border"
              )}
            >
              <Eye className="w-3.5 h-3.5 text-clinical-teal" />
              <span>Refractive Prescription History</span>
            </button>

            <button
              onClick={() => setActiveTab("iop")}
              className={cn(
                "px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5",
                activeTab === "iop"
                  ? "bg-deep-ink text-warm-ivory shadow-xs"
                  : "bg-white text-clinical-slate hover:bg-soft-sage/40 border border-clinical-border"
              )}
            >
              <Activity className="w-3.5 h-3.5 text-clinical-teal" />
              <span>Intraocular Pressure (IOP) Log</span>
            </button>

            <button
              onClick={() => setActiveTab("report")}
              className={cn(
                "px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5",
                activeTab === "report"
                  ? "bg-deep-ink text-warm-ivory shadow-xs"
                  : "bg-white text-clinical-slate hover:bg-soft-sage/40 border border-clinical-border"
              )}
            >
              <FileText className="w-3.5 h-3.5 text-clinical-teal" />
              <span>Verified Ophthalmic Report</span>
            </button>
          </div>

          {/* Tab 1: Refractive Prescription History */}
          {activeTab === "prescription" && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold text-deep-ink">Refraction & Spectacle History</h4>
                  <p className="text-xs text-clinical-slate">
                    Demonstration of longitudinal refractive stability across 2 sequential home visits.
                  </p>
                </div>
                <ClinicalStatusBadge status="completed" />
              </div>

              {/* Refraction Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-clinical-border bg-warm-neutral/30 text-clinical-slate font-semibold uppercase text-[10px] tracking-wider">
                      <th className="py-2.5 px-3">Examination Date</th>
                      <th className="py-2.5 px-3">Eye</th>
                      <th className="py-2.5 px-3">Sphere (SPH)</th>
                      <th className="py-2.5 px-3">Cylinder (CYL)</th>
                      <th className="py-2.5 px-3">Axis</th>
                      <th className="py-2.5 px-3">Add</th>
                      <th className="py-2.5 px-3">Best Corrected Acuity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-clinical-border text-deep-ink">
                    <tr className="bg-white">
                      <td className="py-3 px-3 font-medium">14 Oct 2026 (Home Visit)</td>
                      <td className="py-3 px-3 font-semibold text-clinical-teal">OD (Right)</td>
                      <td className="py-3 px-3">+1.50 DS</td>
                      <td className="py-3 px-3">-0.75 DC</td>
                      <td className="py-3 px-3">85&deg;</td>
                      <td className="py-3 px-3">+2.25 D</td>
                      <td className="py-3 px-3 font-semibold">6/6 (Snellen)</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-3 font-medium">14 Oct 2026 (Home Visit)</td>
                      <td className="py-3 px-3 font-semibold text-clinical-teal">OS (Left)</td>
                      <td className="py-3 px-3">+1.75 DS</td>
                      <td className="py-3 px-3">-0.50 DC</td>
                      <td className="py-3 px-3">95&deg;</td>
                      <td className="py-3 px-3">+2.25 D</td>
                      <td className="py-3 px-3 font-semibold">6/6 (Snellen)</td>
                    </tr>
                    <tr className="bg-warm-neutral/20 text-clinical-slate">
                      <td className="py-3 px-3 font-medium">18 Mar 2026 (Prior Visit)</td>
                      <td className="py-3 px-3">OD (Right)</td>
                      <td className="py-3 px-3">+1.25 DS</td>
                      <td className="py-3 px-3">-0.75 DC</td>
                      <td className="py-3 px-3">85&deg;</td>
                      <td className="py-3 px-3">+2.00 D</td>
                      <td className="py-3 px-3">6/7.5 (Snellen)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-soft-sage/30 border border-clinical-border rounded-lg p-3.5 text-xs text-clinical-slate flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-clinical-teal shrink-0 mt-0.5" />
                <span>
                  <strong>Clinical Note:</strong> A mild +0.25 D shift in reading addition was noted
                  and verified. Distance astigmatic axis remains stable.
                </span>
              </div>
            </div>
          )}

          {/* Tab 2: Intraocular Pressure (IOP) Log */}
          {activeTab === "iop" && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold text-deep-ink">Intraocular Pressure Monitoring</h4>
                  <p className="text-xs text-clinical-slate">
                    Calibrated rebound tonometry records across scheduled quarterly reviews.
                  </p>
                </div>
                <Badge variant="clinical" size="sm">
                  Within Target Range (&le;18 mmHg)
                </Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-warm-neutral/30 border border-clinical-border rounded-xl p-4">
                  <span className="text-[10px] font-semibold uppercase text-clinical-slate block mb-1">
                    Visit 1: 18 Nov 2025
                  </span>
                  <div className="text-xl font-bold text-deep-ink">15.4 / 16.1 mmHg</div>
                  <span className="text-[11px] text-clinical-slate">OD / OS (Calibrated Rebound)</span>
                </div>

                <div className="bg-warm-neutral/30 border border-clinical-border rounded-xl p-4">
                  <span className="text-[10px] font-semibold uppercase text-clinical-slate block mb-1">
                    Visit 2: 18 Mar 2026
                  </span>
                  <div className="text-xl font-bold text-deep-ink">14.8 / 15.2 mmHg</div>
                  <span className="text-[11px] text-clinical-slate">OD / OS (Calibrated Rebound)</span>
                </div>

                <div className="bg-soft-sage/40 border border-clinical-teal/30 rounded-xl p-4">
                  <span className="text-[10px] font-semibold uppercase text-clinical-teal block mb-1">
                    Visit 3: 14 Oct 2026 (Latest)
                  </span>
                  <div className="text-xl font-bold text-deep-ink">14.2 / 14.6 mmHg</div>
                  <span className="text-[11px] text-clinical-slate">OD / OS (Calibrated Rebound)</span>
                </div>
              </div>

              <p className="text-xs text-clinical-slate leading-relaxed">
                Consistent pressure stability observed following topical hypotensive drop adherence.
                Next scheduled quarterly home pressure screening due in January 2027.
              </p>
            </div>
          )}

          {/* Tab 3: Verified Ophthalmic Report */}
          {activeTab === "report" && (
            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold text-deep-ink">Dual-Tier Clinical Assessment</h4>
                  <p className="text-xs text-clinical-slate">
                    Countersigned report by Dr. K. Ramanathan, Senior Consulting Ophthalmologist.
                  </p>
                </div>
                <Badge variant="clinical" size="sm">
                  MD Countersigned
                </Badge>
              </div>

              <div className="bg-white border border-clinical-border rounded-xl p-5 space-y-3 text-xs leading-relaxed">
                <div>
                  <strong className="text-deep-ink block mb-0.5">Slit-Lamp Anterior Segment:</strong>
                  <span className="text-clinical-slate">
                    Cornea clear bilaterally without staining. Anterior chambers deep and quiet (van
                    Herick Grade 4). Early nuclear sclerosis (LOCS Grade 1.5) noted bilaterally,
                    consistent with age; does not warrant surgical intervention at this stage.
                  </span>
                </div>

                <div className="pt-2 border-t border-clinical-border">
                  <strong className="text-deep-ink block mb-0.5">Posterior Pole & Fundus Photography:</strong>
                  <span className="text-clinical-slate">
                    Optic disc margins sharp. Cup-to-disc ratio evaluated at 0.45 OD and 0.40 OS. No
                    drusen or microaneurysms detected at macula.
                  </span>
                </div>

                <div className="pt-2 border-t border-clinical-border">
                  <strong className="text-deep-ink block mb-0.5">Clinical Follow-up Protocol:</strong>
                  <span className="text-clinical-slate">
                    Continue prescribed timolol 0.5% drops once daily in both eyes. Routine home
                    tonometry review in 3 months. No hospital referral required at present.
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Footer Notice */}
          <div className="px-6 py-3 bg-warm-neutral/30 border-t border-clinical-border flex flex-wrap items-center justify-between gap-3 text-xs text-clinical-slate">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-clinical-teal" />
              <span>Synthetic demonstration data displayed for illustration.</span>
            </span>
            <span className="text-[11px] text-clinical-slate">
              Real patients access encrypted PDF exports with biometric authentication in Phase 2.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
