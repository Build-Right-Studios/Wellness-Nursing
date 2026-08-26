import { useParams } from "react-router-dom";
import { useMemo } from "react";
import services from "../data/services.json";
import equipments from "../data/equipment_rental.json";
import DetailHero from "../Components/Detail/DetailHero";
import DetailContent from "../Components/Detail/DetailContent";
import DetailSidebar from "../Components/Detail/DetailSidebar";
import RelatedGrid from "../Components/Detail/RelatedGrid";

const imageModules = import.meta.glob("../assets/**/*.{jpeg,jpg,png,webp,JPG,JPEG}", {
  eager: true,
  import: "default"
});

const FALLBACK_IMAGES = {
  "hospital-bed": "https://images.unsplash.com/photo-1586776802477-3685b4ef7e38?w=600",
  "oxygen-concentrator": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600",
  "wheelchair": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600"
};

function getImageUrl(jsonPath) {
  if (!jsonPath) return null;
  if (jsonPath.startsWith("http")) return jsonPath;
  const fileName = jsonPath.split("/").pop().split(".")[0].toLowerCase();
  const foundKey = Object.keys(imageModules).find(k => k.toLowerCase().includes(fileName));
  if (foundKey) return imageModules[foundKey];
  return FALLBACK_IMAGES[fileName] || `https://via.placeholder.com/600x400?text=${fileName}`;
}

const Detail = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);
  const equipment = equipments.find(e => e.id === id);
  const rawData = service || equipment;
  const isService =!!service;

  const data = useMemo(() => {
    if (!rawData) return null;
    const resolved = getImageUrl(rawData.image);
    return {
     ...rawData,
      image: resolved, // null if not found, so DetailHero can handle it
      resolvedImage: resolved,
    };
  }, [rawData]);

  if (!data) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-bold">Not Found</h2>
        <p className="text-gray-500 mt-2">No service or equipment found for id: {id}</p>
      </div>
    );
  }

  return (
    <section className="w-full bg-white min-h-screen">
      <DetailHero data={data} isService={isService} />

      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex flex-col lg:flex-row gap-8">
        <DetailContent data={data} isService={isService} />
        <DetailSidebar data={data} isService={isService} />
      </div>

      <RelatedGrid
        currentId={data.id}
        relatedIds={data.relatedServices || data.relatedEquipments || []}
        type={isService? "service" : "equipment"}
      />
    </section>
  );
};

export default Detail;