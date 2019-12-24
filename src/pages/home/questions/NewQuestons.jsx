import React, { Component } from 'react';
import {Answer} from './styledQuestons'
import BScroll from 'better-scroll'
import { get } from 'utils/http'
import {withRouter} from 'react-router-dom'
class newQuestons extends Component {
    state = {
        newList: [],
        pageIndex:'0',
        switch: false
    }
    handleDetail=(recipeContentId)=>()=>{
        this.props.history.push({pathname:'/other/circledetails/'+recipeContentId})
    }
    async componentDidMount() {
        let result = await get({
            url: '/api/question/getNew',
            params:{
                _t:'1576508253808',
                pageIndex:'0',
                pageSize:'10'
            }
        })
        this.setState({                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
            newList: result.data.content.data,
            switch: true
        })

         //上拉加载数据
         let wrapper = document.querySelector('.main')
         let bScroll = new BScroll(wrapper, {
             scrollY: true,
             pullUpLoad: true,
             click: true,
         })
         bScroll.on('pullingUp', async () => {
             this.state.pageIndex = this.state.pageIndex + 10
             let result = await get({
                url: '/api/question/getNew',
                params:{
                    _t:'1576508253808',
                    pageIndex:this.state.pageIndex,
                    pageSize:'10'
                }
            })
             bScroll.refresh()
             this.setState({
                newList: [
                     ...this.state.newList,
                     ... result.data.content.data
                 ]
             })
             bScroll.finishPullUp()
         })
    }
    render(){
        return (
            <div className="questionMain">
            <Answer>
                {this.state.newList.map(value =><div key={value.contentQuestionId} onClick={this.handleDetail(value.recipeContentId)} className="Answer"> <div className="text">{value.title}</div>
                    {value.recipe.clientId !== 0 && 
                    <div className="kind">
                        <div className="kindImg">
                            <img src={value.recipe.image} alt="" />
                        </div>
                        <div className="kindName">{value.recipe.title}</div>
                        <div className="kindAuthor"><span>作者:</span><span>{value.recipe.clientName}</span> </div>
                    </div>
                    }
                    
                    <div className="answer">
                        <div className="answerNumber">{value.answerNum}个回答</div>
                        <span className="answerContent">
                            <span className="img"><img src="https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40" alt="" /></span>
                            <span className="answerText">写答案</span>
                        </span>
                    </div>
                    </div>
        )}
            </Answer>
            </div>
        );
    }
}

export default withRouter(newQuestons);