import React from "react";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          src="/img_animation.mp4"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10">
        <Header />
        <div className="container mx-auto"></div>
      </div>
    </div>
  );
}
