import React, { Component } from 'react';
import { HeaderWarp } from './styledOther'
import { withRouter } from 'react-router-dom'
import { get } from 'utils/http'
import { LessonWarp } from './styledOther'
class LessonSeries extends Component {
    state = {
        list: []
    }
    hindleClick = () => {
        return this.props.history.push(`/home/study`);
    }

    async  componentDidMount() {

        let lists = await get({
            url: '/api/education/getCourse',
            params: {
                _t: '1577447168059',
                csrfToken: '',
                educationCourseId: '10533'
            }
        })
        this.setState({
            list: lists.data
        })
    }
    render() {
        return (
            <div style={{ height: '100%' }}>
                <HeaderWarp>
                    <div className="header">
                        <div className="img" onClick={this.hindleClick}>
                            <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" />
                        </div>
                    </div>
                </HeaderWarp>
                <LessonWarp>
                    <div>
                        <div className="video">
                            <img src={this.state.list.image} alt="" />
                        </div>
                        <div className="title">
                            <div className="title_text">{this.state.list.title}</div>
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
                            {(this.state.list.introduces ? this.state.list.introduces.map(value =>
                                <div key={value.educationCourseSummaryExtendId} className="text_list">
                                    <div className="text_list_title">
                                        {value.title}
                                    </div>
                                    <div className="text_list_details">
                                        <div  dangerouslySetInnerHTML={{ __html: `${value.introduce}` }} />
                                    </div>
                                </div>
                            ) : '')}
                        </div>
                        <div className="study">
                            <div className="study_title">
                                <img src="https://image.hongbeibang.com/FgyNuZ8yE795vzF-O4lGF3G5Caxr?551X245&imageView2/1/w/551/h/242" alt="" />
                            </div>
                            <div className="study_text">
                                烘焙帮学堂，是由烘焙帮推出的课程品牌，通过官方自制的教学视频，用科学的烘焙配方、细致的步骤讲解、贴心的答疑服务，让烘焙更简单！
                        </div>
                            <div className="study_imgs">
                                <div className="study_img">
                                    <div><img src="https://image.hongbeibang.com/FvihrbO1twdtKSkz2WqB9KxUjjeg?100X116&imageView2/1/w/100/h/116" alt="" /><span>蛋糕</span></div>
                                </div>
                                <div className="study_img">
                                    <div><img src="https://image.hongbeibang.com/Frs8TmZhk4PrxBY2cvA9e3jbbdrB?100X116&imageView2/1/w/100/h/116" alt="" /><span>甜点</span></div>
                                </div>
                                <div className="study_img">
                                    <div><img src="https://image.hongbeibang.com/ForyDTluoYKimnQmobG6agmowKzy?100X116&imageView2/1/w/100/h/116" alt="" /><span>面包</span></div>
                                </div>
                                <div className="study_img">
                                    <div><img src="https://image.hongbeibang.com/FuCKHBljrYAFuTjTs0B1fkNcUhWw?100X116&imageView2/1/w/100/h/116" alt="" /><span>中式点心</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="foot">
                            <div className="most">
                                <img src="https://image.hongbeibang.com/FjlY1hEsTozcG0oGvSXzNqRIc8gb?imageView2/1/w/640/h/640" alt="" />
                                <span>更多课程</span>
                            </div>
                            <div className="most">
                                <img src="https://image.hongbeibang.com/FoOJzEIUP4G3Ub0wp_XeNNYIHH0s?imageView2/1/w/640/h/640" alt="" />
                                <span>更多课程</span>
                            </div>
                            <div className="price">
                                <div>
                                    ￥{this.state.list.price}购买本课程
                        </div>
                            </div>
                        </div>
                    </div>
                </LessonWarp>
            </div>
        );
    }
}

export default withRouter(LessonSeries);