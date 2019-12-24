import React, { Component } from 'react';
import {HeaderWarp} from './styledQuestons'
class Header extends Component {
    render() {
        return (
            <HeaderWarp>
            <div className="header">
                <span>提问</span>
                <div className="search">搜索问题</div>
                <div className="img"><img src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48" alt="" /></div>
            </div>
            
            </HeaderWarp>
        );
    }
}

export default Header;