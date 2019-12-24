import React, { Component } from 'react';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom'
class index extends Component {
    render() {
        return (
            <Switch>
                    <Route
                        path='/movie'
                        component={Movie}
                    />
                    <Route
                        path='/tv'
                        component={Tv}
                    />
                    <Redirect
                        from="/"
                        to="/movie"
                    />
                </Switch>
        );
    }
}

export default index;