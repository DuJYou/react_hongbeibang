import styled from 'styled-components'
export const IndexWarp = styled.div `
height:100%;
background: #fff;
`
export const UploadingWarp = styled.div `
height:100%;
background: #fff;
position: relative;
.x{
    width: 27px;
    height: 27px;
    position: absolute;
    top: 10px;
    left: 15px;
    >img{
        width: 100%;
        height: 100%;
    }
}
.img_cookbook{
    width: 125px;
    height: 145px;
    position: absolute;
    left: 37.5px;
    bottom: 139px;
    display:flex;
    flex-direction:column;
    >img{
        width: 100%;
    }
    >span{
        font-size: 14px;
        text-align:center;
    }
}
.img_photo{
    width: 125px;
    height: 145px;
    position: absolute;
    left: 214px;
    bottom: 139px;
    display:flex;
    flex-direction:column;
    >img{
        width: 100%;
    }
    >span{
        font-size: 14px;
        text-align:center;
    }
}
.draft{
    margin: 0 auto;
    height: 54px;
    border-top: 1px solid;
    border-top-color: #E7E2E5;
    background-color: #FFFFFF;
    cursor: pointer;
    text-align: center;
    position: fixed;
    bottom: 0;
    right: 15px;
    left: 15px;
    z-index: 3;
    max-width: 570px;
    font-size: 16px;
    line-height: 54px;
    vertical-align: middle;
    color: #4A4945;
}
`

export const HeaderWarp = styled.div `
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
`

export const UniveWarp = styled.div `
background: #FFFFFF;
height: 100%;
    display: flex;
    flex-direction: column;
.header{
    height: 44px;
    display:flex;
    padding: 0 18px;
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
.main{
    flex:1;
        overflow-x: hidden;

 
}
`
export const BaikeWarp = styled.div `
    overflow-x:hidden;
    height: 100%;
    background-color: #fff;
    flex-direction: column;
    margin-bottom: 140px;
    .baike_main{
        display: flex;
        padding: 15px 0;
        margin: 0 15px;
        border-bottom-color: #F5F7F9;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        flex-direction: row;
        .baike_img{
            width: 130px;
            background: none;
            height: 80px;
            >img{
                width:100%;
                height:100%;
            }
        }
        .baike_text{
            margin-left: 15px;
            margin-top: 5px;
            font-size: 16px;
            line-height: 22.5px;
            color: #313131;
        }
    }
`

export const InformationWarp = styled.div `
background: #FFFFFF;
height:100%;
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
    .text{
        width: 100%;
        height: 44px;
        line-height: 44px;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        padding: 0 90px;
        margin: 0 auto;
        box-sizing: border-box;
        color: #4A4945;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
.list{
    margin: 0;
    padding: 0;
    height:100%;
    letter-spacing: 0.5px;
    overflow: hidden;
    background-color: #FFFFFF;
    >ul{
        >li{
            position: relative;
            height: 54px;
            padding: 15px 0;
            cursor: pointer;
            box-sizing: border-box;
            >.li_d{
                width:84%;
                display: inline-block;
                border-bottom: 1px solid;
                border-bottom-color: #E7E2E5;
                position: relative;
            }
            >span:first-child{
                display: inline-block;
                width: 50px;
                height: 50px;
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
            .list1_title{
                vertical-align: middle;
                margin-right: 10px;
                line-height: 14px;
                width:100%;
                font-size: 14px;
                color: #4A4945;
                position: absolute;
                top:0px;
            }
           
            .list1_text{
                vertical-align: middle;
                margin-right: 10px;
                line-height: 14px;
                font-size: 14px;
                color: #4A4945;
                position: absolute;
                top:20px;
            }
            .fh{
                margin-left: 84%;
            }
                }
    }
}
   
 
`

