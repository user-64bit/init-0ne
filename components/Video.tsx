"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export const Video = () => {
  const [background, setBackground] = useState(1);
  const [prevBackground, setPrevBackground] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const TOTAL_BACKGROUND_VIDEO = 3;

  useEffect(() => {
    if (background !== prevBackground) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setPrevBackground(background);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [background, prevBackground]);

  const changeBg = () => {
    setBackground((prev) => (prev < TOTAL_BACKGROUND_VIDEO ? prev + 1 : 1));
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
        >
          <video
            key={prevBackground}
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-cover"
            src={`${process.env.BUCKET_URL}/background/${prevBackground}.mp4`}
          >
            <track kind="captions" />
          </video>
        </div>

        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${isTransitioning ? "opacity-100" : "opacity-0"}`}
        >
          <video
            key={background}
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-cover"
            src={`${process.env.BUCKET_URL}/background/${background}.mp4`}
          >
            <track kind="captions" />
          </video>
        </div>

        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="absolute top-1/4 left-2/3 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-6xl font-extrabold text-gradient shadow-sm">
          Project Athena
        </h2>
      </div>
      <div className="fixed top-5 right-5 z-[99999]">
        <Button
          variant="outline"
          className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3"
          onClick={changeBg}
          disabled={isTransitioning}
        >
          {background}
        </Button>
      </div>
    </>
  );
};
