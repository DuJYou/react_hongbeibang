import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'
import Layout from './home/Layout'
import Other from './other/Other'

class Index extends Component {
    componentWillMount () {
        // loading 动画 的结束 控制 模块
        let loading = document.getElementById('i-loading')
        if (loading) {
          loading.setAttribute('class', 'i-loading-out')
          setTimeout(() => {
            loading.style.display = 'none'
          }, 1000)
        }
      }
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