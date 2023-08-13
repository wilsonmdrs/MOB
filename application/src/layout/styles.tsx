import { styled } from 'styled-components'
import BGImage from '../assets/imgs/bg-chat.jpeg'
export const ImageFilter = styled.main`
    display: flex;
    position: absolute;
    width:100%;
    height: 100%;
    z-index:0;
    filter: blur(10px);
    background-image: url(${BGImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`