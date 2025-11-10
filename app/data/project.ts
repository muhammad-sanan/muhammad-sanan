// projects.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    url: string;       // ← add your project link here
    image: string;     // ← path to thumbnail in /public/images/
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Barefoot Bridal",
        description: "Barefoot Bridal is a destination wedding service specializing in beach weddings across Hawaii, offering personalized planning for couples.",
        url: "https://barefootbridal.com/",
        image: "https://barefootbridal.com/wp-content/uploads/2023/12/barefoot-bridal-og-image.jpg",
    },
    {
        id: 2,
        title: "My Local Gun Shop",
        description: "My Local Gun Shop is a secure online marketplace for legally purchasing firearms, ensuring compliance with all regulations. It offers a user-friendly experience with detailed guides, supporting both new and experienced buyer.",
        url: "https://mylocalgunshop.com/",
        image: "/images/project2.jpg",
    },
    {
        id: 3,
        title: "Parent Pulse",
        description: "It's designed to collect feedback from parents through automated weekly surveys and provide a communication channel between schools and parents.",
        url: "https://parentpulse.com/",
        image: "/images/project3.jpg",
    },
    {
        id: 4,
        title: "The FastLanes",
        description: "IFastlanes is a software solution designed to improve employee reviews within the automotive retail sector.",
        url: "https://thefastlanes.co/",
        image: "/images/project3.jpg",
    },
    {
        id: 5,
        title: "The LockerRoom",
        description: "Locker Room is an app where college athletes and fans exchange video messages for shoutouts, coaching tips, or questions. Fans use a token-based system, purchasing tokens via credit/debit cards to connect with athletes.",
        url: "https://thelockerroom.app/",
        image: "/images/project3.jpg",
    },
    {
        id: 6,
        title: "ProMinute",
        description: "Prominute offers expert advice tailored to professionals, available on-demand right from your phone. Connect with industry leaders through short-form video exchanges, simplifying the process of seeking guidance. With Prominute, professionals can select from a variety of categories, record questions via short video selfies, and receive personalized advice directly from experts. This seamless four-step process ensures users get the insights they need, when they need them, empowering professionals to make informed decisions and excel in their respective fields.",
        url: "https://www.prominute.com/",
        image: "/images/project3.jpg",
    },
];
