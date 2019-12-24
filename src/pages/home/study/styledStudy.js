import styled from 'styled-components'

export const StudyWrap = styled.div `
background: #fff;
overflow-x:hidden ;
height:100%;
.main{
    height:100%;
    display:flex;
    flex-direction:column;
}
`
export const Main = styled.div `
flex:1;
overflow-y:scroll;
`

export const HeaderWrap = styled.div `
height:.44rem;
span{
    width: .27rem;
    height: .27rem;
    margin: -0.07rem 0;
    font-size: 0.35rem;
    color: #000;
}
.box{
    display:flex;
    background: #FFFFFF;
    height: .44rem;
    /* z-index: 6; */
    /* position: fixed; */
    top: 0;
    left: 0;
    right: 0;
    padding: 0 .18rem;
    margin: 0 auto;
    max-width: 6.00rem;
    box-sizing: border-box;
    flex-direction:row;
}
.search{
    height: .35rem;
    margin:  auto;
    border-radius: 4px;
    zoom: 1;
    background-color: #F5F7F9;
    box-sizing: border-box;
    padding: 0 10px;
    cursor: pointer;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999999;
    font-size: 12px;
    vertical-align: middle;
    text-overflow: ellipsis;
    overflow: hidden;
    div{
        width:.17rem;
        height:.17rem;
        img{
            width: 100%;
            height:100%;
        }
    }
}
.img{
    font-size: 0;
    height: .44rem;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    img{
    width: 27px;
    height: 27px;
    margin: 9.5px 0
    
}
}

`

export const NavWrap = styled.div `
    .headerNav {
        display:flex;
        li{
            position: relative;
            display: flex;
            vertical-align: middle;
            text-align: center;
            box-sizing: border-box;
            width: 25%;
            font-size: 0;
            padding: .10rem 0;
            flex-direction:column;
        }
    }
    .navImg{
        display: inline-block;
        width: .45rem;
        height: .45rem;
        font-size: 0;
        overflow: hidden;
        margin-left: .25rem;
        img{
            width:100%
        }
    }
    .text{
        font-size: .12rem;
        color: #4A4945;
        margin-top: .05rem;
        line-height: .16rem;
    }

`