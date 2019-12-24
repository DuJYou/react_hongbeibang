import styled from 'styled-components'

export const CircleWrap=styled.div`

.header{
    display: flex;
    flex-direction:row;
    background: #fff;
    height:.44rem;
    justify-content:space-around ;
    span{
        flex:1;
        width: .27rem;
        height: .27rem;
        margin: -0.07rem 0 0 .18rem;
        font-size: 0.35rem;
        color: #000;
    }
    .Tabs{
        flex:4;
        text-align: center;
        cursor: pointer;
        
        box-sizing: border-box;
        width: 65px;
        line-height: 44px;
        height: 44px;
        font-size: 16px;
        color: #999999;
        .am-whitespace.am-whitespace-md{
            height:0;
        }
         .am-tabs-default-bar-tab-active{
            color: #4A4945;
            font-weight: bold;
           
            
        }
        .am-tabs-default-bar-underline{
            border:1px solid #E98B71;
            border-radius: 20px;
        }
     
    }
    .img{
        flex:1;
        font-size: 0;
        height: .44rem;
        display: inline-block;
        cursor: pointer;
        text-align: center;
        img{
            width: .27rem;
            height: .27rem;
            margin: .095rem .18rem;  
        }
    }
}
`

export const HeaderWrap =styled.div`
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
            left: 26px;
            width: 20px;
            height: 2px;
            margin: -5px auto 0 auto;
            border-radius: 20px;
            background-color: #E98B71;
        }
`