"use client";

import FooterBanner from "@/components/landing/footer-banner";
import Header from "@/components/landing/header";
import PrimaryButton from "@/components/landing/uikits/PrimaryButton";
import { useState } from "react";
import Image from "next/image";
import Truck from "../../../../public/images/Truck.png";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function SignUpPage() {
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
      <div className="flex justify-between text-white items-center  px-32 py-4">
        <div className="">
          <h1 className="text-center text-4xl font-bold mb-2">NICS</h1>
          <h2 className="text-xl font-semibold mb-4">
            {" "}
            NESREA IMPORT CLEARANCE SYSTEM
          </h2>

          <p className="text-lg mt-4">Log into your account</p>

          {success ? (
            <p className="text-green-600 text-center font-medium">
              🎉 Account created successfully!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-[400px] p-2 border rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <div className="relative flex justify-between">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-[400px] p-2 border rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-white"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="mt-4">
                <div className="flex items-center justify-center mt-8">
                  <PrimaryButton
                    title="Login"
                    href="/user-type"
                    className="bg-white text-black text-bold items-center justify-center w-[400px] h-[50px] p-8"
                  />
                </div>

                <p className="text-center text-sm text-white mt-2 ">
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
        <Image src={Truck} alt="truck" width={450} />
      </div>
      <FooterBanner />
    </div>
  );
}
