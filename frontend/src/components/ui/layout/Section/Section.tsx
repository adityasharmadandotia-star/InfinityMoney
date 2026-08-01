import { forwardRef } from "react";

import { Box, type BoxProps } from "../Box";
import { cn } from "@/lib/cn";

export interface SectionProps extends BoxProps {
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
}

const spacingClasses = {
  none: "",
  sm: "py-8",
  md: "py-12",
  lg: "py-16",
  xl: "py-24",
} as const;

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ spacing = "lg", className, ...props }, ref) => {
    return <Box ref={ref} className={cn(spacingClasses[spacing], className)} {...props} />;
  },
);

Section.displayName = "Section";
