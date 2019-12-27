import styled from 'styled-components'

export const MyWrap = styled.div`
padding: 0px;
max-width: 600px;
height: 100%;
margin: 0 auto;
.hearder{
    background: #FFFFFF;
    height: 44px;
    padding: 0 18px;
    display:flex; 
    justify-content:flex-end;
    .set{
        width: 27px;
        height: 27px;
        margin: 9.5px 0;
        >img{
            width:100%;
            height:100%;
        }
    }
}
.userMain{
    height: 100%;
    overflow-x:scroll;
    .user{
        background: #fff;
        .userinfo{
            display:flex;
            flex-direction:row;
            .img{
                width:.78rem;
                height:.78rem;
                margin: 0 16px;
                >img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .userlist{
                margin-right: 15px;
                position: relative;
                .username{
                    max-width: 46%;
                    min-width: 176px;
                    height: 28px;
                    line-height: 28px;
                    vertical-align: middle;
                    color: #4A4945;
                    font-size: 20px;
                    box-sizing: border-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .ID{
                    font-size: 12px;
                    line-height: 16px;
                    color: #999999;
                    margin: 4px 0 10px 0;
                }
                .experience{
                    margin: 0;
                    font-size: 10px;
                    line-height: 14px;
                    color: #999999;
                    margin-bottom: 5px;
                }
                .more{
                    width: 23px;
                    height: 23px;
                    position: absolute;
                    right: -68px;
                    top: 28px;
                    >img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
        .fans{
            width:3rem;
            height:.41rem;
            margin: 20px 37px;
            box-sizing: border-box;
            position: relative;
            border-bottom: 1px solid;
            border-bottom-color: #E7E2E5;
            >ul{
                display: flex;
                flex-direction:row;
                text-align:center;
                >li:nth-child(2){
                    border-left:1px solid #E7E2E5;
                    border-right:1px solid #E7E2E5;
                }
                >li{
                    flex:1;
                    display: flex;
                    flex-direction:column;
                .fansNumber{
                    font-size: 14px;
                    color: #4A4945;
                    line-height: 20px;
                }
                >span:last-child{
                    font-size: 11px;
                    color: #999999;
                    line-height: 15px;  
                }

            }
        }
    }
        .works{
            background-color: #FFFFFF;
            height: 74px;
            padding-bottom: 9px;
            >ul{
                display: flex;
                flex-direction:row;
               
                >li{
                    flex:1;
                    display: flex;
                    flex-direction:column;
                    .workImg{
                        width:.4rem;
                        height:.4rem;
                        margin: 0 auto 8px auto;
                        vertical-align: middle;
                        >img{
                            width: 100%;
                            height: 100%;  
                        }
                        
                    }
                    >span:last-child{
                            line-height: 16px;
                            font-size: 12px;
                            color: #4A4945;
                            text-align:center;
                        }
                }
            }
        }    
    }
    
    .list_1{
            margin: 10px auto;
            >ul{
                background-color: #FFFFFF;
                margin: 0 auto;
                padding: 0 0 0 15px;
                >li{
                    position: relative;
                    height: 54px;
                    padding: 15px 0;
                    cursor: pointer;
                    box-sizing: border-box;
                    border-bottom: 1px solid;
                    border-bottom-color: #E7E2E5;
                    >span:first-child{
                        display: inline-block;
                        width: 24px;
                        height: 24px;
                        margin-right: 10px;
                        >img{
                            width: 100%;
                            height: 100%;  
                        }
                    }
                    >span:last-child{
                        display: inline-block;
                        width: 23px;
                        height: 23px;
                        position: absolute;
                        right:15px;
                        >img{
                            width: 100%;
                            height: 100%;  
                        }
                    }
                    .list1_text{
                        vertical-align: middle;
                        margin-right: 10px;
                        line-height: 14px;
                        font-size: 14px;
                        color: #4A4945;
                    }
                }
            }
        }
        .list_2{
            margin: 10px auto;
            padding-bottom:.5rem;
            >ul{
                background-color: #FFFFFF;
                margin: 0 auto;
                padding: 0 0 0 15px;
                >li{
                    position: relative;
                    height: 54px;
                    padding: 15px 0;
                    cursor: pointer;
                    box-sizing: border-box;
                    border-bottom: 1px solid;
                    border-bottom-color: #E7E2E5;
                    >span:first-child{
                        display: inline-block;
                        width: 24px;
                        height: 24px;
                        margin-right: 10px;
                        >img{
                            width: 100%;
                            height: 100%;  
                        }
                    }
                    >span:last-child{
                        display: inline-block;
                        width: 23px;
                        height: 23px;
                        position: absolute;
                        right:15px;
                        >img{
                            width: 100%;
                            height: 100%;  
                        }
                    }
                    .list2_text{
                        vertical-align: middle;
                        margin-right: 10px;
                        line-height: 14px;
                        font-size: 14px;
                        color: #4A4945;
                    }
                }
            }
        }
}
`


