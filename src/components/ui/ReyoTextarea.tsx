"use client";

import React, { useState } from "react";
import { AlertCircle } from "lucide-react";

export interface ReyoTextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
  label?: string;
  helperText?: string;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
  onNativeChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  fullWidth?: boolean;
}

export default function ReyoTextarea({
  label,
  helperText,
  error,
  placeholder,
  value = "",
  onChange,
  onNativeChange,
  rows = 4,
  disabled = false,
  fullWidth = true,
  className = "",
  style,
  ...props
}: ReyoTextareaProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
    onNativeChange?.(e);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem",
        width: fullWidth ? "100%" : "auto",
        ...style,
      }}
      className={`reyo-textarea-wrapper ${className}`}
    >
      {label && (
        <label
          style={{
            fontSize: "0.88rem",
            fontWeight: 700,
            color: "var(--color-text-main)",
            letterSpacing: "-0.01em",
          }}
        >
          {label}
        </label>
      )}

      <div
        style={{
          display: "flex",
          backgroundColor: disabled ? "#F4F4F5" : "var(--color-bg-input)",
          border: `1.5px solid ${
            error
              ? "var(--color-error)"
              : isFocused
              ? "var(--color-primary)"
              : "var(--color-stroke)"
          }`,
          borderRadius: "var(--radius-md)",
          padding: "0.85rem",
          transition: "border-color 0.2s ease",
          boxShadow: "none",
        }}
      >
        <textarea
          value={value}
          placeholder={placeholder}
          rows={rows}
          disabled={disabled}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            width: "100%",
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
            fontSize: "0.95rem",
            fontWeight: 500,
            color: "var(--color-text-main)",
            resize: "vertical",
            boxShadow: "none",
          }}
          {...props}
        />
      </div>

      {(error || helperText) && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.35rem",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: error ? "var(--color-error)" : "var(--color-text-muted)",
          }}
        >
          {error && <AlertCircle size={14} />}
          <span>{error || helperText}</span>
        </div>
      )}
    </div>
  );
}
