import { Star } from "lucide-react";
import ReyoCard from "./ui/ReyoCard";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  country: string;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  avatar,
  country,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <ReyoCard
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "1.5rem",
      }}
    >
      <div>
        {/* Rating Stars */}
        <div style={{ display: "flex", gap: "0.25rem", color: "#F59E0B", marginBottom: "1rem" }}>
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={16} fill="#F59E0B" strokeWidth={0} />
          ))}
        </div>

        <p
          style={{
            fontSize: "1rem",
            color: "var(--color-text-body)",
            lineHeight: 1.65,
            fontStyle: "italic",
          }}
        >
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
        <div
          style={{
            width: "3rem",
            height: "3rem",
            borderRadius: "50%",
            backgroundColor: "var(--color-primary-light)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            color: "var(--color-primary-dark)",
            fontSize: "1.05rem",
            border: "1.5px solid var(--color-primary)",
          }}
        >
          {avatar}
        </div>
        <div>
          <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--color-text-main)", margin: 0 }}>
            {author}
          </h4>
          <p style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", margin: 0 }}>
            {role} • {country}
          </p>
        </div>
      </div>
    </ReyoCard>
  );
}
