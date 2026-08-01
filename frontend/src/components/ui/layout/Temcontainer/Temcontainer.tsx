import { forwardRef } from "react";

import { Box, type BoxProps } from "../Box";
import { cn } from "@/lib/cn";

export interface ContainerProps extends BoxProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const sizeClasses = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  "2xl": "max-w-[90rem]",
  full: "max-w-full",
} as const;

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = "xl", className, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizeClasses[size], className)}
        {...props}
      />
    );
  },
);

Container.displayName = "Container";
