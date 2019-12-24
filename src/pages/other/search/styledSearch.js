import styled from 'styled-components'

export const SearchWarp =styled.div`
background: #FFFFFF;
.header{
    height: 44px;
    display:flex;
    padding: 0 18px;
    margin: 0 auto;
    max-width: 600px;
    box-sizing: border-box;
    .img{
        width: 27px;
        height: 27px;
        margin: 9.5px 0;
        >img{
            width:100%;
            height:100%;
        }
    }
    .search{
        width:240px;
        height: 35px;
        margin: 4.5px 20px;
    >input{
        height: 100%;
        margin: 0 auto;
        border-radius: 4px;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        background-color: #F5F7F9;
        padding: 5px 10px;
        width: 100%;
        line-height: 25px;
        color: #4A4945;
        font-size: 14px;
        border: none;
        outline: none;
    }
    }
    .text{
        margin: 7px 0;
        font-size: 16px;
        line-height: 30px;
        color: #4A4945;
    }
}
.searchType{
    .hotSearchTitle{
        margin: 15px;
        font-size: 14px;
        line-height: 20px;
        color: #999999;
        overflow: hidden;
    }
    .hotSearchbox{
        margin: 0 15px;
        padding: 0;
        list-style-type: none;
        overflow: hidden;
        .hotSearch{
            max-width: 100%;
            height: 32px;
            line-height: 32px;
            font-size: 16px;
            padding: 0 10px;
            text-align: center;
            margin-right: 10px;
            margin-bottom: 10px;
            border-radius: 100px;
            box-sizing: border-box;
            color: #4A4945;
            background-color: #F5F7F9;
            cursor: pointer;
            zoom: 1;
            display: inline-block;
            vertical-align: middle;
            overflow: hidden;
            text-overflow: ellipsis;
        } 
    }
    .latelySearchTitle{
            margin: 15px;
            font-size: 14px;
            line-height: 20px;
            color: #999999;
            overflow: hidden;
        }
        .latelySearchbox{
            margin: 0 15px;
            padding: 0;
            list-style-type: none;
            overflow: hidden;
            .latelySearchList{
                max-width: 100%;
                height: 32px;
                line-height: 32px;
                font-size: 16px;
                padding: 0 10px;
                text-align: center;
                margin-right: 10px;
                margin-bottom: 10px;
                border-radius: 100px;
                box-sizing: border-box;
                color: #4A4945;
                background-color: #F5F7F9;
                cursor: pointer;
                zoom: 1;
                display: inline-block;
                vertical-align: middle;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        
        }
}

`
export const RecipeWarp = styled.div`
background: #FFFFFF;

.header{
    height: 44px;
    display:flex;
    padding: 0 18px;
    margin: 0 auto;
    max-width: 600px;
    box-sizing: border-box;
    .img{
        width: 27px;
        height: 27px;
        margin: 9.5px 0;
        >img{
            width:100%;
            height:100%;
        }
    }
    .search{
        width:240px;
        height: 35px;
        margin: 4.5px 20px;
    >input{
        height: 100%;
        margin: 0 auto;
        border-radius: 4px;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        background-color: #F5F7F9;
        padding: 5px 10px;
        width: 100%;
        line-height: 25px;
        color: #4A4945;
        font-size: 14px;
        border: none;
        outline: none;
    }
    }
    .text{
        display:flex;
        margin: 7px 0;
       
        .sp{
            width:.3rem;
            font-size: 14px;
            line-height: 30px;
            color: #E98B71;
        }
        .spImg{
            width: 19px;
            height: 19px;
            margin: 3.5px 0;
            margin-left: 5px;
            >img{
                    width:100%;
                    height:100%;
                }
        }
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
export const ContentWarp = styled.div `
height:100%;
overflow-x: hidden;

.main{
    display:flex;
    flex-direction:row;
    background-color: #FFFFFF;
    padding: 0 15px 2.5px 15px;
    padding: 3px 0;
    .img{
        font-size: 0;
        width: 130px;
        height: 100px;
        margin-right: 15px;
        >img{
            width: 125px;
            height: 90px;
            border-radius: 4px;
        }
    }
    .textList{
        .title{
            font-size: 18px;
            font-weight: bold;
            color: #4A4945;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .ingredient{
            margin: 3px 0 5px 0;
            font-size: 10px;
            color: #4A4945;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .author{
            margin-top: 3px;
            font-size: 11px;
            color: #999999;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .number{
            font-size: 11px;
            color: #4A4945;
            margin-top: 3.75px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}
`