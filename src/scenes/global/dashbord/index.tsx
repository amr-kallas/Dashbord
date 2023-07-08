import { Box, Button } from "@mui/material";
import Row1 from "./page/Row1";
import Row2 from "./page/Row2";
import Row3 from "./page/Row3";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
const Dashbord = () => {
  return (
    <Box>
      <Box textAlign="right" marginBottom="8px">
        <Button variant="contained" sx={{textTransform:"capitalize",p:"6px,8px"}}>
          <DownloadOutlinedIcon />
          Download Reports
        </Button>
      </Box>
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
};

export default Dashbord;
