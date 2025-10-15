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
    <div>
      <div className="pt-8 flex justify-between">
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
        <div className="-mt-4 items-center">
          <h5 className="font-bold text-[35px] flex text-center ">
            Get Your Import Clearance <br /> in Record Time
          </h5>
          <p className="text-center">
            We ensure compliance with environmental standards <br /> for a safer
            and cleaner Nigeria
          </p>
          <div className=" relative items-center">
            <MotionImage
              width={400}
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
            <div className="flex justify-center -mr-30 gap-x-4 -mt-18 absolute bottom-0 ">
              <PrimaryButton title="Sign up" />
              <PrimaryButton
                title="Log in"
                className="bg-transparent border-2"
              />
            </div>
          </div>
        </div>

        <div className="mr-8 mt-32">
          {heroContent.map((item) => (
            <div className="mt-4">
              <div
                key={item.id}
                className="flex gap-y-6 bg-[#C1D7CB] p-2 rounded-[15px]"
              >
                <div>
                  <Image width={60} src={item.image} alt="cert" />
                </div>
                <div className="ml-2">
                  <p className="font-bold font-sm">{item.number}</p>
                  <p className="font-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
