import Certificate from "../../public/images/Certificate.png";
import People from "../../public/images/People.png";
import Support from "../../public/images/Support.png";
import Document from "../../public/icons/Document.svg";
import Secure from "../../public/icons/Secure.svg";
import Verification from "../../public/icons/Verification.svg";
import chart from "../../public/images/chart.png";
import pen from "../../public/images/pen.png";
import profile from "../../public/images/profile.png";
import dollar from "../../public/images/dollar.png";
import clearance from "../../public/images/clearance.png";
import payment from "../../public/images/payment.png";
import verification from "../../public/images/verification.png";
import submit from "../../public/images/submit.png";

//Content for the hero section
export const heroContent = [
  {
    id: 1,
    number: "50k+",
    image: Certificate,
    description: "Certificates Verified",
  },
  {
    id: 2,
    number: "15k+",
    image: People,
    description: "Trusted Users",
  },
  {
    id: 3,
    number: "24/7",
    image: Support,
    description: "Customer Support",
  },
];

//Content for the Why section
export const whyContent = [
  {
    id: 1,
    icon: Document,
    head: "Fast Clearance",
    description: "You will save time with online processing",
  },
  {
    id: 2,
    icon: Verification,
    head: "Certificate Verification",
    description: "Easily Confirm Authenticity",
  },
  {
    id: 3,
    icon: Secure,
    head: "Secure Systems",
    description: "Your data is protected",
  },
];

// Content for Document section
export const documentContent = [
  {
    id: 1,
    icon: dollar,
    text: "Performa Invoice",
    description:
      "A preliminary bill of sale sent to buyers before goods are shipped, detailing the items, price, and terms for customs and payment purposes",
  },
  {
    id: 2,
    icon: pen,
    text: "CAC",
    description:
      "A preliminary bill of sale sent to buyers before goods are shipped, detailing the items, price, and terms for customs and payment purposes",
  },
  {
    id: 3,
    icon: profile,
    text: "Tax Identification Number",
    description:
      "A unique identifier for a business or individual used for tax purposes in Nigeria",
  },

  {
    id: 4,
    icon: chart,
    text: "Material Safety Data Sheet (MSDS)",
    description:
      "A document providing safety information on handling, storing, and disposing of chemical substances, ensuring compliance with health and environmental standards.",
  },
];

// Content for the clearance section
export const clearanceContent = [
  {
    id: 1,
    image: payment,
    text: "Make payment",
    description:
      "With lots of unique blocks, you can easily build a page without coding.",
  },
  {
    id: 2,
    image: submit,
    text: "Submit Application",
    description:
      "Provide the necessary details about your consignment and submit required documents",
  },
  {
    id: 3,
    image: clearance,
    text: "Receive Clearance",
    description:
      "Upon approval, download your Environmental Import Clearance Certificate within 48 hours",
  },
  {
    id: 4,
    image: verification,
    text: "Verification",
    description:
      "NESREA verifies your documents and checks compliance with regulations",
  },
];
