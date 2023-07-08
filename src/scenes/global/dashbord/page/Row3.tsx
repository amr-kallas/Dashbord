import { Box, Paper, Stack, Typography } from "@mui/material";
import Pie from "../../pages/pie/Pie";
import Bar from "../../pages/bar/Bar";
import Geography from "../../pages/geography/Geography";

export default function Row3() {
  return (
    <Stack direction="row" mt={3} gap={2} sx={{flexWrap:"wrap"}}>
    <Paper sx={{ flex: 1, minHeight: "385px",minWidth:300 }}>
        <Typography
          color="secondary"
          variant="h6"
          sx={{
            p:"30px",
            fontWeight: "bold",
          }}
        >
          Campaign
        </Typography>
        <Box >
        <Pie isDashbord={true} />
        </Box>
        <Stack textAlign="center">
          <Typography variant="h6" color="secondary">$48,352 revenue generated</Typography>
          <Typography variant="body2" color="#777">
            includes extra misc expendture and cost
          </Typography>
        </Stack>
      </Paper>

      <Paper sx={{ flex: 1 ,minWidth:300}}>
      <Typography
          color="secondary"
          variant="h6"
          sx={{
            p:"30px",
            fontWeight: "bold",
          }}
        >
          Sales Quantity
        </Typography>
        <Bar isDashbord={true}/>
      </Paper>

      <Paper sx={{ flex: 1 ,minWidth:300}}>
      <Typography
          color="secondary"
          variant="h6"
          sx={{
            p:"30px",
            fontWeight: "bold",
          }}
        >
          Geography Based Traffic
        </Typography>
        <Geography isDashbord={true}/>
      </Paper>
    </Stack>
  );
}
