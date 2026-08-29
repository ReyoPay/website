import React from "react";
import ReyoCard from "./ui/ReyoCard";

interface FeatureCardProps {
  icon: React.ReactNode;
  tag?: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export default function FeatureCard({
  icon,
  tag,
  title,
  description,
  highlight = false,
}: FeatureCardProps) {
  return (
    <ReyoCard
      highlight={highlight}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "3.25rem",
            height: "3.25rem",
            borderRadius: "1rem",
            backgroundColor: "var(--color-primary-light)",
            color: "var(--color-primary-dark)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </div>
        {tag && (
          <span
            style={{
              fontSize: "0.78rem",
              fontWeight: 800,
              color: "var(--color-primary-dark)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            {tag}
          </span>
        )}
      </div>

      <h3
        style={{
          fontSize: "1.35rem",
          fontWeight: 800,
          color: "var(--color-text-main)",
          marginTop: "0.25rem",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: "0.98rem",
          color: "var(--color-text-body)",
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </ReyoCard>
  );
}
