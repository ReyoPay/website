import type { Metadata } from "next";
import { ShieldCheck, Lock, Smartphone, Building2, Eye, FileCheck } from "lucide-react";
import FeatureCard from "../../components/FeatureCard";
import ReyoCard from "../../components/ui/ReyoCard";
import SectionStrokeBackground from "../../components/SectionStrokeBackground";

export const metadata: Metadata = {
  title: "Bank-Grade Security & Immutable Ledger | ReyoPay",
  description:
    "Discover how ReyoPay protects user funds through double-entry immutable ledgers, 256-bit encryption, multi-factor authentication, and segregated partner bank custody.",
};

export default function SecurityPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          padding: "5.5rem 0 4.5rem 0",
          background: "linear-gradient(180deg, #FFFFFF 0%, #F6FFFC 100%)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <SectionStrokeBackground variant="orbit" opacity={0.28} />
        <div className="container" style={{ maxWidth: "800px", position: "relative", zIndex: 1 }}>
          <span className="section-label">Security & Compliance</span>
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              fontWeight: 900,
              marginTop: "0.5rem",
              marginBottom: "1.25rem",
            }}
          >
            Bank-grade security and cryptographic ledger integrity
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--color-text-body)" }}>
            Your money and personal data are shielded by bank-grade AES 256-bit encryption, immutable transaction ledgers, and multi-factor authorization.
          </p>
        </div>
      </section>

      {/* Security Pillars Grid */}
      <section className="section" style={{ position: "relative", overflow: "hidden" }}>
        <SectionStrokeBackground variant="waves" opacity={0.25} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.5rem",
              marginBottom: "5rem",
            }}
          >
            <FeatureCard
              icon={<ShieldCheck size={24} />}
              tag="Core Engine"
              title="Immutable Double-Entry Ledger"
              description="Every credit and debit is permanently recorded in an append-only ledger protected by database-level triggers. No ledger entry can ever be altered or erased."
              highlight
            />
            <FeatureCard
              icon={<Lock size={24} />}
              tag="Data Protection"
              title="AES 256-Bit Encryption"
              description="All sensitive user data and authentication tokens are encrypted in transit via TLS 1.3 and at rest with military-grade AES-256 standards."
            />
            <FeatureCard
              icon={<Smartphone size={24} />}
              tag="Access Security"
              title="Multi-Factor Auth & PIN Protection"
              description="Every transaction requires your personal 4-digit PIN, while account access is fortified with instant phone SMS OTP verifications."
            />
            <FeatureCard
              icon={<Building2 size={24} />}
              tag="Fund Custody"
              title="Segregated Partner Bank Custody"
              description="Customer fiat funds are held in ring-fenced segregated accounts with fully licensed partner financial institutions and payment gateways."
            />
            <FeatureCard
              icon={<Eye size={24} />}
              tag="Fraud Prevention"
              title="Real-Time Automated Monitoring"
              description="Continuous anomaly detection and IP rate-limiting to protect against credential stuffing, automated bots, and unauthorized transactions."
            />
            <FeatureCard
              icon={<FileCheck size={24} />}
              tag="Auditability"
              title="Comprehensive Audit Logging"
              description="Every user login, wallet transfer, deposit event, and webhook execution is timestamped and recorded in permanent structured audit logs."
            />
          </div>

          {/* Deep Dive into Immutable Accounting (ReyoCard dark) */}
          <ReyoCard
            dark
            padding="lg"
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            <div style={{ marginBottom: "0.5rem" }}>
              <span className="section-label-dark">Technical Transparency</span>
            </div>
            <h2 style={{ fontSize: "2.2rem", color: "#FFFFFF", marginBottom: "1.25rem" }}>
              Why our Immutable Ledger matters for you
            </h2>
            <p style={{ color: "#D4D4D8", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              In traditional software architectures, database balance fields can be accidentally overwritten or corrupted during network dropouts or system crashes. 
            </p>
            <p style={{ color: "#D4D4D8", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              ReyoPay eliminates this possibility. Every financial interaction is treated as an immutable ledger transaction with strict ACID (Atomicity, Consistency, Isolation, Durability) compliance. If any single step fails, the entire transaction is rolled back cleanly. Your wallet balance is the verified mathematical sum of all your immutable historical entries.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1.5rem",
                borderTop: "1px solid #27272A",
                paddingTop: "2rem",
              }}
            >
              <div>
                <h4 style={{ color: "var(--color-primary)", fontSize: "1.3rem", fontWeight: 800 }}>Zero Drift</h4>
                <p style={{ color: "#A1A1AA", fontSize: "0.92rem", marginTop: "0.4rem" }}>
                  Mathematical balance verification across every single wallet.
                </p>
              </div>
              <div>
                <h4 style={{ color: "var(--color-primary)", fontSize: "1.3rem", fontWeight: 800 }}>ACID Safe</h4>
                <p style={{ color: "#A1A1AA", fontSize: "0.92rem", marginTop: "0.4rem" }}>
                  Zero partial transfer failures; all-or-nothing execution.
                </p>
              </div>
              <div>
                <h4 style={{ color: "var(--color-primary)", fontSize: "1.3rem", fontWeight: 800 }}>Signed Webhooks</h4>
                <p style={{ color: "#A1A1AA", fontSize: "0.92rem", marginTop: "0.4rem" }}>
                  HMAC SHA-512 signature validation on all external events.
                </p>
              </div>
            </div>
          </ReyoCard>
        </div>
      </section>
    </>
  );
}
