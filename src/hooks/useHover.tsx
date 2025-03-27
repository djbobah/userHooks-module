import { useEffect, useRef, useState } from "react";

export const useHover = () => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const handleMouseOver = () => setHovered(true);
    const handleMouseOut = () => setHovered(false);

    if (element) {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      if (element) {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, []);

  return { hovered, ref };
};
