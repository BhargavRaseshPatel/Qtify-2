import React from 'react'
import './Button.css'
import { Button } from '@mui/material'

const ButtonComponent = ({ value }) => {
  return (
    // <Button className='button' variant='contained'>
    //   {value}
    // </Button>
<button className='button'>{value}</button>
  )
}

export default ButtonComponent