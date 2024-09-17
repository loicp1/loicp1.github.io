import { useEffect, useRef, useState } from "react";
import { Text } from "theme-ui";

const INITIAL_TIMER = 30;
const TARGET_TIMER = 0;

export const Timer = () => {
  // Code refactoring
  const [timer, setTimer] = useState<number>(INITIAL_TIMER);
  const interval = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    function handleTimer() {
      interval.current = setInterval(() => {
        setTimer((count) => count - 1);
      }, 1000);
    }

    if (timer <= TARGET_TIMER && interval.current) {
      clearInterval(interval.current);
    }
    if (timer === INITIAL_TIMER) {
      handleTimer();
    }
  }, [timer]);

  return (
    <Text>{timer}</Text>
  );
};