"use client";
import PrimaryButton from "@/components/landing/uikits/PrimaryButton";
import { userType } from "@/content/user-type";
import { useState } from "react";
import RegistrationForm from "./forms";
import { Check } from "lucide-react";

export type ProfileType =
  | "Agent"
  | "Government"
  | "Individual"
  | "Company"
  | null;

export default function ProfileType() {
  const [selectedProfile, setSelectedProfile] = useState<ProfileType>(null);

  const handleCardClick = (profileType: ProfileType) => {
    setSelectedProfile(profileType);
  };

  const handleBack = () => {
    setSelectedProfile(null);
  };

  if (selectedProfile) {
    return (
      <RegistrationForm profileType={selectedProfile} onBack={handleBack} />
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center">
      <div className="flex flex-row gap-6 w-full max-w-6xl">
        {userType.map((profile) => (
          <div
            key={profile.id}
            className={`${profile.bgColor} rounded-lg shadow-md p-6 flex-1 min-w-0 flex flex-col`}
          >
            <h2 className="text-xl font-bold mb-2">{profile.title}</h2>
            <p className="text-gray-600 mb-6 text-sm">{profile.description}</p>
            <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-900 mb-2">
                Eligibility:
              </h3>
              <ul className="space-y-2">
                {profile.eligibility.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-900 mt-4">
                Required Document:
              </h3>
              <ul className="space-y-2">
                {profile.requiredDocs.map((doc, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-4">
              <div className="text-sm text-gray-700 mb-4">
                <p className="font-bold text-[14px]">
                  Registration Fee: {profile.fee}
                </p>
              </div>
              <PrimaryButton
                href=""
                title="Choose Profile"
                onClick={() => handleCardClick(profile.id as ProfileType)}
                className="text-white bottom w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
