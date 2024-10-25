import type { Metadata } from "next";
import "./globals.css";
import { Freckle_Face } from "next/font/google";

const inter = Freckle_Face({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Project Athena",
  description: "Group of Web3 & AI Enthusiastic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased lg:px-40 px-0 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
