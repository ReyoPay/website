"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Info, AlertTriangle, AlertCircle, CheckCircle2 } from "lucide-react";

export interface ReyoInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  helperText?: string;
  error?: string;
  warning?: string;
  info?: string;
  success?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  value?: string | number;
  onChange?: (value: string) => void;
  onNativeChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ReyoInput({
  label,
  helperText,
  error,
  warning,
  info,
  success,
  type = "text",
  placeholder,
  value = "",
  onChange,
  onNativeChange,
  leftIcon,
  rightIcon,
  fullWidth = true,
  disabled = false,
  className = "",
  style,
  ...props
}: ReyoInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const activeAlertType = error
    ? "error"
    : warning
    ? "warning"
    : success
    ? "success"
    : info
    ? "info"
    : null;

  const activeAlertMessage = error || warning || success || info || helperText;

  const getBorderColor = () => {
    if (error) return "var(--color-error)";
    if (warning) return "var(--color-warning)";
    if (success) return "var(--color-success)";
    if (isFocused) return "var(--color-primary)";
    return "var(--color-stroke)";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (type === "username") {
      if (!val.startsWith("@")) {
        val = "@" + val.replace(/^@*/, "");
      }
    }
    onChange?.(val);
    onNativeChange?.(e);
  };

  const isPassword = type === "password";
  const actualType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem",
        width: fullWidth ? "100%" : "auto",
        ...style,
      }}
      className={`reyo-input-wrapper ${className}`}
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
          alignItems: "center",
          backgroundColor: disabled ? "#F4F4F5" : "var(--color-bg-input)",
          border: `1.5px solid ${getBorderColor()}`,
          borderRadius: "var(--radius-md)",
          padding: "0 0.85rem",
          transition: "border-color 0.2s ease",
          boxShadow: "none",
          width: "100%",
        }}
      >
        {leftIcon && (
          <div
            style={{
              marginRight: "0.5rem",
              color: "var(--color-text-muted)",
              display: "flex",
              alignItems: "center",
            }}
          >
            {leftIcon}
          </div>
        )}

        <input
          type={actualType}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            flex: 1,
            width: "100%",
            padding: "0.85rem 0",
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
            fontSize: "0.95rem",
            fontWeight: 500,
            color: "var(--color-text-main)",
            boxShadow: "none",
          }}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.25rem",
              display: "flex",
              alignItems: "center",
              color: "var(--color-text-muted)",
            }}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}

        {!isPassword && rightIcon && (
          <div
            style={{
              marginLeft: "0.5rem",
              color: "var(--color-text-muted)",
              display: "flex",
              alignItems: "center",
            }}
          >
            {rightIcon}
          </div>
        )}
      </div>

      {activeAlertMessage && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.35rem",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: error
              ? "var(--color-error)"
              : warning
              ? "var(--color-warning)"
              : success
              ? "var(--color-success)"
              : info
              ? "var(--color-info)"
              : "var(--color-text-muted)",
          }}
        >
          {error && <AlertCircle size={14} />}
          {warning && <AlertTriangle size={14} />}
          {success && <CheckCircle2 size={14} />}
          {info && <Info size={14} />}
          <span>{activeAlertMessage}</span>
        </div>
      )}
    </div>
  );
}
