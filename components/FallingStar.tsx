export interface FallingStarProps {
    x: number;
    y: number;
    animationDelay: number;
}

export const FallingStar = ({ x, y, animationDelay }: FallingStarProps) => {
    return <div className="falling-star" style={{ left: `${x}px`, top: `${y}px`, animationDelay: `${animationDelay}s` }}></div>;
};