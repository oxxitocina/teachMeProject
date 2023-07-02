import { Box } from "@mui/material"
import { useSelector } from "react-redux"

export default function ProfileButton() {
  let address = useSelector((state) => state.authorization.address)
  address = address.slice(0, 12) + '...'

  return (
    <>
        <Box sx={{
            height: '72px',
            border: '1px solid black',
            display: 'flex',
            borderRadius: '20.741px',
            position: 'absolute',
            right: '146px',
            top: '50px',
            width: '289px',
        }}>
            <Box sx={{width: '252px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid black'}}>
              {address}
            </Box>
            <Box sx={{width: '91px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img src="mesh-gradient (2) 1.png" style={{borderRadius: '50%'}}></img>
            </Box>
        </Box>

    </>
  )
}
