import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Patient Account",
  description:
    "Register for a personal OcuHome patient account to access longitudinal refractive history, IOP logs, and verified tele-examination reports.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
