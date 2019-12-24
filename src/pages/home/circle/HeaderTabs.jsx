import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { HeaderWrap } from './styledCircle'


// @withRouter
class HeaderTabs extends Component {
  state = {
    dir: this.getPath(this.props)
  }
  getPath(props) {
    let path = props.location.pathname.substr(1).split("/").pop()
    //判单 如果path为空或者circle  让它初始显示new
    return (path === '' ? 'new' : path) === 'circle' ? 'new' : path
  }
  handleClick = (dir) => {
    return () => {
      this.setState({
        dir
      })
      this.props.history.push(`${this.props.match.path}/${dir}`)
    }
  }
  render() {
    return (
      <HeaderWrap>
        <li
          onClick={this.handleClick('attention')}
          className={this.state.dir === 'attention' ? 'active' : ''}
        >关注</li>
        <li
          onClick={this.handleClick('new')}
          className={this.state.dir === 'new' ? 'active' : ''}
        >最新</li>
        <li
          onClick={this.handleClick('expert')}
          className={this.state.dir === 'expert' ? 'active' : ''}
        >达人</li>
      </HeaderWrap>

    );
  }
}
export default withRouter(HeaderTabs);