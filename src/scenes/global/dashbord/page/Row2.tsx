import { Box, Button, IconButton, Paper, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Line from "../../pages/line/Line";
import { Transactions } from "./data";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
export default function Row2() {
  const theme=useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack direction={isSmallScreen?"column":"row"} gap={1} marginTop={2} flexWrap="wrap" >
      <Paper sx={{
        height:375,
        flex:2,
        svg:{width:"100%"}
      }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" p={2}>
          <Stack>
          <Typography variant="h6" fontWeight="bold" color="secondary">Revenue Generated</Typography>
          <Typography variant="body2">%59,463,187</Typography>
          </Stack>
          <IconButton>
            <DownloadOutlinedIcon/>
          </IconButton>
        </Stack>
        <Line isDashbord={true}/>
      </Paper>
      <Box flex={1} sx={{minWidth:200}}>
      <Paper sx={{
        padding:1,
        marginBottom:1
      }}>
        <Typography variant="h5" color="secondary" fontWeight="bold" fontSize="1rem">Recent Transaction</Typography>
      </Paper>
      <Box sx={{overflow:"auto",maxHeight:328}}>
      {Transactions.map((item)=>{
        return(
          <Paper key={item.txId} sx={{display:"flex",justifyContent:"space-between", mb:1, padding:1,alignItems:"center"}}>
        <Stack>
          <Typography variant="body2" fontWeight="bold">{item.user}</Typography>
          <Typography variant="body2">{item.date}</Typography>
        </Stack>
        <Box>
            <Button color="error" variant="contained" sx={{minWidth:90}}>$ {item.cost}</Button>
        </Box>
      </Paper>
        )
      })}
      </Box>

      
      </Box>
    </Stack>
  )
}
