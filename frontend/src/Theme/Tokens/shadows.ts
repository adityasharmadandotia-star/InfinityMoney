export const shadows = {
  none: "none",

  sm: "0 1px 2px rgb(0 0 0 / 0.10)",

  md: "0 4px 6px rgb(0 0 0 / 0.12)",

  lg: "0 10px 15px rgb(0 0 0 / 0.15)",

  xl: "0 20px 25px rgb(0 0 0 / 0.18)",
} as const;

export type Shadows = typeof shadows;
