export const colors = {
  background: {
    primary: "#09090B",
    secondary: "#18181B",
    tertiary: "#27272A",
  },

  surface: {
    primary: "#111111",
    secondary: "#1A1A1A",
    elevated: "#222222",
  },

  text: {
    primary: "#FAFAFA",
    secondary: "#A1A1AA",
    muted: "#71717A",
    inverse: "#09090B",
  },

  border: {
    primary: "#27272A",
    secondary: "#3F3F46",
  },

  brand: {
    primary: "#2563EB",
    secondary: "#1D4ED8",
  },

  success: "#22C55E",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#3B82F6",
} as const;

export type Colors = typeof colors;
