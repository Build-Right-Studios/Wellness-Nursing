import { BRAND, FONTS } from "../../constants/brand";

const awards = [
  { id: 1, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGEIXmpEGRfp7IH8rMuDsIlprs6ZSS7ORuhM5iAXndGohq0FUG15zuWsClz6aabFoP4ntMGYqQmsiDk2hecfpS2vYEy0NrIvFkLcXA_K3c2_U-JcdyzZKzPYSqrF_bK7vHpPKMUakCwTv563GDThUzTvfUDlCqqzard35Xv_2EoDdgWxbVme6IJ5u19CvyEFTn3mt3FXFq_iuCX-8fTP6m0AgBBrvk9jsefhRUpHjGups33Vl7JTYdhQ" },
  { id: 2, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgAyIak1LAJL2OWVd1GOKgKDVR65nfVRcNEferaO1H7M_f5c-aG9Ivo_TzRIXpZlAAwzqOEwWFL3hIZ9pKfGZfJJZyJArnwbxVwsX4Y_HMr9Zcbygkm2kwQFaoH5HX4LveUc5Zfw4Q5lDLAGw9GqMqqfcj75Bgn1WIn-kyMEvaKF_M3CRNGGiXvmTsoR4dj6NbOOhc8IdlHVklERuswIZKNF3vEzmYPigmtkJ1TIPxz27MTnqe008sqg" },
  { id: 3, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDS4ZG3p-lL4s5nAM0e29rnpxDpQg2xLNsmiR5rJATRjEDqS9Rz6gPzD1XNyjwzxH4GwlDOV-fRGZjIDFxQaMmsYvaAAM64N6TgPbypoC3SwMtSTxr1nHOsqqTsL-Jr2Nv5bYEHaCHGC17H4Rj5oYySySBzbeeISjDSyx5ImO7MYEXN_zRo9CZf1szogapCKfnF2xg6gU9l6cltlx6EFXpykDqFT6vWwd1ixNR2w63eB4lG3rCGydBB1g" },
  { id: 4, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzvhcsWkMk25Whlgzkh-BcDcOSKl5FvzYj4c8XzVByEpFap7B4EAwVdX6ixUrsVjQpsBDhL3kQyIlt3vBL-CJhiQVwTN4TzeL96eZXJ1z5GU2v1REKw1qtCoozjicsyBXM7cP8ath-byQW9yLkEAHsL_OA37DOoCoDYyX9BEdy2GNMVqDPr3vadgp791wrMRil_IhqKPYA920Q1mu94Hb-hgTCCdu_W0ec9ffKeQrZRwVZMF1yF6YkCw" },
];

const AwardsSection = () => {
  return (
    <section
      className="border-t py-10 sm:py-12 lg:py-14"
      style={{ backgroundColor: "#FFFFFF", borderColor: BRAND.line, fontFamily: FONTS.primary }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.08em]" style={{ color: BRAND.primary }}>
          Excellence
        </p>
        <h2 className="mt-2 mb-7 text-[20px] sm:text-[24px] font-bold tracking-[-0.01em]" style={{ color: BRAND.ink, fontFamily: "Inter" }}>
          Accreditations & Awards
        </h2>

        <div className="flex flex-wrap justify-center gap-5 md:gap-7 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          {awards.map((a) => (
            <div
              key={a.id}
              className="flex h-[88px] w-[88px] md:h-[96px] md:w-[96px] items-center justify-center rounded-full p-4 shadow-sm hover:scale-105 transition-transform"
              style={{ backgroundColor: "#F2F4F5", border: `1px solid ${BRAND.line}` }}
            >
              <img src={a.img} alt="award" className="h-full w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;