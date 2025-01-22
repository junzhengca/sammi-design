"use client";

import { DEFAULT_ITEMS, NavigationBar } from "@/components/NavigationBar";
import { Star, StarProps } from "@/components/Star";
import { VisitorCounter } from "@/components/VisitorCounter";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [stars, setStars] = useState<StarProps[]>([]);

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
  }, []);

  return (
    <div>
      <div className="star-container">
        {stars.map((star, index) => (
          <Star key={index} {...star} />
        ))}
      </div>
      <NavigationBar items={DEFAULT_ITEMS} />
      <div className="text-center text-6xl font-bold max-w-screen-sm mx-auto mt-10 hero-text">
        I&apos;m a UX Designer based in Toronto
      </div>
      <div className="flex justify-center items-center gap-4 mt-10">
        <span className="text-lg">Hello, explorer</span>
        <VisitorCounter />
      </div>
    </div>
  );
}
