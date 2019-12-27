import React, { Component } from 'react';
import { QuintessenceWrap } from './styledQuestons'
import BScroll from 'better-scroll'
import { get } from 'utils/http'
class Quintessence extends Component {
    state = {
        QuintessenceList: [],
        pageIndex: '0',
        switch: false
    }
    async componentDidMount() {
        let result = await get({
            url: '/api/question/getEssence',
            params: {
                _t: '1576508351928',
                pageIndex: '0',
                pageSize: '10'
            }
        })
        console.log(result.data.content.data);
        this.setState({
            QuintessenceList: result.data.content.data,
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
                url: '/api/question/getEssence',
                params: {
                    _t: '1576508351928',
                    pageIndex: '0',
                    pageSize: '10'
                }
            })
            bScroll.refresh()
            this.setState({
                QuintessenceList: [
                    ...this.state.QuintessenceList,
                    ...result.data.content.data
                ]
            })
            bScroll.finishPullUp()
        })
    }
    render() {
        return (
            <QuintessenceWrap>
                {this.state.QuintessenceList.map(value => <div key={value.contentQuestionAnswerTimelineId} className="Quintessence">
                    <div className="userinfo">
                        <div className="img">
                            <img src={value.clientImage} alt="" />
                        </div>
                        <div className="username">{value.clientName}</div>
                    </div>
                    <div className="text">
                        <div className="textName">
                            {value.coverTitle}
                        </div>
                        <div className="textContent">
                            {value.coverSummary}
                        </div>
                    </div>
                    <div className="zan">{value.likeNum}个赞</div>
                </div>
                )}
            </QuintessenceWrap>
        );
    }
}

export default Quintessence;