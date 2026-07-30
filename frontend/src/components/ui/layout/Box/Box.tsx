import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export type BoxProps = HTMLAttributes<HTMLDivElement>;

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(className)} {...props}>
        {children}
      </div>
    );
  },
);

Box.displayName = "Box";
