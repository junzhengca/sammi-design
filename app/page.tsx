"use client";

import { Orbit } from "@/components/Orbit";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ProjectSectionTitle } from "@/components/ProjectSectionTitle";
import { VisitorCounter } from "@/components/VisitorCounter";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <div>
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

      <div
        style={{ top: "-300px", position: "relative" }}
        className="section-container pt-40"
      >
        <div className="flex flex-col gap-10 mt-20">
          <ProjectSectionTitle
            title="ForTickets"
            description="Redesign movie ticket app experience"
            buttonChildren={
              <button className="primary-button">
                <div className="flex items-center gap-2">
                  <Icon icon="ph:ticket" style={{ color: "#6D51EF" }} />
                  <span>Read more</span>
                </div>
              </button>
            }
          />
        </div>
      </div>

      <div className="pt-20"></div>
    </div>
  );
}
