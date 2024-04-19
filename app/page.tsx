"use client";

import { useEffect, useState } from "react";

import Work from "@/components/gallery/Work";
import { works } from "@/data/workDatas";

import "@/styles/home/Home.scss";
import { shuffleArray } from "@/utils/shuffleArray";

export default function Home() {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [worksShuffled, setWorksShuffled] = useState<any[]>([]);

  useEffect(() => {
    setWorksShuffled(shuffleArray(works));
  }, []);

  useEffect(() => {
    const handleWheelScroll = (event: WheelEvent) => {
      const scrollDirection = event.deltaY;

      if (scrollDirection > 0) {
        const targetPosition = currentScroll + window.innerHeight;
        setCurrentScroll(targetPosition);
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
        event.preventDefault();
      } else {
        const targetPosition = currentScroll - window.innerHeight;
        setCurrentScroll(targetPosition);
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheelScroll, { passive: false });
  }, [currentScroll]);

  return (
    <>
      <div>
        <div className="backgroundFilter h-[100dvh] bg-[url('/images/main_vision.webp')]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-2">
          <h1 className="header-main-text text-6xl font-bold text-white">
            夢艷
          </h1>
          <h2 className="text-2xl text-gray-300 font-medium">
            明道中學高中美展 7th
          </h2>
        </div>
      </div>

      {worksShuffled.map((work) => {
        return <Work key={work.link} {...work}></Work>;
      })}
    </>
  );
}
