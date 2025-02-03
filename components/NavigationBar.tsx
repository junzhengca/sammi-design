"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavigationBar.module.css";
import { useState } from "react";
import { useEffect } from "react";

export type NavigationBarItemData = {
  label: string;
  href: string;
};

export const DEFAULT_ITEMS: NavigationBarItemData[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "About me", href: "/about-me" },
  { label: "Donate to me for no reason", href: "/donate" },
];

interface NavigationBarProps {
  items: NavigationBarItemData[];
}

export const NavigationBar = ({ items }: NavigationBarProps) => {
  const currentPath = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${
        styles.navigationBar
      } flex justify-center items-center text-lg gap-20 ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${
            currentPath === item.href ? "text-white" : "text-gray-400"
          } hover:text-white transition-colors duration-300`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};
