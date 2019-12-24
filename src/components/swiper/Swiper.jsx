import React from 'react';
import Swiper from 'swiper';
// import { Carousel, WingBlank } from 'antd-mobile';
import { SwiperWrap } from './styledSwiper.'
// import { get } from 'utils/http'
import { Grid } from 'antd-mobile'
import {withRouter} from 'react-router-dom'
// import { log, logger } from 'handlebars';
class Swipermy extends React.Component {
    state={
        styleList:[],
    }

    handleDetails=(courseId)=>()=>{
        console.log(courseId);
        this.props.history.push({pathname:'/other/details/'+courseId})
        
    }
   async componentDidMount() {
            new Swiper('.swiper-container', {
                direction: 'horizontal', // 垂直切换选项
                loop: false, // 循环模式选项
                slidesPerView: 2.2,
                slidesOffsetBefore: 18,
                freeMode: true,
                // on:{
                //     click: function(){
                //       alert(`你点了${this.props.styleList[this.index].contentId}`);
                //     },
                //   },
                
            })
        
    }
    render() {
        console.log(this.props);  
        return (
            
            <SwiperWrap >
                <Grid />
                <h2>{this.props.title}</h2>
                <div className='banner'>
                    <div className='swiper-container'>
                        <div className='swiper-wrapper'>
                            {
                                this.props.styleList.map((value,index)=><div key={value.contentId} className='swiper-slide' onClick={this.handleDetails((value.courseId?value.courseId:value.educationCourseId))}><img src={(value.coverImage?value.coverImage:value.image)} alt="" /><div className="swiper_text">{(value.shareTitle?value.shareTitle:value.coverTitle)}</div><div className="people"><span>1000+</span>在学</div></div>)
                            }
                            
                        </div>
                    </div>
                </div>
                
                
        
            </SwiperWrap>
        )
    }
}

export default withRouter(Swipermy)