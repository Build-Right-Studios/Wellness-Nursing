import { BRAND, FONTS } from "../../constants/brand";

const HeartIcon = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z" />
    </svg>
  );
};

const EyeIcon = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
};

const MissionVision = () => {
  return (
    <section
      className="border-y py-10 sm:py-12 lg:py-14"
      style={{
        backgroundColor: "#FAFCFC",
        borderColor: BRAND.line,
        fontFamily: FONTS.primary,
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-7 text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.08em]" style={{ color: BRAND.primary }}>
            Our Purpose
          </p>
          <h2 className="mt-2 text-[22px] sm:text-[26px] font-bold tracking-[-0.01em]" style={{ color: BRAND.ink, fontFamily: "Inter" }}>
            Guiding Principles
          </h2>
        </div>

        {/* EQUAL WIDTH + EQUAL HEIGHT (longer length) */}
        <div className="mx-auto grid max-w-[1000px] gap-6 md:grid-cols-2 items-stretch">

          {/* Mission - Equal */}
          <div
            className="rounded-[16px] p-6 sm:p-7 flex flex-col gap-3 h-full shadow-[0px_4px_20px_rgba(11,110,143,0.08)] backdrop-blur-[12px]"
            style={{
              backgroundColor: "#FFFFFF",
              border: `1px solid ${BRAND.line}`,
            }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full shrink-0" style={{ backgroundColor: BRAND.primaryTint, color: BRAND.primary }}>
              <HeartIcon />
            </div>
            <h3 className="text-[17px] font-semibold" style={{ color: BRAND.ink, fontFamily: "Inter" }}>
              Our Mission
            </h3>
            <p className="text-[13.5px] leading-[22px] flex-1" style={{ color: BRAND.inkSoft }}>
              To deliver professional, reliable, and empathetic healthcare services directly to our clients&apos; homes, ensuring they maintain dignity, comfort, and independence while receiving the highest standard of medical attention.
            </p>
          </div>

          {/* Vision - Equal */}
          <div
            className="rounded-[16px] p-6 sm:p-7 flex flex-col gap-3 h-full"
            style={{ backgroundColor: BRAND.primary }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#FFFFFF" }}>
              <EyeIcon />
            </div>
            <h3 className="text-[17px] font-semibold text-white" style={{ fontFamily: "Inter" }}>
              Our Vision
            </h3>
            <p className="text-[13.5px] leading-[22px] text-white/90 flex-1">
              To be the leading standard for home healthcare, recognized for our uncompromising clinical quality, innovative care solutions, and profound dedication to the holistic well-being of every individual we serve.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;