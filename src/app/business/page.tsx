import type { Metadata } from "next";
import { Building2, Users, Code2, ShieldCheck, ArrowLeftRight, Zap } from "lucide-react";
import FeatureCard from "../../components/FeatureCard";
import ReyoButton from "../../components/ui/ReyoButton";
import SectionStrokeBackground from "../../components/SectionStrokeBackground";

export const metadata: Metadata = {
  title: "Business & Enterprise Solutions | ReyoPay",
  description:
    "Accept multi-currency payments, issue dedicated virtual accounts to customers, execute bulk payroll, and integrate robust fintech APIs.",
};

export default function BusinessPage() {
  return (
    <>
      {/* Hero Header */}
      <section
        style={{
          padding: "5.5rem 0 4.5rem 0",
          background: "linear-gradient(180deg, #FFFFFF 0%, #F6FFFC 100%)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <SectionStrokeBackground variant="waves" opacity={0.28} />
        <div className="container" style={{ maxWidth: "800px", position: "relative", zIndex: 1 }}>
          <span className="section-label">For Merchants, Startups & Enterprises</span>
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              fontWeight: 900,
              marginTop: "0.5rem",
              marginBottom: "1.25rem",
            }}
          >
            Scale cross-border commerce with multi-currency infrastructure
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--color-text-body)" }}>
            Accept customer payments across Africa, manage supplier settlements in CFA and Naira, automate payroll, and integrate with developer-friendly APIs.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <ReyoButton href="http://localhost:5173" size="lg">
              Create Business Account
            </ReyoButton>
            <ReyoButton href="/contact" variant="secondary" size="lg">
              Talk to Sales
            </ReyoButton>
          </div>
        </div>
      </section>

      {/* Business Features Grid */}
      <section className="section" style={{ position: "relative", overflow: "hidden" }}>
        <SectionStrokeBackground variant="orbit" opacity={0.25} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.5rem",
            }}
          >
            <FeatureCard
              icon={<Building2 size={24} />}
              tag="Billing & Collections"
              title="Dedicated Virtual Accounts for Clients"
              description="Issue unique virtual bank account numbers to every customer or invoice. Reconcile bank transfers automatically with instant webhook events."
            />
            <FeatureCard
              icon={<Users size={24} />}
              tag="Bulk Payroll"
              title="Global Team & Contractor Disbursements"
              description="Pay contractors, remote teams, and regional staff across Nigeria, West Africa, and abroad in a single click with automated bulk batching."
            />
            <FeatureCard
              icon={<Code2 size={24} />}
              tag="Developer APIs"
              title="RESTful Webhooks & API Integration"
              description="Integrate our robust API to generate wallets, query transaction histories, initiate transfers, and verify bank account numbers automatically."
            />
            <FeatureCard
              icon={<ShieldCheck size={24} />}
              tag="Compliance & Audit"
              title="ACID-Compliant Immutable Ledger"
              description="Ensure 100% accounting accuracy for board audits and tax reconciliation with cryptographic immutable double-entry ledger trails."
            />
            <FeatureCard
              icon={<ArrowLeftRight size={24} />}
              tag="Treasury Management"
              title="Multi-Currency FX Hedging"
              description="Hold funds in stable currencies, convert as needed, and protect your business balance sheet from currency volatility with live market rates."
            />
            <FeatureCard
              icon={<Zap size={24} />}
              tag="Instant Settlement"
              title="High-Volume Throughput"
              description="Engineered to handle thousands of concurrent transactions with 99.99% uptime and zero payment drops."
            />
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="section" style={{ backgroundColor: "var(--color-dark)", color: "#FFFFFF", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <SectionStrokeBackground variant="cta-glow" opacity={0.4} />
        <div className="container" style={{ maxWidth: "700px", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "2.5rem", color: "#FFFFFF", marginBottom: "1.25rem" }}>
            Ready to power your business payments?
          </h2>
          <p style={{ color: "#D4D4D8", fontSize: "1.1rem", marginBottom: "2rem" }}>
            Get started today or contact our enterprise team for customized enterprise plans and API access.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <ReyoButton href="http://localhost:5173" size="lg">
              Start Free Trial
            </ReyoButton>
            <ReyoButton href="/contact" variant="white" size="lg">
              Contact Enterprise Sales
            </ReyoButton>
          </div>
        </div>
      </section>
    </>
  );
}
