import React from 'react'
import './Navbar.css'
import Logo from './Logo'
import Search from './Search'
import ButtonComponent from './Button'

const Navbar = () => {
  return (
    <div className='header-content' data-testid="navbar">

      <Logo />

      <Search />

      <div data-testid="button">
        <ButtonComponent value={'Give Feedback'} />
      </div>
    </div>
  )
}

export default Navbar