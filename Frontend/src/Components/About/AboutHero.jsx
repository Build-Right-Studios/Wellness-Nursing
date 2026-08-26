import { BRAND, FONTS } from "../../constants/brand.js";

const AboutHero = () => {
  return (
    <section className="relative w-full bg-[#f8fafb] overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-[#c0e8ff]/20 rounded-full blur-[80px] opacity-50 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-[48px] pt-[32px] md:pt-[40px] pb-[56px] flex flex-col md:flex-row items-center gap-[24px]">

        {/* Left */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <span className="font-extrabold text-[14px] leading-[20px] tracking-[0.08em] uppercase text-[#0b6e8f]" style={{ fontFamily: "Inter" }}>
            OUR STORY
          </span>
          <h1 className="font-bold text-[#191c1d] text-[28px] leading-[36px] md:text-[40px] md:leading-[46px] tracking-[-0.02em]" style={{ fontFamily: "Inter" }}>
            Providing compassionate care when you need it most.
          </h1>
          <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] max-w-[480px] text-[#3f484d]" style={{ fontFamily: "Inter" }}>
            CarePulse was founded on the belief that healthcare should be accessible, empathetic, and seamlessly integrated into your life. We bridge the gap between clinical excellence and human comfort.
          </p>
        </div>

        {/* Right - REDUCED HEIGHT */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 relative">
          <div className="relative w-full h-[300px] md:h-[360px] lg:h-[380px] rounded-[24px] overflow-hidden shadow-lg border-4 border-white">
            <img
              className="w-full h-full object-cover object-top"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_FYG6q_dbdHt2HCCOZSdMPzMeTHptOPo-DmreT7bAKFP-fnQu07lVdrEl6KeTwCe8LcnTeGx4Ji--G01GxK794Y0o6AUgc-agFQhc-EmTFJB1iCAk6UiTz7_xkpQ5RsADIAqSnLsUosno0wxmx6iZF4vQrx1iNyTA5tbkYAHjj6AwFzrU-G1izXJjZ0KiS8ixoHi7f4mPQvQ5VmN9PLycUWwqLoOp92_znU6JgUN-2FM1quMhvHn4cw"
              alt="Founder"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;