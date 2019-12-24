import React, { Component } from 'react';
import {UploadingWarp} from './styledOther'
import {withRouter } from 'react-router-dom'
class Uploading extends Component {

    hindleClick=()=>{
        return this.props.history.push(`/home/study`);
         

    }
    render() {
        return (
            <UploadingWarp>
                <div className="x" onClick={this.hindleClick}>
                    <img src="https://image.hongbeibang.com/FvpCr89mpooArX7SM26_s5CqdeNL?imageMogr2/strip/thumbnail/640x640" alt=""/>
                </div>
               
                <div className="img_cookbook">
                    <img src="https://image.hongbeibang.com/Fnz_NOU0VlNn-t_hLcXFbatBze_C?imageMogr2/strip/thumbnail/640x640" alt=""/>
                    <span>上传食谱</span>
                </div>
                <div className="img_photo">
                    <img src="https://image.hongbeibang.com/Fnz_NOU0VlNn-t_hLcXFbatBze_C?imageMogr2/strip/thumbnail/640x640" alt=""/>
                    <span>上传照片</span>
                </div>
               
                <div className="draft">
                    草稿箱
                </div>
            </UploadingWarp>
        );
    }
}

export default withRouter(Uploading);