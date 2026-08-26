import { useState } from "react";
import equipments from "../data/equipment_rental.json";
import CatalogHero from "../Components/Common/CatalogHero";
import CatalogFilter from "../Components/Common/CatalogFilter";
import CatalogGrid from "../Components/Common/CatalogGrid";

const EQUIP_FILTERS = ["All", "Hospital Furniture", "Respiratory", "Mobility", "Monitoring"];

const imageModules = import.meta.glob("../assets/**/*.{jpeg,jpg,png,webp,JPG,JPEG}", {
  eager: true,
  import: "default"
});

function getImageUrl(jsonPath) {
  if (!jsonPath) return null;
  if (jsonPath.startsWith("http")) return jsonPath;
  const fileName = jsonPath.split("/").pop().split(".")[0].toLowerCase();
  const foundKey = Object.keys(imageModules).find(k => k.toLowerCase().includes(fileName));
  return foundKey? imageModules[foundKey] : jsonPath;
}

const Equipments = () => {
  const [active, setActive] = useState("All");

  const fixedData = equipments.map(e => ({...e, image: getImageUrl(e.image) }));

  return (
    <section className="w-full bg-[#F8FBFC] min-h-screen">
      <CatalogHero eyebrow="Medical Equipment" title="Reliable Equipment For Home" subtitle="Same-day delivery, setup included, free servicing during rental period." />
      <CatalogGrid data={fixedData} type="equipment" activeFilter="All" />
    </section>
  );
};
export default Equipments;