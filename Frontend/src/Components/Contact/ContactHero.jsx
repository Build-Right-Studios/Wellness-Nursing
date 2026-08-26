import { BRAND, FONTS } from "../../constants/brand";

const ContactHero = () => {
  return (
    <div className="text-center max-w-[640px] mx-auto px-4 sm:px-0 pt-6 sm:pt-10 pb-6 sm:pb-8" style={{ fontFamily: FONTS.primary }}>
      <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.08em] mb-2" style={{ color: BRAND.primary }}>
        Get In Touch
      </p>
      <h1 className="text-[24px] sm:text-[32px] md:text-[38px] font-bold tracking-[-0.02em] leading-[1.15]" style={{ color: BRAND.ink, fontFamily: "Inter" }}>
        We're Here to Help
      </h1>
      <p className="mt-3 text-[13px] sm:text-[14px] leading-[20px] sm:leading-[22px] px-2 sm:px-0" style={{ color: BRAND.inkSoft }}>
        Whether you need immediate assistance, want to inquire about our home healthcare services, or have a question about equipment rental, our team is ready to support you.
      </p>
    </div>
  );
};
export default ContactHero;