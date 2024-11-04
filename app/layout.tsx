import type { Metadata } from "next";
import "./globals.css";
import { Freckle_Face } from "next/font/google";

const inter = Freckle_Face({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Init 0ne",
  description: "Group of Web3 & AI Enthusiastic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-white`}>
        {children}
      </body>
    </html>
  );
}
