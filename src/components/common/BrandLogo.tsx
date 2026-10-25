import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "default" | "inverted" | "teal";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  asLink?: boolean;
}

export function BrandLogoMark({
  variant = "default",
  className,
}: {
  variant?: "default" | "inverted" | "teal";
  className?: string;
}) {
  const containerClasses = {
    default: "bg-deep-ink text-warm-ivory hover:bg-clinical-teal",
    inverted: "bg-warm-ivory text-deep-ink hover:bg-clinical-teal hover:text-warm-ivory",
    teal: "bg-clinical-teal text-warm-ivory hover:bg-clinical-teal-dark",
  };

  return (
    <div
      className={cn(
        "relative rounded-xl flex items-center justify-center transition-colors duration-200 shrink-0 select-none shadow-xs",
        containerClasses[variant],
        className || "w-10 h-10"
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 stroke-current transition-transform duration-200 group-hover:scale-105"
      >
        {/* Outer Continuous 'O' Monogram Ring */}
        <circle
          cx="20"
          cy="20"
          r="15"
          strokeWidth="2.25"
          strokeLinecap="round"
          className="opacity-95"
        />

        {/* Inner Palpebral Ophthalmic Contour (Gentle anatomical eye curve) */}
        <path
          d="M 9.5 20 C 13.5 14.5 26.5 14.5 30.5 20 C 26.5 25.5 13.5 25.5 9.5 20 Z"
          strokeWidth="1.75"
          strokeLinejoin="round"
          className="opacity-90"
        />

        {/* Iris Precision Ring */}
        <circle
          cx="20"
          cy="20"
          r="4.75"
          strokeWidth="1.75"
          className="opacity-95"
        />

        {/* Central Pupil (Solid Fill) */}
        <circle
          cx="20"
          cy="20"
          r="2.2"
          fill="currentColor"
          stroke="none"
        />

        {/* Micro Specular Catchlight (Reflective corneal glint) */}
        <circle
          cx="21.4"
          cy="18.6"
          r="0.75"
          fill="var(--color-warm-ivory, #F8F7F2)"
          stroke="none"
          className={variant === "inverted" ? "fill-deep-ink" : "fill-warm-ivory"}
        />
      </svg>
    </div>
  );
}

export function BrandLogo({
  variant = "default",
  showTagline = true,
  size = "md",
  className,
  asLink = true,
}: BrandLogoProps) {
  const sizeConfig = {
    sm: {
      mark: "w-8 h-8",
      name: "text-lg",
      tagline: "text-[9px]",
      gap: "gap-2.5",
    },
    md: {
      mark: "w-10 h-10",
      name: "text-xl",
      tagline: "text-[10px]",
      gap: "gap-3",
    },
    lg: {
      mark: "w-11 h-11",
      name: "text-2xl",
      tagline: "text-[11px]",
      gap: "gap-3.5",
    },
  };

  const currentSize = sizeConfig[size];

  const content = (
    <div className={cn("flex items-center group shrink-0", currentSize.gap, className)}>
      <BrandLogoMark variant={variant} className={currentSize.mark} />
      <div className="flex flex-col text-left">
        <span
          className={cn(
            "font-bold font-sans tracking-tight leading-tight transition-colors",
            currentSize.name,
            variant === "inverted" ? "text-warm-ivory" : "text-deep-ink"
          )}
        >
          {siteConfig.name}
        </span>
        {showTagline && (
          <span
            className={cn(
              "font-semibold tracking-wider uppercase font-sans",
              currentSize.tagline,
              variant === "inverted" ? "text-warm-ivory/60" : "text-clinical-slate"
            )}
          >
            Clinical Eye Care
          </span>
        )}
      </div>
    </div>
  );

  if (asLink) {
    return (
      <Link href="/" aria-label="OcuHome Home" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-clinical-teal rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
}
