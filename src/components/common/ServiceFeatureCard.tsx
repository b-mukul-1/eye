import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export interface ServiceFeatureProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  clinicalScope: string;
  equipment: string[];
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
}

export function ServiceFeatureRow({
  id,
  title,
  subtitle,
  description,
  clinicalScope,
  equipment,
  imageSrc,
  imageAlt,
  reversed = false,
}: ServiceFeatureProps) {
  return (
    <article
      id={id}
      className={cn(
        "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-12 border-b border-clinical-border last:border-b-0",
        reversed && "lg:grid-flow-dense"
      )}
    >
      {/* Visual Column */}
      <div className={cn("lg:col-span-6", reversed && "lg:col-start-7")}>
        <div className="relative overflow-hidden rounded-xl border border-clinical-border bg-warm-neutral/30 shadow-subtle aspect-[4/3]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 hover:scale-[1.015]"
          />
          <div className="absolute top-3.5 left-3.5">
            <Badge variant="ink" size="sm">
              Clinical Service
            </Badge>
          </div>
        </div>
      </div>

      {/* Narrative Column */}
      <div className={cn("lg:col-span-6 space-y-4 text-left", reversed && "lg:col-start-1")}>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-clinical-teal block mb-1">
            {subtitle}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-deep-ink font-sans tracking-tight">
            {title}
          </h3>
        </div>

        <p className="text-sm sm:text-base text-clinical-slate leading-relaxed">
          {description}
        </p>

        {/* Clinical Scope Box */}
        <div className="bg-soft-sage/40 border border-clinical-border rounded-lg p-3.5 text-xs">
          <span className="font-semibold text-deep-ink block mb-0.5">Clinical Protocol:</span>
          <span className="text-clinical-slate">{clinicalScope}</span>
        </div>

        {/* Diagnostic Equipment list */}
        <div className="pt-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-deep-ink/70 block mb-2">
            Calibrated Equipment Deployed:
          </span>
          <div className="flex flex-wrap gap-2">
            {equipment.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 text-xs bg-white/90 border border-clinical-border px-2.5 py-1 rounded-md text-deep-ink"
              >
                <Check className="w-3 h-3 text-clinical-teal" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="pt-3">
          <Link
            href={`/services#${id}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-clinical-teal hover:text-clinical-teal-dark transition-colors group"
          >
            <span>Read full clinical methodology & preparation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
