"use client";

import { useState } from "react";
import { ArrowUpDown, Zap, Check, TrendingUp } from "lucide-react";
import ReyoCard from "./ui/ReyoCard";
import ReyoButton from "./ui/ReyoButton";
import ReyoSelect, { SelectOption } from "./ui/ReyoSelect";

interface Currency {
  code: string;
  name: string;
  symbol: string;
  rateToUSD: number; // reference baseline
}

const CURRENCIES: Currency[] = [
  { code: "NGN", name: "Nigeria (NGN)", symbol: "₦", rateToUSD: 1480 },
  { code: "USD", name: "United States (USD)", symbol: "$", rateToUSD: 1 },
  { code: "XOF", name: "West Africa CFA (XOF)", symbol: "CFA", rateToUSD: 605 },
  { code: "EUR", name: "Eurozone (EUR)", symbol: "€", rateToUSD: 0.92 },
  { code: "GBP", name: "United Kingdom (GBP)", symbol: "£", rateToUSD: 0.78 },
];

export default function CurrencyWidget() {
  const [fromCurrency, setFromCurrency] = useState<Currency>(CURRENCIES[0]); // NGN
  const [toCurrency, setToCurrency] = useState<Currency>(CURRENCIES[2]); // XOF
  const [sendAmount, setSendAmount] = useState<number>(50000);

  // Calculate conversion: fromCurrency -> USD -> toCurrency
  const amountInUSD = sendAmount / fromCurrency.rateToUSD;
  const convertedAmount = amountInUSD * toCurrency.rateToUSD;
  const exchangeRate = toCurrency.rateToUSD / fromCurrency.rateToUSD;

  // Traditional bank comparison (approx 4.5% higher markup + fees)
  const bankFee = sendAmount * 0.045;
  const bankReceived = ((sendAmount - bankFee) / fromCurrency.rateToUSD) * toCurrency.rateToUSD * 0.96;
  const savings = Math.max(0, convertedAmount - bankReceived);

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  const currencyOptions: SelectOption[] = CURRENCIES.map((c) => ({
    value: c.code,
    label: c.code,
    sublabel: `• ${c.name}`,
  }));

  return (
    <ReyoCard
      style={{
        width: "100%",
        maxWidth: "500px",
        overflow: "visible", // allow custom select popover to float smoothly
      }}
    >
      {/* Top Banner Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.25rem",
        }}
      >
        <span
          style={{
            fontSize: "0.82rem",
            fontWeight: 800,
            color: "var(--color-primary-dark)",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          Live Real-Time Rate
        </span>
        <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", fontWeight: 600 }}>
          0% Transfer Fee
        </span>
      </div>

      {/* You Send Input Box */}
      <div
        style={{
          backgroundColor: "var(--color-bg-input)",
          padding: "1rem 1.25rem",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--color-stroke)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
          <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-text-muted)" }}>
            You Send
          </label>
          <span style={{ fontSize: "0.8rem", color: "var(--color-text-light)" }}>
            Balance: Unlimited
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
          <div style={{ display: "flex", alignItems: "center", width: "50%" }}>
            <span style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-text-muted)", marginRight: "0.25rem" }}>
              {fromCurrency.symbol}
            </span>
            <input
              type="number"
              value={sendAmount || ""}
              onChange={(e) => setSendAmount(Math.max(0, Number(e.target.value)))}
              style={{
                fontSize: "1.65rem",
                fontWeight: 800,
                color: "var(--color-text-main)",
                width: "100%",
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
              }}
              placeholder="0"
            />
          </div>
          <div style={{ width: "48%" }}>
            <ReyoSelect
              options={currencyOptions}
              value={fromCurrency.code}
              onChange={(val) => {
                const selected = CURRENCIES.find((c) => c.code === val);
                if (selected) setFromCurrency(selected);
              }}
            />
          </div>
        </div>
      </div>

      {/* Swap Button Divider */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0.75rem 0",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: 1,
            backgroundColor: "var(--color-stroke-subtle)",
            zIndex: 0,
          }}
        />
        <button
          type="button"
          onClick={handleSwap}
          aria-label="Swap currencies"
          style={{
            zIndex: 1,
            width: "2.4rem",
            height: "2.4rem",
            borderRadius: "50%",
            backgroundColor: "var(--color-primary-light)",
            border: "1px solid var(--color-primary)",
            color: "var(--color-primary-dark)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "none",
            transition: "all 0.2s ease",
          }}
        >
          <ArrowUpDown size={15} />
        </button>
      </div>

      {/* Recipient Gets Box */}
      <div
        style={{
          backgroundColor: "var(--color-bg-input)",
          padding: "1rem 1.25rem",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--color-stroke)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
          <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-text-muted)" }}>
            Recipient Gets
          </label>
          <span style={{ fontSize: "0.8rem", color: "var(--color-primary-dark)", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.25rem" }}>
            <Check size={13} /> Guaranteed Rate
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
          <div
            style={{
              fontSize: "1.65rem",
              fontWeight: 800,
              color: "var(--color-text-main)",
              width: "50%",
            }}
          >
            {toCurrency.symbol}{" "}
            {convertedAmount.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
          <div style={{ width: "48%" }}>
            <ReyoSelect
              options={currencyOptions}
              value={toCurrency.code}
              onChange={(val) => {
                const selected = CURRENCIES.find((c) => c.code === val);
                if (selected) setToCurrency(selected);
              }}
            />
          </div>
        </div>
      </div>

      {/* Fee & Rate Summary Breakdown */}
      <div
        style={{
          marginTop: "1.25rem",
          padding: "1rem",
          borderRadius: "var(--radius-md)",
          backgroundColor: "#F9FAFB",
          fontSize: "0.88rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
          border: "1px solid var(--color-stroke-subtle)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", color: "var(--color-text-muted)" }}>
          <span>Exchange Rate:</span>
          <span style={{ fontWeight: 700, color: "var(--color-text-main)" }}>
            1 {fromCurrency.code} = {exchangeRate.toFixed(4)} {toCurrency.code}
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "var(--color-text-muted)" }}>
          <span>ReyoPay Transfer Fee:</span>
          <span style={{ fontWeight: 700, color: "var(--color-success)", display: "flex", alignItems: "center", gap: "0.25rem" }}>
            <Check size={14} /> ₦0.00 (FREE)
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "var(--color-text-muted)" }}>
          <span>Delivery Speed:</span>
          <span style={{ fontWeight: 700, color: "var(--color-text-main)", display: "flex", alignItems: "center", gap: "0.25rem" }}>
            <Zap size={14} color="var(--color-primary-dark)" /> Instant (&lt; 3 secs)
          </span>
        </div>
        {savings > 0 && (
          <div
            style={{
              marginTop: "0.3rem",
              paddingTop: "0.6rem",
              borderTop: "1px dashed var(--color-stroke)",
              display: "flex",
              justifyContent: "space-between",
              color: "var(--color-primary-dark)",
              fontWeight: 700,
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
              <TrendingUp size={14} /> You save vs banks:
            </span>
            <span>
              ~ {toCurrency.symbol}{" "}
              {savings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </span>
          </div>
        )}
      </div>

      {/* Action CTA Button */}
      <div style={{ marginTop: "1.5rem" }}>
        <ReyoButton
          href="http://localhost:5173"
          fullWidth
          size="lg"
        >
          Send {toCurrency.code} Now
        </ReyoButton>
      </div>
    </ReyoCard>
  );
}
