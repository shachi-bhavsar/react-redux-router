import React from "react";
import AppRedux from './AppRedux';
import AppRoute from './AppRoute';

export default class Root extends React.Component{
    render(){
        return(
            <div>
                <AppRedux/>
                <AppRoute/>
            </div>
        )
    }
}
