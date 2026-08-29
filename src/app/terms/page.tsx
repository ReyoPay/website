import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | ReyoPay",
  description:
    "Read the terms and conditions governing the use of the ReyoPay multi-currency wallet, website, and related financial services.",
};

export default function TermsPage() {
  return (
    <section className="section" style={{ paddingTop: "4rem" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <h1 style={{ fontSize: "2.8rem", fontWeight: 900, marginBottom: "0.5rem" }}>
          Terms & Conditions
        </h1>
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", marginBottom: "2.5rem" }}>
          Last Updated: March 2026
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-text-body)" }}>
          <div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-text-main)", marginBottom: "0.5rem" }}>
              1. Acceptance of Terms
            </h2>
            <p>
              By creating an account, accessing our website, or using any services provided by ReyoPay (&ldquo;ReyoPay&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), you agree to be legally bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-text-main)", marginBottom: "0.5rem" }}>
              2. Eligibility & Account Registration
            </h2>
            <p>
              To use ReyoPay, you must be at least 18 years old and provide accurate, verified phone and identity information. You are solely responsible for maintaining the confidentiality of your credentials, password, and transaction PINs.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-text-main)", marginBottom: "0.5rem" }}>
              3. Multi-Currency Wallets & Transactions
            </h2>
            <p>
              ReyoPay provides multi-currency digital wallet functionality. You agree that all deposits, peer-to-peer transfers, currency conversions, and withdrawals are subject to transaction limits, security checks, and partner banking terms.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-text-main)", marginBottom: "0.5rem" }}>
              4. Fees and Exchange Rates
            </h2>
            <p>
              Peer-to-peer transfers between ReyoPay @usernames are provided with 0% transfer fees. Applicable foreign exchange conversion rates and third-party gateway charges for external funding are clearly displayed prior to transaction confirmation.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-text-main)", marginBottom: "0.5rem" }}>
              5. Prohibited Activities
            </h2>
            <p>
              You agree not to use ReyoPay for any unlawful purposes, including but not limited to money laundering, terrorist financing, fraud, purchase of illegal goods, or unauthorized access to our infrastructure.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-text-main)", marginBottom: "0.5rem" }}>
              6. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, ReyoPay and its affiliates shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use the platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
