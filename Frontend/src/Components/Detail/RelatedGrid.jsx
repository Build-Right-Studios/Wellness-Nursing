import { useNavigate } from "react-router-dom";
import services from "../../data/services.json";
import equipments from "../../data/equipment_rental.json";

const RelatedGrid = ({ currentId, relatedIds, type }) => {
  const navigate = useNavigate();
  const source = type === "service"? services : equipments;
  const related = relatedIds?.length? source.filter(s => relatedIds.includes(s.id)).slice(0,3) : source.filter(s => s.id!== currentId).slice(0,3);

  return (
    <div className="w-full bg-[#F8FBFC] border-t border-[#EEF3F5] py-8 sm:py-10">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.08em]" style={{ color: "#0E7490" }}>Continuing Care</p>
            <h3 className="text-[18px] font-bold" style={{ color: "#111827" }}>Related {type === "service"? "Services" : "Equipment"}</h3>
          </div>
          <div className="flex gap-2">
            <button className="w-7 h-7 rounded-full border bg-white flex items-center justify-center">←</button>
            <button className="w-7 h-7 rounded-full border bg-white flex items-center justify-center">→</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {related.map(item => (
            <div key={item.id} onClick={() => navigate(`/${type === "service"? "services" : "equipment"}/${item.id}`)} className="bg-white rounded-[12px] overflow-hidden border border-[#EEF3F5] shadow-sm cursor-pointer group">
              <div className="h-[180px] overflow-hidden"><img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform" /></div>
              <div className="p-4">
                <h4 className="text-[14px] font-bold" style={{ color: "#111827" }}>{item.name}</h4>
                <p className="text-[12px] leading-[17px] mt-1 line-clamp-2" style={{ color: "#6B7280" }}>{item.content?.summary || item.type}</p>
                <p className="text-[11px] font-semibold mt-3" style={{ color: "#0E7490" }}>Learn More →</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RelatedGrid;