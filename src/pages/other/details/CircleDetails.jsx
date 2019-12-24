import React, { Component } from 'react';
import { CircleDetailsWarp } from '../styledOther'
import { get } from 'utils/http'
import { withRouter } from 'react-router-dom'
import creatHistory from 'history/createHashHistory'
class CircleDetails extends Component {
    state = {
        details: [],
        contentId: this.getPath(this.props)
    }
    getPath(props) {
        let path = props.location.pathname.substr(1).split('/').pop()
        return path
    }
    backClick(){
        return this.props.history.go(-1)
   }
    async componentDidMount() {
        const history = creatHistory();
        console.log(history);
        
// history.goBack();
        let detail = await get({
            url: '/api/recipe/get',
            params: {
                _t: '1577090819770',
                csrfToken: '',
                contentId: this.state.contentId,
                quantity: ''
            }
        })
        console.log(detail.data.recipe);
        this.setState({
            details: detail.data.recipe
        })
    }


    render() {
        console.log(this.props);
        

        return (
            <CircleDetailsWarp>
                
                    <div className="header">
                        <div className="fh" onClick={this.backClick.bind(this)}><img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" /> </div>
                        <div className="sc">
                            <div>
                                收藏
                        </div>
                        </div>
                    </div>
                    {this.state.details &&
                    <div className="main">
                        <div className="main_header">
                            <div className="img">
                                <img src={this.state.details.coverImage} alt="" />
                            </div>
                            <div className="title">
                                <div className="title_text">
                                    {this.state.details.coverTitle}
                                </div>
                                <div className="author">
                                    <div className="author_img">
                                        <img src={this.state.details.clientImage} alt="" />
                                    </div>
                                    <div className="author_name">{this.state.details.clientName}</div>
                                    <div className="author_gz">关注</div>
                                </div>
                            </div>
                        </div>
                        <div className="sheet">
                        </div>
                        <div className="step">
                            {(this.state.details.step ? this.state.details.step.map((value, index) =>
                                <div key={value.contentRecipeStepId} className="stepList">
                                    <div className="title">步骤{index + 1}</div>
                                    <div className="img">
                                        <img src={value.image} alt="" />
                                    </div>
                                    <div className="text">
                                        {value.text}
                                    </div>
                                </div>
                            ) : '')}

                            <div className="tips">
                                小贴士
                        </div>
                            <div className="tips_text">
                                <p>1：制作蛋糕卷的关键是在对蛋白的打发，蛋糕卷对蛋白的打发要求是湿性发泡状态，也就是过程图中软弯钩的状态，用这样的蛋白霜制作蛋糕坯，卷起来就不会开裂，如果蛋白不小心打硬了，可以参考步骤16的方法，用刀子轻轻划一下蛋糕胚，这样也能帮助卷起</p>
                            </div>
                            <div className="up">
                                <span className="img"><img src="https://image.hongbeibang.com/FstDrTWNqnY76dJTq964YhL5zr2A?200X200&imageView2/1/w/48/h/48" alt="" /></span>
                                <span className="text">上传我的作品</span>
                            </div>
                        </div>
                    </div>}
            </CircleDetailsWarp>
        );
    }
}

export default withRouter(CircleDetails);