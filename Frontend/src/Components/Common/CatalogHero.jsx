import { BRAND, FONTS } from "../../constants/brand";

const CatalogHero = ({ eyebrow, title, subtitle }) => (
  <div className="text-center max-w-[680px] mx-auto px-4 pt-8 sm:pt-16 pb-8 sm:pb-12">
    <p className="text-[11.5px] font-extrabold uppercase tracking-[0.08em] mb-3" style={{ color: BRAND.primary }}>
      {eyebrow}
    </p>
    <h1 className="text-[26px] sm:text-[40px] font-bold leading-[1.1] tracking-[-0.02em]" style={{ color: BRAND.primary, fontFamily: "Inter" }}>
      {title}
    </h1>
    <p className="mt-4 text-[13px] sm:text-[14.5px] leading-[22px] max-w-[520px] mx-auto" style={{ color: BRAND.inkSoft, fontFamily: FONTS.primary }}>
      {subtitle}
    </p>
  </div>
);
export default CatalogHero;