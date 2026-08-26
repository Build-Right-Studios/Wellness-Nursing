const GalleryCard = ({ image }) => {
  return (
    <div className="group relative overflow-hidden rounded-[6px] bg-white aspect-[4/3] cursor-pointer border border-[#E2E8EB]">
      <img
        src={image}
        alt="CarePulse work"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[#0b6e8f]/0 group-hover:bg-[#0b6e8f]/10 transition-colors" />
    </div>
  );
};
export default GalleryCard;