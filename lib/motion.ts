"use client";

import {
  animate,
  motion as framerMotion,
  useInView as framerUseInView,
  type MotionProps,
} from "framer-motion";

export const motion = framerMotion;
export type { MotionProps };

interface UseInViewOptions {
  once?: boolean;
 return framerUseInView(ref, {
  once,
  margin: margin as unknown as MarginType,
});

}

export function useInView(ref: React.RefObject<Element>, options: UseInViewOptions = {}) {
  const { once = false, margin = "0px" } = options;
  return framerUseInView(ref, {
    once,
    margin,
  });
}
