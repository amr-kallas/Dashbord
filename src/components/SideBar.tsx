import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { HomeOutlined } from "@mui/icons-material";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { Avatar, Tooltip, Typography } from "@mui/material";
import Amr from "../../assets/photo_2023-06-26_23-00-05.jpg";
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const array1 = [
  { title: "Dashbord", icon: <HomeOutlined />, path: "/" },
  { title: "Manage Team", icon: <PeopleOutlinedIcon />, path: "/team" },
  {
    title: "Contact Information",
    icon: <ContactsOutlinedIcon />,
    path: "/contact",
  },
  {
    title: "Invoices Balances",
    icon: <ReceiptOutlinedIcon />,
    path: "/invoice",
  },
];
const array2 = [
  { title: "Profile Form", icon: <PersonOutlinedIcon />, path: "/profile" },
  { title: "Calender", icon: <CalendarTodayOutlinedIcon />, path: "/calender" },
  { title: "FAQ Page", icon: <HelpOutlineOutlinedIcon />, path: "/faq" },
];
const array3 = [
  { title: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
  { title: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
  { title: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/line" },
  { title: "Geography Chart", icon: <MapOutlinedIcon />, path: "/geography" },
];
const SideBar = ({ open, handleDrawerClose }: any) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />
      <Avatar
        alt="Remy Sharp"
        src={Amr}
        sx={{
          m: "20px auto 10px auto",
          width: open ? "70px" : "44px",
          height: open ? "70px" : "44px",
          transition: "0.25s",
          border: `2px solid ${grey[600]}`,
        }}
      />
      <Typography
        align="center"
        variant="body1"
        sx={{
          fontSize: open ? "17" : "0",
          transition: "0.25s",
        }}
      >
        Amr Kallas
      </Typography>
      <Typography
        align="center"
        color={theme.palette.primary.main}
        variant="body2"
        sx={{
          fontSize: open ? "17" : "0",
          transition: "0.25s",
        }}
      >
        Admin
      </Typography>
      <Divider />
      <List>
        {array1.map((item) => (
          <Tooltip title={!open?item.title:''} placement="right">
            <ListItem
              key={item.title}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => navigate(item.path)}
            >
              <ListItemButton
                selected={location.pathname == item.path}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Tooltip>
        ))}
      </List>
      <Divider />
      <List>
        {array2.map((item) => (
          <Tooltip title={!open?item.title:''} placement="right">
          <ListItem
              key={item.title}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => navigate(item.path)}
            >
              <ListItemButton
                selected={location.pathname == item.path}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Tooltip>
        ))}
      </List>
      <Divider />
      <List>
        {array3.map((item) => (
          <Tooltip title={!open?item.title:''} placement="right">
          <ListItem
              key={item.title}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => navigate(item.path)}
            >
              <ListItemButton
                selected={location.pathname == item.path}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
