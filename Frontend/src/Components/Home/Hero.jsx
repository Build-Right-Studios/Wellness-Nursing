import React from "react";
import { Phone, ShieldCheck, Clock, Building2, ClipboardCheck } from "lucide-react";
import heroImage from "../../assets/hero-photo.png";

const BRAND = {
  primary: "#0B6E8F",
  primaryDark: "#074E66",
  primaryTint: "#E4F0F4",
  secondary: "#4CAF7D",
  secondaryDark: "#357E58",
  secondaryTint: "#E7F6EE",
  tertiary: "#F26B3A",
  tertiaryDark: "#D9532A",
  tertiaryTint: "#FDEAE1",
  ink: "#0E2A33",
  inkSoft: "#4A6169",
  line: "#E3EAEC",
};

const TRUST_ITEMS = [
  { icon: ShieldCheck, title: "Certified Caregivers", desc: "Highly trained & vetted professionals.", tint: BRAND.primaryTint, color: BRAND.primary },
  { icon: Clock, title: "24×7 Support", desc: "Round-the-clock medical assistance.", tint: BRAND.secondaryTint, color: BRAND.secondaryDark },
  { icon: Building2, title: "ICU at Home", desc: "Advanced setups for critical care.", tint: BRAND.tertiaryTint, color: BRAND.tertiaryDark },
  { icon: ClipboardCheck, title: "Tailored Plans", desc: "Personalized recovery roadmaps.", tint: BRAND.primaryTint, color: BRAND.primary },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex flex-col overflow-hidden bg-white lg:h-[calc(100vh-5.75rem)] lg:min-h-[600px]"
    >
      {/* BACKGROUND - Full bleed on both mobile & desktop */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="A caregiver holding hands with an elderly patient at home"
          className="h-full w-full object-cover object-[75%_center] lg:object-center"
        />
        {/* Mobile: heavy white wash for readability */}
        <div className="absolute inset-0 bg-white/85 sm:bg-white/75 lg:hidden" />
        {/* Desktop: left to right fade like your screenshot */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.92) 30%, rgba(255,255,255,0.55) 55%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 hidden h-40 lg:block bg-gradient-to-t from-white/90 to-transparent" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">

        {/* Text Block */}
        <div className="max-w-[560px]">
          <span className="mb-3 inline-block text-[10px] font-extrabold uppercase tracking-[0.14em] sm:text-xs" style={{ color: BRAND.primary }}>
            Compassionate Home Healthcare
          </span>

          <h1
            className="text-[28px] font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-[52px] lg:leading-[1.05]"
            style={{ color: BRAND.ink }}
          >
            Hospital-Quality Care,
            <br />
            <span style={{ color: BRAND.primary }}>At Home.</span>
          </h1>

          <p className="mt-4 max-w-[480px] text-[13px] leading-[20px] sm:text-[15px] sm:leading-[24px]" style={{ color: BRAND.inkSoft }}>
            We bring professional medical expertise, advanced equipment, and dedicated caregivers directly to
            your doorstep, ensuring comfort and fast recovery for your loved ones.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-3.5">
            <a
              href="tel:+918115637591"
              className="inline-flex h-[44px] w-full items-center justify-center gap-2 rounded-full px-6 text-[13px] font-bold text-white shadow-md transition-all active:scale-[0.98] sm:w-auto"
              style={{ background: BRAND.tertiary }}
              onMouseEnter={(e) => (e.currentTarget.style.background = BRAND.tertiaryDark)}
              onMouseLeave={(e) => (e.currentTarget.style.background = BRAND.tertiary)}
            >
              <Phone size={16} /> Call Now
            </a>
            <a
              href="#contact"
              className="inline-flex h-[44px] w-full items-center justify-center gap-2 rounded-full border-2 bg-white px-6 text-[13px] font-semibold transition-all active:scale-[0.98] sm:w-auto"
              style={{ borderColor: BRAND.primary, color: BRAND.primaryDark }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = BRAND.primary;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = BRAND.primaryDark;
              }}
            >
              Book a Consultation
            </a>
          </div>
        </div>

        {/* TRUST STRIP - Pushes to bottom on desktop, normal on mobile */}
        <div className="mt-auto pt-10 lg:pt-0">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
            {TRUST_ITEMS.map(({ icon: Icon, title, desc, tint, color }) => (
              <div
                key={title}
                className="flex items-start gap-3 rounded-[12px] border bg-white p-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.06)] sm:p-4"
                style={{ borderColor: BRAND.line }}
              >
                <span
                  className="flex h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ background: tint, color }}
                >
                  <Icon size={16} />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="text-[12.5px] font-bold leading-tight sm:text-[13px]" style={{ color: BRAND.ink }}>
                    {title}
                  </span>
                  <span className="mt-0.5 text-[11px] leading-[14px] sm:text-xs" style={{ color: BRAND.inkSoft }}>
                    {desc}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}