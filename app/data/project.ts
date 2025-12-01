// data/project.ts
export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Barefoot Bridal",
    image: "/images/bb_social_1.png",
    description:
      "Barefoot Bridal is a destination wedding service specializing in beach weddings across Hawaii, offering personalized planning for couples.",
    url: "https://barefootbridal.com/",
  },
  {
    id: 2,
    title: "Parent Pulse",
    image: "/images/pp.png",
    description:
      "Collects feedback from parents through automated weekly surveys and provides a communication channel between schools and parents.",
    url: "https://parentpulse.com/",
  },
  {
    id: 3,
    title: "The FastLanes",
    image: "/images/fl.png",
    description:
      "A software solution designed to improve employee reviews within the automotive retail sector.",
    url: "https://thefastlanes.co/",
  },
  {
    id: 4,
    title: "The Peer Network",
    image: "/images/tpn.png",
    description:
      "Connects clients with mental health professionals for online consultations via Zoom, with booking and secure payments.",
    url: "https://thepeernetwork.com/",
  },
  {
    id: 5,
    title: "My Local Gun Shop",
    image: "/images/mgshop.png",
    description:
      "A secure online marketplace for legally purchasing firearms, ensuring compliance and a smooth buying experience.",
    url: "https://mylocalgunshop.com/",
  },
  {
    id: 6,
    title: "AMA Solar CRM",
    image: "/images/ama.png",
    description:
      "A custom CRM app for managing solar energy projects — centralizes client data, pricing, proposals, and progress tracking.",
    url: "https://amasolarcrm.com/",
  },
];
