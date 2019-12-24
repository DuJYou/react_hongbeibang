import React, { Component } from 'react';
import { ContentWarp } from './styledSearch'
import { get } from 'utils/http'

import { connect } from 'react-redux'

const mapState = state => ({
    sort: state.other.sort
})
const mapDispatch = dispatch => ({
    loadData() {
        dispatch({
            type: 'loadDate',
        })
    }
})
class Most extends Component {
    state = {
        Mostlist: [],
        _t: '',
        csrfToken: '',
        pageIndex: '0',
        pageSize: '10',
        keyword: '',
        sort: '',
    }
    async componentDidMount() {
        // console.log(this.props);
        this.state.sort =this.props.sort
        this.state.keyword=this.props.keyword
        let most = await get({
            url: '/api/search/getMoreRecipe',
            params: {
                _t: '1576846636854',
                csrfToken: '',
                pageIndex: '0',
                pageSize: '10',
                keyword: this.state.keyword,
                sort:this.state.sort
            }
        })
        this.setState({
            Mostlist: most.data.search.list.recipe.data
        })
    }
    static getDerivedStateFromProps(props, state) {
        
        state.sort = props.sort
        state.keyword=props.keyword
        list()
        async function list() {
            let most = await get({
                url: '/api/search/getMoreRecipe',
                params: {
                    _t: '1576846636854',
                    csrfToken: '',
                    pageIndex: '0',
                    pageSize: '10',
                    keyword: state.keyword,
                    sort: state.sort,
                }
            })
            console.log(1,most);
            if(most.data===''){
                state.Mostlist=''
            }else{
                state.Mostlist = most.data.search.list.recipe.data
            }
        }
    }


    render() {
        // console.log(this.state.sort)
        return (
            <ContentWarp>
              
                {(this.state.Mostlist===''?'1':this.state.Mostlist.map((value) =>
                    <div key={value.contentRecipeId} className="main">
                        <div className="img"><img src={value.image} alt="" /></div>
                        <div className="textList">
                            <div className="title">{value.coverTitle}</div>
                            <div className="ingredient"> {value.material.map((value1) => <span key={value1.contentRecipeMaterialId}>{value1.name}、</span>)}</div>
                            <div className="author">{value.remark}</div>
                            <div className="number">{value.collectNum}人收藏{value.dishNum}人做过</div>
                        </div>
                    </div>
                ))}
            </ContentWarp>
        );
    }
}

export default connect(mapState, mapDispatch)(Most);