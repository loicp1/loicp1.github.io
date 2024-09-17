import { IconButton, IconButtonProps, useColorMode } from "theme-ui";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

export type ColorModeProps = IconButtonProps;

export const ColorMode = ({ size, ...props }: ColorModeProps) => {
  const [colorMode, setColorMode] = useColorMode();

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick)
      props.onClick(e)

    toggleColorMode();
  }

  return (
    <IconButton
      {...props}
      sx={{ height: size, width: size }}
      onClick={handleClick}
    >
      {colorMode === 'light' ? (
        <FaMoon size={size} />
      ) : (
        <FaSun size={size} />
      )}
    </IconButton>
  );
};