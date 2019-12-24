import React, { Component } from 'react';
import { Route, Switch, withRouter,Redirect } from 'react-router-dom'
import Expert from './Expert'
import Compre from './Compre'
import Most from './Most'
import { RecipeWarp } from './styledSearch'
import HeaderTabsWarp from './SearchRecipeHeader'
class Recipe extends Component {
    hindleClick = (value) => {
        return this.props.history.push(value);
    }
    render() {
        console.log(this.props.match.path);
        return (
            <div className="111" style={{ height: '100%' }}>


                <RecipeWarp>
                    <div className="header">
                        <div className="img" onClick={this.hindleClick.bind(this, '/other/search')}>
                            <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" />
                        </div>
                        <div className="search">
                            <input type="text" placeholder="搜索食谱/食材，烘焙/家常菜一应俱全" />
                        </div>
                        <div className="text" onClick={this.hindleClick}>
                            <div className="sp">食谱</div>
                            <div className="spImg">
                                <img src="https://image.hongbeibang.com/FnX5qtpWKlcHoDYC5KDFHulWfEZl?32X32&imageView2/1/w/32/h/32" alt="" />
                            </div>
                        </div>
                    </div>
                    <HeaderTabsWarp></HeaderTabsWarp>

                </RecipeWarp>
                <div style={{ height: '100%' }}>
                    <Switch>
                        <Route
                            path='/other/search/recipe/most'
                            render={() => (
                                <Most></Most>
                            )}
                        />
                        <Route
                            path='/other/search/recipe/expert'
                            render={() => (
                                <Expert></Expert>
                            )}
                        />
                        <Route
                            path='/other/search/recipe/compre'
                            render={() => (
                                <Compre></Compre>
                            )}
                        />
                        <Redirect
                        from="/other/search/recipe/"
                        to="/other/search/recipe/compre"
                        />

                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(Recipe);