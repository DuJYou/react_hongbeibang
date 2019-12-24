import React, { Component } from 'react';
import Header from './Header'
import Nav from './Nav'
import { Main } from './styledStudy'
import Swiper from '@/swiper/Swiper'
import { get } from 'utils/http'
class Study extends Component {
    state = {
        swiperList: [],
        styleList: []
    }
    async componentDidMount() {
        let result = await get({
            url: '/api/education/getIndexByWeb',
            params: {
                _t: '1575982491207',
                csrfToken: '',
            }
        })
        let swpierlist = await get({
            url: '/api/recommend/getRandContent',
            params: {
                _t:1577111677237,
                csrfToken:'',
                type:3,
                pageSize:10
            }
        })
        this.setState({
           
            swiperList: swpierlist.data.data,
            styleList:  result.data.category
        })
    }
    render() {
        console.log(1,this.state.swiperList);
        console.log(2,this.state.styleList);
        
        return (
            <div className="main">
                <Header></Header>
                <Main>
                    <Nav></Nav>
                    <Swiper styleList={this.state.swiperList}></Swiper>
                    {this.state.styleList.slice(1).map((value,index) => <Swiper styleList={value.item} title={value.title} key={value.categoryId}></Swiper>)}
                </Main>
            </div>
        );
    }
    componentWillUnmount() {
        this.setState((state, props) => { return {} });
    }
}
export default Study;