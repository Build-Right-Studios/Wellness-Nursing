import { useMemo } from "react";
import GalleryCard from "./GalleryCard";

// Mock data with categories - replace with your real images
const GALLERY_DATA = [
  { id: 1, category: "Home Care", img: "https://images.unsplash.com/photo-1576765607924-3f7b8410a787?q=80&w=600&auto=format&fit=crop" },
  { id: 2, category: "Medical Equipment", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop" },
  { id: 3, category: "Our Team", img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=600&auto=format&fit=crop" },
  { id: 4, category: "Home Care", img: "https://images.unsplash.com/photo-1576765607924-3f7b8410a787?q=80&w=600&auto=format&fit=crop" },
  { id: 5, category: "Training & Setup", img: "https://images.unsplash.com/photo-1576765607924-3f7b8410a787?q=80&w=600&auto=format&fit=crop" },
  { id: 6, category: "Medical Equipment", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop" },
];

const GalleryGrid = ({ activeTab }) => {
  const filtered = activeTab === "All"? GALLERY_DATA : GALLERY_DATA.filter(i => i.category === activeTab);

  return (
    // Added max-w-[1080px] to reduce width, gap 3 instead of 5
    <div className="mx-auto max-w-[1080px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
      {filtered.map((item) => (
        <GalleryCard key={item.id} image={item.img} />
      ))}
    </div>
  );
};
export default GalleryGrid;