import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "../../assets/logo_new.png";

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

  /*
   * Close mobile menu with Escape key.
   */
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /*
   * If the viewport crosses back into desktop width (e.g. resizing dev
   * tools, or rotating a tablet) while the mobile menu is open, force it
   * closed. Without this, `open` can stay stuck `true` from a mobile
   * viewport, and the body-lock effect below can leave a stale
   * `paddingRight` applied when you resize back down to mobile.
   */
  useEffect(() => {
    const MOBILE_BREAKPOINT = 768; // matches Tailwind's `md`

    const handleResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /*
   * Lock body scroll while the mobile menu is open, compensating for the
   * disappearing scrollbar so content doesn't jump sideways.
   */
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
            <span
              className="text-2xl font-semibold tracking-wide sm:text-3xl"
              style={{ fontFamily: "'EB Garamond', serif", color: BRAND.secondaryDark }}
            >
              WELLNESS
            </span>

            <span
              className="text-[10px] font-semibold tracking-[0.1em] sm:text-xs"
              style={{ fontFamily: "'Inter', serif", color: BRAND.primaryDark }}
            >
              NURSING HOME CARE
            </span>
          </span>
        </NavLink>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}

        <nav aria-label="Primary" className="hidden flex-1 justify-center md:flex">
          <ul className="flex items-center gap-6 lg:gap-8 xl:gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className="group relative inline-block pb-2 text-base font-medium transition-all duration-200 hover:-translate-y-0.5"
                  style={({ isActive }) => ({ color: isActive ? BRAND.primary : BRAND.inkSoft })}
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span
                        className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full transition-all duration-300 ${
                          isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
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

        {/* =========================
            DESKTOP CALL BUTTON
        ========================== */}

        <a
          href="tel:+918115637591"
          className="hidden flex-shrink-0 items-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg md:inline-flex"
          style={{ background: BRAND.tertiary }}
          onMouseEnter={(e) => (e.currentTarget.style.background = BRAND.tertiaryDark)}
          onMouseLeave={(e) => (e.currentTarget.style.background = BRAND.tertiary)}
        >
          <Phone size={18} strokeWidth={2.2} />
          Call Now
        </a>

        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 rounded-lg p-2 transition-colors hover:bg-gray-100 md:hidden"
          style={{ color: BRAND.primaryDark }}
        >
          {open ? <X size={28} strokeWidth={2} /> : <Menu size={28} strokeWidth={2} />}
        </button>
      </div>

      {/* =========================
          MOBILE MENU
          Rendered as a fixed full-screen overlay below the header, so it
          can never get squeezed, overlapped, or pushed around by page
          content on small screens.
      ========================== */}

      {open && (
        <div
          className="absolute inset-x-0 top-full z-40 max-h-[80vh] overflow-y-auto bg-white md:hidden"
          style={{ borderTop: `1px solid ${BRAND.line}` }}
        >
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
                      color: isActive ? BRAND.primary : BRAND.inkSoft,
                      fontWeight: isActive ? 600 : 500,
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

          {/* Mobile Call Button */}
          <div className="px-5 py-6">
            <a
              href="tel:+918115637591"
              className="flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-200 active:scale-[0.98]"
              style={{ background: BRAND.tertiary }}
            >
              <Phone size={18} />
              Call 8115637591
            </a>
          </div>
        </div>
      )}
    </header>
  );
}