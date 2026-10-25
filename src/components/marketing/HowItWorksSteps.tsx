import React from "react";
import { EditorialHeading, SectionLabel, LeadParagraph } from "@/components/ui/Typography";
import { Calendar, UserCheck, ClipboardList, Stethoscope, Compass, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const steps = [
  {
    step: "01",
    icon: Calendar,
    title: "Request or Schedule a Visit",
    summary:
      "Select your preferred date, time, and service type online or by phone. Our triage questionnaire ensures a home visit is clinically suitable for your needs.",
  },
  {
    step: "02",
    icon: UserCheck,
    title: "Qualified Practitioner Bedside Exam",
    summary:
      "A university-trained optometrist arrives with a sanitized, calibrated diagnostic kit. They conduct a thorough 45–60 minute examination in comfortable home lighting.",
  },
  {
    step: "03",
    icon: ClipboardList,
    title: "Standardized Clinical Recording",
    summary:
      "Objective refraction, subjective visual acuity, intraocular pressure, and digital non-mydriatic fundus retinal photographs are securely recorded in the clinical portal.",
  },
  {
    step: "04",
    icon: Stethoscope,
    title: "Ophthalmologist Specialist Review",
    summary:
      "A consulting ophthalmologist remotely evaluates examination findings and retinal images, verifying the prescription and identifying any asymptomatic pathology.",
  },
  {
    step: "05",
    icon: Compass,
    title: "Clear Next Steps & Care Plan",
    summary:
      "You receive a verified digital report and spectacle prescription. If secondary or surgical care is indicated, a referral letter to an accredited hospital is prepared.",
  },
];

export function HowItWorksSteps() {
  return (
    <section id="how-it-works" className="py-24 bg-warm-ivory border-b border-clinical-border font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 text-left">
          <SectionLabel className="mb-3">Clinical Journey</SectionLabel>
          <EditorialHeading as="h2" serifAccent="from request to specialist sign-off.">
            Five clear steps,
          </EditorialHeading>
          <LeadParagraph className="mt-4">
            A transparent clinical pathway ensuring medical quality, patient dignity, and uninterrupted
            continuity of care without unnecessary hospital trips.
          </LeadParagraph>
        </div>

        {/* 5-Step Connected Progression */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative text-left">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-clinical-border rounded-xl p-6 shadow-subtle flex flex-col justify-between relative group hover:border-clinical-teal/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-editorial text-2xl text-clinical-teal font-semibold">
                      {item.step}
                    </span>
                    <span className="w-8 h-8 rounded-lg bg-soft-sage text-clinical-teal flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-deep-ink mb-2 font-sans leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-clinical-slate leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-clinical-border/60 text-[11px] font-medium text-clinical-teal">
                  Protocol Stage {idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 p-6 bg-warm-neutral/40 border border-clinical-border rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-deep-ink">
              Ready to schedule an examination?
            </h4>
            <p className="text-xs text-clinical-slate">
              Appointments available across Delhi NCR, Mumbai, Bengaluru, Hyderabad, and Pune.
            </p>
          </div>
          <Button href="/book" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
            Request a Home Visit
          </Button>
        </div>
      </div>
    </section>
  );
}
