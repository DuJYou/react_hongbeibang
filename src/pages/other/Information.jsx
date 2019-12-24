import React, { Component } from 'react';
import {InformationWarp} from './styledOther'
import { withRouter } from 'react-router-dom'
class Information extends Component {
    hindleClick = () => {
        return this.props.history.push(`/home/study`);
    }
    render() {
        return (
            <InformationWarp>
                <div className="header">
                    <div className="img" onClick={this.hindleClick}>
                        <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" />
                    </div>
                    <div className="text">
                        消息
                    </div>
                </div>
                <div className="list">
                    <ul >
                        <li><span><img src="https://image.hongbeibang.com/Ftdx-7eIhi9Q0sftcTq0UVWEuirw?100X100&imageView2/1/w/100/h/100" alt="" /></span><div className="li_d"><span className="list1_title">评论、作业 </span><span className="list1_text">回复帮友评论能获得更高人气</span><span className="fh"><img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="" /></span></div></li>
                        <li><span><img src="https://image.hongbeibang.com/FqMIqwGZn9O7-ndS9kBL4hi33xhs?100X100&imageView2/1/w/100/h/100" alt="" /></span><div className="li_d"><span className="list1_title">点赞、收藏  </span><span className="list1_text">来自你的作品、食谱</span><span className="fh"><img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="" /></span></div></li>
                        <li><span><img src="https://image.hongbeibang.com/FuOJf5yyIJiNCD69k1Yx26HzFuza?100X100&imageView2/1/w/100/h/100" alt="" /></span><div className="li_d"><span className="list1_title">打赏  </span><span className="list1_text">有人【打赏/答谢】了你，快看看吧</span><span className="fh"><img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="" /></span></div></li>
                        <li><span><img src="https://image.hongbeibang.com/Ft8GGq9vShlvCA9r9IvAqpnVAPv1?100X100&imageView2/1/w/100/h/100" alt="" /></span><div className="li_d"><span className="list1_title">问答  </span><span className="list1_text">有人回答了你的问题or评论了你</span><span className="fh"><img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="" /></span></div></li>
                        <li><span><img src="https://image.hongbeibang.com/FgAcylGmEqkrJl0exE4DFvyjN9_J?256X256&imageView2/1/w/100/h/100" alt="" /></span><div className="li_d"><span className="list1_title">官方消息  </span><span className="list1_text">系统消息 ｜7小时前</span><span className="fh"><img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="" /></span></div></li>
                    </ul>
                </div>

            </InformationWarp>
        );
    }
}

export default withRouter(Information);