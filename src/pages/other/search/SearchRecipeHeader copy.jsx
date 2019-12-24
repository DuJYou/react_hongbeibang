import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { HeaderTabsWarp } from './styledSearch'
class HeaderTabs extends Component {
    state = {
        dir: this.getPath(this.props)
    }
    getPath(props) {
        let path = props.location.pathname.substr(0).split('/').pop()
        console.log(1,props.location.pathname.substr(1).split('/'));

        console.log(2,path);
        return path === (''||'recipe')? 'compre' : path
    }
    handleClick = (dir) => {
        return () => {
            this.setState({
                dir
            })
            console.log(this.props);
            this.props.history.push(`${this.props.match.path}/${dir}`)
        }
    }
    render() {
        return (
            <div>
                <HeaderTabsWarp>
                    <li
                        onClick={this.handleClick('compre')}
                        className={this.state.dir === 'compre' ? 'active' : ''}
                    >综合排序</li>
                    <li
                        onClick={this.handleClick('most')}
                        className={this.state.dir === 'most' ? 'active' : ''}
                    >做过最多</li>
                    <li
                        onClick={this.handleClick('expert')}
                        className={this.state.dir === 'expert' ? 'active' : ''}
                    >大人食谱</li>
                </HeaderTabsWarp>

            </div>
        );
    }
}

export default withRouter(HeaderTabs);