import React from 'react';
import Swiper from 'swiper';
// import { Carousel, WingBlank } from 'antd-mobile';
import { SwiperTextWrap } from './styledNew'


class Swipertext extends React.Component {
    state={

        bgc:['94BFBB','927472','E5AA9C','5BADA6','b78b9f','acbcc9','8f7671','acb99b','aca6bb','c3d0ad','94BFBB','927472','E5AA9C','5BADA6','b78b9f','acbcc9','8f7671','acb99b','aca6bb','c3d0ad'],

    }
    componentDidMount() {
        new Swiper('.he', {
            direction: 'horizontal', // 垂直切换选项
            loop: false, // 循环模式选项
            slidesPerView: 'auto',
            loopedSlides:10,
            slidesOffsetBefore: 18,
            freeMode: true,
            on: {
                click: function () {
                    //   alert('你点了Swiper');
                },
            },
            scrollbar: {
                el: '.scrollbar',
                hide: true,
            },
        })
       
  
    }
    render() {
        return (
            <SwiperTextWrap>
                <div className='banner'>
                    <div className='swiper-container he'>
                        <div className='swiper-wrapper'>
                            {this.props.textlist.map((value,index) => <div key={value.communityId} style={{background:'#'+this.state.bgc[index]}} className='swiper-slide'>{value.name}</div>)}
                        </div>
                        <div className="swiper-scrollbar scrollbar"></div>
                    </div>
                </div>
            </SwiperTextWrap>
        )
    }
}

export default Swipertext