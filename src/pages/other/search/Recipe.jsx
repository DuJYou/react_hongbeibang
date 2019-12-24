import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
// import Expert from './Expert'
// import Compre from './Compre'
import Most from './Most'
import { RecipeWarp } from './styledSearch'
import HeaderTabsWarp from './SearchRecipeHeader'
class Recipe extends Component {
    state = {
        sear: '',
        keyword:this.getPath(this.props)
    }
    getPath(props){
       let path= props.history.location.pathname.substr(1).split('/').pop()
       console.log(path);
       return path
    }
    //回车
    handleEnterKey = (e) => {
        if (e.nativeEvent.keyCode === 13) {
            this.props.history.push(`/other/search/recipe/${this.state.sear}`)
            this.setState({
                keyword:this.props.history.location.pathname.substr(1).split('/').pop()
            })
        }
    }
    //输入内容存起来
    changeEvent(e) {
        this.setState({
            sear: e.target.value
        })
    }
    //点击返回
    hindleClick = (value) => {
        return this.props.history.push(value);
    }
    render() {
        console.log(this.props);
        
        return (
            <div className="111" style={{ height: '100%' }}>
                <RecipeWarp>
                    <div className="header">
                        <div className="img" onClick={this.hindleClick.bind(this, '/other/search')}>
                            <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" />
                        </div>
                        <div className="search">
                            <input
                                type="text"
                                placeholder="搜索食谱/食材，烘焙/家常菜一应俱全"
                                onChange={(e) => this.changeEvent(e)}
                                onKeyPress={this.handleEnterKey} />
                        </div>
                        <div className="text" onClick={this.hindleClick}>
                            <div className="sp">食谱</div>
                            <div className="spImg">
                                <img src="https://image.hongbeibang.com/FnX5qtpWKlcHoDYC5KDFHulWfEZl?32X32&imageView2/1/w/32/h/32" alt="" />
                            </div>
                        </div>
                    </div>
                    <HeaderTabsWarp></HeaderTabsWarp>
                </RecipeWarp>
                <div style={{ height: '100%' }}>
                    <Most keyword={this.state.keyword}></Most>
                </div>
            </div>
        );
    }
}

export default withRouter(Recipe);