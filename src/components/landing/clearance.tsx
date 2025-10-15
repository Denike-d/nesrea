import { clearanceContent } from "@/content/landing";
import Image from "next/image";

export default function Clearance() {
  return (
    <div className="bg-[#C1D7CB] p-8 pt-8">
      <div>
        {" "}
        <h3 className=" text-black md:text-2xl text-bold text-center mb-2">
          Import Clearance Process
        </h3>
        <p className="text-black text-center">
          Follow these simple steps to get your import clearance approved
          <br /> by NESREA.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:px-0 mt-8 m-4 gap-x-12">
        {clearanceContent.map((item) => (
          <div className="" key={item.id}>
            <div className="flex h-[170px] w-[420px] mx-auto items-center rounded-md bg-black m-4 text-white">
              <div className="mx-6">
                <h6 className="text-bold text-xl">{item.text}</h6>
                <p className="text-sm mt-2">{item.description}</p>
              </div>

              <div>
                {" "}
                <div>
                  <Image src={item.image} alt="image" width={400} />{" "}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
