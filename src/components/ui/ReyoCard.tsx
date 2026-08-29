import React from "react";

export interface ReyoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  highlight?: boolean;
  dark?: boolean;
  hoverable?: boolean;
  padding?: "sm" | "md" | "lg" | "none";
  children?: React.ReactNode;
}

export default function ReyoCard({
  highlight = false,
  dark = false,
  hoverable = false,
  padding = "md",
  children,
  className = "",
  style,
  ...props
}: ReyoCardProps) {
  const getPadding = () => {
    switch (padding) {
      case "none":
        return "0";
      case "sm":
        return "1rem 1.25rem";
      case "lg":
        return "2.5rem";
      case "md":
      default:
        return "2rem";
    }
  };

  const baseStyles: React.CSSProperties = {
    backgroundColor: dark
      ? "var(--color-dark)"
      : highlight
      ? "var(--color-bg-subtle)"
      : "#FFFFFF",
    color: dark ? "#FFFFFF" : "var(--color-text-main)",
    border: dark
      ? "1px solid #27272A"
      : highlight
      ? "1.5px solid var(--color-primary)"
      : "1px solid var(--color-stroke)",
    borderRadius: "var(--radius-xl)",
    padding: getPadding(),
    boxShadow: "none",
    transition: hoverable ? "all 0.2s ease" : undefined,
    position: "relative",
    ...style,
  };

  return (
    <div
      style={baseStyles}
      className={`reyo-card ${hoverable ? "hoverable" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