export const ClassifyWarp = styled.div `
height: 100%;
display:flex;

.left{
    height: 100%;
    width: 20%;
    background: #F5F7F9;
    >ul{
        >li{
            width: 100%;
            font-size: 14px;
            height: 50px;
            line-height:50px;
            text-align:center;
            box-sizing: border-box;
            color: #4A4945;
            
        }
        .active{
            border-left: 3px solid #E98B71;
            background: #fff;
            }
    }
}
.right{
    height: 100%;
    width:80%;
    background:#fff;
    padding: 0 15px;
    margin: 0 auto;
    .right_box{
        .right_header{
            padding-top: .10rem;
            padding-bottom: .10rem;
            font-size: 12px;
            font-weight: bold;
            line-height: 22px;
            color: #313131;
            overflow: hidden;
        }
        .right_list{
            display:flex;
            flex-direction:row;
            flex-wrap: wrap;
            .right_con{
            display:flex;
            text-align: center;
            width: 33.333%;
            padding: 0px 0px 10px 0px;
            flex-direction:column;
            .img{
                width:.8rem;
                height:.8rem;  

                >img{
                    border-radius:4px;
                    width:100%;
                    height:100%;  
                } 
            }
            .right_text{
                font-size: 12px;
                color: #313131;
                margin-top: 5px;
            }
            }
        
        }
    }
   
}
`

