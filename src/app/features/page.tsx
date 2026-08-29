import Link from "next/link";
import { Check, Zap, Lock, Smartphone, BarChart3, Building2, CreditCard } from "lucide-react";
import FeatureCard from "../../components/FeatureCard";
import ReyoButton from "../../components/ui/ReyoButton";
import ReyoCard from "../../components/ui/ReyoCard";
import SectionStrokeBackground from "../../components/SectionStrokeBackground";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features & Capabilities | ReyoPay",
  description:
    "Explore ReyoPay multi-currency wallets, dedicated virtual bank accounts, instant zero-fee P2P, real-time FX, and immutable ledger accounting.",
};

export default function FeaturesPage() {
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
          <span className="section-label">Platform Capabilities</span>
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              fontWeight: 900,
              marginTop: "0.5rem",
              marginBottom: "1.25rem",
            }}
          >
            Powerful tools for borderless financial freedom
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--color-text-body)" }}>
            Everything you need to hold, convert, send, and manage funds globally with uncompromising speed and mathematical security.
          </p>
        </div>
      </section>

      {/* Feature Deep Dive Sections */}
      <section className="section" style={{ position: "relative", overflow: "hidden" }}>
        <SectionStrokeBackground variant="orbit" opacity={0.25} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          {/* Section 1: Multi-Currency Wallets */}
          <div
            id="wallets"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "3.5rem",
              alignItems: "center",
              marginBottom: "6rem",
            }}
          >
            <div>
              <span className="section-label">Multi-Wallet Architecture</span>
              <h2 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1.25rem" }}>
                One account, unlimited global currencies
              </h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Stop opening separate bank accounts in every jurisdiction. ReyoPay gives you native digital balances in **NGN (Nigerian Naira)**, **XOF (West African CFA Franc)**, **USD**, and **EUR** instantly upon signup.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.85rem", listStyle: "none" }}>
                {[
                  "Segregated wallet balances with real-time conversion",
                  "Support for all 8 WAEMU countries (Côte d'Ivoire, Senegal, Benin, etc.)",
                  "Guaranteed zero currency conversion loss on internal balances",
                ].map((text, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontWeight: 600 }}>
                    <Check size={16} color="var(--color-primary-dark)" strokeWidth={2.5} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <ReyoCard highlight padding="lg">
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { currency: "NGN", name: "Nigerian Naira", balance: "₦3,450,000.00" },
                  { currency: "XOF", name: "West African CFA", balance: "1,820,000 CFA" },
                  { currency: "USD", name: "US Dollar", balance: "$4,250.75" },
                  { currency: "EUR", name: "Euro", balance: "€2,100.00" },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      backgroundColor: "#FFFFFF",
                      padding: "1rem 1.25rem",
                      borderRadius: "var(--radius-lg)",
                      border: "1px solid var(--color-stroke-subtle)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div
                        style={{
                          width: "2.2rem",
                          height: "2.2rem",
                          borderRadius: "50%",
                          backgroundColor: "var(--color-primary-light)",
                          color: "var(--color-primary-dark)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 800,
                          fontSize: "0.8rem",
                        }}
                      >
                        {item.currency}
                      </div>
                      <div>
                        <h4 style={{ fontSize: "0.95rem", fontWeight: 800 }}>{item.currency}</h4>
                        <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>{item.name}</p>
                      </div>
                    </div>
                    <span style={{ fontSize: "1.05rem", fontWeight: 800 }}>{item.balance}</span>
                  </div>
                ))}
              </div>
            </ReyoCard>
          </div>

          {/* Section 2: Dedicated Virtual Accounts (DVA) */}
          <div
            id="dva"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "3.5rem",
              alignItems: "center",
              marginBottom: "6rem",
            }}
          >
            <ReyoCard dark padding="lg">
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "0.75rem" }}>
                Dedicated Virtual Bank Account
              </h3>
              <p style={{ color: "#A1A1AA", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
                Receive bank transfers directly into your ReyoPay wallet with a unique, personal account number.
              </p>
              <div
                style={{
                  backgroundColor: "#27272A",
                  padding: "1.25rem",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  border: "1px solid #3F3F46",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#A1A1AA", fontSize: "0.85rem" }}>Bank Name</span>
                  <span style={{ fontWeight: 700, color: "#FFFFFF" }}>Wema Bank / ReyoPay</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#A1A1AA", fontSize: "0.85rem" }}>Account Number</span>
                  <span style={{ fontWeight: 800, color: "var(--color-primary)", letterSpacing: "0.05em" }}>
                    2234556760
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#A1A1AA", fontSize: "0.85rem" }}>Account Name</span>
                  <span style={{ fontWeight: 700, color: "#FFFFFF" }}>John Doe / ReyoPay</span>
                </div>
              </div>
            </ReyoCard>

            <div>
              <span className="section-label">Instant Inbound Funding</span>
              <h2 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1.25rem" }}>
                Fund your wallet effortlessly via local bank transfer
              </h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                No complicated card authorisations or delayed clearing. Receive a dedicated virtual bank account number linked directly to your NGN balance. Anyone can send you funds from any Nigerian banking app, USSD, or online portal, and your wallet credits in real-time.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.85rem", listStyle: "none" }}>
                {[
                  "Personalized account number assigned exclusively to your name",
                  "Automated webhook settlements powered by Paystack",
                  "Zero delay: funds are available for P2P or FX swaps immediately",
                ].map((text, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontWeight: 600 }}>
                    <Check size={16} color="var(--color-primary-dark)" strokeWidth={2.5} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 3: Instant Zero-Fee P2P */}
          <div
            id="p2p"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "3.5rem",
              alignItems: "center",
            }}
          >
            <div>
              <span className="section-label">Instant Peer-to-Peer</span>
              <h2 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1.25rem" }}>
                Pay anyone instantly with just their @username
              </h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Never ask for a 10-digit account number or branch code again. Send money to friends, family, and colleagues instantly with zero transfer fees.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.85rem", listStyle: "none" }}>
                {[
                  "Send with @username or verified phone number",
                  "Instant receipt download and transaction sharing",
                  "Protected by 4-digit security transaction PIN and OTP",
                ].map((text, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontWeight: 600 }}>
                    <Check size={16} color="var(--color-primary-dark)" strokeWidth={2.5} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <ReyoCard highlight padding="lg" style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "4.5rem",
                  height: "4.5rem",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-primary-light)",
                  color: "var(--color-primary-dark)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <Zap size={32} />
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                Send to @username
              </h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
                Fee: ₦0.00 • Speed: Under 3 Seconds
              </p>
              <ReyoButton href="http://localhost:5173" fullWidth size="lg">
                Try It on the App
              </ReyoButton>
            </ReyoCard>
          </div>
        </div>
      </section>

      {/* Grid of secondary capabilities */}
      <section className="section" style={{ backgroundColor: "#F9FAFB", position: "relative", overflow: "hidden" }}>
        <SectionStrokeBackground variant="topography" opacity={0.22} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3.5rem auto" }}>
            <h2 style={{ fontSize: "2.2rem" }}>More reasons to love ReyoPay</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            <FeatureCard
              icon={<Lock size={24} />}
              tag="Security"
              title="Immutable Financial Ledger"
              description="Every transaction creates an append-only double entry record protected by database-level triggers to guarantee mathematical integrity."
            />
            <FeatureCard
              icon={<Smartphone size={24} />}
              tag="Mobile-First"
              title="Phone-First Authentication"
              description="No lengthy KYC bottlenecks. Get started instantly with verified phone OTPs and biometric security."
            />
            <FeatureCard
              icon={<BarChart3 size={24} />}
              tag="Analytics"
              title="Real-Time Transaction Audit"
              description="Detailed receipts, downloadable statements, and complete transaction history stored with timestamped audit logs."
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section" style={{ backgroundColor: "var(--color-dark)", color: "#FFFFFF", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <SectionStrokeBackground variant="cta-glow" opacity={0.4} />
        <div className="container" style={{ maxWidth: "700px", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "2.5rem", color: "#FFFFFF", marginBottom: "1.25rem" }}>
            Experience all features today
          </h2>
          <p style={{ color: "#D4D4D8", fontSize: "1.1rem", marginBottom: "2rem" }}>
            Join thousands of smart individuals and businesses building on ReyoPay.
          </p>
          <ReyoButton href="http://localhost:5173" size="lg">
            Open Your Free Account
          </ReyoButton>
        </div>
      </section>
    </>
  );
}
