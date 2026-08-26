import services from "../data/services.json";
import CatalogHero from "../Components/Common/CatalogHero";
import CatalogGrid from "../Components/Common/CatalogGrid";

const imageModules = import.meta.glob("../assets/**/*.{jpeg,jpg,png,webp,JPG,JPEG}", {
  eager: true,
  import: "default"
});

function getImageUrl(jsonPath) {
  if (!jsonPath) return null;
  if (jsonPath.startsWith("http")) return jsonPath;
  const fileName = jsonPath.split("/").pop().split(".")[0].toLowerCase().trim();
  const foundKey = Object.keys(imageModules).find(k => k.toLowerCase().includes(fileName));
  return foundKey? imageModules[foundKey] : jsonPath;
}

const Services = () => {
  const fixedServices = services.map(s => ({...s, image: getImageUrl(s.image) }));

  return (
    <section className="w-full bg-[#F8FBFC] min-h-screen">
      <CatalogHero
        eyebrow="Our Capabilities"
        title="Comprehensive Home Care Services"
        subtitle="Professional, compassionate healthcare delivered in the comfort and safety of your own home."
      />
      <CatalogGrid data={fixedServices} type="service" activeFilter="All" />
    </section>
  );
};

export default Services;