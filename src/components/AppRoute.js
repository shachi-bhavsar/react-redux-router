import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { NavLink, Route } from 'react-router-dom'
import Home from './Home'
import Roster from './Roster'

const AppRoute = () => (
    <div>
      <BrowserRouter>
        <div style={styles.wrapper}>
              <ul style={styles.header}>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/roster'>Roster</NavLink></li>
              </ul>
          
          <div style={styles.content}>
              <Route exact path='/' component={Home}/>
              <Route path='/roster' component={Roster}/>
          </div>
        </div>
      </BrowserRouter>
   </div>
)

export default AppRoute

const styles = {
  container: {
      width: 400,
      height: 400
  },
  wrapper: {
      display: 'flex', 
      justifyContent: 'center'
  },
  header: {
      backgroundColor: '#23cf45',
      width: 80
  },
  content: {
    backgroundColor: '#FFCC00',
    width: 600,
    display: 'flex', 
    justifyContent: 'center',
    marginLeft: 20
  }
}
