import React from 'react'
import SearchIcon from './../../assets/search-icon.svg'
import './Search.css'

const Search = () => {
    return (
        <div className='header-search' data-testid="search">
            <input type='text' className='text-search' placeholder='Search a album of your choice' />
            <img src={SearchIcon} className='search-image' width='16px' height='16px' alt='search-icon'/>
        </div>
    )
}

export default Search