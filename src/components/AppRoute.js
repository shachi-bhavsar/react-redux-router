import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { NavLink, Route } from 'react-router-dom'
import Home from './Home'
import Roster from './Roster'

const AppRoute = () => (
  
    <BrowserRouter>
      <div>
        <div>
            <ul className = "header">
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/roster'>Roster</NavLink></li>
            </ul>
        </div>
        <div className="content">
            <Route exact path='/' component={Home}/>
            <Route path='/roster' component={Roster}/>
        </div>
      </div>
    </BrowserRouter>
   
)

export default AppRoute
