import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

const Team = () => {
  const theme = useTheme();
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              backgroundColor:
                access == "Admin"
                  ? theme.palette.primary.dark
                  : access == "Manager"
                  ? theme.palette.secondary.dark
                  : "#26a69a",
              padding: "5px",
              borderRadius: "3px",
              color:"#fff",
              cursor:"pointer"
            }}
          >
            {access == "Admin" ? (
              <AdminPanelSettingsOutlined
                fontSize="small"
                sx={{ color: "#fff" }}
              />
            ) : access == "Manager" ? (
              <SecurityOutlined fontSize="small" sx={{ color: "#fff" }} />
            ) : (
              <LockOpenOutlined fontSize="small" sx={{ color: "#fff" }} />
            )}

            <Typography
              sx={{
                marginLeft: 1,
              }}
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box sx={{ height: 500, maxWidth: "99%" }}>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
};

export default Team;
