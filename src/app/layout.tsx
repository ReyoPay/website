import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const mavenPro = Maven_Pro({
  variable: "--font-maven-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reyopay.com"),
  title: "ReyoPay | Fast. Fair. Borderless Multi-Currency Fintech",
  description:
    "Fast and secure multi-wallet fintech platform for everyday payments and cross-border money movement across NGN, XOF (CFA Franc), USD, EUR, and GBP.",
  keywords: [
    "fintech",
    "multi-currency wallet",
    "cross border payment",
    "send money nigeria",
    "cfa franc transfer",
    "virtual account",
    "paystack",
    "reyopay",
  ],
  authors: [{ name: "ReyoPay" }],
  openGraph: {
    title: "ReyoPay | Fast. Fair. Borderless Money",
    description:
      "Send, save, and grow across currencies with dedicated virtual accounts, instant zero-fee P2P, and bank-grade immutable ledgers.",
    url: "https://reyopay.com",
    siteName: "ReyoPay",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "ReyoPay Borderless Wallet",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mavenPro.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
