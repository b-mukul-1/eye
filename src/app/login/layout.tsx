import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical Portal Login",
  description:
    "Secure portal access for patients, caregivers, registered optometrists, and consulting ophthalmologists.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
