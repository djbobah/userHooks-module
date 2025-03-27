import { useEffect, useState } from "react";

export function useWindowEvent(type: string, listener: () => void) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener(type, listener);
      return () => window.removeEventListener(type, listener);
    }
  }, [type, listener]);
}

export const useWindowScroll = () => {
  const [scroll, setScroll] = useState({
    x: window.scrollX,
    y: window.scrollY,
  });
  useWindowEvent("scroll", () => {
    setScroll({ x: window.scrollX, y: window.scrollY });
  });

  const scrollTo = ({ x = scroll.x, y = scroll.y }) => {
    window.scrollTo({ left: x, top: y });
  };

  return [scroll, scrollTo] as const;
};
