import * as React from "react";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { typographyVariants } from "./typography-variants";

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

export function Typography({
  as: Component = "p",
  variant,
  className,
  children,
  ...props
}: TypographyProps) {
  return (
    <Component className={cn(typographyVariants({ variant }), className)} {...props}>
      {children}
    </Component>
  );
}
