import * as React from "react";
import { createTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Topbar from "./scenes/global/Topbar";
import SideBar from "./scenes/global/SideBar";
import { ThemeProvider } from "@mui/material/styles";
import { getDesignTokens } from "./theme2";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/global/dashbord/index";
import Team from "./scenes/global/pages/team/Team";
import Contact from "./scenes/global/pages/contact/Contact";
import Bar from "./scenes/global/pages/bar/Bar";
import FAQ from "./scenes/global/pages/FAQ/FAQ";
import Geography from "./scenes/global/pages/geography/Geography";
import Invoices from "./scenes/global/pages/invoices/Invoices";
import Line from "./scenes/global/pages/line/Line";
import Pie from "./scenes/global/pages/pie/Pie";
import Profile from "./scenes/global/pages/profile/Profile";
import Calender from "./scenes/global/pages/calendar/Calender";
export default function MiniDrawer() {
  const [mode, setMode] = React.useState(localStorage.getItem("currentMode"));

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Topbar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          setMode={setMode}
        />
        <SideBar open={open} handleDrawerClose={handleDrawerClose} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/geography" element={<Geography />} />
            <Route path="/invoice" element={<Invoices />} />
            <Route path="/line" element={<Line />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
