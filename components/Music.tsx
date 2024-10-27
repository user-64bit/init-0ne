"use client";
import { Loader2, SkipForward, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

export const Music = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const TOTAL_TRACKS = 5;

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    const handleCanPlay = () => {
      setIsLoading(false);
      if (isPlaying) {
        audio.play().catch((error) => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      }
    };

    const handleLoadStart = () => {
      setIsLoading(true);
    };

    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("loadstart", handleLoadStart);

    return () => {
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("loadstart", handleLoadStart);
    };
  }, [currentTrack, isPlaying]);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        await audioRef.current.pause();
        setIsPlaying(false);
      } else {
        setIsLoading(true);
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Error toggling play state:", error);
      setIsPlaying(false);
    } finally {
      setIsLoading(false);
    }
  };

  const nextTrack = () => {
    if (isLoading) return;

    const nextTrackNumber = currentTrack < TOTAL_TRACKS ? currentTrack + 1 : 1;
    setCurrentTrack(nextTrackNumber);
  };

  return (
    <div className="fixed bottom-5 right-5">
      <div className="flex gap-x-2">
        <Button
          variant="outline"
          className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3"
          onClick={togglePlay}
          disabled={isLoading}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isLoading ? (
            <Loader2 className="animate-spin" />
          ) : isPlaying ? (
            <Volume2 />
          ) : (
            <VolumeX />
          )}
        </Button>
        <Button
          variant="outline"
          className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3"
          onClick={nextTrack}
          disabled={isLoading}
          aria-label="Next track"
        >
          <SkipForward />
        </Button>
      </div>
      <audio
        ref={audioRef}
        src={`${process.env.BUCKET_URL}/audio/${currentTrack}.mp3`}
        onEnded={nextTrack} // loop all songs
        onError={(e) => {
          console.error("Audio error:", e);
          setIsLoading(false);
          setIsPlaying(false);
        }}
      />
    </div>
  );
};
