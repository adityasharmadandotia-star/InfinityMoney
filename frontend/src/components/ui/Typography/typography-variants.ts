import { cva } from "class-variance-authority";

export const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-5xl font-bold tracking-tight",
      h2: "text-4xl font-bold tracking-tight",
      h3: "text-3xl font-semibold tracking-tight",
      h4: "text-2xl font-semibold",
      body: "text-base text-zinc-300",
      small: "text-sm text-zinc-400",
      muted: "text-sm text-zinc-500",
    },
  },

  defaultVariants: {
    variant: "body",
  },
});
