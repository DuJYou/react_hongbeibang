import React, { Component } from 'react';
import { ContentWarp } from './styledSearch'
import { get } from 'utils/http'
class Expert extends Component {
    state = {
        Mostlist: [],
        _t: '',
        csrfToken: '',
        pageIndex: '0',
        pageSize: '10',
        keyword: '肉',
        sort: 'dishNum'
    }

    async componentDidMount() {
        let most = await get({
            url: 'https://api.hongbeibang.com/search/getMoreRecipe',
            params: {
                _t: '1576846636854',
                csrfToken: '',
                pageIndex: '0',
                pageSize: '10',
                keyword: '肉',
                sort: 'dishNum'
            }
        })
       
        this.setState({
            Mostlist:most.data.search.list.recipe.data
        })
        // console.log(Mostlist);
    }
    render() {
        return (
 
                <ContentWarp>
                {this.state.Mostlist.map((value) =>
                    <div key={value.contentRecipeId} className="main">
                        <div className="img"><img src={value.image} alt="" /></div>
                        <div className="textList">
                            <div className="title">{value.coverTitle}</div>
                            <div className="ingredient"> {value.material.map((value1) => <span key={value1.contentRecipeMaterialId}>{value1.name}、</span>)}</div>
                            <div className="author">{value.remark}</div>
                            <div className="number">{value.collectNum}人收藏{value.dishNum}人做过</div>
                        </div>
                    </div>
                )}
            </ContentWarp> 
        );
    }
}

export default Expert;