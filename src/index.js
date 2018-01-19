import React from 'react'
import AppRedux from './components/AppRedux';
import AppRoute from './components/AppRoute';

export class Test extends React.Component{	
	render(){
		return (
			<div>
				<AppRedux/>	  
				<AppRoute/>
		  </div>,
			document.getElementById('root')
		)
	}
}