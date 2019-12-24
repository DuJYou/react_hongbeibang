import React from 'react';
import Swiper from 'swiper';
// import { Carousel, WingBlank } from 'antd-mobile';
import { SwiperWrap } from './styledSwiper.'
// import { get } from 'utils/http'
import { Grid } from 'antd-mobile'
// import { log, logger } from 'handlebars';
class Swipermy extends React.Component {

    async componentDidMount() {
        new Swiper('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: false, // 循环模式选项
            slidesPerView: 2.2,
            slidesOffsetBefore: 18,
            freeMode: true,
            observer: true,//修改swiper自己或子元素时，自动初始化swiper 
            observeParents: false,//修改swiper的父元素时，自动初始化swiper 
            onSlideChangeEnd: function (swiper) {
                swiper.update();// 更新Swiper，这个方法包含了updateContainerSize，updateSlidesSize，updateProgress，updatePagination，updateClasses方法。也就是数据改变是重新初始化一次swiper；
            },
            on: {
                click: function () {
                    //   alert('你点了Swiper');
                },
            },

        })

    }
    render() {
        console.log(this.props);
        return (

            <SwiperWrap >
                <Grid />
                {this.props.styleList &&
                    <div className='banner'>
                        <div className='swiper-container'>
                            <div className='swiper-wrapper'>
                                {
                                    this.props.styleList.map((value) => <div key={value.contentId} className='swiper-slide'><img src={value.image} alt="" /><div className="swiper_text">{value.shareTitle}</div><div className="people"><span>1000+</span>在学</div></div>)
                                }

                            </div>
                        </div>
                    </div>
                }



            </SwiperWrap>
        )
    }













    //   state = {
    //     data: ['1', '2', '3', '4'],
    //     imgHeight: 270,
    //     imgWidth: 160,
    //   }
    // //   componentDidMount() {
    // //     // simulate img loading
    // //     setTimeout(() => {
    // //       this.setState({
    // //         data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI', 'IJOtIlfsYdTyaDTRVrLI'],
    // //       });
    // //     }, 100);
    // //   }
    //   render() {
    //     return (
    //         <SwiperWrap>
    //       <WingBlank>
    //           <h2>推荐课程</h2>
    //         <Carousel className="space-carousel"
    //           frameOverflow="scroll"
    //           cellSpacing={10}
    //           slideWidth="160px"
    //           autoplay={false}
    //           infinite={false}
    //           dots={false}
    //         //   beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
    //           afterChange={index => this.setState({ slideIndex: index })}
    //         >
    //           {this.state.data.map((val, index) => (
    //             <a
    //               key={val}
    //               href="http://www.alipay.com"
    //               style={{
    //                 display: 'block',
    //                 height: this.state.imgHeight,
    //                 boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
    //               }}
    //             >
    //               <img
    //                 src={`https://image.hongbeibang.com/FnT_YYVIsriTSVmtwdKZ2IyuoO97?640X900&imageView2/1/w/640/h/896`}
    //                 alt=""
    //                 style={{ width: '100%',height:'100%', verticalAlign: 'top' }}
    //                 onLoad={() => {
    //                   // fire window resize event to change height
    //                   window.dispatchEvent(new Event('resize'));
    //                   this.setState({ imgHeight: 'auto' });
    //                 }}
    //               />
    //               <div className="swiper_text">11111</div>
    //             </a>
    //           ))}
    //         </Carousel>
    //       </WingBlank>
    //       </SwiperWrap>
    //     );
    //   }
}

export default Swipermy