"use client";

import React, { useState } from "react";
import { demoEncounters } from "@/data/patient-demo";
import { Badge } from "@/components/ui/Badge";
import {
  FileText,
  Download,
  CheckCircle2,
  Eye,
  ShieldCheck,
  Glasses,
  Activity,
  Layers,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function PatientRecordsPage() {
  const [viewMode, setViewMode] = useState<"plain" | "clinical">("plain");
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const encounter = demoEncounters[0]; // 18 Mar 2026 comprehensive visit

  const handleSimulateDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <div className="space-y-8 text-left font-sans">
      {/* Header with Mode Toggle */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-clinical-border">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-clinical-teal block mb-1">
            Electronic Health Records
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-deep-ink">
            My Eye-Care Records
          </h1>
          <p className="text-xs sm:text-sm text-clinical-slate mt-1">
            Verified spectacle prescriptions, intraocular eye pressure readings, and fundus examination reports.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2 bg-warm-neutral/60 p-1 rounded-xl border border-clinical-border">
          <button
            type="button"
            onClick={() => setViewMode("plain")}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5",
              viewMode === "plain"
                ? "bg-white text-deep-ink shadow-xs"
                : "text-clinical-slate hover:text-deep-ink"
            )}
          >
            <Sparkles className="w-3.5 h-3.5 text-clinical-teal" />
            Plain Language
          </button>
          <button
            type="button"
            onClick={() => setViewMode("clinical")}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5",
              viewMode === "clinical"
                ? "bg-deep-ink text-warm-ivory shadow-xs"
                : "text-clinical-slate hover:text-deep-ink"
            )}
          >
            <Activity className="w-3.5 h-3.5" />
            Clinical EHR Metrics
          </button>
        </div>
      </div>

      {downloadSuccess && (
        <div className="p-4 bg-soft-sage/60 border border-clinical-teal/30 rounded-xl text-xs text-clinical-teal font-medium flex items-center gap-2 animate-fade-in">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>
            Spectacle prescription card (PDF) downloaded successfully. Sample schema signed by Dr. Ananya Rao (Demonstration Profile).
          </span>
        </div>
      )}

      {/* 1. ACTIVE SPECTACLE PRESCRIPTION CARD */}
      <section className="bg-white border border-clinical-teal/40 rounded-2xl p-6 sm:p-8 shadow-subtle space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-clinical-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-soft-sage text-clinical-teal flex items-center justify-center border border-clinical-border">
              <Glasses className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-deep-ink">Active Spectacle Prescription</h2>
                <Badge variant="clinical" size="sm">Valid</Badge>
              </div>
              <p className="text-xs text-clinical-slate">
                Issued 18 Mar 2026 &bull; Recommended renewal: October 2026
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSimulateDownload}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-deep-ink bg-warm-neutral/40 hover:bg-warm-neutral border border-clinical-border transition-colors self-start sm:self-auto"
          >
            <Download className="w-3.5 h-3.5 text-clinical-teal" />
            Download Prescription Card (PDF)
          </button>
        </div>

        {/* Prescription Values Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="bg-warm-neutral/40 text-clinical-slate font-bold uppercase text-[10px] tracking-wider border-b border-clinical-border">
                <th className="py-2.5 px-4">Eye</th>
                <th className="py-2.5 px-4">Sphere (SPH)</th>
                <th className="py-2.5 px-4">Cylinder (CYL)</th>
                <th className="py-2.5 px-4">Axis</th>
                <th className="py-2.5 px-4">Near Add (ADD)</th>
                <th className="py-2.5 px-4">Visual Acuity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-clinical-border text-deep-ink font-medium">
              <tr>
                <td className="py-3 px-4 font-bold text-deep-ink">
                  Right Eye <span className="text-clinical-slate text-[10px] font-normal">(OD)</span>
                </td>
                <td className="py-3 px-4">{encounter.prescribedSpectacles?.sphereOD} DS</td>
                <td className="py-3 px-4">{encounter.prescribedSpectacles?.cylOD} DC</td>
                <td className="py-3 px-4">{encounter.prescribedSpectacles?.axisOD}&deg;</td>
                <td className="py-3 px-4">{encounter.prescribedSpectacles?.addOD} D</td>
                <td className="py-3 px-4 text-clinical-teal font-bold">{encounter.refraction.od.vaBestCorrected}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-deep-ink">
                  Left Eye <span className="text-clinical-slate text-[10px] font-normal">(OS)</span>
                </td>
                <td className="py-3 px-4">{encounter.prescribedSpectacles?.sphereOS} DS</td>
                <td className="py-3 px-4">{encounter.prescribedSpectacles?.cylOS} DC</td>
                <td className="py-3 px-4">{encounter.prescribedSpectacles?.axisOS}&deg;</td>
                <td className="py-3 px-4">{encounter.prescribedSpectacles?.addOS} D</td>
                <td className="py-3 px-4 text-clinical-teal font-bold">{encounter.refraction.os.vaBestCorrected}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Prescription Footer Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-clinical-border/60 text-xs">
          <div className="bg-warm-neutral/30 p-3 rounded-lg border border-clinical-border/60">
            <span className="text-clinical-slate text-[10px] font-bold uppercase tracking-wider block">
              Pupillary Distance (PD)
            </span>
            <span className="font-bold text-deep-ink text-sm">
              {encounter.prescribedSpectacles?.pupillaryDistanceMm} mm (Binocular)
            </span>
          </div>

          <div className="bg-warm-neutral/30 p-3 rounded-lg border border-clinical-border/60">
            <span className="text-clinical-slate text-[10px] font-bold uppercase tracking-wider block">
              Lens Design Recommendation
            </span>
            <span className="font-bold text-deep-ink text-sm">
              Wide-corridor Progressive Lenses
            </span>
          </div>

          <div className="bg-warm-neutral/30 p-3 rounded-lg border border-clinical-border/60">
            <span className="text-clinical-slate text-[10px] font-bold uppercase tracking-wider block">
              Verified By
            </span>
            <span className="font-bold text-deep-ink text-sm">
              {encounter.reviewingOphthalmologist?.name}
            </span>
          </div>
        </div>
      </section>

      {/* 2. CLINICAL ENCOUNTER DETAILS & MEASUREMENTS */}
      <section className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-clinical-border">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-deep-ink">
                Comprehensive Bedside Examination Report
              </h2>
              <Badge variant="clinical" size="sm">Countersigned</Badge>
            </div>
            <p className="text-xs text-clinical-slate mt-0.5">
              Encounter Date: 18 Mar 2026 &bull; Location: Hauz Khas Enclave (Home Visit)
            </p>
          </div>

          <div className="text-xs text-clinical-slate text-right">
            <div>Recording Clinician: <strong>{encounter.recordingOptometrist.name}</strong></div>
            <div className="text-[10px]">Reg: {encounter.recordingOptometrist.registrationNumber}</div>
          </div>
        </div>

        {/* Plain Language vs Clinical Presentation */}
        {viewMode === "plain" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-warm-neutral/30 border border-clinical-border/80 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-deep-ink font-bold text-sm">
                <Eye className="w-4 h-4 text-clinical-teal" />
                <span>Reading & Distance Clarity</span>
              </div>
              <p className="text-xs text-clinical-slate leading-relaxed">
                With your current glasses, your vision reaches <strong>6/6 in both eyes</strong>. Mild eye strain was caused by outdated reading strength, which is corrected in the updated prescription above.
              </p>
              <div className="text-[11px] font-semibold text-clinical-teal">Status: Sharp & Well-corrected</div>
            </div>

            <div className="bg-warm-neutral/30 border border-clinical-border/80 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-deep-ink font-bold text-sm">
                <Activity className="w-4 h-4 text-clinical-teal" />
                <span>Internal Eye Pressure</span>
              </div>
              <p className="text-xs text-clinical-slate leading-relaxed">
                Measured at <strong>14.8 mmHg in your right eye</strong> and <strong>15.2 mmHg in your left eye</strong>. Both readings remain completely within the healthy target range (10–21 mmHg).
              </p>
              <div className="text-[11px] font-semibold text-clinical-teal">Status: Normal & Stable</div>
            </div>

            <div className="bg-warm-neutral/30 border border-clinical-border/80 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-deep-ink font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-clinical-teal" />
                <span>Optic Nerve & Retina</span>
              </div>
              <p className="text-xs text-clinical-slate leading-relaxed">
                Portable non-mydriatic camera images confirmed healthy optic nerve margins and no sign of diabetic retinal leakage or macular swelling.
              </p>
              <div className="text-[11px] font-semibold text-clinical-teal">Status: Clear & Healthy</div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Ophthalmic Measurements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Intraocular Pressure (Tonometry) */}
              <div className="bg-warm-neutral/20 border border-clinical-border rounded-xl p-4 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-deep-ink flex items-center gap-2">
                  <Activity className="w-4 h-4 text-clinical-teal" />
                  Intraocular Pressure (Rebound Tonometry)
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-lg border border-clinical-border">
                    <span className="text-clinical-slate text-[10px] uppercase font-bold block">Right Eye (OD)</span>
                    <span className="text-lg font-bold text-deep-ink">{encounter.tonometry.od.pressureMmHg}</span>
                    <span className="text-xs text-clinical-slate ml-1">mmHg</span>
                    <div className="text-[10px] text-clinical-teal font-semibold mt-1">Normal (Target &lt;18)</div>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-clinical-border">
                    <span className="text-clinical-slate text-[10px] uppercase font-bold block">Left Eye (OS)</span>
                    <span className="text-lg font-bold text-deep-ink">{encounter.tonometry.os.pressureMmHg}</span>
                    <span className="text-xs text-clinical-slate ml-1">mmHg</span>
                    <div className="text-[10px] text-clinical-teal font-semibold mt-1">Normal (Target &lt;18)</div>
                  </div>
                </div>
                <div className="text-[10px] text-clinical-slate">
                  Method: {encounter.tonometry.od.method} &bull; Timestamp: {encounter.tonometry.od.timeOfMeasurement}
                </div>
              </div>

              {/* Slit-Lamp Biomicroscopy */}
              <div className="bg-warm-neutral/20 border border-clinical-border rounded-xl p-4 space-y-2 text-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-deep-ink flex items-center gap-2">
                  <Eye className="w-4 h-4 text-clinical-teal" />
                  Anterior Segment Biomicroscopy
                </h4>
                <div className="space-y-1.5 text-clinical-slate">
                  <div><strong className="text-deep-ink">Cornea:</strong> {encounter.slitLamp.cornea}</div>
                  <div><strong className="text-deep-ink">Anterior Chamber:</strong> {encounter.slitLamp.anteriorChamber}</div>
                  <div><strong className="text-deep-ink">Iris & Pupil:</strong> {encounter.slitLamp.irisPupil}</div>
                  <div><strong className="text-deep-ink">Lens Clarity:</strong> {encounter.slitLamp.crystallineLens}</div>
                </div>
              </div>
            </div>

            {/* Posterior Segment Fundus & Retinal Imaging */}
            <div className="bg-warm-neutral/20 border border-clinical-border rounded-xl p-4 space-y-2 text-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-deep-ink flex items-center gap-2">
                <Layers className="w-4 h-4 text-clinical-teal" />
                Posterior Segment &amp; Fundus Observations
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-clinical-slate">
                <div className="bg-white p-3 rounded-lg border border-clinical-border">
                  <span className="text-[10px] font-bold uppercase text-clinical-slate block">Cup-to-Disc Ratio (C:D)</span>
                  <div className="font-bold text-deep-ink mt-0.5">OD: {encounter.fundus.opticDiscCupRatio.od} &bull; OS: {encounter.fundus.opticDiscCupRatio.os}</div>
                  <div className="text-[10px] text-clinical-teal mt-0.5">Symmetrical, well-perfused</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-clinical-border sm:col-span-2">
                  <span className="text-[10px] font-bold uppercase text-clinical-slate block">Retinal Macula & Vasculature</span>
                  <div className="text-deep-ink mt-0.5">{encounter.fundus.maculaObservation}</div>
                  <div className="text-[10px] text-clinical-slate mt-0.5">{encounter.fundus.vascularCondition}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Countersignature & Doctor's Note */}
        <div className="p-4 bg-soft-sage/40 border border-clinical-teal/30 rounded-xl space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-deep-ink font-bold">
              <ShieldCheck className="w-4 h-4 text-clinical-teal" />
              <span>Ophthalmologist Verification & Sign-off</span>
            </div>
            <span className="text-[10px] text-clinical-slate">
              {encounter.reviewingOphthalmologist?.signOffTimestamp}
            </span>
          </div>
          <p className="text-deep-ink/90 italic">
            &ldquo;{encounter.reviewingOphthalmologist?.mdComments}&rdquo;
          </p>
          <div className="text-[11px] text-clinical-teal font-semibold pt-1">
            {encounter.reviewingOphthalmologist?.name} ({encounter.reviewingOphthalmologist?.registrationNumber})
          </div>
        </div>
      </section>

      {/* 3. UPLOADED DOCUMENTS & ATTACHMENTS */}
      <section className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-8 space-y-5 shadow-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-clinical-border">
          <div>
            <h2 className="text-lg font-bold text-deep-ink">Previous Documents &amp; Uploads</h2>
            <p className="text-xs text-clinical-slate mt-0.5">
              Securely stored historical eye-care records, diagnostic scans, and clinical letters.
            </p>
          </div>

          <div className="text-xs text-clinical-slate">
            2 documents archived
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-clinical-border bg-warm-neutral/20 flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-clinical-teal shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-deep-ink">Diabetic Retinal Fundus Screening Report</div>
                <div className="text-clinical-slate text-[11px] mt-0.5">PDF &bull; 14 Nov 2025 &bull; 1.4 MB</div>
                <div className="text-[10px] text-clinical-teal mt-1">Verified: Negative for diabetic retinopathy</div>
              </div>
            </div>
            <button
              type="button"
              onClick={handleSimulateDownload}
              className="text-clinical-slate hover:text-deep-ink p-1.5 rounded-lg hover:bg-warm-neutral transition-colors"
              title="Download file"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 rounded-xl border border-clinical-border bg-warm-neutral/20 flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-clinical-teal shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-deep-ink">Historical Lens Dispensing Card (Titan Eye+)</div>
                <div className="text-clinical-slate text-[11px] mt-0.5">Scanned PDF &bull; 10 Jul 2024 &bull; 820 KB</div>
                <div className="text-[10px] text-clinical-slate mt-1">Previous baseline spectacle power</div>
              </div>
            </div>
            <button
              type="button"
              onClick={handleSimulateDownload}
              className="text-clinical-slate hover:text-deep-ink p-1.5 rounded-lg hover:bg-warm-neutral transition-colors"
              title="Download file"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
