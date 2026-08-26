import { useMemo } from "react";
import ServiceCard from "../Service/ServiceCard";
import EquipmentCard from "../Equipment/EquipmentCard";

const CatalogGrid = ({ data, type, activeFilter, filterKey = "category" }) => {
  const filtered = useMemo(() => {
    if (activeFilter === "All") return data;
    return data.filter((i) => i[filterKey] === activeFilter || i.type === activeFilter || i.serviceType === activeFilter);
  }, [data, activeFilter, filterKey]);

  return (
    <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filtered.map((item) =>
          type === "service"? <ServiceCard key={item.id} service={item} /> : <EquipmentCard key={item.id} item={item} />
        )}
      </div>
    </div>
  );
};
export default CatalogGrid;