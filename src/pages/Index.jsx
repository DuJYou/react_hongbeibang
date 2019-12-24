import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'
import Layout from './home/Layout'
import Other from './other/Other'

class Index extends Component {
    render() {
        return (
            <div style={{height:'100%'}}>
                <Switch>
                    <Route
                    path="/home"
                    render={
                        ()=>(
                           <Layout></Layout> 
                        )
                    }
                    />
                    <Route
                     path="/other"
                     render={
                         ()=>(
                            <Other></Other> 
                         )
                     }/>
                    <Redirect
                    from="/"
                    to="/home"
                    />

                </Switch>
                
            </div>
        );
    }
}

export default Index;