import { useState } from "react";
import { BRAND, FONTS } from "../../constants/brand";

const EnquiryForm = () => {
  const [service, setService] = useState("");
  return (
    <div className="rounded-[14px] sm:rounded-[16px] bg-white p-4 sm:p-7 border shadow-[0px_8px_30px_rgba(11,110,143,0.08)]" style={{ borderColor: BRAND.line }}>
      <h2 className="text-[18px] sm:text-[22px] font-bold tracking-[-0.01em]" style={{ color: BRAND.ink, fontFamily: "Inter" }}>Send an Enquiry</h2>
      <p className="text-[12px] sm:text-[13px] leading-[18px] mt-1.5" style={{ color: BRAND.inkSoft }}>
        Fill out the form below and our care coordinators will get back to you within 2 hours.
      </p>

      <form className="mt-5 flex flex-col gap-3.5 sm:gap-4">
        <div>
          <label className="text-[11px] sm:text-[12px] font-semibold mb-1 block" style={{ color: BRAND.ink, fontFamily: "Inter" }}>Full Name</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[16px] sm:text-[18px]" style={{ color: BRAND.inkSoft }}>person</span>
            <input placeholder="Jane Doe" className="w-full h-[40px] sm:h-[42px] rounded-[8px] border pl-9 pr-3 text-[13px] bg-[#F8FAFB] focus:outline-none focus:border-[#0b6e8f] focus:bg-white" style={{ borderColor: BRAND.line, fontFamily: FONTS.primary }} />
          </div>
        </div>

        <div>
          <label className="text-[11px] sm:text-[12px] font-semibold mb-1 block" style={{ color: BRAND.ink, fontFamily: "Inter" }}>Phone Number</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[16px] sm:text-[18px]" style={{ color: BRAND.inkSoft }}>smartphone</span>
            <input placeholder="(555) 123-4567" className="w-full h-[40px] sm:h-[42px] rounded-[8px] border pl-9 pr-3 text-[13px] bg-[#F8FAFB] focus:outline-none focus:border-[#0b6e8f] focus:bg-white" style={{ borderColor: BRAND.line, fontFamily: FONTS.primary }} />
          </div>
        </div>

        <div>
          <label className="text-[11px] sm:text-[12px] font-semibold mb-1 block" style={{ color: BRAND.ink, fontFamily: "Inter" }}>Service of Interest</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[16px] sm:text-[18px]" style={{ color: BRAND.inkSoft }}>medical_services</span>
            <select value={service} onChange={(e) => setService(e.target.value)} className="w-full h-[40px] sm:h-[42px] rounded-[8px] border pl-9 pr-8 text-[13px] bg-[#F8FAFB] focus:outline-none focus:border-[#0b6e8f] appearance-none" style={{ borderColor: BRAND.line, color: service? BRAND.ink : BRAND.inkSoft }}>
              <option value="">Select an option...</option>
              <option>Home Nursing</option>
              <option>Physiotherapy</option>
              <option>Equipment Rental</option>
            </select>
            <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-[18px] pointer-events-none" style={{ color: BRAND.inkSoft }}>expand_more</span>
          </div>
        </div>

        <div>
          <label className="text-[11px] sm:text-[12px] font-semibold mb-1 block" style={{ color: BRAND.ink, fontFamily: "Inter" }}>Message</label>
          <textarea rows={4} placeholder="How can we assist you today?" className="w-full rounded-[8px] border p-3 text-[13px] bg-[#F8FAFB] focus:outline-none focus:border-[#0b6e8f] focus:bg-white resize-none h-[90px] sm:h-[110px]" style={{ borderColor: BRAND.line, fontFamily: FONTS.primary }} />
        </div>

        <button type="submit" className="h-[42px] sm:h-[44px] w-full rounded-[8px] text-[13px] font-semibold text-white flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all" style={{ backgroundColor: BRAND.primary, fontFamily: "Inter" }}>
          Send Message <span className="text-[13px]">▶</span>
        </button>

        <p className="text-[10px] sm:text-[10.5px] text-center px-2" style={{ color: BRAND.inkSoft }}>Your information is secure and handled with confidentiality.</p>
      </form>
    </div>
  );
};
export default EnquiryForm;