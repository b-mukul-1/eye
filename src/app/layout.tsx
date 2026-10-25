import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "OcuHome | Clinical Eye Care Closer to Home",
    template: "%s | OcuHome",
  },
  description:
    "Thoughtful home eye-care examinations conducted by qualified optometrists with supervising ophthalmologist review across major Indian metropolitan clusters.",
  keywords: [
    "home eye exam",
    "optometrist home visit",
    "ophthalmologist review",
    "glaucoma eye pressure check",
    "diabetic retinal screening at home",
    "geriatric eye care India",
    "bedside refraction Delhi NCR",
  ],
  authors: [{ name: "OcuHome Clinical Network" }],
  openGraph: {
    title: "OcuHome | Clinical Eye Care Closer to Home",
    description:
      "Bedside eye examinations, digital fundus imaging, and ophthalmologist oversight delivered with clinical rigor and warmth.",
    url: siteConfig.url,
    siteName: "OcuHome",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OcuHome | Clinical Eye Care Closer to Home",
    description:
      "Qualified optometry home visits with ophthalmologist review across Delhi NCR, Mumbai, Bengaluru, Hyderabad, and Pune.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "OcuHome",
  description:
    "Home-based clinical optometry visits with remote ophthalmologist review and tertiary eye hospital coordination.",
  url: "https://ocuhome.health",
  medicalSpecialty: ["Optometry", "Ophthalmology"],
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Bedside Refraction & Visual Acuity Assessment",
    },
    {
      "@type": "MedicalProcedure",
      name: "Intraocular Pressure Tonometry Monitoring",
    },
    {
      "@type": "MedicalProcedure",
      name: "Portable Slit-Lamp Biomicroscopy",
    },
    {
      "@type": "MedicalProcedure",
      name: "Digital Non-Mydriatic Fundus Screening",
    },
  ],
  areaServed: [
    "Delhi NCR (Pilot Route: South Delhi & Gurugram)",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${instrumentSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-warm-ivory text-deep-ink font-sans selection:bg-soft-sage selection:text-deep-ink">
        {children}
      </body>
    </html>
  );
}
