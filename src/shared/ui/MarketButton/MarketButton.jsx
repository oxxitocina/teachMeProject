import { Box } from "@mui/material"
import {
  useNavigate
} from "react-router-dom";

export default function MarketButton() {
  const navigate = useNavigate()

  return (
    <>
        <Box sx={{
            width: '80px',
            height: '80px',
        }}
        onClick={() => {navigate('/store')}}
        >
            <img src="market.png"></img>
        </Box>
    </>
  )
}
