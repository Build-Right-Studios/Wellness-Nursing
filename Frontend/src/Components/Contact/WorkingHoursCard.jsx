import { BRAND, FONTS } from "../../constants/brand";

const WorkingHoursCard = () => {
  return (
    <div className="rounded-[12px] bg-white p-4 sm:p-5 border mt-3 sm:mt-4 shadow-[0px_4px_20px_rgba(11,110,143,0.06)]" style={{ borderColor: BRAND.line }}>
      {/* Mobile: stack, Desktop: row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#F2F4F5] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[16px]" style={{ color: BRAND.inkSoft }}>schedule</span>
          </div>
          <div>
            <p className="text-[11px] sm:text-[12px] font-semibold" style={{ color: BRAND.ink, fontFamily: "Inter" }}>Working Hours</p>
            <p className="text-[11px] sm:text-[12px]" style={{ color: BRAND.inkSoft }}>Office & Warehouse</p>
          </div>
        </div>
        <div className="text-left sm:text-right text-[11px] sm:text-[12px] leading-[20px] sm:leading-[22px] pl-11 sm:pl-0" style={{ color: BRAND.inkSoft, fontFamily: FONTS.primary }}>
          <p>8:00 AM - 6:00 PM</p>
          <p>9:00 AM - 2:00 PM</p>
          <p className="text-[#9B2226] font-medium">Closed (Emergencies Only)</p>
        </div>
      </div>
    </div>
  );
};
export default WorkingHoursCard;