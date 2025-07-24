import React from 'react'
import './Navbar.css'
import Button from './Button'
import Logo from './Logo'
import Search from './Search'

const Navbar = () => {
  return (
    <div className='header-content' data-testid="navbar">

      <Logo />

      <Search />

      <div data-testid="button">
        <Button value={'Give Feedback'} />
      </div>
    </div>
  )
}

export default Navbar