import React from 'react'
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import "./Header.css"

const Header = () => {
  return (
    <nav className='navbar'>
        <Logo/>
        <SearchBar/>
        <button>Give Feedback</button>
    </nav>
  )
}

export default Header