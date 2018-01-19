import React from 'react'
import { NavLink } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><NavLink to='/'>All</NavLink></li>
        <li><NavLink to='/roster'>Roster</NavLink></li>
      </ul>
    </nav>
  </header>
)

export default Header
