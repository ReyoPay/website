"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Security" | "Transfers";
}

const FAQS: FAQItem[] = [
  {
    category: "General",
    question: "What is ReyoPay and how does it work?",
    answer:
      "ReyoPay is a multi-currency digital wallet and cross-border financial platform. It allows individuals and businesses to hold balances in multiple currencies (NGN, XOF, USD, EUR, GBP), send zero-fee instant P2P payments with just a username, convert currencies with transparent interbank rates, and deposit/withdraw funds via dedicated virtual bank accounts.",
  },
  {
    category: "General",
    question: "How fast can I open an account?",
    answer:
      "You can open a ReyoPay account in less than 60 seconds directly using your phone number. You will receive an instant 6-digit OTP verification code, set your security password, choose your @username, and immediately get access to your multi-currency wallets.",
  },
  {
    category: "Transfers",
    question: "How do Instant P2P transfers work?",
    answer:
      "With ReyoPay P2P, you can send money to any other registered ReyoPay user instantly using their unique @username or verified phone number. P2P transfers settle in under 3 seconds and have a guaranteed 0% transaction fee.",
  },
  {
    category: "Transfers",
    question: "How do I fund my wallet with Nigerian Naira (NGN)?",
    answer:
      "Each user receives a Dedicated Virtual Account (DVA) powered by our integration with Paystack and tier-1 partner banks. You can transfer money from any Nigerian mobile banking app or USSD directly to your dedicated account number, and your ReyoPay NGN wallet is credited automatically in real time.",
  },
  {
    category: "Security",
    question: "How safe are my funds and transactions on ReyoPay?",
    answer:
      "ReyoPay employs bank-grade security protocols, including AES 256-bit encryption, strict double-entry immutable ledger accounting with ACID transactional guarantees, and multi-factor authentication (SMS OTP and 4-digit transaction PINs). All fiat balances are stored in segregated custody accounts with regulated partner banks.",
  },
  {
    category: "General",
    question: "Are there any hidden fees or monthly maintenance charges?",
    answer:
      "No. ReyoPay is 100% transparent. Account creation, monthly wallet maintenance, and internal ReyoPay-to-ReyoPay transfers are always free. When converting currencies, you get real-time rates with zero hidden markups.",
  },
  {
    category: "Transfers",
    question: "Which West African CFA (XOF) countries are supported?",
    answer:
      "ReyoPay supports seamless payments and conversions across the entire WAEMU/UEMOA zone, including Côte d'Ivoire, Senegal, Benin, Burkina Faso, Mali, Niger, Togo, and Guinea-Bissau.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "General", "Transfers", "Security"];

  const filteredFaqs =
    activeCategory === "All"
      ? FAQS
      : FAQS.filter((item) => item.category === activeCategory);

  return (
    <div style={{ width: "100%", maxWidth: "860px", margin: "0 auto" }}>
      {/* Category Filter Buttons */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          justifyContent: "center",
          marginBottom: "2.5rem",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setActiveCategory(cat);
              setOpenIndex(null);
            }}
            style={{
              padding: "0.5rem 1.25rem",
              borderRadius: "var(--radius-full)",
              fontSize: "0.9rem",
              fontWeight: 700,
              backgroundColor: activeCategory === cat ? "var(--color-primary-light)" : "#FFFFFF",
              color: activeCategory === cat ? "var(--color-primary-dark)" : "var(--color-text-muted)",
              border: activeCategory === cat ? "1px solid var(--color-primary)" : "1px solid var(--color-stroke)",
              cursor: "pointer",
              boxShadow: "none",
              transition: "all 0.2s ease",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {filteredFaqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "var(--radius-lg)",
                border: isOpen ? "1.5px solid var(--color-primary)" : "1px solid var(--color-stroke)",
                boxShadow: "none",
                transition: "border-color 0.2s ease",
                overflow: "hidden",
              }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                style={{
                  width: "100%",
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  textAlign: "left",
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <span
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: isOpen ? "var(--color-primary-dark)" : "var(--color-text-main)",
                  }}
                >
                  {faq.question}
                </span>
                <span
                  style={{
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    backgroundColor: isOpen ? "var(--color-primary-light)" : "var(--color-bg-input)",
                    color: isOpen ? "var(--color-primary-dark)" : "var(--color-text-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "none",
                    transition: "transform 0.25s ease",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <ChevronDown size={16} />
                </span>
              </button>

              {isOpen && (
                <div
                  style={{
                    padding: "0 1.5rem 1.25rem 1.5rem",
                    color: "var(--color-text-body)",
                    fontSize: "0.95rem",
                    lineHeight: 1.65,
                    borderTop: "1px solid var(--color-stroke-subtle)",
                    paddingTop: "0.9rem",
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
