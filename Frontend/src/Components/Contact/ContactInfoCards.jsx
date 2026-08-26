import { BRAND } from "../../constants/brand";

const ContactInfoCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
      <div className="rounded-[12px] bg-white p-4 sm:p-5 border shadow-[0px_4px_20px_rgba(11,110,143,0.06)]" style={{ borderColor: BRAND.line }}>
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E6F2F7] flex items-center justify-center mb-2.5">
          <span className="material-symbols-outlined text-[16px]" style={{ color: BRAND.primary }}>call</span>
        </div>
        <p className="text-[11px] font-semibold" style={{ color: BRAND.ink, fontFamily: "Inter" }}>General Inquiries</p>
        <p className="text-[11px] mt-1" style={{ color: BRAND.inkSoft }}>Mon-Fri, 8am - 6pm</p>
        <p className="text-[14px] sm:text-[16px] font-bold mt-1" style={{ color: BRAND.primary, fontFamily: "Inter" }}>+1 (206) 555-0100</p>
      </div>

      <div className="rounded-[12px] p-4 sm:p-5 border" style={{ backgroundColor: "#FFF6F3", borderColor: "#F5D6CC" }}>
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FFE9E0] flex items-center justify-center mb-2.5">
          <span className="material-symbols-outlined text-[16px] text-[#E76F51]">emergency</span>
        </div>
        <p className="text-[11px] font-semibold text-[#8A3B2A]" style={{ fontFamily: "Inter" }}>24/7 Emergency</p>
        <p className="text-[11px] mt-1 text-[#8A3B2A]/80">Immediate Support</p>
        <p className="text-[14px] sm:text-[16px] font-bold mt-1 text-[#E76F51]" style={{ fontFamily: "Inter" }}>+1 (206) 555-9999</p>
      </div>
    </div>
  );
};
export default ContactInfoCards;