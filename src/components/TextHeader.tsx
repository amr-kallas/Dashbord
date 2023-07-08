import { Box, Typography, useTheme } from '@mui/material'

type text={
    title:string,
    subTitle:string,
    isDashbord?:boolean
}
export default function TextHeader({title,subTitle,isDashbord=false}:text) {
    const theme=useTheme()
  return (
    <Box mb={isDashbord?0:4}>
      <Typography color={theme.palette.primary.main} variant="h5" fontWeight="bold">{title}</Typography>
      <Typography>{subTitle}</Typography>
    </Box>
  )
}
