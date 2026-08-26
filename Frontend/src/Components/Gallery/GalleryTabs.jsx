import { BRAND, FONTS } from "../../constants/brand";

const TABS = ["All", "Home Care", "Medical Equipment", "Our Team", "Training & Setup"];

const GalleryTabs = ({ active, setActive }) => {
  return (
    <div className="w-full">
      {/* Mobile: stack vertical, Desktop: row center */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-center gap-2 sm:gap-3 px-4 sm:px-0">
        {TABS.map((tab) => {
          const isActive = active === tab;
          return (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`w-full sm:w-auto rounded-[8px] sm:rounded-full px-4 py-2.5 sm:py-2 text-[13px] font-semibold text-left sm:text-center transition-all active:scale-[0.98]`}
              style={{
                backgroundColor: isActive ? BRAND.primary : "#FFFFFF",
                color: isActive ? "#FFFFFF" : BRAND.ink,
                border: `1px solid ${isActive ? BRAND.primary : BRAND.line}`,
                fontFamily: "Inter",
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryTabs;