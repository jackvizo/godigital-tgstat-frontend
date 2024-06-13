"use client";

import { useDarkMode } from "@/lib/theme/theme";
import Image from "next/image";

export interface AppBarLogoProps {
  darkModeSrc: string;
  lightModeSrc: string;
  width: number;
  height: number;
  alt: string;
}

export function AppBarLogo(props: AppBarLogoProps) {
  const isDarkMode = useDarkMode();

  return (
    <Image
      src={{
        width: props.width,
        height: props.height,
        src: isDarkMode ? props.darkModeSrc : props.lightModeSrc,
      }}
      alt={props.alt}
      priority
    />
  );
}
