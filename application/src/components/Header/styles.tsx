import { styled } from "styled-components";
import ProfileImage from '../../assets/imgs/profile-image.jpeg'
export const HeaderContainer = styled.header`
    display: flex;
    background-color: ${props => props.theme.gray_800};
    z-index: 2;
    padding: 12px;
    justify-content: space-between;
    height: 10%;
`

export const LogoImage = styled.img`
    transform: scale(.8);
`

export const Circle = styled.span`
    width:40px;
    height:40px;
    border-radius: 50%;
    background-image: url(${ProfileImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 2px solid ${props => props.theme.primary}
`