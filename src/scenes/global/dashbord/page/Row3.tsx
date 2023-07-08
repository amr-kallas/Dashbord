import { Paper, Stack, Typography } from "@mui/material";
import Pie from "../../pages/pie/Pie";

export default function Row3() {
  return (
    <Stack direction="row" mt={3} gap={2}>
      <Paper sx={{ flex: 1, minHeight: "385px" }}>
        <Typography
          color="secondary"
          variant="h6"
          sx={{
            paddingTop: "30px",
            paddingLeft: "30px",
            paddingBottom:"30px",
            fontWeight: "bold",
          }}
        >
          Campaign
        </Typography>
        <Pie isDashbord={true} />
        <Stack textAlign="center">
          <Typography variant="h6" color="secondary">$48,352 revenue generated</Typography>
          <Typography variant="body2" color="#777">
            includes extra misc expendture and cost
          </Typography>
        </Stack>
      </Paper>

      <Paper sx={{ flex: 1 }}></Paper>

      <Paper sx={{ flex: 1 }}></Paper>
    </Stack>
  );
}
