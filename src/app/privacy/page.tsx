import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ReyoPay",
  description:
    "Learn how ReyoPay collects, uses, protects, and handles your personal information, phone identity, and financial transaction records.",
};

export default function PrivacyPage() {
  return (
    <section className="section" style={{ paddingTop: "4rem" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <h1 style={{ fontSize: "2.8rem", fontWeight: 900, marginBottom: "0.5rem" }}>
          Privacy Policy
        </h1>
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", marginBottom: "2.5rem" }}>
          Last Updated: March 2026
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-text-body)" }}>
          <div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-text-main)", marginBottom: "0.5rem" }}>
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us when opening an account, verifying your phone number via SMS OTP, initiating transfers, or contacting support. This includes your phone number, name, email address, date of birth, and transaction records.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-text-main)", marginBottom: "0.5rem" }}>
              2. How We Use Your Information
            </h2>
            <p>
              We use your information strictly to operate, maintain, and enhance our services, process multi-currency wallet transactions, authenticate your identity, prevent fraud, comply with regulatory requirements, and provide customer assistance.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-text-main)", marginBottom: "0.5rem" }}>
              3. Data Security & Storage
            </h2>
            <p>
              All personal and financial data is stored using industry-standard AES 256-bit encryption. Passwords and transaction PINs are securely hashed using modern cryptographic algorithms and are never stored in plaintext.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-text-main)", marginBottom: "0.5rem" }}>
              4. Third-Party Sharing
            </h2>
            <p>
              We do not sell your personal data. We only share necessary data with regulated partner banks, payment processors (such as Paystack), and SMS infrastructure providers to deliver virtual account and payment settlement services.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-text-main)", marginBottom: "0.5rem" }}>
              5. Your Rights
            </h2>
            <p>
              You have the right to access, update, or request the deletion of your personal account data at any time by contacting our privacy compliance team at privacy@reyopay.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
