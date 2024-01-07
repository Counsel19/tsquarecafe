import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generalServices = [
  {
    title: "NIN Verification",
    description: "Verify people using their National Identity Number",
    slug: "nin",
    isServiecAvailable: true,
    image: "nin_verification.jpg",
  },

  {
    title: "BVN Verification",
    description: "Verify people using their Bank Verification Number",
    slug: "bvn",
    isServiecAvailable: false,
    image: "bvn_verification.png",
  },

  {
    title: "Bank Account Verification",
    description: "Verify people Bank Account Number",
    slug: "bank",
    isServiecAvailable: false,
    image: "bank_verification.png",
  },
  {
    title: "CAC Verification",
    description: "Verify people using their Bank Verificationy Number V2",
    slug: "bvn-2",
    isServiecAvailable: false,
    image: "cac_verification.png",
  },
  {
    title: "Tax Identifiction Number (TIN)",
    description: "Verify people Tax Identifiction Number",
    slug: "bank",
    isServiecAvailable: false,
    image: "tin_verification.jpg",
  },
  {
    title: "NIN Modification",
    description: "Modify peoples National Indentification Number ",
    slug: "nin-modify",
    isServiecAvailable: false,
    image: "nin_verification.jpg",
  },
  {
    title: "Voters Card Verification",
    description: "Verify the validity of a voters card ",
    slug: "voters",
    isServiecAvailable: false,
    image: "inec.jpg",
  },
  {
    title: "Fingerprint Verification",
    description: "Verify the identify of others by fingerprint",
    slug: "fingerprint",
    isServiecAvailable: false,
    image: "fingerprint.png",
  },
];

export const ninSearchServiceTitle = "NIN Search";
export const phoneSearchServiceTitle = "NIN Phone Search";
export const demoSearchServiceTitle = "NIN Demography Search";
export const vninSearchServiceTitle = "VNIN Verification";

export const ninServices = [
  {
    title: ninSearchServiceTitle,
    description:
      "Get User NIN data through the provided National Identofication Number",
    slug: "nin-search",
    isServiecAvailable: true,
    image: "",
  },

  {
    title: phoneSearchServiceTitle,
    description: "Get NIN data with NIN phone number",
    slug: "phone-search",
    isServiecAvailable: true,
    image: "",
  },
  {
    title: demoSearchServiceTitle,
    description: "Get NIN data with NIN phone number",
    slug: "demography-search",
    isServiecAvailable: false,
    image: "",
  },
  {
    title: vninSearchServiceTitle,
    description: "Verify Virtual National Identification Number",
    slug: "vnin-search",
    isServiecAvailable: true,
    image: "",
  },
];

export const ninSlipTypes = [
  {
    type: "NIN Regular Slip",
    image: "regular.webp",
    price: 150,
  },
  {
    type: "Improved NIN Slip",
    image: "standard.png",
    price: 200,
  },
  {
    type: "Premium NIN Slip",
    image: "premium.png",
    price: 250,
  },
];
