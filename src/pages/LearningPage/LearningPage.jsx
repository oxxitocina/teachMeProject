import { Box } from "@mui/material"
import { useSelector } from 'react-redux';
import CircularIndeterminate from "../../shared/ui/Spinner/Spinner";
import SimpleAccordion from "../../components/Accordion/Accordion";
import Navbar from "../../components/Navbar/Navbar";
import Player from "../../components/Player/Player";
import QuizList from "../../components/QuizList/QuizList";


export default function LearningPage() {

  const loading = useSelector((state) => state.getData.loading)


function loadingSpinner() {
  if(loading === 'loading') {
    return (
      <CircularIndeterminate/>
    )
  }
}


  return (
    <>
        {loadingSpinner()}
            <div style={{position: 'absolute', width: '755px', height: '755px', top: '90%'}}><img src='Saly-1 1.png'></img></div>
            <div style={{position: 'absolute', width: '755px', height: '755px', top: '75%', right: '2%'}}><img src='Saly-43 1.png'></img></div>
        <Navbar/>

        <Box sx={{
            width: '1319px',
            margin: '0 auto'
        }}>

        <Box sx={{paddingTop: '214px'}}>
            <Player/>
        </Box>

          <div style={{
            padding: '22px',
            background: 'rgba(255, 255, 255, 0.50)',
            backdropFilter: 'blur(195.48519897460938px)',
            borderRadius: '22.652px',
            marginTop: '114px',
            position: 'relative'
          }}> 

            <SimpleAccordion/>

            <div style={{display: "flex", justifyContent: 'center'}}>
                <button style={{
                borderRadius: '16.921px',
                background: '#8AD8C1', 
                border: 'none',
                width: '388.334px',
                padding: '15.229px 66.837px',
                color: 'white',
                marginTop: '13px'
                }}>DONE</button>
            </div>
          </div>

          
            <QuizList/>
          
        </Box>
    </>
  )
}
