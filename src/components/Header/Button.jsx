import React from 'react'
import './Button.css'

const Button = ({ value }) => {
  return (
    <input type='button' className='button' value={value} />
  )
}

export default Button