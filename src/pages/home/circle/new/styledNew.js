import styled from 'styled-components'

import border from 'assets/style/border'

export const NewMain=styled.div`
height:100%;
padding-bottom:.8rem;
/* overflow-x:scroll; */
.main{
    height:100%;
}
`
export const Main=styled.div`
height:7rem;
`
export const SwiperTextWrap=styled.div`
height:.548rem;
margin-bottom:.1rem;
background:#fff;
.banner{
    width:100%;
    height:.35rem;
    padding: .1rem 0;
    .swiper-container {
        height:.45rem;
        .swiper-slide{
            height:.35rem;
            font-size:.15rem;
            line-height: 21px;
            text-align: center;
            margin-right: 8px;
            border-radius: 4px;
            padding: 7px 10px;
            background:#94BFBB;
            /* width:.7rem !important; */
            /* overflow: hidden; */
        }
        .swiper-scrollbar{
            margin-top:.1rem;
            position: absolute;
            left: 1%;
            bottom: 0px;
        }
    }
}

`
export const ContentWrap=styled.div`
background-color: #FFFFFF;
.Contentlist{
    height:100%;
    .userlist{
        margin: 10px 15px;
        overflow: hidden;
        position: relative;
        top:10px;
        .userImg{
            width: 38px;
            height: 38px;
            img{
                border-radius: 50%;
                width: 100%;
                height: 100%;
            }
        }
        .userName{
            overflow: hidden;
            height: 20px;
            display: inline-block;
            max-width: 66%;
            margin-right: 0;
            font-size: 13px;
            line-height: 20px;
            text-align: left;
            color: #4A4945;
            text-overflow: ellipsis;
            position: absolute;
            top:0;
            left:40px;
        }
        .userTime{
            text-align: left;
            font-size: 12px;
            height: 20px;
            line-height: 20px;
            color: #999999;
            overflow: hidden;
            text-overflow: ellipsis;
            position: absolute;
            top:20px;
            left:40px;
        }
    }
    .content{
        /* margin-bottom: 11px; */
        margin: 0 11px 11px 11px;
        .contentText{
            margin: 22px 15px 11px 22px;
            font-size: 14px;
            color: #4A4945;
            line-height: 20px;
            max-height: 80px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .imgList{
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            .contentImg{
                width: 219px;
                height: 292px;
                >img{
                    width: 100%;
                    height: 100%;
                }
            }
            .two{
                width: 45%;
                height: 1.69rem;
                margin:.05rem;
                >img{
                    width: 100%;
                    height: 100%;
                }
            }
            .three{
                width: 30%;
                height: 1.1rem;
                margin:.05rem;
                >img{
                    width: 100%;
                    height: 100%;
                }
            }
            .four{
                width: 30%;
                height: 1.1rem;
                margin:.1rem;
            .four:nth-child(2){
                margin-right:.2rem;
            }
                >img{
                    width: 100%;
                    height: 100%;
                }
            }
            .other{
                width: 30%;
                height: 1.1rem;
                margin:.05rem;
                >img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        
    }
    .kind{
        margin-bottom: 15px;
        margin: 0 15px;
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
    .handle{
        display:flex;
        height: 30px;
        box-sizing: border-box;
        margin: 10px 15px;
        border-top: 1px solid #E7E2E5;
        >div{
            flex:1;
            height: 20px;
            line-height: 20px;
            margin-top: 4px;
            text-align:center;
            border-top:1px ;  
            >.handleImg{
                display: inline-block;
                width: 19px;
                height: 19px;
                img{
                    width:100%;
                }
            }
            >.handleText{
                font-size: 12px;
                color: #999999;
                margin-left: 5px;
                vertical-align: middle;
                display: inline-block;
            }           
        }
         >:first-child{
            border-right:1px solid #E7E2E5;
        }
         >:last-child{
            border-left:1px solid #E7E2E5;
        }  
    }

}
`


export const SwiperWrap=border(styled.div`
background:#fff;
touch-action: none;

.banner{
    width:100%;
    /* margin-bottom: .15rem; */
    /* padding:.05rem 0; */
    .swiper-container {
        width:100%;
        height: .955rem;
        .swiper-slide{
            width:1.6rem !important;
            height:.855rem;
            margin: 0 .05rem;
            position: relative;
            img{
                width:100%;
                height:100%;
            } 
        }   
        .swiper-scrollbar{
            position: absolute;
            left: 1%;
            bottom: 0px;
        }
    }  
}

`)

