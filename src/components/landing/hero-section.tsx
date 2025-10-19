"use client";

import React from "react";
import Eclipse from "../../../public/images/Eclipse.png";
import { heroContent } from "@/content/landing";
import Image from "next/image";
import Pana from "../../../public/images/pana.png";
import PrimaryButton from "./uikits/PrimaryButton";
import { motion } from "framer-motion";

const MotionImage = motion(Image);
export default function HeroSection() {
  return (
    <div className="pt-8 flex justify-between items-center pb-4 relative">
      <div>
        <MotionImage
          src={Eclipse}
          width={150}
          height={150}
          alt="Ellipse"
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <div className="-mt-2 items-center ml-12">
        <h5 className="font-bold text-[35px] flex text-center ">
          Get Your Import Clearance <br /> in Record Time
        </h5>
        <p className="text-center">
          We ensure compliance with environmental standards <br /> for a safer
          and cleaner Nigeria
        </p>
        <div className=" relative items-center ml-8">
          <MotionImage
            width={370}
            src={Pana}
            alt="ship"
            className="mt-4 flex items-center"
            animate={{ x: [0, 20, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="flex justify-center ml-12 gap-x-4 -mt-18 absolute bottom-0 ">
            <PrimaryButton title="Sign up" />
            <PrimaryButton title="Log in" className="bg-transparent border-2" />
          </div>
        </div>
      </div>

      <div className="mr-12 mt-24">
        {heroContent.map((item) => (
          <div className="mt-2">
            <div
              key={item.id}
              className="flex items-center  bg-[#C1D7CB] p-2 rounded-[15px]"
            >
              <div>
                <Image
                  width={item.id === 3 ? 40 : 60}
                  src={item.image}
                  alt="cert"
                />
              </div>
              <div className="ml-4 text-center">
                <p className="font-bold font-sm">{item.number}</p>
                <p className="font-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
