"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import VolumeOffIcon from "@/assets/icons/volume_off.svg";
import VolumeUpIcon from "@/assets/icons/volume_up.svg";
import ArrowBackIcon from "@/assets/icons/arrow_back.svg";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlayerOpen, setIsPlayerOpen] = useState(true);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const togglePlayer = () => {
    setIsPlayerOpen((prev) => !prev);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsMuted(true);
    }, 1000);
  }, []);

  return (
    <div>
      <main className="p-5 h-screen">
        <section className="h-full flex justify-center items-center">
          <div className="group relative animate-float">
            <Image
              src="/images/astronaut.png"
              alt="astronaut"
              width={120}
              height={120}
            />
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

      {/* // TODO: Header의 위치를 상단으로 이동하여 z-index 문제를 해결할 것 */}
      <Header />
    </div>
  );
}
