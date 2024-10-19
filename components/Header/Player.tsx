import { useState } from "react";
import dynamic from "next/dynamic";
import VolumeOffIcon from "@/assets/icons/volume_off.svg";
import VolumeUpIcon from "@/assets/icons/volume_up.svg";
import ArrowBackIcon from "@/assets/icons/arrow_back.svg";
import PAGES from "@/constants/page";
import { usePathname } from "next/navigation";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface PlayerProps {
  isMenuOpen: boolean;
}

const Player: React.FC<PlayerProps> = ({ isMenuOpen }) => {
  const pathname = usePathname();

  const isHomePage = pathname === PAGES.HOME;
  const isVisiblePlayer = isHomePage || isMenuOpen;

  const [isMuted, setIsMuted] = useState(true);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [error, setError] = useState(false);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const togglePlayer = () => {
    setIsPlayerOpen((prev) => !prev);
  };

  const handleError = (e: Error) => {
    console.log({ e });
    setError(true);
    console.error("Video Error: ", e);
  };

  if (!isVisiblePlayer || error) return null;

  return (
    <div className="fixed bottom-5 left-0">
      <div
        className={`flex justify-between px-2
${isPlayerOpen ? "" : "flex-col"}
`}
      >
        <button
          className="p-2"
          onClick={togglePlayer}
          aria-label={isPlayerOpen ? "플레이어 숨기기" : "플레이어 펼치기"}
        >
          <ArrowBackIcon className={isPlayerOpen ? "" : "rotate-180"} />
        </button>
        <button
          className="p-2"
          onClick={toggleMute}
          aria-label={isMuted ? "음소거 해제" : "음소거"}
        >
          {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </button>
      </div>

      <div className={isPlayerOpen ? "" : "hidden"}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=KvMY1uzSC1E" // * Cyberpunk: Edgerunners | “I Really Want to Stay At Your House” by Rosa Walton | Music Video
          playing
          loop
          controls={false}
          width="100%"
          height="100%"
          muted={isMuted}
          onError={handleError}
        />
      </div>
    </div>
  );
};

export default Player;
