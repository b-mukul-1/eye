"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Eye, Info, CheckCircle2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnatomicalLayer {
  id: string;
  name: string;
  tagline: string;
  description: string;
  clinicalEquipment: string;
  homeAssessmentScope: string;
  coords: { x: number; y: number }; // percentage from center
}

const layers: AnatomicalLayer[] = [
  {
    id: "cornea",
    name: "Cornea & Tear Film",
    tagline: "Surface Clarity & Curvature",
    description:
      "Assessed for regular curvature, dry eye signs, contact lens fatigue, and transparency using portable blue illumination.",
    clinicalEquipment: "Portable Slit-Lamp Biomicroscope & Fluorescein",
    homeAssessmentScope: "Full bedside assessment suitable for home setting.",
    coords: { x: 50, y: 32 },
  },
  {
    id: "iris",
    name: "Iris & Pupillary Reflex",
    tagline: "Neurological & Glaucoma Marker",
    description:
      "Evaluates direct and consensual light reflexes (PERRLA) and checks anterior chamber angle safety before any dilation.",
    clinicalEquipment: "Focal Beam Ophthalmoscope & Penlight",
    homeAssessmentScope: "Standard optometric protocol during every visit.",
    coords: { x: 34, y: 50 },
  },
  {
    id: "lens",
    name: "Crystalline Lens",
    tagline: "Cataract & Clarity Triage",
    description:
      "Screened for nuclear sclerosis, cortical opacities, and posterior subcapsular haze to quantify visual impairment.",
    clinicalEquipment: "Retro-illumination Optical System",
    homeAssessmentScope: "Graded at home; surgical removal referred to hospital.",
    coords: { x: 50, y: 50 },
  },
  {
    id: "retina",
    name: "Retina & Optic Disc",
    tagline: "Vascular & Neural Health",
    description:
      "Screened for diabetic microaneurysms, hypertensive retinopathy, and optic disc cup-to-disc ratio (glaucoma indicator).",
    clinicalEquipment: "Digital Portable Fundus Camera",
    homeAssessmentScope: "Images sent directly to consulting ophthalmologist.",
    coords: { x: 66, y: 64 },
  },
];

export function SignatureEyeViewer({ className }: { className?: string }) {
  const [activeLayer, setActiveLayer] = useState<AnatomicalLayer>(layers[2]); // Default: Crystalline Lens
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    damping: 25,
    stiffness: 200,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    damping: 25,
    stiffness: 200,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      className={cn(
        "relative bg-warm-ivory border border-clinical-border rounded-2xl p-6 sm:p-8 shadow-card overflow-hidden font-sans",
        className
      )}
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-clinical-border">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-clinical-slate mb-1">
            <Sparkles className="w-3.5 h-3.5 text-clinical-teal" />
            <span>Signature Clinical Visual</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-deep-ink font-sans">
            Anatomical Examination <span className="font-editorial text-clinical-teal">Explorer</span>
          </h3>
        </div>

        <div className="flex items-center gap-1.5 bg-soft-sage/60 px-3 py-1.5 rounded-full text-xs font-medium text-deep-ink border border-clinical-border">
          <Eye className="w-3.5 h-3.5 text-clinical-teal" />
          <span>Interactive 3D Art & Diagnostic Map</span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: 3D Art Sculpture with Tilt and Hotspots */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="lg:col-span-6 flex flex-col items-center justify-center relative perspective-[1000px] select-none"
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full cursor-grab active:cursor-grabbing p-1 bg-gradient-to-br from-white/80 via-transparent to-deep-ink/5 shadow-2xl transition-shadow"
          >
            {/* The 3D Rendered Eye Asset */}
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/60">
              <Image
                src="/images/signature-3d-eye.jpg"
                alt="Signature sculpted 3D eye in muted clinical teal and porcelain sclera"
                fill
                priority
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover"
              />

              {/* Specular sheen overlay */}
              <div className="absolute inset-0 bg-radial-gradient from-white/20 via-transparent to-transparent pointer-events-none" />

              {/* Interactive Layer Pinpoints */}
              {layers.map((layer) => {
                const isSelected = activeLayer.id === layer.id;
                return (
                  <button
                    key={layer.id}
                    onClick={() => setActiveLayer(layer)}
                    style={{
                      left: `${layer.coords.x}%`,
                      top: `${layer.coords.y}%`,
                    }}
                    className={cn(
                      "absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 z-10 focus:outline-none",
                      isSelected
                        ? "bg-clinical-teal text-white ring-4 ring-clinical-teal/30 scale-125"
                        : "bg-deep-ink/80 text-white/90 hover:bg-clinical-teal hover:scale-110"
                    )}
                    aria-label={`Inspect ${layer.name}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-white animate-ping absolute" />
                    <span className="w-2 h-2 rounded-full bg-white relative" />
                  </button>
                );
              })}
            </div>
          </motion.div>

          <p className="mt-4 text-[11px] text-clinical-slate tracking-tight flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-clinical-teal" />
            <span>Hover to rotate object &bull; Click pins to inspect home diagnostic scope</span>
          </p>
        </div>

        {/* Right Column: Layer Diagnostic Inspector */}
        <div className="lg:col-span-6 space-y-5">
          {/* Layer Selector Chips */}
          <div className="flex flex-wrap gap-2">
            {layers.map((layer) => {
              const isSelected = activeLayer.id === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-medium transition-all font-sans border",
                    isSelected
                      ? "bg-deep-ink text-warm-ivory border-deep-ink shadow-sm"
                      : "bg-white/80 text-deep-ink/80 hover:bg-soft-sage/40 border-clinical-border"
                  )}
                >
                  {layer.name}
                </button>
              );
            })}
          </div>

          {/* Active Layer Details Card */}
          <motion.div
            key={activeLayer.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white/80 border border-clinical-border rounded-xl p-5 space-y-4 shadow-subtle text-left"
          >
            <div>
              <span className="text-[11px] font-semibold text-clinical-teal uppercase tracking-wider">
                {activeLayer.tagline}
              </span>
              <h4 className="text-lg font-bold text-deep-ink mt-0.5">{activeLayer.name}</h4>
              <p className="text-sm text-clinical-slate leading-relaxed mt-2">
                {activeLayer.description}
              </p>
            </div>

            <div className="pt-3 border-t border-clinical-border grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-warm-neutral/30 p-3 rounded-lg border border-clinical-border/60">
                <span className="text-[10px] font-semibold uppercase text-clinical-slate block mb-1">
                  Portable Equipment Used
                </span>
                <span className="font-medium text-deep-ink">{activeLayer.clinicalEquipment}</span>
              </div>

              <div className="bg-soft-sage/30 p-3 rounded-lg border border-clinical-border/60">
                <span className="text-[10px] font-semibold uppercase text-clinical-teal block mb-1">
                  Home vs Hospital Scope
                </span>
                <span className="font-medium text-deep-ink">{activeLayer.homeAssessmentScope}</span>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center gap-2 text-xs text-clinical-slate">
            <CheckCircle2 className="w-4 h-4 text-clinical-teal shrink-0" />
            <span>
              All ocular observations are recorded in the practitioner portal and reviewed by a
              consulting ophthalmologist.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
