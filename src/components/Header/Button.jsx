import React from 'react'
import './Button.css'
import { Button } from '@mui/material'

const ButtonComponent = ({ value }) => {
  return (
    <button className='button'>{value}</button>
  )
}

export default ButtonComponent