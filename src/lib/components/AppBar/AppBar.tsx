import { getInitialThemeSsr } from "@/lib/theme/get-initial-theme-ssr";
import type { PaletteMode } from "@mui/material";
import MUIAppBar from "@mui/material/AppBar/index";
import Box from "@mui/material/Box/index";
import Toolbar from "@mui/material/Toolbar/index";
import Image from "next/image";
import Link from "next/link";
import { AppBarNavigation } from "../Navigation/AppBarNavigation";
import { DrawerNavigation } from "../Navigation/DrawerNavigation";
import { AppBarLogo } from "./AppBarLogo";

const logoRatio = 343 / 165;
const logoHeight = 60;
const logoWidth = logoHeight * logoRatio;
const logoAlt = "GoDigital";
const darkModeColorSrc = "/logo-color-row-dark.svg";
const lightModeColorSrc = "/logo-color-row-light.svg";

export interface AppBarProps {
  variant?: "transparent" | "solid";
}

export function AppBar(props: AppBarProps) {
  const theme = getInitialThemeSsr();
  const variant = props.variant || "solid";

  const variantToLogo: Record<NonNullable<AppBarProps["variant"]>, Record<PaletteMode, string>> = {
    transparent: {
      dark: darkModeColorSrc,
      light: darkModeColorSrc,
    },
    solid: {
      dark: darkModeColorSrc,
      light: lightModeColorSrc,
    },
  };

  const logoSrc = variantToLogo[variant][theme];

  return (
    <MUIAppBar
      position={props.variant === "transparent" ? "absolute" : "static"}
      sx={
        props.variant === "transparent"
          ? {
            backgroundImage: {
              md: "linear-gradient(280deg, rgba(0, 0, 0, 0.3) 0px, rgba(0, 0, 0, 0) 550px)",
            },
            color: "#ffffff",
          }
          : undefined
      }
    >
      <Toolbar>
        <Box display="flex" alignItems="center" flexDirection="row">
          <Link href="/">
            {typeof window === "undefined" ? (
              <Image
                src={{
                  width: logoWidth,
                  height: logoHeight,
                  src: logoSrc,
                }}
                alt={logoAlt}
                priority
              />
            ) : (
              <AppBarLogo
                alt={logoAlt}
                darkModeSrc={darkModeColorSrc}
                height={logoHeight}
                lightModeSrc={lightModeColorSrc}
                width={logoWidth}
              />
            )}
          </Link>
        </Box>
        <Box flex={1} />

        <Box alignItems="center" justifyContent="center" gap={4} sx={{ display: { xs: "none", md: "flex" } }}>
          <AppBarNavigation />
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <DrawerNavigation isBurgerBgTransparent={props.variant === "transparent"} />
        </Box>
      </Toolbar>
    </MUIAppBar>
  );
}
