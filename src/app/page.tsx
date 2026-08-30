import Link from "next/link";
import {
  ArrowRight,
  Check,
  CreditCard,
  Zap,
  Building2,
  ArrowLeftRight,
  ShieldCheck,
  Smartphone,
  Globe2,
  Users,
  Briefcase,
} from "lucide-react";
import CurrencyWidget from "../components/CurrencyWidget";
import FAQSection from "../components/FAQSection";
import TestimonialCard from "../components/TestimonialCard";
import ReyoButton from "../components/ui/ReyoButton";
import ReyoCard from "../components/ui/ReyoCard";
import HeroStrokeBackground from "../components/HeroStrokeBackground";
import SectionStrokeBackground from "../components/SectionStrokeBackground";
import ModernFeaturesShowcase from "../components/ModernFeaturesShowcase";

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION (Centered with Faint Abstract Stroke Background) */}
      <section
        style={{
          position: "relative",
          paddingTop: "6.5rem",
          paddingBottom: "7rem",
          background: "linear-gradient(180deg, #FFFFFF 0%, #F6FFFC 60%, #FFFFFF 100%)",
          overflow: "hidden",
        }}
      >
        {/* Abstract Drawing Background (Faint Strokes only) */}
        <HeroStrokeBackground />

        {/* Ambient Subtle Theme Glow */}
        <div className="hero-glow" />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              maxWidth: "880px",
              margin: "0 auto",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(2.7rem, 6vw, 4.6rem)",
                lineHeight: 1.1,
                fontWeight: 900,
                letterSpacing: "-0.035em",
                color: "#0F0F0F",
                marginBottom: "1.5rem",
                maxWidth: "820px",
              }}
            >
              Send. Save. <br />
              <span className="text-gradient">Grow with confidence.</span>
            </h1>

            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: 1.65,
                color: "var(--color-text-body)",
                maxWidth: "680px",
                margin: "0 auto 2.5rem auto",
              }}
            >
              The personal multi-currency financial platform built for Africa and the world. Hold NGN, XOF (CFA), USD, and EUR. Move money with zero P2P fees, instant virtual bank accounts, and bank-grade immutable ledgers.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                marginBottom: "3rem",
              }}
            >
              <ReyoButton
                href="http://localhost:5173"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight size={18} />}
              >
                Open Free Account
              </ReyoButton>
              <ReyoButton
                href="#features"
                variant="secondary"
                size="lg"
              >
                Explore Features
              </ReyoButton>
            </div>

            {/* Trust Badges */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "2.25rem",
                paddingTop: "1.75rem",
                borderTop: "1px solid var(--color-stroke)",
                color: "var(--color-text-muted)",
                fontSize: "0.92rem",
                fontWeight: 600,
                width: "100%",
                maxWidth: "700px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <Check size={16} color="var(--color-primary-dark)" strokeWidth={2.5} />
                0% P2P Transfer Fee
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <Check size={16} color="var(--color-primary-dark)" strokeWidth={2.5} />
                Dedicated Bank Accounts
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <Check size={16} color="var(--color-primary-dark)" strokeWidth={2.5} />
                256-Bit Bank Encryption
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BANNER STRIP */}
      <section
        style={{
          backgroundColor: "var(--color-dark)",
          color: "#FFFFFF",
          padding: "3rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <SectionStrokeBackground variant="topography" opacity={0.2} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "2rem",
              textAlign: "center",
            }}
          >
            <div>
              <h3 style={{ fontSize: "2.4rem", fontWeight: 900, color: "var(--color-primary)" }}>
                &lt; 3s
              </h3>
              <p style={{ fontSize: "0.92rem", color: "#A1A1AA", marginTop: "0.25rem" }}>
                Instant Transfer Speed
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "2.4rem", fontWeight: 900, color: "#FFFFFF" }}>
                ₦0.00
              </h3>
              <p style={{ fontSize: "0.92rem", color: "#A1A1AA", marginTop: "0.25rem" }}>
                P2P Username Fee
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "2.4rem", fontWeight: 900, color: "var(--color-primary)" }}>
                99.99%
              </h3>
              <p style={{ fontSize: "0.92rem", color: "#A1A1AA", marginTop: "0.25rem" }}>
                Platform Uptime SLA
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "2.4rem", fontWeight: 900, color: "#FFFFFF" }}>
                100%
              </h3>
              <p style={{ fontSize: "0.92rem", color: "#A1A1AA", marginTop: "0.25rem" }}>
                Immutable Ledger Audited
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE FEATURES SECTION (Faint Flowing Waves Background + Modern Bento Layout) */}
      <section id="features" className="section" style={{ position: "relative", overflow: "hidden" }}>
        <SectionStrokeBackground variant="waves" opacity={0.25} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 4rem auto" }}>
            <span className="section-label">Platform Capabilities</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 2.8rem)",
                marginTop: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              Powerful tools for borderless financial freedom
            </h2>
            <p style={{ fontSize: "1.1rem" }}>
              Hold, convert, send, and manage funds globally with uncompromising speed, zero hidden fees, and mathematical ledger security.
            </p>
          </div>

          {/* Modern Asymmetric Bento Arrangement Showcase */}
          <ModernFeaturesShowcase />
        </div>
      </section>

      {/* 4. WHO IT'S FOR / EVERYDAY LIFE & WORK (Merged from Personal Page) */}
      <section
        id="use-cases"
        className="section"
        style={{
          backgroundColor: "#F9FAFB",
          borderTop: "1px solid var(--color-stroke-subtle)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <SectionStrokeBackground variant="orbit" opacity={0.22} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem auto" }}>
            <span className="section-label">Designed for Everyday Life</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 2.8rem)",
                marginTop: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              Your money without borders, limits, or hidden fees
            </h2>
            <p style={{ fontSize: "1.1rem" }}>
              Whether you earn in USD, support family in West Africa, or split dinner bills with friends, ReyoPay is the everyday wallet built for you.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* Card 1: Remote Workers & Freelancers */}
            <ReyoCard padding="lg">
              <div style={{ marginBottom: "0.5rem" }}>
                <span className="section-label">Remote Workers & Freelancers</span>
              </div>
              <h3 style={{ fontSize: "1.45rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                Receive international earnings without excessive bank cuts
              </h3>
              <p style={{ fontSize: "0.98rem", color: "var(--color-text-body)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                Receive USD, EUR, or GBP payouts from global clients, platforms, and employers. Hold your balance safely or convert to local Naira or CFA whenever the exchange rate is favorable.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.92rem" }}>
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

            {/* Card 2: Cross-Border Families */}
            <ReyoCard padding="lg">
              <div style={{ marginBottom: "0.5rem" }}>
                <span className="section-label">Cross-Border Families</span>
              </div>
              <h3 style={{ fontSize: "1.45rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                Support loved ones across Africa instantly
              </h3>
              <p style={{ fontSize: "0.98rem", color: "var(--color-text-body)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                Send money from Nigeria to Côte d&apos;Ivoire, Senegal, Benin, and beyond in seconds. Your family receives CFA directly into their wallet without queuing at remittance kiosks.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.92rem" }}>
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

            {/* Card 3: Everyday P2P & Bills */}
            <ReyoCard padding="lg">
              <div style={{ marginBottom: "0.5rem" }}>
                <span className="section-label">Everyday P2P & Bills</span>
              </div>
              <h3 style={{ fontSize: "1.45rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                Instant zero-fee peer-to-peer transfers
              </h3>
              <p style={{ fontSize: "0.98rem", color: "var(--color-text-body)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                Pay rent, split group tabs, or send pocket money to friends using just their @username. No account numbers to memorize, zero network downtime, and always 100% free.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.92rem" }}>
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

      {/* 5. LIVE FX CALCULATOR & COMPARISON SECTION (Faint Connecting Ribbon Background) */}
      <section
        id="calculator"
        className="section"
        style={{
          backgroundColor: "var(--color-bg-subtle)",
          borderTop: "1px solid var(--color-stroke-subtle)",
          borderBottom: "1px solid var(--color-stroke-subtle)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <SectionStrokeBackground variant="flow-connect" opacity={0.25} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* Left Info */}
            <div>
              <span className="section-label">Transparent Conversion</span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
                  marginTop: "0.5rem",
                  marginBottom: "1.25rem",
                }}
              >
                No hidden fees. Real-time rates. Maximum savings.
              </h2>
              <p style={{ fontSize: "1.08rem", marginBottom: "2rem" }}>
                Traditional banks and remittance services charge up to 7% in hidden exchange rate markups and administrative fees. ReyoPay provides real-time interbank rates and zero surprise charges.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
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
                      flexShrink: 0,
                    }}
                  >
                    1
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.05rem", fontWeight: 700 }}>Zero Spread Padding</h4>
                    <p style={{ fontSize: "0.92rem" }}>
                      Get the true market rate for your currency conversions.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
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
                      flexShrink: 0,
                    }}
                  >
                    2
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.05rem", fontWeight: 700 }}>Instant Delivery Guarantee</h4>
                    <p style={{ fontSize: "0.92rem" }}>
                      Funds settle immediately into the recipient&apos;s wallet balance without waiting days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Currency Calculator */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CurrencyWidget />
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS (Faint Orbital Stroke Background) */}
      <section id="how-it-works" className="section" style={{ position: "relative", overflow: "hidden" }}>
        <SectionStrokeBackground variant="orbit" opacity={0.24} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 4rem auto" }}>
            <span className="section-label">Simple Onboarding</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 2.8rem)",
                marginTop: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              Get started in three simple steps
            </h2>
            <p style={{ fontSize: "1.1rem" }}>
              No lengthy bank lines or complicated paperwork. Access the global economy in minutes.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                step: "01",
                title: "Register with your phone",
                description:
                  "Enter your phone number, verify the 6-digit SMS OTP, choose your secure password, and claim your unique @username.",
              },
              {
                step: "02",
                title: "Fund your account",
                description:
                  "Deposit Naira via your Dedicated Virtual Account, fund with debit/credit card, or receive money from another ReyoPay user.",
              },
              {
                step: "03",
                title: "Send, convert & save",
                description:
                  "Send money globally, swap currencies instantly at zero markup, or withdraw directly to your local bank account.",
              },
            ].map((item, i) => (
              <ReyoCard key={i} padding="lg">
                <span
                  style={{
                    fontSize: "3rem",
                    fontWeight: 900,
                    color: "var(--color-primary-light)",
                    display: "block",
                    lineHeight: 1,
                    marginBottom: "1rem",
                  }}
                >
                  {item.step}
                </span>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.98rem", color: "var(--color-text-body)" }}>
                  {item.description}
                </p>
              </ReyoCard>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS & SOCIAL PROOF (Faint Topography Stroke Background) */}
      <section
        id="stories"
        className="section"
        style={{
          backgroundColor: "#F9FAFB",
          borderTop: "1px solid var(--color-stroke-subtle)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <SectionStrokeBackground variant="topography" opacity={0.24} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3.5rem auto" }}>
            <span className="section-label">User Stories</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 2.8rem)",
                marginTop: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              Trusted by thousands of individuals across borders
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            <TestimonialCard
              quote="Sending funds from Lagos to my family in Abidjan (Côte d'Ivoire) used to take 3 days and cost a fortune in remittance fees. With ReyoPay, it settles in seconds with zero hassle."
              author="Amara Nwachukwu"
              role="Freelance Designer"
              country="Nigeria / Côte d'Ivoire"
              avatar="AN"
            />
            <TestimonialCard
              quote="As a remote software engineer earning in USD, having a platform where I can hold my balances and instantly convert to NGN with zero hidden bank fees has been a game-changer."
              author="Tobi Adeyemi"
              role="Senior Frontend Engineer"
              country="Nigeria"
              avatar="TA"
            />
            <TestimonialCard
              quote="The username-based P2P transfers are lightning-fast. Sending allowance to my family members and paying freelancers happens in a single tap without needing bank codes."
              author="Jean-Paul Kouassi"
              role="Creative Director"
              country="Senegal"
              avatar="JK"
            />
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION SECTION (Faint Waves Overflow Stroke Background) */}
      <section id="faq" className="section" style={{ position: "relative", overflow: "hidden" }}>
        <SectionStrokeBackground variant="waves" opacity={0.22} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3rem auto" }}>
            <span className="section-label">Frequently Asked Questions</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 2.8rem)",
                marginTop: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              Got questions? We have answers.
            </h2>
          </div>

          <FAQSection />
        </div>
      </section>

      {/* 9. FINAL HIGH-CONVERSION CTA (Subtle Neon Mint Strokes on Dark) */}
      <section
        style={{
          padding: "6rem 0",
          backgroundColor: "var(--color-dark)",
          color: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <SectionStrokeBackground variant="cta-glow" opacity={0.35} />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "300px",
            background: "radial-gradient(circle, rgba(0, 219, 183, 0.15) 0%, rgba(15, 15, 15, 0) 70%)",
            filter: "blur(50px)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: "0.75rem" }}>
            <span className="section-label-dark">Join the Revolution</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
              color: "#FFFFFF",
              fontWeight: 900,
              maxWidth: "750px",
              margin: "0 auto 1.5rem auto",
            }}
          >
            Ready for fast, fair, and borderless personal finance?
          </h2>
          <p
            style={{
              fontSize: "1.15rem",
              color: "#D4D4D8",
              maxWidth: "540px",
              margin: "0 auto 2.5rem auto",
            }}
          >
            Create your account in less than a minute. Experience multi-currency freedom today.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <ReyoButton
              href="http://localhost:5173"
              variant="primary"
              size="lg"
            >
              Get Started for Free
            </ReyoButton>
            <ReyoButton
              href="/contact"
              variant="white"
              size="lg"
            >
              Contact Support
            </ReyoButton>
          </div>
        </div>
      </section>
    </>
  );
}
