import { cva } from "class-variance-authority";

export const spinnerVariants = cva(
  "animate-spin rounded-full border-solid border-current border-r-transparent",
  {
    variants: {
      size: {
        sm: "h-4 w-4 border-2",
        md: "h-6 w-6 border-2",
        lg: "h-10 w-10 border-[3px]",
      },

      variant: {
        primary: "text-blue-600",
        white: "text-white",
        muted: "text-zinc-500",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "primary",
    },
  },
);
