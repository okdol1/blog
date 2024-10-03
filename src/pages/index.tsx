import { useState } from "react";
import ReactPlayer from "react-player";
import VolumeOffIcon from "@/assets/icons/volume_off.svg?react";
import VolumeUpIcon from "@/assets/icons/volume_up.svg?react";
import ArrowBackIcon from "@/assets/icons/arrow_back.svg?react";
import Header from "@/components/Header";

const HomePage: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const togglePlayer = () => {
    setIsPlayerOpen((prev) => !prev);
  };

  return (
    <>
      <Header />

      <main className="p-5 h-screen">
        <section className="h-full flex justify-center items-center">
          <div className="group relative animate-float w-[10%]">
            <img src="/images/astronaut.png" alt="astronaut" />
            <span className="absolute top-0 left-0 hidden text-white group-hover:inline-block">
              Hello!
            </span>
          </div>
        </section>

        <div className="fixed bottom-5 left-5">
          <div
            className={`flex justify-between px-2
            ${isPlayerOpen ? "" : "flex-col"}
            `}
          >
            <button
              className="p-2 text-white"
              onClick={togglePlayer}
              aria-label={isPlayerOpen ? "플레이어 숨기기" : "플레이어 펼치기"}
            >
              <ArrowBackIcon className={isPlayerOpen ? "" : "rotate-180"} />
            </button>
            <button
              className="p-2 text-white"
              onClick={toggleMute}
              aria-label={isMuted ? "음소거 해제" : "음소거"}
            >
              {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
            </button>
          </div>

          <div className={isPlayerOpen ? "" : "hidden"}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=KvMY1uzSC1E"
              playing
              loop
              controls={false}
              width="100%"
              height="100%"
              muted={isMuted}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
