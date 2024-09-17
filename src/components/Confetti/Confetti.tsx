import { useEffect, useState } from "react";
import { Box } from "theme-ui";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { CommonSelectors } from "store/selectors/common.selectors";
import { CommonActions } from "store/slices";
import { getRandomInt } from "utils";
import { ConfettiGroup } from "components";

export const Confetti = () => {
  const dispatch = useAppDispatch();

  const isConfettying = useAppSelector(CommonSelectors.isConfettying);

  const [elements, setElements] = useState<JSX.Element[]>([]);

  const handleAnimationEnd = (id: string) => {
    setElements((prev) => [
      ...prev.filter((e) => e.key !== id)
    ]);
  };

  useEffect(() => {
    if (elements.length === 0 && isConfettying) {
      dispatch(CommonActions.setIsConfettying(false));
    }
  }, [elements]);

  useEffect(() => {
    if (!isConfettying)
      return;

    let iterations = getRandomInt(10, 15);
    let iterations2 = getRandomInt(2, 5);

    for (var i = 0; i < iterations; i++) {
      setTimeout(async () => {
        for (var j = 0; j < iterations2; ++j) {
          const x = getRandomInt(0, window.innerWidth)
          const y = getRandomInt(0, window.innerHeight)

          const id = `${x}-${y}-${i}-${j}`;

          const element = (
            <ConfettiGroup
              id={id}
              key={id}
              x={x}
              y={y}
              items={20}
              onAnimationEnd={handleAnimationEnd}
            />
          );

          setElements((prev) => [ ...prev, element ]);
        }
      }, getRandomInt(0, 500));
    }
  }, [isConfettying]);

  return (
    <Box
      sx={{
        position: "absolute",
        pointerEvents: "none",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      {elements}
    </Box>
  );
};