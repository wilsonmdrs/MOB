import { styled } from 'styled-components'

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`

export const Icon = styled(FontAwesomeIcon)`
  && {
    display: flex;
    font-size: 16px;
    min-width: 50px;
    color: ${(props) => (props.theme.primary ? props.theme.primary : "#fff")};
    justify-content: center;
    z-index: 7;
  }
`;