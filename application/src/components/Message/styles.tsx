import { styled } from "styled-components";
import { AuthorType } from "../../redux/reducers/conversationReducer";

const shadow = `
    -webkit-box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.16);
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.16);
`;

const backgroundImage = (imageSource:string) => `
background-image: url(${imageSource});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

interface MessageProps {
  author: AuthorType
  image?:string
}

export const MessageContainer = styled.dl<MessageProps>`
  display: flex;
  flex-direction: row;
  padding: 10px;
  width:100%;
  padding: 0px 10vw;
  gap: 1rem;
`;

export const ContentContainer = styled.dl<MessageProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;
  border-radius: 8px;
  gap: 0.75rem;
  width:100%;
  height: auto;
  position: relative;
  ${shadow}
`;

export const Filter = styled.span`
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: ${ props => props.theme.gray_900};
    border-radius:8px;
    opacity:.6;
`


export const Author = styled.dt<MessageProps>`
  font-size: 0.875rem;
  font-weight: bold;
  width:50px;
  height: 50px;
  background-color: ${props => props.theme.gray_600};
  display: flex;
  ${props => props.image && backgroundImage(props.image)}
  align-items: center;
  border: 2px solid ${props => props.theme.primary};
  border-radius: 50%;
  color:${props => props.theme.white};
  font-size:25px;
  justify-content: center;
`;

export const TextMessage = styled.dd<MessageProps>`
    display: flex;
    word-wrap: break-word;
    padding: 15px;
    line-height:1.5rem;

    font-weight: 300;
    z-index: 5;
    flex-wrap: wrap;
    color: ${props => props.theme.text_base}
`;
