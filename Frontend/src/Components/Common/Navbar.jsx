import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "../../assets/logo_new.png";

const PHONE_TEL = "+917827356935";
const WHATSAPP_NUMBER = "918115637591"; // digits only, no + or spaces
const TEL_LINK = `tel:${PHONE_TEL}`;
const PHONE_DISPLAY = "+91 78273 56935";

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

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Equipment", to: "/equipment" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    const MOBILE_BREAKPOINT = 768;
    const handleResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (open) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md"
      style={{ borderColor: BRAND.line }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          onClick={closeMenu}
          aria-label="Wellness Nursing Home Care — Home"
          className="flex flex-shrink-0 items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
        >
          <div className="flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
            <img src={logo} alt="Wellness Nursing Home Care" className="h-full w-full object-contain" />
          </div>
          <span className="flex flex-col leading-tight">
            <span className="text-2xl font-semibold tracking-wide sm:text-3xl" style={{ fontFamily: "'EB Garamond', serif", color: BRAND.secondaryDark }}>
              WELLNESS
            </span>
            <span className="text-[10px] font-semibold tracking-[0.1em] sm:text-xs" style={{ fontFamily: "'Inter', serif", color: BRAND.primaryDark }}>
              NURSING HOME CARE
            </span>
          </span>
        </NavLink>

        <nav aria-label="Primary" className="hidden flex-1 justify-center md:flex">
          <ul className="flex items-center gap-6 lg:gap-8 xl:gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className="group relative inline-block pb-2 text-base font-medium transition-all duration-200 hover:-translate-y-0.5"
                  style={({ isActive }) => ({ color: isActive? BRAND.primary : BRAND.inkSoft })}
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span
                        className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full transition-all duration-300 ${
                          isActive? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                        }`}
                        style={{ background: BRAND.primary }}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* DESKTOP - CALL + WHATSAPP */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <a
            href={TEL_LINK}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: BRAND.tertiary }}
            onMouseEnter={(e) => (e.currentTarget.style.background = BRAND.tertiaryDark)}
            onMouseLeave={(e) => (e.currentTarget.style.background = BRAND.tertiary)}
          >
            <Phone size={18} strokeWidth={2.2} />
            Call Now
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border bg-white px-5 py-3 text-sm font-semibold transition-all hover:bg-gray-50"
            style={{ borderColor: BRAND.line, color: BRAND.ink }}
          >
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) =>!value)}
          aria-label={open? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 rounded-lg p-2 transition-colors hover:bg-gray-100 md:hidden"
          style={{ color: BRAND.primaryDark }}
        >
          {open? <X size={28} strokeWidth={2} /> : <Menu size={28} strokeWidth={2} />}
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full z-40 max-h-[80vh] overflow-y-auto bg-white md:hidden" style={{ borderTop: `1px solid ${BRAND.line}` }}>
          <nav aria-label="Mobile navigation" className="px-5 pt-2">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.to} className="border-b" style={{ borderColor: BRAND.line }}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={closeMenu}
                    className="flex items-center justify-between py-4 text-base transition-colors"
                    style={({ isActive }) => ({
                      color: isActive? BRAND.primary : BRAND.inkSoft,
                      fontWeight: isActive? 600 : 500,
                    })}
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        {isActive && <span className="h-2 w-2 rounded-full" style={{ background: BRAND.primary }} />}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-5 py-6 space-y-3">
            <a
              href={TEL_LINK}
              className="flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all active:scale-[0.98]"
              style={{ background: BRAND.tertiary }}
            >
              <Phone size={18} />
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border bg-white px-6 py-3.5 text-base font-semibold transition-all hover:bg-gray-50"
              style={{ borderColor: BRAND.line, color: BRAND.ink }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}