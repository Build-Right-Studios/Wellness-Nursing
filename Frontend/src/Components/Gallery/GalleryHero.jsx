import { BRAND, FONTS } from "../../constants/brand";

const GalleryHero = () => {
  return (
    <div className="text-center max-w-[640px] mx-auto px-4 sm:px-0 pt-6 sm:pt-12 pb-6 sm:pb-10" style={{ fontFamily: FONTS.primary }}>
      <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.08em] mb-2 sm:mb-3" style={{ color: BRAND.primary }}>
        Our Work
      </p>
      <h1 className="text-[26px] sm:text-[36px] font-bold tracking-[-0.02em] leading-[1.15]" style={{ color: BRAND.ink, fontFamily: "Inter" }}>
        Care in Action
      </h1>
      <p className="mt-3 text-[13px] sm:text-[14.5px] leading-[20px] sm:leading-[22px]" style={{ color: BRAND.inkSoft }}>
        A visual journey of our commitment to providing compassionate home healthcare, professional medical equipment setup, and dedicated team support.
      </p>
    </div>
  );
};
export default GalleryHero;