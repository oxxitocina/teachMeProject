import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

export default function SimpleAccordion() {
    const [expanded, isExpanded] = useState(0)
    const data = useSelector((state) => state.getData.data)
    let arr = data.info.split(/\d+\./g)
    arr = arr.filter((item) => item.length > 1)
    arr = arr.map((item) => item.split(/:::/))
    console.log(arr)

  return (
    <>
        {arr.map((item, index) => {
            return (
                <Accordion sx={{
                    marginTop: '10px',
                    borderRadius: '7px',
                    padding: '20px',
                    border: expanded === index ? '3px solid #8AD8C1' : 'none',
                    '&:hover': {
                        outline: '3px solid #8AD8C1'
                    },
                    '.MuiAccordionSummary-expandIconWrapper': {
                        backgroundColor: expanded === index ? '#8AD8C1' : '#DFEDFF',
                        borderRadius: '5px',
                        color: expanded === index ? 'white' : '#4F56E5',
                        padding: '10px'
                    }
                }} key={index}
                onChange={() => {
                    index === expanded ? isExpanded(-1) : isExpanded(index) 
                }}
                expanded={expanded === index ? true : false}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Box sx={{marginRight: '20px', backgroundColor: expanded === index ? '#8AD8C1' : '#DFEDFF', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: expanded === index ? 'white' : '#4F56E5', borderRadius: '5px'}}>{index+1}</Box>
                    <Typography sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{item[0]}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        {item[1]}
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            )
        })}
    </>
  );
}