import React, { Component } from 'react';
import { DishDetailssWarp } from '../styledOther'
import {withRouter} from 'react-router-dom'
import { get } from 'utils/http'
class DishDetails extends Component {
    state = {
        dishList: [],
        contentId: this.getPath(this.props),
        switch: false
    }
    getPath(props){
        
        let path = props.location.pathname.substr(1).split('/').pop()
        return path
    }
    backClick(){
        return this.props.history.go(-1)
   }
    async componentDidMount() {
        let dish = await get({
            url: '/api/dish/get',
            params: {
                _t: '1577157783760',
                csrfToken: '',
                contentId: this.state.contentId
            }
        })
        // console.log(dish.data.dish);
        this.setState({
            dishList: dish.data.dish,
            switch: true
        })
    }



    render() {
        // console.log(this.state.dishList);

        return (
            this.state.switch &&
            <DishDetailssWarp>
                <div className="header">
                    <div onClick={this.backClick.bind(this)} className="img">
                        <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" />
                    </div>
                    <div className="name">
                        作品
                    </div>
                </div>
                <div className="user">
                    <div className="userImg">
                        <img src={this.state.dishList.clientImage} alt="" />
                    </div>
                    <div className="userName">
                        {this.state.dishList.clientName}
                    </div>
                    <div className="userTime">
                        <span>3分钟前</span><span>{this.state.dishList.coverTitle}</span>
                    </div>
                    <div className="userGz">+关注</div>
                </div>
                <div className="imgList">
                
                    {
                        this.state.dishList.image.length === 1 &&
                        this.state.dishList.image.map((value, index) => <div key={value + index} className="contentImg one"><img className="one" key={index} src={value} alt="" /></div>)
                    }
                    {this.state.dishList.image.length === 2 &&
                        this.state.dishList.image.map((value, index) => <div key={value + index} className="contentImg two"><img className="one" key={index} src={value} alt="" /></div>)
                    }
                    {this.state.dishList.image.length === 3 &&
                        this.state.dishList.image.map((value, index) => <div key={value + index} className="contentImg three"><img className="one" key={index} src={value} alt="" /></div>)
                    }
                    {this.state.dishList.image.length === 4 &&
                        this.state.dishList.image.map((value, index) => <div key={value + index} className="contentImg four"><img className="one" key={index} src={value} alt="" /></div>)
                    }
                    {this.state.dishList.image.length > 4 &&
                        this.state.dishList.image.map((value, index) => <div key={value + index} className="contentImg other"><img className="one" key={index} src={value} alt="" /></div>)
                    }
                </div>
                <div className="workName">
                    <div className="text">{this.state.dishList.title}</div>
                    <div className="most">
                        <div className="mostText">找食谱</div>
                        <div className="mostImg"><img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/50/h/50" alt="" /></div>
                    </div>
                </div>
                <div className="action">
                    <div className="dz">点赞</div>
                    <div className="ds">打赏</div>
                    <div className="comments active">评论</div>
                </div>
                <div className="commentsList">
                    快来发表你的评论吧
                </div>
                <div className="handle">
                    <div><span className="handleImg"><img src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38" alt="" /></span><span className="handleText">1</span></div>
                    <div><span className="handleImg"><img src="https://image.hongbeibang.com/Fi6E0gsACPeVV5_xgH5JBn6PN45m?200X200&imageView2/1/w/38/h/38" alt="" /></span><span className="handleText">打赏</span></div>
                    <div><span className="handleImg"><img src="https://image.hongbeibang.com/FiZ5-B7_rmV_gnPl97P-FkpjSlij?200X200&imageView2/1/w/38/h/38" alt="" /></span><span className="handleText">评论</span></div>
                </div>
            </DishDetailssWarp>

        );
    }
}

export default withRouter(DishDetails);