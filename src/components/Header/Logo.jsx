import React from 'react'
import logo from '../../assets/logo.png'
import './Logo.css'

const Logo = () => {
  return (
    <div className='header-logo' data-testid="logo">
         <img className='image-logo' src={logo} alt='logo' />
    </div>
  )
}

export default Logo