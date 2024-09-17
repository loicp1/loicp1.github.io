import { Outlet, useNavigate } from "react-router-dom";
import { Box } from "theme-ui";
import { Confetti, Topbar } from "components";

export const Layout = () => {
  const navigate = useNavigate();
  
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      height: "100vh",
      position: 'relative',
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        maxWidth: '960px',
      }}>
        <Topbar
          title={"loicp1"}
          onTitleClick={() => navigate("/")}
        />

        <Outlet />

        <Confetti />
      </Box>
    </Box>
  );
};