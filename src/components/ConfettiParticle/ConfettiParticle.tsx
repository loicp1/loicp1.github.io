import { useEffect, useRef } from "react";
import { Box } from "theme-ui";
import { animateParticle } from "./animate";
import { config } from "./config";

export interface ConfettiParticleProps {
  angle: number;
  speed: number;
  color: string;
  reverse?: boolean;
  onAnimationEnd?: () => void;
};

export const ConfettiParticle = ({
  angle,
  speed,
  color,
  reverse = false,
  onAnimationEnd,
}: ConfettiParticleProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      animateParticle(ref, angle, speed, reverse)
        .then(() => {
          ref.current?.remove();

          onAnimationEnd?.();
        })
    } 
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        position: "absolute",
        width: `${config.itemSize}px`,
        height: `${config.itemSize}px`,
        backgroundColor: color,
      }}>
    </Box>
  );
};