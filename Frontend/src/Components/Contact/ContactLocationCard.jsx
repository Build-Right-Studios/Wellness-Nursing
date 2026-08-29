import { BRAND, FONTS } from "../../constants/brand";

const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.761915302422!2d77.39746487374994!3d28.577110886598472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef6c2f8161bf%3A0xc4f2dbe47782cbed!2sNagori%20Farms%20%26%20Banquet!5e1!3m2!1sen!2sin!4v1787978258169!5m2!1sen!2sin";

// This will open Google Maps directions to that exact place
const DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=Nagori%20Farms%20%26%20Banquet%2C%20Sector%20115%2C%20Noida";

const ContactLocationCard = () => {
  return (
    <div className="rounded-[14px] sm:rounded-[16px] overflow-hidden bg-white border shadow-[0px_4px_20px_rgba(11,110,143,0.06)]" style={{ borderColor: BRAND.line }}>
      <div className="relative h-[200px] sm:h-[260px] w-full bg-[#E8EEF1] overflow-hidden">
        <iframe
          src={MAP_EMBED_URL}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Nagori Banquet Hall Location"
        ></iframe>
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-[14px] sm:text-[16px] font-semibold mb-3" style={{ color: BRAND.ink, fontFamily: "Inter" }}>Our Primary Location</h3>
        <div className="flex gap-2.5">
          <span className="material-symbols-outlined text-[18px] mt-0.5 shrink-0" style={{ color: BRAND.primary }}>location_on</span>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] sm:text-[13px] leading-[18px] sm:leading-[20px]" style={{ color: BRAND.inkSoft }}>
              Nagori Banquet Hall, Sec-115,<br />Noida - 201301, Gautam Buddha Nagar, UP
            </p>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-[11px] sm:text-[12px] font-semibold flex items-center gap-1 inline-flex hover:underline"
              style={{ color: BRAND.primary, fontFamily: "Inter" }}
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLocationCard;