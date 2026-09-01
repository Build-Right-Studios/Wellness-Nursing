import { useNavigate } from "react-router-dom";
import { BRAND } from "../../constants/brand";
import BaseCardShell from "../Common/BaseCardShell";

const EquipmentCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <BaseCardShell image={item.image}>
      <span className="text-[10px] font-extrabold uppercase tracking-[0.08em] mb-1" style={{ color: BRAND.primary }}>{item.type}</span>
      <h3 className="text-[16px] font-bold" style={{ color: "#111827", fontFamily: "Inter" }}>{item.name}</h3>
      <p className="mt-1 text-[11px] font-semibold" style={{ color: item.serviceInformation.availability === "In Stock"? "#0A9B4C" : "#B7472A" }}>● {item.serviceInformation.availability}</p>
      {/* <div className="mt-2 flex items-baseline gap-2">
        <span className="text-[14px] font-bold" style={{ color: BRAND.ink }}>₹{item.rentalInformation.monthlyRate}/mo</span>
        <span className="text-[11px]" style={{ color: BRAND.inkSoft }}>₹{item.rentalInformation.dailyRate}/day</span>
      </div> */}
      <button onClick={() => navigate(`/equipment/${item.id}`)} className="mt-4 w-full h-[42px] rounded-[8px] flex items-center justify-center gap-1.5 text-[13px] font-semibold text-white hover:opacity-90" style={{ background: BRAND.primary }}>
        Rent Now <span>→</span>
      </button>
    </BaseCardShell>
  );
};
export default EquipmentCard;