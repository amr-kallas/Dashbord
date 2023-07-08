import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { columns } from "./data";
import TextHeader from "../../../../components/TextHeader";
const Invoices = () => {
  return (
    <>
      <TextHeader
        title="INVOICES"
        subTitle="List of Invoices Balances"
        isDashbord={false}
      />

      <Box sx={{ height: 500, maxWidth: "99%" }}>
        <DataGrid rows={rows} columns={columns} checkboxSelection />
      </Box>
    </>
  );
};

export default Invoices;
