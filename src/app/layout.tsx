import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Satyam Nautiyal | Backend Engineer & AI Systems Builder",
  description: "Graphical Resume of Satyam Nautiyal - Final Year BTech CSE student and aspiring Software Development Engineer focused on Backend Systems and AI.",
  keywords: ["Satyam Nautiyal", "Backend Engineer", "SDE", "Next.js", "AI Engineer", "Software Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-zinc-950 antialiased`}>
        {children}
      </body>
    </html>
  );
}
