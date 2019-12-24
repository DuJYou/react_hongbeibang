import React, { Component } from 'react';
import BScroll from 'better-scroll'
// import Pullup from '@better-scroll/pull-up'
import { NewMain } from './styledNew'
import Swiper from './Swiper'
import SwiperText from './SwiperText'
import Content from './Content'
import { get } from 'utils/http'
class New extends Component {
    state = {
        List: [],
        textlist: [],
        userList: [],
        pageIndex: '0',
        switch: false
    }
    async componentDidMount() {

        let result = await get({
            url: '/api/feed/getCategory?',
            params: {
                _t: '1576333264069',
                csrfToken: ''
            }
        })
        let result1 = await get({
            url: '/api/community/getByLimit',
            params: {
                isShow: '4',
                _t: '1576333264308',
                pageIndex: '0',
                pageSize: '99'
            }
        })
        let result2 = await get({
            url: '/api/v2/feed/getNew',
            params: {
                _t: '1576499799233',
                pageIndex: this.state.pageIndex,
                pageSize: '10'
            }
        })
        this.setState({
            List: result.data.category[0].item,
            textlist: result1.data.data,
            userList: result2.data.content,
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
            let result2 = await get({
                url: '/api/v2/feed/getNew',
                params: {
                    _t: '1576499799233',
                    pageIndex: this.state.pageIndex,
                    pageSize: '10'
                }
            })
            bScroll.refresh()
            this.setState({
                userList: [
                    ...this.state.userList,
                    ...result2.data.content
                ]
            })
            bScroll.finishPullUp()
        })
    }
    render() {
        return (
            this.state.switch &&
            <NewMain>
                <div className="main">
                    <div>
                        <Swiper List={this.state.List}></Swiper>
                        <SwiperText textlist={this.state.textlist}></SwiperText>
                        <Content userList={this.state.userList}></Content>
                    </div>
                </div>

            </NewMain>
        );
    }
}

export default New;