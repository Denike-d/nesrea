"use client";

import { useState } from "react";
import PrimaryButton from "@/components/landing/uikits/PrimaryButton";
import Header from "@/components/landing/header";
import FooterBanner from "@/components/landing/footer-banner";
import veryCertificate from "../../../../public/images/verifyCertificate.png";
import Image from "next/image";
import Link from "next/link";
export default function page() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are required.");
      return;
    }

    setError("");
    setSuccess(true);
    console.log("Form submitted:", formData);
  };
  return (
    <div className="h-screen bg-[#608370]">
      <Header />
      <div className="flex justify-between text-white items-center px-20 py-4">
        <div className="">
          <h1 className="items-centre text-center justify-center text-4xl font-bold mb-2">
            NICS
          </h1>
          <h2 className="text-xl font-semibold mb-4">
            NESREA IMPORT CLEARANCE SYSTEM
          </h2>

          <p className="text-lg mt-4">
            Enter your certificate information to confirm its authenticity
          </p>

          {success ? (
            <p className="text-green-600 text-center font-medium">
              🎉 Account created successfully!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  NESREA ID
                </label>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your NESREA ID (e.g. NES/123456789)"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-[400px] p-2 border rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Certificate Number
                </label>
                <div className="relative flex justify-between">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your certificate number"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-[400px] p-2 border rounded-lg"
                  />
                  {/* <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-white"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button> */}
                </div>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="mt-4">
                <div className="flex items-center justify-center">
                  <PrimaryButton
                    title="Verify Certificate"
                    className="bg-white text-black text-bold items-center justify-center w-[400px] h-[50px] p-8"
                  />
                </div>

                <p className="text-center text-white mt-2 ">
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    className="font-semibold hover:underline"
                  >
                    Create an account
                  </Link>
                </p>
              </div>
            </form>
          )}
        </div>
        <Image src={veryCertificate} alt="certificate" width={450} />
      </div>
      <FooterBanner />
    </div>
  );
}
