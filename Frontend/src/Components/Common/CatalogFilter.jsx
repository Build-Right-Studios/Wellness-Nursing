export default function CatalogFilter({ filters = [], active = "All", onChange, activeFilter, setActiveFilter }) {
  // Support both prop names: filters OR filterOptions, active OR activeFilter
  const filterList = filters?.length? filters : [];
  const currentActive = active || activeFilter || "All";
  const handleChange = onChange || setActiveFilter;

  if (!filterList.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {filterList.map((filter, index) => (
        <button
          key={`${filter}-${index}`}
          onClick={() => handleChange?.(filter)}
          className={`rounded-full px-4 py-2 text-[12px] font-semibold transition-all ${
            currentActive === filter
            ? "bg-[#0B6E8F] text-white shadow-sm"
              : "bg-white text-[#4A6169] border border-[#E3EAEC] hover:border-[#0B6E8F]/30"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}