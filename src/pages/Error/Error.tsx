import { useNavigate, useRouteError } from "react-router-dom";
import { Box, Button, Text } from "theme-ui";
import { keyframes } from "@emotion/react";
import { getRandomInt } from "utils";

const dist = 4;

const animation = keyframes({
  "10%, 90%": {
    transform: `translate3d(${getRandomInt(-dist, dist)}px, ${getRandomInt(-dist, dist)}px, 0)`,
  },
  "20%, 80%": {
    transform: `translate3d(${getRandomInt(-dist, dist)}px, ${getRandomInt(-dist, dist)}px, 0)`,
  },
  "30%, 50%, 70%": {
    transform: `translate3d(${getRandomInt(-dist, dist)}px, ${getRandomInt(-dist, dist)}px, 0)`,
  },
  "40%, 60%": {
    transform: `translate3d(${getRandomInt(-dist, dist)}px, ${getRandomInt(-dist, dist)}px, 0)`,
  },
});

export const Error = () => {
  const navigate = useNavigate();

  const error: any = useRouteError();
  
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        alignItems: "center",
        gap: "64px",
        maxWidth: "320px",
      }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          animation: `${animation} 0.5s`,
        }}>
          <Text variant="heading">
            {`${error?.status} ${error?.statusText?.toSentenceCase()}`}
          </Text>
          <Text>It seems an error has occurred!</Text>
        </Box>

        <Button
          sx={{ minWidth: "33%" }}
          onClick={() => navigate('/')}
        >
          Return to base
        </Button>
      </Box>
    </Box>
  );
};