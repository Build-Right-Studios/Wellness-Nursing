import { BRAND, FONTS } from "../../constants/brand";
import TeamCard from "./TeamCard";
import Akash from "../../assets/Akash.jpeg"
import Dhruv from "../../assets/Dhruv.jpeg"

const teamData = [
  {
    name: "Akash Singh",
    role: "Head of Nursing",
    desc: "Over 10 years of experience in critical care and patient management.",
    image: Akash
  },
  {
    name: "Dr Dhruv Varshney",
    role: "Critical care patient management",
    desc: "Specializes in creating personalized, holistic care plans for long-term patients.",
    image: Dhruv
  },
];

const TeamSection = () => {
  return (
    <section
      className="py-10 sm:py-12 lg:py-16"
      style={{ backgroundColor: "#F8FAFB", fontFamily: FONTS.primary }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-[560px] text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.08em]" style={{ color: BRAND.primary }}>
            Clinical Leadership
          </p>
          <h2 className="mt-2 text-[22px] sm:text-[26px] font-bold tracking-[-0.01em]" style={{ color: BRAND.ink, fontFamily: "Inter" }}>
            Meet Our Care Experts
          </h2>
          <p className="mt-2 text-[13px] leading-[20px]" style={{ color: BRAND.inkSoft }}>
            Our head nurses and care coordinators bring decades of specialized experience to ensure you receive exceptional support.
          </p>
        </div>

        <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-8 md:grid-cols-2 justify-center">
          {teamData.map((m, i) => (
            <TeamCard key={i} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;