import React from 'react';
import Swiper from 'swiper';
// import { Carousel, WingBlank } from 'antd-mobile';
import {withRouter} from 'react-router-dom'
import { SwiperWrap } from './styledNew'
class Swipermy extends React.Component {
    componentDidMount() {
    
        new Swiper('.swiper-container', {
                direction: 'horizontal', // 垂直切换选项
                loop: false, // 循环模式选项
                slidesPerView: 2.3,
                slidesOffsetBefore: 18,
                freeMode: true,
                on:{
                    click: function(){
                    //   alert('你点了Swiper');
                    },
                  },
                  scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true,
                  },
            })
        
    }
    render() {
       
        
        return (
            <SwiperWrap
            width="1px"
            color="#ccc"
            direction="bottom"
            >
                <div className='banner'>
                    <div className='swiper-container'>
                        <div className='swiper-wrapper'>
                        {this.props.List.map((value) => <div key={value.activityContentId}  className='swiper-slide'><img src={value.image} alt="" /></div>)}
                            
                        </div>
                    <div className="swiper-scrollbar"></div>
                    </div>
                </div>
            </SwiperWrap>
        )
    }
}

export default withRouter(Swipermy)