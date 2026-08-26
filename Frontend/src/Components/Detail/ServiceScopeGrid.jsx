import { BRAND } from "../../constants/brand";

const ICON_BG = ["#E0F2FE", "#DCFCE7", "#FEE2E2", "#E0E7FF"];

const ServiceScopeGrid = ({ scope }) => {
  return (
    <div>
      <p className="text-[10px] font-extrabold uppercase tracking-[0.08em] mb-2" style={{ color: BRAND.primary }}>Service Scope</p>
      <h3 className="text-[18px] font-bold mb-4" style={{ color: "#111827", fontFamily: "Inter" }}>What's Included in Care</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {scope?.map((item, i) => (
          <div key={i} className="bg-white rounded-[12px] border border-[#EEF3F5] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <div className="w-8 h-8 rounded-full flex items-center justify-center mb-3" style={{ background: ICON_BG[i % 4] }}>
              <span className="text-[12px]">🩺</span>
            </div>
            <p className="text-[13px] font-bold" style={{ color: "#111827" }}>{item.title}</p>
            <p className="text-[12px] leading-[18px] mt-1" style={{ color: "#6B7280" }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ServiceScopeGrid;