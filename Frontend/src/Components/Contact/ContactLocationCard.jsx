import { BRAND, FONTS } from "../../constants/brand";

const ContactLocationCard = () => {
  return (
    <div className="rounded-[14px] sm:rounded-[16px] overflow-hidden bg-white border shadow-[0px_4px_20px_rgba(11,110,143,0.06)]" style={{ borderColor: BRAND.line }}>
      <div className="relative h-[200px] sm:h-[260px] w-full bg-[#E8EEF1] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
          alt="map"
          className="w-full h-full object-cover grayscale opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 text-[10px] font-bold" style={{ color: BRAND.ink, fontFamily: "Inter" }}>
            <span className="w-4 h-4 rounded-full bg-[#0b6e8f] text-white flex items-center justify-center text-[10px]">+</span> WELLNESS NURSING
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-[14px] sm:text-[16px] font-semibold mb-3" style={{ color: BRAND.ink, fontFamily: "Inter" }}>Our Primary Location</h3>
        <div className="flex gap-2.5">
          <span className="material-symbols-outlined text-[18px] mt-0.5 shrink-0" style={{ color: BRAND.primary }}>location_on</span>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] sm:text-[13px] leading-[18px] sm:leading-[20px]" style={{ color: BRAND.inkSoft }}>
              1234 Healthcare Ave, Suite 100<br />Medical District, Seattle, WA 98101
            </p>
            <button className="mt-2 text-[11px] sm:text-[12px] font-semibold flex items-center gap-1" style={{ color: BRAND.primary, fontFamily: "Inter" }}>
              Get Directions →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactLocationCard;