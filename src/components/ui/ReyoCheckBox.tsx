"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

export interface ReyoCheckBoxProps {
  label?: React.ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function ReyoCheckBox({
  label,
  checked,
  onChange,
  disabled = false,
  className = "",
  style,
}: ReyoCheckBoxProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.65rem",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        userSelect: "none",
        fontSize: "0.92rem",
        color: "var(--color-text-main)",
        ...style,
      }}
      className={`reyo-checkbox-wrapper ${className}`}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          position: "absolute",
          opacity: 0,
          pointerEvents: "none",
          width: 0,
          height: 0,
        }}
      />
      <div
        style={{
          width: "1.35rem",
          height: "1.35rem",
          borderRadius: "0.35rem",
          backgroundColor: checked ? "var(--color-primary-dark)" : "#FFFFFF",
          border: `1.5px solid ${
            checked
              ? "var(--color-primary-dark)"
              : isFocused
              ? "var(--color-primary)"
              : "var(--color-stroke)"
          }`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          transition: "all 0.15s ease",
          boxShadow: "none",
          flexShrink: 0,
        }}
      >
        {checked && <Check size={14} strokeWidth={3} />}
      </div>
      {label && <span>{label}</span>}
    </label>
  );
}
