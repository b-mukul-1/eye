import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Specialist Consultation | Ophthalmology & Specialty Optometry",
  description:
    "Consult verified eye specialists across pediatric amblyopia, specialty contact lenses, ocular prosthetics, low-vision rehabilitation, and surgical triage.",
};

export default function BookSpecialistLayout({ children }: { children: React.ReactNode }) {
  return children;
}
