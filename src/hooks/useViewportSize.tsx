import { useEffect, useState } from "react";

export function useWindowEvent(type: string, listener: () => void) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener(type, listener);
      return () => window.removeEventListener(type, listener);
    }
  }, [type, listener]);
}

export const useViewportSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  useWindowEvent("resize", () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  return { height, width };
};
