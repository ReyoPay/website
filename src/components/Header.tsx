"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import ReyoButton from "./ui/ReyoButton";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Features", href: "/features" },
    { label: "Personal", href: "/personal" },
    { label: "Business", href: "/business" },
    { label: "Security", href: "/security" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
        transition: "all 0.25s ease",
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.95)"
          : "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: isScrolled
          ? "1px solid rgba(228, 228, 231, 0.8)"
          : "1px solid transparent",
        boxShadow: "none",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "4.5rem",
        }}
      >
        {/* Brand Logo */}
        <Logo size="md" />

        {/* Desktop Navigation */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "1.75rem",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.95rem",
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? "var(--color-primary-dark)" : "var(--color-text-body)",
                  transition: "color 0.2s ease",
                  padding: "0.4rem 0.2rem",
                  position: "relative",
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: 2,
                      backgroundColor: "var(--color-primary)",
                      borderRadius: 2,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA actions */}
        <div
          style={{
            display: "none",
            alignItems: "center",
            gap: "0.85rem",
          }}
          className="desktop-nav"
        >
          <ReyoButton
            href="http://localhost:5173"
            variant="secondary"
            size="sm"
          >
            Sign In
          </ReyoButton>
          <ReyoButton
            href="http://localhost:5173"
            variant="primary"
            size="sm"
          >
            Open Account
          </ReyoButton>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "2.75rem",
            height: "2.75rem",
            borderRadius: "0.75rem",
            border: "1px solid var(--color-stroke)",
            backgroundColor: "#FFFFFF",
            cursor: "pointer",
            color: "var(--color-text-main)",
            boxShadow: "none",
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "4.5rem",
            left: 0,
            right: 0,
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid var(--color-stroke)",
            boxShadow: "none",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: isActive ? 800 : 600,
                    color: isActive ? "var(--color-primary-dark)" : "var(--color-text-main)",
                    padding: "0.6rem 0",
                    borderBottom: "1px solid #F4F4F5",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", paddingTop: "0.5rem" }}>
            <ReyoButton
              href="http://localhost:5173"
              variant="secondary"
              fullWidth
            >
              Sign In
            </ReyoButton>
            <ReyoButton
              href="http://localhost:5173"
              variant="primary"
              fullWidth
            >
              Open Free Account
            </ReyoButton>
          </div>
        </div>
      )}

      <style jsx global>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
