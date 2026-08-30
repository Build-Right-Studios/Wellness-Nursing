import { useNavigate } from "react-router-dom";
import equipmentData from "../../data/equipment_rental.json";

// FIX: Load all equipment images from src/assets - works for any subfolder
const imageModules = import.meta.glob("../../assets/**/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default"
});

const BRAND = {
  primary: "#0B6E8F",
  ink: "#0E2A33",
  inkSoft: "#4A6169",
  line: "#E3EAEC",
};

const HOME_EQUIPMENT_IDS = [
  "oxygen-concentrator",
  "oxygen-cylinder",
  "hospital-bed",
  "wheelchair",
  "bipap-machine",
  "suction-machine",
  "cpap-machine",
  "walker"
];

function getImageUrl(jsonPath) {
  if (!jsonPath || jsonPath.startsWith("http")) return jsonPath || null;
  const fileName = jsonPath.split("/").pop().split(".")[0].toLowerCase(); // oxygen-concentrator
  const foundKey = Object.keys(imageModules).find(k => k.toLowerCase().includes(fileName));
  return foundKey? imageModules[foundKey] : null;
}

export default function HomeEquipment() {
  const navigate = useNavigate();

  const equipments = HOME_EQUIPMENT_IDS.map(id => {
    const found = equipmentData?.find?.(e => e.id === id);
    return found || { id, name: id.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()), image: null };
  }).filter(Boolean);

  return (
    <section className="w-full bg-[#F6F8FA] py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.12em]" style={{ color: BRAND.primary }}>Medical Equipment</p>
            <h2 className="mt-1 text-[20px] font-extrabold sm:text-[22px]" style={{ color: BRAND.ink }}>Rent or Buy Premium Equipment</h2>
            <p className="mt-1.5 max-w-[520px] text-[12px] leading-[17px]" style={{ color: BRAND.inkSoft }}>
              Sanitized, high-quality medical devices delivered and installed at your home promptly.
            </p>
          </div>
          <button onClick={() => navigate("/equipment")} className="hidden h-[36px] rounded-full px-5 text-[12px] font-semibold text-white sm:inline-flex items-center justify-center" style={{ background: BRAND.primary }}>
            View All Equipment
          </button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {equipments.map((item, index) => {
            const imgUrl = getImageUrl(item.image);
            return (
              <div
                key={`${item.id}-${index}`} // FIX: duplicate key issue
                onClick={() => navigate(`/equipment/${item.id}`)}
                className="group flex cursor-pointer flex-col items-center rounded-[10px] border bg-white p-3 sm:p-4 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all"
                style={{ borderColor: BRAND.line }}
              >
                <div className="flex h-[72px] w-full items-center justify-center sm:h-[84px] bg-white">
                  {imgUrl? (
                    <img
                      src={imgUrl}
                      alt={item.name}
                      className="h-full max-h-[72px] w-auto object-contain group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="text-[10px] text-gray-400 text-center">
                      {item.name}
                    </div>
                  )}
                </div>
                <h3 className="mt-3 text-center text-[11.5px] font-bold sm:text-[12.5px]" style={{ color: BRAND.ink }}>
                  {item.name}
                </h3>
                <span className="mt-2 inline-flex rounded-full px-2.5 py-1 text-[9px] font-semibold" style={{ background: "#E7F6EE", color: "#2E7D4F" }}>
                  Call for Price
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center sm:hidden">
          <button onClick={() => navigate("/equipment")} className="h-[40px] rounded-full px-6 text-[12px] font-semibold text-white" style={{ background: BRAND.primary }}>
            View All Equipment
          </button>
        </div>
      </div>
    </section>
  );
}