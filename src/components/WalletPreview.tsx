"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ArrowDownLeft,
  ArrowLeftRight,
  Plus,
  Eye,
  EyeOff,
  CheckCircle2,
} from "lucide-react";
import ReyoCard from "./ui/ReyoCard";

interface WalletCardData {
  id: string;
  currency: "NGN" | "XOF" | "USD" | "EUR";
  name: string;
  balance: number;
  accountNumber: string;
  bankName: string;
  symbol: string;
  gradient: string;
}

const CARDS: WalletCardData[] = [
  {
    id: "1",
    currency: "NGN",
    name: "Nigerian Naira Account",
    balance: 3450000.5,
    accountNumber: "2234556760",
    bankName: "Wema Bank / Paystack DVA",
    symbol: "₦",
    gradient: "linear-gradient(135deg, #00B698 0%, #006050 100%)",
  },
  {
    id: "2",
    currency: "XOF",
    name: "West African CFA Account",
    balance: 1820000,
    accountNumber: "8894231024",
    bankName: "ReyoPay Francophone Hub",
    symbol: "CFA",
    gradient: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
  },
  {
    id: "3",
    currency: "USD",
    name: "Global USD Multi-Wallet",
    balance: 4250.75,
    accountNumber: "9901452281",
    bankName: "ReyoPay Global Trust",
    symbol: "$",
    gradient: "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)",
  },
];

