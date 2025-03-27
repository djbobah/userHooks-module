import { useViewportSize } from "../hooks/useViewportSize";

export function Demo4() {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}
