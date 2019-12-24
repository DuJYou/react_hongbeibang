import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Header from './Header'


import { HeaderTabsWarp } from './styledQuestons'
class HeaderTabs extends Component {
    state = {
        dir: this.getPath(this.props)
    }
    getPath(props) {
        let path = props.location.pathname.substr(1).split('/').pop()
        console.log(path);
        return path ===  'questions' ? 'newQuestons' : path
    }
    handleClick = (dir) => {
        return () => {
            this.setState({
                dir
            })
            console.log( this.props);
            this.props.history.push(`${this.props.match.path}/${dir}`)
        }
    }
    render() {
        return (
            <div>
                <Header></Header>
                <HeaderTabsWarp>
                    <li
                        onClick={this.handleClick('quintessence')}
                        className={this.state.dir === 'quintessence' ? 'active' : ''}
                    >精华问答</li>
                    <li
                        onClick={this.handleClick('newQuestons')}
                        className={this.state.dir === 'newQuestons' ? 'active' : ''}
                    >最新问题</li>
                    <li
                        onClick={this.handleClick('hotQuestons')}
                        className={this.state.dir === 'hotQuestons' ? 'active' : ''}
                    >最热问题</li>
                </HeaderTabsWarp>

            </div>
        );
    }
}

export default withRouter(HeaderTabs);