export const DetailsWarp = styled.div `
height:100%;
padding: 0px;
max-width: 600px;
margin: 0 auto;
overflow-x: hidden;
padding-bottom: 50px;

.video{
    width: 375px !important;
    height: 210px !important;
    object-fit: contain;
    >video{
        width: 100%;
        height: 100%;
    }
    >img{
        width: 100%;
        height: 100%;
    }
    /* background: #000; */
}
.title{
    padding-top: 12px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 15px;
    background-color: #fff;
    .title_text{
        font-weight: bold;
        font-size: 20px;
        line-height: 28px;
        color: #313131;
    }
    .people{
        margin-top: 15px;
        .peole_img{
            display:inline-block;
            vertical-align: top;
            width: 27px !important;
            height: 27px !important;
            >img{
                width: 100%;
                height: 100%;
            }
            
        }
        .text{
                display:inline-block;
                font-size: 13px;
                line-height: 26.5px;
                color: #313131;
                >span{
                    display:inline-block;
                    color: #E98B71;
                }
            }
    }
}
.list{
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    background: #fff;
    .lists{
        margin-top: 10px;
        background-color: #FFFFFF;
        color: #676767;
        font-size: 13px;
        display: flex;
        .list_tap{
            .list_tap1{
                display: flex;
                align-items: center;
                .list_d{
                    align-items: center;
                    justify-content: center;
                    display: inline-flex;
                    height: 3px;
                    width: 3px;
                    border-radius: 1.5px;
                    background-color: #E98B71;
                }
                .list_z{
                    color: #676767;
                    font-weight: 200;
                    font-size: 13px;
                    margin-left: 5px;
                    margin-right: 15px;
                    line-height: 18.5px;
                }
            }
           
        }
        .list_tap2{
                margin-top: 5px;
                display: flex;
                align-items: center;
                .list_d{
                    align-items: center;
                    justify-content: center;
                    display: inline-flex;
                    height: 3px;
                    width: 3px;
                    border-radius: 1.5px;
                    background-color: #E98B71;
                }
                .list_z{
                    color: #676767;
                    font-weight: 200;
                    font-size: 13px;
                    margin-left: 5px;
                    margin-right: 15px;
                    line-height: 18.5px;
                }
            }
        
    
    .next{
            align-items: center;
            display: flex;
            justify-content: flex-end;
            margin-left: 0px;
            >img{
                width: 6.75px;
                height: 11.57px;
            }
        }
    }
}
.text_mian{
    .work_header{
        padding-top: 15px;
        padding-bottom: 20px;
        padding-left: 20px;
        padding-right: 17.5px;
        background-color: #fff;
        .work_header_title{
            display: flex;
            flex-direction: row;
            height: 22px;
            align-items: center;
            margin-top: 10px;
            background-color: #fff;
            padding: 0 0 12px 0;
            position: relative;
            .left{
                font-size: 17px;
                line-height: 24px;
                color: #313131;
                vertical-align: middle;
                display: inline-block;
                font-weight: bold;
            }
            .right{
                font-size: 15px;
                color: #999;
                line-height: 15px;
                font-weight: normal;
                position: absolute;
                right: 0;
            }
        }
        .work_header_img{
            overflow: hidden;
            overflow: ellipsis;
            .work_header_imgList{
                vertical-align: top;
                margin: 1.5px;
                box-sizing: border-box;
                font-size: 0;
                display: inline-flex;
                flex-direction: column;
                border-radius: 4px;
                >img{
                    background: none;
                    width: .81rem;
                    height: .81rem;
                }
            }
        }
    }
    .text_list{
        padding: .20rem;
        padding-right: .175rem;
        .text_list_title{
            font-weight: bold;
            font-size: 17px;
            line-height: .24rem;
            color: #313131;
            margin-bottom: .10rem;
        }
        .text_list_details{

        }
    }
    .teacher{
        background-color: #fff;
        padding: .20rem;
        padding-right: .175rem;
        .teacher_title{
            font-weight: bold;
            font-size: 17px;
            line-height: .24rem;
            color: #313131;
            margin-bottom: .10rem;
        }
        .teacher_list{
            display: inline-flex;
            justify-content: center;
            align-items: center;
            margin-top: .15rem;
            margin-bottom: .115rem;
            .teacher_img{
                width: .50rem;
                height: .50rem;
                background: none;
                >img{
                    width: 100%;
                    height: 100%;
                }
            }
            .teacher_name{
                font-size: 17px;
                color: #313131;
                display: inline-block;
                margin-left: 12px;
            }
        }
    }
}
.other_teacher{
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #fff;
    padding-bottom: 15px;
    .other_teacherHeader{
        display: flex;
        font-weight: bold;
        .other_title{
            margin: 0 auto;
            padding: 15px 0 10px 0;
            flex: 1;
            >div{
                font-size: 17px;
                line-height: 24px;
                color: #313131;
                vertical-align: middle;
                display: inline-block;
                margin-left: 20px;
            }
        }
        .all{
            padding-top: 18px;
            padding-right: 15px;
            >div{
                font-size: 15px;
                color: #999;
                line-height: 15px;
                font-weight: normal;
            }
        }
    }
}
.study{
    padding: 20px;
    padding-right: 17.5px;
    .study_title{
        width: 130px;
        height: 57.2px;
        background: none;
        >img{
            width: 100%;
            height: 100%; 
        }
    }
    .study_text{
        font-weight: 300;
        font-size: 14px;
        line-height: 22px;
        color: #313131;
    }
    .study_imgs{
        display: flex;
        flex-direction: row;
        margin-top: 15px;
        .study_img{
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            cursor: pointer;
            >div{
                flex: 1;
                justify-content: center;
                align-items: center;
                display: flex;
                flex-direction: column;
                cursor: pointer;
                >img{
                    width: 50px;
                height: 58px;
                background: none;
                }
                >span{
                    font-size: 12px;
                    color: #313131;
                }
            }
        }
    }
}
.foot{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 375px !important;
    height: 49px !important;
    margin: 0 auto;
    border-top: 1px solid;
    border-top-color: #F5F7F9;
    background-color: #fff;
    color: #fff;
    display: flex;
    flex-direction: row;
    z-index: 1000;
    .most{
        width: 69.5px;
        height: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        >img{
            width: 20.5px;
            height: 19px;   
        }
        >span{
            color: #313131;
            font-size: 11px;
            line-height: 15px;
            position: relative;
            top: 4px;
        }
    }
    .price{
        flex: 1;
        background-color: #E98B71;
        color: #fff;
        font-size: 15px;
        font-weight: bold;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        >div{
            color: #fff;
            font-size: 15px;
            font-weight: bold;
        }
    }
}
`

