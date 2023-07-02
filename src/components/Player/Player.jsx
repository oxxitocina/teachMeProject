import { Box } from "@mui/material"
import ReactPlayer from 'react-player'

export default function Player() {
  return (
    <>
        <Box sx={{
            width: '1328px',
            height: '737px',
            background:  `url('mesh gradient video.png'), lightgray 50% / cover no-repeat`,
            borderRadius: '25.152px',
            position: 'relative'
        }}> 
          <ReactPlayer url='https://www.youtube.com/watch?v=4DioS0iL7gc&feature=youtu.be' width='1328px' height='737px'/>
        </Box>
    </>
  )
}
