import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
  showText?: boolean;
  className?: string;
}

export default function Logo({
  size = "md",
  variant = "light",
  showText = true,
  className = "",
}: LogoProps) {
  const iconDimensions = {
    sm: { width: 22, height: 17 },
    md: { width: 28, height: 22 },
    lg: { width: 36, height: 28 },
  }[size];

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }[size];

  const textColor = variant === "dark" ? "#FFFFFF" : "#0F0F0F";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 transition-transform hover:opacity-90 ${className}`}
      style={{ display: "inline-flex", alignItems: "center", gap: "0.65rem", textDecoration: "none" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconDimensions.width}
        height={iconDimensions.height}
        viewBox="0 0 24 19"
        fill="none"
        style={{ flexShrink: 0 }}
      >
        <path
          d="M2.9656 4.61984L0.868 1.21915L0.5 0.588098C5.468 0.517981 15.8824 0.431074 17.8328 0.588098C20.0408 0.76586 22.0118 2.30597 22.58 3.18244C23.1937 4.12902 23.8691 6.44289 22.6904 8.47629C21.3288 10.8252 18.0045 11.6549 16.0664 12.1574L23.5 18.1875C20.7768 18.7835 16.508 18.7835 11.4296 15.8386C8.80882 14.3188 5.95867 11.4095 4.9528 9.98381C8.69413 9.1424 16.0664 7.66994 17.3176 6.58312C18.203 5.81408 17.3544 4.51466 14.8152 4.51466C14.0606 4.51466 6.84187 4.51466 2.9656 4.61984Z"
          fill="#00DBB7"
        />
        <path
          d="M16.0664 12.1574L23.5 18.1875C20.7768 18.7835 16.508 18.7835 11.4296 15.8386C8.80881 14.3188 5.95867 11.4095 4.9528 9.98381C8.69413 9.1424 16.0664 7.66994 17.3176 6.58312C18.203 5.81408 17.3544 4.51466 14.8152 4.51466C14.0606 4.51466 6.84187 4.51466 2.9656 4.61984L0.868 1.21915L0.5 0.588098C5.468 0.517981 15.8824 0.431074 17.8328 0.588098C20.0408 0.76586 22.0118 2.30597 22.58 3.18244C23.1937 4.12902 23.8691 6.44289 22.6904 8.47629C21.3288 10.8252 18.0045 11.6549 16.0664 12.1574ZM16.0664 12.1574L9.1112 13.9104"
          stroke="#00B698"
          strokeLinejoin="round"
        />
      </svg>
      {showText && (
        <span
          style={{
            fontSize: size === "sm" ? "1.2rem" : size === "lg" ? "1.75rem" : "1.45rem",
            fontWeight: 850,
            color: textColor,
            letterSpacing: "-0.03em",
          }}
        >
          ReyoPay
        </span>
      )}
    </Link>
  );
}
