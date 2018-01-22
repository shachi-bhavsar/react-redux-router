import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullRoster from './FullRoster'
import Player from './Player'

const Roster = () => (
  <div className="content">
    <Route exact path='/roster' component={FullRoster}/>
    <Route path='/roster/:number' component={Player}/>
  </div>
)


export default Roster
