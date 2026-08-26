const BaseCardShell = ({ image, children }) => (
  <div className="bg-white rounded-[12px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.09)] transition-all border border-[#EEF3F5] flex flex-col">
    <div className="h-[210px] w-full overflow-hidden bg-[#F6F9FA]">
      <img src={image} alt="" className="w-full h-full object-cover" />
    </div>
    <div className="p-5 flex flex-col flex-1">{children}</div>
  </div>
);
export default BaseCardShell;