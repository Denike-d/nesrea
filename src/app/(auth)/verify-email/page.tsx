import OtpInput from "@/components/authentication/otp";
import FooterBanner from "@/components/landing/footer-banner";
import Header from "@/components/landing/header";
import PrimaryButton from "@/components/landing/uikits/PrimaryButton";
import Link from "next/link";
import React from "react";

export default function verifyEmail() {
  return (
    <div className="min-h-screen bg-[#608370]">
      <Header />
      <div>
        <div className="flex text-white justify-center items-center my-12">
          <div>
            <h1 className="text-centre text-4xl font-bold mb-2">NICS</h1>
            <h2 className="text-xl font-semibold text-centre mb-4">
              NESREA IMPORT CLEARANCE SYSTEM
            </h2>
            <p className="text-center mt-8 text-lg">Verify your email</p>
            <p className="text-centre mt-4">
              An OTP has been sent to example@domain.com <br />
              please enter it below to verify your email{" "}
            </p>
            <div className="mt-12">
              <OtpInput />
            </div>

            <div className="flex justify-between mt-8 text-sm">
              <p>OTP expires in 10 minutes: 10:00</p>
              <p>Resend code</p>
            </div>
            <div className="flex items-center justify-center mt-12">
              <PrimaryButton
                title="Verify Email"
                className="w-[400px] h-[50px] items-center justify-center"
              />
            </div>
          </div>
        </div>
      </div>

      <FooterBanner />
    </div>
  );
}
