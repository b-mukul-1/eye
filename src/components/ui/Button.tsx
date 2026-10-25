import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "clinical" | "amber" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  icon,
  iconPosition = "right",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-sans font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-clinical-teal focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer rounded-lg";

  const sizeClasses = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5 tracking-tight",
    md: "text-sm px-5 py-2.5 gap-2 tracking-tight",
    lg: "text-base px-6 py-3.5 gap-2.5 tracking-tight",
  };

  const variantClasses = {
    primary:
      "bg-deep-ink text-warm-ivory hover:bg-clinical-teal shadow-subtle hover:shadow-elevated active:scale-[0.99]",
    secondary:
      "bg-soft-sage text-deep-ink hover:bg-soft-sage/80 active:scale-[0.99] border border-clinical-border",
    outline:
      "bg-transparent text-deep-ink border border-deep-ink/20 hover:bg-deep-ink hover:text-warm-ivory active:scale-[0.99]",
    clinical:
      "bg-clinical-teal text-warm-ivory hover:bg-clinical-teal-dark shadow-subtle active:scale-[0.99]",
    amber:
      "bg-subtle-amber text-deep-ink hover:bg-subtle-amber-dark/90 shadow-subtle active:scale-[0.99]",
    ghost:
      "bg-transparent text-deep-ink hover:bg-deep-ink/5 active:bg-deep-ink/10",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  const combinedClass = cn(baseClasses, sizeClasses[size], variantClasses[variant], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClass}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {content}
    </button>
  );
}
