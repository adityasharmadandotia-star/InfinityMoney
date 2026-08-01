import { forwardRef } from "react";

import { Box, type BoxProps } from "../Box";
import { cn } from "@/lib/cn";

type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";

type FlexJustify = "start" | "center" | "end" | "between" | "around" | "evenly";

type FlexAlign = "start" | "center" | "end" | "stretch" | "baseline";

type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";

type FlexGap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;

export interface FlexProps extends BoxProps {
  direction?: FlexDirection;
  justify?: FlexJustify;
  align?: FlexAlign;
  wrap?: FlexWrap;
  gap?: FlexGap;
}

const directionClasses: Record<FlexDirection, string> = {
  row: "flex-row",
  column: "flex-col",
  "row-reverse": "flex-row-reverse",
  "column-reverse": "flex-col-reverse",
};

const justifyClasses: Record<FlexJustify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const alignClasses: Record<FlexAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const wrapClasses: Record<FlexWrap, string> = {
  nowrap: "flex-nowrap",
  wrap: "flex-wrap",
  "wrap-reverse": "flex-wrap-reverse",
};

const gapClasses: Record<FlexGap, string> = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
  16: "gap-16",
};

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      direction = "row",
      justify = "start",
      align = "stretch",
      wrap = "nowrap",
      gap = 0,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <Box
        ref={ref}
        className={cn(
          "flex",
          directionClasses[direction],
          justifyClasses[justify],
          alignClasses[align],
          wrapClasses[wrap],
          gapClasses[gap],
          className,
        )}
        {...props}
      />
    );
  },
);

Flex.displayName = "Flex";
