import React, { Component } from 'react';
import { DetailsWarp } from '../styledOther'
import Swiper from '@/swiper/SwiperDet'
import { get } from 'utils/http'
import {withRouter} from 'react-router-dom'
class Details extends Component {
    state={
        detailsList:[],
        swiperList:[],
        studentWork:[],
        educationCourseId:this.getPath(this.props)
    }
    getPath(props){
        
        let path = props.location.pathname.substr(1).split('/').pop()
        return path
    }
    async  componentDidMount(){
        console.log(this.state.educationCourseId);
        
        let detailslist = await get({
            url:'/api/education/getCourse',
            params:{
                _t:'1577063427969',
                csrfToken:'',
                educationCourseId:this.state.educationCourseId
            }
        })
        let swiperlist = await get({
            url:'/api/course/getClientOtherCourse',
            params:{
                t:'1577063428596',
                csrfToken:'',
                pageIndex:'0',
                pageSize:'10',
                clientId:'2245326',
                educationCourseId:this.state.educationCourseId
            }
        })
        let studentWork = await get({
            url:'/api/dish/getOutstandingCourseContent',
            params:{
                t:'1577081510657',
                csrfToken:'',
                pageIndex:'0',
                pageSize:'10',
                educationCourseId:this.state.educationCourseId
            }
        })
        console.log(detailslist.data);
        this.setState({
            detailsList:detailslist.data,
            swiperList:swiperlist.data.data,
            studentWork:studentWork.data.content.data
        })
    }

    render() {
        console.log(this.state.detailsList.introduces);
        
        return (
            <DetailsWarp>
                <div className="video"></div>
                <div className="title">
                    <div className="title_text">{this.state.detailsList.shareTitle}</div>
                    <div className="people"><span className="peole_img"><img src="https://image.hongbeibang.com/FgRQxfAWq4kOdLc5xd_GxWm03Vs_?54X54&imageView2/1/w/54/h/54" alt="" /></span><span className="text"><span>1000+</span> 人在学</span></div>
                </div>
                <div className="list">
                    <div className="lists">
                        <div className="list_tap">
                            <div className="list_tap1">
                                <div className="list_d">
                                </div>
                                <div className="list_z">
                                    永久回看
                                </div>
                                <div className="list_d">
                                </div>
                                <div className="list_z">
                                    报名即学
                                </div>
                                <div className="list_d">
                                </div>
                                <div className="list_z">
                                    自营课程
                                </div>
                                <div className="list_d">
                                </div>
                                <div className="list_z">
                                    高效学习体验
                                </div>

                            </div>
                            <div className="list_tap2">
                                <div className="list_d">
                                </div>
                                <div className="list_z">
                                    分步骤学
                                </div>
                                <div className="list_d">
                                </div>
                                <div className="list_z">
                                    唯一品类
                                </div>
                                <div className="list_d">
                                </div>
                                <div className="list_z">
                                    图片下载
                                </div>
                                <div className="list_d">
                                </div>
                                <div className="list_z">
                                    工具材料参考
                                </div>

                            </div>
                        </div>
                        <div className="next">
                            <img src="https://image.hongbeibang.com/Fqee_DzmTrYWinRY2tMPfDtu1ym8" alt="" />
                        </div>
                    </div>
                </div>
                <div className="text_mian">
                    <div className="work_header">
                        <div className="work_header_title">
                            <div className="left">学员作业</div>
                            <div className="right">查看更多</div>
                        </div>
                        <div className="work_header_img">
                          {(this.state.studentWork?this.state.studentWork.slice(0,4).map((value)=>
                          <div key={value.contentId} className="work_header_imgList">
                            <img src={value.image[0]} alt="" />
                          </div>
                          ):'')}  
                        </div>
                    </div>
                    {(this.state.detailsList.introduces?this.state.detailsList.introduces.map(value=>
                    <div key={value.educationCourseSummaryExtendId} className="text_list">
                        <div className="text_list_title">
                        {value.title}
                        </div>
                        <div className="text_list_details">
                            
                            <div dangerouslySetInnerHTML={{__html: `${value.introduce}`}} />
                        </div>
                    </div>
                    ):'')} 
                    <div className="text_list">
                        <div className="text_list_title">
                        课程介绍
                        </div>
                        <div className="text_list_details">
                            {this.state.detailsList.shareDescription}
                        </div>
                    </div>
                    <div className="teacher">
                        <div className="teacher_title">导师介绍</div>
                        <div className="teacher_list">
                            <div className="teacher_img">
                                <img src={this.state.detailsList.teacherImage} alt="" />
                            </div>
                            <div className="teacher_name">
                            {this.state.detailsList.teacherName} 
                            </div>
                        </div>
                        <div className="teacher_text">
                        <div dangerouslySetInnerHTML={{__html: `${this.state.detailsList.teacherIntroduce}`}} />
                        </div>
                    </div>
                </div>
                <div className="other_teacher">
                    <div className="other_teacherHeader">
                        <div className="other_title">
                            <div>
                            导师的其他课程
                            </div>
                        </div>
                        <div className="all">
                            <div>
                            查看全部
                                
                            </div>
                        </div>
                    </div>
                    <div className="swiper">
                        <Swiper styleList={this.state.swiperList}></Swiper>
                    </div>
                </div>
                <div className="study">
                    <div className="study_title">
                        <img src="https://image.hongbeibang.com/FgyNuZ8yE795vzF-O4lGF3G5Caxr?551X245&imageView2/1/w/551/h/242" alt=""/>
                    </div>
                    <div className="study_text">
                    烘焙帮学堂，是由烘焙帮推出的课程品牌，通过官方自制的教学视频，用科学的烘焙配方、细致的步骤讲解、贴心的答疑服务，让烘焙更简单！
                    </div>
                    <div className="study_imgs">
                        <div className="study_img">
                            <div><img src="https://image.hongbeibang.com/FvihrbO1twdtKSkz2WqB9KxUjjeg?100X116&imageView2/1/w/100/h/116" alt=""/><span>蛋糕</span></div>
                        </div>
                        <div className="study_img">
                            <div><img src="https://image.hongbeibang.com/Frs8TmZhk4PrxBY2cvA9e3jbbdrB?100X116&imageView2/1/w/100/h/116" alt=""/><span>甜点</span></div>
                        </div>
                        <div className="study_img">
                            <div><img src="https://image.hongbeibang.com/ForyDTluoYKimnQmobG6agmowKzy?100X116&imageView2/1/w/100/h/116" alt=""/><span>面包</span></div>
                        </div>
                        <div className="study_img">
                            <div><img src="https://image.hongbeibang.com/FuCKHBljrYAFuTjTs0B1fkNcUhWw?100X116&imageView2/1/w/100/h/116" alt=""/><span>中式点心</span></div>
                        </div>
                    </div>
                </div>
                <div className="foot">
                    <div className="most">
                      <img src="https://image.hongbeibang.com/FjlY1hEsTozcG0oGvSXzNqRIc8gb?imageView2/1/w/640/h/640" alt=""/>
                        <span>更多课程</span>
                    </div>
                    <div className="most">
                    <img src="https://image.hongbeibang.com/FoOJzEIUP4G3Ub0wp_XeNNYIHH0s?imageView2/1/w/640/h/640" alt=""/>
                        <span>更多课程</span>
                    </div>
                    <div className="price">
                        <div>
                            ￥{this.state.detailsList.price}购买本课程
                        </div>
                    </div>
                </div>
            </DetailsWarp>
        );
    }
}

export default withRouter(Details);