export const LessonWarp = styled.div `
height:100%;
padding: 0px;
max-width: 600px;
margin: 0 auto;
overflow-x: hidden;
padding-bottom: 50px;

.video{
    width: 375px !important;
    height: 210px !important;
    object-fit: contain;
    >img{
        width: 100%;
        height: 100%;
    }
    /* background: #000; */
}
.title{
    padding-top: 12px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 15px;
    background-color: #fff;
    .title_text{
        font-weight: bold;
        font-size: 20px;
        line-height: 28px;
        color: #313131;
    }
    .people{
        margin-top: 15px;
        .peole_img{
            display:inline-block;
            vertical-align: top;
            width: 27px !important;
            height: 27px !important;
            >img{
                width: 100%;
                height: 100%;
            }
            
        }
        .text{
                display:inline-block;
                font-size: 13px;
                line-height: 26.5px;
                color: #313131;
                >span{
                    display:inline-block;
                    color: #E98B71;
                }
            }
    }
}
.list{
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    background: #fff;
    .lists{
        margin-top: 10px;
        background-color: #FFFFFF;
        color: #676767;
        font-size: 13px;
        display: flex;
        .list_tap{
            .list_tap1{
                display: flex;
                align-items: center;
                .list_d{
                    align-items: center;
                    justify-content: center;
                    display: inline-flex;
                    height: 3px;
                    width: 3px;
                    border-radius: 1.5px;
                    background-color: #E98B71;
                }
                .list_z{
                    color: #676767;
                    font-weight: 200;
                    font-size: 13px;
                    margin-left: 5px;
                    margin-right: 15px;
                    line-height: 18.5px;
                }
            }
           
        }
        .list_tap2{
                margin-top: 5px;
                display: flex;
                align-items: center;
                .list_d{
                    align-items: center;
                    justify-content: center;
                    display: inline-flex;
                    height: 3px;
                    width: 3px;
                    border-radius: 1.5px;
                    background-color: #E98B71;
                }
                .list_z{
                    color: #676767;
                    font-weight: 200;
                    font-size: 13px;
                    margin-left: 5px;
                    margin-right: 15px;
                    line-height: 18.5px;
                }
            }
        
    
    .next{
            align-items: center;
            display: flex;
            justify-content: flex-end;
            margin-left: 0px;
            >img{
                width: 6.75px;
                height: 11.57px;
            }
        }
    }
}
.text_mian{
    .text_list{
        padding: .20rem;
        padding-right: .175rem;
        .text_list_title{
            font-weight: bold;
            font-size: 17px;
            line-height: .24rem;
            color: #313131;
            margin-bottom: .10rem;
        }
        .text_list_details{
            p{
                color: #313131;
                text-indent: 0;
                margin-top: 0;
                margin-bottom: 10;
                font-size: 16px;
                line-height: 25.5px;
                letter-spacing: 0.5px;
                margin-left: 0;
                margin-right: 0;
            }
            img{
                width: 337px;
                height: 188px;
            }
        }
    }
    .teacher{
        background-color: #fff;
        padding: .20rem;
        padding-right: .175rem;
        .teacher_title{
            font-weight: bold;
            font-size: 17px;
            line-height: .24rem;
            color: #313131;
            margin-bottom: .10rem;
        }
    }
}
.study{
    padding: 20px;
    padding-right: 17.5px;
    .study_title{
        width: 130px;
        height: 57.2px;
        background: none;
        >img{
            width: 100%;
            height: 100%; 
        }
    }
    .study_text{
        font-weight: 300;
        font-size: 14px;
        line-height: 22px;
        color: #313131;
    }
    .study_imgs{
        display: flex;
        flex-direction: row;
        margin-top: 15px;
        .study_img{
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            cursor: pointer;
            >div{
                flex: 1;
                justify-content: center;
                align-items: center;
                display: flex;
                flex-direction: column;
                cursor: pointer;
                >img{
                    width: 50px;
                height: 58px;
                background: none;
                }
                >span{
                    font-size: 12px;
                    color: #313131;
                }
            }
        }
    }
}
.foot{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 375px !important;
    height: 49px !important;
    margin: 0 auto;
    border-top: 1px solid;
    border-top-color: #F5F7F9;
    background-color: #fff;
    color: #fff;
    display: flex;
    flex-direction: row;
    z-index: 1000;
    .most{
        width: 69.5px;
        height: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        >img{
            width: 20.5px;
            height: 19px;   
        }
        >span{
            color: #313131;
            font-size: 11px;
            line-height: 15px;
            position: relative;
            top: 4px;
        }
    }
    .price{
        flex: 1;
        background-color: #E98B71;
        color: #fff;
        font-size: 15px;
        font-weight: bold;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        >div{
            color: #fff;
            font-size: 15px;
            font-weight: bold;
        }
    }
}
`


