"use client";

import {
  animate,
  motion as framerMotion,
  useInView as framerUseInView,
  type MotionProps,
} from "framer-motion";

export const motion = framerMotion;
export type { MotionProps };

// Define the shape of the options object for useInView
interface UseInViewOptions {
  once?: boolean;
  margin?: string;
}

// Function to use the in-view hook
export function useInView(ref: React.RefObject<Element>, options: UseInViewOptions = {}) {
  const { once = false, margin = "0px" } = options;
  return framerUseInView(ref, {
    once,
    margin: margin as unknown as MarginType, // Assuming you have a valid MarginType
  });
}
