import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows } from "./data";
import { columns } from "./data";

const Contact = () => {
  return (
    <Box sx={{ height: 500, maxWidth: "99%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </Box>
  );
};

export default Contact;
