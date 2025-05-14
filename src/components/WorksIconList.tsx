"use client";

import { useState, useRef } from "react";
import WorksIcon from "./WorksIcon";
import { works } from "@/data/works";

export default function WorksList() {
  const [openedId, setOpenedId] = useState<string | null>(null);
  const [centerOffset, setCenterOffset] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (id: string, el: HTMLDivElement | null) => {
    setOpenedId(id);

    if (el && containerRef.current) {
      const rect = el.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const targetCenter = rect.left + rect.width / 2;
      const screenCenter = window.innerWidth / 2;
      setCenterOffset(screenCenter - targetCenter);
    }
  };

  return (
    <div 
        ref={containerRef} 
        className="flex justify-center items-center relative w-full h-full"
        onClick={() => {
            if (openedId) setOpenedId(null);
          }}
    >
      <div className="z-50 flex items-center">
        {works.map((work) => (
          <WorksIcon
            key={work.id}
            work={work}
            openedId={openedId}
            setOpenedId={setOpenedId}
            centerOffset={centerOffset}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}
