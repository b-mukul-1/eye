"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

interface Signature3DEyeProps {
  className?: string;
  size?: number; // width/height in px
  enableHoverGaze?: boolean;
}

export function Signature3DEye({
  className,
  size = 64,
  enableHoverGaze = true,
}: Signature3DEyeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isBlinking, setIsBlinking] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // 1. Accessibility Check: prefers-reduced-motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const container = containerRef.current;
    if (!container) return;

    // 2. Generate a bespoke, high-definition 512x512 eye texture on an offscreen canvas
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      setHasWebGL(false);
      return;
    }

    // A. Sclera Background (warm porcelain ivory with subtle spherical vignette)
    const scleraGrad = ctx.createRadialGradient(256, 256, 40, 256, 256, 256);
    scleraGrad.addColorStop(0, "#FFFFFF");
    scleraGrad.addColorStop(0.7, "#FAF8F5");
    scleraGrad.addColorStop(0.92, "#EDE7DD");
    scleraGrad.addColorStop(1, "#DDD6CA");
    ctx.fillStyle = scleraGrad;
    ctx.fillRect(0, 0, 512, 512);

    // B. Subtle, ultra-soft vascular depth at perimeter
    ctx.save();
    ctx.strokeStyle = "rgba(200, 140, 140, 0.08)";
    ctx.lineWidth = 1.2;
    for (let i = 0; i < 12; i++) {
      const angle = (i * Math.PI * 2) / 12;
      ctx.beginPath();
      ctx.moveTo(256 + Math.cos(angle) * 230, 256 + Math.sin(angle) * 230);
      ctx.quadraticCurveTo(
        256 + Math.cos(angle + 0.1) * 190,
        256 + Math.sin(angle + 0.1) * 190,
        256 + Math.cos(angle) * 165,
        256 + Math.sin(angle) * 165
      );
      ctx.stroke();
    }
    ctx.restore();

    // C. Outer Limbal Ring (Deep Ink)
    ctx.beginPath();
    ctx.arc(256, 256, 126, 0, Math.PI * 2);
    ctx.fillStyle = "#122226";
    ctx.fill();

    // D. Main Iris (Clinical Teal Radial Gradient with layered depth)
    const irisGrad = ctx.createRadialGradient(256, 256, 45, 256, 256, 122);
    irisGrad.addColorStop(0, "#245B58");
    irisGrad.addColorStop(0.35, "#397E7A"); // Primary Clinical Teal
    irisGrad.addColorStop(0.7, "#4EA39E");
    irisGrad.addColorStop(0.95, "#235452");
    irisGrad.addColorStop(1, "#142528");
    ctx.beginPath();
    ctx.arc(256, 256, 122, 0, Math.PI * 2);
    ctx.fillStyle = irisGrad;
    ctx.fill();

    // E. Fine Iris Striations (Fibrous clinical realism)
    ctx.save();
    ctx.translate(256, 256);
    for (let i = 0; i < 48; i++) {
      const angle = (i * Math.PI * 2) / 48;
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, 48);
      ctx.lineTo(0, 118);
      ctx.strokeStyle = i % 2 === 0 ? "rgba(90, 185, 178, 0.28)" : "rgba(20, 45, 48, 0.35)";
      ctx.lineWidth = i % 3 === 0 ? 2 : 1;
      ctx.stroke();
      ctx.rotate(-angle);
    }
    ctx.restore();

    // F. Inner Pupillary Ring (Subtle warm amber flecks)
    const collaretteGrad = ctx.createRadialGradient(256, 256, 46, 256, 256, 68);
    collaretteGrad.addColorStop(0, "rgba(217, 174, 112, 0.45)");
    collaretteGrad.addColorStop(1, "rgba(217, 174, 112, 0)");
    ctx.beginPath();
    ctx.arc(256, 256, 68, 0, Math.PI * 2);
    ctx.fillStyle = collaretteGrad;
    ctx.fill();

    // G. Pupil (Deep, rich velvety black)
    ctx.beginPath();
    ctx.arc(256, 256, 48, 0, Math.PI * 2);
    ctx.fillStyle = "#0A1315";
    ctx.fill();

    // H. Primary Crisp Specular Catchlight Glint (Top-Right)
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(284, 226, 16, 11, Math.PI / 4, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
    ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
    ctx.shadowBlur = 4;
    ctx.fill();
    ctx.restore();

    // I. Secondary Fill Catchlight (Bottom-Left)
    ctx.beginPath();
    ctx.arc(232, 282, 6, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
    ctx.fill();

    // 3. Three.js Texture & Sphere Assembly
    const eyeTexture = new THREE.CanvasTexture(canvas);
    eyeTexture.colorSpace = THREE.SRGBColorSpace;
    eyeTexture.generateMipmaps = true;
    eyeTexture.minFilter = THREE.LinearMipmapLinearFilter;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
    } catch {
      setHasWebGL(false);
      return;
    }

    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 0, 3.8);

    // Warm Ambient + Directional Lighting for 3D form
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfffaee, 1.4);
    keyLight.position.set(2.5, 3.5, 4.0);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x397e7a, 0.4);
    fillLight.position.set(-2.5, -2.0, 2.0);
    scene.add(fillLight);

    // Eyeball Sphere Geometry & Material
    const eyeGeo = new THREE.SphereGeometry(1.0, 48, 48);
    // Align texture directly forward towards camera
    eyeGeo.rotateY(-Math.PI / 2);

    const eyeMat = new THREE.MeshStandardMaterial({
      map: eyeTexture,
      roughness: 0.22,
      metalness: 0.02,
    });

    const eyeMesh = new THREE.Mesh(eyeGeo, eyeMat);
    scene.add(eyeMesh);

    // 4. Smooth Damped Mouse Tracking & Organic Idle Saccades
    const mousePos = { x: 0, y: 0 };
    const currentRot = { x: 0, y: 0 };
    const targetRot = { x: 0, y: 0 };
    let lastMouseMove = performance.now();
    let nextSaccade = performance.now() + 2600;
    let saccadeOffset = { x: 0, y: 0 };

    const handlePointerMove = (e: MouseEvent) => {
      if (!enableHoverGaze) return;
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance normalized to screen size
      const dx = (e.clientX - centerX) / (window.innerWidth / 2);
      const dy = (e.clientY - centerY) / (window.innerHeight / 2);

      // Restrained boundary: max ~14° horizontal, ~10° vertical
      mousePos.x = Math.max(-0.85, Math.min(0.85, dx));
      mousePos.y = Math.max(-0.85, Math.min(0.85, dy));
      lastMouseMove = performance.now();
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    // 5. Natural Organic Blink Engine (Poisson interval every 3.8s–7.5s)
    let blinkTimer: NodeJS.Timeout;

    const scheduleNextBlink = () => {
      if (motionQuery.matches) return;
      const delay = 3600 + Math.random() * 4000;
      blinkTimer = setTimeout(() => {
        setIsBlinking(true);
        // Quick 180ms blink
        setTimeout(() => {
          setIsBlinking(false);
          // 16% probability of natural double-blink
          if (Math.random() < 0.16) {
            setTimeout(() => {
              setIsBlinking(true);
              setTimeout(() => {
                setIsBlinking(false);
                scheduleNextBlink();
              }, 160);
            }, 120);
          } else {
            scheduleNextBlink();
          }
        }, 190);
      }, delay);
    };

    scheduleNextBlink();

    // 6. Viewport Visibility Tracking
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // 7. Animation Loop
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const now = performance.now();
      const reduced = motionQuery.matches;

      if (!reduced) {
        // Idle micro-saccades if mouse hasn't moved for > 2s
        if (now - lastMouseMove > 2200 && now > nextSaccade) {
          saccadeOffset.x = (Math.random() - 0.5) * 0.08;
          saccadeOffset.y = (Math.random() - 0.5) * 0.05;
          nextSaccade = now + 2400 + Math.random() * 2800;
        }

        // Restrained target angle
        targetRot.y = mousePos.x * 0.24 + saccadeOffset.x;
        targetRot.x = mousePos.y * 0.17 + saccadeOffset.y;

        // Exponential smoothing (lerp = 0.08)
        currentRot.x += (targetRot.x - currentRot.x) * 0.08;
        currentRot.y += (targetRot.y - currentRot.y) * 0.08;

        eyeMesh.rotation.x = currentRot.x;
        eyeMesh.rotation.y = currentRot.y;
      } else {
        eyeMesh.rotation.set(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(blinkTimer);
      observer.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      eyeGeo.dispose();
      eyeMat.dispose();
      eyeTexture.dispose();
      renderer.dispose();
    };
  }, [size, enableHoverGaze]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex items-center justify-center select-none overflow-hidden rounded-full shadow-inner bg-warm-ivory",
        className
      )}
      style={{ width: size, height: size }}
      aria-hidden="true"
      role="presentation"
    >
      {/* Upper Eyelid Overlay for Natural Biological Blink */}
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-1/2 bg-warm-neutral/95 border-b border-clinical-border origin-top z-10 transition-transform duration-150 ease-in-out pointer-events-none rounded-t-full shadow-xs",
          isBlinking ? "scale-y-100" : "scale-y-0"
        )}
      />

      {/* Lower Eyelid Overlay */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 h-1/2 bg-warm-neutral/95 border-t border-clinical-border origin-bottom z-10 transition-transform duration-150 ease-in-out pointer-events-none rounded-b-full shadow-xs",
          isBlinking ? "scale-y-60" : "scale-y-0"
        )}
      />

      {/* Graceful Fallback for non-WebGL devices */}
      {!hasWebGL && (
        <div
          className="w-full h-full rounded-full bg-soft-sage/40 border border-clinical-border flex items-center justify-center p-2 text-center"
          title="OcuHome Brand Accent"
        >
          <div className="w-10 h-10 rounded-full bg-clinical-teal flex items-center justify-center border-2 border-white shadow-xs">
            <div className="w-4 h-4 rounded-full bg-deep-ink flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white ml-1 -mt-1" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
