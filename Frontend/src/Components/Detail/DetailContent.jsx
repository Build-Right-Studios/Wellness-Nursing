import ServiceScopeGrid from "./ServiceScopeGrid";
import WhyChooseUs from "./WhyChooseUs";
import { BRAND } from "../../constants/brand";

const DetailContent = ({ data, isService }) => {
  return (
    <div className="flex-1 flex flex-col gap-8">
      <div>
        <h2 className="text-[18px] font-bold" style={{ color: "#111827", fontFamily: "Inter" }}>
          {isService? "Comprehensive Medical Support" : "Technical Specifications"}
        </h2>
        <p className="mt-2 text-[13px] leading-[20px]" style={{ color: "#4B5563" }}>
          {isService? data.content.details[0] : `High-quality ${data.name} built for home care comfort and safety.`}
        </p>
        {isService && <p className="mt-3 text-[13px] leading-[20px]" style={{ color: "#4B5563" }}>{data.content.details[1]}</p>}

        {!isService && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.technicalSpecifications.map((s, i) => (
              <div key={i} className="bg-white border border-[#EEF3F5] rounded-[8px] p-3 flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-[0.05em]" style={{ color: BRAND.inkSoft }}>{s.label}</span>
                <span className="text-[12.5px] font-medium mt-1" style={{ color: BRAND.ink }}>{s.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {isService? <ServiceScopeGrid scope={data.serviceScope} /> : null}
      <WhyChooseUs />
    </div>
  );
};
export default DetailContent;