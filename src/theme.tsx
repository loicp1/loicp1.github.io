import { Theme } from "theme-ui";

// const spacing = (n: number) => `${n * 4}px`;

export const theme: Theme = {
  config: {
    initialColorModeName: 'light',
  },
  colors: {
    text: '#052238',
    background: '#FFFFFF',
    hover: '#00000012',
    clicked: '#00000032',
    primary: '#00ABD2',
    secondary: '#CD93F5',
    success: "#ACF39D",
    warning: "#FF9F1C",
    error: "#E85F5C",
    modes: {
      dark: {
        text: '#FDFFFC',
        background: '#282C34',
        hover: '#FFFFFF14',
        clicked: '#FFFFFF34',
      }
    }
  },
  fonts: {
    body: 'Arial, sans-serif',
    heading: 'OldTurtle, sans-serif',
  },
  fontSizes: {
    body: 16,
    heading: 48,
  },
  styles: {
    root: {
      "@font-face": {
        fontFamily: 'OldTurtle',
        src: "local('OldTurtle'), url(./fonts/OldTurtle.ttf) format('truetype')",
      },
      transition: "color 100ms, background-color 300ms ease 0s",
      margin: 0,
    },
  },
  buttons: {
    icon: {
        cursor: "pointer",
      borderRadius: "50%",
      transition: "background-color 200ms ease 0s",
      '&:hover': {
        backgroundColor: 'hover',
      },
      '&:active': {
        backgroundColor: 'clicked',
      },
    },
  },
  text: {
    default: {
      fontFamily: 'body',
      fontSize: 'body',
    },
    heading: {
      fontFamily: 'heading',
      fontSize: 'heading',
      height: '58px',
    }
  },
  // spacing: spacing,
};