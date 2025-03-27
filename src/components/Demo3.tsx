import { useHover } from "../hooks/useHover";

export function Demo3() {
  const { hovered, ref } = useHover();

  return (
    <div ref={ref}>
      {hovered ? "На меня навели мышку" : "Наведи мышкой на меня"}
    </div>
  );
}
