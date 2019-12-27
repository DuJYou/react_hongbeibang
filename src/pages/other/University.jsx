import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { UniveWarp } from './styledOther'
import Swiper from '@/swiper/Swiper'
import { get } from 'utils/http'
class University extends Component {
    hindleClick = () => {
        return this.props.history.push(`/home/study`);
    }
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
                _t: '1577111677237',
                csrfToken: '',
                type: '3',
                pageSize: '10'
            }
        })
        this.setState({
            swiperList: swpierlist.data.data,
            styleList: result.data.category
        })
    }
    render() {
        return (
            <div style={{ height: '100%' }}>
                <UniveWarp>
                    <div className="header">
                        <div className="img" onClick={this.hindleClick}>
                            <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" />
                        </div>
                    </div>
                    <div className="main">
                     
                            
                       
                            
                        <Swiper styleList={this.state.swiperList}></Swiper>
                        {this.state.styleList.slice(1).map((value, index) => <Swiper styleList={value.item} title={value.title} key={value.categoryId}></Swiper>)}
                  
                       
                    </div>
                </UniveWarp>
            </div>
        )
    }
}
export default withRouter(University);