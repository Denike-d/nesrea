import React from "react";
import PrimaryButton from "./uikits/PrimaryButton";
import Image from "next/image";
import phone from "../../../public/images/phone.png";

export default function () {
  return (
    <div className="px-12 py-8 bg-[#222222]">
      <p className="text-center font-semibold md:text-2xl">
        Verify your certificates with ease
      </p>

      <div className="flex justify-between items-center">
        <div className="ml-60">
          <p>
            Ensure the validity of your import clearance <br />
            certificates in just a few clicks
          </p>
          <PrimaryButton title="verify certificate" className="mt-4" />
        </div>
        <Image src={phone} alt="phone" width={300} className="-ml-12" />
      </div>
    </div>
  );
}
