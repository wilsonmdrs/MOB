import { styled } from "styled-components";

export const Footer = styled.footer`
    display: flex;
    padding: 10px;
    height: 5%;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.gray_900};
    z-index: 2;
    opacity: .9;
`

export const Text = styled.p`
    font-size: 12px;
    color: ${props => props.theme.white}
`