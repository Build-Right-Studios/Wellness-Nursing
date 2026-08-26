import { BRAND } from "../../constants/brand";

export default function DetailHero({ data, isService }) {
  const imgSrc = data?.image || data?.resolvedImage || null;

  return (
    <div className="w-full bg-[#F6F8FA] border-b border-[#E3EAEC]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex flex-col lg:flex-row gap-8 items-start">

        {/* Left Content */}
        <div className="flex-1">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#0B6E8F]">
            {isService? "Home Care Service" : "Medical Equipment"}
          </p>
          <h1 className="mt-2 text-[24px] sm:text-[30px] font-extrabold leading-tight text-[#0E2A33]">
            {data.name}
          </h1>
          <p className="mt-3 text-[13px] leading-[20px] text-[#4A6169]">
            {data.content?.summary || data.description}
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[480px] h-[240px] sm:h-[320px] rounded-[12px] overflow-hidden shrink-0">
          {imgSrc? (
            <img
              src={imgSrc}
              alt={data.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="w-full h-[300px] bg-[#EAF2F4] flex items-center justify-center text-[#0B6E8F] text-sm font-semibold">
              {data.name}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}