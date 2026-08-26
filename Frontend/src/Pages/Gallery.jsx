import { useState } from "react";
import GalleryHero from "../Components/Gallery/GalleryHero";
import GalleryTabs from "../Components/Gallery/GalleryTabs";
import GalleryGrid from "../Components/Gallery/GalleryGrid";
import GalleryCTA from "../Components/Gallery/GalleryCTA";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="w-full bg-[#FAFCFC] min-h-screen overflow-x-hidden">
      <GalleryHero />

      {/* Tabs */}
      <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8 pb-6 sm:pb-8">
        <GalleryTabs active={activeTab} setActive={setActiveTab} />
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-0">
        <GalleryGrid activeTab={activeTab} />
      </div>

      {/* CTA - Like screenshot */}
      <GalleryCTA />
    </section>
  );
};

export default Gallery;