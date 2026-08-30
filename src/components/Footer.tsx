import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--color-dark)",
        color: "#A1A1AA",
        paddingTop: "5rem",
        paddingBottom: "3rem",
        borderTop: "1px solid #27272A",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: "340px" }}>
            <Logo variant="dark" size="lg" />
            <p
              style={{
                marginTop: "1.25rem",
                fontSize: "0.95rem",
                lineHeight: 1.6,
                color: "#A1A1AA",
              }}
            >
              Fast, fair, borderless personal finance. Hold multiple currencies, send money instantly with zero fees, and grow your wealth with bank-grade security.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginTop: "1.5rem",
              }}
            >
              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "2.4rem",
                  height: "2.4rem",
                  borderRadius: "50%",
                  backgroundColor: "#27272A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  transition: "background-color 0.2s ease",
                }}
                aria-label="ReyoPay on Twitter"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "2.4rem",
                  height: "2.4rem",
                  borderRadius: "50%",
                  backgroundColor: "#27272A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                }}
                aria-label="ReyoPay on LinkedIn"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.91 0-1.64.73-1.64 1.64s.73 1.64 1.64 1.64 1.64-.73 1.64-1.64-.73-1.64-1.64-1.64Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "2.4rem",
                  height: "2.4rem",
                  borderRadius: "50%",
                  backgroundColor: "#27272A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                }}
                aria-label="ReyoPay on Instagram"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Features / Capabilities Column */}
          <div>
            <h4
              style={{
                color: "#FFFFFF",
                fontSize: "1.05rem",
                fontWeight: 700,
                marginBottom: "1.25rem",
              }}
            >
              Personal Wallet
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <li>
                <Link href="/#features" style={{ color: "#A1A1AA" }}>
                  Multi-Currency Holding
                </Link>
              </li>
              <li>
                <Link href="/#features" style={{ color: "#A1A1AA" }}>
                  Instant Zero-Fee P2P
                </Link>
              </li>
              <li>
                <Link href="/#features" style={{ color: "#A1A1AA" }}>
                  Virtual Bank Accounts (DVA)
                </Link>
              </li>
              <li>
                <Link href="/#calculator" style={{ color: "#A1A1AA" }}>
                  Transparent FX Swaps
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" style={{ color: "#A1A1AA" }}>
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Who It's For Column */}
          <div>
            <h4
              style={{
                color: "#FFFFFF",
                fontSize: "1.05rem",
                fontWeight: 700,
                marginBottom: "1.25rem",
              }}
            >
              Everyday Life
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <li>
                <Link href="/#use-cases" style={{ color: "#A1A1AA" }}>
                  Remote Workers & Freelancers
                </Link>
              </li>
              <li>
                <Link href="/#use-cases" style={{ color: "#A1A1AA" }}>
                  Cross-Border Families
                </Link>
              </li>
              <li>
                <Link href="/#use-cases" style={{ color: "#A1A1AA" }}>
                  Everyday P2P & Bills
                </Link>
              </li>
              <li>
                <Link href="/security" style={{ color: "#A1A1AA" }}>
                  Immutable Ledger Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4
              style={{
                color: "#FFFFFF",
                fontSize: "1.05rem",
                fontWeight: 700,
                marginBottom: "1.25rem",
              }}
            >
              Company & Legal
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <li>
                <Link href="/about" style={{ color: "#A1A1AA" }}>
                  About ReyoPay
                </Link>
              </li>
              <li>
                <Link href="/security" style={{ color: "#A1A1AA" }}>
                  Security & Compliance
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: "#A1A1AA" }}>
                  Help & Support
                </Link>
              </li>
              <li>
                <Link href="/terms" style={{ color: "#A1A1AA" }}>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" style={{ color: "#A1A1AA" }}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid #27272A",
            paddingTop: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              lineHeight: 1.6,
              color: "#71717A",
            }}
          >
            ReyoPay is a personal financial technology platform. Dedicated virtual bank account and payment services are provided in partnership with licensed financial institutions and payment gateways. User funds are held in segregated accounts with regulated partner banks.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              fontSize: "0.85rem",
              color: "#71717A",
            }}
          >
            <p>© {currentYear} ReyoPay Inc. All rights reserved.</p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/privacy" style={{ color: "#A1A1AA" }}>
                Privacy
              </Link>
              <Link href="/terms" style={{ color: "#A1A1AA" }}>
                Terms
              </Link>
              <Link href="/security" style={{ color: "#A1A1AA" }}>
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
