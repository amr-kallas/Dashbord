import { Box, Button, Stack } from "@mui/material";
import Row1 from "./page/Row1";
import Row2 from "./page/Row2";
import Row3 from "./page/Row3";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import TextHeader from "../../../components/TextHeader";
const Dashbord = () => {
  return (
    <>
      <Box>
        <Stack direction="row" alignItems="center" justifyContent="space-between" marginBottom="8px">
          <TextHeader isDashbord={true} title="DASHBORD" subTitle="welcome to your dashbord" />
          <Button
            variant="contained"
            sx={{ textTransform: "capitalize", p: "6px,8px" }}
          >
            <DownloadOutlinedIcon />
            Download Reports
          </Button>
        </Stack>
        <Row1 />
        <Row2 />
        <Row3 />
      </Box>
    </>
  );
};

export default Dashbord;
