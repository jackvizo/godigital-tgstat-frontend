import { MenuItemStyles, menuClasses } from "react-pro-sidebar";
import { darkTheme, lightTheme } from "./theme";
import colors from "./colors.module.scss";

type Theme = "light" | "dark";

export const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const proSidebarThemes = {
  light: {
    sidebar: {
      backgroundColor: lightTheme.palette.background.paper,
      color: lightTheme.palette.text.primary,
      borderRight: `1px solid ${lightTheme.palette.divider}`,
    },
    menu: {
      icon: colors.primary,
      hover: {
        backgroundColor: lightTheme.palette.divider,
        color: "inherit",
      },
      disabled: {
        color: lightTheme.palette.divider,
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: darkTheme.palette.background.paper,
      color: darkTheme.palette.text.primary,
      borderRight: `1px solid ${darkTheme.palette.divider}`,
    },
    menu: {
      icon: colors.primary,
      hover: {
        backgroundColor: "#1c1c1c",
        color: "inherit",
      },
      disabled: {
        color: darkTheme.palette.divider,
      },
    },
  },
};

export const proSidebarMenuItemStyles: (theme: Theme) => MenuItemStyles = (theme) => ({
  icon: {
    color: proSidebarThemes[theme].menu.icon,
    [`&.${menuClasses.disabled}`]: {
      color: proSidebarThemes[theme].menu.disabled.color,
    },
  },

  button: {
    [`&.${menuClasses.disabled}`]: {
      color: proSidebarThemes[theme].menu.disabled.color,
    },
    "&:hover": {
      backgroundColor: hexToRgba(proSidebarThemes[theme].menu.hover.backgroundColor, 1),
      color: proSidebarThemes[theme].menu.hover.color,
    },
  },
});
