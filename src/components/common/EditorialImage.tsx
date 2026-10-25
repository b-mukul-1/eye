import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface EditorialImageProps {
  src: string;
  alt: string;
  caption?: string;
  badge?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/2" | "auto";
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}

export function EditorialImage({
  src,
  alt,
  caption,
  badge,
  aspectRatio = "4/3",
  priority = false,
  className,
  imageClassName,
}: EditorialImageProps) {
  const aspectClass = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "3/2": "aspect-[3/2]",
    auto: "aspect-auto",
  }[aspectRatio];

  return (
    <figure className={cn("group block", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-clinical-border bg-warm-neutral/30 shadow-subtle",
          aspectClass
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={cn(
            "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]",
            imageClassName
          )}
        />

        {badge && (
          <div className="absolute top-3.5 left-3.5 bg-deep-ink/85 backdrop-blur-md text-warm-ivory text-[11px] font-sans font-medium px-3 py-1 rounded-full border border-white/10 shadow-sm">
            {badge}
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="mt-2.5 flex items-baseline justify-between text-xs text-clinical-slate font-sans">
          <span className="font-editorial text-deep-ink text-sm italic">{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}
