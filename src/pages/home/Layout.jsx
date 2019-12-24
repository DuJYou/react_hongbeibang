import React from 'react';
import { TabBar } from 'antd-mobile';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
//import {NavLink } from 'react-router-dom'
import { StudyWrap } from './study/styledStudy'
import { CircleWrap } from './circle/styledCircle'
import Study from './study/Study'
import Circle from './circle/Circle'
import Questions from './questions/Questons'
import CircleDetails from 'pages/other/details/CircleDetails'
import My from './my/My'
class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
            fullScreen: true,
            // dir:this.getPath(this.props),
        };
    }
    getPath(props) {
        let path = props.location.pathname.substr(6).split("/").shift()
        // console.log(path)
        return path === '' ? 'study' : path
    }
    handleClick = (selectedTab) => {
        return () => {
            this.setState({
                selectedTab,
            })
            // console.log(this.props);
            this.props.history.push(`/home/${selectedTab}`)
            // console.log(this.state.selectedTab,this);
        }
    }
    //渲染完然改一次
    componentDidMount() {
        this.setState((state, props) => { return { selectedTab: this.getPath(this.props), } });
        // console.log(this.props);
    }
    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#666"
                    tintColor="#000"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="学烘培"
                        key="study"
                        icon={<div style={{
                            width: '25px',
                            height: '25px',
                            background: 'url(https://image.hongbeibang.com/FhngZoiK_s7Zw4K3DxLogRfqoO06?50X50&imageView2/1/w/50/h/50) center center /  25px 25px no-repeat'
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '25px',
                            height: '25px',
                            background: 'url(https://image.hongbeibang.com/FsxN7RUFRJ9Zdris5Z22haR2xIhj?50X50&imageView2/1/w/50/h/50) center center /  25px 25px no-repeat'
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'study'}
                        onPress={this.handleClick('study')}
                    >
                        <Switch>
                            <Route
                                path="/home/study"
                                render={() => (
                                    <StudyWrap>
                                        <Study></Study>
                                    </StudyWrap>
                                )}
                            />
                            <Redirect
                                exact
                                from="/home"
                                to="/home/study"
                            />
                        </Switch>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '25px',
                                height: '25px',
                                background: 'url(https://image.hongbeibang.com/Fkpdn7F9EWxvNeSS8M7V4_xbRPlf?50X50&imageView2/1/w/50/h/50) center center /  25px 25px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '25px',
                                height: '25px',
                                background: 'url(https://image.hongbeibang.com/Flc4c0tB_BGGFnA-ORFowqfNOpaD?50X50&imageView2/1/w/50/h/50) center center /  25px 25px no-repeat'
                            }}
                            />
                        }
                        title="烘培圈"
                        key="circle"
                        selected={this.state.selectedTab === 'circle'}
                        onPress={this.handleClick('circle')}
                    >
                        <Switch>
                            <Route
                                path="/home/circle"
                                render={(props) => (
                                    <CircleWrap>
                                        <Circle {...props}></Circle>
                                    </CircleWrap>)}
                            />
                            <Redirect
                                exact
                                from="/home/circle"
                                to="/home/circle/new"
                            />
                        </Switch>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '25px',
                                height: '25px',
                                background: 'url(https://image.hongbeibang.com/Flm_lYHJQA56h0VyhdRhQ1i5iO06?50X50&imageView2/1/w/50/h/50) center center /  25px 25px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '25px',
                                height: '25px',
                                background: 'url(https://image.hongbeibang.com/Fj5pW1jZYwlS9rB3h_nsvXNptuPX?50X50&imageView2/1/w/50/h/50) center center /  25px 25px no-repeat'
                            }}
                            />
                        }
                        title="问答"
                        key="questions"
                        selected={this.state.selectedTab === 'questions'}
                        onPress={this.handleClick('questions')}
                    >
                        <Switch>
                            <Route
                                path='/home/questions'
                                render={() => (
                                    <Questions></Questions>
                                )}
                            // component={ Questions}
                            />
                            <Route
                                path={'/home/questions/detail/:id'}
                                render={() => (
                                    <CircleDetails></CircleDetails>
                                )}
                            />
                        </Switch>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://image.hongbeibang.com/FrYeKj0MohOJQuNzUgCugg90cHCS?50X50&imageView2/1/w/50/h/50' }}
                        selectedIcon={{ uri: 'https://image.hongbeibang.com/FpNSY800vY0I5ytvWaqDbdJqT0HR?50X50&imageView2/1/w/50/h/50' }}
                        title="小窝"
                        key="my"
                        selected={this.state.selectedTab === 'my'}
                        onPress={this.handleClick('my')}
                    >
                        <Switch>
                            <Route
                                path='/home/my'
                                render={() => (
                                    <My></My>
                                )}
                            />
                        </Switch>
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default withRouter(Layout)