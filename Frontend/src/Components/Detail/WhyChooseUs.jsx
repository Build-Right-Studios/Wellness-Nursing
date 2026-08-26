import { BRAND } from "../../constants/brand";

const POINTS = [
  { title: "Certified Professionals", desc: "All our nurses are fully licensed, rigorously vetted, and undergo continuous clinical training." },
  { title: "24/7 Clinical Support", desc: "Access to an on-call clinical director around the clock for emergencies or immediate medical advice." },
  { title: "Family-Centric Approach", desc: "We actively involve family members in the care planning process, providing education and emotional support." },
];

const WhyChooseUs = () => (
  <div className="bg-[#FCFEFE] border border-[#EEF3F5] rounded-[12px] p-5 sm:p-6">
    <p className="text-[10px] font-extrabold uppercase tracking-[0.08em]" style={{ color: BRAND.primary }}>Why Choose Us</p>
    <h3 className="text-[16px] font-bold mt-1 mb-4" style={{ color: "#111827" }}>The CarePulse Advantage</h3>
    <div className="flex flex-col gap-4">
      {POINTS.map((p, i) => (
        <div key={i} className="flex gap-3">
          <div className="w-5 h-5 rounded-full border border-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-[10px] text-[#10B981]">✓</span>
          </div>
          <div>
            <p className="text-[12.5px] font-bold" style={{ color: "#111827" }}>{p.title}</p>
            <p className="text-[12px] leading-[18px] mt-0.5" style={{ color: "#6B7280" }}>{p.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default WhyChooseUs;