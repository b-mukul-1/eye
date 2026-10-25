"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { demoPatient } from "@/data/patient-demo";
import { demoPractitioner, demoTodayVisits } from "@/data/practitioner-demo";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Stethoscope,
  Eye,
  Activity,
  Layers,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Save,
  ArrowLeft,
  FileCheck,
} from "lucide-react";

function PractitionerExamineContent() {
  const params = useParams();
  const visitId = (params?.visitId as string) || "apt-2026-1028";

  // Visit details
  const visit = demoTodayVisits.find((v) => v.id === visitId) || demoTodayVisits[0];

  // Clinical Examination Form State
  const [chiefComplaint, setChiefComplaint] = useState(
    "Quarterly IOP tonometry check and verification of updated reading prescription."
  );
  const [dropsTakenToday, setDropsTakenToday] = useState("yes");

  // Visual Acuity
  const [vaODUncorrected, setVaODUncorrected] = useState("6/18");
  const [vaOSUncorrected, setVaOSUncorrected] = useState("6/18");
  const [vaOUUncorrected, setVaOUUncorrected] = useState("6/12");

  // Refraction
  const [odSphere, setOdSphere] = useState("+1.50");
  const [odCyl, setOdCyl] = useState("-0.75");
  const [odAxis, setOdAxis] = useState("85");
  const [odAdd, setOdAdd] = useState("+2.25");
  const [odBcva, setOdBcva] = useState("6/6");

  const [osSphere, setOsSphere] = useState("+1.75");
  const [osCyl, setOsCyl] = useState("-0.50");
  const [osAxis, setOsAxis] = useState("95");
  const [osAdd, setOsAdd] = useState("+2.25");
  const [osBcva, setOsBcva] = useState("6/6");

  const [pdValue, setPdValue] = useState("63.0");

  // Tonometry
  const [tonometryMethod, setTonometryMethod] = useState("Rebound (Icare IC200)");
  const [iopOD, setIopOD] = useState("14.5");
  const [iopOS, setIopOS] = useState("15.0");

  // Slit-Lamp
  const [corneaOD, setCorneaOD] = useState("Clear, no epithelial staining");
  const [vanHerickGrade, setVanHerickGrade] = useState("Grade 4 (Wide open angle)");
  const [lensClarity, setLensClarity] = useState("Mild Nuclear Sclerosis Grade 1 (LOCS III)");

  // Fundus
  const [cdOD, setCdOD] = useState("0.45");
  const [cdOS, setCdOS] = useState("0.40");
  const [maculaNotes, setMaculaNotes] = useState("Sharp foveal reflex bilaterally. No diabetic exudates.");
  const [fundusUploaded, setFundusUploaded] = useState(true);

  // Assessment & Triage
  const [diagnosis, setDiagnosis] = useState(
    "Stable Glaucoma Suspect OD; Presbyopia with Astigmatism OU; No Diabetic Retinopathy."
  );
  const [triagePlan, setTriagePlan] = useState("md-review-required");
  const [patientAdvice, setPatientAdvice] = useState(
    "Continue morning Timolol 0.5% drops in right eye. Wear updated progressive spectacles for reading."
  );
  const [recallInterval, setRecallInterval] = useState("3 months (Next IOP due January 2027)");

  // Section Progress State & View Mode
  const [activeSection, setActiveSection] = useState<number>(1);
  const [viewMode, setViewMode] = useState<"step" | "all">("step");
  const [draftSavedAt, setDraftSavedAt] = useState<string>("Autosaved locally");
  const [showDraftFeedback, setShowDraftFeedback] = useState(false);

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSaveDraft = () => {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setDraftSavedAt(`Draft saved at ${time} IST`);
    setShowDraftFeedback(true);
    setTimeout(() => setShowDraftFeedback(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSaveSuccess(true);
    }, 1200);
  };

  const sections = [
    { num: 1, title: "1. Complaint & Drops", short: "History" },
    { num: 2, title: "2. Refraction & Acuity", short: "Refraction" },
    { num: 3, title: "3. Eye Pressure (IOP)", short: "Tonometry" },
    { num: 4, title: "4. Slit-Lamp & Fundus", short: "Biomicroscopy" },
    { num: 5, title: "5. Assessment & Sign-Off", short: "Assessment" },
  ];

  return (
    <div className="space-y-8 text-left font-sans">
      {/* Top Breadcrumb & Patient Context Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-clinical-border">
        <div className="flex items-center gap-3">
          <Link
            href="/practitioner/visits"
            className="p-2 rounded-lg bg-warm-neutral/40 hover:bg-warm-neutral border border-clinical-border text-deep-ink transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-clinical-teal">
                Active Bedside Encounter
              </span>
              <Badge variant="clinical" size="sm">In Progress</Badge>
            </div>
            <h1 className="text-2xl font-bold text-deep-ink">
              {visit.patientName}
            </h1>
            <div className="text-xs text-clinical-slate flex items-center gap-2 mt-0.5 font-mono">
              <span>UHID: {demoPatient.uhid}</span>
              <span>&bull;</span>
              <span className="font-sans">Age {visit.patientAge} &bull; Hauz Khas Enclave</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 text-xs">
          <div className="text-right hidden sm:block mr-2">
            <div className="font-bold text-deep-ink">{demoPractitioner.name}</div>
            <div className="text-clinical-slate text-[10px]">{draftSavedAt}</div>
          </div>

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleSaveDraft}
            icon={<Save className="w-3.5 h-3.5 text-clinical-teal" />}
          >
            Save Draft
          </Button>

          <Button
            type="submit"
            form="exam-form"
            variant="primary"
            size="sm"
            disabled={isSubmitting}
            icon={isSubmitting ? undefined : <FileCheck className="w-3.5 h-3.5" />}
          >
            {isSubmitting ? "Signing & Archiving..." : "Sign & Finalize Encounter"}
          </Button>
        </div>
      </div>

      {showDraftFeedback && (
        <div className="p-3 bg-soft-sage/60 border border-clinical-teal/30 rounded-xl text-xs text-clinical-teal font-medium flex items-center gap-2 animate-fade-in">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>Local draft updated. Changes preserved in component session cache.</span>
        </div>
      )}

      {/* Section Progress Stepper & Mode Switcher */}
      <div className="bg-white border border-clinical-border rounded-xl p-3 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs pb-1 md:pb-0">
          {sections.map((sec) => (
            <button
              key={sec.num}
              type="button"
              onClick={() => {
                setActiveSection(sec.num);
                if (viewMode === "all") setViewMode("step");
              }}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
                activeSection === sec.num
                  ? "bg-deep-ink text-warm-ivory shadow-xs"
                  : "bg-warm-neutral/30 text-clinical-slate hover:text-deep-ink hover:bg-warm-neutral/60"
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-clinical-teal/20 text-clinical-teal flex items-center justify-center text-[10px] font-bold">
                {sec.num}
              </span>
              <span>{sec.short}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 border-t md:border-t-0 pt-2 md:pt-0 border-clinical-border text-xs shrink-0">
          <span className="text-clinical-slate text-[11px]">View Mode:</span>
          <button
            type="button"
            onClick={() => setViewMode(viewMode === "step" ? "all" : "step")}
            className="px-2.5 py-1 rounded bg-warm-neutral/40 hover:bg-warm-neutral border border-clinical-border font-medium text-[11px] text-deep-ink transition-colors"
          >
            {viewMode === "step" ? "Switch to All Sections" : "Switch to Step Focus"}
          </button>
        </div>
      </div>

      {saveSuccess && (
        <div className="p-5 bg-soft-sage/60 border border-clinical-teal/40 rounded-2xl space-y-3 animate-fade-in text-xs">
          <div className="flex items-center gap-2 font-bold text-clinical-teal text-sm">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>Encounter Successfully Signed &amp; Dispatched to EHR</span>
          </div>
          <p className="text-deep-ink leading-relaxed">
            Record ID: <strong className="font-mono">ENC-2026-1028-KRISHNA</strong> &bull; Signed by{" "}
            <strong>{demoPractitioner.name}</strong> ({demoPractitioner.registrationNumber}) on{" "}
            <strong>{new Date().toLocaleTimeString()} IST</strong>.
            Forwarded to Dr. Ananya Rao for consulting tele-ophthalmology sign-off.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <Link
              href="/practitioner/visits"
              className="px-3.5 py-1.5 rounded-lg bg-deep-ink text-warm-ivory font-bold hover:bg-clinical-teal transition-colors"
            >
              Return to Route Schedule
            </Link>
            <Link
              href="/practitioner/reviews"
              className="px-3.5 py-1.5 rounded-lg bg-white border border-clinical-border text-deep-ink font-semibold hover:bg-warm-neutral transition-colors"
            >
              View in MD Queue
            </Link>
          </div>
        </div>
      )}

      {/* Main Examination Form */}
      <form id="exam-form" onSubmit={handleSubmit} className="space-y-8">
        {/* STEP 1: CHIEF COMPLAINT & MEDICATION COMPLIANCE */}
        {(viewMode === "all" || activeSection === 1) && (
          <section className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-7 space-y-4 shadow-subtle text-xs">
            <h2 className="text-base font-bold text-deep-ink flex items-center gap-2 pb-2 border-b border-clinical-border">
              <FileText className="w-4 h-4 text-clinical-teal" />
              1. Chief Complaint &amp; Medication Compliance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              <div className="md:col-span-8 space-y-1.5">
                <label className="block font-bold text-deep-ink">Chief Complaint &amp; Subjective Symptoms</label>
                <textarea
                  rows={2}
                  value={chiefComplaint}
                  onChange={(e) => setChiefComplaint(e.target.value)}
                  className="w-full px-3 py-2 border border-clinical-border rounded-lg bg-white text-xs text-deep-ink"
                />
              </div>

              <div className="md:col-span-4 space-y-2 bg-warm-neutral/30 p-3 rounded-xl border border-clinical-border">
                <label className="block font-bold text-deep-ink">Timolol 0.5% Drops Taken Today?</label>
                <div className="flex items-center gap-3 pt-1">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="dropsTaken"
                      value="yes"
                      checked={dropsTakenToday === "yes"}
                      onChange={(e) => setDropsTakenToday(e.target.value)}
                      className="text-clinical-teal focus:ring-clinical-teal"
                    />
                    <span>Yes (08:00 AM)</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="dropsTaken"
                      value="no"
                      checked={dropsTakenToday === "no"}
                      onChange={(e) => setDropsTakenToday(e.target.value)}
                      className="text-clinical-teal focus:ring-clinical-teal"
                    />
                    <span>No / Missed</span>
                  </label>
                </div>
                <span className="text-[10px] text-clinical-slate block">
                  Crucial for interpreting IOP tonometry timing.
                </span>
              </div>
            </div>

            {viewMode === "step" && (
              <div className="pt-4 border-t border-clinical-border flex items-center justify-end">
                <Button
                  type="button"
                  variant="primary"
                  size="sm"
                  onClick={() => setActiveSection(2)}
                >
                  Continue to Refraction &amp; Acuity &rarr;
                </Button>
              </div>
            )}
          </section>
        )}

        {/* STEP 2: VISUAL ACUITY & REFRACTION */}
        {(viewMode === "all" || activeSection === 2) && (
          <div className="space-y-6">
            {/* 2A. Visual Acuity */}
            <section className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-7 space-y-4 shadow-subtle text-xs">
              <h2 className="text-base font-bold text-deep-ink flex items-center gap-2 pb-2 border-b border-clinical-border">
                <Eye className="w-4 h-4 text-clinical-teal" />
                2A. Visual Acuity (Snellen Standard @ 6 Meters)
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3.5 rounded-xl border border-clinical-border bg-warm-neutral/20 space-y-1.5">
                  <span className="font-bold text-deep-ink block uppercase text-[10px] tracking-wider">
                    Right Eye (OD) Uncorrected
                  </span>
                  <select
                    value={vaODUncorrected}
                    onChange={(e) => setVaODUncorrected(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-clinical-border bg-white text-xs font-bold text-deep-ink"
                  >
                    <option>6/6</option>
                    <option>6/9</option>
                    <option>6/12</option>
                    <option>6/18</option>
                    <option>6/24</option>
                    <option>6/36</option>
                    <option>6/60</option>
                  </select>
                </div>

                <div className="p-3.5 rounded-xl border border-clinical-border bg-warm-neutral/20 space-y-1.5">
                  <span className="font-bold text-deep-ink block uppercase text-[10px] tracking-wider">
                    Left Eye (OS) Uncorrected
                  </span>
                  <select
                    value={vaOSUncorrected}
                    onChange={(e) => setVaOSUncorrected(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-clinical-border bg-white text-xs font-bold text-deep-ink"
                  >
                    <option>6/6</option>
                    <option>6/9</option>
                    <option>6/12</option>
                    <option>6/18</option>
                    <option>6/24</option>
                    <option>6/36</option>
                    <option>6/60</option>
                  </select>
                </div>

                <div className="p-3.5 rounded-xl border border-clinical-border bg-warm-neutral/20 space-y-1.5">
                  <span className="font-bold text-deep-ink block uppercase text-[10px] tracking-wider">
                    Binocular (OU)
                  </span>
                  <select
                    value={vaOUUncorrected}
                    onChange={(e) => setVaOUUncorrected(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-clinical-border bg-white text-xs font-bold text-deep-ink"
                  >
                    <option>6/6</option>
                    <option>6/9</option>
                    <option>6/12</option>
                    <option>6/18</option>
                  </select>
                </div>
              </div>
            </section>

            {/* 2B. Refraction */}
            <section className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-7 space-y-4 shadow-subtle text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-clinical-border">
                <h2 className="text-base font-bold text-deep-ink flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-clinical-teal" />
                  2B. Subjective &amp; Objective Refraction
                </h2>
                <span className="text-[10px] text-clinical-slate font-semibold uppercase">
                  Units: Dioptres (D) &bull; Degrees (&deg;)
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-warm-neutral/40 text-clinical-slate font-bold uppercase text-[10px] tracking-wider border-b border-clinical-border">
                      <th className="py-2.5 px-3">Eye</th>
                      <th className="py-2.5 px-3">Sphere (SPH)</th>
                      <th className="py-2.5 px-3">Cylinder (CYL)</th>
                      <th className="py-2.5 px-3">Axis</th>
                      <th className="py-2.5 px-3">Near Add</th>
                      <th className="py-2.5 px-3">Best Corrected VA</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-clinical-border">
                    {/* OD */}
                    <tr>
                      <td className="py-3 px-3 font-bold text-deep-ink">Right Eye (OD)</td>
                      <td className="py-3 px-3">
                        <input
                          type="text"
                          value={odSphere}
                          onChange={(e) => setOdSphere(e.target.value)}
                          className="w-20 px-2 py-1 rounded border border-clinical-border font-bold text-deep-ink"
                        />
                      </td>
                      <td className="py-3 px-3">
                        <input
                          type="text"
                          value={odCyl}
                          onChange={(e) => setOdCyl(e.target.value)}
                          className="w-20 px-2 py-1 rounded border border-clinical-border font-bold text-deep-ink"
                        />
                      </td>
                      <td className="py-3 px-3">
                        <input
                          type="text"
                          value={odAxis}
                          onChange={(e) => setOdAxis(e.target.value)}
                          className="w-16 px-2 py-1 rounded border border-clinical-border font-bold text-deep-ink"
                        />
                      </td>
                      <td className="py-3 px-3">
                        <input
                          type="text"
                          value={odAdd}
                          onChange={(e) => setOdAdd(e.target.value)}
                          className="w-20 px-2 py-1 rounded border border-clinical-border font-bold text-deep-ink"
                        />
                      </td>
                      <td className="py-3 px-3">
                        <input
                          type="text"
                          value={odBcva}
                          onChange={(e) => setOdBcva(e.target.value)}
                          className="w-20 px-2 py-1 rounded border border-clinical-border font-bold text-clinical-teal"
                        />
                      </td>
                    </tr>

                    {/* OS */}
                    <tr>
                      <td className="py-3 px-3 font-bold text-deep-ink">Left Eye (OS)</td>
                      <td className="py-3 px-3">
                        <input
                          type="text"
                          value={osSphere}
                          onChange={(e) => setOsSphere(e.target.value)}
                          className="w-20 px-2 py-1 rounded border border-clinical-border font-bold text-deep-ink"
                        />
                      </td>
                      <td className="py-3 px-3">
                        <input
                          type="text"
                          value={osCyl}
                          onChange={(e) => setOsCyl(e.target.value)}
                          className="w-20 px-2 py-1 rounded border border-clinical-border font-bold text-deep-ink"
                        />
                      </td>
                      <td className="py-3 px-3">
                        <input
                          type="text"
                          value={osAxis}
                          onChange={(e) => setOsAxis(e.target.value)}
                          className="w-16 px-2 py-1 rounded border border-clinical-border font-bold text-deep-ink"
                        />
                      </td>
                      <td className="py-3 px-3">
                        <input
                          type="text"
                          value={osAdd}
                          onChange={(e) => setOsAdd(e.target.value)}
                          className="w-20 px-2 py-1 rounded border border-clinical-border font-bold text-deep-ink"
                        />
                      </td>
                      <td className="py-3 px-3">
                        <input
                          type="text"
                          value={osBcva}
                          onChange={(e) => setOsBcva(e.target.value)}
                          className="w-20 px-2 py-1 rounded border border-clinical-border font-bold text-clinical-teal"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <span className="font-bold text-deep-ink">Pupillary Distance (PD):</span>
                <input
                  type="text"
                  value={pdValue}
                  onChange={(e) => setPdValue(e.target.value)}
                  className="w-20 px-2 py-1 rounded border border-clinical-border font-bold text-deep-ink"
                />
                <span className="text-clinical-slate">mm (Binocular)</span>
              </div>
            </section>

            {viewMode === "step" && (
              <div className="pt-2 flex items-center justify-between">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveSection(1)}
                >
                  &larr; Previous: Complaint &amp; Drops
                </Button>
                <Button
                  type="button"
                  variant="primary"
                  size="sm"
                  onClick={() => setActiveSection(3)}
                >
                  Continue to Tonometry &rarr;
                </Button>
              </div>
            )}
          </div>
        )}

        {/* STEP 3: INTRAOCULAR PRESSURE (TONOMETRY) */}
        {(viewMode === "all" || activeSection === 3) && (
          <section className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-7 space-y-4 shadow-subtle text-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-clinical-border">
              <h2 className="text-base font-bold text-deep-ink flex items-center gap-2">
                <Activity className="w-4 h-4 text-clinical-teal" />
                3. Tonometry &amp; Intraocular Pressure (IOP)
              </h2>
              <div className="flex items-center gap-2 text-clinical-slate text-[11px]">
                <span>Device:</span>
                <select
                  value={tonometryMethod}
                  onChange={(e) => setTonometryMethod(e.target.value)}
                  className="px-2 py-1 border border-clinical-border rounded bg-warm-neutral/30 text-xs font-semibold text-deep-ink"
                >
                  <option>Rebound (Icare IC200)</option>
                  <option>Non-Contact Air-Puff</option>
                  <option>Goldmann Applanation</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-4 rounded-xl border border-clinical-border bg-warm-neutral/20 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-deep-ink uppercase text-[10px] tracking-wider">
                    Right Eye (OD) IOP
                  </span>
                  <span className="text-[10px] text-clinical-teal font-semibold">Normal (10–21)</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={iopOD}
                    onChange={(e) => setIopOD(e.target.value)}
                    className="w-28 px-3 py-1.5 rounded-lg border border-clinical-border text-lg font-bold text-deep-ink bg-white"
                  />
                  <span className="font-bold text-clinical-slate text-sm">mmHg</span>
                </div>
                <span className="text-[10px] text-clinical-slate block">
                  Single-use sterile probe #P-4892 &bull; 6 consecutive readings averaged
                </span>
              </div>

              <div className="p-4 rounded-xl border border-clinical-border bg-warm-neutral/20 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-deep-ink uppercase text-[10px] tracking-wider">
                    Left Eye (OS) IOP
                  </span>
                  <span className="text-[10px] text-clinical-teal font-semibold">Normal (10–21)</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={iopOS}
                    onChange={(e) => setIopOS(e.target.value)}
                    className="w-28 px-3 py-1.5 rounded-lg border border-clinical-border text-lg font-bold text-deep-ink bg-white"
                  />
                  <span className="font-bold text-clinical-slate text-sm">mmHg</span>
                </div>
                <span className="text-[10px] text-clinical-slate block">
                  Single-use sterile probe #P-4893 &bull; 6 consecutive readings averaged
                </span>
              </div>
            </div>

            {viewMode === "step" && (
              <div className="pt-4 border-t border-clinical-border flex items-center justify-between">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveSection(2)}
                >
                  &larr; Previous: Acuity &amp; Refraction
                </Button>
                <Button
                  type="button"
                  variant="primary"
                  size="sm"
                  onClick={() => setActiveSection(4)}
                >
                  Continue to Slit-Lamp &amp; Fundus &rarr;
                </Button>
              </div>
            )}
          </section>
        )}

        {/* STEP 4: SLIT-LAMP & FUNDUS ATTACHMENTS */}
        {(viewMode === "all" || activeSection === 4) && (
          <section className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-7 space-y-4 shadow-subtle text-xs">
            <h2 className="text-base font-bold text-deep-ink flex items-center gap-2 pb-2 border-b border-clinical-border">
              <Layers className="w-4 h-4 text-clinical-teal" />
              4. Portable Slit-Lamp &amp; Digital Fundus Imaging
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Slit lamp */}
              <div className="space-y-3 p-4 rounded-xl border border-clinical-border bg-warm-neutral/20">
                <span className="font-bold text-deep-ink uppercase text-[10px] tracking-wider block">
                  Anterior Segment Findings
                </span>
                <div>
                  <label className="block text-clinical-slate text-[11px] mb-1">Anterior Chamber Angle:</label>
                  <select
                    value={vanHerickGrade}
                    onChange={(e) => setVanHerickGrade(e.target.value)}
                    className="w-full px-2 py-1.5 border border-clinical-border rounded-lg bg-white text-xs text-deep-ink"
                  >
                    <option>Grade 4 (Wide open angle &gt;1:1)</option>
                    <option>Grade 3 (Open angle 1:2 to 1:1)</option>
                    <option>Grade 2 (Narrow angle 1:4)</option>
                    <option>Grade 1 (Critically narrow &lt;1:4)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-clinical-slate text-[11px] mb-1">Crystalline Lens Clarity:</label>
                  <input
                    type="text"
                    value={lensClarity}
                    onChange={(e) => setLensClarity(e.target.value)}
                    className="w-full px-2 py-1.5 border border-clinical-border rounded-lg bg-white text-xs text-deep-ink"
                  />
                </div>

                <div>
                  <label className="block text-clinical-slate text-[11px] mb-1">Cornea &amp; Epithelium (OD/OS):</label>
                  <input
                    type="text"
                    value={corneaOD}
                    onChange={(e) => setCorneaOD(e.target.value)}
                    className="w-full px-2 py-1.5 border border-clinical-border rounded-lg bg-white text-xs text-deep-ink"
                  />
                </div>
              </div>

              {/* Fundus Camera */}
              <div className="space-y-3 p-4 rounded-xl border border-clinical-border bg-warm-neutral/20">
                <span className="font-bold text-deep-ink uppercase text-[10px] tracking-wider block">
                  Posterior Segment &amp; Fundus Upload
                </span>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-clinical-slate text-[11px] mb-1">Cup-to-Disc OD:</label>
                    <input
                      type="text"
                      value={cdOD}
                      onChange={(e) => setCdOD(e.target.value)}
                      className="w-full px-2 py-1.5 border border-clinical-border rounded-lg bg-white text-xs font-bold text-deep-ink"
                    />
                  </div>
                  <div>
                    <label className="block text-clinical-slate text-[11px] mb-1">Cup-to-Disc OS:</label>
                    <input
                      type="text"
                      value={cdOS}
                      onChange={(e) => setCdOS(e.target.value)}
                      className="w-full px-2 py-1.5 border border-clinical-border rounded-lg bg-white text-xs font-bold text-deep-ink"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-clinical-slate text-[11px] mb-1">Macula &amp; Foveal Reflex:</label>
                  <input
                    type="text"
                    value={maculaNotes}
                    onChange={(e) => setMaculaNotes(e.target.value)}
                    className="w-full px-2 py-1.5 border border-clinical-border rounded-lg bg-white text-xs text-deep-ink"
                  />
                </div>

                <div className="p-3 bg-white rounded-lg border border-clinical-teal/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-clinical-teal" />
                    <span className="text-[11px] font-semibold text-deep-ink">
                      Portable Fundus Image Synced (2.4 MB)
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFundusUploaded(!fundusUploaded)}
                    className="focus:outline-none"
                  >
                    <Badge variant={fundusUploaded ? "clinical" : "neutral"} size="sm">
                      {fundusUploaded ? "Attached" : "Attach"}
                    </Badge>
                  </button>
                </div>
              </div>
            </div>

            {viewMode === "step" && (
              <div className="pt-4 border-t border-clinical-border flex items-center justify-between">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveSection(3)}
                >
                  &larr; Previous: Tonometry (IOP)
                </Button>
                <Button
                  type="button"
                  variant="primary"
                  size="sm"
                  onClick={() => setActiveSection(5)}
                >
                  Continue to Assessment &amp; Sign-Off &rarr;
                </Button>
              </div>
            )}
          </section>
        )}

        {/* STEP 5: CLINICAL ASSESSMENT, TRIAGE & SIGN-OFF */}
        {(viewMode === "all" || activeSection === 5) && (
          <section className="bg-white border border-clinical-teal/40 rounded-2xl p-6 sm:p-7 space-y-5 shadow-subtle text-xs">
            <h2 className="text-base font-bold text-deep-ink flex items-center gap-2 pb-2 border-b border-clinical-border">
              <ShieldCheck className="w-4 h-4 text-clinical-teal" />
              5. Clinical Assessment &amp; Tele-Ophthalmology Triage
            </h2>

            <div className="space-y-3">
              <div>
                <label className="block font-bold text-deep-ink mb-1">Clinical Working Diagnosis</label>
                <input
                  type="text"
                  value={diagnosis}
                  onChange={(e) => setDiagnosis(e.target.value)}
                  className="w-full px-3 py-2 border border-clinical-border rounded-lg bg-white text-xs font-bold text-deep-ink"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-deep-ink mb-1">Follow-Up Triage Tier</label>
                  <select
                    value={triagePlan}
                    onChange={(e) => setTriagePlan(e.target.value)}
                    className="w-full px-3 py-2 border border-clinical-border rounded-lg bg-white text-xs text-deep-ink font-semibold"
                  >
                    <option value="routine">Routine Recall (Standard Optometry Check)</option>
                    <option value="md-review-required">
                      Forward to Ophthalmologist Review Queue (Digital Countersignature)
                    </option>
                    <option value="urgent-referral">
                      Urgent Secondary Eye Hospital Referral (Requires immediate transport)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-deep-ink mb-1">Recommended Recall Interval</label>
                  <input
                    type="text"
                    value={recallInterval}
                    onChange={(e) => setRecallInterval(e.target.value)}
                    className="w-full px-3 py-2 border border-clinical-border rounded-lg bg-white text-xs text-deep-ink"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-deep-ink mb-1">Patient Instructions &amp; Advice</label>
                <textarea
                  rows={2}
                  value={patientAdvice}
                  onChange={(e) => setPatientAdvice(e.target.value)}
                  className="w-full px-3 py-2 border border-clinical-border rounded-lg bg-white text-xs text-deep-ink"
                />
              </div>
            </div>

            {/* Audit Stamp & Sign-off Button */}
            <div className="pt-4 border-t border-clinical-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-0.5 text-clinical-slate text-[11px]">
                <div>
                  Recorded by: <strong className="text-deep-ink">{demoPractitioner.name}</strong>
                </div>
                <div>
                  Council Registration: <strong className="text-deep-ink">{demoPractitioner.registrationNumber}</strong>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {viewMode === "step" && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveSection(4)}
                  >
                    &larr; Previous Step
                  </Button>
                )}
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  icon={isSubmitting ? undefined : <FileCheck className="w-4 h-4" />}
                >
                  {isSubmitting ? "Signing Record..." : "Countersign & Complete Encounter"}
                </Button>
              </div>
            </div>
          </section>
        )}
      </form>
    </div>
  );
}

export default function PractitionerExaminePage() {
  return (
    <React.Suspense
      fallback={
        <div className="p-12 text-center text-xs text-clinical-slate flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-clinical-teal animate-pulse" />
          <span>Loading clinical examination workspace...</span>
        </div>
      }
    >
      <PractitionerExamineContent />
    </React.Suspense>
  );
}
