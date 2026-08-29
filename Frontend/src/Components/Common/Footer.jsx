import React from "react";
import { NavLink } from "react-router-dom";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import logo from "../../assets/logo.jpeg";

const BRAND = {
  primary: "#0B6E8F",
  primaryDark: "#074E66",
  secondaryDark: "#357E58",
  tertiary: "#F26B3A",
  ink: "#0E2A33",
  inkSoft: "#4A6169",
  line: "#E3EAEC",
};

const QUICK_LINKS = [
  { label: "About Us", to: "/about" },
  { label: "Our Mission", to: "/about#mission" },
  { label: "Services", to: "/services" },
];

const SUPPORT_LINKS = [
  { label: "Equipment Rental", to: "/equipment" },
  { label: "Location Finder", to: "/contact#locations" },
  { label: "Contact Us", to: "/contact" },
];

const PHONE_DISPLAY = "+91 81156 37591";
const PHONE_TEL = "+917827356935";
const WHATSAPP_NUMBER = "918115637591"; // digits only, no + or spaces

export default function Footer() {
  return (
    <>
      <footer className="border-t" style={{ borderColor: BRAND.line, background: "#F7F9FA" }}>
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5">
                <img src={logo} alt="Wellness Nursing Home Care" className="h-9 w-9 object-contain" />
                <span className="text-lg font-bold" style={{ color: BRAND.primaryDark }}>
                  Wellness <br />Nursing Home Care
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: BRAND.inkSoft }}>
                Providing hospital-quality healthcare in the comfort of your home. Your health, our priority.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: BRAND.primary }}>
                Quick Links
              </h4>
              <ul className="mt-4 space-y-2.5">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <NavLink
                      to={link.to}
                      className="text-sm transition-colors hover:underline"
                      style={{ color: BRAND.inkSoft }}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: BRAND.primary }}>
                Support
              </h4>
              <ul className="mt-4 space-y-2.5">
                {SUPPORT_LINKS.map((link) => (
                  <li key={link.label}>
                    <NavLink
                      to={link.to}
                      className="text-sm transition-colors hover:underline"
                      style={{ color: BRAND.inkSoft }}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: BRAND.primary }}>
                Contact
              </h4>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2.5">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: BRAND.primary }} />
                  <span className="text-sm" style={{ color: BRAND.inkSoft }}>
                    Sec 115 Nagori benqet hall noida 201301 Gautambudha Nagar
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone size={16} className="flex-shrink-0" style={{ color: BRAND.primary }} />
                  <a href={`tel:${PHONE_TEL}`} className="text-sm hover:underline" style={{ color: BRAND.inkSoft }}>
                    {PHONE_TEL}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={16} className="flex-shrink-0" style={{ color: BRAND.primary }} />
                  <a
                    href="mailto:care@wellnessnursinghomecare.com"
                    className="text-sm hover:underline"
                    style={{ color: BRAND.inkSoft }}
                  >
                    a0208611@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t" style={{ borderColor: BRAND.line }}>
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 lg:px-8">
            <p className="text-xs" style={{ color: BRAND.inkSoft }}>
              © {new Date().getFullYear()} Wellness Nursing Home Care Pvt Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating contact buttons */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-105"
          style={{ background: BRAND.secondaryDark }}
        >
          <MessageCircle size={22} />
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          aria-label="Call us"
          className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-105"
          style={{ background: BRAND.primaryDark }}
        >
          <Phone size={20} />
        </a>
      </div>
    </>
  );
}