import { styled } from "styled-components";

export const Filter = styled.div`
     background-color: ${props => props.theme.primary};
     display: flex;
     width: 100%;
     height: 100%;
     position: absolute;
     opacity: .5;
     z-index: 2;
`