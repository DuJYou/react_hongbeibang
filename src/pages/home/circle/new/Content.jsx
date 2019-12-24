import React, { Component } from 'react';
import { ContentWrap } from './styledNew'
import {withRouter} from 'react-router-dom'
class Content extends Component {
    //点击进入下面的教学详情
    handleDetail=(contentId)=>()=>{
        this.props.history.push({pathname:'/other/circledetails/'+contentId})
    }
    handleDish=(contentId)=>()=>{
        this.props.history.push({pathname:'/other/dishDetails/'+contentId})
    }
    render() {
        console.log(this.props.userList);
        return (
            <ContentWrap>
                {this.props.userList.map(value => <div key={value.contentId}  className="Contentlist">
                    <div className="userlist">
                        <div className="userImg"><img src={value.clientImage} alt="" /> </div>
                        <div className="userName">{value.clientName}</div>
                        <div className="userTime"><span>1分钟前</span><span>Hello kitty 奶油生日蛋糕(6寸)</span> </div>
                    </div>
                    <div className="content" onClick={this.handleDish(value.contentId)}>
                        <div className="contentText">{value.communityName}{value.introduce}</div>
                        <div className="imgList">
                            {value.image.length===1&&
                            value.image.map((value, index) =>  <div key={value + index} className="contentImg one"><img className="one" key={index} src={value} alt="" /></div>)
                            }
                            {value.image.length===2&&
                            value.image.map((value, index) =>  <div key={value + index} className="contentImg two"><img className="one" key={index} src={value} alt="" /></div>)
                            }
                            {value.image.length===3&&
                            value.image.map((value, index) =>  <div key={value + index} className="contentImg three"><img className="one" key={index} src={value} alt="" /></div>)
                            }
                            {value.image.length===4&&
                            value.image.map((value, index) =>  <div key={value + index} className="contentImg four"><img className="one" key={index} src={value} alt="" /></div>)
                            }
                            {value.image.length>4&&
                            value.image.map((value, index) =>  <div key={value + index} className="contentImg other"><img className="one" key={index} src={value} alt="" /></div>)
                            }
                        </div>
                    </div>
                    {value.recipe.clientId !== 0 && <div  onClick={this.handleDetail(value.recipe.contentId)} className="kind">
                        <div className="kindImg">
                            <img src={value.recipe.image} alt="" />
                        </div>
                        <div className="kindName">{value.recipe.title}</div>
                        <div className="kindAuthor"><span>作者:</span><span>{value.recipe.clientName}</span> </div>
                    </div>
                    }
                    <div className="handle">
                        <div><span className="handleImg"><img src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38" alt="" /></span><span className="handleText">1</span></div>
                        <div><span className="handleImg"><img src="https://image.hongbeibang.com/Fi6E0gsACPeVV5_xgH5JBn6PN45m?200X200&imageView2/1/w/38/h/38" alt="" /></span><span className="handleText">打赏</span></div>
                        <div><span className="handleImg"><img src="https://image.hongbeibang.com/FiZ5-B7_rmV_gnPl97P-FkpjSlij?200X200&imageView2/1/w/38/h/38" alt="" /></span><span className="handleText">评论</span></div>
                    </div>
                </div>)}
            </ContentWrap>
        );
    }
}

export default withRouter(Content);