import { BRAND, FONTS } from "../../constants/brand";

const GalleryCTA = () => {
  return (
    <section className="mt-12 sm:mt-16 w-full bg-[#E6F7FC] py-10 sm:py-14">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <h2 className="text-[18px] sm:text-[22px] font-bold tracking-[-0.01em]" style={{ color: BRAND.ink, fontFamily: "Inter" }}>
          Ready to experience our care?
        </h2>
        <p className="mt-3 text-[13px] sm:text-[14px] leading-[20px] sm:leading-[22px]" style={{ color: BRAND.inkSoft, fontFamily: FONTS.primary }}>
          Call us today to discuss your home healthcare and medical equipment needs with our compassionate team.
        </p>
        <button
          className="mt-5 sm:mt-6 inline-flex h-[42px] sm:h-[44px] items-center gap-2 rounded-full px-6 sm:px-7 text-[13px] sm:text-[14px] font-semibold text-white shadow-md hover:opacity-90 active:scale-[0.98] transition-all"
          style={{ backgroundColor: "#B7472A", fontFamily: "Inter" }}
        >
          <span className="material-symbols-outlined text-[18px]">call</span>
          Call Now
        </button>
      </div>
    </section>
  );
};
export default GalleryCTA;