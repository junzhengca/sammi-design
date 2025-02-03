"use client";

import { FallingStar, FallingStarProps } from "../FallingStar";
import { NavigationBar } from "../NavigationBar";
import { DEFAULT_ITEMS } from "../NavigationBar";
import { Star, StarProps } from "../Star";
import { useEffect, useState } from "react";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const [fallingStars, setFallingStars] = useState<FallingStarProps[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 100 }, () => ({
        size: ["sm", "md", "lg"][
          Math.floor(Math.random() * 3)
        ] as StarProps["size"],
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        blink: ["1", "2", "3"][
          Math.floor(Math.random() * 3)
        ] as StarProps["blink"],
      }))
    );

    setFallingStars(
      Array.from({ length: 5 }, (_, index) => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        animationDelay: index,
      }))
    );
  }, []);

  return (
    <div>
      <div className="star-container">
        {stars.map((star, index) => (
          <Star key={index} {...star} />
        ))}
        {fallingStars.map((star, index) => (
          <FallingStar key={index} {...star} />
        ))}
      </div>
      <NavigationBar items={DEFAULT_ITEMS} />
      <div className="pt-40">{children}</div>
    </div>
  );
};
