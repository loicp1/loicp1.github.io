import React, { useEffect } from "react";
import { Box } from "theme-ui";
import { ConfettiParticle } from "components";
import { getRandomInt } from "utils";
import { config } from "./config";

export interface ConfettiGroupProps {
  id?: string;
  x: number;
  y: number;
  items: number;
  onAnimationEnd?: (key: string) => void;
};

export const ConfettiGroup = ({ id, x, y, items, onAnimationEnd }: ConfettiGroupProps) => {
  const [finished, setFinished] = React.useState<number>(0);

  const handleAnimationEnd = () => {
    setFinished((prev) => prev + 1);
  };

  useEffect(() => {
    if (finished/2 === items && onAnimationEnd && id) {
      onAnimationEnd(id);
    }
  }, [finished]);

  return (
    <Box
      key={`${x}-${y}-container`}
      sx={{
        position: "fixed",
        zIndex: 9999,
        top: y,
        left: x,
      }}
    >
      {Array.from({ length: items }).map((_, i) => (
        <React.Fragment key={`${x}-${i}-fragment`}>
          <ConfettiParticle
            key={`${x}-${y}-${i}-item`}
            angle={Math.random()}
            speed={Math.random()}
            color={config.colors[getRandomInt(0, config.colors.length)]}
            onAnimationEnd={handleAnimationEnd}
          />
          <ConfettiParticle
            key={`${x}-${y}-${i}-item-reverse`}
            angle={Math.random()}
            speed={Math.random()}
            color={config.colors[getRandomInt(0, config.colors.length)]}
            reverse
            onAnimationEnd={handleAnimationEnd}
          />
        </React.Fragment>
      ))}
    </Box>
  );
};