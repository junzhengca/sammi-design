"use client";

import Link from "next/link";

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
  return (
    <div className="flex justify-center items-center text-lg gap-20 py-10">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};
