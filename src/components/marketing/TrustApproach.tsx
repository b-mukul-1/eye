import React from "react";
import { Home, UserCheck, FileCheck, Stethoscope, Clock, ShieldAlert } from "lucide-react";
import { EditorialHeading, SectionLabel, LeadParagraph } from "@/components/ui/Typography";

const benefits = [
  {
    icon: Home,
    title: "Care at Home When Appropriate",
    description:
      "Avoid traveling, congested hospital waiting lounges, and parking stress. Thorough examinations occur quietly at home in familiar lighting.",
  },
  {
    icon: UserCheck,
    title: "Qualified Eye-Care Professionals",
    description:
      "Every visit is conducted by a university-trained, verified optometrist equipped with hospital-calibrated, sanitized diagnostic instruments.",
  },
  {
    icon: FileCheck,
    title: "Clear, Longitudinal Records",
    description:
      "Detailed subjective refraction, slit-lamp notes, and digital fundus captures are securely logged so you never lose track of your eye history.",
  },
  {
    icon: Stethoscope,
    title: "Dual-Tier Ophthalmologist Review",
    description:
      "Optometrist records and retinal images are evaluated by consulting ophthalmologists to validate refractions and detect early asymptomatic concerns.",
  },
  {
    icon: Clock,
    title: "Careful Follow-Up Coordination",
    description:
      "We remind you of subsequent follow-ups for diabetic checks, glaucoma IOP monitoring, and prescription updates without automated marketing pressure.",
  },
  {
    icon: ShieldAlert,
    title: "Ethical Tertiary Hospital Referrals",
    description:
      "When surgical interventions, cataract extractions, or acute retinal therapies are needed, patients are triaged promptly to accredited hospitals.",
  },
];

export function TrustApproach() {
  return (
    <section className="py-20 bg-warm-ivory border-b border-clinical-border font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 text-left">
          <SectionLabel className="mb-3">Practical Care Philosophy</SectionLabel>
          <EditorialHeading as="h2" serifAccent="anchored in patient comfort.">
            Medical rigor,
          </EditorialHeading>
          <LeadParagraph className="mt-4">
            We built this service around genuine clinical utility. We do not claim that every eye
            condition can be solved at home—we focus on delivering accurate, compassionate primary
            eye examinations and clear diagnostic pathways.
          </LeadParagraph>
        </div>

        {/* 6 Practical Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/80 border border-clinical-border rounded-xl p-6 shadow-subtle hover:shadow-elevated transition-shadow text-left space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-soft-sage text-clinical-teal flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-deep-ink font-sans">{item.title}</h3>
                <p className="text-xs sm:text-sm text-clinical-slate leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
