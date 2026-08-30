import type { Metadata } from "next";
import ReyoButton from "../../components/ui/ReyoButton";
import ReyoCard from "../../components/ui/ReyoCard";
import SectionStrokeBackground from "../../components/SectionStrokeBackground";

export const metadata: Metadata = {
  title: "About Us & Our Mission | ReyoPay",
  description:
    "Learn about ReyoPay, our mission to build borderless financial infrastructure for Africa, and our commitment to speed, fairness, and security.",
};

export default function AboutPage() {
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
        <SectionStrokeBackground variant="waves" opacity={0.28} />
        <div className="container" style={{ maxWidth: "800px", position: "relative", zIndex: 1 }}>
          <span className="section-label">Our Mission</span>
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              fontWeight: 900,
              marginTop: "0.5rem",
              marginBottom: "1.25rem",
            }}
          >
            Building the borderless financial bridge for Africa and beyond
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--color-text-body)" }}>
            We believe that moving money between currencies, countries, and people should be as fast and effortless as sending a text message.
          </p>
        </div>
      </section>

      {/* Story & Vision */}
      <section className="section" style={{ position: "relative", overflow: "hidden" }}>
        <SectionStrokeBackground variant="topography" opacity={0.22} />
        <div className="container" style={{ maxWidth: "900px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", fontSize: "1.1rem", lineHeight: 1.8 }}>
            <div>
              <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--color-text-main)" }}>
                Why ReyoPay exists
              </h2>
              <p style={{ color: "var(--color-text-body)", marginBottom: "1.25rem" }}>
                For decades, transferring funds between neighboring African countries—like Nigeria and West African Francophone states (Côte d&apos;Ivoire, Senegal, Benin)—meant enduring high remittance markups, arbitrary bank delays, and cumbersome currency conversions.
              </p>
              <p style={{ color: "var(--color-text-body)" }}>
                Meanwhile, remote workers, freelancers, and individuals earning or sending money across borders faced punitive bank wire fees and delays just to receive their hard-earned global currencies. We founded **ReyoPay** to eliminate these artificial barriers through modern financial technology and cryptographic ledger guarantees.
              </p>
            </div>

            {/* Core Values Grid */}
            <div style={{ marginTop: "2rem" }}>
              <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "var(--color-text-main)" }}>
                Our Core Values
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {[
                  {
                    title: "Radical Transparency",
                    desc: "No hidden percentage markups or surprise maintenance charges. What you see is what you get.",
                  },
                  {
                    title: "Relentless Speed",
                    desc: "Transactions settle in seconds, not banking days. We believe your money belongs to you right now.",
                  },
                  {
                    title: "Bank-Grade Integrity",
                    desc: "Immutable ledger accounting, multi-layer encryption, and strict ACID transaction safety.",
                  },
                  {
                    title: "Pan-African Inclusion",
                    desc: "Connecting Anglophone and Francophone economies into one seamless, unified liquidity network.",
                  },
                ].map((val, i) => (
                  <ReyoCard key={i} padding="md">
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                      {val.title}
                    </h3>
                    <p style={{ fontSize: "0.95rem", color: "var(--color-text-body)", lineHeight: 1.6 }}>
                      {val.desc}
                    </p>
                  </ReyoCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="section" style={{ backgroundColor: "var(--color-dark)", color: "#FFFFFF", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <SectionStrokeBackground variant="cta-glow" opacity={0.4} />
        <div className="container" style={{ maxWidth: "700px", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "2.5rem", color: "#FFFFFF", marginBottom: "1.25rem" }}>
            Join the journey
          </h2>
          <p style={{ color: "#D4D4D8", fontSize: "1.1rem", marginBottom: "2rem" }}>
            Experience modern borderless money movement with ReyoPay.
          </p>
          <ReyoButton href="http://localhost:5173" size="lg">
            Get Started Free
          </ReyoButton>
        </div>
      </section>
    </>
  );
}
