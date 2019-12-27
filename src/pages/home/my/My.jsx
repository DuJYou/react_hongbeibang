import React, { Component } from 'react';
import { MyWrap } from './styledMy'
class My extends Component {
    render() {
        return (
            <MyWrap>
                <div className="hearder">
                    <div className="set"><img src="https://image.hongbeibang.com/FthUBRvh6uWFq7omAeGtn8A-0E4s?48X48&imageView2/1/w/48/h/48" alt="" /></div>
                </div>
                <div className="userMain">
                    <div className="user">
                        <div className="userinfo">
                            <div className="img">
                                <img src="" alt="" />
                            </div>
                            <div className="userlist">
                                <div className="username">请登录</div>
                                <div className="ID">ID：请登录</div>
                                <div className="experience">经验值:0</div>
                                <div className="more"><img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="" /></div>
                            </div>
                        </div>
                        <div className="fans"> <ul>
                            <li><span className="fansNumber">0</span><span>关注</span></li>
                            <li><span className="fansNumber">0</span><span>粉丝</span></li>
                            <li><span className="fansNumber">0</span><span>帮贡</span></li>
                        </ul></div>
                        <div className="works">
                            <ul>
                                <li><span className="workImg"><img src="https://image.hongbeibang.com/FgyV7GBC4RPoagtZnK-npLaoB1N6?160X160&imageView2/1/w/80/h/80" alt="" /> </span><span>作品</span> </li>
                                <li><span className="workImg"><img src="https://image.hongbeibang.com/FhxeeHCgOPEcoLPR3sP6XNbybdvK?160X160&imageView2/1/w/80/h/80" alt="" /> </span><span>食谱</span> </li>
                                <li><span className="workImg"><img src="https://image.hongbeibang.com/FkmRCthKDaI5Afc_NdkTZaqNLPE1?160X160&imageView2/1/w/80/h/80" alt="" /> </span><span>收藏</span> </li>
                                <li><span className="workImg"><img src="https://image.hongbeibang.com/FgKxvkwdg8OOr9mhPok2JBVnCG2n?160X160&imageView2/1/w/80/h/80" alt="" /> </span><span>问题</span> </li>
                            </ul>
                        </div>

                    </div>
                    <div className="list_1">
                        <ul>
                            <li><span><img src="https://image.hongbeibang.com/FpFAELJdsHHxStgBnhPdgYgGmAYo?48X48&imageView2/1/w/48/h/48" alt="" /></span><span className="list1_text">勋章库  </span><span><img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt=""/></span></li>
                            <li><span><img src="https://image.hongbeibang.com/FjqJkpwIsLMWXY0LsNTSRG853oJR?48X48&imageView2/1/w/48/h/48" alt="" /></span><span className="list1_text">精彩活动</span><span><img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt=""/></span></li>
                            <li><span><img src="https://image.hongbeibang.com/Fu1OwEAsExJ20OHVI2ZqBEtLtubY?48X48&imageView2/1/w/48/h/48" alt="" /></span><span className="list1_text">每日签到</span><span><img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt=""/></span></li>
                            <li><span><img src="https://image.hongbeibang.com/FnuWoFzlqjbUFcZHkVG64M-cKA_N?48X48&imageView2/1/w/48/h/48" alt="" /></span><span className="list1_text">我的课程</span><span><img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt=""/></span></li>
                        </ul>
                    </div>
                    <div className="list_2">
                        <ul>
                            <li><span><img src="https://image.hongbeibang.com/FloihK3c4UsgFSSuiI6ZNNFiYWHN?48X48&imageView2/1/w/48/h/48" alt="" /></span><span className="list2_text">浏览记录</span><span><img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt=""/></span></li>
                            <li><span><img src="https://image.hongbeibang.com/FrIG0d-LU4bOADQE1euyCOGWO7Ep?48X48&imageView2/1/w/48/h/48" alt="" /></span><span className="list2_text">达人申请</span><span><img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt=""/></span></li>
                            <li><span><img src="https://image.hongbeibang.com/Fn2YVwr3Ng_AQlJvQCWtBoRBDyjR?48X48&imageView2/1/w/48/h/48" alt="" /></span><span className="list2_text">帮贡兑换</span><span><img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt=""/></span></li>
                        </ul>
                    </div>
                </div>
            </MyWrap>
        );
    }
}

export default My;