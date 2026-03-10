import { Tag } from "@/components/Project";

export interface MyProject {
  id: string | number;
  title: string;
  description: string;
  subDescription?: string[];
  href: string;
  logo?: string;
  image: string;
  tags: Tag[];
}

export const myProjects: MyProject[] = [
  {
    id: 1,
    title: "BlockMedPro",
    description:
      "A revolutionary SaaS healthcare platform leveraging AI and blockchain to provide secure, transparent, and patient-centered electronic health records while enabling data monetization.",
    subDescription: [
      "Led the frontend development for four distinct modules: Patient, Pharmaceutical, Pharmacy, and Clinic.",
      "Integrated Web3Auth and custom middleware for secure, decentralized authentication.",
      "Implemented complex state management using Redux and built high-performance UI components with Next.js.",
      "Developed a polished marketing site featuring advanced scroll animations and transitions using GSAP.",
    ],
    href: "https://blockmedpro.com/",
    logo: "",
    image: "/assets/projects/blockmedpro.jpg",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "Web3Auth", path: "/assets/logos/web3auth.svg" },
      { id: 3, name: "Redux", path: "/assets/logos/redux.svg" },
      { id: 4, name: "GSAP", path: "/assets/logos/gsap.svg" },
    ],
  },
  {
    id: 2,
    title: "Live Discount",
    description:
      "A high-performance, multi-language e-commerce and discount platform built from scratch, supporting both English and Hebrew (RTL) users.",
    subDescription: [
      "Architected the entire application from the ground up using Next.js and TypeScript.",
      "Implemented comprehensive RTL (Right-to-Left) support and a robust multi-language internationalization system.",
      "Created highly engaging user experiences with extensive GSAP animations and custom transitions.",
      "Optimized frontend performance to ensure seamless navigation across localized versions.",
    ],
    href: "https://www.live.discount/",
    logo: "",
    image: "/assets/projects/livediscount.jpg",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "TypeScript", path: "/assets/logos/typescript.svg" },
      { id: 3, name: "GSAP", path: "/assets/logos/gsap.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 3,
    title: "Golden Years",
    description:
      "A premium NFT minting platform featuring a massive collection of gold-themed digital assets, designed for high-value collectors.",
    subDescription: [
      "Built a seamless NFT minting experience using Web3.js and Wagmi for blockchain interactions.",
      "Developed the frontend using React and TypeScript for strict type safety and reliability.",
      "Integrated wallet connection providers to support a wide range of crypto wallets.",
      "Focused on a luxury UI/UX design to reflect the premium nature of the 'Golden' NFT collection.",
    ],
    href: "https://golden-years-website.vercel.app/",
    logo: "",
    image: "/assets/projects/goldenyears.jpg",
    tags: [
      { id: 1, name: "React.ts", path: "/assets/logos/react.svg" },
      { id: 2, name: "Web3.js", path: "/assets/logos/web3js.svg" },
      { id: 3, name: "Wagmi", path: "/assets/logos/wagmi.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 4,
    title: "Self Ship Label",
    description:
      "An effortless shipping automation tool that allows businesses to generate and print labels directly from their desktop, integrating seamlessly with e-commerce systems.",
    subDescription: [
      "Developed a responsive and intuitive dashboard using Vue.js for real-time shipping management.",
      "Implemented smooth UI interactions and entrance animations using Framer Motion and AOS.",
      "Built features for real-time shipment tracking and direct label generation to reduce operational costs.",
      "Integrated seamless e-commerce API hooks to ensure accurate data synchronization.",
    ],
    href: "https://selfshiplabel.com/",
    logo: "",
    image: "/assets/projects/selfshiplabel.jpg",
    tags: [
      { id: 1, name: "Vue.js", path: "/assets/logos/vue.svg" },
      { id: 2, name: "Framer Motion", path: "/assets/logos/framer.svg" },
      { id: 3, name: "AOS", path: "/assets/logos/github.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
];
