import React from "react";

export interface ReyoBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "dark" | "outline" | "subtle";
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export default function ReyoBadge({
  variant = "primary",
  icon,
  children,
  className = "",
  style,
  ...props
}: ReyoBadgeProps) {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case "dark":
        return {
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          color: "var(--color-primary)",
          borderColor: "rgba(0, 219, 183, 0.3)",
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          color: "var(--color-primary-dark)",
          borderColor: "var(--color-primary)",
        };
      case "subtle":
        return {
          backgroundColor: "var(--color-bg-input)",
          color: "var(--color-text-muted)",
          borderColor: "var(--color-stroke)",
        };
      case "primary":
      default:
        return {
          backgroundColor: "var(--color-primary-light)",
          color: "var(--color-primary-dark)",
          borderColor: "rgba(0, 219, 183, 0.3)",
        };
    }
  };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.45rem",
        padding: "0.35rem 0.85rem",
        fontSize: "0.82rem",
        fontWeight: 700,
        borderRadius: "var(--radius-full)",
        border: "1px solid transparent",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        boxShadow: "none",
        ...getVariantStyles(),
        ...style,
      }}
      className={`badge ${className}`}
      {...props}
    >
      {icon}
      {children}
    </span>
  );
}
