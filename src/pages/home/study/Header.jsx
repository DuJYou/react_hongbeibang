import React, { Component } from 'react';
import { HeaderWrap } from './styledStudy'
import { withRouter } from 'react-router-dom'

class Header extends Component {
    handleClick(e) {
        return this.props.history.push(`/other/${e}`)
    }
    render() {
        return (
            <div>
                <HeaderWrap>
                    <div className="box">
                        <span onClick={() => this.handleClick('uploading')}>+</span>
                        <div onClick={() => this.handleClick('search')} className="search"><div><img src="https://image.hongbeibang.com/FltPAS-35CZfvSpnHacXWoqcfFz5?42X42&imageView2/1/w/42/h/42" alt="" /></div>    搜索食谱/食材，烘焙/家常菜一应俱全</div>
                        <div onClick={() => this.handleClick('information')} className="img"><img src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48" alt="" /></div>
                    </div>
                </HeaderWrap>
            </div>
        );
    }
}

export default withRouter(Header);