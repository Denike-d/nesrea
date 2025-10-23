import Image from "next/image";
import nesrea from "../../public/images/nesrea.png";

export default function HeaderBanner() {
  return (
    <div className="pt-2">
      <div className="flex items-center justify-between bg-[#f7f9f6] p-2 rounded-md shadow-sm max-w-xl mx-auto">
        <div className="flex items-center gap-2">
          <Image src={nesrea} alt="nesrea logo" width={60} />
        </div>
        <div className="flex-1 mx-2">
          <div className="bg-[#B5D5C3] text-center py-2 rounded-md font-semibold text-gray-800 text-sm md:text-base">
            <p>NESREA IMPORT CLEARANCE SYSTEM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
