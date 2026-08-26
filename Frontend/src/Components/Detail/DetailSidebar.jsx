import { BRAND } from "../../constants/brand";

const DetailSidebar = ({ data, isService }) => {
  return (
    <div className="w-full lg:w-[300px] shrink-0 flex flex-col gap-4">
      {/* Urgent Care Card */}
      <div className="bg-white rounded-[12px] border border-[#EEF3F5] border-t-[3px] p-5 shadow-sm" style={{ borderTopColor: "#E86A2C" }}>
        <h4 className="text-[14px] font-bold" style={{ color: "#111827" }}>Need Urgent Care?</h4>
        <p className="text-[12px] leading-[17px] mt-1" style={{ color: "#6B7280" }}>
          Our clinical intake team is available 24/7 to assess your needs and deploy care quickly.
        </p>
        <button className="mt-4 w-full h-[40px] rounded-[8px] flex items-center justify-center gap-2 text-[12px] font-semibold text-white" style={{ background: BRAND.primary }}>
          📞 Call (555) 123-4567
        </button>
        <button className="mt-2 w-full h-[36px] rounded-[8px] text-[12px] font-semibold border" style={{ borderColor: BRAND.line, color: BRAND.ink }}>
          Request Callback
        </button>
      </div>

      {/* Details Card */}
      <div className="bg-white rounded-[12px] border border-[#EEF3F5] p-5">
        <h4 className="text-[13px] font-bold mb-3" style={{ color: "#111827" }}>{isService? "Service Details" : "Rental Details"}</h4>
        <div className="flex flex-col gap-2.5 text-[11.5px]">
          {isService? (
            <>
              <div className="flex justify-between"><span style={{ color: "#6B7280" }}>Duration:</span><span style={{ color: "#111827", fontWeight: 500 }}>{data.serviceInformation.duration[0]} / 24-Hour</span></div>
              <div className="flex justify-between"><span style={{ color: "#6B7280" }}>Availability:</span><span style={{ color: "#111827", fontWeight: 500 }}>{data.serviceInformation.availability}</span></div>
              <div className="flex justify-between"><span style={{ color: "#6B7280" }}>Coverage:</span><span style={{ color: "#111827", fontWeight: 500 }}>{data.serviceInformation.coverageArea[0]}, NCR</span></div>
              <div className="flex justify-between"><span style={{ color: "#6B7280" }}>Price:</span><span style={{ color: BRAND.primary, fontWeight: 700 }}>₹{data.pricing.discountedPrice}</span></div>
            </>
          ) : (
            <>
              <div className="flex justify-between"><span style={{ color: "#6B7280" }}>Availability:</span><span className="font-medium" style={{ color: "#0A9B4C" }}>{data.serviceInformation.availability}</span></div>
              <div className="flex justify-between"><span style={{ color: "#6B7280" }}>Daily Rate:</span><span style={{ color: "#111827", fontWeight: 500 }}>₹{data.rentalInformation.dailyRate}</span></div>
              <div className="flex justify-between"><span style={{ color: "#6B7280" }}>Monthly:</span><span style={{ color: "#111827", fontWeight: 700 }}>₹{data.rentalInformation.monthlyRate}</span></div>
              <div className="flex justify-between"><span style={{ color: "#6B7280" }}>Deposit:</span><span style={{ color: "#111827", fontWeight: 500 }}>₹{data.rentalInformation.securityDeposit}</span></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default DetailSidebar;