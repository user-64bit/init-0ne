import { Header } from "@/components/Header";
import { Music } from "@/components/Music";
import { Video } from "@/components/Video";

export default function Home() {
  return (
    <div className="min-h-screen relative lg:px-40 px-0 ">
      <Video />
      <div className="relative z-10">
        <Header />
        <div className="container mx-auto"></div>
      </div>
      <Music />
    </div>
  );
}
