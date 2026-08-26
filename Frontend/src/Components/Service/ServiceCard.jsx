import { useNavigate } from "react-router-dom";
import { BRAND } from "../../constants/brand";
import BaseCardShell from "../Common/BaseCardShell";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  return (
    <BaseCardShell image={service.image}>
      <h3 className="text-[16px] font-bold leading-[1.25]" style={{ color: "#111827", fontFamily: "Inter" }}>{service.name}</h3>
      <p className="mt-2 text-[13px] leading-[19px] line-clamp-3 flex-1" style={{ color: "#4B5563" }}>{service.content.summary}</p>
      <button onClick={() => navigate(`/services/${service.id}`)} className="mt-4 w-full h-[42px] rounded-[8px] flex items-center justify-center gap-1.5 text-[13px] font-semibold text-white hover:opacity-90" style={{ background: BRAND.primary }}>
        Book This Service <span>→</span>
      </button>
    </BaseCardShell>
  );
};
export default ServiceCard;