import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Header from './Header'
import New from './new/New'
import Expert from './expert/Expert'
import Attention from './attention/Attention'
// import CircleDetails from 'pages/other/details/CircleDetails'
import { Main } from './new/styledNew'
class Circle extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Main>
                <Switch>
                    <Route
                        path={this.props.match.path + '/new'}
                        render={() => (
                            <New></New>
                        )}
                    />
                    <Route
                        path={this.props.match.path + '/expert'}
                        render={() => (
                            <Expert></Expert>
                        )}
                    />
                    <Route
                        path={this.props.match.path + '/attention'}
                        render={() => (
                            <Attention></Attention>
                        )}
                    />
                    <Redirect
                        from='/home/circle'
                        to='/home/circle/new'
                    />
                </Switch>
                </Main>
            </div>
        );
    }
}

export default withRouter(Circle);