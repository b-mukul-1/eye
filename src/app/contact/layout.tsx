import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact OcuHome Patient Coordination Desk",
  description:
    "Reach the OcuHome patient care and clinical coordination team for appointment queries, pilot service coverage, and corporate screening proposals.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
