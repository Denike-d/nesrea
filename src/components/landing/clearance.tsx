import { clearanceContent } from "@/content/landing";
import Image from "next/image";

export default function Clearance() {
  return (
    <div className="bg-[#C1D7CB] p-8 pt-8">
      <div>
        {" "}
        <h3 className=" text-black md:text-2xl text-semibold text-center mb-2">
          Import Clearance Process
        </h3>
        <p className="text-black text-center">
          Follow these simple steps to get your import clearance approved
          <br /> by NESREA.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:px-0 mt-8 gap-x-4 gap-y-2 m-4">
        {clearanceContent.map((item) => (
          <div className="" key={item.id}>
            <div className="flex items-center h-[200px] justify-center rounded-md bg-black m-4 text-white gap-6">
              <div className="mx-6">
                <h6>{item.text}</h6>
                <p className="text-sm mt-4">{item.description}</p>
              </div>

              <div>
                {" "}
                <div>
                  <Image src={item.image} alt="image" width={500} />{" "}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
