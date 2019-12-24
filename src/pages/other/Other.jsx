import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Uploading from './Uploading'
import Search from './search/Search'
import {Recipe} from './index'
import Information from './Information'
import Baike from './Baike'
import University from './University'
import Classify from './Classify'
import Details from './details/Details'
import DishDetails from './details/DishDetails'
import CircleDetails from './details/CircleDetails'
import LessonSeries from './LessonSeries'
import { IndexWarp } from './styledOther'
class Other extends Component {
    render() {
        return (
            <IndexWarp>
                <Switch>
                    <Route
                        path='/other/uploading'
                        render={() => (<Uploading></Uploading>)}
                    />
                    <Route
                        path='/other/search'
                        render={() => (<Search></Search>)}
                        exact
                    />
                    <Route
                        path='/other/search/recipe'
                        render={() => (<Recipe></Recipe>)}
                       
                    />
                    <Route
                        path='/other/information'
                        render={() => (<Information></Information>)}
                    />
                    <Route
                        path='/other/baike'
                        render={() => (<Baike></Baike>)}
                    />
                    <Route
                        path='/other/university'
                        render={() => (<University></University>)}
                    />
                    <Route
                        path='/other/lessonSeries'
                        render={() => (<LessonSeries></LessonSeries>)}
                    />
                    <Route
                        path='/other/classify'
                        render={() => (<Classify></Classify>)}
                    />
                    <Route
                        path='/other/details/:id'
                        render={() => (<Details></Details>)}
                    />
                    <Route
                        path='/other/circledetails/:id'
                        render={() => (<CircleDetails></CircleDetails>)}
                    />
                    <Route
                        path='/other/dishDetails/:id'
                        render={() => (<DishDetails></DishDetails>)}
                    />
                </Switch>
            </IndexWarp>
        );
    }
}

export default Other;