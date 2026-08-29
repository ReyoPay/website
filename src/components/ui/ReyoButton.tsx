import React from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "outline" | "dark" | "white" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ReyoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export default function ReyoButton({
  variant = "primary",
  size = "md",
  href,
  external = false,
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  children,
  className = "",
  disabled,
  style,
  ...props
}: ReyoButtonProps) {
  // Styles based on variant
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: "var(--color-primary)",
          color: "var(--color-dark)",
          borderColor: "var(--color-primary)",
        };
      case "secondary":
        return {
          backgroundColor: "#FFFFFF",
          color: "var(--color-dark)",
          borderColor: "var(--color-stroke)",
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          color: "var(--color-primary-dark)",
          borderColor: "var(--color-primary)",
        };
      case "dark":
        return {
          backgroundColor: "var(--color-dark)",
          color: "#FFFFFF",
          borderColor: "var(--color-dark)",
        };
      case "white":
        return {
          backgroundColor: "#FFFFFF",
          color: "var(--color-dark)",
          borderColor: "var(--color-stroke)",
        };
      case "ghost":
        return {
          backgroundColor: "transparent",
          color: "var(--color-text-main)",
          borderColor: "transparent",
        };
      default:
        return {};
    }
  };

  // Styles based on size
  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
      case "sm":
        return {
          padding: "0.55rem 1.2rem",
          fontSize: "0.88rem",
          gap: "0.4rem",
        };
      case "lg":
        return {
          padding: "1rem 2.2rem",
          fontSize: "1.05rem",
          gap: "0.6rem",
        };
      case "md":
      default:
        return {
          padding: "0.85rem 1.8rem",
          fontSize: "0.98rem",
          gap: "0.5rem",
        };
    }
  };

  const combinedStyles: React.CSSProperties = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    borderRadius: "var(--radius-full)",
    cursor: disabled || loading ? "not-allowed" : "pointer",
    opacity: disabled || loading ? 0.65 : 1,
    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
    border: "1px solid transparent",
    textDecoration: "none",
    whiteSpace: "nowrap",
    boxShadow: "none",
    ...getVariantStyles(),
    ...getSizeStyles(),
    ...style,
  };

  const content = (
    <>
      {loading ? (
        <span
          style={{
            width: "1.1rem",
            height: "1.1rem",
            border: "2px solid currentColor",
            borderTopColor: "transparent",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
            display: "inline-block",
          }}
        />
      ) : (
        leftIcon
      )}
      {children}
      {!loading && rightIcon}
    </>
  );

  if (href) {
    if (external || href.startsWith("http")) {
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          style={combinedStyles}
          className={`btn ${className}`}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} style={combinedStyles} className={`btn ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled || loading}
      style={combinedStyles}
      className={`btn ${className}`}
      {...props}
    >
      {content}
    </button>
  );
}
