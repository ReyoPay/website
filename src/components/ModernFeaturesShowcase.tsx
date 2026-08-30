"use client";

import React, { useState } from "react";
import {
  CreditCard,
  Zap,
  Building2,
  ShieldCheck,
  ArrowRight,
  Check,
  CheckCircle2,
  Copy,
  ArrowLeftRight,
  TrendingUp,
  RefreshCw,
} from "lucide-react";
import ReyoCard from "./ui/ReyoCard";
import ReyoButton from "./ui/ReyoButton";

export default function ModernFeaturesShowcase() {
  const [activeCurrency, setActiveCurrency] = useState<"NGN" | "XOF" | "USD" | "EUR">("NGN");
  const [copied, setCopied] = useState(false);

  const walletBalances = {
    NGN: { balance: "₦3,450,000.00", label: "Nigerian Naira", rate: "1 USD = ₦1,480.00" },
    XOF: { balance: "1,820,000 CFA", label: "West African CFA Franc", rate: "1 NGN = 0.408 CFA" },
    USD: { balance: "$4,250.75", label: "US Dollar", rate: "1 USD = €0.92" },
    EUR: { balance: "€2,100.00", label: "Euro", rate: "1 EUR = $1.09" },
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="features"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: "1.75rem",
      }}
      className="bento-container"
    >
      {/* 1. LARGE HERO BENTO TILE: Multi-Currency Dynamic Wallet Engine (Spans 7 columns) */}
      <div
        id="wallets"
        style={{
          gridColumn: "span 7",
          backgroundColor: "#FFFFFF",
          border: "1.5px solid var(--color-primary)",
          borderRadius: "var(--radius-xl)",
          padding: "2.25rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          minHeight: "380px",
        }}
        className="bento-span-7"
      >
        {/* Subtle accent glow */}
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            width: "200px",
            height: "200px",
            backgroundColor: "var(--color-primary-light)",
            borderRadius: "50%",
            filter: "blur(40px)",
            pointerEvents: "none",
            opacity: 0.6,
          }}
        />

        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
            <div
              style={{
                width: "2.8rem",
                height: "2.8rem",
                borderRadius: "0.75rem",
                backgroundColor: "var(--color-primary-light)",
                color: "var(--color-primary-dark)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CreditCard size={22} strokeWidth={2.2} />
            </div>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 800,
                color: "var(--color-primary-dark)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Multi-Wallet Engine
            </span>
          </div>

          <h3 style={{ fontSize: "1.65rem", fontWeight: 900, marginBottom: "0.6rem" }}>
            One Account. Unlimited Multi-Currency Wallets.
          </h3>
          <p style={{ fontSize: "1.02rem", color: "var(--color-text-body)", lineHeight: 1.6, maxWidth: "520px" }}>
            Hold segregated balances in <strong>NGN</strong>, <strong>XOF (CFA)</strong>, <strong>USD</strong>, and <strong>EUR</strong>. Swap instantly with guaranteed real-time interbank rates and zero hidden spread markups.
          </p>
        </div>

        {/* Interactive Wallet Switcher Mockup */}
        <div
          style={{
            marginTop: "1.75rem",
            backgroundColor: "#F9FAFB",
            border: "1px solid var(--color-stroke)",
            borderRadius: "var(--radius-lg)",
            padding: "1.25rem",
          }}
        >
          {/* Currency Tabs */}
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            {(["NGN", "XOF", "USD", "EUR"] as const).map((curr) => {
              const isActive = activeCurrency === curr;
              return (
                <button
                  key={curr}
                  type="button"
                  onClick={() => setActiveCurrency(curr)}
                  style={{
                    padding: "0.45rem 1rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    border: `1.5px solid ${isActive ? "var(--color-primary-dark)" : "var(--color-stroke)"}`,
                    backgroundColor: isActive ? "var(--color-primary-light)" : "#FFFFFF",
                    color: isActive ? "var(--color-primary-dark)" : "var(--color-text-main)",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    boxShadow: "none",
                  }}
                >
                  {curr}
                </button>
              );
            })}
          </div>

          {/* Active Balance Display */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "0.75rem" }}>
            <div>
              <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", fontWeight: 600 }}>
                {walletBalances[activeCurrency].label} Balance
              </span>
              <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--color-text-main)", marginTop: "0.2rem" }}>
                {walletBalances[activeCurrency].balance}
              </div>
            </div>
            <div
              style={{
                fontSize: "0.82rem",
                color: "var(--color-primary-dark)",
                fontWeight: 700,
                backgroundColor: "#FFFFFF",
                padding: "0.4rem 0.75rem",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-stroke)",
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
              }}
            >
              <ArrowLeftRight size={13} />
              {walletBalances[activeCurrency].rate}
            </div>
          </div>
        </div>
      </div>

      {/* 2. BENTO TILE: Instant Zero-Fee @Username P2P (Spans 5 columns) */}
      <div
        id="p2p"
        style={{
          gridColumn: "span 5",
          backgroundColor: "#FFFFFF",
          border: "1px solid var(--color-stroke)",
          borderRadius: "var(--radius-xl)",
          padding: "2.25rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "380px",
        }}
        className="bento-span-5"
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
            <div
              style={{
                width: "2.8rem",
                height: "2.8rem",
                borderRadius: "0.75rem",
                backgroundColor: "var(--color-primary-light)",
                color: "var(--color-primary-dark)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Zap size={22} strokeWidth={2.2} />
            </div>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 800,
                color: "var(--color-primary-dark)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Zero Fee P2P
            </span>
          </div>

          <h3 style={{ fontSize: "1.45rem", fontWeight: 900, marginBottom: "0.6rem" }}>
            Instant Send by @Username
          </h3>
          <p style={{ fontSize: "0.98rem", color: "var(--color-text-body)", lineHeight: 1.6 }}>
            No bank routing codes or 10-digit account numbers. Pay friends, split expenses, and transfer funds under 3 seconds.
          </p>
        </div>

        {/* Live Simulated Transfer UI Pill */}
        <div
          style={{
            marginTop: "1.5rem",
            backgroundColor: "#F9FAFB",
            border: "1px solid var(--color-stroke)",
            borderRadius: "var(--radius-lg)",
            padding: "1rem 1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <div
                style={{
                  width: "2.2rem",
                  height: "2.2rem",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-primary-dark)",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "0.8rem",
                }}
              >
                AN
              </div>
              <div>
                <h4 style={{ fontSize: "0.92rem", fontWeight: 800, margin: 0 }}>@amara</h4>
                <p style={{ fontSize: "0.76rem", color: "var(--color-text-muted)", margin: 0 }}>Verified ReyoPay User</p>
              </div>
            </div>
            <span style={{ fontSize: "1.1rem", fontWeight: 900, color: "var(--color-text-main)" }}>
              ₦25,000.00
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px dashed var(--color-stroke)",
              paddingTop: "0.6rem",
              fontSize: "0.8rem",
            }}
          >
            <span style={{ color: "var(--color-success)", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.3rem" }}>
              <CheckCircle2 size={14} /> Settled in 1.4s (Fee: ₦0)
            </span>
            <span style={{ color: "var(--color-text-muted)", fontWeight: 600 }}>Instant</span>
          </div>
        </div>
      </div>

      {/* 3. BENTO TILE: Dedicated Virtual Bank Accounts (Spans 4 columns) */}
      <div
        id="dva"
        style={{
          gridColumn: "span 4",
          backgroundColor: "#FFFFFF",
          border: "1px solid var(--color-stroke)",
          borderRadius: "var(--radius-xl)",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        className="bento-span-4"
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
            <div
              style={{
                width: "2.8rem",
                height: "2.8rem",
                borderRadius: "0.75rem",
                backgroundColor: "var(--color-primary-light)",
                color: "var(--color-primary-dark)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Building2 size={22} strokeWidth={2.2} />
            </div>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 800,
                color: "var(--color-primary-dark)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Direct Bank Inbound
            </span>
          </div>

          <h3 style={{ fontSize: "1.35rem", fontWeight: 900, marginBottom: "0.6rem" }}>
            Dedicated Virtual Account
          </h3>
          <p style={{ fontSize: "0.95rem", color: "var(--color-text-body)", lineHeight: 1.6 }}>
            Receive local bank transfers directly into your personal wallet with your own dedicated account number.
          </p>
        </div>

        {/* Virtual Account Card Box */}
        <div
          style={{
            marginTop: "1.5rem",
            backgroundColor: "#F9FAFB",
            border: "1px solid var(--color-stroke)",
            borderRadius: "var(--radius-lg)",
            padding: "1rem 1.15rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", fontWeight: 600 }}>Bank Partner</span>
            <span style={{ fontSize: "0.82rem", fontWeight: 800 }}>Wema Bank / ReyoPay</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", fontWeight: 600 }}>Account No.</span>
            <button
              type="button"
              onClick={handleCopy}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 0,
                fontSize: "0.95rem",
                fontWeight: 900,
                color: "var(--color-primary-dark)",
              }}
            >
              <span>2234556760</span>
              <Copy size={13} />
            </button>
          </div>
          {copied && (
            <span style={{ fontSize: "0.74rem", color: "var(--color-success)", fontWeight: 700, textAlign: "right" }}>
              Copied to clipboard!
            </span>
          )}
        </div>
      </div>

      {/* 4. BENTO TILE: Bank-Grade Immutable Ledger (Spans 4 columns) */}
      <div
        id="security"
        style={{
          gridColumn: "span 4",
          backgroundColor: "#FFFFFF",
          border: "1px solid var(--color-stroke)",
          borderRadius: "var(--radius-xl)",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        className="bento-span-4"
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
            <div
              style={{
                width: "2.8rem",
                height: "2.8rem",
                borderRadius: "0.75rem",
                backgroundColor: "var(--color-primary-light)",
                color: "var(--color-primary-dark)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ShieldCheck size={22} strokeWidth={2.2} />
            </div>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 800,
                color: "var(--color-primary-dark)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              ACID Compliant
            </span>
          </div>

          <h3 style={{ fontSize: "1.35rem", fontWeight: 900, marginBottom: "0.6rem" }}>
            Immutable Double-Entry Ledger
          </h3>
          <p style={{ fontSize: "0.95rem", color: "var(--color-text-body)", lineHeight: 1.6 }}>
            Every deposit and transfer is permanently recorded with append-only database triggers. Zero balance drift or data loss.
          </p>
        </div>

        {/* Ledger Transaction Stream Mockup */}
        <div
          style={{
            marginTop: "1.5rem",
            backgroundColor: "#0F0F0F",
            borderRadius: "var(--radius-lg)",
            padding: "1rem 1.15rem",
            color: "#FFFFFF",
            fontFamily: "monospace",
            fontSize: "0.78rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.35rem",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", color: "var(--color-primary)" }}>
            <span>TX_ENTRY #88419</span>
            <span>VERIFIED</span>
          </div>
          <div style={{ color: "#A1A1AA" }}>DR: USER_WALLET (₦50,000)</div>
          <div style={{ color: "#A1A1AA" }}>CR: SETTLEMENT_AC (₦50,000)</div>
          <div style={{ color: "var(--color-primary)", fontWeight: 700, borderTop: "1px solid #27272A", paddingTop: "0.35rem" }}>
            NET BALANCE DRIFT: 0.00
          </div>
        </div>
      </div>

      {/* 5. BENTO TILE: Real-Time FX & Transparent Swaps (Spans 4 columns) */}
      <div
        id="fx"
        style={{
          gridColumn: "span 4",
          backgroundColor: "#FFFFFF",
          border: "1px solid var(--color-stroke)",
          borderRadius: "var(--radius-xl)",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        className="bento-span-4"
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
            <div
              style={{
                width: "2.8rem",
                height: "2.8rem",
                borderRadius: "0.75rem",
                backgroundColor: "var(--color-primary-light)",
                color: "var(--color-primary-dark)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <RefreshCw size={22} strokeWidth={2.2} />
            </div>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 800,
                color: "var(--color-primary-dark)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Transparent Rates
            </span>
          </div>

          <h3 style={{ fontSize: "1.35rem", fontWeight: 900, marginBottom: "0.6rem" }}>
            Real-Time Currency Swaps
          </h3>
          <p style={{ fontSize: "0.95rem", color: "var(--color-text-body)", lineHeight: 1.6 }}>
            Convert seamlessly between currencies with live interbank exchange rates and zero surprise bank deductions.
          </p>
        </div>

        {/* Live Swap Mini Card */}
        <div
          style={{
            marginTop: "1.5rem",
            backgroundColor: "#F9FAFB",
            border: "1px solid var(--color-stroke)",
            borderRadius: "var(--radius-lg)",
            padding: "0.9rem 1rem",
            fontSize: "0.82rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "var(--color-text-muted)", fontWeight: 600 }}>Market Rate</span>
            <span style={{ fontWeight: 800, color: "var(--color-text-main)" }}>1 NGN = 0.408 CFA</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px dashed var(--color-stroke)", paddingTop: "0.4rem" }}>
            <span style={{ color: "var(--color-success)", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.25rem" }}>
              <TrendingUp size={13} /> Zero Hidden Spread
            </span>
            <span style={{ color: "var(--color-primary-dark)", fontWeight: 800 }}>Guaranteed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
