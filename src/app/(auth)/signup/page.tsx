"use client";

import FooterBanner from "@/components/landing/footer-banner";
import Header from "@/components/landing/header";
import PrimaryButton from "@/components/landing/uikits/PrimaryButton";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Truck from "../../../../public/images/Truck.png";
import { Eye, EyeOff } from "lucide-react";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    setSuccess(true);
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-[#608370] ">
      <Header />
      <div className="flex justify-between text-white items-center px-32 py-4">
        <div className="">
          <h1 className="items-centre text-center text-4xl font-bold mb-2">
            NICS
          </h1>
          <h2 className="text-xl font-semibold mb-4">
            NESREA IMPORT CLEARANCE SYSTEM
          </h2>

          <p className="text-lg mt-4">Create your Account</p>

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
                    type="password"
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

              <div>
                <label className="block text-sm font-medium mb-1">
                  Confirm Password
                </label>
                <div className="relative flex justify-between">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Re-enter password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-[400px] p-2 border rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-white"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="flex items-center justify-center mt-6">
                <PrimaryButton
                  title="Create an account"
                  className="bg-white text-black text-bold text-lg items-center justify-center w-[400px] h-[50px] p-8"
                />
              </div>
              <p className="text-center text-sm">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-white font-semibold hover:underline"
                >
                  Login
                </Link>
              </p>
            </form>
          )}
        </div>
        <Image src={Truck} alt="truck" width={400} />
      </div>
      <FooterBanner />
    </div>
  );
}
