import { Stack, useTheme } from "@mui/material";
import Card from "./reusable/Card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import * as data from "./data"
export default function Row1() {
   const theme=useTheme()
  return (
    <Stack direction="row" gap={1} sx={{
      flexWrap:"wrap"
    }}>
      <Card icon={<EmailIcon />} title={"12,361"} subTitle={"Email Sent"} text={"+14%"} data={data.data1}/>
      <Card icon={<PointOfSaleIcon />} title={"421,225"} subTitle={"Sales"} text={"21%"} data={data.data2}/>
      <Card icon={<PersonAddIcon />} title={"442,315"} subTitle={"New Client"} text={"5%"} data={data.data3}/>
      <Card icon={<TrafficIcon />} title={"1,325,134"} subTitle={"Trrafic Receved"} text={"43%"} data={data.data4}/>
    </Stack>
  )
}