export const CircleDetailsWarp = styled.div`
height:100%;
.header{
    background: #FFFFFF;
    height: 44px;
    z-index: 6;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 18px;
    margin: 0 auto;
    max-width: 600px;
    box-sizing: border-box;
    .fh{
        font-size: 0;
        height: 44px;
        display: inline-block;
        cursor: pointer;
        text-align: center;
        position: absolute;
        left: 10px;
        z-index: 1;
        >img{
            width: 27px;
            height: 27px;
            margin: 9.5px 0;
        }
    }
    .sc{
        margin: 7px 0;
        position: absolute;
        right: 10px;
        top: 0;
        z-index: 1;
        height: 30px;
        >div{
            border: 1px solid;
            border-color: #E98B71;
            font-size: 14px;
            width: 70px;
            height: 30px;
            color: #E98B71;
            background-color: #fff;
            border-radius: 30px;
            cursor: pointer;
            line-height: 28px;
            text-align:center;
        }
    }
}
.main{
    margin: 0 auto;
    padding: 44px 0 10px 0;
    height: 100%;
    overflow-x: hidden;
    .main_header{
        .img{
            width: 375px;
            height: 249.902px;
            >img{
                width: 100%;
                height: 100%;
            }
        }
        .title{
            padding: 0 15px;
            margin: 0;
            overflow: hidden;
            .title_text{
                color: #4A4945;
                line-height: 35px;
                font-size: 25px;
                font-weight: bold;
                word-wrap: break-word;
                position: relative;
                margin: 15px 0;
            }
            .author{
                overflow: hidden;
                zoom: 1;
                border-top: 1px solid #F1F1F1;
                margin: 15px auto;
                padding-top: 19px;
                position: relative;
                .author_img{
                    width: 35px !important;
                    height: 35px !important;
                    padding: 0;
                    margin-right: 10px;
                    border-radius: 50%;
                    overflow: hidden;
                    box-sizing: border-box;
                    border: 1px solid;
                    border-color: #E7E2E5;
                    >img{
                        width: 34px;
                        height: 34px;
                    }
                }
                .author_name{
                    position: absolute;
                    left:40px;
                    top:15px;
                    font-size: 13px;
                    height: 40px;
                    line-height: 40px;
                    color: #4A4945;
                    overflow: hidden;
                    white-space: nowrap;
                }
                .author_gz{
                    border: 0px;
                    background-color: #E98B71;
                    color: #FFFFFF;
                    width: 70px;
                    height: 30px;
                    margin: 5px 0;
                    font-size: 14px;
                    border-radius: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    top:15px;
                    right:10px;
                }
            }
        }
    }
    .sheet{

    }
    .step{
        margin: 25px 15px;      
        .stepList{
            font-size: 0;
            padding: 15px 0;
            border-bottom: 1px solid;
            border-bottom-color: #F1F1F1;
            box-sizing: border-box;
            overflow: hidden;
            .title{
                margin: 0 auto;
                padding: 0;
                font-size: 16px;
                color: #313131;
                font-weight: bold;
                line-height: 25px;
                overflow: hidden;
            }
            .img{
                width: 346px;
                height: 230.802px;
                margin: 15px auto 0 auto;
                border-radius: 4px;
                overflow: hidden;
                >img{
                    width: 100%;
                    height: 100%;
                }
            }
            .text{
                letter-spacing: 1px;
                margin: 15px auto 0 auto;
                text-align: justify;
                color: #313131;
                letter-spacing: -0.5px;
                font-weight: 200;
                font-size: 18px;
                line-height: 27px;
            }
        }
        .tips{
            margin-left: 15px;
            margin-right: 15px;
            margin-top: 15px;
            font-size: 16px;
            color: #313131;
            font-weight: bold;
            line-height: 25px;
            overflow: hidden;
        }
        .tips_text{
            overflow: hidden;
            word-wrap: break-word;
            letter-spacing: 1px;
            margin: 0 15px 40px 15px;
            text-align: justify;
            margin-left: 15px;
            margin-right: 15px;
            margin-top: 10px;
            margin-bottom: 15px;
            font-size: 17px;
            line-height: 27px;
            color: #313131;
            font-weight: 200;

        }
        .up{
            margin: 0 15px;
            padding: 0;
            background-color: #E98B71;
            color: #FFFFFF;
            border: 1px solid;
            border-color: #E98B71;
            border-radius: 4px;
            text-align: center;
            }
            .img{
                display: inline-block;
                width: 24px;
                height: 24px;
                margin: 7px 10px 7px 0;
                >img{
                    width: 100%;
                    overflow: hidden;
                }
            }
            .text{
            display: inline-block;
            margin-left: 2px;
            text-align: center;
            vertical-align: middle;
        }
        }
        

    
    
}

`

