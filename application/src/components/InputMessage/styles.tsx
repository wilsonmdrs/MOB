import { styled } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const InputGroup = styled.span`
    display: flex;
    width: 100%;
    border-radius:8px;
    height:auto;
    z-index: 4;
    position: relative;
    background-color: transparent;
`
export const Filter = styled.span`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${ props => props.theme.gray_900};
    border-radius:8px;
    opacity:.4;

`

export const Input = styled.input`
    display: flex;
    border:none;
    width: 100%;
    padding: 5px;
    padding-left:1.5rem ;
    height: 40px;
    border-radius:8px 0 0 8px;
    font-size:1rem;
    background-color: transparent;
    z-index:5;
    color: ${props => props.theme.text_base};
`

export const SendButton = styled.button`
    border: none;
    padding: 0 15px;
    background-color: transparent;
    border-radius:0 8px 8px 0;
    z-index:5;
`

export const SendIcon = styled(FontAwesomeIcon)`
    &&{
        font-size: 16px;
        cursor: pointer;
        z-index:5;
        color: ${ props => props.theme.primary};
        &:hover{
            transform: scale(1.1);
        }
    }
`