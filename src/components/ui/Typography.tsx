import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
  serifAccent?: string;
  children: React.ReactNode;
}

export function EditorialHeading({
  as: Component = "h2",
  serifAccent,
  children,
  className,
  ...props
}: HeadingProps) {
  const sizeClasses = {
    h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12]",
    h2: "text-2xl sm:text-3xl md:text-4xl tracking-tight leading-[1.2]",
    h3: "text-xl sm:text-2xl md:text-3xl tracking-tight leading-[1.25]",
    h4: "text-lg sm:text-xl font-medium leading-[1.3]",
  };

  return (
    <Component
      className={cn(
        "font-sans font-semibold text-deep-ink text-balance",
        sizeClasses[Component],
        className
      )}
      {...props}
    >
      {children}
      {serifAccent && (
        <span className="font-editorial text-clinical-teal font-normal ml-2">
          {serifAccent}
        </span>
      )}
    </Component>
  );
}

export function SectionLabel({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <div className={cn("inline-flex items-center gap-2", className)} {...props}>
      <span className="h-1.5 w-1.5 rounded-full bg-clinical-teal" />
      <span className="text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-clinical-slate font-sans">
        {children}
      </span>
    </div>
  );
}

export function LeadParagraph({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-base sm:text-lg text-clinical-slate font-normal leading-relaxed max-w-2xl font-sans",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function BodyText({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-sm sm:text-base text-deep-ink/80 font-normal leading-relaxed font-sans",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