export const DishDetailssWarp = styled.div`
.header{
    background: #FFFFFF;
    height: 44px;
    z-index: 6;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 18px;
    margin: 0 auto;
    max-width: 600px;
    box-sizing: border-box;
    .img{
        font-size: 0;
        height: 44px;
        display: inline-block;
        cursor: pointer;
        text-align: center;
        position: absolute;
        left:10px;
        z-index: 1;
        width: 27px;
        height: 27px;
        margin: 9.5px 0;
        >img{
            width: 100%;
            height: 100%;
        }
    }
    .name{
        width: 100%;
        height: 44px;
        line-height: 44px;
        position: absolute;
        left: 0;
        right: 0;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        padding: 0 90px;
        margin: 0 auto;
        box-sizing: border-box;
        color: #4A4945;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
.user{
    margin: 50px 15px;
    overflow: hidden;
    position: relative;
    .userImg{
        width: 40px;
        height: 40px;
        font-size: 0;
        margin-top:10px ;
        >img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    .userName{
        font-size: 13px;
        height: 20px;
        line-height: 20px;
        text-align: left;
        color: #4A4945;
        overflow: hidden;
        text-overflow: ellipsis;
        position: absolute;
        left:50px;
        top:10px;
    }
    .userTime{
        text-align: left;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
        color: #999999;
        position: absolute;
        left:50px;
        top:30px;
        >span{
            margin-right:5px;
        }
    }
    .userGz{
        width: 60px;
        margin: 5px 0;
        background-color: #FFFFFF;
        color: #E98B71;
        border: 1px solid;
        border-color: #E98B71;
        border-radius: 4px;
        position: absolute;
        right: 10px;
        top: 12px;
        text-align: center;
        font-size: 12px;
        line-height: 28px;

    }
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
.workName{
    margin: 10px 15px;
    font-size: 16px;
    font-weight: bold;
    line-height: 22px;
    color: #4A4945;
    overflow: hidden;
    position: relative;
    .text{
        font-size: 16px;
        font-weight: bold;
        line-height: 22px;
        color: #4A4945;
    }
    .most{
        display:flex;
        font-size: 14px;
        line-height: 22px;
        color: #999999;
        font-weight: 400;
        position: absolute;
        right:10px;
        top:0;
        .mostText{
            display: inline-block;
            vertical-align: middle;
            font-size: 14px;
            line-height: 22px;
            color: #999999;
            font-weight: 400;
        }
        .mostImg{
            width: 25px;
            height: 25px;
            >img{
                width: 100%;
                height: 100%;
            }
        }
    }
}
.action{
    background-color: #FFFFFF;
    height: 40px;
    padding: 0 15px;
    margin-top: 10px;
    box-sizing: border-box;
    .dz{
        margin: 10px 40px 4px 0;
        position: relative;
        text-align: left;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        line-height: 24px;
        height: 26px;
        font-size: 14px;
        color: #999999;
    }
    .ds{
        margin: 10px 0 4px 0;
        position: relative;
        text-align: left;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        line-height: 24px;
        height: 26px;
        font-size: 14px;
        color: #999999;
    }
    .comments{
        margin: 10px 0 4px 2rem;
        position: relative;
        text-align: left;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        line-height: 24px;
        height: 26px;
        font-size: 14px;
        color: #999999;
    }
    .active{
        color: #4A4945;
        font-weight: bold;
        ::after{
            width: 20px;
            height: 2px;
            margin: 0 auto;
            border-radius: 20px;
            background-color: #E98B71;
        }
    }
}
.commentsList{
    height: 190px;
    line-height: 190px;
    text-align: center;
    font-size: 14px;
    color: #999999;
    background-color: #FFFFFF;
}
.handle{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
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
`