import React, { Component } from 'react';
import { HeaderWarp, BaikeWarp } from './styledOther'
import { withRouter } from 'react-router-dom'
import { get } from 'utils/http'
class Baike extends Component {
    state = {
        baikeList: []
    }
    hindleClick = () => {
        return this.props.history.push(`/home/study`);
    }

    async componentDidMount() {
        let baikeList = await get({
            url: '/api/education/getNewbieGuide?type=5&_t=1576935543870&csrfToken='
        })
        this.setState({
            baikeList: baikeList.data.courseGuide
        })
        console.log(this.state.baikeList);

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
                <BaikeWarp>
                    {this.state.baikeList.map((value) => <div key={value.educationCourseNewbieGuideId} className="baike_main">
                        <div className="baike_img">
                            <img src={value.image} alt="" />
                        </div>
                        <div className="baike_text">
                            {value.title}
                        </div>
                    </div>)}
                </BaikeWarp>
            </div>
        );
    }
}

export default withRouter(Baike);