import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Title = styled.h3`
  font-size: 1rem;
  color: ${(props) => props.theme.text_base};
  font-weight: 300;
  padding-bottom: 10px;
  width: 200px;
  border-bottom: 2px solid  ${(props) => props.theme.primary};
  margin-bottom: 10px;
`;

export const Card = styled(Link)`
  && {
    display: flex;
  flex-direction: column;
  gap: 10px;
  width: 120px;
  height: 120px;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  &:hover {
    transition: 0.5s ease-in-out;
    transform: scale(1.1);
  }
  }
`;

export const ChatMenuContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px 10vw;
  gap: 15px;
  opacity:.9;
  background-color: ${(props) => props.theme.gray_950};

`;
export const CardContainer = styled.div`
  display: flex;
  border-radius: 8px;
  cursor: pointer;
  opacity: 1;
  gap: 50px;
  z-index: 5;
  background-color: transparent;
`;
export const Icon = styled(FontAwesomeIcon)`
  && {
    font-size: 50px;
    z-index: 5;
    opacity: 1;
    color: ${(props) => props.theme.primary};
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.primary};
  z-index: 6;
  margin: 0;
  font-weight: 300;

`;
export const Filter = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  opacity: 0.3;
  border-radius: 8px;
  z-index: 1;
  background-color: ${(props) => props.theme.gray_300};
`;
