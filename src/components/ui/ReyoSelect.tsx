"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
}

export interface ReyoSelectProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  error?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function ReyoSelect({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  fullWidth = true,
  error,
  className = "",
  style,
}: ReyoSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSelect = (val: string) => {
    if (disabled) return;
    onChange?.(val);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem",
        width: fullWidth ? "100%" : "auto",
        position: "relative",
        ...style,
      }}
      className={`reyo-custom-select ${className}`}
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

      {/* Custom Trigger Box (NO native select) */}
      <button
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.6rem",
          padding: "0.85rem 1rem",
          backgroundColor: disabled ? "#F4F4F5" : "#FFFFFF",
          border: `1.5px solid ${
            error
              ? "var(--color-error)"
              : isOpen
              ? "var(--color-primary)"
              : "var(--color-stroke)"
          }`,
          borderRadius: "var(--radius-md)",
          cursor: disabled ? "not-allowed" : "pointer",
          textAlign: "left",
          transition: "border-color 0.2s ease, background-color 0.2s ease",
          boxShadow: "none",
          outline: "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", overflow: "hidden" }}>
          {selectedOption?.icon && (
            <span style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              {selectedOption.icon}
            </span>
          )}
          <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            <span
              style={{
                fontSize: "0.95rem",
                fontWeight: 700,
                color: selectedOption ? "var(--color-text-main)" : "var(--color-text-light)",
              }}
            >
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            {selectedOption?.sublabel && (
              <span
                style={{
                  fontSize: "0.78rem",
                  color: "var(--color-text-muted)",
                  marginLeft: "0.4rem",
                  fontWeight: 500,
                }}
              >
                {selectedOption.sublabel}
              </span>
            )}
          </div>
        </div>

        <span
          style={{
            display: "flex",
            alignItems: "center",
            color: isOpen ? "var(--color-primary-dark)" : "var(--color-text-muted)",
            transition: "transform 0.2s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            flexShrink: 0,
          }}
        >
          <ChevronDown size={18} />
        </span>
      </button>

      {/* Custom Floating Popover Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            right: 0,
            backgroundColor: "#FFFFFF",
            border: "1px solid var(--color-stroke)",
            borderRadius: "var(--radius-md)",
            zIndex: 100,
            maxHeight: "260px",
            overflowY: "auto",
            padding: "0.4rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.2rem",
            boxShadow: "none",
          }}
        >
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(option.value)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.6rem",
                  padding: "0.65rem 0.85rem",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: isSelected ? "var(--color-primary-light)" : "transparent",
                  color: isSelected ? "var(--color-primary-dark)" : "var(--color-text-main)",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background-color 0.15s ease",
                  boxShadow: "none",
                  fontWeight: isSelected ? 800 : 600,
                  fontSize: "0.92rem",
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = "var(--color-bg-card-hover)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", overflow: "hidden" }}>
                  {option.icon && (
                    <span style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                      {option.icon}
                    </span>
                  )}
                  <div>
                    <span>{option.label}</span>
                    {option.sublabel && (
                      <span
                        style={{
                          fontSize: "0.78rem",
                          color: "var(--color-text-muted)",
                          marginLeft: "0.4rem",
                          fontWeight: 500,
                        }}
                      >
                        {option.sublabel}
                      </span>
                    )}
                  </div>
                </div>

                {isSelected && (
                  <span style={{ color: "var(--color-primary-dark)", display: "flex", alignItems: "center" }}>
                    <Check size={16} strokeWidth={2.5} />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {error && (
        <span style={{ fontSize: "0.8rem", color: "var(--color-error)", fontWeight: 600 }}>
          {error}
        </span>
      )}
    </div>
  );
}
