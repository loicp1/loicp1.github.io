import { RouterProvider } from 'react-router-dom';
import { ColorModeProvider } from '@theme-ui/color-modes';
import { ThemeUIProvider } from 'theme-ui';
import { theme } from 'theme';
import { router } from 'routes';

const App = () => {
  return (
    <ThemeUIProvider theme={theme}>
      <ColorModeProvider>
        <RouterProvider router={router} />
      </ColorModeProvider>
    </ThemeUIProvider>
  );
};

export default App;
