"use client";

import { FallingStar, FallingStarProps } from "@/components/FallingStar";
import { DEFAULT_ITEMS, NavigationBar } from "@/components/NavigationBar";
import { PrimaryButton } from "@/components/PrimaryButton";
import { Star, StarProps } from "@/components/Star";
import { VisitorCounter } from "@/components/VisitorCounter";
import { useEffect } from "react";
import { useState } from "react";
import { Icon } from '@iconify/react';
import { ProjectSectionTitle } from "@/components/ProjectSectionTitle";
import { Orbit } from "@/components/Orbit";

export default function Home() {
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
      <div className="text-center text-6xl font-bold max-w-screen-sm mx-auto mt-10 hero-text">
        I&apos;m a UX Designer based in Toronto
      </div>
      <div className="flex justify-center items-center gap-4 mt-10">
        <span className="text-lg">Hello, explorer</span>
        <VisitorCounter />
      </div>
      <div className="flex justify-center items-center mt-10">
        <PrimaryButton>
          <div className="flex items-center gap-2">
            <Icon icon="ph:mouse" />
            <span>Explore my projects</span>
          </div>
        </PrimaryButton>
      </div>

      <div className="flex justify-center items-center mt-20">
        <Orbit />
      </div>

<div style={{top: '-300px', position: 'relative'}} className="section-container pt-40">
      <div className="flex flex-col gap-10 mt-20">
        <ProjectSectionTitle title="ForTickets" description="Redesign movie ticket app experience" buttonChildren={<button className="primary-button">
          <div className="flex items-center gap-2">
            <Icon icon="ph:ticket" style={{ color: "#6D51EF" }} />
            <span>Read more</span>
          </div>
        </button>} />
      </div>
      </div>

      <div className="pt-20"></div>
    </div>
  );
}
