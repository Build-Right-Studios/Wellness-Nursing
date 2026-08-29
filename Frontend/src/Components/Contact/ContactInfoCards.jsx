import { BRAND } from "../../constants/brand";

const ContactInfoCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
      {/* CALL CARD */}
      <div className="rounded-[12px] bg-white p-4 sm:p-5 border shadow-[0px_4px_20px_rgba(11,110,143,0.06)]" style={{ borderColor: BRAND.line }}>
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E6F2F7] flex items-center justify-center mb-2.5">
          <span className="material-symbols-outlined text-[16px]" style={{ color: BRAND.primary }}>call</span>
        </div>
        <p className="text-[11px] font-semibold" style={{ color: BRAND.ink, fontFamily: "Inter" }}>Call Us</p>
        <p className="text-[11px] mt-1" style={{ color: BRAND.inkSoft }}>Mon-Sun, 8am - 10pm</p>
        <a href="tel:+917827356935" className="text-[14px] sm:text-[16px] font-bold mt-1 inline-block hover:underline" style={{ color: BRAND.primary, fontFamily: "Inter" }}>
          +91 78273 56935
        </a>
      </div>

      {/* WHATSAPP CARD */}
      <div className="rounded-[12px] p-4 sm:p-5 border" style={{ backgroundColor: "#E6F6EC", borderColor: "#B9E2C5" }}>
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#C8EFD4] flex items-center justify-center mb-2.5">
          <span className="material-symbols-outlined text-[16px] text-[#1FA958]">chat</span>
        </div>
        <p className="text-[11px] font-semibold text-[#1A5C2E]" style={{ fontFamily: "Inter" }}>WhatsApp</p>
        <p className="text-[11px] mt-1 text-[#1A5C2E]/80">Quick Response</p>
        <a
          href="https://wa.me/918115637591"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] sm:text-[16px] font-bold mt-1 inline-block hover:underline text-[#1FA958]"
          style={{ fontFamily: "Inter" }}
        >
          +91 81156 37591
        </a>
      </div>
    </div>
  );
};

export default ContactInfoCards;