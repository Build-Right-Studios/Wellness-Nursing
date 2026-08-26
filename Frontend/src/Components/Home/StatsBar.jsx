import React from "react";

const BRAND = {
  primary: "#0B6E8F",
  primaryDark: "#074E66",
  secondaryTint: "#E7F6EE",
};

const STATS = [
  { value: "10+", label: "Years of Experience" },
  { value: "5k+", label: "Happy Families" },
  { value: "200+", label: "Trained Staff" },
  { value: "4.9", label: "Star Rating" },
];

export default function StatsBar() {
  return (
    <section style={{ background: BRAND.primaryDark }}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-extrabold text-white sm:text-4xl">{stat.value}</div>
            <div className="mt-1.5 text-[11px] font-semibold uppercase tracking-widest text-white/70 sm:text-xs">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}