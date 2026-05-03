import ButtonComponent from "./button";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | About The Company",
  description: "What we are and what we do",
  keywords: "about, company, mission, vision",
   openGraph: {
    title: "About Us | My Website",
    description: "Learn more about our company, mission, and values.",
    url: "https://hivlora.in/about",
    siteName: "Hivlora",
    images: [
      {
        url: "https://hivlora.in/og-image.jpg", // 👈 replace this
        width: 1200,
        height: 630,
        alt: "About Us Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image", 
    title: "About Us | My Website",
    description: "Learn more about our company, mission, and values.",
    images: ["https://yourdomain.com/og-image.jpg"], 
  },
};

export default async function About () {
    console.log("Is this is a server or client component?")
    
    const response = await fetch("https://jsonplaceholder.typicode.com");
    const posts = response.json();

    return (
        <ButtonComponent />
    )
}