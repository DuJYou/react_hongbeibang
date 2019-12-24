import styled from 'styled-components'

export const SwiperWrap = styled.div `
h2{
    font-size: .17rem;
    line-height: .24rem;
    color: #313131;
    vertical-align: middle;
    display: inline-block;
    margin-left: .15rem;
    font-weight: bold;
    padding-top: 25px;
    padding-bottom: 10px;
}

.banner{
    width:100%;
    margin-bottom: .15rem;
    .swiper-container {
        width:100%;
        height: 2.7rem;
        .swiper-slide{
            width:1.6rem !important;
            height:100%;
            margin: 0 .05rem;
            position: relative;
            img{
                width:100%;
                height:2.25rem;
            }
            .swiper_text{
                color: #4A4945;
                font-weight: bold;
                font-size: 15px;
                line-height: 20.25px;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                word-break: break-all;
                text-overflow: ellipsis;
                white-space: normal;
            }
            .people{
                position: absolute;
                left: 0;
                bottom: 53.5px;
                font-size: 11px;
                margin: 0 10px;
                padding: 2px 4px;
                border-radius: 4px;
                overflow: hidden;
                color: #4A4945;
                background-color: #fff;
            }
        }
       
    }  
}
`