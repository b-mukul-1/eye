import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Optometrist Home Visit",
  description:
    "Schedule an unhurried, comprehensive home eye examination with qualified optometrists, calibrated portable diagnostics, and remote ophthalmologist review in Delhi NCR.",
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return children;
}
