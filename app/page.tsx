import { Header } from "@/components/Header";
import { Music } from "@/components/Music";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <video
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full object-cover"
          src="/img_animation.mp4"
        >
          <track kind="captions" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10">
        <Header />
        <div className="container mx-auto"></div>
      </div>
      <Music />
    </div>
  );
}
