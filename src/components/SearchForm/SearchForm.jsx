import { useState } from 'react'
import { fetchDataByTopic } from '../../store/slices/getData'
import { useDispatch } from 'react-redux'
import { Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import {
    useNavigate
  } from "react-router-dom";

export default function SearchForm() {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function hadleSubmit(event) {
        event.preventDefault()
        navigate('/study')
        dispatch(fetchDataByTopic(value))
    }

    function handleChange(event) {
        setValue(event.target.value)
    }

  return (
    <Box sx={{
        width: '504px',
        height: '75px',
        position: 'absolute',
        top: '52px',
        left: '930px',
        zIndex: '99'
    }}>
        <form onSubmit={() => {hadleSubmit(event)}} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Box sx={{
                position: 'absolute',
                paddingLeft: '10px'
            }}><SearchIcon sx={{color: 'gray', width: '47px', height: '47px'}}/></Box>
            <input value={value} onChange={() => {handleChange(event)}} style={{
                width: '100%',
                height: '70px',
                paddingLeft: '55px',
                borderRadius: '20.741px',
                border: '1px solid black',
            }} placeholder='Topic title or keyword'></input>
        </form>
    </Box>
  )
}
