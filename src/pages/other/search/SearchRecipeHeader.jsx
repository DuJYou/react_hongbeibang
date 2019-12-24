import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { HeaderTabsWarp } from './styledSearch'
import {connect} from 'react-redux'

const mapState =state=>{
    return {
        sort:state.other.sort
    }
}
const dispathcare= dispatch =>({
    loadData(dir) {
        dispatch({
            type: 'loadDate',
            dir:dir
        })
    }
})
class HeaderTabs extends Component {
    state = {
        dir: this.getPath(this.props),
        sort: '',
    }
    getPath(props) {
        let path = props.location.pathname.substr(14).split('/').shift()
        console.log('path',path,props.location.pathname.substr(14).split('/'));
        
        return path === ('' || 'recipe') ? '' : path
    }
    handleClick = (dir) => {
        //sort=dishNum最多sort=master达人sort=''综合
        return async() => {
           await this.setState({
                dir:dir
            })
            this.props.loadData(this.state.dir)
        }
    }
    componentDidMount() {

    }
    render() {

        return (
            <div>
                <HeaderTabsWarp>
                    <li
                        onClick={this.handleClick('')}
                        className={this.state.dir === '' ? 'active' : ''}
                    >综合排序</li>
                    <li
                        onClick={this.handleClick('dishNum')}
                        className={this.state.dir === 'dishNum' ? 'active' : ''}
                    >做过最多</li>
                    <li
                        onClick={this.handleClick('master')}
                        className={this.state.dir === 'master' ? 'active' : ''}
                    >达人食谱</li>
                </HeaderTabsWarp>

            </div>
        );
    }
}

export default connect(mapState,dispathcare)(withRouter(HeaderTabs))