"use client";

import React, { useState } from "react";
import { EditorialHeading, SectionLabel, LeadParagraph } from "@/components/ui/Typography";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What happens during a home visit?",
    answer:
      "A qualified optometrist arrives at your scheduled time with a sanitized, calibrated diagnostic suite. The visit begins with a discussion of your visual symptoms, medical history, and current medications. The practitioner then conducts distance and near vision testing (Snellen/LogMAR), objective and subjective refraction using portable trial frames, handheld slit-lamp biomicroscopy of the cornea and crystalline lens, non-contact/rebound intraocular pressure (IOP) measurement, and non-mydriatic digital fundus photography of the retina. The assessment takes approximately 45 to 60 minutes.",
  },
  {
    question: "Which examinations can be conducted at home?",
    answer:
      "Home visits accommodate comprehensive primary eye evaluations: subjective & objective refraction for spectacle prescriptions, dry eye and anterior segment surface assessment via handheld slit-lamp, intraocular pressure screening for glaucoma risk, and digital retinal screening for diabetic retinopathy or macular changes. Examinations requiring stationary, high-voltage hospital apparatus (such as automated visual field Humphrey perimetry, laser optical biometry, or surgical interventions) cannot be conducted at home.",
  },
  {
    question: "When is a hospital visit necessary?",
    answer:
      "A hospital visit is necessary whenever invasive investigations, surgical interventions, or urgent therapies are required. This includes cataract extraction (phacoemulsification), laser capsulotomy or photocoagulation, suspected retinal detachments, severe intraocular inflammation (uveitis), corneal ulcers, sudden acute vision loss, chemical burns, or intraocular pressure spikes exceeding 25–30 mmHg. When these signs appear during a home visit, the clinician coordinates an immediate referral to an accredited tertiary eye hospital.",
  },
  {
    question: "How are examination findings and reports shared?",
    answer:
      "Following the visit, the optometrist enters structured observations, lens parameters, IOP values, and fundus images into the secure clinical platform. A consulting ophthalmologist reviews and countersigns the clinical report. Once validated, patients and authorized family members can access their encrypted digital report and spectacle prescription directly via the patient portal or receive a downloadable PDF.",
  },
  {
    question: "Can family members coordinate appointments?",
    answer:
      "Yes. Adult children and designated caregivers frequently schedule and manage visits on behalf of elderly parents or mobility-impaired relatives. Caregivers can input the patient's address, list known ocular or systemic conditions (such as diabetes or hypertension), accompany them during the bedside examination, and receive direct clinical updates and care plans.",
  },
  {
    question: "How are appointments and follow-ups managed?",
    answer:
      "Appointments can be scheduled online or through our patient support desk. Based on your examination findings, the consulting ophthalmologist specifies an appropriate clinical recall interval—such as 3 months for borderline IOP monitoring, 6–12 months for diabetic retinal observation, or 1–2 years for routine vision checks. You receive gentle follow-up reminders when your next evaluation is due.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-24 bg-warm-ivory border-b border-clinical-border font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-left">
          <SectionLabel className="mb-3">Practical Guidance</SectionLabel>
          <EditorialHeading as="h2" serifAccent="about home eye care.">
            Frequently asked questions,
          </EditorialHeading>
          <LeadParagraph className="mt-4">
            Clear, honest answers regarding home examination protocols, equipment calibration,
            specialist oversight, and hospital triage.
          </LeadParagraph>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={cn(
                  "border rounded-xl transition-all duration-200 overflow-hidden",
                  isOpen
                    ? "bg-white border-clinical-teal/40 shadow-subtle"
                    : "bg-white/70 border-clinical-border hover:bg-white"
                )}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-5 sm:px-6 py-4 flex items-center justify-between gap-4 text-left font-sans cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-deep-ink">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      "w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200",
                      isOpen
                        ? "bg-soft-sage text-clinical-teal rotate-180"
                        : "bg-warm-neutral/50 text-clinical-slate"
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-clinical-slate leading-relaxed border-t border-clinical-border/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