export default function WalletPreview() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [showBalance, setShowBalance] = useState(true);
  const card = CARDS[activeCardIndex];

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "430px",
        backgroundColor: "#FFFFFF",
        borderRadius: "2.5rem",
        padding: "1.5rem",
        border: "1px solid var(--color-stroke)",
        boxShadow: "none",
      }}
    >
      {/* Phone App Status Bar Mockup */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.25rem",
          padding: "0 0.5rem",
          fontSize: "0.85rem",
          color: "var(--color-text-main)",
          fontWeight: 700,
        }}
      >
        <span>9:41</span>
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.75rem" }}>
          <span>5G</span>
          <span>100%</span>
        </div>
      </div>

      {/* App Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.25rem",
          padding: "0 0.5rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div
            style={{
              width: "2.4rem",
              height: "2.4rem",
              borderRadius: "50%",
              backgroundColor: "var(--color-primary-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              color: "var(--color-primary-dark)",
              fontSize: "0.95rem",
            }}
          >
            JD
          </div>
          <div>
            <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-text-main)", margin: 0 }}>
              Hi, John Doe
            </p>
            <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", margin: 0, display: "flex", alignItems: "center", gap: "0.25rem" }}>
              @johndoe • <CheckCircle2 size={12} color="var(--color-primary-dark)" /> Verified
            </p>
          </div>
        </div>

        <button
          type="button"
          style={{
            padding: "0.35rem 0.75rem",
            borderRadius: "var(--radius-full)",
            backgroundColor: "var(--color-bg-input)",
            border: "1px solid var(--color-stroke)",
            fontSize: "0.8rem",
            fontWeight: 800,
            cursor: "pointer",
            color: "var(--color-text-main)",
            boxShadow: "none",
          }}
        >
          {card.currency}
        </button>
      </div>

      {/* Main Swipeable Virtual Card (Flat border, zero shadow) */}
      <div
        style={{
          background: card.gradient,
          borderRadius: "1.5rem",
          padding: "1.5rem",
          color: "#FFFFFF",
          position: "relative",
          boxShadow: "none",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          overflow: "hidden",
          transition: "all 0.3s ease",
        }}
      >
        {/* Subtle holographic pattern */}
        <div
          style={{
            position: "absolute",
            top: -20,
            right: -20,
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.08)",
            filter: "blur(20px)",
          }}
        />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "0.85rem", fontWeight: 600, opacity: 0.9 }}>
            Total Available Balance
          </span>
          <button
            type="button"
            onClick={() => setShowBalance(!showBalance)}
            style={{
              cursor: "pointer",
              opacity: 0.85,
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              fontSize: "0.78rem",
              color: "#FFFFFF",
              background: "none",
              border: "none",
              boxShadow: "none",
            }}
          >
            {showBalance ? (
              <>
                <EyeOff size={14} /> Hide
              </>
            ) : (
              <>
                <Eye size={14} /> Show
              </>
            )}
          </button>
        </div>

        <div style={{ margin: "1rem 0" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.03em" }}>
            {showBalance ? (
              <>
                <span style={{ fontSize: "1.3rem", fontWeight: 600, marginRight: "0.35rem" }}>
                  {card.symbol}
                </span>
                {card.balance.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </>
            ) : (
              "••••••••••"
            )}
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: "0.82rem",
            opacity: 0.9,
            paddingTop: "0.5rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          <div>
            <p style={{ margin: 0, opacity: 0.8, fontSize: "0.72rem" }}>Dedicated Virtual Account</p>
            <p style={{ margin: 0, fontWeight: 700, letterSpacing: "0.05em" }}>{card.accountNumber}</p>
          </div>
          <span style={{ fontWeight: 700 }}>{card.bankName.split(" ")[0]}</span>
        </div>
      </div>

      {/* Currency Switcher Tabs */}
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          marginTop: "1rem",
          justifyContent: "center",
        }}
      >
        {CARDS.map((c, idx) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setActiveCardIndex(idx)}
            style={{
              padding: "0.4rem 0.85rem",
              borderRadius: "var(--radius-full)",
              fontSize: "0.82rem",
              fontWeight: 700,
              backgroundColor: idx === activeCardIndex ? "var(--color-primary-light)" : "transparent",
              color: idx === activeCardIndex ? "var(--color-primary-dark)" : "var(--color-text-muted)",
              border: idx === activeCardIndex ? "1px solid var(--color-primary)" : "1px solid var(--color-stroke)",
              cursor: "pointer",
              boxShadow: "none",
            }}
          >
            {c.currency}
          </button>
        ))}
      </div>

      {/* Quick Actions Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0.75rem",
          marginTop: "1.25rem",
          textAlign: "center",
        }}
      >
        {[
          { label: "Send", icon: <ArrowUpRight size={18} />, color: "#00DBB7" },
          { label: "Receive", icon: <ArrowDownLeft size={18} />, color: "#00B698" },
          { label: "Convert", icon: <ArrowLeftRight size={18} />, color: "#1E293B" },
          { label: "Add Card", icon: <Plus size={18} />, color: "#0F172A" },
        ].map((act, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.4rem",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "1rem",
                backgroundColor: "var(--color-bg-input)",
                border: "1px solid var(--color-stroke)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: act.color,
                transition: "all 0.2s ease",
                boxShadow: "none",
              }}
            >
              {act.icon}
            </div>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-main)" }}>
              {act.label}
            </span>
          </div>
        ))}
      </div>

      {/* Recent Activity List */}
      <div style={{ marginTop: "1.5rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.75rem",
            padding: "0 0.25rem",
          }}
        >
          <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--color-text-main)" }}>
            Recent Activity
          </span>
          <span style={{ fontSize: "0.75rem", color: "var(--color-primary-dark)", fontWeight: 700 }}>
            View All
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {[
            { name: "Transfer to @sarah_k", amount: "-₦45,000.00", time: "Just now", type: "out", fee: "₦0 fee" },
            { name: "Paystack Bank Deposit", amount: "+₦250,000.00", time: "2h ago", type: "in", fee: "Completed" },
            { name: "Swap USD to XOF", amount: "+125,000 CFA", time: "Yesterday", type: "in", fee: "FX Done" },
          ].map((tx, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.65rem 0.85rem",
                borderRadius: "0.85rem",
                backgroundColor: "var(--color-bg-input)",
                border: "1px solid var(--color-stroke-subtle)",
                boxShadow: "none",
              }}
            >
              <div>
                <p style={{ fontSize: "0.82rem", fontWeight: 700, margin: 0, color: "var(--color-text-main)" }}>
                  {tx.name}
                </p>
                <span style={{ fontSize: "0.72rem", color: "var(--color-text-muted)" }}>
                  {tx.time} • {tx.fee}
                </span>
              </div>
              <span
                style={{
                  fontSize: "0.88rem",
                  fontWeight: 800,
                  color: tx.type === "in" ? "var(--color-success)" : "var(--color-text-main)",
                }}
              >
                {tx.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
