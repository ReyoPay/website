"use client";

import { useState } from "react";
import { Mail, MessageSquare, MapPin, CheckCircle2 } from "lucide-react";
import ReyoCard from "../../components/ui/ReyoCard";
import ReyoInput from "../../components/ui/ReyoInput";
import ReyoSelect from "../../components/ui/ReyoSelect";
import ReyoTextarea from "../../components/ui/ReyoTextarea";
import ReyoButton from "../../components/ui/ReyoButton";
import SectionStrokeBackground from "../../components/SectionStrokeBackground";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Support");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  const subjectOptions = [
    { value: "General Support", label: "General Support & Wallet Question" },
    { value: "Dedicated Virtual Account", label: "Dedicated Virtual Account (DVA) Inquiry" },
    { value: "Business API", label: "Business & Developer API" },
    { value: "Partnership", label: "Partnership & Media" },
  ];

  return (
    <>
      {/* Hero Header */}
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
          <span className="section-label">We&apos;re Here to Help</span>
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              fontWeight: 900,
              marginTop: "0.5rem",
              marginBottom: "1.25rem",
            }}
          >
            Get in touch with the ReyoPay team
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--color-text-body)" }}>
            Have a question, need technical support, or exploring enterprise partnership? Our team is available 24/7.
          </p>
        </div>
      </section>

      {/* Main Contact Form & Info Grid */}
      <section className="section" style={{ position: "relative", overflow: "hidden" }}>
        <SectionStrokeBackground variant="orbit" opacity={0.24} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "4rem",
              maxWidth: "1050px",
              margin: "0 auto",
            }}
          >
            {/* Left Contact Information */}
            <div>
              <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                Reach us anytime
              </h2>
              <p style={{ color: "var(--color-text-body)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                Whether you are an individual user with an inquiry or a developer building custom integrations, we are eager to assist you.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "1rem",
                      backgroundColor: "var(--color-primary-light)",
                      color: "var(--color-primary-dark)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.05rem", fontWeight: 700 }}>Email Support</h4>
                    <p style={{ color: "var(--color-text-muted)", fontSize: "0.92rem", margin: "0.2rem 0" }}>
                      General: support@reyopay.com
                    </p>
                    <p style={{ color: "var(--color-text-muted)", fontSize: "0.92rem" }}>
                      Business & Sales: partners@reyopay.com
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "1rem",
                      backgroundColor: "var(--color-primary-light)",
                      color: "var(--color-primary-dark)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.05rem", fontWeight: 700 }}>Live Chat & In-App</h4>
                    <p style={{ color: "var(--color-text-muted)", fontSize: "0.92rem" }}>
                      Available directly in your ReyoPay mobile and web dashboard 24/7.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "1rem",
                      backgroundColor: "var(--color-primary-light)",
                      color: "var(--color-primary-dark)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.05rem", fontWeight: 700 }}>Regional Hubs</h4>
                    <p style={{ color: "var(--color-text-muted)", fontSize: "0.92rem" }}>
                      Lagos, Nigeria • Abidjan, Côte d&apos;Ivoire • London, UK
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Form (ReyoCard) */}
            <ReyoCard padding="lg">
              {submitted ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <div
                    style={{
                      width: "4.5rem",
                      height: "4.5rem",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-primary-light)",
                      color: "var(--color-primary-dark)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                    Message Sent Successfully!
                  </h3>
                  <p style={{ color: "var(--color-text-body)", fontSize: "1rem", lineHeight: 1.6 }}>
                    Thank you, <strong>{name}</strong>. Our support team will review your message and reply to <strong>{email}</strong> within 2 hours.
                  </p>
                  <div style={{ marginTop: "1.5rem" }}>
                    <ReyoButton
                      variant="secondary"
                      onClick={() => {
                        setSubmitted(false);
                        setMessage("");
                      }}
                    >
                      Send Another Message
                    </ReyoButton>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                    Send us a message
                  </h3>

                  <ReyoInput
                    label="Your Full Name"
                    required
                    value={name}
                    onChange={(val) => setName(val)}
                    placeholder="e.g. John Doe"
                  />

                  <ReyoInput
                    label="Email Address"
                    type="email"
                    required
                    value={email}
                    onChange={(val) => setEmail(val)}
                    placeholder="e.g. john@example.com"
                  />

                  <ReyoSelect
                    label="Inquiry Topic"
                    options={subjectOptions}
                    value={subject}
                    onChange={(val) => setSubject(val)}
                  />

                  <ReyoTextarea
                    label="Message"
                    required
                    rows={4}
                    value={message}
                    onChange={(val) => setMessage(val)}
                    placeholder="How can we help you today?"
                  />

                  <ReyoButton type="submit" fullWidth size="lg">
                    Send Message
                  </ReyoButton>
                </form>
              )}
            </ReyoCard>
          </div>
        </div>
      </section>
    </>
  );
}
