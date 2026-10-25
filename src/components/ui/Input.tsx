import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Input({
  label,
  hint,
  error,
  leftIcon,
  rightIcon,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <div className="w-full space-y-1.5 font-sans text-left">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-semibold uppercase tracking-wider text-deep-ink/80"
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {leftIcon && (
          <span className="absolute left-3.5 text-clinical-slate/70 pointer-events-none">
            {leftIcon}
          </span>
        )}

        <input
          id={inputId}
          className={cn(
            "w-full bg-white/80 border border-clinical-border rounded-lg px-3.5 py-2.5 text-sm text-deep-ink placeholder:text-clinical-slate/50 transition-all duration-150 focus:bg-white focus:border-clinical-teal focus:ring-1 focus:ring-clinical-teal focus:outline-none disabled:opacity-50",
            leftIcon && "pl-10",
            rightIcon && "pr-10",
            error && "border-red-500/60 focus:border-red-600 focus:ring-red-600",
            className
          )}
          {...props}
        />

        {rightIcon && (
          <span className="absolute right-3.5 text-clinical-slate/70 pointer-events-none">
            {rightIcon}
          </span>
        )}
      </div>

      {error ? (
        <p className="text-xs text-red-600 font-medium">{error}</p>
      ) : hint ? (
        <p className="text-xs text-clinical-slate">{hint}</p>
      ) : null}
    </div>
  );
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export function Select({
  label,
  hint,
  error,
  options,
  className,
  id,
  ...props
}: SelectProps) {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <div className="w-full space-y-1.5 font-sans text-left">
      {label && (
        <label
          htmlFor={selectId}
          className="block text-xs font-semibold uppercase tracking-wider text-deep-ink/80"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <select
          id={selectId}
          className={cn(
            "w-full bg-white/80 border border-clinical-border rounded-lg px-3.5 py-2.5 text-sm text-deep-ink appearance-none transition-all duration-150 focus:bg-white focus:border-clinical-teal focus:ring-1 focus:ring-clinical-teal focus:outline-none cursor-pointer pr-10",
            error && "border-red-500/60 focus:border-red-600",
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-clinical-slate">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>

      {error ? (
        <p className="text-xs text-red-600 font-medium">{error}</p>
      ) : hint ? (
        <p className="text-xs text-clinical-slate">{hint}</p>
      ) : null}
    </div>
  );
}
