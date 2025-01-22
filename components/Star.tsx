export interface StarProps {
  size: "sm" | "md" | "lg";
  x: number;
  y: number;
  blink: "1" | "2" | "3";
}

export const Star = ({ size, x, y, blink }: StarProps) => {
  return (
    <div
      className={`star star-${size} star-blink-${blink}`}
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      <img src="https://i.imgur.com/eIOSiT0.png" alt="" />
    </div>
  );
};
