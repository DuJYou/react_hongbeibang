import React, { Component } from 'react';
import { SearchWarp } from './styledSearch'
import { withRouter } from 'react-router-dom'
import { get } from 'utils/http'
class Search extends Component {
    state = {
        popularSearch: [],
        sear: '',
        v: ''
    }
    //点击进入下一个页面
    hindleClick = (value) => {
        return this.props.history.push(`${value}/${this.state.sear}`)
    }

    hindleClick1=(value)=>{
        this.props.history.push(`/other/search/recipe/${value.keyword}}`)
      
        
    }
    //监听回车
    handleEnterKey = (e) => {
        if (e.nativeEvent.keyCode === 13) {
            this.props.history.push(`/other/search/recipe/${this.state.sear}`)
        }
    }
    //输入内容
    changeEvent(e) {
        this.setState({
            sear: e.target.value
        })
    }
    async componentDidMount() {
        let hot = await get({
            url: '/api/keyword/detail?_t=1576835565247&csrfToken='
        })
        this.setState({
            popularSearch: hot.data.popularSearch
        })

    }
    render() {
        return (
            <div className="search_mian" style={{ height: '100%' }}>
                <SearchWarp>
                    <div className="header">
                        <div className="img" onClick={this.hindleClick.bind(this, '/home/study')}>
                            <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" />
                        </div>
                        <div className="search">
                            <input
                                type="text"
                                placeholder="搜索食谱/食材，烘焙/家常菜一应俱全"
                                onChange={(e) => this.changeEvent(e)}
                                onKeyPress={this.handleEnterKey}
                            />
                        </div>
                        <div className="text" onClick={this.hindleClick.bind(this, '/other/search/recipe')}>
                            搜索
                        </div>
                    </div>
                    <div className="searchType">
                        <div className="hotSearchTitle">
                            热门搜索
                        </div>
                        <div className="hotSearchbox">
                            {this.state.popularSearch.map((value) =>
                                <div className="hotSearch" key={value.popularSearchId} onClick={this.hindleClick1.bind(this,value)}>
                                    {value.keyword}
                                </div>)}
                        </div>
                        <div className="latelySearchTitle">
                            最近搜索
                            </div>
                        <div className="latelySearchbox">
                            <div className="latelySearchList" >
                            </div>
                        </div>
                    </div>
                </SearchWarp>
            </div>

        );
    }
}

export default withRouter(Search);