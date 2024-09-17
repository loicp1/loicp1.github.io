import { PiConfettiFill } from "react-icons/pi";
import { Box, IconButton, Text } from "theme-ui"
import { CommonActions } from "store/slices/common.slice";
import { ColorMode } from "components";
import { withProps } from "utils";
import { media } from "./data";
import { useAppDispatch } from "store";

const iconsSize = 26;

export interface TopbarProps {
  title: string;
  onTitleClick?: () => void;
};

export const Topbar = ({ title, onTitleClick }: TopbarProps) => {
  const dispatch = useAppDispatch();

  return (
    <Box sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      height: "64px",
      px: "16px",
    }}>
      <Box sx={{
        display: "flex",
        alignItems: "center",
        gap: "24px"
      }}>
        <Text
          variant="heading"
          onClick={onTitleClick}
          sx={{
            height: "58px",
            cursor: onTitleClick ? "pointer" : "initial"
          }}
        >
          {title}
        </Text>

        <Box sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          height: iconsSize,
        }}>
          {/** Social media */}
          {media?.map(({ link, icon }) => (
            <IconButton
              key={link}
              sx={{ height: iconsSize, width: iconsSize }}
              onClick={ () => window.open(link) }
            >
              {withProps(icon, { size: iconsSize })}
            </IconButton>
          ))}
        </Box>
      </Box>

      <Box sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        height: iconsSize,
      }}>
        {/** Fun features */}
        <IconButton
          sx={{ height: iconsSize, width: iconsSize }}
          onClick={() => dispatch(CommonActions.setIsConfettying(true))}
        >
          <PiConfettiFill size={iconsSize} />
        </IconButton>
        
        <ColorMode size={iconsSize} />
      </Box>
    </Box>
  );
};