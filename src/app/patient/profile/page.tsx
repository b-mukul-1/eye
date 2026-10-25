"use client";

import React, { useState } from "react";
import { demoPatient } from "@/data/patient-demo";
import { FamilyMember } from "@/types/clinical";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  User,
  Users,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  ShieldAlert,
  AlertCircle,
  CheckCircle2,
  Lock,
  Plus,
  Trash2,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function PatientProfilePage() {
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>(demoPatient.familyMembers);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberRelation, setNewMemberRelation] = useState("Son");
  const [newMemberPhone, setNewMemberPhone] = useState("");
  const [consentChecked, setConsentChecked] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const handleToggleCaregiver = (id: string) => {
    setFamilyMembers((prev) =>
      prev.map((m) => {
        if (m.id === id) {
          const nextState = !m.isAuthorizedCaregiver;
          return {
            ...m,
            isAuthorizedCaregiver: nextState,
            consentGrantedDate: nextState ? "Updated Today" : "Revoked",
          };
        }
        return m;
      })
    );
    setFeedbackMessage("Caregiver access permissions updated successfully.");
    setTimeout(() => setFeedbackMessage(null), 3000);
  };

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMemberName || !newMemberPhone || !consentChecked) return;

    const newMember: FamilyMember = {
      id: `fam-${Date.now()}`,
      name: newMemberName,
      relationship: newMemberRelation,
      age: 32,
      phone: newMemberPhone,
      isAuthorizedCaregiver: true,
      consentGrantedDate: "Today (DPDP Compliant)",
    };

    setFamilyMembers([...familyMembers, newMember]);
    setShowAddModal(false);
    setNewMemberName("");
    setNewMemberPhone("");
    setConsentChecked(false);
    setFeedbackMessage(`Authorized family member ${newMember.name} added.`);
    setTimeout(() => setFeedbackMessage(null), 3500);
  };

  return (
    <div className="space-y-8 text-left font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-clinical-border">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-clinical-teal block mb-1">
            Personal &amp; Access Settings
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-deep-ink">
            Profile &amp; Family Caregivers
          </h1>
          <p className="text-xs sm:text-sm text-clinical-slate mt-1">
            Maintain your verified demographic information, ocular baseline history, and authorized family proxies.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-deep-ink bg-warm-neutral/40 hover:bg-warm-neutral border border-clinical-border transition-colors self-start md:self-auto"
        >
          <Plus className="w-3.5 h-3.5 text-clinical-teal" />
          Add Family Member
        </button>
      </div>

      {feedbackMessage && (
        <div className="p-4 bg-soft-sage/60 border border-clinical-teal/30 rounded-xl text-xs text-clinical-teal font-medium flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{feedbackMessage}</span>
        </div>
      )}

      {/* 1. PATIENT DEMOGRAPHICS & CONTACT INFORMATION */}
      <section className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-subtle">
        <div className="flex items-center justify-between pb-4 border-b border-clinical-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-soft-sage text-clinical-teal flex items-center justify-center font-bold text-sm border border-clinical-border">
              AK
            </div>
            <div>
              <h2 className="text-lg font-bold text-deep-ink">{demoPatient.fullName}</h2>
              <div className="text-xs text-clinical-slate">
                Unique Health ID (UHID): <strong className="text-deep-ink font-mono">{demoPatient.uhid}</strong>
              </div>
            </div>
          </div>
          <Badge variant="clinical" size="sm">Verified Patient</Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="bg-warm-neutral/30 p-3.5 rounded-xl border border-clinical-border/60">
            <span className="text-clinical-slate text-[10px] font-bold uppercase tracking-wider block">Age & Gender</span>
            <span className="text-deep-ink font-bold text-sm mt-0.5 block">{demoPatient.age} Years &bull; Male</span>
          </div>

          <div className="bg-warm-neutral/30 p-3.5 rounded-xl border border-clinical-border/60">
            <span className="text-clinical-slate text-[10px] font-bold uppercase tracking-wider block">Phone Number</span>
            <div className="flex items-center gap-1.5 font-bold text-deep-ink text-sm mt-0.5">
              <Phone className="w-3.5 h-3.5 text-clinical-teal shrink-0" />
              <span>{demoPatient.phone}</span>
            </div>
          </div>

          <div className="bg-warm-neutral/30 p-3.5 rounded-xl border border-clinical-border/60">
            <span className="text-clinical-slate text-[10px] font-bold uppercase tracking-wider block">Email Address</span>
            <div className="flex items-center gap-1.5 font-bold text-deep-ink text-sm mt-0.5 truncate">
              <Mail className="w-3.5 h-3.5 text-clinical-teal shrink-0" />
              <span className="truncate">{demoPatient.email}</span>
            </div>
          </div>

          <div className="bg-warm-neutral/30 p-3.5 rounded-xl border border-clinical-border/60">
            <span className="text-clinical-slate text-[10px] font-bold uppercase tracking-wider block">Residential Address</span>
            <div className="flex items-start gap-1.5 font-medium text-deep-ink text-xs mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-clinical-teal shrink-0 mt-0.5" />
              <span>{demoPatient.address}, PIN {demoPatient.pincode}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OCULAR BASELINE & CURRENT MEDICATIONS */}
      <section className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-8 space-y-5 shadow-subtle">
        <h2 className="text-lg font-bold text-deep-ink pb-3 border-b border-clinical-border">
          Clinical Baseline Disclosures
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
          <div className="space-y-2">
            <span className="font-bold text-deep-ink uppercase text-[10px] tracking-wider text-clinical-slate block">
              Known Eye &amp; Systemic Conditions
            </span>
            <ul className="space-y-1.5">
              {demoPatient.knownConditions.map((cond, i) => (
                <li key={i} className="p-2.5 rounded-lg bg-warm-neutral/30 border border-clinical-border text-deep-ink">
                  {cond}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-deep-ink uppercase text-[10px] tracking-wider text-clinical-slate block">
              Current Ophthalmic Medications
            </span>
            <ul className="space-y-1.5">
              {demoPatient.currentDrops.map((drop, i) => (
                <li key={i} className="p-2.5 rounded-lg bg-soft-sage/40 border border-clinical-teal/30 text-deep-ink">
                  {drop}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-deep-ink uppercase text-[10px] tracking-wider text-clinical-slate block">
              Drug Allergies
            </span>
            <div className="p-2.5 rounded-lg bg-warm-neutral/30 border border-clinical-border text-deep-ink">
              {demoPatient.allergies[0]}
            </div>
            <p className="text-[11px] text-clinical-slate pt-1">
              Any adverse reaction to mydriatic eye drops (tropicamide or phenylephrine) should be flagged prior to home dilation.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FAMILY-MEMBER MANAGEMENT WITH STATUTORY CONSENT */}
      <section className="bg-white border border-clinical-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-clinical-border">
          <div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-clinical-teal" />
              <h2 className="text-lg font-bold text-deep-ink">Authorized Family Caregivers</h2>
            </div>
            <p className="text-xs text-clinical-slate mt-0.5">
              Family members permitted to coordinate visits, view verified prescriptions, and speak with attending clinicians.
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-clinical-teal">
            <ShieldCheck className="w-4 h-4" />
            <span className="font-semibold">DPDP Consent Governed</span>
          </div>
        </div>

        <div className="space-y-4">
          {familyMembers.map((member) => (
            <div
              key={member.id}
              className={cn(
                "p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all",
                member.isAuthorizedCaregiver
                  ? "bg-soft-sage/30 border-clinical-teal/30"
                  : "bg-warm-neutral/20 border-clinical-border opacity-70"
              )}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-deep-ink text-sm">{member.name}</span>
                  <Badge
                    variant={member.isAuthorizedCaregiver ? "clinical" : "neutral"}
                    size="sm"
                  >
                    {member.isAuthorizedCaregiver ? "Caregiver Access Active" : "Authorization Paused"}
                  </Badge>
                </div>
                <div className="text-xs text-clinical-slate">
                  {member.relationship} &bull; Age {member.age} &bull; {member.phone}
                </div>
                <div className="text-[10px] text-clinical-slate">
                  Consent Status: <strong>{member.consentGrantedDate}</strong>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => handleToggleCaregiver(member.id)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors",
                    member.isAuthorizedCaregiver
                      ? "text-alert-red hover:bg-alert-red/10 border-alert-red/30"
                      : "text-clinical-teal hover:bg-soft-sage border-clinical-teal/30"
                  )}
                >
                  {member.isAuthorizedCaregiver ? "Revoke Access" : "Grant Authorization"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Privacy & Legal Notice */}
        <div className="p-4 bg-warm-neutral/30 border border-clinical-border rounded-xl flex items-start gap-3 text-xs text-clinical-slate">
          <Lock className="w-4 h-4 text-clinical-teal shrink-0 mt-0.5" />
          <span>
            Under the Digital Personal Data Protection Act (DPDP) and clinical EHR standards, granting caregiver access empowers the named individual to view diagnostic findings. You may revoke consent at any time without impacting your clinical care.
          </span>
        </div>
      </section>

      {/* Add Family Member Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-deep-ink/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-clinical-border rounded-2xl max-w-md w-full p-6 sm:p-8 space-y-5 shadow-elevated">
            <div className="flex items-center justify-between pb-3 border-b border-clinical-border">
              <h3 className="text-lg font-bold text-deep-ink">Add Family Caregiver</h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="text-clinical-slate hover:text-deep-ink text-sm font-semibold"
              >
                &times; Close
              </button>
            </div>

            <form onSubmit={handleAddMember} className="space-y-4 text-xs">
              <div>
                <label className="block text-deep-ink font-semibold mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Krishnamurthy"
                  value={newMemberName}
                  onChange={(e) => setNewMemberName(e.target.value)}
                  className="w-full px-3 py-2 border border-clinical-border rounded-lg bg-white text-xs text-deep-ink placeholder:text-clinical-slate/60"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-deep-ink font-semibold mb-1">Relationship</label>
                  <select
                    value={newMemberRelation}
                    onChange={(e) => setNewMemberRelation(e.target.value)}
                    className="w-full px-3 py-2 border border-clinical-border rounded-lg bg-white text-xs text-deep-ink"
                  >
                    <option>Son</option>
                    <option>Daughter</option>
                    <option>Spouse</option>
                    <option>Brother / Sister</option>
                    <option>Legal Guardian</option>
                  </select>
                </div>

                <div>
                  <label className="block text-deep-ink font-semibold mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98111 22334"
                    value={newMemberPhone}
                    onChange={(e) => setNewMemberPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-clinical-border rounded-lg bg-white text-xs text-deep-ink placeholder:text-clinical-slate/60"
                  />
                </div>
              </div>

              {/* Explicit DPDP Consent */}
              <div className="p-3 bg-warm-neutral/40 border border-clinical-border rounded-lg space-y-2">
                <label className="flex items-start gap-2.5 cursor-pointer text-[11px] text-deep-ink font-medium leading-relaxed">
                  <input
                    type="checkbox"
                    checked={consentChecked}
                    onChange={(e) => setConsentChecked(e.target.checked)}
                    className="w-4 h-4 rounded border-clinical-border text-clinical-teal focus:ring-clinical-teal mt-0.5"
                    required
                  />
                  <span>
                    I confirm that I explicitly grant consent for this family member to access my diagnostic records, view prescriptions, and receive clinical dispatch updates on my behalf.
                  </span>
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-clinical-slate hover:text-deep-ink"
                >
                  Cancel
                </button>
                <Button variant="primary" size="sm" type="submit" disabled={!consentChecked}>
                  Authorize Caregiver
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
