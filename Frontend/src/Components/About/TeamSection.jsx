import { BRAND, FONTS } from "../../constants/brand";
import TeamCard from "./TeamCard";

const teamData = [
  {
    name: "Sarah Jenkins, RN",
    role: "Head of Nursing",
    desc: "Over 15 years of experience in critical care and patient management.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCosRGdeov6UHdp6qOYVnYRsN91uuxgjkQ4UMVMvCjr2aIvtlei3Pr8KGa5IHUGCxdEUilpP14SDZbEQuowl1xOtJ5ormIQamsmEnjbnFnyutIgcWiavya2CtR7AgK6x7mRA4r9fc89Kzzm6C7EwK8n-CfG8kay7TyFOA3TbnI-EgIwOOTlVwXbBhPBmvQrbWQNrtvaIvUvw5PRb92944-Gnoj6J30OKJ-KUENt084tkSy0QX5jz5VoWA"
  },
  {
    name: "David Chen",
    role: "Lead Care Coordinator",
    desc: "Specializes in creating personalized, holistic care plans for long-term patients.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqmu3Tjim3Y4pLTrcHdVmEzBoMpqW5yzrjKS7tqkO6ZmXPyxJ57_eVAMqQ6yxK6VO_2AKft_Ls7ChvYRSxW6TCMMfv99-1WUcaD8aRGEnBjq5kNVmLnUkq47oPMVvFQxSj68UQBrWENyRYfEInOHcTUAYq2cq6aVGgCHPM5OIy8f1mdk47kf03F7o1Yhk6hPyBXaJ2rNqlrUfn9DC9Z0xSX9zcBuksy-4botW5K8-XzTFkwRoxjBL-1Q"
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