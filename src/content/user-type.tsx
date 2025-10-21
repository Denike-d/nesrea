export const userType = [
  {
    id: "Individual",
    title: "INDIVIDUAL",
    description:
      "For private citizens importing personal or small-scale non-commercial items",
    eligibility: [
      "Importing for personal use ( non-commercial)",
      "Must have valid identification ( NIN or international passport)",
    ],
    requiredDocs: ["Valid NIN"],
    fee: "35,000 Naira",
    bgColor: "bg-gray-50",
  },

  {
    id: "Agent",
    title: "AGENT",
    description: "For licensed agents handling imports on behalf of others",
    eligibility: [
      "Must have a valid identification (NIN or international passport)",
      "Authorized to act on behalf of client or organization",
    ],
    requiredDocs: ["Valid NIN or passport"],
    fee: "35,000 Naira",
    bgColor: "bg-green-50",
  },
  {
    id: "Company",
    title: "COMPANY",
    description: "For registered businesses importing goods for commercial use",
    eligibility: [
      "Must be a legally registered company in Nigeria",
      "Imports are strictly for business or resale purposes",
    ],
    requiredDocs: ["CAC / TIN"],
    fee: "35,000 Naira",
    bgColor: "bg-green-50",
  },
  {
    id: "Government",
    title: "GOVERNMENT",
    description: "For government agencies importing official items",
    eligibility: [
      "Must be on official government body",
      "Imports are for public or institutional use only",
    ],
    requiredDocs: ["Government Agency ID"],
    fee: "FREE",
    bgColor: "bg-green-50",
  },
];
