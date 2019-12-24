import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import HeaderTabs from './HeaderTabs'
import NewQuestons from './NewQuestons'
import HotQuestons from './HotQuestons'
import Quintessence from './Quintessence'

import { Main } from './styledQuestons'
// import { HeaderTabsWarp } from './styledQuestons'
class Questons extends Component {
    render() {
        return (
            <Main>
                <HeaderTabs>
                </HeaderTabs>
                <div className="main">
                    <Switch>
                        <Route
                            path='/home/questions/newQuestons'
                            render={() => (
                                <NewQuestons></NewQuestons>
                            )}
                        />
                        
                        <Route
                            path='/home/questions/hotQuestons'
                            render={() => (
                                <HotQuestons></HotQuestons>

                            )}
                        />
                      
                        <Route
                            path='/home/questions/quintessence'
                            render={() => (
                                <Quintessence></Quintessence>

                            )}
                        />

                        <Redirect
                            from='/home/questions'
                            to='/home/questions/newQuestons'
                        />

                    </Switch>
                </div>



            </Main>
        );
    }
}

export default withRouter(Questons);