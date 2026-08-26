import { BRAND } from "../../constants/brand";

export default function TeamCard({ name, role, desc, image }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[16px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#EAF2F4]">
      {/* Increased height: h-[420px] instead of 300 */}
      <div className="h-[420px] w-full overflow-hidden bg-[#EAF2F4]">
        <img src={image} alt={name} className="h-full w-full object-cover object-top" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-[16px] font-bold" style={{ color: BRAND.ink }}>
          {name}
        </h3>
        <p className="mt-1 text-[12px] font-semibold uppercase tracking-wide" style={{ color: BRAND.primary }}>
          {role}
        </p>
        <p className="mt-3 text-[13px] leading-[20px]" style={{ color: BRAND.inkSoft }}>
          {desc}
        </p>
      </div>
    </div>
  );
}