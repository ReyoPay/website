import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import ReyoButton from "../../components/ui/ReyoButton";
import ReyoCard from "../../components/ui/ReyoCard";
import SectionStrokeBackground from "../../components/SectionStrokeBackground";

export const metadata: Metadata = {
  title: "Personal & Freelancer Solutions | ReyoPay",
  description:
    "Designed for individuals, remote workers, freelancers, and families sending money across borders with zero fees and real-time rates.",
};

export default function PersonalPage() {
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
          <span className="section-label">For Everyday Life & Work</span>
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              fontWeight: 900,
              marginTop: "0.5rem",
              marginBottom: "1.25rem",
            }}
          >
            Your money without borders, limits, or hidden fees
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--color-text-body)" }}>
            Whether you earn in USD, support family in Francophone West Africa, or split dinner bills with friends, ReyoPay is the everyday wallet built for you.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <ReyoButton
              href="http://localhost:5173"
              size="lg"
              rightIcon={<ArrowRight size={18} />}
            >
              Get Started for Free
            </ReyoButton>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
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
            <ReyoCard padding="lg">
              <div style={{ marginBottom: "0.5rem" }}>
                <span className="section-label">Remote Workers & Freelancers</span>
              </div>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "1rem" }}>
                Receive international earnings without excessive bank cuts
              </h3>
              <p style={{ fontSize: "1.02rem", color: "var(--color-text-body)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                Receive USD, EUR, or GBP payouts from global clients, platforms, and employers. Hold your balance safely or convert to local Naira or CFA whenever the exchange rate is favorable.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.95rem" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Check size={16} color="var(--color-primary-dark)" strokeWidth={2.5} /> Multi-currency holding wallets
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Check size={16} color="var(--color-primary-dark)" strokeWidth={2.5} /> Real-time transparent FX conversion
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Check size={16} color="var(--color-primary-dark)" strokeWidth={2.5} /> Direct withdrawal to local commercial banks
                </li>
              </ul>
            </ReyoCard>

            <ReyoCard padding="lg">
              <div style={{ marginBottom: "0.5rem" }}>
                <span className="section-label">Cross-Border Families</span>
              </div>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "1rem" }}>
                Support loved ones across Africa instantly
              </h3>
              <p style={{ fontSize: "1.02rem", color: "var(--color-text-body)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                Send money from Nigeria to Côte d&apos;Ivoire, Senegal, Benin, and beyond in seconds. Your family receives CFA directly into their wallet without queuing at remittance kiosks.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.95rem" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Check size={16} color="var(--color-primary-dark)" strokeWidth={2.5} /> Instant settlement in seconds (&lt; 3s)
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Check size={16} color="var(--color-primary-dark)" strokeWidth={2.5} /> Transparent rates with zero surprise deductions
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Check size={16} color="var(--color-primary-dark)" strokeWidth={2.5} /> Instant digital receipt on every transfer
                </li>
              </ul>
            </ReyoCard>

            <ReyoCard padding="lg">
              <div style={{ marginBottom: "0.5rem" }}>
                <span className="section-label">Everyday P2P & Bills</span>
              </div>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "1rem" }}>
                Instant zero-fee peer-to-peer transfers
              </h3>
              <p style={{ fontSize: "1.02rem", color: "var(--color-text-body)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                Pay rent, split group tabs, or send pocket money to friends using just their @username. No account numbers to memorize, zero network downtime, and always 100% free.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.95rem" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Check size={16} color="var(--color-primary-dark)" strokeWidth={2.5} /> 0% transaction fee for all P2P sends
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Check size={16} color="var(--color-primary-dark)" strokeWidth={2.5} /> Username lookup and recent contact history
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Check size={16} color="var(--color-primary-dark)" strokeWidth={2.5} /> Biometric & PIN authorization security
                </li>
              </ul>
            </ReyoCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ backgroundColor: "var(--color-dark)", color: "#FFFFFF", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <SectionStrokeBackground variant="cta-glow" opacity={0.4} />
        <div className="container" style={{ maxWidth: "700px", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "2.5rem", color: "#FFFFFF", marginBottom: "1.25rem" }}>
            Join thousands enjoying personal borderless money
          </h2>
          <p style={{ color: "#D4D4D8", fontSize: "1.1rem", marginBottom: "2rem" }}>
            Sign up in under 60 seconds with just your phone number.
          </p>
          <ReyoButton href="http://localhost:5173" size="lg">
            Create Your Account
          </ReyoButton>
        </div>
      </section>
    </>
  );
}
