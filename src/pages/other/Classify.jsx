import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { get } from 'utils/http'
import { HeaderWarp } from './styledOther'
import { ClassifyWarp } from './styledOther'
class Classify extends Component {
    state = {
        leftList: [],
        rightList: [],
        rightHeader:[],
        rightcontent:[],
        cl: '-1',
        recommend:[],
        classifys:[]

    }
    hindleClick = () => {
        return this.props.history.push(`/home/study`);
    }
    hindleClick1(e) {
        this.setState({
            cl: e,
        })
        //点击左侧边框根据index获取对应的列表
        this.setState({
            rightHeader:this.state.leftList[e].list,
        })
    }
    //推荐
    hindleClick2(e) {
        this.setState({
            cl: e,
        })
    }

    async componentDidMount() {
        let result = await get({
            url: '/api/classify/get?_t=1576727984033&csrfToken='
        })
        //推荐
        let result1 = await get({
            url: '/api/classify/getRecommend?_t=1576758703745&csrfToken='
        })
        this.setState({
            leftList: result.data.classify,//左侧的列表
            rightList: result.data,//具体的列表
            recommend:result1.data,
            classifys:result1.data[0].classifys
        })
        // console.log(this.recommend);
    }
    render() {
        return (
            <div style={{ height: '100%' }}>
                <HeaderWarp>
                    <div className="header">
                        
                   
                    <div className="img" onClick={this.hindleClick}>
                        <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" />
                    </div>
                    <div className="search">
                        <input type="text" placeholder="搜索食谱/食材，烘焙/家常菜一应俱全" />
                    </div> 
                    </div>
                </HeaderWarp>
                <ClassifyWarp>
                    <div className="left">
                        <ul>
                            <li className={this.state.cl === '-1' ? 'active' : ''} onClick={() => this.hindleClick2('-1')} >推荐</li>
                            {this.state.leftList.map((value, index) => <li className={this.state.cl === index ? 'active' : ''} onClick={() => this.hindleClick1(index)} key={value.classifyId}>{value.name}</li>)}
                        </ul>
                    </div>
                    <div className="right">
                        {/* {this.state.recommend.map((value) => */}
                        {(this.state.cl==="-1"?this.state.recommend:this.state.rightHeader).map((value,index) =>
                        <div key={value+index} className="right_box">
                                <div className="right_header">
                                    {value.name}
                                </div>
                                <div className="right_list">
                                {(this.state.cl==="-1"?this.state.classifys:value.list).map((value1,index1) => 
                                    <div key={value1.modifyTime+index1+value1+3} className="right_con">
                                        <div className="img">
                                            <img src={value1.image} alt="" />
                                        </div>
                                        <div className="right_text">
                                            {value1.name}
                                        </div>
                                    </div>
                                
                              )}
                                </div>
                            </div>
                            ) }
                    </div>
                   
                </ClassifyWarp>
            </div>
        );
    }
}

export default withRouter(Classify);