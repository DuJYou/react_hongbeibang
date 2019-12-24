import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import {NavWrap} from './styledStudy'
class Nav extends Component {
handleClick(e){
    return this.props.history.push(`/other/${e}`)
}

    render() {
        return (
            <NavWrap>
                <ul className="headerNav">
                    <li onClick={() => this.handleClick('baike')}> 
                        <div className="navImg"> 
                            <img src="https://image.hongbeibang.com/Fl493FjRZluXqCNJnvhRYw_IGKZO?80X80&imageView2/1/w/80/h/80" alt="" />
                        </div>
                        <span className="text">技巧百科</span>
                    </li>
                    <li onClick={() => this.handleClick('university')}> 
                        <div className="navImg">
                            <img src="https://image.hongbeibang.com/Fp0nBR7-xD2caoLENB7qZgmu9vZT?80X80&imageView2/1/w/80/h/80" alt="" />
                        </div>
                        <span className="text">视频学堂</span>
                    </li>
                    <li onClick={() => this.handleClick('lessonSeries')}> 
                        <div className="navImg">
                            <img src="https://image.hongbeibang.com/FkU-5lDUu7y7CurjkdJYWh-ZIg3x?80X80&imageView2/1/w/80/h/80" alt="" />
                        </div>
                        <span className="text">新手教程</span>
                    </li>
                    <li onClick={() => this.handleClick('classify')}> 
                        <div className="navImg">
                            <img src="https://image.hongbeibang.com/FkcHmIr5rX7zXeHET_Rew64lVrgx?80X80&imageView2/1/w/80/h/80" alt="" />
                        </div>
                        <span className="text">食谱分类</span>
                    </li>
                </ul>
            </NavWrap>
        );
    }
}

export default withRouter(Nav);