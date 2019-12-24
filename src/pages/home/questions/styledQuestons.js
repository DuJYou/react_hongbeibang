import styled from 'styled-components'
import border from 'assets/style/border'
export const Main = styled.div `
height:100%;
.main{
    height: 100%;
    overflow-x: scroll;
    padding-bottom:.6rem;
}
`
export const HeaderWarp = styled.div `
height:.44rem;
span{
    width: .32rem;
    height: .29rem;
    line-height: 30px;
    margin: 0.07rem 0;
    font-size: 16px;
    color: #E98B71;;
}
.header{
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
    height: 35px;
    width: 240px;
    margin: auto;
    margin-left:.175rem;
    border-radius: 4px;
    zoom: 1;
    background-color: #F5F7F9;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
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
export const HeaderTabsWarp = styled.div `
background: #fff;
display:flex;
flex-direction:row;
>li{
    flex:1;
    list-style:none;
    text-align:center;
    font-size: 16px;
    color: #999999;
    line-height: 44px;
    height: 44px;
   
}
    >.active{
        color: #4A4945;
        font-weight: bold;
        position: relative;
       
    } .active:before{
            content: "";
            display: block;
            position: absolute;
            bottom: 6px;
            left: 36px;
            width: 50px;
            height: 2px;
            margin: -5px auto 0 auto;
            border-radius: 20px;
            background-color: #E98B71;
        }
`
export const QuintessenceWrap = styled.div `
background: #fff;
padding: 0 15px;
.Quintessence{
    border-bottom: 1px solid;
    border-bottom-color: #E7E2E5;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 10px 0;
    .userinfo{
        position: relative;
        .img{
            width:.4rem;
            height:.4rem;
            >img{
                width:100%;
                height:100%;
                border-radius: 50%;
            }
        }
        .username{
            font-size: 13px;
            height: 40px;
            line-height: 40px;
            text-align: left;
            color: #4A4945;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            position: absolute;
            left:.45rem;
            top:0;
        }
    }
    .text{
        .textName{
            font-size: 18px;
            font-weight: bold;
            color: #4A4945;
            line-height: 25px;
            max-height: 50px;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        .textContent{
            font-size: 14px;
            color: #4A4945;
            line-height: 20px;
            margin: 5px 0 0 0;
            max-height: 60px;
            text-overflow: ellipsis;
            overflow: hidden
        }
    }
    .zan{
        font-size: 14px;
        line-height: 20px;
        color: #999999;
    }
}

`


export const Answer = border(styled.div `
    background: #fff;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 15px ;
    overflow-x:scroll;
    height:100%;
    .Answer{
        margin:.1rem 0;
.text{
    font-size: 18px;
    font-weight: bold;
    color: #4A4945;
    line-height: 25px;
    max-height: 50px;
    text-overflow: ellipsis;
    overflow: hidden;
}
.kind{
    margin-bottom: 15px;
    margin: 0px;
    background: #F5F7F9;
    position: relative;
    .kindImg{
            width: 70px;
            height: 70px;
            >img{
                width: 100%;
                height: 100%;
            }
        }
    .kindName{
        font-size: 14px;
        color: #313131;
        font-weight: bold;
        text-align: justify;
        text-overflow: ellipsis;
        overflow: hidden;
        position: absolute;
        left:.9rem;
        top:.1rem;
    }
    .kindAuthor{
        margin-top: 20px;
        font-size: 13px;
        color: #999;
        text-align: justify;
        text-overflow: ellipsis;
        overflow: hidden;
        position: absolute;
        left:.9rem;
        top:.2rem;
    }
}
.answer{
    position: relative;
    .answerNumber{
        
        margin-top:5px;
        height: 20px;
        font-size: 14px;
        line-height: 20px;
        color: #999999;
    }
    .answerContent{
        position: absolute;
        right:15px;
        bottom:-5px;
        .img{
            width: 19px;
            height:19px;
            display: inline-block;
            >img{
                width:100%;
                height:100%;
            }
        }
        .answerText{
            font-size: 14px;
            line-height: 20px;
            vertical-align: middle;
            display: inline-block;
            color: #E98B71;
           
        }
    }
}
}
`)